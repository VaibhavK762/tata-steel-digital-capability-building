# data/download_nsdc_pdfs.py

import pandas as pd
import requests
import os
import time

# Paths
NSDC_FILE = "/home/vasterk/tata_steel_agent/data/raw/nsdc_steel_roles.xls"
SAVE_FOLDER = "/home/vasterk/tata_steel_agent/data/documents/nsdc_pdfs/"

# Create output folder
os.makedirs(SAVE_FOLDER, exist_ok=True)

# Read HTML table disguised as .xls
df = pd.read_html(NSDC_FILE)[0]

# Save cleaned dataset for later use
df[[
    "QP Code",
    "Occupation",
    "QP Name",
    "NSQF Level",
    "QP File"
]].to_csv(
    "/home/vasterk/tata_steel_agent/data/raw/nsdc_roles_clean.csv",
    index=False
)

print(f"Total roles found: {len(df)}")

success = 0
failed = 0
skipped = 0

for index, row in df.iterrows():

    try:
        # Get role name
        role_name = str(row["QP Name"]).strip()

        # Get PDF URL
        pdf_url = row["QP File"]

        # Skip empty URLs
        if pd.isna(pdf_url):
            skipped += 1
            continue

        pdf_url = str(pdf_url).strip()

        # Skip invalid URLs
        if not pdf_url.startswith("http"):
            skipped += 1
            continue

        # Clean filename
        filename = (
            role_name
            .replace("/", "_")
            .replace("\\", "_")
            .replace(":", "_")
            .replace("*", "_")
            .replace("?", "_")
            .replace('"', "_")
            .replace("<", "_")
            .replace(">", "_")
            .replace("|", "_")
        )

        filepath = os.path.join(
            SAVE_FOLDER,
            f"{filename}.pdf"
        )

        # Skip existing files
        if os.path.exists(filepath):
            print(f"⏭️  Already exists: {role_name}")
            skipped += 1
            continue

        # Download PDF
        response = requests.get(
            pdf_url,
            timeout=20,
            headers={
                "User-Agent": "Mozilla/5.0"
            }
        )

        if response.status_code == 200:

            # Verify it's actually a PDF
            content_type = response.headers.get(
                "Content-Type",
                ""
            )

            if "pdf" not in content_type.lower():
                print(
                    f"⚠️  Not a PDF response: {role_name}"
                )
                failed += 1
                continue

            with open(filepath, "wb") as f:
                f.write(response.content)

            print(f"✅ Downloaded: {role_name}")
            success += 1

        else:
            print(
                f"❌ Failed ({response.status_code}): "
                f"{role_name}"
            )
            failed += 1

        # Avoid hammering server
        time.sleep(1)

    except Exception as e:

        print(
            f"❌ Error: {role_name} — {e}"
        )

        failed += 1

print("\n" + "=" * 50)
print(f"✅ Downloaded: {success}")
print(f"❌ Failed: {failed}")
print(f"⏭️  Skipped: {skipped}")
print(f"📁 Saved to: {SAVE_FOLDER}")
print("=" * 50)