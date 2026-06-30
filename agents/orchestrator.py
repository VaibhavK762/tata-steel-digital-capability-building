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
  procedures, SOPs, job role descriptions/required skills (e.g. "What skills does a Heating Regulator need?"), general company info
- HR: Questions about leave, payroll, onboarding, 
  promotion eligibility, HR policies, benefits
- MAINTENANCE: Equipment problems, troubleshooting, 
  machine issues, sensor readings, repair questions
- LEARNING: Questions about personal skill gaps, individual course 
  recommendations, personal training status, personal career readiness, 
  "what should I learn", "my learning path"
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
        return {"category": category, **result}

    elif category == "PRODUCTION":
        result = production_agent(message)
        return {"category": category, **result}

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

        # ---------------- KNOWLEDGE ----------------
        ("What are the safety rules for welding?", 15, "Employee"),
        ("What does a Battery Operator do?", 15, "Employee"),
        ("Tell me about Tata Steel's sustainability report", 15, "Employee"),

        # ---------------- HR ----------------
        ("How many leaves do I have?", 15, "Employee"),
        ("What is the promotion process?", 15, "Employee"),
        ("What happens during probation?", 15, "Employee"),

        # ---------------- MAINTENANCE ----------------
        ("My conveyor belt is making noise", 15, "Employee"),
        ("What is the vibration threshold for equipment?", 15, "Employee"),
        ("Heating regulator error E4", 15, "Employee"),

        # ---------------- LEARNING ----------------
        ("What should I learn next?", 15, "Employee"),
        ("Am I ready for my target role?", 15, "Employee"),
        ("Give me a skill gap analysis", 15, "Employee"),

        # ---------------- PRODUCTION ----------------
        ("How is Unit 1 efficiency this month?", 23, "Manager"),
        ("What's causing the most downtime?", 23, "Manager"),
        ("Compare department performance", 23, "Manager"),

        # ---------------- BLOCKED ----------------
        ("How is Unit 1 efficiency this month?", 15, "New Joiner"),
        ("What's causing the most downtime?", 15, "Employee"),
    ]

    for i, (message, user_id, user_type) in enumerate(test_cases, 1):

        print("\n" + "=" * 80)
        print(f"TEST {i}")
        print(f"User Type : {user_type}")
        print(f"Question  : {message}")

        result = orchestrate(
            message,
            user_id=user_id,
            user_type=user_type
        )

        print(f"\nCategory : {result['category']}")
        print(f"\nAnswer:\n{result['answer']}")

        if result.get("sources"):
            print("\nSources:")
            for s in result["sources"]:
                print("-", s)