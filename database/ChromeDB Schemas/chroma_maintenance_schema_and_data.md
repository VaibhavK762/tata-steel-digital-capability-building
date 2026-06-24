# Vector Schema and Data: maintenance

This document provides the schema details and a detailed preview of chunks for the `maintenance` collection in the ChromaDB vector database (`data/chroma_db`).

## Collection Summary
- **Collection Name:** `maintenance`
- **Total Chunks/Embeddings:** 10
- **Embedding Model:** `SentenceTransformer('paraphrase-multilingual-MiniLM-L12-v2')` (384 dimensions)
- **Distance Metric:** Cosine Distance (`hnsw:space: cosine`)

## Source Documents Summary
| Source PDF / File | Total Chunks |
|---|---|
| `maintenance_manual.pdf` | 10 |

## Chunks Preview (First 20 Chunks)
### Chunk ID: `maintenance_0_0`
- **Source File:** `maintenance_manual.pdf`
- **Chunk Index:** `0`

#### Text Content:
```text
## Section 1: Maintenance Philosophy 
Tata Steel follows a Total Productive Maintenance (TPM) approach combining Preventive, Predictive, 
and Corrective maintenance strategies to maximize equipment availability while minimizing 
unplanned downtime and cost. 
 
**Maintenance Goals:** 
- Equipment availability above 95% for critical assets 
- Reduce unplanned downtime by 20% year-on-year 
- Mean Time Between Failures (MTBF) improvement 
- Mean Time To Repair (MTTR) reduction 
 
---
```

---
### Chunk ID: `maintenance_0_1`
- **Source File:** `maintenance_manual.pdf`
- **Chunk Index:** `1`

#### Text Content:
```text
## Section 2: Maintenance Schedule Types 
 
**Preventive Maintenance (PM):** 
- Scheduled at fixed intervals based on manufacturer recommendations and operating history 
- Daily, weekly, monthly, quarterly, and annual checks 
- Prevents unexpected breakdowns through planned servicing 
- Logged in Computerized Maintenance Management System (CMMS) 
- Includes lubrication, cleaning, calibration, and component replacement on schedule 
 
**Predictive Maintenance (PdM):** 
- Based on continuous sensor data monitoring (temperature, vibration, pressure, current) 
- Condition-based triggers rather than fixed schedules 
- Maintenance triggered when readings cross warning thresholds 
- Reduces unnecessary maintenance on healthy equipment 
[Page 2]
- Techniques used: vibration analysis, thermography, oil analysis, ultrasonic testing 
 
**Corrective Maintenance (CM):** 
- Performed after failure occurs (reactive) 
- Emergency response within 2 hours for critical equipment 
- Root cause analysis (RCA) mandatory for repeat failures 
- Failure report filed within 24 hours on CMMS 
- RCA techniques: 5-Why analysis, Fishbone diagram 
 
**Shutdown Maintenance:** 
- Planned annual/bi-annual shutdowns for major overhauls 
- Requires detailed work order planning 3 months in advance 
- Critical spares procurement initiated 6 months ahead 
 
---
```

---
### Chunk ID: `maintenance_0_2`
- **Source File:** `maintenance_manual.pdf`
- **Chunk Index:** `2`

#### Text Content:
```text
## Section 3: Equipment Codes & Standards 
 
| Equipment | Code | PM Frequency | Critical Level | MTBF Target | 
|---|---|---|---|---| 
| Crusher Machine | EQ001 | Weekly | High | 30 days | 
| Conveyor Belt | EQ002 | Daily | High | 45 days | 
| Heating Regulator | EQ003 | Monthly | Medium | 60 days | 
| Control Room Systems | EQ004 | Monthly | Critical | 90 days | 
| Locomotive | EQ005 | Weekly | High | 30 days | 
| Blast Furnace | EQ006 | Daily | Critical | 365 days | 
| Battery (Coke Oven) | EQ007 | Daily | Critical | 180 days | 
| Stacker/Reclaimer | EQ008 | Weekly | Medium | 45 days | 
 
--- 
 
[Page 3]
```

---
### Chunk ID: `maintenance_0_3`
- **Source File:** `maintenance_manual.pdf`
- **Chunk Index:** `3`

#### Text Content:
```text
## Section 4: Troubleshooting Guide **Crusher Machine (EQ001):** Problem: Abnormal vibration Possible causes: 1. Worn out bearings 2. Loose bolts/foundation 3. Material blockage in crushing chamber 4. Belt or coupling misalignment 5. Rotor imbalance Immediate steps: 1. Stop machine immediately 2. Lock out power supply (LOTO procedure) 3. Check for visible blockage and clear if safe 4. Inspect bearing condition (heat, noise, play) 5. Check foundation bolts for looseness 6. Call maintenance team if unresolved within 30 minutes Problem: Overheating Possible causes: 1. Insufficient lubrication 2. Overloading beyond rated capacity 3. Cooling system failure 4. Bearing degradation Steps: 1. Reduce load immediately 2. Check lubrication levels and quality 3. Inspect cooling system (fans, water circulation) 4. Allow to cool 30 minutes before restart 5. If recurring, schedule bearing inspection [Page 4] Problem: Reduced output / capacity drop Possible causes: 1. Worn crushing plates/jaws 2. Incorrect feed size 3. Belt slippage on drive Steps: 1. Check feed material size against spec 2. Inspect crushing plate wear (measure against tolerance) 3. Check drive belt tension **Conveyor Belt (EQ002):** Problem: Belt slipping Steps:
```

---
### Chunk ID: `maintenance_0_4`
- **Source File:** `maintenance_manual.pdf`
- **Chunk Index:** `4`

#### Text Content:
```text
Worn crushing plates/jaws 2. Incorrect feed size 3. Belt slippage on drive Steps: 1. Check feed material size against spec 2. Inspect crushing plate wear (measure against tolerance) 3. Check drive belt tension **Conveyor Belt (EQ002):** Problem: Belt slipping Steps: 1. Check belt tension against specification 2. Inspect drive pulley for wear/lagging damage 3. Check for material spillage causing buildup 4. Adjust tension if needed using takeup mechanism 5. Check for moisture/contamination on pulley surface Problem: Unusual noise Steps: 1. Identify noise source (idler, pulley, or belt) 2. Check all rollers/idlers for bearing wear 3. Inspect belt for damage (tears, splice failure) 4. Check lubrication of bearings 5. Verify belt tracking/alignment Problem: Belt tracking off-center Steps: [Page 5] 1. Check idler alignment along entire conveyor length 2. Inspect for uneven loading causing belt drift 3. Adjust training idlers 4. Check structure for tilting/settling **Heating Regulator (EQ003):** Problem: Temperature fluctuation beyond setpoint Steps: 1. Check fuel supply pressure and flow 2. Inspect thermocouple/sensor calibration 3. Verify control valve operation 4. Check for air leaks in combustion chamber 5. Review control logic
```

---
### Chunk ID: `maintenance_0_5`
- **Source File:** `maintenance_manual.pdf`
- **Chunk Index:** `5`

#### Text Content:
```text
structure for tilting/settling **Heating Regulator (EQ003):** Problem: Temperature fluctuation beyond setpoint Steps: 1. Check fuel supply pressure and flow 2. Inspect thermocouple/sensor calibration 3. Verify control valve operation 4. Check for air leaks in combustion chamber 5. Review control logic settings in SCADA Problem: Error code displayed Steps: 1. Note exact error code and timestamp 2. Refer to equipment-specific error code manual 3. Check sensor wiring connections 4. Restart controller if safe (follow restart procedure) 5. Escalate to control system team if error persists **Locomotive (EQ005):** Problem: Brake system warning Steps: 1. Stop locomotive in safe location 2. Do not proceed until brake system inspected 3. Check air pressure gauges 4. Inspect brake pads/shoes for wear [Page 6] 5. Contact rolling stock maintenance team ---
```

---
### Chunk ID: `maintenance_0_6`
- **Source File:** `maintenance_manual.pdf`
- **Chunk Index:** `6`

#### Text Content:
```text
## Section 5: Sensor Thresholds 
 
| Sensor | Normal Range | Warning | Critical | 
|---|---|---|---| 
| Temperature | 20-80°C | 81-95°C | Above 95°C | 
| Vibration | 0-0.5 mm/s | 0.5-1.0 mm/s | Above 1.0 mm/s | 
| Pressure | 100-130 PSI | 131-150 PSI | Above 150 PSI | 
| RPM | 800-1200 | 1201-1400 | Above 1400 | 
| Oil Temperature | 40-70°C | 71-85°C | Above 85°C | 
| Current Draw | Rated ±10% | Rated ±20% | Rated ±30% | 
 
**Action Matrix:** 
| Status | Action Required | Timeline | 
|---|---|---| 
| Normal | Continue routine monitoring | - | 
| Warning | Schedule inspection, increase monitoring frequency | Within 48 hours | 
| Critical | Stop equipment, immediate maintenance intervention | Immediate | 
 
---
```

---
### Chunk ID: `maintenance_0_7`
- **Source File:** `maintenance_manual.pdf`
- **Chunk Index:** `7`

#### Text Content:
```text
## Section 6: Spare Parts Management 
- Critical spares maintained at minimum stock levels defined per equipment 
- Reorder triggered automatically when stock falls below reorder point 
- Long lead-time items (bearings, motors, control cards) reviewed quarterly 
- Obsolete equipment spares cross-referenced for alternate suppliers 
 
| Spare Category | Examples | Min Stock | 
[Page 7]
|---|---|---| 
| Bearings | Crusher, conveyor bearings | 4 units | 
| Belts | Conveyor belts, V-belts | 2 units | 
| Sensors | Temperature, vibration probes | 6 units | 
| Electrical | Contactors, relays, fuses | 10 units | 
 
---
```

---
### Chunk ID: `maintenance_0_8`
- **Source File:** `maintenance_manual.pdf`
- **Chunk Index:** `8`

#### Text Content:
```text
## Section 7: Permit to Work System 
All maintenance work requires appropriate permit: 
| Permit Type | Required For | 
|---|---| 
| Hot Work Permit | Welding, cutting, grinding | 
| Confined Space Permit | Tank, vessel, pit entry | 
| Electrical Work Permit | Any electrical isolation/work | 
| Excavation Permit | Digging near underground services | 
| Working at Height Permit | Work above 1.8m | 
 
---
```

---
### Chunk ID: `maintenance_0_9`
- **Source File:** `maintenance_manual.pdf`
- **Chunk Index:** `9`

#### Text Content:
```text
## Section 8: Emergency Maintenance Contacts 
 
| Role | Contact | 
|---|---| 
| Maintenance Supervisor | Extension 301 | 
| Electrical Team | Extension 302 | 
| Mechanical Team | Extension 303 | 
| Control Room | Extension 304 | 
| Instrumentation Team | Extension 305 | 
| Emergency Response | Extension 999 |
```
