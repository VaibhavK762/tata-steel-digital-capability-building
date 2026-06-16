# data/clean_skills_csv.py

import csv

INPUT = "data/raw/skills.csv"
OUTPUT = "data/raw/skills_clean.csv"

rows = []
seen_roles = {}

with open(INPUT, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        role = row['role_name'].strip()
        skills = row['skills'].strip()

        if role not in seen_roles:
            seen_roles[role] = row
        else:
            # Replace if current row has more skills
            existing_skills = seen_roles[role]['skills'].strip()
            if len(skills) > len(existing_skills):
                seen_roles[role] = row

# Write clean version
with open(OUTPUT, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=[
        'role_name', 'nsqf_level', 'skills',
        'knowledge_areas', 'tools_equipment', 'source_file'
    ])
    writer.writeheader()
    for row in seen_roles.values():
        writer.writerow(row)

print(f"✅ Cleaned CSV saved")
print(f"Total unique roles: {len(seen_roles)}")

# Show result
with open(OUTPUT, 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        skills_count = len(row['skills'].split(';')) if row['skills'] else 0
        print(f"{row['role_name'][:40]} | NSQF: {row['nsqf_level']} | Skills: {skills_count}")