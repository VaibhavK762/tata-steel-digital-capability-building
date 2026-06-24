import sqlite3
import os

DB_PATH = "data/database.db"

def create_database():
    os.makedirs("data", exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # ── Users Table ──────────────────────
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            employee_id TEXT UNIQUE,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            department TEXT,
            current_role TEXT,
            user_type TEXT,
            experience_years REAL,
            nsqf_level INTEGER,
            target_role TEXT,
            timeline TEXT,
            learning_preference TEXT,
            language_preference TEXT DEFAULT 'English',
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            manager_id INTEGER,
            is_new_joiner INTEGER DEFAULT 1
        )
    ''')

    # ── User Skills Table (many-to-many) ─
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS user_skills (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            skill_name TEXT,
            FOREIGN KEY (user_id) REFERENCES users(user_id)
        )
    ''')

    # ── Courses Table ─────────────────────
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS courses (
            course_id TEXT PRIMARY KEY,
            course_name TEXT NOT NULL,
            skills_taught TEXT,
            target_role TEXT,
            duration TEXT,
            level TEXT,
            provider TEXT
        )
    ''')

    # ── Skills Table (role requirements from NSDC) ─
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS role_skills (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            role_name TEXT,
            nsqf_level INTEGER,
            skills TEXT,
            knowledge_areas TEXT,
            tools_equipment TEXT,
            source_file TEXT
        )
    ''')

    # ── Progress Table ────────────────────
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS progress (
            progress_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            course_id TEXT,
            status TEXT DEFAULT 'not_started',
            start_date TEXT,
            end_date TEXT,
            FOREIGN KEY (user_id) REFERENCES users(user_id),
            FOREIGN KEY (course_id) REFERENCES courses(course_id)
        )
    ''')

    # ── Equipment Sensor Data ─────────────
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS equipment_sensors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT,
            equipment_id TEXT,
            equipment_name TEXT,
            location TEXT,
            temperature_c REAL,
            vibration_mms REAL,
            pressure_psi REAL,
            status TEXT
        )
    ''')

    # ── Production KPI Data ───────────────
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS production_kpi (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT,
            unit TEXT,
            department TEXT,
            target_output INTEGER,
            actual_output INTEGER,
            efficiency_pct REAL,
            downtime_hours REAL,
            downtime_reason TEXT,
            performance_status TEXT
        )
    ''')

    # ── Announcements Table ────────────────
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS announcements (
            announcement_id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            message TEXT NOT NULL,
            target_audience TEXT NOT NULL,
            priority TEXT DEFAULT 'Medium',
            created_by TEXT,
            created_at TEXT
        )
    ''')

    # ── Documents Table ───────────────────
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS documents (
            document_id INTEGER PRIMARY KEY AUTOINCREMENT,
            document_name TEXT NOT NULL,
            category TEXT NOT NULL,
            upload_date TEXT,
            file_path TEXT NOT NULL,
            status TEXT DEFAULT 'active',
            uploaded_by TEXT,
            indexed INTEGER DEFAULT 0
        )
    ''')

    # ── Skill Gap Table ───────────────────
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS skill_gap (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            target_role TEXT,
            missing_skill TEXT,
            readiness_score REAL
        )
    ''')

    # ── Recommendations Table ─────────────
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS recommendations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            course_id TEXT,
            reason TEXT,
            priority TEXT
        )
    ''')

    # ── Onboarding Tasks Table ────────────
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS onboarding_tasks (
            task_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            task_name TEXT,
            status TEXT,
            due_date TEXT,
            completed_date TEXT
        )
    ''')

    # ── Course Completion Requests Table ──
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS course_completion_requests (
            request_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            course_id TEXT NOT NULL,
            status TEXT DEFAULT 'Pending',
            submitted_at TEXT,
            approved_at TEXT,
            approved_by INTEGER
        )
    ''')

    conn.commit()
    conn.close()
    print("✅ Database and all tables created successfully!")
    print(f"📁 Location: {DB_PATH}")

if __name__ == "__main__":
    create_database()