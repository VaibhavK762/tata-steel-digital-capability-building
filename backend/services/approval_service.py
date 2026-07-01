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

    # --- Sync user skills and recalculate gaps dynamically ---
    try:
        # Fetch skills taught by the course
        course_row = conn.execute("""
            SELECT skills_taught
            FROM courses
            WHERE course_id=?
        """, (course_id,)).fetchone()
        
        if course_row and course_row[0]:
            # Parse taught skills (comma separated)
            skills = [s.strip() for s in course_row[0].split(",") if s.strip()]
            
            # Fetch existing user skills
            existing_rows = conn.execute("""
                SELECT skill_name
                FROM user_skills
                WHERE user_id=?
            """, (user_id,)).fetchall()
            existing_skills = {row[0].lower() for row in existing_rows}
            
            # Insert any new skills
            for skill in skills:
                if skill.lower() not in existing_skills:
                    conn.execute("""
                        INSERT INTO user_skills (user_id, skill_name)
                        VALUES (?, ?)
                    """, (user_id, skill))
                    
        # Recalculate skill gap and readiness score
        user_row = conn.execute("""
            SELECT target_role
            FROM users
            WHERE user_id=?
        """, (user_id,)).fetchone()
        
        if user_row and user_row[0]:
            target_role = user_row[0]
            
            # Fetch target skills requirements
            role_row = conn.execute("""
                SELECT skills
                FROM role_skills
                WHERE role_name=?
                LIMIT 1
            """, (target_role,)).fetchone()
            
            if role_row and role_row[0]:
                target_skills = {
                    s.strip().lower()
                    for s in role_row[0].split(";")
                    if s.strip()
                }
                
                # Fetch updated user skills
                updated_rows = conn.execute("""
                    SELECT skill_name
                    FROM user_skills
                    WHERE user_id=?
                """, (user_id,)).fetchall()
                current_skills = {
                    row[0].strip().lower()
                    for row in updated_rows
                }
                
                matched = target_skills.intersection(current_skills)
                missing = target_skills - current_skills
                
                readiness = round((len(matched) / max(len(target_skills), 1)) * 100, 2)
                
                # Delete old skill gap entries for this user
                conn.execute("""
                    DELETE FROM skill_gap
                    WHERE user_id=?
                """, (user_id,))
                
                # Insert updated skill gaps
                for skill in missing:
                    conn.execute("""
                        INSERT INTO skill_gap (user_id, target_role, missing_skill, readiness_score)
                        VALUES (?, ?, ?, ?)
                    """, (user_id, target_role, skill, readiness))
    except Exception as e:
        print(f"Error updating skills/gaps on approval: {e}")

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