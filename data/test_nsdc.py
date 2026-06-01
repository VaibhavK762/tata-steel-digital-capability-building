import pandas as pd

df = pd.read_html(
    "/home/vasterk/tata_steel_agent/data/raw/nsdc_steel_roles.xls"
)[0]

print(df.columns)
print(df.head())