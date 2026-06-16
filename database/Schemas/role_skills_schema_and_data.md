# Schema and Data: role_skills

This document provides the database schema and full data dump for the `role_skills` table in the SQLite database (`data/database.db`).

## Table Summary
- **Total Columns:** 7
- **Total Rows:** 28

## SQL Definition
```sql
CREATE TABLE role_skills (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            role_name TEXT,
            nsqf_level INTEGER,
            skills TEXT,
            knowledge_areas TEXT,
            tools_equipment TEXT,
            source_file TEXT
        )
```

## Column Definitions
| Column ID | Column Name | Data Type | Primary Key? | Nullable? | Default | Foreign Key Reference |
|---|---|---|---|---|---|---|
| 0 | `id` | INTEGER | Yes | Yes | `NULL` |  |
| 1 | `role_name` | TEXT | No | Yes | `NULL` |  |
| 2 | `nsqf_level` | INTEGER | No | Yes | `NULL` |  |
| 3 | `skills` | TEXT | No | Yes | `NULL` |  |
| 4 | `knowledge_areas` | TEXT | No | Yes | `NULL` |  |
| 5 | `tools_equipment` | TEXT | No | Yes | `NULL` |  |
| 6 | `source_file` | TEXT | No | Yes | `NULL` |  |

## Table Data
| id | role_name | nsqf_level | skills | knowledge_areas | tools_equipment | source_file |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Conveyor Operation and Maintenance | 3 | Inspection; Basic maintenance; Troubleshooting; Belt operation; Maintenance techniques; Safety practices; Troubleshooting; Following instructions | Mechanical; Electrical | Belt driving system; Conveyor belt controls; Crushers; Screener; Service bunker equipment | Conveyor operation and maintenance.pdf |
| 2 | Iron & Steel - Fitter: Electronic Assembly | 3 | assembly; wiring; soldering; problem-solving; communication | electronics; mechanical equipment | soldering equipment; electronic panels; mechanical equipment | Fitter Electronic Assembly.pdf |
| 3 | Iron & Steel - Utility Hand-Plant Operations | 1 | Carrying tools and tackles to job site; Assisting for smooth and safe operation; Cleaning assembly before dismantling; Providing help during dismantling/assembling; Cleaning work site after job completion | Technical knowledge on various tools and tackles; Identifying various work sites; Reading and writing report | Various tools and tackles | Iron & Steel_ Utility Hand-Plant Operations.pdf |
| 4 | Fitter Electrical Assembly | 3 | Prepare for assembling operation; Assemble the electrical components; Perform post - assembly activities; Carry out housekeeping; Carry out reporting and documentation; Carry out quality checks | Use basic health and safety practices at the workplace; Work eﬀectively with others | no information available | Fitter Electrical Assembly.pdf |
| 5 | Laboratory Technician Physical | 3 | hands on training; basic computer operations; job specific safety training | physical testing laboratory; technical implications of tests | logbook; equipment calibration | Laboratory Technician - Physical Analysis.pdf |
| 6 | Locomotive Driver | 4 | routine inspection; traffic signals; 5S and safety practices | locomotive systems; health and safety practices | locomotive; log book | Locomotive Driver.pdf |
| 7 | Iron & Steel - Plasma Cutter: Manual | 4 | plasma arc cutting technique; faulty technique and their effects | plasma cutting process; welding procedure specification | plasma cutting torch; shielding gas | Plasma Cutter - Manual.pdf |
| 8 | Cast House Junior Operator | 2 | tap hole preparation and maintenance; 5S and safety practices | cast house preparation; equipment maintenance | tap hole drilling machine; mud gun | Cast House Junior Operator.pdf |
| 9 | Refractory Brick Layer | 3 | communication related skills; problem solving attitude; high concentration levels; willingness to work in a factory environment | understanding of engineering drawings; preparation of equipment for fabrication activities | refractory bricks; mortar; design specification | Refractory Bricks Layer.pdf |
| 10 | Iron & Steel - Machinist | 3 | communication related skills; problem solving attitude; high concentration levels; willingness to work in a factory environment | understanding of engineering drawings; preparation of equipment for fabrication activities | machinist tools; dies; measuring equipment | Iron & Steel_ Machinist.pdf |
| 11 | Heating Regulator | 4 | communication related skills; problem solving attitude; high concentration levels; willingness to work in a factory environment | understanding of measurement parameters; technological regime | controllers; regulators; measuring equipment | Heating Regulator.pdf |
| 12 | Cast House Senior Operator | 4 | communication related skills; problem solving attitude; high concentration levels; willingness to work in a factory environment | understanding of cast house equipment; operational practice of blast furnace stoves | cast house crane; mud-gun; tap hole drill machine | Cast House Senior Operator.pdf |
| 13 | Process Operator: Rolling Mills | 5 | communication related skills; analytical skills; problem solving attitude; high concentration levels | metallurgy; acid handling; annealing; galvanising; hydraulics; pneumatics; electrical controls | basic tools; measuring instruments; control systems | Process Operator.pdf |
| 14 | Fitter: Levelling, Alignment & Balancing | 3 | communication related skills; analytical skills; problem solving attitude; high concentration levels | mechanical maintenance; welding; gas cutting; assembling; 5S and safety practices | measuring instruments; testing equipment; welding equipment; gas cutting equipment | Fitter _ Levelling , alignment , balancing.pdf |
| 15 | EOT Overhead Crane Operator | 3 | communication related skills; analytical skills; problem solving attitude; high concentration levels | crane operation; control systems; mechanical structures; safety practices | crane controls; measuring instruments; signalling equipment | EOT_ Overhead crane operator.pdf |
| 16 | Mobile Equipment Operator | 3 | communication related skills; analytical skills; problem solving attitude; high concentration levels | mobile equipment operation; basic maintenance; safety practices; driving skills | measuring instruments; testing equipment; basic tools | Mobile Equipment Operator.pdf |
| 17 | Rigger: Rigging of Heavy Material | 3 | problem solving; analytical skills; communication related skills | load distribution; lifting; health and safety practices | rigging tools; tackles; measuring devices | Rigger _ Rigging of heavy material.pdf |
| 18 | Battery Operator | 5 | problem solving; analytical skills; health and safety practices | coke production; pollution control; mechanical detectors | battery machines; cleaning equipment; control valves | Battery Operator.pdf |
| 19 | Iron & Steel - Fitter Instrumentation | 3 | mechanical detectors; inductive detectors; punching holes in panels | instrumentation; layout and installation; calibration of measuring equipment | hand/power tools; metallurgy tools; component drawings | Fitter - Instrumentation.pdf |
| 20 | House Keeping with Mechanised Equipment | 2 | problem solving; analytical skills; health and safety practices | house keeping; mechanised equipment operation; technical and gallery training | mechanised equipment; cleaning equipment; report writing | House Keeping with Mechanised Equipment.pdf |
| 21 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | 4 | Tungsten Inert Arc Welding (GTAW); Gas Tungsten Arc Welding (GTAW); Welding joints; Welding Procedure Specification | Welding Processes; Welding Metallurgy; Weld Defects/distortion | Tungsten Rod; Welding Consumables; Welding Equipment | Gas Tungsten Arc Welding.pdf |
| 22 | Control Room Operator | 5 | Control panel operation; Computer terminal operation; Control system operation | Steel making process; Process control parameters | Control panel; Computer terminal; Control system | Control Room Operator.pdf |
| 23 | Fitter: Hydraulic & Pneumatic System | 4 | Hydraulic equipment maintenance; Pneumatic equipment maintenance; Troubleshooting; Assembly and disassembly | Hydraulic circuit drawings; Hydraulic system components | Hydraulic tools; Pneumatic tools; Welding equipment | Fitter _ Hydraulic & Pneumatic System.pdf |
| 24 | Bearing Maintenance | 3 | Bearing inspection; Bearing maintenance; Troubleshooting; Assembly and disassembly | Bearing types; Bearing maintenance procedures | Bearing tools; Welding equipment; Gas cutting equipment | Bearing maintenance.pdf |
| 25 | Mobile Equipment Maintenance | 3 | analytical skills; problem solving attitude; high concentration levels; machining; welding | machining; welding; gas cutting; assembling and greasing; 5S and safety practices | tools & fixtures; working at heights; confined spaces & high temperatures | Mobile equipment maintenance.pdf |
| 26 | Fluid Management Operator: Rolling Mills | 3 | analytical skills; problem solving attitude; physical fitness; sharp reflex; inventory management | General Safety practices and procedures; Hazards associated with handling various chemicals | fluid management system; inventory management system | Fluid Management Operator_ Rolling Mills.pdf |
| 27 | Belt Conveyor Maintenance | 3 | analytical skills; problem solving attitude; high concentration levels; physical fitness; working knowledge of tools & fixtures | Belt Conveyor Maintenance; Health and Safety; Teamwork | machining; welding; gas cutting; assembling; working at heights | Belt conveyor maintenance.pdf |
| 28 | Screen & Crusher Operator | 3 | analytical skills; problem solving attitude; physical fitness; high concentration levels; material handling | raw material handling; blast furnace operation | crushers; ball mills; screens; grate bars; grizzly's | Screen & Crusher Operator.pdf |