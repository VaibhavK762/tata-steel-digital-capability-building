import os
import json
import csv
import time
from pypdf import PdfReader
from langchain_groq import ChatGroq
from dotenv import load_dotenv

load_dotenv()

PDF_FOLDER = "data/documents/nsdc_pdfs/"
OUTPUT_CSV = "data/raw/skills.csv"

llm = ChatGroq(model="llama-3.1-8b-instant")

# Only retry these specific files
RETRY_FILES = [
    "Conveyor operation and maintenance.pdf",
    "Fitter Electronic Assembly.pdf",
    "Iron & Steel_ Utility Hand-Plant Operations.pdf",
    "Fitter Electrical Assembly.pdf",
    "Mobile equipment maintenance.pdf",
    "Fluid Management Operator_ Rolling Mills.pdf",
    "Belt conveyor maintenance.pdf",
    "Screen & Crusher Operator.pdf"
]

PROMPT = """
Read this steel industry job role document and return 
ONLY a JSON object, no markdown, no explanation:

{{
  "role_name": "exact job role title from document",
  "nsqf_level": <integer 1-7 or null>,
  "skills": ["skill1", "skill2", "skill3", "skill4", "skill5"],
  "knowledge_areas": ["area1", "area2", "area3"],
  "tools_equipment": ["tool1", "tool2", "tool3"]
}}

Extract 4-6 practical skills that this role requires.
Return ONLY valid JSON.

Document:
{text}
"""

def extract_text_from_pdf(filepath, max_chars=3000):
    reader = PdfReader(filepath)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
        if len(text) > max_chars:
            break
    return text[:max_chars]

def clean_json(text):
    text = text.strip()
    if "```" in text:
        text = text.split("```")[1]
        if text.startswith("json"):
            text = text[4:]
    return text.strip()

results = []

for filename in RETRY_FILES:
    filepath = os.path.join(PDF_FOLDER, filename)
    if not os.path.exists(filepath):
        print(f"❌ File not found: {filename}")
        continue

    print(f"Processing: {filename}")
    text = extract_text_from_pdf(filepath)

    try:
        response = llm.invoke(PROMPT.format(text=text))
        cleaned = clean_json(response.content)
        data = json.loads(cleaned)
        data['source_file'] = filename
        results.append(data)
        print(f"   ✅ {data.get('role_name')} | "
              f"NSQF: {data.get('nsqf_level')} | "
              f"Skills: {len(data.get('skills', []))}")
    except Exception as e:
        print(f"   ❌ Error: {e}")

    time.sleep(5)  # Longer wait to avoid TPM limit

# Append to existing CSV
print(f"\nAppending {len(results)} rows to {OUTPUT_CSV}")

with open(OUTPUT_CSV, 'a', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    for item in results:
        writer.writerow([
            item.get('role_name', ''),
            item.get('nsqf_level', ''),
            '; '.join(item.get('skills', []) or []),
            '; '.join(item.get('knowledge_areas', []) or []),
            '; '.join(item.get('tools_equipment', []) or []),
            item.get('source_file', '')
        ])

print("✅ Done!")