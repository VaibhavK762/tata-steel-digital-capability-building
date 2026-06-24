# scripts/load_documents.py

import os
import sqlite3
from datetime import datetime

DB_PATH = "data/database.db"
DOCS_PATH = "data/documents"

conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()

cursor.execute("DELETE FROM documents")

for root, dirs, files in os.walk(DOCS_PATH):

    for file in files:

        if not file.endswith(".pdf"):
            continue

        filepath = os.path.join(root, file)

        filename = file.lower()

        if "safety" in filename:
            category = "Safety"

        elif "maintenance" in filename:
            category = "Maintenance"

        elif "hr" in filename:
            category = "HR"

        elif "annual" in filename:
            category = "Reports"

        elif "sustainability" in filename:
            category = "Reports"

        elif "nsdc_pdfs" in root:
            category = "NSDC"
        
        elif "leave" in filename:
            category = "HR"

        elif "onboarding" in filename:
            category = "HR"
        else:
            category = "General"

        cursor.execute("""
        INSERT INTO documents
        (
            document_name,
            category,
            upload_date,
            file_path,
            status
        )
        VALUES (?,?,?,?,?)
        """,
        (
            file,
            category,
            datetime.now().strftime("%Y-%m-%d"),
            filepath,
            "active"
        ))

conn.commit()

count = cursor.execute(
    "SELECT COUNT(*) FROM documents"
).fetchone()[0]

print(f"✅ Loaded {count} documents")

conn.close()