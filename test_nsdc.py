import pandas as pd

df = pd.read_html("data/raw/nsdc_steel_roles.xls")[0]

print("Columns:")
print(df.columns)

print("\nFirst 5 rows:")
print(df.head())
