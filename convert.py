import pandas as pd
import json

# Function to convert JSON data to Excel
def json_to_excel(json_file, excel_file):
    # Load JSON data
    with open(json_file, 'r') as file:
        data = json.load(file)

    # Convert JSON data to DataFrame
    df = pd.json_normalize(data)

    # Write DataFrame to Excel
    df.to_excel(excel_file, index=False)

# Specify input JSON file and output Excel file
json_file = 'datacollection-725cc-default-rtdb-export.json'  # Replace with your JSON file path
excel_file = 'data.xlsx'  # Replace with your desired Excel file path

# Convert JSON to Excel
json_to_excel(json_file, excel_file)
