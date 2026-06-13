import csv
import sqlite3

conn = sqlite3.connect("data/database.db")
cursor = conn.cursor()

with open("data/raw/production_kpi_data.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    rows = [
        (r['date'], r['unit'], r['department'], r['target_output'],
         r['actual_output'], r['efficiency_pct'], r['downtime_hours'],
         r['downtime_reason'], r['performance_status'])
        for r in reader
    ]

cursor.executemany('''
    INSERT INTO production_kpi 
    (date, unit, department, target_output, actual_output, 
     efficiency_pct, downtime_hours, downtime_reason, performance_status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
''', rows)

conn.commit()
print(f"✅ Loaded {len(rows)} production records")
conn.close()