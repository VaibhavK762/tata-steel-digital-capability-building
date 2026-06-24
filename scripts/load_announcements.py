announcements = [

    (
        "Plant Safety Drill",
        "A plant-wide emergency evacuation drill will be conducted on Friday at 10:00 AM. All employees must participate.",
        "ALL",
        "High",
        "Safety Team"
    ),

    (
        "New SOP Uploaded",
        "Updated Standard Operating Procedures for Rolling Mills have been uploaded to the document repository.",
        "EMPLOYEES",
        "Medium",
        "Operations Team"
    ),

    (
        "Welcome New Joiners",
        "All new employees are requested to complete onboarding tasks and mandatory training within their first 30 days.",
        "NEW_JOINERS",
        "High",
        "HR Team"
    ),

    (
        "Leadership Development Program",
        "Nominations are now open for the Leadership Development Program for frontline managers.",
        "MANAGERS",
        "Medium",
        "L&D Team"
    ),

    (
        "Quarterly Learning Review",
        "Department-wise learning progress review meeting will be conducted next week.",
        "EXECUTIVES",
        "Medium",
        "L&D Team"
    ),

    (
        "Mandatory Safety Training Reminder",
        "Employees with pending safety courses must complete them before month end.",
        "EMPLOYEES",
        "High",
        "Safety Team"
    ),

    (
        "Skill Development Week",
        "A special learning campaign has been launched focusing on communication and problem-solving skills.",
        "ALL",
        "Medium",
        "L&D Team"
    ),

    (
        "Maintenance Shutdown Notice",
        "Scheduled maintenance activities will take place this weekend. Follow all safety instructions during the shutdown period.",
        "ALL",
        "High",
        "Maintenance Team"
    ),

    (
        "New Technical Manuals Available",
        "New maintenance and operations manuals have been added to the knowledge repository.",
        "EMPLOYEES",
        "Low",
        "Knowledge Management Team"
    ),

    (
        "Manager Approval Pending",
        "Managers are requested to review and approve pending course completion requests from team members.",
        "MANAGERS",
        "Medium",
        "L&D Team"
    )
]

from datetime import datetime
import sqlite3

conn = sqlite3.connect("data/database.db")
cursor = conn.cursor()

cursor.execute("DELETE FROM announcements")

for title, message, audience, priority, created_by in announcements:

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
        audience,
        priority,
        created_by,
        datetime.now().strftime("%Y-%m-%d")
    ))

conn.commit()

count = cursor.execute(
    "SELECT COUNT(*) FROM announcements"
).fetchone()[0]

print(f"✅ Loaded {count} announcements")

conn.close()