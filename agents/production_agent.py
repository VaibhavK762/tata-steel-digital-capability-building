# agents/production_agent.py
import sqlite3
from langchain_groq import ChatGroq
from dotenv import load_dotenv

load_dotenv()

DB_PATH = "data/database.db"
llm = ChatGroq(model="llama-3.1-8b-instant")

INSIGHT_PROMPT = """
You are a Production Intelligence Assistant for Tata Steel 
management. Analyze this production data and answer the 
question using ONLY the data provided. Be specific with 
numbers. Where data is already ranked or sorted, report 
it as given — do not recalculate or re-derive the ranking 
yourself. Keep response under 120 words.

Production Summary:
{summary}

Question: {question}

Answer:
"""

def get_db():
    return sqlite3.connect(DB_PATH)

def get_unit_summary(unit=None, days=30):
    """Get aggregated production stats, optionally filtered by unit"""
    conn = get_db()
    cursor = conn.cursor()

    query = """
        SELECT 
            unit,
            department,
            COUNT(*) as days_recorded,
            ROUND(AVG(efficiency_pct), 1) as avg_efficiency,
            ROUND(AVG(downtime_hours), 2) as avg_downtime,
            SUM(target_output) as total_target,
            SUM(actual_output) as total_actual,
            SUM(CASE WHEN performance_status='Critical' THEN 1 ELSE 0 END) as critical_days,
            SUM(CASE WHEN performance_status='Below Target' THEN 1 ELSE 0 END) as below_target_days,
            SUM(CASE WHEN performance_status='On Target' THEN 1 ELSE 0 END) as on_target_days
        FROM production_kpi
    """
    params = []
    if unit:
        query += " WHERE unit = ?"
        params.append(unit)
    query += " GROUP BY unit, department"

    cursor.execute(query, params)
    rows = cursor.fetchall()
    conn.close()

    summaries = []
    for row in rows:
        summaries.append({
            "unit": row[0],
            "department": row[1],
            "days_recorded": row[2],
            "avg_efficiency": row[3],
            "avg_downtime_hours": row[4],
            "total_target": row[5],
            "total_actual": row[6],
            "critical_days": row[7],
            "below_target_days": row[8],
            "on_target_days": row[9]
        })
    return summaries

def get_top_downtime_reasons(unit=None, limit=5):
    """Find most common downtime causes, pre-ranked"""
    conn = get_db()
    cursor = conn.cursor()

    query = """
        SELECT downtime_reason, COUNT(*) as occurrences, 
               ROUND(SUM(downtime_hours), 1) as total_hours
        FROM production_kpi
        WHERE downtime_reason != 'None'
    """
    params = []
    if unit:
        query += " AND unit = ?"
        params.append(unit)
    query += " GROUP BY downtime_reason ORDER BY total_hours DESC LIMIT ?"
    params.append(limit)

    
    cursor.execute(query, params)
    rows = cursor.fetchall()
    conn.close()
    

    return [{"reason": r[0], "occurrences": r[1], "total_hours": r[2]} for r in rows]

def get_recent_trend(unit, days=7):
    """Get most recent N days for a specific unit"""
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT date, actual_output, target_output, efficiency_pct, performance_status
        FROM production_kpi
        WHERE unit = ?
        ORDER BY date DESC
        LIMIT ?
    """, (unit, days))
    rows = cursor.fetchall()
    conn.close()
    return [
        {"date": r[0], "actual": r[1], "target": r[2], "efficiency": r[3], "status": r[4]}
        for r in rows
    ]

def production_agent(question, unit=None):
    """
    Production Intelligence Agent
    Pure SQL aggregation + LLM narrative, no RAG
    """
    summaries = get_unit_summary(unit=unit)
    downtime_reasons = get_top_downtime_reasons(unit=unit)

    summary_text = ""
    for s in summaries:
        summary_text += (
            f"\n{s['unit']} ({s['department']}): "
            f"Avg Efficiency {s['avg_efficiency']}%, "
            f"Avg Downtime {s['avg_downtime_hours']}h/day, "
            f"Target {s['total_target']} vs Actual {s['total_actual']} units, "
            f"Status breakdown: {s['on_target_days']} On Target, "
            f"{s['below_target_days']} Below Target, "
            f"{s['critical_days']} Critical days "
            f"(out of {s['days_recorded']} days)\n"
        )

    if downtime_reasons:
        summary_text += "\nTop Downtime Causes (already ranked by total hours, highest impact first):\n"
        for rank, d in enumerate(downtime_reasons, 1):
            summary_text += (
                f"{rank}. {d['reason']}: {d['occurrences']} occurrences, "
                f"{d['total_hours']} total hours\n"
            )

    prompt = INSIGHT_PROMPT.format(summary=summary_text, question=question)
    response = llm.invoke(prompt)

    return {
        "answer": response.content,
        "summaries": summaries,
        "downtime_reasons": downtime_reasons
    }

if __name__ == "__main__":
    test_questions = [
        ("Why is production low this period?", None),
        ("How is Unit 3 performing?", "Unit 3"),
        ("What's causing the most downtime?", None),
        ("Compare all three units", None)
    ]

    for q, unit in test_questions:
        print(f"\n{'='*60}")
        print(f"Q: {q}" + (f" (Unit: {unit})" if unit else ""))
        result = production_agent(q, unit=unit)
        print(f"A: {result['answer']}")