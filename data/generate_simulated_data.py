import pandas as pd
import random
from datetime import datetime, timedelta

# ── Equipment Sensor Data ──────────────────

equipment_list = [
    ("EQ001", "Crusher Machine",     "Plant A"),
    ("EQ002", "Conveyor Belt",       "Plant A"),
    ("EQ003", "Heating Regulator",   "Plant B"),
    ("EQ004", "Control Room System", "Plant B"),
    ("EQ005", "Locomotive",          "Yard"),
    ("EQ006", "Blast Furnace",       "Plant C"),
]

sensor_rows = []
start_date = datetime(2026, 1, 1)

for eq_id, eq_name, location in equipment_list:
    for day in range(150):
        date = start_date + timedelta(days=day)
        rand = random.random()

        if rand > 0.95:
            status = "Critical"
            temp = random.uniform(96, 110)
            vibration = random.uniform(1.1, 2.0)
            pressure = random.uniform(151, 180)
        elif rand > 0.85:
            status = "Warning"
            temp = random.uniform(81, 95)
            vibration = random.uniform(0.5, 1.0)
            pressure = random.uniform(131, 150)
        else:
            status = "Normal"
            temp = random.uniform(20, 80)
            vibration = random.uniform(0, 0.5)
            pressure = random.uniform(100, 130)

        sensor_rows.append({
            "date": date.strftime("%Y-%m-%d"),
            "equipment_id": eq_id,
            "equipment_name": eq_name,
            "location": location,
            "temperature_c": round(temp, 2),
            "vibration_mms": round(vibration, 3),
            "pressure_psi": round(pressure, 2),
            "status": status
        })

sensor_df = pd.DataFrame(sensor_rows)
sensor_df.to_csv("data/raw/equipment_sensor_data.csv", index=False)
print(f"✅ Sensor data: {len(sensor_df)} rows")

# ── Production KPI Data ────────────────────

units = ["Unit 1", "Unit 2", "Unit 3"]
departments = ["Mechanical", "Operations", "Steel R&D"]

production_rows = []

for unit, dept in zip(units, departments):
    for day in range(150):
        date = start_date + timedelta(days=day)

        target = random.randint(900, 1000)
        efficiency = random.uniform(0.65, 0.99)
        actual = int(target * efficiency)
        downtime = round(random.uniform(0, 6), 1)

        if actual >= target * 0.95:
            performance = "On Target"
        elif actual >= target * 0.80:
            performance = "Below Target"
        else:
            performance = "Critical"

        if downtime > 4:
            reason = random.choice([
                "Equipment Failure",
                "Power Outage",
                "Raw Material Shortage"
            ])
        elif downtime > 2:
            reason = random.choice([
                "Scheduled Maintenance",
                "Shift Change Delay",
                "Quality Check"
            ])
        else:
            reason = "None"

        production_rows.append({
            "date": date.strftime("%Y-%m-%d"),
            "unit": unit,
            "department": dept,
            "target_output": target,
            "actual_output": actual,
            "efficiency_pct": round(efficiency * 100, 1),
            "downtime_hours": downtime,
            "downtime_reason": reason,
            "performance_status": performance
        })

production_df = pd.DataFrame(production_rows)
production_df.to_csv("data/raw/production_kpi_data.csv", index=False)
print(f"✅ Production data: {len(production_df)} rows")

print("\n✅ All simulated data generated!")