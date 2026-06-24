import sqlite3
from collections import Counter
from fastapi import HTTPException

import logging

logging.basicConfig(
    level=logging.INFO
)


def get_employee_dashboard(user_id):
    logging.info(
        f"Employee dashboard requested: {user_id}"
    )

    conn = sqlite3.connect("data/database.db")
    conn.row_factory = sqlite3.Row

    cursor = conn.cursor()

    # --------------------
    # User Profile
    # --------------------

    user = cursor.execute("""
        SELECT
            user_id,
            name,
            department,
            current_role,
            target_role,
            experience_years,
            nsqf_level
        FROM users
        WHERE user_id = ?
    """, (user_id,)).fetchone()

    if user is None:
        conn.close()
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    # --------------------
    # Progress
    # --------------------

    progress = cursor.execute("""
        SELECT status
        FROM progress
        WHERE user_id = ?
    """, (user_id,)).fetchall()

    total_courses = len(progress)

    completed_courses = len([
        p for p in progress
        if p["status"] == "completed"
    ])

    in_progress_courses = len([
        p for p in progress
        if p["status"] == "in_progress"
    ])

    not_started_courses = len([
        p for p in progress
        if p["status"] == "not_started"
    ])

    completion_percentage = round(
        (
            completed_courses /
            max(total_courses, 1)
        ) * 100,
        2
    )

    # --------------------
    # Skill Gap
    # --------------------

    gaps = cursor.execute("""
        SELECT
            missing_skill,
            readiness_score
        FROM skill_gap
        WHERE user_id = ?
    """, (user_id,)).fetchall()

    missing_skills = [
        row["missing_skill"]
        for row in gaps
    ]

    readiness_score = (
        gaps[0]["readiness_score"]
        if gaps else 100
    )

    # --------------------
    # Known Skills
    # --------------------

    known_skills_rows = cursor.execute("""
        SELECT skill_name
        FROM user_skills
        WHERE user_id = ?
        ORDER BY skill_name
    """, (user_id,)).fetchall()

    known_skills = [
        row["skill_name"]
        for row in known_skills_rows
    ]

    # --------------------
    # Announcements
    # --------------------

    announcement_rows = cursor.execute("""
        SELECT
            announcement_id,
            title,
            priority,
            created_at
        FROM announcements
        WHERE target_audience IN
        ('ALL','EMPLOYEES')
        ORDER BY announcement_id DESC
        LIMIT 5
    """).fetchall()

    announcements = [
        dict(row)
        for row in announcement_rows
    ]

    # --------------------
    # Recent Documents
    # --------------------

    document_rows = cursor.execute("""
        SELECT
            document_id,
            document_name,
            category
        FROM documents
        ORDER BY document_id DESC
        LIMIT 5
    """).fetchall()

    recent_documents = [
        dict(row)
        for row in document_rows
    ]

    # --------------------
    # Recommendations
    # --------------------

    recommendations = cursor.execute("""
        SELECT DISTINCT
            r.course_id,
            c.course_name,
            r.priority
        FROM recommendations r
        JOIN courses c
        ON r.course_id = c.course_id
        WHERE r.user_id = ?
        LIMIT 5
    """, (user_id,)).fetchall()

    recommended_courses = [
        dict(row)
        for row in recommendations
    ]

    conn.close()

    return {

        "profile": {
            "user_id": user["user_id"],
            "name": user["name"],
            "department": user["department"],
            "current_role": user["current_role"],
            "target_role": user["target_role"],
            "experience_years":
                user["experience_years"],
            "nsqf_level":
                user["nsqf_level"]
        },

        "career_path": {
            "current_role":
                user["current_role"],

            "target_role":
                user["target_role"]
        },

        "learning_progress": {
            "completion_percentage":
                completion_percentage,

            "total_courses":
                total_courses,

            "completed_courses":
                completed_courses,

            "in_progress_courses":
                in_progress_courses,

            "not_started_courses":
                not_started_courses
        },

        "skill_gap": {
            "readiness_score":
                readiness_score,

            "missing_skill_count":
                len(missing_skills),

            "missing_skills":
                missing_skills
        },

        "known_skills":
            known_skills,

        "recommendations":
            recommended_courses,

        "announcements":
            announcements,

        "recent_documents":
            recent_documents
    }

def get_manager_dashboard(manager_id):

    logging.info(
        f"Manager dashboard requested: {manager_id}"
    )

    conn = sqlite3.connect("data/database.db")
    conn.row_factory = sqlite3.Row

    cursor = conn.cursor()

    # -------------------
    # Manager Info
    # -------------------

    manager = cursor.execute("""
        SELECT
            user_id,
            name,
            department,
            current_role
        FROM users
        WHERE user_id = ?
    """, (manager_id,)).fetchone()

    if manager is None:
        conn.close()
        raise HTTPException(
            status_code=404,
            detail="Manager not found"
        )

    # -------------------
    # Team Members
    # -------------------

    team = cursor.execute("""
        SELECT
            user_id,
            name
        FROM users
        WHERE manager_id = ?
    """, (manager_id,)).fetchall()

    team_ids = [t["user_id"] for t in team]

    team_size = len(team_ids)

    if team_size == 0:

        announcement_rows = cursor.execute("""
            SELECT
                announcement_id,
                title,
                priority,
                created_at
            FROM announcements
            WHERE target_audience IN
            ('ALL','MANAGERS')
            ORDER BY announcement_id DESC
            LIMIT 5
        """).fetchall()

        announcements = [
            dict(row)
            for row in announcement_rows
        ]

        conn.close()

        return {
            "manager": dict(manager),
            "team_size": 0,
            "team_members": [],
            "pending_approvals": [],
            "announcements": announcements
        }

    # -------------------
    # Team Progress
    # -------------------

    progress_rows = []

    completed = 0
    in_progress = 0
    not_started = 0

    for emp_id in team_ids:

        rows = cursor.execute("""
            SELECT status
            FROM progress
            WHERE user_id = ?
        """, (emp_id,)).fetchall()

        progress_rows.extend(rows)

    for row in progress_rows:

        if row["status"] == "completed":
            completed += 1

        elif row["status"] == "in_progress":
            in_progress += 1

        else:
            not_started += 1

    total_progress = (
        completed
        + in_progress
        + not_started
    )

    team_completion = round(
        (completed / max(total_progress, 1))
        * 100,
        2
    )

    # -------------------
    # Team Readiness
    # -------------------

    readiness_scores = []

    for emp_id in team_ids:

        row = cursor.execute("""
            SELECT readiness_score
            FROM skill_gap
            WHERE user_id = ?
            LIMIT 1
        """, (emp_id,)).fetchone()

        if row:
            readiness_scores.append(
                row["readiness_score"]
            )

    avg_readiness = round(
        sum(readiness_scores)
        / max(len(readiness_scores), 1),
        2
    )

    # -------------------
    # Missing Skills
    # -------------------

    gaps = cursor.execute("""
        SELECT missing_skill
        FROM skill_gap
        WHERE user_id IN (
            SELECT user_id
            FROM users
            WHERE manager_id = ?
        )
    """, (manager_id,)).fetchall()

    skill_counter = Counter(
        [
            g["missing_skill"]
            for g in gaps
        ]
    )

    top_missing_skills = []

    for skill, count in skill_counter.most_common(5):

        top_missing_skills.append({
            "skill": skill,
            "count": count
        })
        # -------------------
    # Pending Approvals
    # -------------------

    pending_requests = cursor.execute("""
        SELECT
            r.request_id,
            u.name,
            c.course_name,
            r.submitted_at
        FROM course_completion_requests r
        JOIN users u
            ON r.user_id = u.user_id
        JOIN courses c
            ON r.course_id = c.course_id
        WHERE r.status = 'Pending'
        ORDER BY r.request_id DESC
        LIMIT 10
    """).fetchall()

    pending_approvals = [
        dict(row)
        for row in pending_requests
    ]

    # -------------------
    # Announcements
    # -------------------

    announcement_rows = cursor.execute("""
        SELECT
            announcement_id,
            title,
            priority,
            created_at
        FROM announcements
        WHERE target_audience IN
        ('ALL','MANAGERS')
        ORDER BY announcement_id DESC
        LIMIT 5
    """).fetchall()

    announcements = [
        dict(row)
        for row in announcement_rows
    ]

    # -------------------
    # Team Members
    # -------------------

    team_members = [
        {
            "user_id": member["user_id"],
            "name": member["name"]
        }
        for member in team
    ]

    conn.close()

    return {

        "manager": {
            "user_id": manager["user_id"],
            "name": manager["name"],
            "department": manager["department"],
            "role": manager["current_role"]
        },

        "team_size": team_size,

        "team_members": team_members,

        "team_completion": team_completion,

        "team_readiness": avg_readiness,

        "progress_distribution": {
            "completed": completed,
            "in_progress": in_progress,
            "not_started": not_started
        },

        "top_missing_skills":
            top_missing_skills,

        "pending_approvals":
            pending_approvals,

        "announcements":
            announcements
    }


def get_executive_dashboard(executive_id):
    
    logging.info(
        f"Executive dashboard requested: {executive_id}"
    )

    conn = sqlite3.connect("data/database.db")
    conn.row_factory = sqlite3.Row

    cursor = conn.cursor()

    # ------------------
    # Executive Info
    # ------------------

    executive = cursor.execute("""
        SELECT
            user_id,
            name,
            department,
            current_role
        FROM users
        WHERE user_id = ?
    """, (executive_id,)).fetchone()

    if executive is None:
        conn.close()
        raise HTTPException(
            status_code=404,
            detail="Executive not found"
        )

    department = executive["department"]

    # ------------------
    # Managers
    # ------------------

    managers = cursor.execute("""
        SELECT user_id
        FROM users
        WHERE manager_id = ?
    """, (executive_id,)).fetchall()

    manager_ids = [
        m["user_id"]
        for m in managers
    ]

    manager_count = len(manager_ids)

    # ------------------
    # Department Employees
    # ------------------

    employees = cursor.execute("""
        SELECT user_id
        FROM users
        WHERE department = ?
        AND user_type IN ('Employee','New Joiner')
    """, (department,)).fetchall()

    employee_ids = [
        e["user_id"]
        for e in employees
    ]

    employee_count = len(employee_ids)

    # ------------------
    # Progress
    # ------------------

    progress_rows = cursor.execute("""
        SELECT p.status
        FROM progress p
        JOIN users u
        ON p.user_id = u.user_id
        WHERE u.department = ?
    """, (department,)).fetchall()

    completed = sum(
        1 for p in progress_rows
        if p["status"] == "completed"
    )

    in_progress = sum(
        1 for p in progress_rows
        if p["status"] == "in_progress"
    )

    not_started = sum(
        1 for p in progress_rows
        if p["status"] == "not_started"
    )

    total_progress = (
        completed
        + in_progress
        + not_started
    )

    department_completion = round(
        (completed / max(total_progress,1))
        * 100,
        2
    )

    # ------------------
    # Readiness
    # ------------------

    readiness_rows = cursor.execute("""
        SELECT readiness_score
        FROM skill_gap sg
        JOIN users u
        ON sg.user_id = u.user_id
        WHERE u.department = ?
    """, (department,)).fetchall()

    readiness_scores = [
        r["readiness_score"]
        for r in readiness_rows
    ]

    department_readiness = round(
        sum(readiness_scores)
        / max(len(readiness_scores),1),
        2
    )

    # ------------------
    # Skill Gaps
    # ------------------

    gaps = cursor.execute("""
        SELECT missing_skill
        FROM skill_gap sg
        JOIN users u
        ON sg.user_id = u.user_id
        WHERE u.department = ?
    """, (department,)).fetchall()

    counter = Counter(
        [
            g["missing_skill"]
            for g in gaps
        ]
    )

    top_skill_gaps = []

    for skill, count in counter.most_common(10):

        top_skill_gaps.append({
            "skill": skill,
            "count": count
        })
    
    # ------------------
    # Announcements
    # ------------------

    announcement_rows = cursor.execute("""
        SELECT
            announcement_id,
            title,
            priority,
            created_at
        FROM announcements
        WHERE target_audience IN
        ('ALL','EXECUTIVES')
        ORDER BY announcement_id DESC
        LIMIT 5
    """).fetchall()

    announcements = [
         dict(row)
         for row in announcement_rows
    ]

    conn.close()

    return {

        "executive": {
            "user_id":
                executive["user_id"],
            "name":
                executive["name"],
            "department":
                executive["department"],
            "role":
                executive["current_role"]
        },

        "manager_count":
            manager_count,

        "employee_count":
            employee_count,

        "department_completion":
            department_completion,

        "department_readiness":
            department_readiness,

        "department_progress": {
            "completed":
                completed,

            "in_progress":
                in_progress,

            "not_started":
                not_started
        },

        "top_skill_gaps":
            top_skill_gaps,

        "announcements":
            announcements
    }


def get_ld_dashboard():

    conn = sqlite3.connect("data/database.db")
    conn.row_factory = sqlite3.Row

    cursor = conn.cursor()

    # -------------------------
    # Overall Counts
    # -------------------------

    total_users = cursor.execute("""
        SELECT COUNT(*)
        FROM users
    """).fetchone()[0]

    total_courses = cursor.execute("""
        SELECT COUNT(*)
        FROM courses
    """).fetchone()[0]

    total_progress = cursor.execute("""
        SELECT COUNT(*)
        FROM progress
    """).fetchone()[0]

    # -------------------------
    # Overall Completion
    # -------------------------

    completed = cursor.execute("""
        SELECT COUNT(*)
        FROM progress
        WHERE status='completed'
    """).fetchone()[0]

    overall_completion = round(
        (completed / max(total_progress, 1)) * 100,
        2
    )

    # -------------------------
    # Average Readiness
    # -------------------------

    readiness_rows = cursor.execute("""
        SELECT readiness_score
        FROM skill_gap
    """).fetchall()

    readiness_scores = [
        row["readiness_score"]
        for row in readiness_rows
    ]

    average_readiness = round(
        sum(readiness_scores)
        / max(len(readiness_scores), 1),
        2
    )

    # -------------------------
    # Department Stats
    # -------------------------

    departments = cursor.execute("""
        SELECT DISTINCT department
        FROM users
        ORDER BY department
    """).fetchall()

    department_stats = []

    for dept_row in departments:

        dept = dept_row["department"]

        dept_progress = cursor.execute("""
            SELECT p.status
            FROM progress p
            JOIN users u
            ON p.user_id = u.user_id
            WHERE u.department = ?
        """, (dept,)).fetchall()

        dept_completed = sum(
            1 for p in dept_progress
            if p["status"] == "completed"
        )

        dept_completion = round(
            (
                dept_completed /
                max(len(dept_progress), 1)
            ) * 100,
            2
        )

        dept_readiness_rows = cursor.execute("""
            SELECT sg.readiness_score
            FROM skill_gap sg
            JOIN users u
            ON sg.user_id = u.user_id
            WHERE u.department = ?
        """, (dept,)).fetchall()

        dept_readiness_scores = [
            r["readiness_score"]
            for r in dept_readiness_rows
        ]

        dept_readiness = round(
            sum(dept_readiness_scores)
            / max(len(dept_readiness_scores), 1),
            2
        )

        department_stats.append({
            "department": dept,
            "completion": dept_completion,
            "readiness": dept_readiness
        })

    # -------------------------
    # Top Skill Gaps
    # -------------------------

    gaps = cursor.execute("""
        SELECT missing_skill
        FROM skill_gap
    """).fetchall()

    gap_counter = Counter(
        [g["missing_skill"] for g in gaps]
    )

    top_skill_gaps = []

    for skill, count in gap_counter.most_common(10):

        top_skill_gaps.append({
            "skill": skill,
            "count": count
        })

    # -------------------------
    # Top Courses
    # -------------------------

    course_rows = cursor.execute("""
        SELECT
            c.course_name,
            COUNT(*) as enrollments
        FROM progress p
        JOIN courses c
        ON p.course_id = c.course_id
        GROUP BY c.course_id
        ORDER BY enrollments DESC
        LIMIT 10
    """).fetchall()

    top_courses = [
        {
            "course_name": row["course_name"],
            "enrollments": row["enrollments"]
        }
        for row in course_rows
    ]

        # -------------------------
    # Documents Summary
    # -------------------------

    total_documents = cursor.execute("""
        SELECT COUNT(*)
        FROM documents
    """).fetchone()[0]

    document_categories = cursor.execute("""
        SELECT
            category,
            COUNT(*) as count
        FROM documents
        GROUP BY category
        ORDER BY count DESC
    """).fetchall()

    documents_summary = {
        "total_documents": total_documents,
        "categories": [
            dict(row)
            for row in document_categories
        ]
    }

    # -------------------------
    # Announcements
    # -------------------------

    announcement_rows = cursor.execute("""
        SELECT
            announcement_id,
            title,
            priority,
            created_at
        FROM announcements
        WHERE target_audience IN
        ('ALL','LND')
        ORDER BY announcement_id DESC
        LIMIT 5
    """).fetchall()

    announcements = [
        dict(row)
        for row in announcement_rows
    ]

    conn.close()

    return {

        "overview": {
            "total_users": total_users,
            "total_courses": total_courses,
            "total_progress_records": total_progress,
            "overall_completion": overall_completion,
            "average_readiness": average_readiness
        },

        "department_stats":
            department_stats,

        "top_skill_gaps":
            top_skill_gaps,

        "top_courses":
            top_courses,

        "documents_summary":
            documents_summary,

        "announcements":
            announcements
    }