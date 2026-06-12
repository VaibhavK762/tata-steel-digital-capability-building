# AI Agents for Digital Capability Building in Tata Steel

A multi-agent AI platform designed to support workforce learning, skill development, enterprise knowledge retrieval, and digital capability building.

## Features

### Knowledge Agent
- Answers questions from company documents
- Safety procedures
- HR policies
- Leave policies
- Onboarding information

### Learning Agent
- Personalized learning recommendations
- Skill gap analysis
- NSDC role mapping
- Course recommendations

### Maintenance Agent
- Equipment troubleshooting
- Maintenance procedures
- Sensor threshold guidance
- Permit-to-work support

### HR Agent
- Leave policy queries
- Promotion guidance
- Employee policies
- Benefits information

## Tech Stack

- Python
- LangChain
- ChromaDB
- SQLite
- Sentence Transformers
- Streamlit
- RAG Architecture

## Data Sources

- NSDC Steel Sector Role PDFs
- Safety Manual
- HR Policy
- Leave Policy
- Onboarding Guide
- Maintenance Manual
- Course Dataset
- Employee Dataset

## Architecture

User Query
↓
Orchestrator
↓
Knowledge | Learning | HR | Maintenance Agent
↓
RAG Retrieval
↓
LLM Response

## Project Structure

```text
data/
agents/
rag/
database/
frontend/
docs/