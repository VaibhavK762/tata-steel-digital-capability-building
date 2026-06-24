from fastapi import APIRouter
import sqlite3

router = APIRouter()

DB_PATH = "data/database.db"


@router.get("/documents")
def get_documents():

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row

    rows = conn.execute("""
        SELECT *
        FROM documents
        ORDER BY document_name
    """).fetchall()

    conn.close()

    return [dict(row) for row in rows]


@router.get("/documents/recent")
def get_recent_documents():

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row

    rows = conn.execute("""
        SELECT *
        FROM documents
        ORDER BY document_id DESC
        LIMIT 10
    """).fetchall()

    conn.close()

    return [dict(row) for row in rows]


@router.get("/documents/category/{category}")
def get_documents_by_category(category: str):

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row

    rows = conn.execute("""
        SELECT *
        FROM documents
        WHERE LOWER(category)=LOWER(?)
        ORDER BY document_name
    """, (category,)).fetchall()

    conn.close()

    return [dict(row) for row in rows]