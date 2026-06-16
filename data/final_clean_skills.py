import csv

INPUT = "data/raw/skills.csv"
OUTPUT = "data/raw/skills_clean.csv"

# Manual corrections for known problem rows
# Maps source_file → correct data
MANUAL_FIXES = {
    "Fitter Electronic Assembly.pdf": {
        "role_name": "Iron & Steel - Fitter: Electronic Assembly",
        "nsqf_level": "3",
        "skills": "assembly; wiring; soldering; problem-solving; communication",
        "knowledge_areas": "electronics; mechanical equipment",
        "tools_equipment": "soldering equipment; electronic panels; mechanical equipment"
    },
    "Iron & Steel_ Utility Hand-Plant Operations.pdf": {
        "role_name": "Iron & Steel - Utility Hand-Plant Operations",
        "nsqf_level": "1",
        "skills": "Carrying tools and tackles to job site; Assisting for smooth and safe operation; Cleaning assembly before dismantling; Providing help during dismantling/assembling; Cleaning work site after job completion",
        "knowledge_areas": "Technical knowledge on various tools and tackles; Identifying various work sites; Reading and writing report",
        "tools_equipment": "Various tools and tackles"
    },
    "Mobile equipment maintenance.pdf": {
        "role_name": "Mobile Equipment Maintenance",
        "nsqf_level": "3",
        "skills": "analytical skills; problem solving attitude; high concentration levels; machining; welding",
        "knowledge_areas": "machining; welding; gas cutting; assembling and greasing; 5S and safety practices",
        "tools_equipment": "tools & fixtures; working at heights; confined spaces & high temperatures"
    },
    "Fluid Management Operator_ Rolling Mills.pdf": {
        "role_name": "Fluid Management Operator: Rolling Mills",
        "nsqf_level": "3",
        "skills": "analytical skills; problem solving attitude; physical fitness; sharp reflex; inventory management",
        "knowledge_areas": "General Safety practices and procedures; Hazards associated with handling various chemicals",
        "tools_equipment": "fluid management system; inventory management system"
    },
    "Belt conveyor maintenance.pdf": {
        "role_name": "Belt Conveyor Maintenance",
        "nsqf_level": "3",
        "skills": "analytical skills; problem solving attitude; high concentration levels; physical fitness; working knowledge of tools & fixtures",
        "knowledge_areas": "Belt Conveyor Maintenance; Health and Safety; Teamwork",
        "tools_equipment": "machining; welding; gas cutting; assembling; working at heights"
    }
}

# Read all rows
all_rows = []
with open(INPUT, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        all_rows.append(row)

# Build clean dict keyed by source_file
# This handles duplicate role names
clean = {}

for row in all_rows:
    source = row['source_file'].strip()
    skills = row['skills'].strip()

    # Apply manual fix if available
    if source in MANUAL_FIXES:
        fix = MANUAL_FIXES[source]
        row.update(fix)
        row['source_file'] = source
        clean[source] = row
    else:
        # Keep row with most skills
        if source not in clean:
            clean[source] = row
        else:
            existing = clean[source]['skills'].strip()
            if len(skills) > len(existing):
                clean[source] = row

# Write clean output
fieldnames = ['role_name', 'nsqf_level', 'skills',
              'knowledge_areas', 'tools_equipment', 'source_file']

with open(OUTPUT, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames,
                            extrasaction='ignore')
    writer.writeheader()
    for row in clean.values():
        writer.writerow(row)

print(f"✅ Clean CSV saved: {OUTPUT}")
print(f"Total unique roles: {len(clean)}\n")

# Show summary
print(f"{'Role':<45} {'NSQF':<6} {'Skills'}")
print("-" * 70)
with open(OUTPUT, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    empty = []
    for row in reader:
        skills_count = len(row['skills'].split(';')) if row['skills'] else 0
        status = "⚠️" if skills_count == 0 else "✅"
        print(f"{status} {row['role_name'][:43]:<43} "
              f"{str(row['nsqf_level']):<6} {skills_count}")
        if skills_count == 0:
            empty.append(row['role_name'])

if empty:
    print(f"\n⚠️  Still empty: {empty}")
else:
    print(f"\n✅ All roles have skills!")