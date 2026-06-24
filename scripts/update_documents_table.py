# scripts/update_documents_table.py

import sqlite3

conn = sqlite3.connect("data/database.db")
cursor = conn.cursor()

try:
    cursor.execute("""
    ALTER TABLE documents
    ADD COLUMN uploaded_by TEXT
    """)
except:
    pass

try:
    cursor.execute("""
    ALTER TABLE documents
    ADD COLUMN indexed INTEGER DEFAULT 0
    """)
except:
    pass

conn.commit()
conn.close()

print("✅ documents table updated")