from agents.shared import db_client as client

col = client.get_collection("knowledge_reports")

data = col.get(
    include=["documents", "metadatas"]
)

for doc, meta in zip(data["documents"], data["metadatas"]):
    if "deleveraging" in doc.lower():
        print("="*80)
        print(meta["source"])
        print(doc[:1500])