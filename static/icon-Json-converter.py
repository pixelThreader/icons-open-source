import os
import re
import json


def get_category(path):
    # Extract the category from the path (e.g., circled, android, ios)
    path = str(path).lower()
    if "circled" in path:
        return "circled"
    elif "android" in path:
        return "android"
    elif "ios" in path:
        return "ios"
    return "normal"


def process_name(path):
    # Extract the name from the path and format it
    match = re.search(r"([0-9a-zA-Z-]+)\.\w+$", path)
    if match:
        name = match.group(1)
        name = name.replace("-", " ").capitalize()
        return name
    return ""


# Path to the ionicons folder
ionicons_folder = "ionicons v2/src"

# Get a list of all the image files in the folder
image_files = [file for file in os.listdir(ionicons_folder) if file.endswith((".svg", ".jpeg", ".png", ".gif"))] # just add the type

# Generate the data list
data = []
for index, image_file in enumerate(image_files, start=1):
    image_path = os.path.join(ionicons_folder, image_file)
    image_path = image_path.replace("\\", "/")  # Replace backslashes with forward slashes

    name = process_name(image_path)
    category = get_category(name)
    svg_name = os.path.splitext(os.path.basename(image_path))[0]
    search_tags = [name, svg_name]

    data.append({
        "sno": index,
        "name": name,
        "path": os.path.join("ionicons v2/src", image_file).replace("\\", "/"),  # Replace backslashes with forward slashes
        "format": "svg",
        "category": category,
        "svgname": svg_name,
        "searchtag": search_tags,
    })
# Generate the data.js file
output_file = "ion-icons.json"
with open(output_file, "w") as file:
    file.write("[\n")
    for i, item in enumerate(data):
        file.write("    {\n")
        file.write(f"        \"sno\": {item['sno']},\n")
        file.write(f"        \"name\": \"{item['name']}\",\n")
        file.write(f"        \"path\": \"/static/{item['path']}\",\n")
        file.write(f"        \"format\": \"{item['format']}\",\n")
        file.write(f"        \"category\": \"{item['category']}\",\n")
        file.write(f"        \"svgname\": \"{item['svgname']}\",\n")
        file.write(f"        \"searchtag\": {json.dumps(item['searchtag'])}\n")
        # \"searchtag\": {search_tags}\n"
        file.write("    }")
        if i != len(data) - 1:
            file.write(",")
        file.write("\n")
    file.write("]")

print(f"Created {output_file} successfully.")