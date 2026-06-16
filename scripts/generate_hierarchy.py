import sqlite3
import pandas as pd

conn = sqlite3.connect("data/database.db")

users = pd.read_sql(
    "SELECT * FROM users",
    conn
)

# reset
users["manager_id"] = None

for department in users["department"].unique():

    dept_users = users[
        users["department"] == department
    ]

    executives = dept_users[
        dept_users["user_type"] == "Executive"
    ]

    managers = dept_users[
        dept_users["user_type"] == "Manager"
    ]

    employees = dept_users[
        dept_users["user_type"].isin(
            ["Employee", "New Joiner"]
        )
    ]

    executive_id = int(
        executives.iloc[0]["user_id"]
    )

    manager_ids = managers["user_id"].tolist()

    # Managers report to Executive

    for manager_id in manager_ids:

        users.loc[
            users["user_id"] == manager_id,
            "manager_id"
        ] = executive_id

    # Employees report to Managers

    employees = employees.sort_values(
        "user_id"
    )

    employee_ids = employees[
        "user_id"
    ].tolist()

    for i, emp_id in enumerate(employee_ids):

        assigned_manager = manager_ids[
            i % len(manager_ids)
        ]

        users.loc[
            users["user_id"] == emp_id,
            "manager_id"
        ] = assigned_manager

# Save back

cursor = conn.cursor()

for _, row in users.iterrows():

    cursor.execute(
        """
        UPDATE users
        SET manager_id=?
        WHERE user_id=?
        """,
        (
            None if pd.isna(row["manager_id"])
            else int(row["manager_id"]),
            int(row["user_id"])
        )
    )

conn.commit()

print("✅ Hierarchy generated")

conn.close()