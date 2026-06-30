from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import sqlite3
from datetime import datetime
from fastapi import UploadFile, File, Form
import os
from datetime import datetime

router = APIRouter()

DB_PATH = "data/database.db"


@router.post("/lnd/announcement")
def create_announcement(
    title: str,
    message: str,
    target_audience: str,
    priority: str,
    created_by: str
):

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("""
    INSERT INTO announcements
    (
        title,
        message,
        target_audience,
        priority,
        created_by,
        created_at
    )
    VALUES (?,?,?,?,?,?)
    """,
    (
        title,
        message,
        target_audience,
        priority,
        created_by,
        datetime.now().strftime("%Y-%m-%d")
    ))

    conn.commit()

    announcement_id = cursor.lastrowid

    conn.close()

    return {
        "message": "Announcement created successfully",
        "announcement_id": announcement_id
    }

@router.post("/lnd/upload-document")
async def upload_document(
    file: UploadFile = File(...),
    category: str = Form(...),
    uploaded_by: str = Form(...)
):

    upload_dir = "data/documents"

    os.makedirs(
        upload_dir,
        exist_ok=True
    )

    file_path = os.path.join(
        upload_dir,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        buffer.write(
            await file.read()
        )

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("""
    INSERT INTO documents
    (
        document_name,
        category,
        upload_date,
        file_path,
        status,
        uploaded_by,
        indexed
    )
    VALUES (?,?,?,?,?,?,?)
    """,
    (
        file.filename,
        category,
        datetime.now().strftime("%Y-%m-%d"),
        file_path,
        "active",
        uploaded_by,
        0
    ))

    conn.commit()

    document_id = cursor.lastrowid

    conn.close()

    return {
        "message": "Document uploaded successfully",
        "document_id": document_id,
        "indexed": False
    }


class StartCourseRequest(BaseModel):
    user_id: int
    course_id: str


@router.post("/courses/start")
def start_course(request: StartCourseRequest):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Check if course exists
    course = cursor.execute("SELECT course_id FROM courses WHERE course_id = ?", (request.course_id,)).fetchone()
    if not course:
        conn.close()
        raise HTTPException(status_code=404, detail="Course not found")

    # Check if user exists
    user = cursor.execute("SELECT user_id FROM users WHERE user_id = ?", (request.user_id,)).fetchone()
    if not user:
        conn.close()
        raise HTTPException(status_code=404, detail="User not found")

    # Check if progress record exists
    existing = cursor.execute("""
        SELECT progress_id, status FROM progress
        WHERE user_id = ? AND course_id = ?
    """, (request.user_id, request.course_id)).fetchone()

    today = datetime.now().strftime("%Y-%m-%d")

    if existing:
        progress_id, status = existing
        if status == 'completed':
            conn.close()
            return {"message": "Course already completed"}

        cursor.execute("""
            UPDATE progress
            SET status = 'in_progress', start_date = ?
            WHERE progress_id = ?
        """, (today, progress_id))
    else:
        cursor.execute("""
            INSERT INTO progress (user_id, course_id, status, start_date)
            VALUES (?, ?, 'in_progress', ?)
        """, (request.user_id, request.course_id, today))

    conn.commit()
    conn.close()
    return {"message": "Enrolled in course successfully"}


class CreateCourseRequest(BaseModel):
    course_id: str
    course_name: str
    skills_taught: str
    target_role: str
    duration: str
    level: str
    provider: str


@router.post("/lnd/course")
def create_course(request: CreateCourseRequest):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Check if course_id already exists
    existing = cursor.execute("SELECT course_id FROM courses WHERE course_id = ?", (request.course_id,)).fetchone()
    if existing:
        conn.close()
        raise HTTPException(status_code=400, detail="Course ID already exists")

    cursor.execute("""
        INSERT INTO courses (course_id, course_name, skills_taught, target_role, duration, level, provider)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    """, (
        request.course_id,
        request.course_name,
        request.skills_taught,
        request.target_role,
        request.duration,
        request.level,
        request.provider
    ))

    conn.commit()
    conn.close()
    return {"message": "Course created successfully", "course_id": request.course_id}


@router.get("/courses")
def get_all_courses():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    rows = conn.execute("SELECT * FROM courses ORDER BY course_name").fetchall()
    conn.close()
    return [dict(row) for row in rows]