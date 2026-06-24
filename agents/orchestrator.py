# agents/orchestrator.py
from langchain_groq import ChatGroq
from dotenv import load_dotenv

from agents.knowledge_agent import knowledge_sop_agent
from agents.hr_agent import hr_agent
from agents.maintenance_agent import maintenance_agent
from agents.learning_agent import learning_agent
from agents.production_agent import production_agent

load_dotenv()

llm = ChatGroq(model="llama-3.1-8b-instant")

CLASSIFY_PROMPT = """
Classify this employee message into EXACTLY ONE category.
Reply with ONLY the category word, nothing else.

Categories:
- KNOWLEDGE: Questions about company policies, safety 
  procedures, SOPs, role requirements, general company info
- HR: Questions about leave, payroll, onboarding, 
  promotion eligibility, HR policies, benefits
- MAINTENANCE: Equipment problems, troubleshooting, 
  machine issues, sensor readings, repair questions
- LEARNING: Questions about skill gaps, course 
  recommendations, training, career readiness, 
  "what should I learn"
- PRODUCTION: Questions about production output, KPIs, 
  efficiency, downtime, unit performance (manager/exec only)
- UNKNOWN: Doesn't fit any category clearly

Message: {message}

Category:
"""

# Which agents each user_type can access
AGENT_ACCESS = {
    "New Joiner":  ["KNOWLEDGE", "HR", "MAINTENANCE", "LEARNING"],
    "Employee":    ["KNOWLEDGE", "HR", "MAINTENANCE", "LEARNING"],
    "Manager":     ["KNOWLEDGE", "HR", "MAINTENANCE", "LEARNING", "PRODUCTION"],
    "Executive":   ["KNOWLEDGE", "HR", "MAINTENANCE", "PRODUCTION"],
}

def classify_intent(message):
    prompt = CLASSIFY_PROMPT.format(message=message)
    response = llm.invoke(prompt)
    category = response.content.strip().upper()
    valid_categories = ["KNOWLEDGE", "HR", "MAINTENANCE", "LEARNING", "PRODUCTION", "UNKNOWN"]
    for cat in valid_categories:
        if cat in category:
            return cat
    return "UNKNOWN"

def orchestrate(message, user_id=None, user_type=None, current_role=None):
    """
    Main orchestrator — routes message to correct agent
    based on classified intent and user's role access
    """
    category = classify_intent(message)

    # Check access permission
    allowed = AGENT_ACCESS.get(user_type, ["KNOWLEDGE", "HR"])
    if category not in allowed and category != "UNKNOWN":
        return {
            "category": category,
            "answer": (f"This information is available to managers/executives. "
                       f"Can I help you with something else, like course "
                       f"recommendations or safety procedures?"),
            "sources": []
        }

    if category == "KNOWLEDGE":
        result = knowledge_sop_agent(message)
        return {"category": category, **result}

    elif category == "HR":
        result = hr_agent(message)
        return {"category": category, **result}

    elif category == "MAINTENANCE":
        result = maintenance_agent(message)
        return {"category": category, **result}

    elif category == "LEARNING":
        if user_id is None:
            return {
                "category": category,
                "answer": "Please log in to see your personalized learning path.",
                "sources": []
            }
        result = learning_agent(user_id, message)
        return {"category": category, "answer": result["answer"], "sources": []}

    elif category == "PRODUCTION":
        result = production_agent(message)
        return {"category": category, "answer": result["answer"], "sources": []}

    else:
        return {
            "category": "UNKNOWN",
            "answer": ("I'm not sure how to help with that. I can answer "
                       "questions about safety/SOPs, HR policies, equipment "
                       "issues, or your learning path. Could you rephrase?"),
            "sources": []
        }

if __name__ == "__main__":
    test_cases = [
        ("What is the chemical spill procedure?", 15, "Employee", None),
        ("How many casual leave days do I get?", 15, "Employee", None),
        ("Crusher machine is vibrating, what should I do?", 15, "Employee", None),
        ("Give me my learning roadmap", 15, "Employee", None),
        ("Why is Unit 3 underperforming?", 15, "Employee", None),  # should be blocked
        ("Why is Unit 3 underperforming?", 23, "Manager", None),  # should work
    ]

    for message, user_id, user_type, role in test_cases:
        print(f"\n{'='*60}")
        print(f"User type: {user_type} | Q: {message}")
        result = orchestrate(message, user_id=user_id, user_type=user_type, current_role=role)
        print(f"Category: {result['category']}")
        print(f"A: {result['answer'][:300]}")