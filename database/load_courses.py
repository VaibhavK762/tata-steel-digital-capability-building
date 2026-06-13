import csv
import sqlite3

conn = sqlite3.connect("data/database.db")
cursor = conn.cursor()

with open("data/raw/tata_courses.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    rows = [
        (r['course_id'], r['course_name'], r['skills_taught'],
         r['target_role'], r['duration'], r['level'], r['provider'])
        for r in reader
    ]

cursor.executemany('''
    INSERT OR REPLACE INTO courses 
    (course_id, course_name, skills_taught, target_role, duration, level, provider)
    VALUES (?, ?, ?, ?, ?, ?, ?)
''', rows)

conn.commit()
print(f"✅ Loaded {len(rows)} courses")
conn.close()