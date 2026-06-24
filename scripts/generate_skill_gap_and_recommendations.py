import sqlite3
import pandas as pd

conn = sqlite3.connect("data/database.db")

users = pd.read_sql("""
SELECT user_id,current_role,target_role
FROM users
""", conn)

role_skills = pd.read_sql("""
SELECT role_name,skills
FROM role_skills
""", conn)

user_skills = pd.read_sql("""
SELECT user_id,skill_name
FROM user_skills
""", conn)

courses = pd.read_sql("""
SELECT *
FROM courses
""", conn)

# ==========================================================
# Skill Synonym Mapping
# ==========================================================

SKILL_EQUIVALENTS = {

    "communication related skills": [
        "communication skills",
        "reporting"
    ],

    "problem solving attitude": [
        "problem solving",
        "rca"
    ],

    "analytical skills": [
        "process control",
        "measurement parameters",
        "calibration"
    ],

    "high concentration levels": [
        "process monitoring",
        "process control"
    ],

    "willingness to work in a factory environment": [
        "workplace discipline",
        "housekeeping"
    ],

    "physical fitness": [
        "equipment operation"
    ],

    "sharp reflex": [
        "equipment operation"
    ],

    "hydraulic equipment maintenance": [
        "hydraulic maintenance"
    ],

    "pneumatic equipment maintenance": [
        "pneumatic maintenance"
    ],

    "welding joints": [
        "gtaw welding"
    ],

    "welding procedure specification": [
        "gtaw welding"
    ],

    "gas tungsten arc welding (gtaw)": [
        "gtaw welding"
    ],

    "tungsten inert arc welding (gtaw)": [
        "gtaw welding"
    ],

    "control system operation": [
        "process control",
        "scada"
    ],

    "computer terminal operation": [
        "computer operations",
        "digital reporting"
    ],

    "assembly and disassembly": [
        "electronic assembly",
        "electrical assembly"
    ],

    "machining": [
        "machining"
    ],

    "inventory management": [
        "inventory management"
    ],

    "traffic signals": [
        "traffic signals"
    ],

    "troubleshooting": [
        "troubleshooting"
    ]
}

cursor = conn.cursor()

cursor.execute("DELETE FROM skill_gap")
cursor.execute("DELETE FROM recommendations")

skill_gap_rows = 0
recommendation_rows = 0

for _, user in users.iterrows():

    target_role = user["target_role"]

    if pd.isna(target_role):
        continue

    target_row = role_skills[
        role_skills["role_name"] == target_role
    ]

    if target_row.empty:
        continue

    target_skills = set([
        s.strip().lower()
        for s in str(
            target_row.iloc[0]["skills"]
        ).split(";")
        if s.strip()
    ])

    current_skills = set([
        str(x).strip().lower()
        for x in user_skills[
            user_skills["user_id"] == user["user_id"]
        ]["skill_name"].tolist()
    ])

    matched = target_skills.intersection(
        current_skills
    )

    missing = target_skills - current_skills

    readiness = round(
        (
            len(matched)
            / max(len(target_skills), 1)
        ) * 100,
        2
    )

    for skill in missing:

        cursor.execute("""
        INSERT INTO skill_gap
        (
            user_id,
            target_role,
            missing_skill,
            readiness_score
        )
        VALUES (?,?,?,?)
        """,
        (
            int(user["user_id"]),
            target_role,
            skill,
            readiness
        ))

        skill_gap_rows += 1

        # ==========================================
        # Exact + Synonym Based Matching
        # ==========================================

        search_terms = [skill]

        if skill in SKILL_EQUIVALENTS:
            search_terms.extend(
                SKILL_EQUIVALENTS[skill]
            )

        matching_courses = pd.DataFrame()

        for term in search_terms:

            matches = courses[
                courses["skills_taught"]
                .str.lower()
                .str.contains(
                    term,
                    na=False
                )
            ]

            matching_courses = pd.concat(
                [matching_courses, matches]
            )

        matching_courses = matching_courses.drop_duplicates(
            subset=["course_id"]
        )

        for _, course in matching_courses.iterrows():

            cursor.execute("""
            INSERT INTO recommendations
            (
                user_id,
                course_id,
                reason,
                priority
            )
            VALUES (?,?,?,?)
            """,
            (
                int(user["user_id"]),
                course["course_id"],
                f"Missing skill: {skill}",
                "High"
            ))

            recommendation_rows += 1

conn.commit()

print(
    f"✅ Skill gaps generated: {skill_gap_rows}"
)

print(
    f"✅ Recommendations generated: {recommendation_rows}"
)

conn.close()