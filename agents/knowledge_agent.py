import chromadb
from sentence_transformers import SentenceTransformer
from langchain_groq import ChatGroq
from dotenv import load_dotenv

load_dotenv()

CHROMA_PATH = "data/chroma_db"

embedder = SentenceTransformer('paraphrase-multilingual-MiniLM-L12-v2')
client = chromadb.PersistentClient(path=CHROMA_PATH)
llm = ChatGroq(model="llama-3.1-8b-instant")

# ── Prompts ──────────────────────────────────────

ANSWER_PROMPT = """
You are a helpful assistant for Tata Steel employees. 
Answer the user's question using ONLY the context provided below.
If the answer isn't in the context, say you don't have that 
information and suggest they contact the relevant department.

Respond in the SAME language the user asked in 
(English or Hindi). Be concise and practical.

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
keywords) that might find better matching information.
Return ONLY the new query text, nothing else.
"""

# ── Core Search Function ──────────────────────────

def search_chromadb(query, collections, n_results=4, max_distance=0.45):
    """Search with a relevance cutoff"""
    query_embedding = embedder.encode([query]).tolist()
    all_results = []

    for collection_name in collections:
        try:
            collection = client.get_collection(collection_name)
            results = collection.query(
                query_embeddings=query_embedding,
                n_results=n_results * 2  # fetch extra, then filter
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

# ── Self-RAG + Agentic Helper Functions ───────────

def check_sufficiency(question, context):
    """Self-RAG: verify if retrieved context actually answers the question"""
    prompt = SUFFICIENCY_CHECK_PROMPT.format(
        question=question, context=context
    )
    response = llm.invoke(prompt)
    return "SUFFICIENT" in response.content.upper()

def refine_query(question, original_query):
    """Agentic: generate alternative search query"""
    prompt = REFINE_QUERY_PROMPT.format(
        question=question, query=original_query
    )
    response = llm.invoke(prompt)
    return response.content.strip()

# ── Main Agent Function ───────────────────────────

def knowledge_sop_agent(user_question, max_retries=1):
    """
    Knowledge & SOP Agent with Agentic retry + Self-RAG check
    """
    query = user_question
    attempt = 0
    results = []

    while attempt <= max_retries:
        results = search_chromadb(
            query,
            collections=["knowledge_sop", "role_knowledge"],
            n_results=4,
            max_distance=0.45
        )

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

        # Self-RAG: check if this context is actually sufficient
        is_sufficient = check_sufficiency(user_question, context)

        if is_sufficient or attempt == max_retries:
            # Generate final answer
            prompt = ANSWER_PROMPT.format(
                context=context, question=user_question
            )
            response = llm.invoke(prompt)
            sources = list(set([r['source'] for r in results]))
            return {
                "answer": response.content,
                "sources": sources,
                "attempts": attempt + 1
            }
        else:
            attempt += 1
            query = refine_query(user_question, query)
            print(f"   🔄 Context insufficient, retrying with: '{query}'")

    return {
        "answer": "I couldn't find specific information about this "
                   "in our documents. Please contact your supervisor "
                   "or the relevant department for accurate guidance.",
        "sources": [],
        "attempts": attempt + 1
    }

# ── Quick test ──────────────────────────────
if __name__ == "__main__":
    test_questions = [
        "What is the chemical spill procedure?",
        "What skills does a Heating Regulator need?",
        "Chemical spill ke time kya karna chahiye?",
        "What is the promotion eligibility and what training do I need for it?"
    ]

    for q in test_questions:
        print(f"\n{'='*60}")
        print(f"Q: {q}")
        result = knowledge_sop_agent(q)
        print(f"A: {result['answer']}")
        print(f"Sources: {result['sources']}")
        print(f"Attempts: {result['attempts']}")