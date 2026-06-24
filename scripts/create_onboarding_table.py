# scripts/create_onboarding_table.py

import sqlite3

conn = sqlite3.connect("data/database.db")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS onboarding_tasks (
    task_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    task_name TEXT,
    status TEXT,
    due_date TEXT,
    completed_date TEXT
)
""")

conn.commit()
conn.close()

print("✅ onboarding_tasks table created")