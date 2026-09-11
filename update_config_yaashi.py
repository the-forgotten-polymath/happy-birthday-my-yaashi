import re

with open("lib/config.ts", "r") as f:
    content = f.read()

# Update name, nickname, age, dates
content = re.sub(r'const NAME = "Vrinda";', 'const NAME = "Yaashi";', content)
content = re.sub(r'nickname: "My Baby"', 'nickname: "kuchupuchu"', content)
content = re.sub(r'age: 18', 'age: 21', content)
content = re.sub(r'birthday: "2026-08-21"', 'birthday: "2005-09-11"', content)

# Update gate target date and bypass key (password)
content = re.sub(r'targetDate: "2026-08-21T00:00:00\+05:30"', 'targetDate: "2026-09-11T00:00:00+05:30"', content)
content = re.sub(r'bypassKey: "vrinda18"', 'bypassKey: "yaashiloml"', content)

# Update audio
content = re.sub(r'src: "/IshqBulaava\.mp3"', 'src: "/song.mp3"', content)
content = re.sub(r'title: "Ishq Bulaava"', 'title: "Happy Birthday my LOML"', content)
content = re.sub(r'artist: "Hasee Toh Phasee"', 'artist: "kuchupuchu & yaashi"', content)

# Update Hero subtitle
content = re.sub(r'Eighteen looks breathtaking on you\. I built this tiny corner of the internet just to show you how infinitely and profoundly you are loved\. Scroll slowly, my baby\.', 'Twenty-one looks absolutely incredible on you. I built this tiny corner of the internet to show you how much I love you (and to make you laugh). Scroll slowly, my everything.', content)
content = re.sub(r'greetingWords: \["Happy", "18th"\]', 'greetingWords: ["Happy", "21st"]', content)
content = re.sub(r'kicker: "August 21st · Chapter 18"', 'kicker: "September 11th · Chapter 21"', content)

# Update some of the reasons
content = re.sub(r'Because even your flaws are absolute perfection to me.', 'Because even your weirdest habits are absolutely adorable to me.', content)
content = re.sub(r'I have memorized the exact shade of your eyes.', 'I have memorized the exact way you laugh when I do something stupid.', content)
content = re.sub(r'Just hearing you say my name makes my entire body shiver.', 'You are the only person who can tolerate me, and that is a superpower.', content)
content = re.sub(r'You are my absolute necessity.', 'You are my absolute necessity (along with pizza).', content)
content = re.sub(r'You complete me in ways I never knew I was incomplete.', 'You complete me, and you also eat my fries even when you said you weren\'t hungry.', content)

# Update timeline dates to be more fitting for 2005 onwards, or just keep them generic but funny
content = re.sub(r'year: "2022"', 'year: "2022"', content)
content = re.sub(r'title: "The day my life changed"', 'title: "The day you finally noticed me"', content)

# Update final hour messages to have some funny ones mixed with romantic
content = re.sub(r'\* 60 minutes to goo.*?"', '* 60 minutes to goo 🧿❤️\\nOne hour left! Time to start practicing your surprised face when I give you your gift."', content)
content = re.sub(r'\* 30 minutes to goo.*?"', '* 30 minutes to goo 🧿❤️\\nHalf an hour! You are my everything, my kuchupuchu, my absolute favorite human."', content)
content = re.sub(r'\* 01 minutes to goo.*?"', '* 01 minutes to goo 🧿❤️\\nONE MINUTE! Happy 21st Birthday Yaashi! I love you more than words can say. You are the LOML!"', content)

# Write back
with open("lib/config.ts", "w") as f:
    f.write(content)
