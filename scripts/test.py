# scripts/test_new_joiner_status.py

import sqlite3

conn = sqlite3.connect("data/database.db")

cursor = conn.cursor()

cursor.execute("""
SELECT
    user_id,
    name,
    is_new_joiner
FROM users
LIMIT 20
""")

for row in cursor.fetchall():
    print(row)

conn.close()