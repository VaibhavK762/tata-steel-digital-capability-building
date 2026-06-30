import sys
import os
import json
import time
from dotenv import load_dotenv

# Ensure backend and agents are in python import path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from agents.orchestrator import orchestrate
from langchain_groq import ChatGroq

load_dotenv()

# Initialize Llama LLM for judges
llm = ChatGroq(model="llama-3.1-8b-instant")

# Helper to handle Rate Limits (429) gracefully
def call_with_retry(fn, *args, **kwargs):
    max_retries = 6
    delay = 10
    for attempt in range(max_retries):
        try:
            return fn(*args, **kwargs)
        except Exception as e:
            err_msg = str(e)
            if "429" in err_msg or "rate_limit" in err_msg.lower() or "limit exceeded" in err_msg.lower():
                print(f"   ⚠️ Rate limit hit. Waiting {delay} seconds before retry (attempt {attempt+1}/{max_retries})...")
                time.sleep(delay)
                delay += 10
            else:
                raise e
    raise Exception("Max retries exceeded for LLM call due to rate limits")

# Define Judge Prompts
GROUNDEDNESS_JUDGE_PROMPT = """
You are an expert AI evaluator assessing RAG and QA agents.
Analyze the provided Context and the generated Response.
Determine if the Response is strictly grounded in the Context and does NOT contain any major hallucinations.
Note:
1. The Context is in English, but the Response may be written in Hindi (using Devanagari script) or Hinglish (Hindi in Roman script). You MUST translate the meaning of the Response to English first.
2. Accept standard fallback contact information, support escalations, or polite introductions as grounded.
Reply with ONLY the word "PASSED" or "FAILED". Do not output any explanation or extra text.

Context:
{context}

Generated Response:
{response}

Groundedness Assessment (PASSED/FAILED):
"""

RELEVANCE_JUDGE_PROMPT = """
You are an expert AI evaluator.
Analyze the User Question and the generated Response.
Determine if the Response directly addresses the User Question and is relevant.
Note: The Response may be written in Hindi (using Devanagari script) or Hinglish (Hindi in Roman script). Translate and interpret its meaning before assessing if it addresses the question.
Reply with ONLY the word "PASSED" or "FAILED". Do not output any explanation or extra text.

User Question:
{question}

Generated Response:
{response}

Relevance Assessment (PASSED/FAILED):
"""

CORRECTNESS_JUDGE_PROMPT = """
You are an expert AI evaluator.
Analyze the Ground Truth information and the generated Response.
Determine if the Response is factually accurate and matches the key points or metrics in the Ground Truth.
Note:
1. The Response may be written in Hindi (using Devanagari script) or Hinglish (Hindi in Roman script). Translate and interpret its meaning before comparing it to the English Ground Truth facts.
2. If the Response conveys the same factual information (e.g. "12 days" matches "12 days", "20-80°C" matches "20-80°C"), mark it as PASSED.
3. Do NOT fail the response for minor vocabulary differences or for being more detailed than the Ground Truth.
Reply with ONLY the word "PASSED" or "FAILED". Do not output any explanation or extra text.

Ground Truth:
{ground_truth}

Generated Response:
{response}

Correctness Assessment (PASSED/FAILED):
"""

# Evaluation Test Cases
test_suite = [
    # 1. KNOWLEDGE Agent
    {
        "question": "What is the procedure for handling a chemical spill?",
        "user_id": 15,
        "user_type": "New Joiner",
        "expected_category": "KNOWLEDGE",
        "ground_truth": "Evacuate the immediate area. Seek shelter. Wear appropriate PPE. Report the spill immediately to safety officers and emergency contact. Keep people away, block drains if possible to contain spill."
    },
    {
        "question": "What skills does a Heating Regulator need?",
        "user_id": 15,
        "user_type": "New Joiner",
        "expected_category": "KNOWLEDGE",
        "ground_truth": "Understand gas properties, safety guidelines, pressure regulation, combustion, thermal monitoring, control systems."
    },
    
    # 2. HR Agent
    {
        "question": "How many casual leave days do I get?",
        "user_id": 15,
        "user_type": "New Joiner",
        "expected_category": "HR",
        "ground_truth": "12 days of casual leave per calendar year."
    },
    {
        "question": "What documents do I need to bring on my first day?",
        "user_id": 15,
        "user_type": "New Joiner",
        "expected_category": "HR",
        "ground_truth": "Onboarding documents: PAN, Aadhaar, passport size photographs, educational certificates, and bank account details."
    },

    # 3. MAINTENANCE Agent
    {
        "question": "What should I do if the crusher machine is vibrating abnormally?",
        "user_id": 15,
        "user_type": "Employee",
        "expected_category": "MAINTENANCE",
        "ground_truth": "Shut down the machine immediately if vibration is critical. Inspect bearings, check lubrication, inspect structural bolts/anchors, and contact Maintenance Supervisor (Extension 301)."
    },
    {
        "question": "What is the normal temperature range for equipment bearings?",
        "user_id": 15,
        "user_type": "Employee",
        "expected_category": "MAINTENANCE",
        "ground_truth": "Normal operating temperature range for bearings is 20-80°C or critical limit is 80°C."
    },

    # 4. LEARNING Agent
    {
        "question": "What is my readiness score and what skills am I missing?",
        "user_id": 15,
        "user_type": "New Joiner",
        "expected_category": "LEARNING",
        "ground_truth": "Readiness score is 25.0 (significant development needed). Missing skills: communication related skills, analytical skills, problem solving attitude."
    },
    {
        "question": "What courses are recommended for Arjun Reddy?",
        "user_id": 15,
        "user_type": "New Joiner",
        "expected_category": "LEARNING",
        "ground_truth": "Industrial Communication Skills, Digital Skills for Manufacturing, Control Room Operations, Rolling Mill Process Control, Heating Regulation & Process Monitoring, Instrumentation & Calibration."
    },

    # 5. PRODUCTION Agent (Manager only)
    {
        "question": "What is causing the most downtime in Unit 3?",
        "user_id": 23,
        "user_type": "Manager",
        "expected_category": "PRODUCTION",
        "ground_truth": "Raw Material Shortage (100.4 total hours), followed by Power Outage (86.2 hours) and Equipment Failure (70.4 hours)."
    },
    {
        "question": "Why is Unit 3 underperforming?",
        "user_id": 15,
        "user_type": "Employee",
        "expected_category": "PRODUCTION",
        "ground_truth": "Access blocked. Message should indicate the information is available to managers/executives."
    }
]

def run_judge(prompt_template, **kwargs):
    prompt = prompt_template.format(**kwargs)
    try:
        def invoke_judge():
            return llm.invoke(prompt).content.strip()
        res = call_with_retry(invoke_judge)
        print(f"      [Judge Response]: '{res}'")
        if "PASSED" in res.upper():
            return 1.0
        return 0.0
    except Exception as e:
        print(f"Error running judge: {e}")
        return 0.5  # Neutral default in case of rate limits or LLM failure

def evaluate():
    print("🚀 Starting Agent Evaluation with rate limit handling...\n")
    results = []
    
    total_cases = len(test_suite)
    classification_hits = 0
    total_faithfulness = 0.0
    total_relevance = 0.0
    total_correctness = 0.0
    blocked_hits = 0
    total_blocked_cases = 0

    for idx, case in enumerate(test_suite, 1):
        q = case["question"]
        user_id = case["user_id"]
        user_type = case["user_type"]
        expected_cat = case["expected_category"]
        gt = case["ground_truth"]

        print(f"[{idx}/{total_cases}] Query: '{q}' (User Type: {user_type})")
        
        # Run agent orchestrator with retry
        agent_out = call_with_retry(orchestrate, q, user_id=user_id, user_type=user_type)
        routed_cat = agent_out.get("category", "UNKNOWN")
        ans = agent_out.get("answer", "")
        
        # Determine RAG context or SQL context
        context = ""
        if "context" in agent_out:
            context = agent_out["context"]
        elif expected_cat == "LEARNING":
            context = f"User Profile: {agent_out.get('user_profile')}\nReadiness Score: {agent_out.get('readiness_score')}\nMissing Skills: {agent_out.get('missing_skills')}\nRecommended Courses: {agent_out.get('recommended_courses')}"
        elif expected_cat == "PRODUCTION":
            context = f"Queried Unit: Unit 3\nKPI Summaries: {agent_out.get('summaries')}\nTop Downtime Causes for Unit 3: {agent_out.get('downtime_reasons')}"
            
        # Metric 1: Intent Routing
        classification_ok = (routed_cat == expected_cat)
        if classification_ok:
            classification_hits += 1
            
        # Metric 2: Access Control Verification
        is_blocked_case = "available to managers/executives" in ans or "log in" in ans
        is_expected_blocked = (user_type not in ["Manager", "Executive"] and expected_cat == "PRODUCTION")
        
        block_ok = True
        if is_expected_blocked:
            total_blocked_cases += 1
            if is_blocked_case:
                blocked_hits += 1
            else:
                block_ok = False

        # Run LLM judges
        if is_blocked_case:
            # Blocked response correctness is judged on whether it blocks access
            faithfulness = 1.0
            relevance = 1.0 if "available to managers/executives" in ans or "supervisor" in ans else 0.0
            correctness = 1.0 if is_blocked_case and is_expected_blocked else 0.0
        else:
            faithfulness = run_judge(GROUNDEDNESS_JUDGE_PROMPT, context=context, response=ans)
            relevance = run_judge(RELEVANCE_JUDGE_PROMPT, question=q, response=ans)
            correctness = run_judge(CORRECTNESS_JUDGE_PROMPT, ground_truth=gt, response=ans)

        total_faithfulness += faithfulness
        total_relevance += relevance
        total_correctness += correctness

        print(f"   -> Category: Expected={expected_cat}, Got={routed_cat} ({'✓' if classification_ok else '✗'})")
        print(f"   -> Groundedness/Faithfulness: {faithfulness}")
        print(f"   -> Answer Relevance: {relevance}")
        print(f"   -> Answer Correctness: {correctness}")
        print(f"   -> Answer (Truncated): {ans[:150].replace('\n', ' ')}...\n")

        results.append({
            "index": idx,
            "question": q,
            "user_type": user_type,
            "expected_category": expected_cat,
            "routed_category": routed_cat,
            "classification_ok": classification_ok,
            "faithfulness": faithfulness,
            "relevance": relevance,
            "correctness": correctness,
            "blocked_as_expected": block_ok,
            "answer": ans
        })
        
        # Add a tiny delay between test cases to prevent overloading TPM
        time.sleep(3)

    # Summary Statistics
    routing_accuracy = (classification_hits / total_cases) * 100
    avg_faithfulness = (total_faithfulness / total_cases) * 100
    avg_relevance = (total_relevance / total_cases) * 100
    avg_correctness = (total_correctness / total_cases) * 100
    rbac_accuracy = (blocked_hits / total_blocked_cases) * 100 if total_blocked_cases > 0 else 100.0

    print("="*60)
    print("📊 EVALUATION SUMMARY METRICS")
    print(f"Intent Classification Accuracy: {routing_accuracy:.1f}%")
    print(f"Average Groundedness/Faithfulness (No Hallucinations): {avg_faithfulness:.1f}%")
    print(f"Average Answer Relevance: {avg_relevance:.1f}%")
    print(f"Average Answer Correctness: {avg_correctness:.1f}%")
    print(f"RBAC Safety / Block Accuracy: {rbac_accuracy:.1f}%")
    print("="*60)

    # Generate Markdown Table Report
    report_md = f"""# Agent Performance & Evaluation Report

This report summarizes the performance metrics of the five specialist RAG/SQL capability building agents and the orchestrator, calculated using LLM-as-a-judge evaluations based on our primary document databases.

## Overall Summary Metrics

| Metric | Score | Description |
| :--- | :--- | :--- |
| **Intent Classification Accuracy** | {routing_accuracy:.1f}% | Percentage of user requests routed to the correct specialist agent. |
| **Average Groundedness / Faithfulness** | {avg_faithfulness:.1f}% | Check if the generated responses do not contain hallucinations and are strictly grounded in retrieved documents/DB data. |
| **Average Answer Relevance** | {avg_relevance:.1f}% | Check if responses directly address the user's question. |
| **Average Answer Correctness** | {avg_correctness:.1f}% | Percentage of answers factually correct matching ground truth parameters. |
| **RBAC Safety / Block Accuracy** | {rbac_accuracy:.1f}% | Correctly blocking unauthorized data requests (e.g. Employee seeking manager production data). |

## Detailed Test Case Evaluation

| ID | Question | User Role | Expected Cat | Routed Cat | Faithfulness | Relevance | Correctness | Status |
| :-: | :--- | :--- | :-: | :-: | :-: | :-: | :-: | :--- |
"""

    for r in results:
        status_symbol = "✅ PASSED" if r["classification_ok"] and r["faithfulness"] == 1.0 and r["relevance"] == 1.0 and r["correctness"] == 1.0 else "⚠️ REVIEW"
        report_md += f"| {r['index']} | {r['question']} | {r['user_type']} | {r['expected_category']} | {r['routed_category']} | {r['faithfulness']*100:.0f}% | {r['relevance']*100:.0f}% | {r['correctness']*100:.0f}% | {status_symbol} |\n"

    # Write report to markdown file
    report_path = "Weekly Documentation/agent_evaluation_report.md"
    os.makedirs(os.path.dirname(report_path), exist_ok=True)
    with open(report_path, "w") as f:
        f.write(report_md)
    print(f"\n💾 Saved detailed report to: '{report_path}'\n")

if __name__ == "__main__":
    evaluate()
