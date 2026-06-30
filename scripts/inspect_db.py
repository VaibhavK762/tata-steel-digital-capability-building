import sqlite3

def inspect():
    conn = sqlite3.connect("data/database.db")
    cursor = conn.cursor()
    
    print("=== Users ===")
    cursor.execute("SELECT user_id, name, department, current_role, target_role, user_type FROM users WHERE user_id IN (15, 23)")
    for row in cursor.fetchall():
        print(row)
        
    print("\n=== Skill Gap for User 15 ===")
    cursor.execute("SELECT missing_skill, readiness_score FROM skill_gap WHERE user_id = 15")
    for row in cursor.fetchall():
        print(row)
        
    print("\n=== Recommendations for User 15 ===")
    cursor.execute("SELECT r.course_id, c.course_name, r.priority FROM recommendations r JOIN courses c ON r.course_id = c.course_id WHERE r.user_id = 15")
    for row in cursor.fetchall():
        print(row)
        
    print("\n=== Production KPI Units ===")
    cursor.execute("SELECT DISTINCT unit FROM production_kpi")
    for row in cursor.fetchall():
        print(row)
        
    print("\n=== Production KPI Unit 3 Downtime Reasons ===")
    cursor.execute("SELECT downtime_reason, COUNT(*), SUM(downtime_hours) FROM production_kpi WHERE unit = 'Unit 3' AND downtime_reason != 'None' GROUP BY downtime_reason")
    for row in cursor.fetchall():
        print(row)
        
    conn.close()

if __name__ == "__main__":
    inspect()
