# test_retrieval.py
import chromadb
from sentence_transformers import SentenceTransformer

client = chromadb.PersistentClient(path="data/chroma_db")
embedder = SentenceTransformer('paraphrase-multilingual-MiniLM-L12-v2')

def search(collection_name, query, n=3):
    collection = client.get_collection(collection_name)
    query_embedding = embedder.encode([query]).tolist()
    results = collection.query(
        query_embeddings=query_embedding,
        n_results=n
    )
    print(f"\n🔍 Query: {query}")
    print(f"Collection: {collection_name}\n")
    for i, doc in enumerate(results['documents'][0]):
        meta = results['metadatas'][0][i]
        print(f"--- Result {i+1} (source: {meta['source']}) ---")
        print(doc[:200] + "...\n")

# Test English
search("hr_support", "How many casual leave days do I get?")

# Test Hindi
search("hr_support", "mujhe kitni casual leave milti hai")

# Test maintenance
search("maintenance", "crusher machine vibration problem")

# Test role knowledge
search("role_knowledge", "what skills does heating regulator need")
