# agents/learning_agent.py

import sqlite3
from langchain_groq import ChatGroq
from dotenv import load_dotenv

load_dotenv()

DB_PATH = "data/database.db"

llm = ChatGroq(
    model="llama-3.1-8b-instant"
)

PROMPT = """
You are a Tata Steel Learning & Development Assistant.

Employee Details:
Name: {name}
Department: {department}
Current Role: {current_role}
Target Role: {target_role}
Experience: {experience} years

Readiness Score: {readiness_score}

Readiness Interpretation:
0-30   = Beginner, significant development needed
31-60  = Developing, partially ready
61-80  = Nearly Ready
81-100 = Ready for progression

Missing Skills:
{missing_skills}

Recommended Courses:
{courses}

User Question:
{question}

Task:
{task}

Instructions:
1. Explain the readiness score correctly.
2. Explain why the missing skills matter.
3. Recommend the MOST RELEVANT courses first.
4. Mention only information provided.
5. Be encouraging and practical.
6. Keep answer under 120 words.
"""


def get_db():
    return sqlite3.connect(DB_PATH)


def get_employee(user_id):

    conn = get_db()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            user_id,
            name,
            department,
            current_role,
            target_role,
            experience_years
        FROM users
        WHERE user_id = ?
    """, (user_id,))

    row = cursor.fetchone()

    conn.close()

    return row


def get_skill_gaps(user_id):

    conn = get_db()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            missing_skill,
            readiness_score
        FROM skill_gap
        WHERE user_id = ?
    """, (user_id,))

    rows = cursor.fetchall()

    conn.close()

    return rows


def get_recommendations(user_id):

    conn = get_db()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            r.course_id,
            c.course_name,
            c.skills_taught,
            r.priority
        FROM recommendations r
        JOIN courses c
        ON r.course_id = c.course_id
        WHERE r.user_id = ?
        ORDER BY
            CASE
                WHEN r.priority='High' THEN 1
                WHEN r.priority='Medium' THEN 2
                ELSE 3
            END
    """, (user_id,))

    rows = cursor.fetchall()

    conn.close()

    return rows


def learning_agent(user_id, question):

    employee = get_employee(user_id)

    if not employee:
        return {
            "answer": "Employee not found."
        }

    (
        user_id,
        name,
        department,
        current_role,
        target_role,
        experience
    ) = employee

    skill_gaps = get_skill_gaps(user_id)

    missing_skills = [
        row[0]
        for row in skill_gaps
    ]

    readiness_score = (
        skill_gaps[0][1]
        if skill_gaps
        else 100
    )

    recommendations = get_recommendations(user_id)

    course_details = []

    for _, name_course, skills, priority in recommendations:

        course_details.append(
            f"{name_course} "
            f"(Priority: {priority}, "
            f"Skills: {skills})"
        )

    question_lower = question.lower()

    if "skill" in question_lower:

        task = """
        Focus ONLY on:
        - missing skills
        - readiness score
        - why those skills matter
        """

    elif "course" in question_lower or "training" in question_lower:

        task = """
        Focus ONLY on:
        - recommended courses
        - learning order
        - how the courses help
        """

    elif "promotion" in question_lower or "ready" in question_lower:

        task = """
        Focus ONLY on:
        - promotion readiness
        - readiness score
        - development areas
        """

    else:

        task = """
        Provide a complete learning roadmap:
        readiness,
        missing skills,
        recommended courses,
        and next steps.
        """

    prompt = PROMPT.format(
        name=name,
        department=department,
        current_role=current_role,
        target_role=target_role,
        experience=experience,
        readiness_score=readiness_score,
        missing_skills="\n".join(
            f"- {s}" for s in missing_skills
        ) if missing_skills else "None",
        courses="\n".join(
            f"- {c}"
            for c in course_details
        ) if course_details else "No recommendations",
        question=question,
        task=task
    )

    response = llm.invoke(prompt)

    return {
        "employee": {
            "name": name,
            "current_role": current_role,
            "target_role": target_role,
            "department": department
        },
        "readiness_score": readiness_score,
        "missing_skills": missing_skills,
        "recommended_courses": [
            c[1] for c in recommendations
        ],
        "answer": response.content
    }


if __name__ == "__main__":

    result = learning_agent(15, "Give me a learning roadmap")

    print("\n=== AI RESPONSE ===\n")
    print(result["answer"])

    print("\n=== READINESS ===")
    print(result["readiness_score"])

    print("\n=== MISSING SKILLS ===")
    print(result["missing_skills"])

    print("\n=== COURSES ===")
    print(result["recommended_courses"])