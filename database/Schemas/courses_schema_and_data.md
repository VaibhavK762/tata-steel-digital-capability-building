# Schema and Data: courses

This document provides the database schema and full data dump for the `courses` table in the SQLite database (`data/database.db`).

## Table Summary
- **Total Columns:** 7
- **Total Rows:** 35

## SQL Definition
```sql
CREATE TABLE courses (
            course_id TEXT PRIMARY KEY,
            course_name TEXT NOT NULL,
            skills_taught TEXT,
            target_role TEXT,
            duration TEXT,
            level TEXT,
            provider TEXT
        )
```

## Column Definitions
| Column ID | Column Name | Data Type | Primary Key? | Nullable? | Default | Foreign Key Reference |
|---|---|---|---|---|---|---|
| 0 | `course_id` | TEXT | Yes | Yes | `NULL` |  |
| 1 | `course_name` | TEXT | No | No | `NULL` |  |
| 2 | `skills_taught` | TEXT | No | Yes | `NULL` |  |
| 3 | `target_role` | TEXT | No | Yes | `NULL` |  |
| 4 | `duration` | TEXT | No | Yes | `NULL` |  |
| 5 | `level` | TEXT | No | Yes | `NULL` |  |
| 6 | `provider` | TEXT | No | Yes | `NULL` |  |

## Table Data
| course_id | course_name | skills_taught | target_role | duration | level | provider |
| --- | --- | --- | --- | --- | --- | --- |
| C001 | Industrial Safety Fundamentals | Safety Practices, PPE Usage, Hazard Awareness | All | 2 Days | Beginner | Tata Steel L&D |
| C002 | Workplace Health & Safety | Health and Safety Practices, Risk Assessment | All | 2 Days | Beginner | Tata Steel L&D |
| C003 | 5S and Workplace Discipline | 5S, Housekeeping, Workplace Discipline | All | 1 Day | Beginner | Tata Steel L&D |
| C004 | Emergency Response & Fire Safety | Emergency Response, Fire Safety | All | 1 Day | Beginner | Tata Steel L&D |
| C005 | Cast House Fundamentals | Tap Hole Preparation, Equipment Maintenance | Cast House Junior Operator | 1 Week | Beginner | Tata Steel L&D |
| C006 | Advanced Cast House Operations | Blast Furnace Operations, Cast House Equipment | Cast House Senior Operator | 2 Weeks | Intermediate | Tata Steel L&D |
| C007 | Heating Regulation & Process Monitoring | Measurement Parameters, Process Monitoring | Heating Regulator | 1 Week | Intermediate | Tata Steel L&D |
| C008 | Control Room Operations | Control Panel Operation, Process Control, SCADA | Control Room Operator | 2 Weeks | Advanced | Tata Steel L&D |
| C009 | Rolling Mill Process Control | Metallurgy, Hydraulics, Process Control | Process Operator: Rolling Mills | 2 Weeks | Advanced | Tata Steel L&D |
| C010 | Battery Operations Excellence | Coke Production, Pollution Control | Battery Operator | 1 Week | Advanced | Tata Steel L&D |
| C011 | Bearing Inspection Fundamentals | Bearing Inspection, Bearing Maintenance | Bearing Maintenance | 3 Days | Beginner | Tata Steel L&D |
| C012 | Conveyor Maintenance Techniques | Conveyor Maintenance, Troubleshooting | Belt Conveyor Maintenance | 1 Week | Intermediate | Tata Steel L&D |
| C013 | Electrical Assembly Workshop | Electrical Assembly, Quality Checks | Fitter Electrical Assembly | 1 Week | Beginner | Tata Steel L&D |
| C014 | Instrumentation & Calibration | Instrumentation, Calibration | Iron & Steel - Fitter Instrumentation | 2 Weeks | Intermediate | Tata Steel L&D |
| C015 | Electronic Assembly Systems | Electronic Assembly, Wiring, Soldering | Iron & Steel - Fitter: Electronic Assembly | 1 Week | Intermediate | Tata Steel L&D |
| C016 | Hydraulic & Pneumatic Systems | Hydraulic Maintenance, Pneumatic Maintenance | Fitter: Hydraulic & Pneumatic System | 2 Weeks | Advanced | Tata Steel L&D |
| C017 | Levelling Alignment & Balancing | Alignment, Balancing, Testing | Fitter: Levelling, Alignment & Balancing | 1 Week | Intermediate | Tata Steel L&D |
| C018 | Mobile Equipment Maintenance | Machining, Welding, Equipment Maintenance | Mobile Equipment Maintenance | 2 Weeks | Advanced | Tata Steel L&D |
| C019 | Rigging Fundamentals | Rigging, Load Distribution, Lifting | Rigger: Rigging of Heavy Material | 1 Week | Beginner | Tata Steel L&D |
| C020 | Mobile Equipment Operations | Equipment Operation, Driving Skills | Mobile Equipment Operator | 2 Weeks | Intermediate | Tata Steel L&D |
| C021 | Crane Operations & Safety | Crane Operation, Signalling, Safety | EOT Overhead Crane Operator | 2 Weeks | Intermediate | Tata Steel L&D |
| C022 | Industrial Locomotive Operations | Traffic Signals, Locomotive Systems | Locomotive Driver | 3 Weeks | Advanced | Tata Steel L&D |
| C023 | Mechanised Housekeeping | Equipment Operation, Housekeeping | House Keeping with Mechanised Equipment | 3 Days | Beginner | Tata Steel L&D |
| C024 | Plasma Cutting Fundamentals | Plasma Arc Cutting | Iron & Steel - Plasma Cutter: Manual | 1 Week | Beginner | Tata Steel L&D |
| C025 | Industrial Machining | Machining, Engineering Drawings | Iron & Steel - Machinist | 2 Weeks | Intermediate | Tata Steel L&D |
| C026 | Advanced GTAW Welding | GTAW Welding, Welding Metallurgy | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | 3 Weeks | Advanced | Tata Steel L&D |
| C027 | Utility Plant Operations | Plant Operations, Tool Handling | Iron & Steel - Utility Hand-Plant Operations | 1 Week | Beginner | Tata Steel L&D |
| C028 | Fluid Management Systems | Fluid Systems, Inventory Management | Fluid Management Operator: Rolling Mills | 2 Weeks | Intermediate | Tata Steel L&D |
| C029 | Industrial Refractory Practices | Refractory Installation, Drawings | Refractory Brick Layer | 2 Weeks | Advanced | Tata Steel L&D |
| C030 | Conveyor Operations & Maintenance | Conveyor Operation, Maintenance | Conveyor Operation and Maintenance | 1 Week | Intermediate | Tata Steel L&D |
| C031 | Physical Testing Laboratory Basics | Physical Testing, Calibration | Laboratory Technician Physical | 1 Week | Beginner | Tata Steel L&D |
| C032 | Problem Solving & Root Cause Analysis | Problem Solving, RCA | All | 2 Days | Intermediate | Tata Steel L&D |
| C033 | Industrial Communication Skills | Communication Skills, Reporting | All | 2 Days | Beginner | Tata Steel L&D |
| C034 | Digital Skills for Manufacturing | Computer Operations, Digital Reporting | All | 3 Days | Intermediate | Tata Steel L&D |
| C035 | Leadership for Frontline Managers | Leadership, Coaching, Team Management | Manager | 1 Week | Advanced | Tata Steel L&D |
