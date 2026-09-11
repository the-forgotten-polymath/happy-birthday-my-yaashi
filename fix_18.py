import re

files_to_update = {
    "components/sections/Numbers.tsx": [
        ("chapter 18 starts now", "chapter 21 starts now"),
        ("chapter <span className=\"text-gradient\">18</span>", "chapter <span className=\"text-gradient\">21</span>"),
        ('to: 18, label: "chapters written so far"', 'to: 21, label: "chapters written so far"')
    ],
    "components/sections/PopBalloons.tsx": [
        ('"18 looks good on you"', '"21 looks good on you"'),
        ('"18 reasons to celebrate"', '"21 reasons to celebrate"'),
        ('"chapter 18: your era"', '"chapter 21: your era"'),
        ("TOTAL = 18;", "TOTAL = 21;"),
        ("score >= 18 ?", "score >= 21 ?")
    ],
    "components/sections/ScratchCard.tsx": [
        ("18 suits you.", "21 suits you.")
    ],
    "components/sections/Intro.tsx": [
        ("\n                  18", "\n                  21")
    ],
    "components/sections/FortuneCookie.tsx": [
        ('"18 is going to be the year you stop saying \'maybe next time.\'"', '"21 is going to be the year you stop saying \'maybe next time.\'"')
    ],
    "components/sections/MemoryGame.tsx": [
        ('moves <= 18 ? "Well played! 🎉"', 'moves <= 21 ? "Well played! 🎉"')
    ]
}

for file_path, replacements in files_to_update.items():
    with open(file_path, "r") as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(file_path, "w") as f:
        f.write(content)

print("Updated hardcoded 18s to 21s in components.")
