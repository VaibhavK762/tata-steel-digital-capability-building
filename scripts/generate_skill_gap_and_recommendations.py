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

        matching_courses = courses[
            courses["skills_taught"]
            .str.lower()
            .str.contains(
                skill,
                na=False
            )
        ]

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
    f"✅ Skill gaps: {skill_gap_rows}"
)

print(
    f"✅ Recommendations: {recommendation_rows}"
)

conn.close()