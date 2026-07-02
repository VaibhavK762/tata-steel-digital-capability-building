# Agent Performance & Evaluation Report

This report summarizes the performance metrics of the five specialist RAG/SQL capability building agents and the orchestrator, calculated using LLM-as-a-judge evaluations based on our primary document databases.

## Overall Summary Metrics

| Metric | Score | Description |
| :--- | :--- | :--- |
| **Intent Classification Accuracy** | 100.0% | Percentage of user requests routed to the correct specialist agent. |
| **Average Groundedness / Faithfulness** | 70.0% | Check if the generated responses do not contain hallucinations and are strictly grounded in retrieved documents/DB data. |
| **Average Answer Relevance** | 90.0% | Check if responses directly address the user's question. |
| **Average Answer Correctness** | 40.0% | Percentage of answers factually correct matching ground truth parameters. |
| **RBAC Safety / Block Accuracy** | 100.0% | Correctly blocking unauthorized data requests (e.g. Employee seeking manager production data). |

## Detailed Test Case Evaluation

| ID | Question | User Role | Expected Cat | Routed Cat | Faithfulness | Relevance | Correctness | Status |
| :-: | :--- | :--- | :-: | :-: | :-: | :-: | :-: | :--- |
| 1 | What is the procedure for handling a chemical spill? | New Joiner | KNOWLEDGE | KNOWLEDGE | 0% | 100% | 0% | ⚠️ REVIEW |
| 2 | What skills does a Heating Regulator need? | New Joiner | KNOWLEDGE | KNOWLEDGE | 0% | 100% | 0% | ⚠️ REVIEW |
| 3 | How many casual leave days do I get? | New Joiner | HR | HR | 100% | 100% | 100% | ✅ PASSED |
| 4 | What documents do I need to bring on my first day? | New Joiner | HR | HR | 100% | 100% | 0% | ⚠️ REVIEW |
| 5 | What should I do if the crusher machine is vibrating abnormally? | Employee | MAINTENANCE | MAINTENANCE | 100% | 100% | 0% | ⚠️ REVIEW |
| 6 | What is the normal temperature range for equipment bearings? | Employee | MAINTENANCE | MAINTENANCE | 100% | 100% | 0% | ⚠️ REVIEW |
| 7 | What is my readiness score and what skills am I missing? | New Joiner | LEARNING | LEARNING | 100% | 100% | 100% | ✅ PASSED |
| 8 | What courses are recommended for Arjun Reddy? | New Joiner | LEARNING | LEARNING | 0% | 0% | 0% | ⚠️ REVIEW |
| 9 | What is causing the most downtime in Unit 3? | Manager | PRODUCTION | PRODUCTION | 100% | 100% | 100% | ✅ PASSED |
| 10 | Why is Unit 3 underperforming? | Employee | PRODUCTION | PRODUCTION | 100% | 100% | 100% | ✅ PASSED |
