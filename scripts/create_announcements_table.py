import sqlite3

conn = sqlite3.connect("data/database.db")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS announcements (
    announcement_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    target_audience TEXT NOT NULL,
    priority TEXT DEFAULT 'Medium',
    created_by TEXT,
    created_at TEXT
)
""")

conn.commit()
conn.close()

print("✅ announcements table created")