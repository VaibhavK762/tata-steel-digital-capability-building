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
| C001 | Safety Basics | Safety Awareness, PPE Usage | All | 2 days | Beginner | Tata Steel L&D |
| C002 | Chemical Handling | Chemical Safety, HAZMAT Handling | Plant Operations | 3 days | Beginner | Tata Steel L&D |
| C003 | PPE Training | PPE Usage, Safety Compliance | All | 1 day | Beginner | Tata Steel L&D |
| C004 | Fire Safety & Emergency Response | Fire Safety, Emergency Evacuation | All | 1 day | Beginner | Tata Steel L&D |
| C005 | Steel Manufacturing 101 | Steel Process, Quality Control | Junior Engineer | 1 week | Beginner | Tata Steel L&D |
| C006 | Blast Furnace Operations | Furnace Control, Temperature Management | Plant Operations | 2 weeks | Intermediate | Tata Steel L&D |
| C007 | Crusher Operations & Maintenance | Equipment Operation, Crusher Maintenance | Plant Technician | 1 week | Intermediate | Tata Steel L&D |
| C008 | Conveyor Systems Maintenance | Belt Maintenance, Conveyor Safety | Mechanical | 3 days | Beginner | Tata Steel L&D |
| C009 | Control Room Operations | SCADA, Process Control | Senior Engineer | 2 weeks | Advanced | Tata Steel L&D |
| C010 | Predictive Maintenance Fundamentals | Sensor Reading, Vibration Analysis | Maintenance Team | 1 week | Intermediate | Tata Steel L&D |
| C011 | Steel Quality Control & ISO Standards | Quality Standards, ISO Compliance | Quality Engineer | 1 week | Intermediate | Tata Steel L&D |
| C012 | Heating Regulator Operations | Furnace Temperature Control, Fuel Management | Plant Operations | 2 weeks | Intermediate | Tata Steel L&D |
| C013 | Battery Operations & Safety | Battery Handling, Electrical Safety | Plant Operations | 1 week | Intermediate | Tata Steel L&D |
| C014 | Locomotive Driving & Safety | Locomotive Operation, Yard Safety | Operations | 2 weeks | Intermediate | Tata Steel L&D |
| C015 | Mobile Equipment Operations | Equipment Handling, Field Safety | Operations | 1 week | Beginner | Tata Steel L&D |
| C016 | Welding & Fabrication | Gas Tungsten Arc Welding, Metal Fabrication | Mechanical | 2 weeks | Intermediate | Tata Steel L&D |
| C017 | Electrical Maintenance Basics | Electrical Safety, Circuit Maintenance | Mechanical | 1 week | Intermediate | Tata Steel L&D |
| C018 | Instrumentation Fundamentals | Instrumentation, Calibration | IT Engineer | 1 week | Intermediate | Tata Steel L&D |
| C019 | Leadership Fundamentals | Team Management, Communication | Manager | 3 days | Intermediate | Tata Steel L&D |
| C020 | Project Management for Engineers | Planning, Risk Management | Senior Engineer | 2 weeks | Intermediate | Tata Steel L&D |
| C021 | Incident Investigation & Root Cause Analysis | Root Cause Analysis, Incident Reporting | Safety Officer | 3 days | Intermediate | Tata Steel L&D |
| C022 | Environmental Compliance | ISO 14001, Waste Management | All | 2 days | Beginner | Tata Steel L&D |
| C023 | AutoCAD Basics | AutoCAD Basic, Technical Drawing | Junior Engineer | 2 weeks | Beginner | External |
| C024 | AutoCAD Advanced | AutoCAD Advanced, 3D Modeling | Senior Engineer | 3 weeks | Advanced | External |
| C025 | Python for Steel Data Analysis | Python, Pandas, Data Analysis | IT Engineer | 4 weeks | Intermediate | External |
| C026 | SQL for Data Analytics | SQL Basic, SQL Advanced, Database Querying | IT Engineer | 3 weeks | Intermediate | External |
| C027 | Power BI Analytics | Power BI, Data Visualization | Data Analyst | 2 weeks | Intermediate | External |
| C028 | Machine Learning Fundamentals | ML Basics, Statistics, Python | Data Analyst | 4 weeks | Advanced | External |
| C029 | SAP for Steel Industry | SAP, ERP, Process Management | All | 1 week | Intermediate | External |
| C030 | Digital Tools & MS Office | MS Office, Digital Literacy | All | 3 days | Beginner | Tata Steel L&D |
| C031 | Refractory Bricks Laying | Refractory Installation, Furnace Lining | Plant Technician | 1 week | Intermediate | Tata Steel L&D |
| C032 | Hydraulic & Pneumatic Systems | Hydraulic Systems, Pneumatic Maintenance | Mechanical | 1 week | Intermediate | Tata Steel L&D |
| C033 | Plant Operations Hand Skills | Manual Plant Operations, Material Handling | Junior Engineer | 1 week | Beginner | Tata Steel L&D |
| C034 | Stacker & Reclaimer Operations | Equipment Operation, Material Stacking | Plant Operations | 1 week | Intermediate | Tata Steel L&D |
| C035 | Excavator & Dumper Operations | Heavy Equipment Operation, Field Safety | Operations | 1 week | Beginner | Tata Steel L&D |