from fastapi import APIRouter

from backend.services.dashboard_service import (
    get_employee_dashboard,
    get_manager_dashboard,
    get_executive_dashboard,
    get_ld_dashboard
)

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/employee/{user_id}")
def employee_dashboard(user_id: int):
    return get_employee_dashboard(user_id)

@router.get("/manager/{manager_id}")
def manager_dashboard(manager_id: int):
    return get_manager_dashboard(manager_id)

@router.get("/executive/{executive_id}")
def executive_dashboard(executive_id: int):
    return get_executive_dashboard(executive_id)

@router.get("/ld")
def ld_dashboard():
    return get_ld_dashboard()

@router.get("/stats")
def system_stats():

    import sqlite3

    conn = sqlite3.connect(
        "data/database.db"
    )

    cursor = conn.cursor()

    users = cursor.execute(
        "SELECT COUNT(*) FROM users"
    ).fetchone()[0]

    courses = cursor.execute(
        "SELECT COUNT(*) FROM courses"
    ).fetchone()[0]

    progress = cursor.execute(
        "SELECT COUNT(*) FROM progress"
    ).fetchone()[0]

    skill_gaps = cursor.execute(
        "SELECT COUNT(*) FROM skill_gap"
    ).fetchone()[0]

    conn.close()

    return {
        "users": users,
        "courses": courses,
        "progress_records": progress,
        "skill_gaps": skill_gaps
    }