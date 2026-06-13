import csv
import sqlite3

conn = sqlite3.connect("data/database.db")
cursor = conn.cursor()

with open("data/raw/equipment_sensor_data.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    rows = [
        (r['date'], r['equipment_id'], r['equipment_name'], r['location'],
         r['temperature_c'], r['vibration_mms'], r['pressure_psi'], r['status'])
        for r in reader
    ]

cursor.executemany('''
    INSERT INTO equipment_sensors 
    (date, equipment_id, equipment_name, location, temperature_c, vibration_mms, pressure_psi, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
''', rows)

conn.commit()
print(f"✅ Loaded {len(rows)} sensor readings")
conn.close()