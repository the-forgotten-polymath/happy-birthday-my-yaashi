import re

with open("lib/config.ts", "r") as f:
    content = f.read()

# 1. Update reasonsTitle
content = re.sub(r'reasonsTitle: "18 reasons why you\'re special to me",', 'reasonsTitle: "21 reasons why you\'re special to me",', content)

# 2. Update reasons (21 of them)
new_reasons = """  reasons: [
    { title: "Your infectious laugh", description: "The way you laugh when I do something stupid is my favorite sound in the world.", emoji: "😂" },
    { title: "You are my safest place", description: "Whenever the world gets overwhelming, your arms are the only place I want to hide.", emoji: "🏡" },
    { title: "Your weird little habits", description: "Even your quirkiest, weirdest habits are absolutely adorable to me. I wouldn't change a thing.", emoji: "🤪" },
    { title: "You steal my fries", description: "You always say you aren't hungry, but then you eat half my fries. And honestly, I love you for it.", emoji: "🍟" },
    { title: "Your breathtaking beauty", description: "I still can't believe someone as insanely gorgeous as you actually likes me back.", emoji: "✨" },
    { title: "You make everything lighter", description: "You unknowingly make every heavy feeling disappear just by being in the same room.", emoji: "🎈" },
    { title: "My absolute necessity", description: "You are as essential to my survival as oxygen (and maybe pizza).", emoji: "🍕" },
    { title: "Your incredible strength", description: "You are so strong, even when you doubt yourself. I am endlessly proud of you.", emoji: "💪" },
    { title: "You are my peace", description: "My mind is always racing, but you bring this incredible sense of calm to my chaos.", emoji: "🌊" },
    { title: "The way you talk", description: "I could listen to you talk about absolutely nothing for hours and never get bored.", emoji: "🗣️" },
    { title: "You trust me", description: "The fact that you trust me with your heart is a privilege I will never take for granted.", emoji: "🔒" },
    { title: "You make me better", description: "I want to be the best possible version of myself, just so I can be the man you deserve.", emoji: "📈" },
    { title: "Our late-night talks", description: "Those quiet moments when it's just you, me, and the stars are the best parts of my life.", emoji: "🌙" },
    { title: "You are my first thought", description: "Every single morning, before I even fully wake up, you are already on my mind.", emoji: "🌅" },
    { title: "Your endless patience", description: "You put up with all my nonsense, and you do it with a smile. You're a saint.", emoji: "😇" },
    { title: "You are my favorite feeling", description: "Loving you feels like the most natural, effortless thing I have ever done.", emoji: "❤️" },
    { title: "We can be silent together", description: "We don't always need words. Just being next to you is enough.", emoji: "🤫" },
    { title: "You celebrate my wins", description: "You are my biggest cheerleader, and your support means the absolute world to me.", emoji: "🎉" },
    { title: "You are entirely unique", description: "There is no one else like you on this planet. You are a once-in-a-lifetime miracle.", emoji: "💎" },
    { title: "You complete me", description: "I didn't know what I was missing until you walked into my life and made it whole.", emoji: "🧩" },
    { title: "You are my forever", description: "No matter what life throws at us, I know we will face it together. I am yours, always.", emoji: "♾️" }
  ] satisfies Reason[],"""

content = re.sub(r'  reasons: \[.*?\] satisfies Reason\[\],', new_reasons, content, flags=re.DOTALL)

# 3. Update eighteen (21 quick fire facts)
new_eighteen = """eighteen: [
  "You entered my life unexpectedly, and now you are my entire world.",
  "I catch myself smiling at my phone like an idiot just thinking about you.",
  "You are the most beautiful part of my life.",
  "Sometimes I reread our conversations just to feel close to you.",
  "I promise to always be your safe space, no matter how hard things get.",
  "Your smile lights up my darkest days.",
  "I will always be here to support you and walk this journey with you.",
  "You are my happiness, my peace, and the best thing that ever happened to me.",
  "I love the little things about you the most.",
  "I feel so incredibly lucky to have you by my side.",
  "You've made my life brighter, softer, and infinitely more meaningful.",
  "I want to be someone you can always lean on.",
  "Every moment with you is a memory I cherish deeply.",
  "You never have to question if you are enough, because to me, you are everything.",
  "I love you more than words can ever truly express.",
  "You are truly one of a kind, and I thank God every day for you.",
  "I will always be here to care for you and protect your heart.",
  "You are my favorite person to do absolutely nothing with.",
  "I love you from the deepest part of my heart.",
  "You are not alone, and you will never be alone. I am with you.",
  "Happy 21st Birthday, my Yaashii. I am yours forever."
],"""

content = re.sub(r'eighteen: \[.*?\],', new_eighteen, content, flags=re.DOTALL)
content = content.replace("/** 18 quick-fire facts", "/** 21 quick-fire facts")

# 4. Rewrite the letter
new_letter = """  paragraphs: [
    "To my absolutely beautiful Yaashi,",
    "First of all... I am so sorry maine 12 bje wish nhi kraa..😔 But I promise to spend the rest of today, and the rest of my life, making it up to you.",
    "Today is the most special day for me, because it is the day the most beautiful, strong, and incredible part of my life was born. I don't even know where to begin, because no words ever feel like enough when it comes to you. How do I explain what you've become to me? Someone who was once just a person I talked to has somehow become my absolute safest place, my favorite feeling in the world, and the very first thought on my mind every single day.",
    "You entered my life so normally, so unexpectedly... yet now, loving you feels like the most natural thing I have ever done. It's the little things about you that completely melt my heart. The way you talk, the way you laugh, the way you unknowingly make every heavy feeling disappear just by walking into the room. Even your smallest, weirdest habits have carved out a permanent place in my heart.",
    "I know that life can get overwhelming sometimes, and I know you may feel uncertain or doubt yourself. But through it all, I want you to know that I am here, wholeheartedly, standing right beside you. I want to be the person you can always lean on, the one who loves you exactly as you are, especially when things feel difficult. I want to be your safe place where you never have to question if you are enough—because to me, you always are.",
    "Your presence in my life is a gift beyond words. You have taught me so much about love and trust, and I feel breathlessly lucky to be the one who gets to hold your hand. My feelings for you are so deeply real and pure. You have made my life brighter, softer, and infinitely more meaningful, and I cherish every single memory we create together.",
    "I love you so much, from the absolute deepest part of my soul. No matter what life brings us, I will always be here to support you, to care for you, and to walk this journey with you. You are never alone. I am with you, always.",
    "On your special day, I pray that the universe grants you every single wish, and that your life overflows with the endless happiness you deserve.",
    "Happiest Birthday my Yaashii... I love you.",
    "Happiest Birthday Yaashviiiiiiiii🧿"
  ],"""

content = re.sub(r'  paragraphs: \[.*?\],', new_letter, content, flags=re.DOTALL)

# 5. Update finalHourMessages (generate 60 fresh ones)
# We will just write a simple loop to generate 60 sweet messages based on the time remaining.
messages = []
for i in range(60, 0, -1):
    m = f'* {i:02d} minutes to goo 🧿❤️\\\\n'
    if i == 60: m += "One hour left! I am officially vibrating with excitement for your special day."
    elif i == 30: m += "Half an hour! You are my everything, my kuchupuchu, my absolute favorite human."
    elif i == 1: m += "ONE MINUTE! Happy 21st Birthday Yaashii! I love you more than words can say. You are the LOML!"
    elif i % 5 == 0: m += f"Just {i} minutes left until the world celebrates the birth of my favorite person!"
    elif i % 3 == 0: m += "I am counting down every single second until I can see your beautiful smile."
    elif i % 2 == 0: m += "Every minute that passes is just another minute I spend falling deeper in love with you."
    else: m += "Thinking about how incredibly lucky I am to have you in my life."
    messages.append(f'    "{m}",')

new_final_hour = "  finalHourMessages: [\n" + "\n".join(messages) + "\n  ],"
content = re.sub(r'  finalHourMessages: \[.*?\],', new_final_hour, content, flags=re.DOTALL)

with open("lib/config.ts", "w") as f:
    f.write(content)
print("Updated config.ts with all the new content!")
