import os
import re
import chromadb
from pypdf import PdfReader
from sentence_transformers import SentenceTransformer

CHROMA_PATH = "data/chroma_db"

print("Loading multilingual embedding model...")
embedder = SentenceTransformer('paraphrase-multilingual-MiniLM-L12-v2')
print("✅ Embedding model loaded\n")

client = chromadb.PersistentClient(path=CHROMA_PATH)

# ── Restructured Collections (no duplicate NSDC embedding) ──
COLLECTIONS = {
    "knowledge_sop": {
        "paths": [
            "data/documents/tata_annual_report_2025.pdf",
            "data/documents/sustainability_2024.pdf",
            "data/documents/safety_manual.pdf"
        ],
        "chunk_size": 250,
        "overlap": 50
    },
    "role_knowledge": {
        "paths": [
            "data/documents/nsdc_pdfs"
        ],
        "chunk_size": 200,
        "overlap": 40
    },
    "maintenance": {
        "paths": [
            "data/documents/maintenance_manual.pdf"
        ],
        "chunk_size": 180,
        "overlap": 40
    },
    "hr_support": {
        "paths": [
            "data/documents/hr_policy.pdf",
            "data/documents/leave_policy.pdf",
            "data/documents/onboarding_doc.pdf"
        ],
        "chunk_size": 120,
        "overlap": 30
    }
}

# ── Section-aware splitting ──────────────────────────
SECTION_PATTERN = re.compile(
    r'(?=###?\s*Section\s+\d+)', re.IGNORECASE
)

def split_by_section(text):
    """Split text into sections if headers exist, else return whole text as one block"""
    parts = SECTION_PATTERN.split(text)
    parts = [p.strip() for p in parts if p.strip()]
    return parts if len(parts) > 1 else [text]

def chunk_words(text, chunk_size, overlap):
    """Word-based chunking within a section"""
    words = text.split()
    chunks = []
    start = 0
    while start < len(words):
        end = start + chunk_size
        chunk = ' '.join(words[start:end])
        if chunk.strip():
            chunks.append(chunk)
        start += chunk_size - overlap
    return chunks

def chunk_text_section_aware(text, chunk_size, overlap):
    """
    First split by section headers (structure-aware).
    Then sub-chunk any section still longer than chunk_size.
    """
    sections = split_by_section(text)
    final_chunks = []

    for section in sections:
        word_count = len(section.split())
        if word_count <= chunk_size * 1.3:
            # Section fits in one chunk (with some tolerance)
            final_chunks.append(section)
        else:
            # Section too long, sub-chunk it
            sub_chunks = chunk_words(section, chunk_size, overlap)
            final_chunks.extend(sub_chunks)

    return final_chunks

def extract_text_from_pdf(filepath):
    reader = PdfReader(filepath)
    text = ""
    for page_num, page in enumerate(reader.pages):
        page_text = page.extract_text()
        if page_text:
            text += f"\n[Page {page_num+1}]\n{page_text}"
    return text

def get_pdf_files(path):
    pdfs = []
    if os.path.isfile(path) and path.endswith('.pdf'):
        pdfs.append(path)
    elif os.path.isdir(path):
        for f in os.listdir(path):
            if f.endswith('.pdf'):
                pdfs.append(os.path.join(path, f))
    return pdfs

def load_collection(collection_name, config):
    print(f"\n{'='*50}")
    print(f"Loading collection: {collection_name}")
    print(f"Chunk size: {config['chunk_size']}, Overlap: {config['overlap']}")
    print(f"{'='*50}")

    try:
        client.delete_collection(collection_name)
        print(f"Deleted existing collection")
    except:
        pass

    collection = client.create_collection(
        name=collection_name,
        metadata={"hnsw:space": "cosine"}
    )

    total_chunks = 0
    doc_id = 0

    for path in config["paths"]:
        pdf_files = get_pdf_files(path)

        for pdf_path in pdf_files:
            filename = os.path.basename(pdf_path)
            print(f"\n  📄 Processing: {filename}")

            try:
                text = extract_text_from_pdf(pdf_path)
                if not text.strip():
                    print(f"     ⚠️ No text extracted")
                    continue

                chunks = chunk_text_section_aware(
                    text,
                    config["chunk_size"],
                    config["overlap"]
                )
                print(f"     Chunks: {len(chunks)}")

                if not chunks:
                    continue

                embeddings = embedder.encode(chunks).tolist()

                batch_size = 50
                for i in range(0, len(chunks), batch_size):
                    batch_chunks = chunks[i:i+batch_size]
                    batch_embeddings = embeddings[i:i+batch_size]
                    batch_ids = [
                        f"{collection_name}_{doc_id}_{j}"
                        for j in range(i, i+len(batch_chunks))
                    ]
                    batch_metadata = [
                        {
                            "source": filename,
                            "collection": collection_name,
                            "chunk_index": i+j
                        }
                        for j in range(len(batch_chunks))
                    ]

                    collection.add(
                        documents=batch_chunks,
                        embeddings=batch_embeddings,
                        ids=batch_ids,
                        metadatas=batch_metadata
                    )

                total_chunks += len(chunks)
                doc_id += 1
                print(f"     ✅ Added {len(chunks)} chunks")

            except Exception as e:
                print(f"     ❌ Error: {e}")

    print(f"\n✅ Collection '{collection_name}' complete")
    print(f"   Total chunks: {total_chunks}")
    return total_chunks

def main():
    print("🚀 Starting ChromaDB Loading Pipeline\n")
    os.makedirs(CHROMA_PATH, exist_ok=True)

    grand_total = 0
    for collection_name, config in COLLECTIONS.items():
        total = load_collection(collection_name, config)
        grand_total += total

    print(f"\n{'='*50}")
    print(f"✅ ALL COLLECTIONS LOADED")
    print(f"   Total chunks: {grand_total}")
    print(f"{'='*50}")

    print("\n📊 Verification:")
    for name in COLLECTIONS.keys():
        col = client.get_collection(name)
        print(f"   {name}: {col.count()} chunks")

if __name__ == "__main__":
    main()