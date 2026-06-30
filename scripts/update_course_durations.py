import sqlite3
import csv
import os

def main():
    db_path = "data/database.db"
    csv_path = "data/raw/tata_courses.csv"
    md_path = "database/Schemas/courses_schema_and_data.md"

    durations_map = {
        'C001': '1 week',
        'C002': '1 week',
        'C003': '1 week',
        'C004': '1 week',
        'C005': '3 weeks',
        'C006': '6 weeks',
        'C007': '6 weeks',
        'C008': '10 weeks',
        'C009': '10 weeks',
        'C010': '3 weeks',
        'C011': '1 week',
        'C012': '2 weeks',
        'C013': '2 weeks',
        'C014': '4 weeks',
        'C015': '3 weeks',
        'C016': '5 weeks',
        'C017': '2 weeks',
        'C018': '4 weeks',
        'C019': '1 week',
        'C020': '3 weeks',
        'C021': '3 weeks',
        'C022': '5 weeks',
        'C023': '1 week',
        'C024': '2 weeks',
        'C025': '4 weeks',
        'C026': '8 weeks',
        'C027': '2 weeks',
        'C028': '4 weeks',
        'C029': '5 weeks',
        'C030': '3 weeks',
        'C031': '2 weeks',
        'C032': '1 week',
        'C033': '1 week',
        'C034': '2 weeks',
        'C035': '4 weeks',
        'C999': '12 weeks'
    }

    # 1. Update SQLite Database
    print("Updating SQLite database...")
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    for course_id, duration in durations_map.items():
        cursor.execute(
            "UPDATE courses SET duration = ? WHERE course_id = ?",
            (duration, course_id)
        )
    conn.commit()

    # Query all courses back from the DB to rewrite CSV and MD
    cursor.execute("SELECT course_id, course_name, skills_taught, target_role, duration, level, provider FROM courses ORDER BY course_id")
    courses = cursor.fetchall()
    conn.close()
    print(f"Successfully updated {len(courses)} courses in database.")

    # 2. Update CSV File
    print("Updating tata_courses.csv...")
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["course_id", "course_name", "skills_taught", "target_role", "duration", "level", "provider"])
        for row in courses:
            # We skip C999 in tata_courses.csv if we want to keep it strictly for C001-C035,
            # but let's include it so that it is consistently part of the course setup.
            writer.writerow(row)
    print("Successfully updated CSV file.")

    # 3. Update Markdown Documentation
    print("Updating Markdown schema documentation...")
    # Read the markdown file up to the table section
    if os.path.exists(md_path):
        with open(md_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
        
        # Find where '## Table Data' starts
        table_data_idx = -1
        for idx, line in enumerate(lines):
            if "## Table Data" in line:
                table_data_idx = idx
                break
        
        if table_data_idx != -1:
            new_content = "".join(lines[:table_data_idx])
            new_content += "## Table Data\n"
            new_content += "| course_id | course_name | skills_taught | target_role | duration | level | provider |\n"
            new_content += "| --- | --- | --- | --- | --- | --- | --- |\n"
            for row in courses:
                # Escape any vertical pipes in fields
                row_escaped = [str(val).replace("|", "\\|") for val in row]
                new_content += f"| {row_escaped[0]} | {row_escaped[1]} | {row_escaped[2]} | {row_escaped[3]} | {row_escaped[4]} | {row_escaped[5]} | {row_escaped[6]} |\n"
            
            with open(md_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print("Successfully updated Markdown documentation.")
        else:
            print("Warning: Could not find '## Table Data' in markdown file.")
    else:
        print("Warning: Markdown schema file not found.")

if __name__ == "__main__":
    main()
