from langchain_groq import ChatGroq
from dotenv import load_dotenv
from agents.shared import embedder, db_client as client

load_dotenv()

llm = ChatGroq(model="llama-3.1-8b-instant")

ANSWER_PROMPT = """
You are an HR assistant for Tata Steel employees. 
Answer the user's HR-related question using ONLY the 
context provided below.

If the answer isn't in the context, say you don't have 
that information and suggest they contact HR 
(hr@tatasteel.com, Extension 201).

If the user's question is in English,
answer entirely in English.

If the user's question is in Hindi,
answer entirely in Hindi.

if the user is using hindi using English letters
answer should also be in hindi using English letters.

Context:
{context}

User Question: {question}

Answer:
"""

SUFFICIENCY_CHECK_PROMPT = """
Given this user question and the retrieved context, 
determine if the context is SUFFICIENT to fully answer 
the question.

Question: {question}

Context:
{context}

Reply with ONLY one word: SUFFICIENT or INSUFFICIENT
"""

REFINE_QUERY_PROMPT = """
The following search query did not return enough useful 
information to answer the user's question:

Original question: {question}
Search query used: {query}

Generate ONE alternative search query (different wording/
keywords) that might find better matching HR information.
Return ONLY the new query text, nothing else.
"""

TRANSLATE_PROMPT = """
Translate this question to clear, simple English 
for a search query. If it's already in English, 
return it as is. Return ONLY the translated text, 
nothing else, no explanation.

Question: {question}
"""

def normalize_query(question):
    """HyDE-lite: translate to English before embedding search"""
    prompt = TRANSLATE_PROMPT.format(question=question)
    response = llm.invoke(prompt)
    return response.content.strip()

def search_chromadb(query, collections, n_results=6, max_distance=0.5):
    query_embedding = embedder.encode([query]).tolist()
    all_results = []

    for collection_name in collections:
        try:
            collection = client.get_collection(collection_name)
            results = collection.query(
                query_embeddings=query_embedding,
                n_results=n_results * 2
            )
            for i, doc in enumerate(results['documents'][0]):
                distance = results['distances'][0][i]
                if distance <= max_distance:
                    all_results.append({
                        "text": doc,
                        "source": results['metadatas'][0][i]['source'],
                        "collection": collection_name,
                        "distance": distance
                    })
        except Exception as e:
            print(f"Error searching {collection_name}: {e}")

    all_results.sort(key=lambda x: x['distance'])
    return all_results[:n_results]

def deduplicate(results, max_results=5):
    """
    Remove duplicate chunks while preserving the best-ranked ones.
    """
    seen = set()
    unique = []

    for r in results:
        if r["text"] not in seen:
            seen.add(r["text"])
            unique.append(r)

        if len(unique) >= max_results:
            break

    return unique

def check_sufficiency(question, context):
    prompt = SUFFICIENCY_CHECK_PROMPT.format(
        question=question, context=context
    )
    response = llm.invoke(prompt)
    return "SUFFICIENT" in response.content.upper()

def refine_query(question, original_query):
    prompt = REFINE_QUERY_PROMPT.format(
        question=question, query=original_query
    )
    response = llm.invoke(prompt)
    return response.content.strip()

def hr_agent(user_question, max_retries=1):
    """
    HR & Employee Support Agent
    Searches: hr_support collection only
    Uses HyDE-lite (query translation) for multilingual robustness
    """
    # Normalize query for better cross-language retrieval
    search_query = normalize_query(user_question)
    print(f"   🌐 Search query: '{search_query}'")

    query = search_query
    attempt = 0
    results = []

    while attempt <= max_retries:
        results = search_chromadb(
            query,
            collections=["hr_support"],
            n_results=10,
            max_distance=0.75
        )
        results = deduplicate(results)

        if not results:
            attempt += 1
            if attempt <= max_retries:
                query = refine_query(user_question, query)
                print(f"   🔄 Retrying with refined query: '{query}'")
                continue
            else:
                break

        context = "\n\n---\n\n".join([
            f"[Source: {r['source']}]\n{r['text']}"
            for r in results
        ])

        is_sufficient = check_sufficiency(user_question, context)

        if is_sufficient or attempt == max_retries:
            # Use ORIGINAL question for answer generation
            # so response language matches user's input
            prompt = ANSWER_PROMPT.format(
                context=context, question=user_question
            )
            response = llm.invoke(prompt)
            sources = list(set([r['source'] for r in results]))
            return {
                "answer": response.content,
                "sources": sources,
                "attempts": attempt + 1,
                "context": context
            }
        else:
            attempt += 1
            query = refine_query(user_question, query)
            print(f"   🔄 Context insufficient, retrying with: '{query}'")

    return {
        "answer": "I couldn't find specific information about this "
                   "in our HR documents. Please contact HR at "
                   "hr@tatasteel.com or Extension 201.",
        "sources": [],
        "attempts": attempt + 1
    }

# ── Quick test ──────────────────────────────
if __name__ == "__main__":
    test_questions = [
        "What is the promotion eligibility and what training do I need for it?",
        "Mujhe kitni casual leave milti hai?",
        "What documents do I need on my first day?",
        "What is the maternity leave policy?"
    ]

    for q in test_questions:
        print(f"\n{'='*60}")
        print(f"Q: {q}")
        result = hr_agent(q)
        print(f"A: {result['answer']}")
        print(f"Sources: {result['sources']}")
        print(f"Attempts: {result['attempts']}")