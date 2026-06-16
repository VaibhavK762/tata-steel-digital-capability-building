import csv
import sqlite3

conn = sqlite3.connect("data/database.db")
cursor = conn.cursor()

with open("data/raw/skills_clean.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    rows = [
        (
            row['role_name'],
            row['nsqf_level'] if row['nsqf_level'] else None,
            row['skills'],
            row['knowledge_areas'],
            row['tools_equipment'],
            row['source_file']
        )
        for row in reader
    ]

cursor.executemany('''
    INSERT INTO role_skills
    (role_name, nsqf_level, skills, knowledge_areas, tools_equipment, source_file)
    VALUES (?, ?, ?, ?, ?, ?)
''', rows)

conn.commit()
print(f"✅ Loaded {len(rows)} roles into role_skills table")
conn.close()