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
BATCH_SIZE = 4

llm = ChatGroq(model="llama-3.1-8b-instant")

BATCH_PROMPT = """
You are extracting structured data from multiple steel 
industry job role documents (NSDC Qualification Packs).

Below are {count} documents separated by "=====DOCUMENT N=====".

For EACH document return one JSON object with this structure:
{{
  "role_name": "exact job role title",
  "nsqf_level": <integer 1-7, or null>,
  "skills": ["skill1", "skill2", "skill3"],
  "knowledge_areas": ["area1", "area2"],
  "tools_equipment": ["tool1", "tool2"]
}}

Return ONLY a JSON array containing one object per document
in the same order. No markdown, no explanation, no extra text.

{documents}
"""

def extract_text_from_pdf(filepath, max_chars=4000):
    reader = PdfReader(filepath)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
        if len(text) > max_chars:
            break
    return text[:max_chars]

def clean_json_response(response_text):
    text = response_text.strip()
    if text.startswith("```"):
        text = text.split("```")[1]
        if text.startswith("json"):
            text = text[4:]
    return text.strip()

def main():
    pdf_files = [f for f in os.listdir(PDF_FOLDER) 
                 if f.endswith('.pdf')]
    print(f"Found {len(pdf_files)} PDFs\n")

    all_results = []

    for batch_start in range(0, len(pdf_files), BATCH_SIZE):
        batch = pdf_files[batch_start:batch_start + BATCH_SIZE]
        print(f"Processing batch: {batch}")

        documents_text = ""
        for idx, filename in enumerate(batch, 1):
            filepath = os.path.join(PDF_FOLDER, filename)
            text = extract_text_from_pdf(filepath)
            documents_text += f"\n=====DOCUMENT {idx}=====\n{text}\n"

        prompt = BATCH_PROMPT.format(
            count=len(batch),
            documents=documents_text
        )

        try:
            response = llm.invoke(prompt)
            cleaned = clean_json_response(response.content)
            results = json.loads(cleaned)

            for filename, data in zip(batch, results):
                data['source_file'] = filename
                all_results.append(data)
                print(f"   ✅ {data.get('role_name')} | "
                      f"NSQF: {data.get('nsqf_level')} | "
                      f"Skills: {len(data.get('skills', []))}")

        except Exception as e:
            print(f"   ❌ Batch error: {e}")
            for filename in batch:
                all_results.append({
                    'role_name': filename.replace('.pdf', ''),
                    'nsqf_level': None,
                    'skills': [],
                    'knowledge_areas': [],
                    'tools_equipment': [],
                    'source_file': filename
                })

        time.sleep(2)

    # Save to CSV
    print(f"\nSaving {len(all_results)} results...")

    with open(OUTPUT_CSV, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow([
            'role_name', 'nsqf_level', 'skills',
            'knowledge_areas', 'tools_equipment', 'source_file'
        ])

        for item in all_results:
            writer.writerow([
                item.get('role_name', ''),
                item.get('nsqf_level', ''),
                '; '.join(item.get('skills', []) or []),
                '; '.join(item.get('knowledge_areas', []) or []),
                '; '.join(item.get('tools_equipment', []) or []),
                item.get('source_file', '')
            ])

    print(f"✅ Done! Saved to {OUTPUT_CSV}")

if __name__ == "__main__":
    main()