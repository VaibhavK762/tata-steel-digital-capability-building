from langchain_groq import ChatGroq
from dotenv import load_dotenv
from agents.shared import embedder, db_client as client

load_dotenv()

llm = ChatGroq(model="llama-3.1-8b-instant")

ROLE_COLLECTION = client.get_collection("role_knowledge")

ROLE_NAMES = sorted(
    {
        meta["role"]
        for meta in ROLE_COLLECTION.get(
            include=["metadatas"]
        )["metadatas"]
        if "role" in meta
    },
    key=len,
    reverse=True
)

ANSWER_PROMPT = """
You are the Tata Steel Knowledge Assistant.

Answer the user's question using ONLY the information
provided in the retrieved context.

Instructions:
1. Never use outside knowledge.
2. Never invent facts or numbers.
3. Start directly with the answer.
4. If the answer spans multiple retrieved sections,
   combine the relevant information into one response.
5. If the context contains statistics, dates, percentages,
   financial values, production figures, or other numbers,
   include them accurately.
6. For report-related questions (annual report, sustainability,
   financial performance, production, exports, EBITDA, capex,
   strategy, ESG, etc.), synthesize all relevant retrieved
   information into a well-structured summary. Include important
   numbers, comparisons, trends and explanations when available.
7. For SOP, safety or maintenance questions,
   provide clear step-by-step guidance if available.
8. For role-related questions,
   summarize the required responsibilities and skills.
9. If the requested information is not present in the retrieved
   context, clearly state that it is not available in the retrieved
   documents. Do not speculate or use outside knowledge.
10. Keep answers concise (80–180 words) unless the user
    requests more detail.
11. Multiple retrieved chunks may contain different parts of the answer.
    Read ALL retrieved context before answering and combine the relevant information.
12. Do not answer using only the first matching chunk.
13. When the retrieved context contains tables, convert the relevant
    rows into natural language instead of copying the table.

Context:
{context}

Question:
{question}

Answer:
"""

EXPAND_PROMPT = """
Rewrite the user's query into a better semantic search query.

Rules:
- Preserve the original meaning.
- Add closely related keywords.
- If it is a financial question, include words such as:
  annual report, revenue, EBITDA, profit, production,
  exports, capex, sustainability, financial performance.
- If it is a safety question, include safety-related terms.
- If it is a maintenance question, include equipment,
  troubleshooting, preventive maintenance,
  predictive maintenance.
- If it is a role question, include job role,
  NSQF, responsibilities, competencies and skills.
- Return ONLY the rewritten query.

Original question:
{query}

Search query:
"""

def detect_role(question):

    question = question.lower()

    for role in ROLE_NAMES:

        if role.lower() in question:
            return role

    return None

def get_target_collections(question):

    role = detect_role(question)

    if role:
        return ["role_knowledge"], role

    q = question.lower()

    safety_keywords = [
        "fire",
        "ppe",
        "chemical",
        "spill",
        "emergency",
        "evacuation",
        "helmet",
        "hazard",
        "accident",
        "pass",
        "extinguisher",
        "safety"
    ]

    report_keywords = [
        "annual report",
        "revenue",
        "profit",
        "ebitda",
        "sales",
        "production",
        "sustainability",
        "carbon",
        "co2",
        "financial"
    ]

    maintenance_keywords = [
        "maintenance",
        "lubrication",
        "bearing",
        "inspection",
        "preventive",
        "predictive",
        "machine"
    ]

    hr_keywords = [
        "leave",
        "vacation",
        "policy",
        "attendance",
        "joining",
        "joining formalities",
        "onboarding",
        "holiday",
        "salary",
        "hr"
    ]

    if any(k in q for k in safety_keywords):
        return ["knowledge_safety"], None

    if any(k in q for k in report_keywords):
        return ["knowledge_reports"], None

    if any(k in q for k in maintenance_keywords):
        return ["maintenance"], None

    if any(k in q for k in hr_keywords):
        return ["hr_support"], None

    return [
        "knowledge_reports",
        "knowledge_safety",
        "maintenance",
        "role_knowledge"
    ], None

def expand_query(query):
    """Expand query with related keywords for better retrieval"""
    prompt = EXPAND_PROMPT.format(query=query)
    response = llm.invoke(prompt)
    return response.content.strip()

def search_chromadb(
    query,
    collections,
    n_results=5,
    role=None,
    max_distance=0.75
):

    query_embedding = embedder.encode([query]).tolist()

    all_results = []

    for collection_name in collections:

        try:

            collection = client.get_collection(collection_name)

            if role and collection_name == "role_knowledge":
                results = collection.query(
                    query_embeddings=query_embedding,
                    n_results=40,
                    where={
                        "role": role
                    }
                )

            else:
                results = collection.query(
                    query_embeddings=query_embedding,
                    n_results=40
                )

            for i, doc in enumerate(results["documents"][0]):

                distance = results["distances"][0][i]

                if distance <= max_distance:

                    all_results.append({
                        "text": doc,
                        "source": results["metadatas"][0][i]["source"],
                        "collection": collection_name,
                        "distance": distance
                    })

        except Exception as e:
            print(f"Error searching {collection_name}: {e}")

    all_results.sort(key=lambda x: x["distance"])
    print("\n========== RETRIEVED DOCUMENTS ==========")

    for r in all_results:
        print(f"Source   : {r['source']}")
        print(f"Distance : {r['distance']:.4f}")
        print(r["text"][:250])
        print("----------------------------------------")

    return all_results

def deduplicate(results, max_results=10):
    """Remove duplicate chunks, keep best scoring"""
    seen = set()
    unique = []
    for r in results:
        if r['text'] not in seen:
            seen.add(r['text'])
            unique.append(r)
        if len(unique) >= max_results:
            break
    return unique

# Phrases that indicate the LLM couldn't find relevant info in context
_NOT_FOUND_PHRASES = [
    "i couldn't find",
    "not mentioned in",
    "not found in",
    "no information",
    "don't have that information",
    "is not provided in",
    "is not covered in",
    "not available in",
    "not present in the context",
    "context does not",
    "provided documents do not",
]

def _answer_used_context(answer_text: str) -> bool:
    """Return False if the LLM answer signals it couldn't use the retrieved context."""
    lower = answer_text.lower()
    return not any(phrase in lower for phrase in _NOT_FOUND_PHRASES)

def knowledge_sop_agent(user_question):
    """
    Knowledge & SOP Agent
    - Searches knowledge_sop + role_knowledge collections
    - Uses per-collection distance thresholds (see _COLLECTION_THRESHOLDS)
    - Uses query expansion for better retrieval when first pass yields nothing
    - Only reports sources that actually informed the answer
    """
    # Step 1: Search with original query
    collections, role = get_target_collections(
    user_question
    )

    results = search_chromadb(
        user_question,
        collections=collections,
        n_results=5,
        role=role
    )

    # Step 2: If no results, try expanded query
    if not results:
        expanded = expand_query(user_question)
        collections = [
            "knowledge_safety",
            "knowledge_reports",
            "maintenance",
            "role_knowledge",
            "hr_support"
        ]
        results = search_chromadb(
            expanded,
            collections=collections,
            n_results=5,
            role=role
        )

    # Step 3: If still nothing, return fallback
    if not results:
        return {
            "answer": "I couldn't find specific information about this "
                       "in our documents. Please contact your supervisor "
                       "or the relevant department for accurate guidance.",
            "sources": []
        }

    # Step 4: Deduplicate and build context
    results = deduplicate(results, max_results=10)
    context = "\n\n---\n\n".join([
        f"[Source: {r['source']}]\n{r['text']}"
        for r in results
    ])
    print("\n" + "=" * 80)
    print("RETRIEVED CHUNKS")
    print("=" * 80)

    for i, r in enumerate(results, 1):
        print(f"\nChunk {i}")
        print(f"Source     : {r['source']}")
        print(f"Collection : {r['collection']}")
        print(f"Distance   : {round(r['distance'], 4)}")
        print("-" * 60)
        print(r["text"][:600])
        print("-" * 60)

    # Step 5: Generate answer
    prompt = ANSWER_PROMPT.format(
        context=context,
        question=user_question
    )
    response = llm.invoke(prompt)
    answer_text = response.content

    # Step 6: Only report sources if the LLM actually used the context.
    # If the answer signals "not found", return empty sources to avoid
    # listing irrelevant files that weren't used to generate the response.
    if _answer_used_context(answer_text):
        sources = list(set([r['source'] for r in results]))
    else:
        sources = []

    return {
        "answer": answer_text,
        "sources": sources
    }

if __name__ == "__main__":
    test_questions = [
        "What is the contribution of exports as a percentage of the total turnover of the entity?"
    ]

    for q in test_questions:
        print(f"\n{'='*60}")
        print(f"Q: {q}")
        result = knowledge_sop_agent(q)
        print(f"A: {result['answer']}")
        print(f"Sources: {result['sources']}")