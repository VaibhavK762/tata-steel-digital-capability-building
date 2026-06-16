import sqlite3
import pandas as pd

conn = sqlite3.connect("data/database.db")

print(
    pd.read_sql("""
    SELECT
        user_id,
        name,
        department
    FROM users
    WHERE user_type='Manager'
    LIMIT 10
    """, conn)
)

conn.close()