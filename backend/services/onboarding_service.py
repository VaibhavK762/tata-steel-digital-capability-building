import sqlite3

DB_PATH = "data/database.db"


def get_onboarding_progress(user_id):

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row

    tasks = conn.execute("""
        SELECT *
        FROM onboarding_tasks
        WHERE user_id=?
    """, (user_id,)).fetchall()

    conn.close()

    tasks = [dict(x) for x in tasks]

    total = len(tasks)

    completed = len([
        t for t in tasks
        if t["status"] == "Completed"
    ])

    percentage = round(
        (completed / total) * 100,
        2
    ) if total else 0

    return {
        "completion_percentage": percentage,
        "completed_tasks": completed,
        "total_tasks": total,
        "tasks": tasks
    }


def update_new_joiner_status(user_id):

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row

    tasks = conn.execute("""
        SELECT status
        FROM onboarding_tasks
        WHERE user_id=?
    """, (user_id,)).fetchall()

    if not tasks:
        conn.close()
        return

    total = len(tasks)

    completed = len([
        t for t in tasks
        if t["status"] == "Completed"
    ])

    completion_percentage = round(
        (completed / total) * 100,
        2
    )

    if completion_percentage == 100:

        conn.execute("""
        UPDATE users
        SET is_new_joiner = 0
        WHERE user_id = ?
        """, (user_id,))

        print(
            f"✅ User {user_id} promoted from New Joiner to Employee"
        )

    else:

        conn.execute("""
        UPDATE users
        SET is_new_joiner = 1
        WHERE user_id = ?
        """, (user_id,))

    conn.commit()
    conn.close()


def complete_onboarding_task(task_id, user_id):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Verify that the task exists and belongs to the user
    task = cursor.execute("""
        SELECT status FROM onboarding_tasks
        WHERE task_id = ? AND user_id = ?
    """, (task_id, user_id)).fetchone()

    if not task:
        conn.close()
        return {"error": "Onboarding task not found"}

    from datetime import datetime
    today = datetime.now().strftime("%Y-%m-%d")

    cursor.execute("""
        UPDATE onboarding_tasks
        SET status = 'Completed', completed_date = ?
        WHERE task_id = ? AND user_id = ?
    """, (today, task_id, user_id))

    conn.commit()
    conn.close()

    # Automatically check if user completed onboarding and update user status
    update_new_joiner_status(user_id)

    return {"message": "Onboarding task completed successfully"}