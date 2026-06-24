import sqlite3

conn = sqlite3.connect("data/database.db")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS course_completion_requests (
    request_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    course_id TEXT NOT NULL,
    status TEXT DEFAULT 'Pending',
    submitted_at TEXT,
    approved_at TEXT,
    approved_by INTEGER
)
""")

conn.commit()
conn.close()

print("✅ course_completion_requests table created")