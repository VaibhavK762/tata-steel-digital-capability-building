import sqlite3

def dump_logins():
    conn = sqlite3.connect('data/database.db')
    conn.row_factory = sqlite3.Row
    
    # Fetch all users
    users_raw = conn.execute(
        'SELECT user_id, name, email, password, user_type, department, current_role, manager_id FROM users'
    ).fetchall()
    conn.close()
    
    # Separate into groups
    executives = []
    managers = []
    employees_and_joiners = []
    ld_team = []
    
    for u in users_raw:
        ut = u['user_type']
        if ut == 'Executive':
            executives.append(dict(u))
        elif ut == 'Manager':
            managers.append(dict(u))
        elif ut == 'L&D Team':
            ld_team.append(dict(u))
        elif ut in ('Employee', 'New Joiner'):
            employees_and_joiners.append(dict(u))
            
    # Sort everything alphabetically by name
    executives.sort(key=lambda x: x['name'])
    managers.sort(key=lambda x: x['name'])
    employees_and_joiners.sort(key=lambda x: x['name'])
    ld_team.sort(key=lambda x: x['name'])
    
    # Build hierarchy:
    # exec_id -> list of manager dicts
    managers_by_exec = {}
    for m in managers:
        exec_id = m['manager_id']
        if exec_id not in managers_by_exec:
            managers_by_exec[exec_id] = []
        managers_by_exec[exec_id].append(m)
        
    # manager_id -> list of employee/new joiner dicts
    reports_by_manager = {}
    for e in employees_and_joiners:
        m_id = e['manager_id']
        if m_id not in reports_by_manager:
            reports_by_manager[m_id] = []
        reports_by_manager[m_id].append(e)

    with open('user_logins.md', 'w') as f:
        f.write('# 🏛️ Tata Steel L&D Platform - User Logins Directory\n\n')
        f.write('This directory lists all the test user accounts populated in the local database (`data/database.db`), structured hierarchically from leadership down to individual contributors.\n\n')
        f.write('🔑 **Global Default Password:** `tata@123`\n\n')
        
        f.write('## 🔑 Key Personas / Quick Logins\n\n')
        f.write('Use these accounts for quick testing of specific platform features based on user role permissions:\n\n')
        f.write('| Persona | Sample User | Email Address | Password |\n')
        f.write('| --- | --- | --- | --- |\n')
        f.write('| **New Joiner (Onboarding)** | Sneha Shah | `sneha1@tatasteel.com` | `tata@123` |\n')
        f.write('| **Employee (Individual Contributor)** | Arun Patel | `arun2@tatasteel.com` | `tata@123` |\n')
        f.write('| **Manager (People Manager)** | Ravi Reddy | `ravi64@tatasteel.com` | `tata@123` |\n')
        f.write('| **Executive (Leadership)** | Vikram Das | `vikram73@tatasteel.com` | `tata@123` |\n')
        f.write('| **L&D Team (System Admin)** | L&D Admin | `lnd@tatasteel.com` | `tata@123` |\n\n')
        
        f.write('---\n\n')
        
        # 1. L&D Team
        f.write('## 🛠️ L&D Team Accounts\n\n')
        f.write('| Name | Email Address | Department | Current Role | Password |\n')
        f.write('| --- | --- | --- | --- | --- |\n')
        for u in ld_team:
            dept = u['department'] or '-'
            role = u['current_role'] or '-'
            f.write(f"| {u['name']} | `{u['email']}` | {dept} | {role} | `{u['password']}` |\n")
        f.write('\n---\n\n')
        
        # 2. Hierarchical structure
        f.write('## 👑 Executives & Organizational Hierarchy\n\n')
        f.write('Below is the complete organization chart. Employees and New Joiners are grouped under their respective Managers, who report to their respective Executives. Click on sections to expand/collapse them.\n\n')
        
        for exec_idx, ex in enumerate(executives, 1):
            ex_id = ex['user_id']
            f.write(f"### {exec_idx}. Executive: {ex['name']} \n")
            f.write(f"- **Email:** `{ex['email']}`\n")
            f.write(f"- **Department:** {ex['department'] or '-'}\n")
            f.write(f"- **Role:** {ex['current_role'] or '-'}\n\n")
            
            ex_managers = managers_by_exec.get(ex_id, [])
            if not ex_managers:
                f.write("> No direct report managers found for this executive.\n\n")
                continue
                
            f.write(f"<details>\n<summary>📂 <b>View {len(ex_managers)} Managers reporting to {ex['name']}</b></summary>\n<br>\n\n")
            
            for m_idx, m in enumerate(ex_managers, 1):
                m_id = m['user_id']
                f.write(f"#### 👔 Manager: {m['name']}\n")
                f.write(f"- **Email:** `{m['email']}`\n")
                f.write(f"- **Department:** {m['department'] or '-'}\n")
                f.write(f"- **Role:** {m['current_role'] or '-'}\n\n")
                
                m_reports = reports_by_manager.get(m_id, [])
                if not m_reports:
                    f.write("> No direct report employees found for this manager.\n\n")
                    continue
                
                f.write(f"<details>\n<summary>👥 <b>View {len(m_reports)} Direct Reports (Employees & New Joiners)</b></summary>\n<br>\n\n")
                
                f.write("| Name | Email Address | Type | Department | Current Role | Password |\n")
                f.write("| --- | --- | --- | --- | --- | --- |\n")
                for r in m_reports:
                    dept = r['department'] or '-'
                    role = r['current_role'] or '-'
                    f.write(f"| {r['name']} | `{r['email']}` | {r['user_type']} | {dept} | {role} | `{r['password']}` |\n")
                
                f.write("\n</details>\n\n")
                
            f.write("</details>\n\n---\n\n")
            
    print("Hierarchy logins list written successfully to user_logins.md")

if __name__ == '__main__':
    dump_logins()

