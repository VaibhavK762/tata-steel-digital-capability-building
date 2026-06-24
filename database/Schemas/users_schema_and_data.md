# Schema and Data: users

This document provides the database schema and full data dump for the `users` table in the SQLite database (`data/database.db`).

## Table Summary
- **Total Columns:** 16
- **Total Rows:** 336

## SQL Definition
```sql
CREATE TABLE users (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            employee_id TEXT UNIQUE,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            department TEXT,
            current_role TEXT,
            user_type TEXT,
            experience_years REAL,
            nsqf_level INTEGER,
            target_role TEXT,
            timeline TEXT,
            learning_preference TEXT,
            language_preference TEXT DEFAULT 'English',
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        , manager_id INTEGER)
```

## Column Definitions
| Column ID | Column Name | Data Type | Primary Key? | Nullable? | Default | Foreign Key Reference |
|---|---|---|---|---|---|---|
| 0 | `user_id` | INTEGER | Yes | Yes | `NULL` |  |
| 1 | `employee_id` | TEXT | No | Yes | `NULL` |  |
| 2 | `name` | TEXT | No | No | `NULL` |  |
| 3 | `email` | TEXT | No | No | `NULL` |  |
| 4 | `password` | TEXT | No | No | `NULL` |  |
| 5 | `department` | TEXT | No | Yes | `NULL` |  |
| 6 | `current_role` | TEXT | No | Yes | `NULL` |  |
| 7 | `user_type` | TEXT | No | Yes | `NULL` |  |
| 8 | `experience_years` | REAL | No | Yes | `NULL` |  |
| 9 | `nsqf_level` | INTEGER | No | Yes | `NULL` |  |
| 10 | `target_role` | TEXT | No | Yes | `NULL` |  |
| 11 | `timeline` | TEXT | No | Yes | `NULL` |  |
| 12 | `learning_preference` | TEXT | No | Yes | `NULL` |  |
| 13 | `language_preference` | TEXT | No | Yes | `'English'` |  |
| 14 | `created_at` | TEXT | No | Yes | `CURRENT_TIMESTAMP` |  |
| 15 | `manager_id` | INTEGER | No | Yes | `NULL` |  |

## Table Data
| user_id | employee_id | name | email | password | department | current_role | user_type | experience_years | nsqf_level | target_role | timeline | learning_preference | language_preference | created_at | manager_id |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | Sneha Shah | sneha1@tatasteel.com | tata@123 | Operations | Cast House Junior Operator | New Joiner | 0.2 | 2 | Cast House Senior Operator |  |  | English | 2026-06-13 18:53:21 | 51 |
| 2 | 2 | Arun Patel | arun2@tatasteel.com | tata@123 | Operations | Heating Regulator | Employee | 1.7 | 4 | Control Room Operator |  |  | English | 2026-06-13 18:53:21 | 52 |
| 3 | 4 | Vikram Patel | vikram4@tatasteel.com | tata@123 | Operations | Cast House Senior Operator | Employee | 5.2 | 4 | Heating Regulator |  |  | English | 2026-06-13 18:53:21 | 53 |
| 4 | 5 | Ravi Reddy | ravi5@tatasteel.com | tata@123 | Operations | Cast House Junior Operator | Employee | 4.1 | 2 | Cast House Senior Operator |  |  | English | 2026-06-13 18:53:21 | 54 |
| 5 | 7 | Ravi Pillai | ravi7@tatasteel.com | tata@123 | Operations | Battery Operator | New Joiner | 0.2 | 5 | Control Room Operator |  |  | English | 2026-06-13 18:53:21 | 55 |
| 6 | 8 | Meera Iyer | meera8@tatasteel.com | tata@123 | Operations | Control Room Operator | Employee | 1.6 | 5 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 51 |
| 7 | 10 | Pooja Das | pooja10@tatasteel.com | tata@123 | Operations | Battery Operator | Employee | 3.9 | 5 | Control Room Operator |  |  | English | 2026-06-13 18:53:21 | 52 |
| 8 | 11 | Suresh Shah | suresh11@tatasteel.com | tata@123 | Operations | Screen & Crusher Operator | Employee | 1.5 | 3 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 53 |
| 9 | 12 | Neha Singh | neha12@tatasteel.com | tata@123 | Operations | Heating Regulator | Employee | 5.7 | 4 | Control Room Operator |  |  | English | 2026-06-13 18:53:21 | 54 |
| 10 | 13 | Kavya Singh | kavya13@tatasteel.com | tata@123 | Operations | Battery Operator | Employee | 5.3 | 5 | Control Room Operator |  |  | English | 2026-06-13 18:53:21 | 55 |
| 11 | 14 | Arjun Rao | arjun14@tatasteel.com | tata@123 | Operations | Cast House Senior Operator | Employee | 4.9 | 4 | Heating Regulator |  |  | English | 2026-06-13 18:53:21 | 51 |
| 12 | 15 | Ravi Das | ravi15@tatasteel.com | tata@123 | Operations | Process Operator: Rolling Mills | Employee | 1.9 | 5 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 52 |
| 13 | 16 | Neha Gupta | neha16@tatasteel.com | tata@123 | Operations | Control Room Operator | Employee | 6.7 | 5 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 53 |
| 14 | 18 | Rahul Nair | rahul18@tatasteel.com | tata@123 | Operations | Process Operator: Rolling Mills | New Joiner | 0.7 | 5 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 54 |
| 15 | 19 | Arjun Reddy | arjun19@tatasteel.com | tata@123 | Operations | Screen & Crusher Operator | New Joiner | 0.7 | 3 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 55 |
| 16 | 20 | Rahul Sharma | rahul20@tatasteel.com | tata@123 | Operations | Process Operator: Rolling Mills | Employee | 4.2 | 5 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 51 |
| 17 | 21 | Priya Patel | priya21@tatasteel.com | tata@123 | Operations | Battery Operator | Employee | 5.1 | 5 | Control Room Operator |  |  | English | 2026-06-13 18:53:21 | 52 |
| 18 | 22 | Arun Mehta | arun22@tatasteel.com | tata@123 | Operations | Cast House Junior Operator | Employee | 6.8 | 2 | Cast House Senior Operator |  |  | English | 2026-06-13 18:53:21 | 53 |
| 19 | 23 | Ravi Sharma | ravi23@tatasteel.com | tata@123 | Operations | Screen & Crusher Operator | New Joiner | 0.6 | 3 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 54 |
| 20 | 24 | Priya Singh | priya24@tatasteel.com | tata@123 | Operations | Heating Regulator | Employee | 5.8 | 4 | Control Room Operator |  |  | English | 2026-06-13 18:53:21 | 55 |
| 21 | 26 | Raj Verma | raj26@tatasteel.com | tata@123 | Operations | Process Operator: Rolling Mills | Employee | 4.0 | 5 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 51 |
| 22 | 27 | Raj Gupta | raj27@tatasteel.com | tata@123 | Operations | Cast House Junior Operator | New Joiner | 0.3 | 2 | Cast House Senior Operator |  |  | English | 2026-06-13 18:53:21 | 52 |
| 23 | 28 | Rahul Pillai | rahul28@tatasteel.com | tata@123 | Operations | Control Room Operator | Employee | 5.4 | 5 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 53 |
| 24 | 30 | Neha Joshi | neha30@tatasteel.com | tata@123 | Operations | Cast House Junior Operator | Employee | 6.0 | 2 | Cast House Senior Operator |  |  | English | 2026-06-13 18:53:21 | 54 |
| 25 | 31 | Amit Shah | amit31@tatasteel.com | tata@123 | Operations | Cast House Junior Operator | Employee | 2.7 | 2 | Cast House Senior Operator |  |  | English | 2026-06-13 18:53:21 | 55 |
| 26 | 32 | Anita Mehta | anita32@tatasteel.com | tata@123 | Operations | Iron & Steel - Utility Hand-Plant Operations | Employee | 4.4 | 1 | Cast House Junior Operator |  |  | English | 2026-06-13 18:53:21 | 51 |
| 27 | 33 | Pooja Singh | pooja33@tatasteel.com | tata@123 | Operations | Process Operator: Rolling Mills | Employee | 1.1 | 5 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 52 |
| 28 | 35 | Neha Iyer | neha35@tatasteel.com | tata@123 | Operations | Process Operator: Rolling Mills | Employee | 1.5 | 5 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 53 |
| 29 | 36 | Priya Das | priya36@tatasteel.com | tata@123 | Operations | Heating Regulator | Employee | 4.9 | 4 | Control Room Operator |  |  | English | 2026-06-13 18:53:21 | 54 |
| 30 | 38 | Sneha Verma | sneha38@tatasteel.com | tata@123 | Operations | Cast House Junior Operator | Employee | 4.3 | 2 | Cast House Senior Operator |  |  | English | 2026-06-13 18:53:21 | 55 |
| 31 | 39 | Priya Patel | priya39@tatasteel.com | tata@123 | Operations | Cast House Senior Operator | Employee | 3.7 | 4 | Heating Regulator |  |  | English | 2026-06-13 18:53:21 | 51 |
| 32 | 40 | Rahul Shah | rahul40@tatasteel.com | tata@123 | Operations | Control Room Operator | Employee | 1.1 | 5 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 52 |
| 33 | 41 | Rahul Pillai | rahul41@tatasteel.com | tata@123 | Operations | Screen & Crusher Operator | Employee | 1.9 | 3 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 53 |
| 34 | 42 | Priya Kumar | priya42@tatasteel.com | tata@123 | Operations | Control Room Operator | Employee | 4.8 | 5 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 54 |
| 35 | 45 | Ravi Iyer | ravi45@tatasteel.com | tata@123 | Operations | Battery Operator | Employee | 1.6 | 5 | Control Room Operator |  |  | English | 2026-06-13 18:53:21 | 55 |
| 36 | 46 | Priya Shah | priya46@tatasteel.com | tata@123 | Operations | Battery Operator | Employee | 5.6 | 5 | Control Room Operator |  |  | English | 2026-06-13 18:53:21 | 51 |
| 37 | 47 | Anita Gupta | anita47@tatasteel.com | tata@123 | Operations | Screen & Crusher Operator | Employee | 1.9 | 3 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 52 |
| 38 | 49 | Meera Pillai | meera49@tatasteel.com | tata@123 | Operations | Control Room Operator | Employee | 6.4 | 5 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 53 |
| 39 | 51 | Rahul Singh | rahul51@tatasteel.com | tata@123 | Operations | Process Operator: Rolling Mills | Employee | 1.5 | 5 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 54 |
| 40 | 52 | Anita Mehta | anita52@tatasteel.com | tata@123 | Operations | Iron & Steel - Utility Hand-Plant Operations | Employee | 2.8 | 1 | Cast House Junior Operator |  |  | English | 2026-06-13 18:53:21 | 55 |
| 41 | 53 | Vikram Sharma | vikram53@tatasteel.com | tata@123 | Operations | Iron & Steel - Utility Hand-Plant Operations | New Joiner | 1.0 | 1 | Cast House Junior Operator |  |  | English | 2026-06-13 18:53:21 | 51 |
| 42 | 54 | Arun Sharma | arun54@tatasteel.com | tata@123 | Operations | Cast House Senior Operator | Employee | 1.7 | 4 | Heating Regulator |  |  | English | 2026-06-13 18:53:21 | 52 |
| 43 | 55 | Arjun Gupta | arjun55@tatasteel.com | tata@123 | Operations | Heating Regulator | Employee | 5.2 | 4 | Control Room Operator |  |  | English | 2026-06-13 18:53:21 | 53 |
| 44 | 56 | Raj Gupta | raj56@tatasteel.com | tata@123 | Operations | Screen & Crusher Operator | Employee | 6.3 | 3 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 54 |
| 45 | 57 | Arjun Verma | arjun57@tatasteel.com | tata@123 | Operations | Screen & Crusher Operator | Employee | 2.5 | 3 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 55 |
| 46 | 58 | Suresh Nair | suresh58@tatasteel.com | tata@123 | Operations | Cast House Senior Operator | Employee | 3.6 | 4 | Heating Regulator |  |  | English | 2026-06-13 18:53:21 | 51 |
| 47 | 60 | Arun Joshi | arun60@tatasteel.com | tata@123 | Operations | Cast House Junior Operator | Employee | 5.3 | 2 | Cast House Senior Operator |  |  | English | 2026-06-13 18:53:21 | 52 |
| 48 | 61 | Kavya Nair | kavya61@tatasteel.com | tata@123 | Operations | Cast House Junior Operator | Employee | 1.1 | 2 | Cast House Senior Operator |  |  | English | 2026-06-13 18:53:21 | 53 |
| 49 | 62 | Kavya Pillai | kavya62@tatasteel.com | tata@123 | Operations | Cast House Senior Operator | Employee | 5.5 | 4 | Heating Regulator |  |  | English | 2026-06-13 18:53:21 | 54 |
| 50 | 63 | Vikram Nair | vikram63@tatasteel.com | tata@123 | Operations | Screen & Crusher Operator | Employee | 4.2 | 3 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 55 |
| 51 | 64 | Ravi Reddy | ravi64@tatasteel.com | tata@123 | Operations | Screen & Crusher Operator | Manager | 10.7 | 3 | Process Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 56 |
| 52 | 65 | Amit Reddy | amit65@tatasteel.com | tata@123 | Operations | Iron & Steel - Utility Hand-Plant Operations | Manager | 11.7 | 1 | Cast House Junior Operator |  |  | English | 2026-06-13 18:53:21 | 56 |
| 53 | 68 | Meera Patel | meera68@tatasteel.com | tata@123 | Operations | Battery Operator | Manager | 12.8 | 5 | Control Room Operator |  |  | English | 2026-06-13 18:53:21 | 56 |
| 54 | 70 | Suresh Kumar | suresh70@tatasteel.com | tata@123 | Operations | Cast House Junior Operator | Manager | 12.8 | 2 | Cast House Senior Operator |  |  | English | 2026-06-13 18:53:21 | 56 |
| 55 | 72 | Arjun Patel | arjun72@tatasteel.com | tata@123 | Operations | Heating Regulator | Manager | 13.4 | 4 | Control Room Operator |  |  | English | 2026-06-13 18:53:21 | 56 |
| 56 | 73 | Vikram Das | vikram73@tatasteel.com | tata@123 | Operations | Process Operator: Rolling Mills | Executive | 16.1 | 5 |  |  |  | English | 2026-06-13 18:53:21 |  |
| 57 | 74 | Rahul Singh | rahul74@tatasteel.com | tata@123 | Maintenance | Iron & Steel - Fitter: Electronic Assembly | Employee | 1.1 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 107 |
| 58 | 75 | Suresh Patel | suresh75@tatasteel.com | tata@123 | Maintenance | Bearing Maintenance | Employee | 6.7 | 3 | Belt Conveyor Maintenance |  |  | English | 2026-06-13 18:53:21 | 108 |
| 59 | 76 | Vikram Kumar | vikram76@tatasteel.com | tata@123 | Maintenance | Fitter: Levelling, Alignment & Balancing | Employee | 6.8 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 109 |
| 60 | 77 | Suresh Patel | suresh77@tatasteel.com | tata@123 | Maintenance | Fitter Electrical Assembly | Employee | 3.6 | 3 | Iron & Steel - Fitter Instrumentation |  |  | English | 2026-06-13 18:53:21 | 110 |
| 61 | 78 | Priya Shah | priya78@tatasteel.com | tata@123 | Maintenance | Belt Conveyor Maintenance | Employee | 6.1 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 111 |
| 62 | 79 | Meera Iyer | meera79@tatasteel.com | tata@123 | Maintenance | Fitter: Levelling, Alignment & Balancing | Employee | 5.9 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 107 |
| 63 | 80 | Sneha Rao | sneha80@tatasteel.com | tata@123 | Maintenance | Fitter: Hydraulic & Pneumatic System | Employee | 1.1 | 4 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 108 |
| 64 | 81 | Priya Patel | priya81@tatasteel.com | tata@123 | Maintenance | Fitter Electrical Assembly | Employee | 3.8 | 3 | Iron & Steel - Fitter Instrumentation |  |  | English | 2026-06-13 18:53:21 | 109 |
| 65 | 83 | Amit Pillai | amit83@tatasteel.com | tata@123 | Maintenance | Bearing Maintenance | Employee | 4.2 | 3 | Belt Conveyor Maintenance |  |  | English | 2026-06-13 18:53:21 | 110 |
| 66 | 84 | Ravi Das | ravi84@tatasteel.com | tata@123 | Maintenance | Mobile Equipment Maintenance | New Joiner | 0.1 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 111 |
| 67 | 85 | Neha Shah | neha85@tatasteel.com | tata@123 | Maintenance | Iron & Steel - Fitter Instrumentation | Employee | 6.2 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 107 |
| 68 | 86 | Vikram Joshi | vikram86@tatasteel.com | tata@123 | Maintenance | Fitter: Levelling, Alignment & Balancing | Employee | 1.7 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 108 |
| 69 | 88 | Kavya Pillai | kavya88@tatasteel.com | tata@123 | Maintenance | Fitter: Hydraulic & Pneumatic System | Employee | 6.1 | 4 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 109 |
| 70 | 90 | Kavya Verma | kavya90@tatasteel.com | tata@123 | Maintenance | Belt Conveyor Maintenance | New Joiner | 0.6 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 110 |
| 71 | 91 | Neha Nair | neha91@tatasteel.com | tata@123 | Maintenance | Mobile Equipment Maintenance | Employee | 5.7 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 111 |
| 72 | 94 | Meera Nair | meera94@tatasteel.com | tata@123 | Maintenance | Fitter Electrical Assembly | New Joiner | 0.9 | 3 | Iron & Steel - Fitter Instrumentation |  |  | English | 2026-06-13 18:53:21 | 107 |
| 73 | 95 | Kavya Sharma | kavya95@tatasteel.com | tata@123 | Maintenance | Mobile Equipment Maintenance | Employee | 6.6 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 108 |
| 74 | 96 | Vikram Shah | vikram96@tatasteel.com | tata@123 | Maintenance | Fitter Electrical Assembly | Employee | 1.9 | 3 | Iron & Steel - Fitter Instrumentation |  |  | English | 2026-06-13 18:53:21 | 109 |
| 75 | 97 | Pooja Singh | pooja97@tatasteel.com | tata@123 | Maintenance | Iron & Steel - Fitter: Electronic Assembly | Employee | 6.8 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 110 |
| 76 | 98 | Sneha Rao | sneha98@tatasteel.com | tata@123 | Maintenance | Fitter: Hydraulic & Pneumatic System | Employee | 5.0 | 4 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 111 |
| 77 | 100 | Vikram Patel | vikram100@tatasteel.com | tata@123 | Maintenance | Iron & Steel - Fitter: Electronic Assembly | Employee | 7.0 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 107 |
| 78 | 101 | Meera Singh | meera101@tatasteel.com | tata@123 | Maintenance | Iron & Steel - Fitter Instrumentation | Employee | 3.1 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 108 |
| 79 | 102 | Kavya Shah | kavya102@tatasteel.com | tata@123 | Maintenance | Mobile Equipment Maintenance | New Joiner | 0.8 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 109 |
| 80 | 103 | Ravi Sharma | ravi103@tatasteel.com | tata@123 | Maintenance | Fitter: Hydraulic & Pneumatic System | New Joiner | 0.4 | 4 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 110 |
| 81 | 104 | Amit Sharma | amit104@tatasteel.com | tata@123 | Maintenance | Bearing Maintenance | Employee | 4.1 | 3 | Belt Conveyor Maintenance |  |  | English | 2026-06-13 18:53:21 | 111 |
| 82 | 105 | Amit Sharma | amit105@tatasteel.com | tata@123 | Maintenance | Fitter: Hydraulic & Pneumatic System | Employee | 4.1 | 4 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 107 |
| 83 | 106 | Neha Iyer | neha106@tatasteel.com | tata@123 | Maintenance | Bearing Maintenance | New Joiner | 0.5 | 3 | Belt Conveyor Maintenance |  |  | English | 2026-06-13 18:53:21 | 108 |
| 84 | 107 | Ravi Das | ravi107@tatasteel.com | tata@123 | Maintenance | Bearing Maintenance | Employee | 1.6 | 3 | Belt Conveyor Maintenance |  |  | English | 2026-06-13 18:53:21 | 109 |
| 85 | 110 | Pooja Verma | pooja110@tatasteel.com | tata@123 | Maintenance | Bearing Maintenance | Employee | 6.0 | 3 | Belt Conveyor Maintenance |  |  | English | 2026-06-13 18:53:21 | 110 |
| 86 | 112 | Meera Patel | meera112@tatasteel.com | tata@123 | Maintenance | Belt Conveyor Maintenance | Employee | 3.6 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 111 |
| 87 | 113 | Sneha Verma | sneha113@tatasteel.com | tata@123 | Maintenance | Fitter: Levelling, Alignment & Balancing | Employee | 4.7 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 107 |
| 88 | 116 | Suresh Mehta | suresh116@tatasteel.com | tata@123 | Maintenance | Fitter: Hydraulic & Pneumatic System | Employee | 3.8 | 4 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 108 |
| 89 | 117 | Vikram Nair | vikram117@tatasteel.com | tata@123 | Maintenance | Mobile Equipment Maintenance | Employee | 1.7 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 109 |
| 90 | 118 | Rahul Kumar | rahul118@tatasteel.com | tata@123 | Maintenance | Mobile Equipment Maintenance | Employee | 5.7 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 110 |
| 91 | 119 | Pooja Rao | pooja119@tatasteel.com | tata@123 | Maintenance | Fitter: Hydraulic & Pneumatic System | New Joiner | 0.7 | 4 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 111 |
| 92 | 120 | Kavya Patel | kavya120@tatasteel.com | tata@123 | Maintenance | Iron & Steel - Fitter: Electronic Assembly | Employee | 2.5 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 107 |
| 93 | 121 | Rahul Joshi | rahul121@tatasteel.com | tata@123 | Maintenance | Iron & Steel - Fitter: Electronic Assembly | Employee | 3.3 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 108 |
| 94 | 124 | Anita Joshi | anita124@tatasteel.com | tata@123 | Maintenance | Bearing Maintenance | Employee | 4.7 | 3 | Belt Conveyor Maintenance |  |  | English | 2026-06-13 18:53:21 | 109 |
| 95 | 125 | Arun Nair | arun125@tatasteel.com | tata@123 | Maintenance | Belt Conveyor Maintenance | New Joiner | 0.4 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 110 |
| 96 | 126 | Sneha Iyer | sneha126@tatasteel.com | tata@123 | Maintenance | Iron & Steel - Fitter Instrumentation | Employee | 5.6 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 111 |
| 97 | 128 | Vikram Joshi | vikram128@tatasteel.com | tata@123 | Maintenance | Belt Conveyor Maintenance | Employee | 1.7 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 107 |
| 98 | 129 | Neha Sharma | neha129@tatasteel.com | tata@123 | Maintenance | Fitter: Hydraulic & Pneumatic System | Employee | 3.8 | 4 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 108 |
| 99 | 131 | Arjun Joshi | arjun131@tatasteel.com | tata@123 | Maintenance | Fitter Electrical Assembly | Employee | 3.0 | 3 | Iron & Steel - Fitter Instrumentation |  |  | English | 2026-06-13 18:53:21 | 109 |
| 100 | 132 | Pooja Rao | pooja132@tatasteel.com | tata@123 | Maintenance | Fitter: Levelling, Alignment & Balancing | Employee | 3.2 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 110 |
| 101 | 133 | Priya Reddy | priya133@tatasteel.com | tata@123 | Maintenance | Belt Conveyor Maintenance | Employee | 3.1 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 111 |
| 102 | 134 | Arjun Iyer | arjun134@tatasteel.com | tata@123 | Maintenance | Belt Conveyor Maintenance | New Joiner | 0.4 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 107 |
| 103 | 137 | Ravi Reddy | ravi137@tatasteel.com | tata@123 | Maintenance | Bearing Maintenance | Employee | 6.8 | 3 | Belt Conveyor Maintenance |  |  | English | 2026-06-13 18:53:21 | 108 |
| 104 | 138 | Arjun Verma | arjun138@tatasteel.com | tata@123 | Maintenance | Fitter: Hydraulic & Pneumatic System | Employee | 1.2 | 4 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 109 |
| 105 | 139 | Amit Pillai | amit139@tatasteel.com | tata@123 | Maintenance | Mobile Equipment Maintenance | Employee | 3.4 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 110 |
| 106 | 140 | Rahul Singh | rahul140@tatasteel.com | tata@123 | Maintenance | Iron & Steel - Fitter: Electronic Assembly | Employee | 6.3 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 111 |
| 107 | 141 | Suresh Patel | suresh141@tatasteel.com | tata@123 | Maintenance | Fitter Electrical Assembly | Manager | 10.7 | 3 | Iron & Steel - Fitter Instrumentation |  |  | English | 2026-06-13 18:53:21 | 112 |
| 108 | 142 | Ravi Verma | ravi142@tatasteel.com | tata@123 | Maintenance | Iron & Steel - Fitter: Electronic Assembly | Manager | 9.9 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 112 |
| 109 | 143 | Pooja Gupta | pooja143@tatasteel.com | tata@123 | Maintenance | Mobile Equipment Maintenance | Manager | 10.0 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 112 |
| 110 | 144 | Amit Joshi | amit144@tatasteel.com | tata@123 | Maintenance | Mobile Equipment Maintenance | Manager | 9.1 | 3 | Mobile Equipment Maintenance |  |  | English | 2026-06-13 18:53:21 | 112 |
| 111 | 145 | Raj Joshi | raj145@tatasteel.com | tata@123 | Maintenance | Fitter: Levelling, Alignment & Balancing | Manager | 9.5 | 3 | Fitter: Hydraulic & Pneumatic System |  |  | English | 2026-06-13 18:53:21 | 112 |
| 112 | 147 | Pooja Iyer | pooja147@tatasteel.com | tata@123 | Maintenance | Bearing Maintenance | Executive | 20.8 | 3 |  |  |  | English | 2026-06-13 18:53:21 |  |
| 113 | 148 | Suresh Iyer | suresh148@tatasteel.com | tata@123 | Logistics | House Keeping with Mechanised Equipment | New Joiner | 0.4 | 2 | Rigger: Rigging of Heavy Material |  |  | English | 2026-06-13 18:53:21 | 163 |
| 114 | 150 | Vikram Singh | vikram150@tatasteel.com | tata@123 | Logistics | EOT Overhead Crane Operator | New Joiner | 0.4 | 3 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 164 |
| 115 | 151 | Neha Iyer | neha151@tatasteel.com | tata@123 | Logistics | House Keeping with Mechanised Equipment | Employee | 3.3 | 2 | Rigger: Rigging of Heavy Material |  |  | English | 2026-06-13 18:53:21 | 165 |
| 116 | 152 | Neha Pillai | neha152@tatasteel.com | tata@123 | Logistics | House Keeping with Mechanised Equipment | Employee | 1.1 | 2 | Rigger: Rigging of Heavy Material |  |  | English | 2026-06-13 18:53:21 | 166 |
| 117 | 153 | Amit Mehta | amit153@tatasteel.com | tata@123 | Logistics | House Keeping with Mechanised Equipment | New Joiner | 0.6 | 2 | Rigger: Rigging of Heavy Material |  |  | English | 2026-06-13 18:53:21 | 167 |
| 118 | 154 | Kavya Patel | kavya154@tatasteel.com | tata@123 | Logistics | Mobile Equipment Operator | New Joiner | 0.5 | 3 | EOT Overhead Crane Operator |  |  | English | 2026-06-13 18:53:21 | 163 |
| 119 | 155 | Sneha Patel | sneha155@tatasteel.com | tata@123 | Logistics | Locomotive Driver | Employee | 4.7 | 4 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 164 |
| 120 | 158 | Kavya Das | kavya158@tatasteel.com | tata@123 | Logistics | Mobile Equipment Operator | Employee | 2.8 | 3 | EOT Overhead Crane Operator |  |  | English | 2026-06-13 18:53:21 | 165 |
| 121 | 159 | Pooja Joshi | pooja159@tatasteel.com | tata@123 | Logistics | House Keeping with Mechanised Equipment | Employee | 1.7 | 2 | Rigger: Rigging of Heavy Material |  |  | English | 2026-06-13 18:53:21 | 166 |
| 122 | 160 | Meera Mehta | meera160@tatasteel.com | tata@123 | Logistics | House Keeping with Mechanised Equipment | New Joiner | 0.3 | 2 | Rigger: Rigging of Heavy Material |  |  | English | 2026-06-13 18:53:21 | 167 |
| 123 | 161 | Raj Gupta | raj161@tatasteel.com | tata@123 | Logistics | Locomotive Driver | Employee | 2.9 | 4 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 163 |
| 124 | 162 | Priya Iyer | priya162@tatasteel.com | tata@123 | Logistics | House Keeping with Mechanised Equipment | Employee | 4.0 | 2 | Rigger: Rigging of Heavy Material |  |  | English | 2026-06-13 18:53:21 | 164 |
| 125 | 163 | Sneha Mehta | sneha163@tatasteel.com | tata@123 | Logistics | EOT Overhead Crane Operator | Employee | 6.5 | 3 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 165 |
| 126 | 164 | Rahul Rao | rahul164@tatasteel.com | tata@123 | Logistics | Mobile Equipment Operator | Employee | 4.7 | 3 | EOT Overhead Crane Operator |  |  | English | 2026-06-13 18:53:21 | 166 |
| 127 | 165 | Meera Sharma | meera165@tatasteel.com | tata@123 | Logistics | EOT Overhead Crane Operator | Employee | 1.7 | 3 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 167 |
| 128 | 167 | Meera Iyer | meera167@tatasteel.com | tata@123 | Logistics | Rigger: Rigging of Heavy Material | New Joiner | 0.9 | 3 | Mobile Equipment Operator |  |  | English | 2026-06-13 18:53:21 | 163 |
| 129 | 169 | Pooja Iyer | pooja169@tatasteel.com | tata@123 | Logistics | EOT Overhead Crane Operator | Employee | 3.2 | 3 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 164 |
| 130 | 170 | Neha Shah | neha170@tatasteel.com | tata@123 | Logistics | Locomotive Driver | New Joiner | 0.1 | 4 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 165 |
| 131 | 171 | Raj Das | raj171@tatasteel.com | tata@123 | Logistics | House Keeping with Mechanised Equipment | Employee | 7.0 | 2 | Rigger: Rigging of Heavy Material |  |  | English | 2026-06-13 18:53:21 | 166 |
| 132 | 174 | Pooja Kumar | pooja174@tatasteel.com | tata@123 | Logistics | Locomotive Driver | New Joiner | 0.5 | 4 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 167 |
| 133 | 175 | Meera Shah | meera175@tatasteel.com | tata@123 | Logistics | Mobile Equipment Operator | Employee | 3.5 | 3 | EOT Overhead Crane Operator |  |  | English | 2026-06-13 18:53:21 | 163 |
| 134 | 176 | Amit Patel | amit176@tatasteel.com | tata@123 | Logistics | Mobile Equipment Operator | Employee | 6.5 | 3 | EOT Overhead Crane Operator |  |  | English | 2026-06-13 18:53:21 | 164 |
| 135 | 177 | Anita Shah | anita177@tatasteel.com | tata@123 | Logistics | Locomotive Driver | Employee | 6.2 | 4 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 165 |
| 136 | 178 | Vikram Nair | vikram178@tatasteel.com | tata@123 | Logistics | EOT Overhead Crane Operator | Employee | 2.0 | 3 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 166 |
| 137 | 179 | Kavya Verma | kavya179@tatasteel.com | tata@123 | Logistics | Rigger: Rigging of Heavy Material | Employee | 5.8 | 3 | Mobile Equipment Operator |  |  | English | 2026-06-13 18:53:21 | 167 |
| 138 | 182 | Arjun Rao | arjun182@tatasteel.com | tata@123 | Logistics | EOT Overhead Crane Operator | Employee | 4.3 | 3 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 163 |
| 139 | 183 | Vikram Gupta | vikram183@tatasteel.com | tata@123 | Logistics | House Keeping with Mechanised Equipment | New Joiner | 0.1 | 2 | Rigger: Rigging of Heavy Material |  |  | English | 2026-06-13 18:53:21 | 164 |
| 140 | 184 | Arjun Gupta | arjun184@tatasteel.com | tata@123 | Logistics | House Keeping with Mechanised Equipment | Employee | 2.1 | 2 | Rigger: Rigging of Heavy Material |  |  | English | 2026-06-13 18:53:21 | 165 |
| 141 | 190 | Raj Singh | raj190@tatasteel.com | tata@123 | Logistics | Locomotive Driver | Employee | 6.6 | 4 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 166 |
| 142 | 192 | Rahul Kumar | rahul192@tatasteel.com | tata@123 | Logistics | Mobile Equipment Operator | Employee | 1.9 | 3 | EOT Overhead Crane Operator |  |  | English | 2026-06-13 18:53:21 | 167 |
| 143 | 193 | Pooja Verma | pooja193@tatasteel.com | tata@123 | Logistics | Locomotive Driver | Employee | 5.2 | 4 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 163 |
| 144 | 194 | Neha Joshi | neha194@tatasteel.com | tata@123 | Logistics | Mobile Equipment Operator | Employee | 1.9 | 3 | EOT Overhead Crane Operator |  |  | English | 2026-06-13 18:53:21 | 164 |
| 145 | 195 | Vikram Mehta | vikram195@tatasteel.com | tata@123 | Logistics | House Keeping with Mechanised Equipment | Employee | 1.5 | 2 | Rigger: Rigging of Heavy Material |  |  | English | 2026-06-13 18:53:21 | 165 |
| 146 | 197 | Pooja Shah | pooja197@tatasteel.com | tata@123 | Logistics | EOT Overhead Crane Operator | Employee | 1.4 | 3 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 166 |
| 147 | 198 | Suresh Kumar | suresh198@tatasteel.com | tata@123 | Logistics | EOT Overhead Crane Operator | Employee | 3.5 | 3 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 167 |
| 148 | 199 | Arun Reddy | arun199@tatasteel.com | tata@123 | Logistics | EOT Overhead Crane Operator | Employee | 6.3 | 3 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 163 |
| 149 | 200 | Rahul Nair | rahul200@tatasteel.com | tata@123 | Logistics | Locomotive Driver | New Joiner | 0.6 | 4 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 164 |
| 150 | 201 | Raj Shah | raj201@tatasteel.com | tata@123 | Logistics | Rigger: Rigging of Heavy Material | Employee | 5.8 | 3 | Mobile Equipment Operator |  |  | English | 2026-06-13 18:53:21 | 165 |
| 151 | 202 | Sneha Kumar | sneha202@tatasteel.com | tata@123 | Logistics | Locomotive Driver | New Joiner | 0.0 | 4 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 166 |
| 152 | 204 | Pooja Verma | pooja204@tatasteel.com | tata@123 | Logistics | Mobile Equipment Operator | Employee | 4.5 | 3 | EOT Overhead Crane Operator |  |  | English | 2026-06-13 18:53:21 | 167 |
| 153 | 205 | Neha Mehta | neha205@tatasteel.com | tata@123 | Logistics | EOT Overhead Crane Operator | Employee | 1.1 | 3 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 163 |
| 154 | 206 | Arjun Nair | arjun206@tatasteel.com | tata@123 | Logistics | Rigger: Rigging of Heavy Material | Employee | 3.9 | 3 | Mobile Equipment Operator |  |  | English | 2026-06-13 18:53:21 | 164 |
| 155 | 207 | Amit Patel | amit207@tatasteel.com | tata@123 | Logistics | Rigger: Rigging of Heavy Material | Employee | 3.9 | 3 | Mobile Equipment Operator |  |  | English | 2026-06-13 18:53:21 | 165 |
| 156 | 208 | Suresh Nair | suresh208@tatasteel.com | tata@123 | Logistics | Locomotive Driver | New Joiner | 0.5 | 4 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 166 |
| 157 | 211 | Ravi Shah | ravi211@tatasteel.com | tata@123 | Logistics | Mobile Equipment Operator | Employee | 3.8 | 3 | EOT Overhead Crane Operator |  |  | English | 2026-06-13 18:53:21 | 167 |
| 158 | 214 | Meera Patel | meera214@tatasteel.com | tata@123 | Logistics | EOT Overhead Crane Operator | Employee | 4.1 | 3 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 163 |
| 159 | 215 | Arjun Nair | arjun215@tatasteel.com | tata@123 | Logistics | Mobile Equipment Operator | Employee | 3.0 | 3 | EOT Overhead Crane Operator |  |  | English | 2026-06-13 18:53:21 | 164 |
| 160 | 216 | Kavya Shah | kavya216@tatasteel.com | tata@123 | Logistics | Locomotive Driver | Employee | 2.2 | 4 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 165 |
| 161 | 217 | Priya Sharma | priya217@tatasteel.com | tata@123 | Logistics | Locomotive Driver | Employee | 6.3 | 4 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 166 |
| 162 | 218 | Neha Singh | neha218@tatasteel.com | tata@123 | Logistics | Mobile Equipment Operator | Employee | 4.8 | 3 | EOT Overhead Crane Operator |  |  | English | 2026-06-13 18:53:21 | 167 |
| 163 | 221 | Kavya Verma | kavya221@tatasteel.com | tata@123 | Logistics | Locomotive Driver | Manager | 10.5 | 4 | Locomotive Driver |  |  | English | 2026-06-13 18:53:21 | 168 |
| 164 | 223 | Vikram Rao | vikram223@tatasteel.com | tata@123 | Logistics | House Keeping with Mechanised Equipment | Manager | 14.2 | 2 | Rigger: Rigging of Heavy Material |  |  | English | 2026-06-13 18:53:21 | 168 |
| 165 | 224 | Kavya Sharma | kavya224@tatasteel.com | tata@123 | Logistics | Rigger: Rigging of Heavy Material | Manager | 14.8 | 3 | Mobile Equipment Operator |  |  | English | 2026-06-13 18:53:21 | 168 |
| 166 | 226 | Suresh Iyer | suresh226@tatasteel.com | tata@123 | Logistics | Mobile Equipment Operator | Manager | 14.5 | 3 | EOT Overhead Crane Operator |  |  | English | 2026-06-13 18:53:21 | 168 |
| 167 | 227 | Ravi Iyer | ravi227@tatasteel.com | tata@123 | Logistics | Mobile Equipment Operator | Manager | 14.1 | 3 | EOT Overhead Crane Operator |  |  | English | 2026-06-13 18:53:21 | 168 |
| 168 | 228 | Pooja Verma | pooja228@tatasteel.com | tata@123 | Logistics | Mobile Equipment Operator | Executive | 23.8 | 3 |  |  |  | English | 2026-06-13 18:53:21 |  |
| 169 | 230 | Priya Singh | priya230@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 1.3 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 219 |
| 170 | 231 | Kavya Iyer | kavya231@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 5.5 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 220 |
| 171 | 233 | Suresh Mehta | suresh233@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 5.6 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 221 |
| 172 | 235 | Pooja Joshi | pooja235@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 1.9 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 222 |
| 173 | 238 | Rahul Pillai | rahul238@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 2.7 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 223 |
| 174 | 239 | Sneha Iyer | sneha239@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 6.0 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 219 |
| 175 | 240 | Ravi Mehta | ravi240@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 1.4 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 220 |
| 176 | 241 | Amit Shah | amit241@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 2.4 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 221 |
| 177 | 242 | Anita Shah | anita242@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 1.6 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 222 |
| 178 | 243 | Neha Nair | neha243@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 2.8 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 223 |
| 179 | 244 | Arun Das | arun244@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 6.1 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 219 |
| 180 | 245 | Amit Patel | amit245@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 2.5 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 220 |
| 181 | 246 | Ravi Mehta | ravi246@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 4.8 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 221 |
| 182 | 247 | Pooja Iyer | pooja247@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 6.6 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 222 |
| 183 | 248 | Suresh Iyer | suresh248@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 6.1 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 223 |
| 184 | 249 | Arun Das | arun249@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 1.2 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 219 |
| 185 | 250 | Raj Shah | raj250@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | New Joiner | 0.3 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 220 |
| 186 | 252 | Neha Sharma | neha252@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 2.4 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 221 |
| 187 | 253 | Amit Nair | amit253@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 3.1 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 222 |
| 188 | 254 | Anita Rao | anita254@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 2.7 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 223 |
| 189 | 256 | Anita Joshi | anita256@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 1.8 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 219 |
| 190 | 258 | Rahul Patel | rahul258@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | New Joiner | 0.0 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 220 |
| 191 | 259 | Raj Gupta | raj259@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 2.5 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 221 |
| 192 | 260 | Meera Kumar | meera260@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 6.6 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 222 |
| 193 | 261 | Amit Patel | amit261@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 4.4 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 223 |
| 194 | 262 | Vikram Kumar | vikram262@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 5.0 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 219 |
| 195 | 264 | Suresh Sharma | suresh264@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 3.5 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 220 |
| 196 | 267 | Kavya Nair | kavya267@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 2.3 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 221 |
| 197 | 269 | Arun Sharma | arun269@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 3.9 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 222 |
| 198 | 270 | Sneha Shah | sneha270@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 2.9 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 223 |
| 199 | 271 | Amit Nair | amit271@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 4.7 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 219 |
| 200 | 273 | Raj Kumar | raj273@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 4.3 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 220 |
| 201 | 274 | Kavya Patel | kavya274@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 2.8 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 221 |
| 202 | 275 | Vikram Gupta | vikram275@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 2.1 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 222 |
| 203 | 277 | Rahul Das | rahul277@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 3.0 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 223 |
| 204 | 281 | Priya Iyer | priya281@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 3.3 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 219 |
| 205 | 282 | Meera Kumar | meera282@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 4.7 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 220 |
| 206 | 283 | Meera Iyer | meera283@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 5.6 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 221 |
| 207 | 284 | Pooja Gupta | pooja284@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 4.6 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 222 |
| 208 | 286 | Kavya Rao | kavya286@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 3.6 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 223 |
| 209 | 287 | Arjun Joshi | arjun287@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | New Joiner | 0.7 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 219 |
| 210 | 288 | Amit Das | amit288@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 4.7 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 220 |
| 211 | 291 | Raj Kumar | raj291@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 5.6 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 221 |
| 212 | 292 | Kavya Nair | kavya292@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | New Joiner | 0.2 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 222 |
| 213 | 293 | Priya Kumar | priya293@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 6.9 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 223 |
| 214 | 296 | Priya Verma | priya296@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 3.2 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 219 |
| 215 | 297 | Vikram Patel | vikram297@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 5.0 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 220 |
| 216 | 298 | Neha Patel | neha298@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 3.5 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 221 |
| 217 | 299 | Amit Reddy | amit299@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | New Joiner | 1.0 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 222 |
| 218 | 300 | Arun Verma | arun300@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Employee | 6.2 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 223 |
| 219 | 302 | Pooja Iyer | pooja302@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Manager | 13.4 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 224 |
| 220 | 303 | Amit Sharma | amit303@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Manager | 9.2 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 224 |
| 221 | 304 | Ravi Iyer | ravi304@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Manager | 8.4 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 224 |
| 222 | 305 | Arjun Das | arjun305@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Manager | 14.4 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 224 |
| 223 | 306 | Anita Singh | anita306@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Manager | 11.2 | 3 | Laboratory Technician Physical |  |  | English | 2026-06-13 18:53:21 | 224 |
| 224 | 307 | Rahul Singh | rahul307@tatasteel.com | tata@123 | Quality & Laboratory | Laboratory Technician Physical | Executive | 21.7 | 3 |  |  |  | English | 2026-06-13 18:53:21 |  |
| 225 | 308 | Meera Reddy | meera308@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | Employee | 4.2 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 275 |
| 226 | 309 | Pooja Nair | pooja309@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 4.3 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 276 |
| 227 | 311 | Pooja Sharma | pooja311@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | Employee | 6.2 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 277 |
| 228 | 312 | Suresh Mehta | suresh312@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 5.8 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 278 |
| 229 | 314 | Raj Verma | raj314@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | Employee | 3.1 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 279 |
| 230 | 315 | Pooja Gupta | pooja315@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Employee | 5.2 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 275 |
| 231 | 316 | Rahul Rao | rahul316@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 3.2 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 276 |
| 232 | 319 | Anita Gupta | anita319@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Employee | 5.9 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 277 |
| 233 | 321 | Arjun Kumar | arjun321@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 5.4 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 278 |
| 234 | 323 | Priya Mehta | priya323@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | Employee | 3.4 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 279 |
| 235 | 325 | Arjun Singh | arjun325@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Employee | 1.9 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 275 |
| 236 | 327 | Raj Shah | raj327@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Employee | 5.0 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 276 |
| 237 | 328 | Arun Kumar | arun328@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Employee | 1.9 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 277 |
| 238 | 329 | Rahul Kumar | rahul329@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 6.3 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 278 |
| 239 | 330 | Vikram Gupta | vikram330@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | New Joiner | 1.0 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 279 |
| 240 | 331 | Meera Reddy | meera331@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Employee | 2.7 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 275 |
| 241 | 332 | Vikram Pillai | vikram332@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Employee | 4.9 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 276 |
| 242 | 333 | Ravi Rao | ravi333@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Employee | 2.9 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 277 |
| 243 | 334 | Vikram Singh | vikram334@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 3.8 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 278 |
| 244 | 335 | Arun Reddy | arun335@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | New Joiner | 0.4 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 279 |
| 245 | 336 | Vikram Rao | vikram336@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 2.7 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 275 |
| 246 | 337 | Meera Nair | meera337@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | Employee | 6.6 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 276 |
| 247 | 338 | Rahul Patel | rahul338@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Employee | 6.0 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 277 |
| 248 | 339 | Arun Shah | arun339@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | Employee | 2.7 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 278 |
| 249 | 340 | Kavya Rao | kavya340@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Employee | 6.6 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 279 |
| 250 | 341 | Amit Rao | amit341@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 5.3 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 275 |
| 251 | 342 | Sneha Patel | sneha342@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 3.8 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 276 |
| 252 | 343 | Neha Singh | neha343@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | Employee | 3.8 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 277 |
| 253 | 346 | Meera Singh | meera346@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | Employee | 6.3 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 278 |
| 254 | 347 | Sneha Pillai | sneha347@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 1.5 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 279 |
| 255 | 349 | Arjun Shah | arjun349@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 3.4 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 275 |
| 256 | 350 | Vikram Mehta | vikram350@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 2.4 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 276 |
| 257 | 351 | Pooja Nair | pooja351@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | Employee | 5.6 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 277 |
| 258 | 352 | Raj Singh | raj352@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | Employee | 1.2 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 278 |
| 259 | 353 | Sneha Nair | sneha353@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 6.4 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 279 |
| 260 | 355 | Arun Reddy | arun355@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | Employee | 3.7 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 275 |
| 261 | 359 | Raj Gupta | raj359@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 4.1 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 276 |
| 262 | 361 | Kavya Mehta | kavya361@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | New Joiner | 0.2 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 277 |
| 263 | 362 | Ravi Mehta | ravi362@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | Employee | 3.0 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 278 |
| 264 | 363 | Neha Joshi | neha363@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 1.3 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 279 |
| 265 | 364 | Suresh Kumar | suresh364@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 2.7 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 275 |
| 266 | 366 | Vikram Shah | vikram366@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Employee | 3.2 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 276 |
| 267 | 367 | Neha Iyer | neha367@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 5.3 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 277 |
| 268 | 369 | Raj Pillai | raj369@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 1.9 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 278 |
| 269 | 372 | Pooja Pillai | pooja372@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 1.8 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 279 |
| 270 | 373 | Kavya Gupta | kavya373@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Employee | 3.3 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 275 |
| 271 | 374 | Suresh Sharma | suresh374@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | Employee | 3.8 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 276 |
| 272 | 376 | Rahul Kumar | rahul376@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Plasma Cutter: Manual | Employee | 1.6 | 4 | Iron & Steel - Machinist |  |  | English | 2026-06-13 18:53:21 | 277 |
| 273 | 377 | Raj Pillai | raj377@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Employee | 5.5 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 278 |
| 274 | 378 | Arjun Shah | arjun378@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | New Joiner | 0.3 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 279 |
| 275 | 379 | Neha Pillai | neha379@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Manager | 14.6 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 280 |
| 276 | 380 | Anita Sharma | anita380@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Manager | 13.9 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 280 |
| 277 | 381 | Vikram Das | vikram381@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Tungsten Inert Gas Welder (GTAW) | Manager | 9.1 | 4 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 280 |
| 278 | 382 | Vikram Rao | vikram382@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Manager | 11.3 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 280 |
| 279 | 384 | Suresh Das | suresh384@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Manager | 11.9 | 3 | Iron & Steel - Tungsten Inert Gas Welder (GTAW) |  |  | English | 2026-06-13 18:53:21 | 280 |
| 280 | 385 | Meera Rao | meera385@tatasteel.com | tata@123 | Fabrication & Workshop | Iron & Steel - Machinist | Executive | 19.7 | 3 |  |  |  | English | 2026-06-13 18:53:21 |  |
| 281 | 386 | Sneha Nair | sneha386@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 5.4 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 331 |
| 282 | 387 | Arun Reddy | arun387@tatasteel.com | tata@123 | Utilities & Refractory | Fluid Management Operator: Rolling Mills | Employee | 4.2 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 332 |
| 283 | 388 | Amit Kumar | amit388@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 5.0 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 333 |
| 284 | 389 | Sneha Gupta | sneha389@tatasteel.com | tata@123 | Utilities & Refractory | Fluid Management Operator: Rolling Mills | Employee | 6.8 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 334 |
| 285 | 390 | Neha Reddy | neha390@tatasteel.com | tata@123 | Utilities & Refractory | Fluid Management Operator: Rolling Mills | Employee | 4.1 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 335 |
| 286 | 391 | Kavya Singh | kavya391@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 4.0 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 331 |
| 287 | 392 | Ravi Kumar | ravi392@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 2.8 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 332 |
| 288 | 393 | Pooja Shah | pooja393@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 1.4 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 333 |
| 289 | 394 | Ravi Das | ravi394@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 4.8 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 334 |
| 290 | 395 | Priya Iyer | priya395@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 1.7 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 335 |
| 291 | 396 | Meera Iyer | meera396@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 5.4 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 331 |
| 292 | 397 | Priya Iyer | priya397@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 4.2 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 332 |
| 293 | 399 | Rahul Singh | rahul399@tatasteel.com | tata@123 | Utilities & Refractory | Fluid Management Operator: Rolling Mills | Employee | 5.6 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 333 |
| 294 | 401 | Pooja Pillai | pooja401@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 5.5 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 334 |
| 295 | 403 | Ravi Rao | ravi403@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 3.7 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 335 |
| 296 | 404 | Pooja Rao | pooja404@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 2.6 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 331 |
| 297 | 405 | Raj Rao | raj405@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 4.5 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 332 |
| 298 | 406 | Vikram Verma | vikram406@tatasteel.com | tata@123 | Utilities & Refractory | Fluid Management Operator: Rolling Mills | Employee | 5.9 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 333 |
| 299 | 407 | Arjun Singh | arjun407@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | New Joiner | 0.7 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 334 |
| 300 | 408 | Meera Gupta | meera408@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 4.4 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 335 |
| 301 | 410 | Priya Gupta | priya410@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 5.0 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 331 |
| 302 | 411 | Sneha Gupta | sneha411@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 1.2 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 332 |
| 303 | 412 | Neha Reddy | neha412@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 6.8 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 333 |
| 304 | 416 | Kavya Mehta | kavya416@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 4.3 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 334 |
| 305 | 417 | Vikram Das | vikram417@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 5.4 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 335 |
| 306 | 419 | Pooja Reddy | pooja419@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 3.0 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 331 |
| 307 | 420 | Pooja Das | pooja420@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 4.1 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 332 |
| 308 | 421 | Rahul Das | rahul421@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 6.0 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 333 |
| 309 | 422 | Arun Nair | arun422@tatasteel.com | tata@123 | Utilities & Refractory | Fluid Management Operator: Rolling Mills | Employee | 2.0 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 334 |
| 310 | 423 | Vikram Nair | vikram423@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 1.7 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 335 |
| 311 | 424 | Pooja Shah | pooja424@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 4.0 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 331 |
| 312 | 425 | Sneha Patel | sneha425@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 2.7 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 332 |
| 313 | 426 | Sneha Kumar | sneha426@tatasteel.com | tata@123 | Utilities & Refractory | Fluid Management Operator: Rolling Mills | Employee | 3.5 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 333 |
| 314 | 428 | Vikram Verma | vikram428@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 1.3 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 334 |
| 315 | 429 | Amit Joshi | amit429@tatasteel.com | tata@123 | Utilities & Refractory | Fluid Management Operator: Rolling Mills | Employee | 2.5 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 335 |
| 316 | 430 | Arjun Nair | arjun430@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 2.4 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 331 |
| 317 | 431 | Ravi Nair | ravi431@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 4.9 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 332 |
| 318 | 433 | Meera Patel | meera433@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 3.9 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 333 |
| 319 | 434 | Kavya Rao | kavya434@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 6.6 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 334 |
| 320 | 436 | Anita Shah | anita436@tatasteel.com | tata@123 | Utilities & Refractory | Fluid Management Operator: Rolling Mills | Employee | 1.7 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 335 |
| 321 | 437 | Suresh Kumar | suresh437@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 3.4 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 331 |
| 322 | 438 | Raj Nair | raj438@tatasteel.com | tata@123 | Utilities & Refractory | Fluid Management Operator: Rolling Mills | Employee | 4.8 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 332 |
| 323 | 439 | Neha Singh | neha439@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 5.0 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 333 |
| 324 | 440 | Vikram Joshi | vikram440@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 5.6 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 334 |
| 325 | 441 | Priya Patel | priya441@tatasteel.com | tata@123 | Utilities & Refractory | Fluid Management Operator: Rolling Mills | Employee | 2.1 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 335 |
| 326 | 442 | Neha Joshi | neha442@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 4.8 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 331 |
| 327 | 444 | Meera Patel | meera444@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 4.6 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 332 |
| 328 | 445 | Vikram Gupta | vikram445@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Employee | 3.3 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 333 |
| 329 | 446 | Rahul Das | rahul446@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 2.4 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 334 |
| 330 | 447 | Arun Joshi | arun447@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Employee | 3.9 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 335 |
| 331 | 448 | Raj Verma | raj448@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Manager | 12.9 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 336 |
| 332 | 449 | Neha Pillai | neha449@tatasteel.com | tata@123 | Utilities & Refractory | Refractory Brick Layer | Manager | 10.1 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 336 |
| 333 | 450 | Meera Joshi | meera450@tatasteel.com | tata@123 | Utilities & Refractory | Fluid Management Operator: Rolling Mills | Manager | 8.8 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 336 |
| 334 | 451 | Anita Patel | anita451@tatasteel.com | tata@123 | Utilities & Refractory | Fluid Management Operator: Rolling Mills | Manager | 10.2 | 3 | Refractory Brick Layer |  |  | English | 2026-06-13 18:53:21 | 336 |
| 335 | 452 | Amit Nair | amit452@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Manager | 11.8 | 3 | Fluid Management Operator: Rolling Mills |  |  | English | 2026-06-13 18:53:21 | 336 |
| 336 | 453 | Anita Shah | anita453@tatasteel.com | tata@123 | Utilities & Refractory | Conveyor Operation and Maintenance | Executive | 16.9 | 3 |  |  |  | English | 2026-06-13 18:53:21 |  |
