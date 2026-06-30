# agents/maintenance_agent.py
from langchain_groq import ChatGroq
from dotenv import load_dotenv
from agents.shared import embedder, db_client as client

load_dotenv()

llm = ChatGroq(model="llama-3.1-8b-instant")

ANSWER_PROMPT = """
You are a maintenance support assistant for Tata Steel 
plant equipment. Answer using ONLY the context below.
If specific troubleshooting steps, thresholds, or contact 
details aren't in the context, say so and suggest 
contacting the Maintenance Supervisor (Extension 301).
Do not guess specific numbers or procedures.

Context:
{context}

Question: {question}

Answer:
"""
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

def detect_role(question):

    question = question.lower()

    for role in ROLE_NAMES:

        if role.lower() in question:
            return role

    return None

def search_chromadb(query, collections,role=None, n_results=5, max_distance=0.75):
    query_embedding = embedder.encode([query]).tolist()
    all_results = []

    for collection_name in collections:
        try:
            collection = client.get_collection(collection_name)
            if role and collection_name == "role_knowledge":
                results = collection.query(
                    query_embeddings=query_embedding,
                    n_results=20,
                    where={
                        "role": role
                    }
                )
            else:
                results = collection.query(
                    query_embeddings=query_embedding,
                    n_results=n_results
                )
            for i, doc in enumerate(results['documents'][0]):
                distance = results['distances'][0][i]
                if distance <= max_distance:
                    all_results.append({
                        "text": doc,
                        "source": results['metadatas'][0][i]['source'],
                        "distance": distance
                    })
        except Exception as e:
            print(f"Error searching {collection_name}: {e}")

    all_results.sort(key=lambda x: x['distance'])
    return all_results

def deduplicate(results, max_results=5):
    seen = set()
    unique = []

    for r in results:
        if r["text"] not in seen:
            seen.add(r["text"])
            unique.append(r)

        if len(unique) >= max_results:
            break

    return unique

def maintenance_agent(user_question):
    role = detect_role(user_question)

    results = search_chromadb(
        user_question,
        collections=["maintenance"],
        n_results=5,
        max_distance=0.75
    )

    if not results:

        results = search_chromadb(
            user_question,
            collections=["role_knowledge"],
            role=role,
            n_results=5,
            max_distance=0.75
        )

    if not results:
        return {
            "answer": "I couldn't find specific information about this. "
                       "Please contact the Maintenance Supervisor "
                       "(Extension 301).",
            "sources": []
        }
    results = deduplicate(results, max_results=5)

    context = "\n\n---\n\n".join([
        f"[Source: {r['source']}]\n{r['text']}"
        for r in results
    ])

    prompt = ANSWER_PROMPT.format(context=context, question=user_question)
    response = llm.invoke(prompt)
    sources = list(set([r['source'] for r in results]))

    return {
        "answer": response.content,
        "sources": sources,
        "context": context
    }

if __name__ == "__main__":
    test_questions = [
        "Crusher machine is vibrating abnormally, what should I do?",
        "What is the normal temperature range for equipment?",
        "Conveyor belt is slipping, what should I check?",
        "What is the PM frequency for the blast furnace?",
        "What are the critical equipment codes at the plant?",
        "At what vibration level should I stop equipment?",
        "What is the warning temperature threshold for sensors?",
        "What permits are needed before maintenance work?",
        "What is the LOTO procedure?",
        "When should I escalate a maintenance issue?",
        "Heating regulator is showing temperature fluctuation, what are the possible causes and steps?",
        "What is the difference between preventive and predictive maintenance?",
        "What spare parts should always be stocked for conveyors?",
        "Can you order spare parts for EQ001?",
        "Why did the blast furnace fail last Tuesday?"
    ]

    for q in test_questions:
        print(f"\n{'='*60}")
        print(f"Q: {q}")
        result = maintenance_agent(q)
        print(f"A: {result['answer']}")
        print(f"Sources: {result['sources']}")