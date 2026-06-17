# verify_bug.py
from sentence_transformers import SentenceTransformer
import chromadb

embedder = SentenceTransformer('paraphrase-multilingual-MiniLM-L12-v2')
client = chromadb.PersistentClient(path="data/chroma_db")

query = "How many casual leaves I get?"
query_embedding = embedder.encode([query]).tolist()
collection = client.get_collection("hr_support")
results = collection.query(query_embeddings=query_embedding, n_results=6)

for i, doc in enumerate(results['documents'][0]):
    print(f"{results['distances'][0][i]:.3f} | {results['metadatas'][0][i]['source']}")
    print(f"  {doc[:100]}\n")