import sqlite3
from datetime import datetime

DB_PATH = "data/database.db"


def submit_completion_request(user_id, course_id):

    conn = sqlite3.connect(DB_PATH)

    conn.execute("""
    INSERT INTO course_completion_requests
    (
        user_id,
        course_id,
        status,
        submitted_at
    )
    VALUES (?,?,?,?)
    """,
    (
        user_id,
        course_id,
        "Pending",
        datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    ))

    conn.commit()
    conn.close()

    return {
        "message": "Completion request submitted"
    }


def get_pending_requests():

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row

    rows = conn.execute("""
    SELECT
        r.request_id,
        r.user_id,
        u.name,
        r.course_id,
        c.course_name,
        r.status,
        r.submitted_at
    FROM course_completion_requests r
    JOIN users u
        ON r.user_id = u.user_id
    JOIN courses c
        ON r.course_id = c.course_id
    WHERE r.status='Pending'
    ORDER BY r.request_id DESC
    """).fetchall()

    conn.close()

    return [dict(x) for x in rows]


def approve_request(request_id, manager_id):

    conn = sqlite3.connect(DB_PATH)

    request = conn.execute("""
    SELECT user_id, course_id
    FROM course_completion_requests
    WHERE request_id=?
    """, (request_id,)).fetchone()

    if not request:
        conn.close()
        return {"error": "Request not found"}

    user_id, course_id = request

    conn.execute("""
    UPDATE course_completion_requests
    SET
        status='Approved',
        approved_at=?,
        approved_by=?
    WHERE request_id=?
    """,
    (
        datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        manager_id,
        request_id
    ))

    conn.execute("""
    UPDATE progress
    SET status='completed'
    WHERE user_id=? AND course_id=?
    """,
    (
        user_id,
        course_id
    ))

    conn.commit()
    conn.close()

    return {
        "message": "Request approved"
    }


def reject_request(request_id, manager_id):

    conn = sqlite3.connect(DB_PATH)

    conn.execute("""
    UPDATE course_completion_requests
    SET
        status='Rejected',
        approved_at=?,
        approved_by=?
    WHERE request_id=?
    """,
    (
        datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        manager_id,
        request_id
    ))

    conn.commit()
    conn.close()

    return {
        "message": "Request rejected"
    }