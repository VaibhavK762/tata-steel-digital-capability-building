from fastapi import APIRouter
import sqlite3

router = APIRouter()

DB_PATH = "data/database.db"


@router.get("/announcements")
def get_announcements():

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row

    rows = conn.execute("""
        SELECT *
        FROM announcements
        ORDER BY announcement_id DESC
    """).fetchall()

    conn.close()

    return [dict(row) for row in rows]


@router.get("/announcements/{audience}")
def get_announcements_by_audience(audience: str):

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row

    rows = conn.execute("""
        SELECT *
        FROM announcements
        WHERE target_audience='ALL'
           OR target_audience=?
        ORDER BY announcement_id DESC
    """, (audience,)).fetchall()

    conn.close()

    return [dict(row) for row in rows]