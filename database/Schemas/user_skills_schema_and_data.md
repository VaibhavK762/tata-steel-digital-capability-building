# Schema and Data: user_skills

This document provides the database schema and full data dump for the `user_skills` table in the SQLite database (`data/database.db`).

## Table Summary
- **Total Columns:** 3
- **Total Rows:** 0

## SQL Definition
```sql
CREATE TABLE user_skills (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            skill_name TEXT,
            FOREIGN KEY (user_id) REFERENCES users(user_id)
        )
```

## Column Definitions
| Column ID | Column Name | Data Type | Primary Key? | Nullable? | Default | Foreign Key Reference |
|---|---|---|---|---|---|---|
| 0 | `id` | INTEGER | Yes | Yes | `NULL` |  |
| 1 | `user_id` | INTEGER | No | Yes | `NULL` | REFERENCES users(user_id) |
| 2 | `skill_name` | TEXT | No | Yes | `NULL` |  |

## Table Data
*This table is currently empty.*