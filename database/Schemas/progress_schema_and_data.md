# Schema and Data: progress

This document provides the database schema and full data dump for the `progress` table in the SQLite database (`data/database.db`).

## Table Summary
- **Total Columns:** 6
- **Total Rows:** 0

## SQL Definition
```sql
CREATE TABLE progress (
            progress_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            course_id TEXT,
            status TEXT DEFAULT 'not_started',
            start_date TEXT,
            end_date TEXT,
            FOREIGN KEY (user_id) REFERENCES users(user_id),
            FOREIGN KEY (course_id) REFERENCES courses(course_id)
        )
```

## Column Definitions
| Column ID | Column Name | Data Type | Primary Key? | Nullable? | Default | Foreign Key Reference |
|---|---|---|---|---|---|---|
| 0 | `progress_id` | INTEGER | Yes | Yes | `NULL` |  |
| 1 | `user_id` | INTEGER | No | Yes | `NULL` | REFERENCES users(user_id) |
| 2 | `course_id` | TEXT | No | Yes | `NULL` | REFERENCES courses(course_id) |
| 3 | `status` | TEXT | No | Yes | `'not_started'` |  |
| 4 | `start_date` | TEXT | No | Yes | `NULL` |  |
| 5 | `end_date` | TEXT | No | Yes | `NULL` |  |

## Table Data
*This table is currently empty.*