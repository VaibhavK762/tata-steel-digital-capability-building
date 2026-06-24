TASKS = [
    "Read Safety Manual",
    "Meet Your Team",
    "ID Card & System Access",
    "Complete Safety Training",
    "Plant Orientation"
]

import sqlite3
import pandas as pd

conn = sqlite3.connect("data/database.db")

users = pd.read_sql("""
SELECT user_id
FROM users
""", conn)

cursor = conn.cursor()

cursor.execute("DELETE FROM onboarding_tasks")

for _, user in users.iterrows():

    uid = int(user["user_id"])

    for i, task in enumerate(TASKS):

        status = "Completed" if i < 3 else "Pending"

        cursor.execute("""
        INSERT INTO onboarding_tasks
        (
            user_id,
            task_name,
            status,
            due_date,
            completed_date
        )
        VALUES (?,?,?,?,?)
        """,
        (
            uid,
            task,
            status,
            "2026-07-31",
            "2026-06-22" if status == "Completed" else None
        ))

conn.commit()
conn.close()

print("✅ onboarding tasks loaded")