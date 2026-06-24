import sqlite3
import logging

logging.basicConfig(level=logging.INFO)

DB_PATH = "data/database.db"

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def login(email: str, password: str):
    """Verify credentials and return user profile"""
    conn = get_db()
    cursor = conn.cursor()

    user = cursor.execute("""
        SELECT
            user_id, name, email, department,
            current_role, user_type, experience_years,
            nsqf_level, target_role, manager_id
        FROM users
        WHERE email = ? AND password = ?
    """, (email, password)).fetchone()

    conn.close()

    if not user:
        return None

    return {
        "user_id": user["user_id"],
        "name": user["name"],
        "email": user["email"],
        "department": user["department"],
        "current_role": user["current_role"],
        "user_type": user["user_type"],
        "experience_years": user["experience_years"],
        "nsqf_level": user["nsqf_level"],
        "target_role": user["target_role"],
        "manager_id": user["manager_id"]
    }

def get_user_by_id(user_id: int):
    """Get user profile by ID"""
    conn = get_db()
    cursor = conn.cursor()

    user = cursor.execute("""
        SELECT
            user_id, name, email, department,
            current_role, user_type, experience_years,
            nsqf_level, target_role, manager_id
        FROM users
        WHERE user_id = ?
    """, (user_id,)).fetchone()

    conn.close()

    if not user:
        return None

    return dict(user)