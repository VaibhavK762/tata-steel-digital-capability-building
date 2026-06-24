# agents/shared.py
import chromadb
from sentence_transformers import SentenceTransformer

CHROMA_PATH = "data/chroma_db"

print("🤖 Initializing shared SentenceTransformer model...")
embedder = SentenceTransformer('paraphrase-multilingual-MiniLM-L12-v2')

print("📁 Initializing shared ChromaDB PersistentClient...")
db_client = chromadb.PersistentClient(path=CHROMA_PATH)
