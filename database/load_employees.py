import pandas as pd
import sqlite3
import random

# Load IBM HR dataset
df = pd.read_csv("data/raw/ibm_hr.csv")

# Keep useful columns
df = df[[
    'EmployeeNumber', 'Age', 'Department', 'JobRole', 'JobLevel',
    'TotalWorkingYears', 'Education', 'PerformanceRating', 'YearsAtCompany'
]]

df = df.rename(columns={
    'EmployeeNumber': 'employee_id',
    'TotalWorkingYears': 'experience_years',
    'JobLevel': 'job_level',
    'JobRole': 'role',
    'Department': 'department'
})

# Map IBM departments to Tata Steel departments
department_mapping = {
    'Sales': 'Marketing & Sales',
    'Research & Development': 'Steel R&D',
    'Human Resources': 'HR & L&D'
}
df['department'] = df['department'].replace(department_mapping)

# Map IBM roles to Tata Steel roles
role_mapping = {
    'Sales Executive': 'Junior Engineer',
    'Research Scientist': 'Research Analyst',
    'Laboratory Technician': 'Plant Technician',
    'Manufacturing Director': 'Plant Director',
    'Healthcare Representative': 'Safety Officer',
    'Manager': 'Department Manager',
    'Sales Representative': 'Business Analyst',
    'Human Resources': 'HR Executive',
    'Software Engineer': 'IT Engineer'
}
df['role'] = df['role'].replace(role_mapping)

# Assign user_type based on job level
def assign_user_type(level):
    if level == 1:
        return 'New Joiner'
    elif level in [2, 3]:
        return 'Employee'
    elif level == 4:
        return 'Manager'
    else:
        return 'Executive'

df['user_type'] = df['job_level'].apply(assign_user_type)

# Generate Indian names
first_names = ['Rahul', 'Priya', 'Amit', 'Sneha', 'Raj', 'Pooja', 'Vikram',
                'Neha', 'Arjun', 'Kavya', 'Suresh', 'Anita', 'Ravi', 'Meera', 'Arun']
last_names = ['Sharma', 'Singh', 'Kumar', 'Patel', 'Mehta', 'Gupta', 'Verma',
               'Shah', 'Joshi', 'Nair', 'Reddy', 'Rao', 'Iyer', 'Pillai', 'Das']

df['name'] = [
    f"{random.choice(first_names)} {random.choice(last_names)}"
    for _ in range(len(df))
]

df['email'] = df.apply(
    lambda row: f"{row['name'].split()[0].lower()}{row['employee_id']}@tatasteel.com",
    axis=1
)
df['password'] = 'tata@123'

# NSQF level approx mapping from job level
nsqf_mapping = {1: 3, 2: 4, 3: 5, 4: 6, 5: 7}
df['nsqf_level'] = df['job_level'].map(nsqf_mapping)

# Insert into SQLite
conn = sqlite3.connect("data/database.db")
cursor = conn.cursor()

rows = [
    (
        str(row['employee_id']), row['name'], row['email'], row['password'],
        row['department'], row['role'], row['user_type'],
        float(row['experience_years']), int(row['nsqf_level']),
        None, None, None, 'English'
    )
    for _, row in df.iterrows()
]

cursor.executemany('''
    INSERT OR REPLACE INTO users
    (employee_id, name, email, password, department, current_role, 
     user_type, experience_years, nsqf_level, target_role, 
     timeline, learning_preference, language_preference)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
''', rows)

conn.commit()
print(f"✅ Loaded {len(rows)} employees")
print(df['user_type'].value_counts())
conn.close()