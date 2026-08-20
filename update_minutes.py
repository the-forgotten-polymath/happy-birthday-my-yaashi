import ast
import re

with open("lib/config.ts", "r") as f:
    content = f.read()

start_idx = content.find("finalHourMessages: [")
end_idx = content.find("  ],\n\n  /**\n   * Secret Konami-style code", start_idx)

if start_idx == -1 or end_idx == -1:
    print("Could not find finalHourMessages block")
    exit(1)

block = content[start_idx:end_idx]

lines = block.split('\n')[1:] # skip the first line
new_lines = []
for i, line in enumerate(lines):
    line = line.strip()
    if not line:
        continue
    if line.endswith(","):
        line = line[:-1]
    
    try:
        text = ast.literal_eval(line)
        minutes = 60 - i
        
        # Remove any existing prefix like "You have exactly 60 minutes left until your birthday. "
        text = re.sub(r"You have exactly \d+ minutes left until your birthday\. ", "", text)
        
        # Create new formatted text
        # Using \n literally so it ends up in the TS file string
        new_text = f"* {minutes:02d} minutes to goo 🧿❤️\\n{text}"
        
        # Make sure it's safely escaped for the JS string
        # We can write it back using json.dumps to handle quotes
        import json
        escaped_text = json.dumps(new_text)
        new_lines.append(f"    {escaped_text},")
    except Exception as e:
        print(f"Error parsing line {i}: {line} -> {e}")

new_block = "finalHourMessages: [\n" + "\n".join(new_lines) + "\n"
new_content = content[:start_idx] + new_block + content[end_idx:]

with open("lib/config.ts", "w") as f:
    f.write(new_content)

print("Updated config.ts successfully")
