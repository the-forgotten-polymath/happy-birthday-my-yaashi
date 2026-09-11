import re

with open("lib/config.ts", "r") as f:
    content = f.read()

# Replace letter paragraphs
old_paragraphs = """  paragraphs: [
    "I am trembling as I write this, because I genuinely don't know if human language possesses the words to explain the absolute magnitude of my love for you. You are it for me. You are my last love, my definitive ending, and my most beautiful beginning. I am overwhelmingly, breathlessly grateful that the universe saw fit to collide my path with yours. You are the other half of my soul; without you, I am a ghost, wandering without purpose. You anchor me, you steady me, and you stand fiercely by my side through the darkest of times.",
    "You are my entire world. The thought of losing you paralyzes me. You never, ever have to doubt my loyalty, because my eyes, my heart, and my soul are entirely, permanently fixated on you. Thank you for loving me—flaws and all. Thank you for being the sunshine that pierces through my saddest days. Even now, my heart races wildly just seeing your name light up my phone. You consume my thoughts. You are my only craving, my ultimate necessity. I tell you I love you every day, but even those three words are a tragic understatement for the inferno of devotion I hold for you.",
    "I know I am flawed, but I vow to spend my life trying to be the man you deserve. If I could, I would spend eternity just lying under the stars with you, listening to your heartbeat. Absolutely nothing—no distance, no argument, no hardship—could ever sever the bond I share with you. You are my most trusted confidante and my most passionate lover. You occupy my mind every single second, every hour, with every blink of my eyes. You have colonized my heart. I love you. God, I love you so much it physically aches. Please, never leave my side. The thought of loving anyone else is repulsive to me; I cannot imagine a reality where you are not mine. You have painted my world in colors I never knew existed and filled it with a symphony of joy. I will never, ever be capable of loving another human being the way I love you.",
    "HAPPY HAPPY HAPPPPPPYYYY HAPPPPIEST BIRTHDAY, YAASHI!",
    "Even with hundreds of miles suffocating the space between us, MY DEVOTION TO YOU REMAINS UNSHAKABLE. You are my courage. You make the impossible feel within reach. You are not just a girl; you are a celestial being, a once-in-a-lifetime miracle, and I am terrified by how lucky I am to have you. You outshine the brightest stars, you are rarer than the most flawless diamond. My love for you stretches further than the sky and dives deeper than the ocean. I believe in you with a fierce, unwavering faith, even when you doubt yourself. Even in the silence, you are the only thought echoing in my mind. I selfishly hope the world never realizes how incredibly special you are, just so I can keep you all to myself. I promise to be your shield, your safe space, your ultimate comfort. I will dry your tears, I will celebrate your victories, and I will fiercely protect your heart. I am bursting with pride just watching you chase your dreams. You are breathtakingly gorgeous, inside and out. ALWAYS REMEMBER: WE ARE BOUND TOGETHER FOREVER. Distance may test our patience, but it will never touch our hearts.",
    "Happy Birthday, my soulmate! May your day overflow with the profound joy you bring into my life. You deserve the absolute world, today and for the rest of eternity.",
    "On this sacred day, I pray that the universe bows to your every wish. Happy Birthday to the most astonishingly beautiful soul I have ever encountered!",
    "Happy Birthday! May your day be as radiant, pure, and breathtaking as the smile you gift the world. I cannot wait to witness all the magic you create this year!",
    "Happy birthday, my sweet baby... ❤️ I hope you feel even a fraction of the immense, all-consuming love I have for you today. You are my miracle. ❤️🥺 ❤️ I love you with all that I am 😘"
  ],"""

new_paragraphs = """  paragraphs: [
    "Happy Birthday, My Cutul..❤️🥺",
    "First of all... I am sorry maine 12 bje wish nhi kraa..😔",
    "Today is a special day, not just because it's your birthday, but because the world was blessed with someone as beautiful, strong, and special as you. I want you to know that even if things aren't perfect right now, your life means so much to me and to everyone around you. You are truly one of a kind, and I thank God every day for bringing you into my life.",
    "I don't even know where to begin because no words ever feel enough when it comes to you. How do I explain what you've become to me? How do I explain that someone who was once just a person I talked to somehow became my safest place, my favorite feeling, and the first thought on my mind every single day?",
    "You entered my life so normally, so unexpectedly... yet now loving you feels like the most natural thing in the world. And honestly? That's what makes it so special. I love the little things about you the most. The way you talk. The way you laugh. The way you unknowingly make everything feel lighter just by being there.",
    "Your presence in my life has been a gift beyond words. You've taught me so much about love, trust. I feel lucky to be the one with you every day knowning i have you with me.",
    "I understand that life can sometimes get overwhelming, and I know you may feel uncertain or doubt yourself. But through it all, I'm here, wholeheartedly, to stand by you. I want to be someone you can lean on, someone who loves you exactly as you are, even when things feel difficult. I want to be a safe place where you never have to question if you're enough, because, to me, you always are.",
    "Today is the most special day for me because it's the day the most beautiful part of my life was born. You're not just my special, you're my happiness, my peace, and the best thing that has ever happened to me. Your smile lights up my darkest days, and your voice brings comfort to my heart in ♾️ ways I can't even explain.",
    "I may not always find the perfect words, but please know that my feelings for you are always real and pure. I feel so lucky to have you by my side. You've made my life brighter, softer, and so much more meaningful. Every moment with you is a memory I cherish deeply.",
    "I love you so much, and I mean that from the deepest part of my heart. No matter what life brings, I'll always be here to support you, to care for you, and to walk this journey with you. You are not alone, and you'll never be alone I'm with you, always.",
    "On your special day, I pray that all your dreams come true and that your life is filled with endless happiness.",
    "Happiest Birthday my Yaashii..❤️ Happiest Birthday Yaashviiiiiiiii🧿"
  ],"""

content = content.replace(old_paragraphs, new_paragraphs)

# Also update the marquee to feature some of the new messages
content = content.replace('"happy 21st birthday my love",', '"happy 21st birthday Yaashviiiiiiiii🧿",')
content = content.replace('"the queen of my heart",', '"I am sorry maine 12 bje wish nhi kraa..😔",')

# Also update the signoff signature to CHITRANSH <3
content = content.replace('signature: "— always, mine",', 'signature: "— always, CHITRANSH <3",')
content = content.replace('signoff: "Happy birthday, you absolute legend.",', 'signoff: "Happiest Birthday my Yaashii..❤️",')

with open("lib/config.ts", "w") as f:
    f.write(content)

print("Updated config.ts with personal WhatsApp messages")
