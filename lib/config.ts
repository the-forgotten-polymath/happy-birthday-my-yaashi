/**
 * ✨ EVERYTHING YOU NEED TO PERSONALISE LIVES IN THIS FILE ✨
 *
 * Change the name, the messages, the photos and the site is yours.
 * Nothing else in the codebase needs to be touched.
 */

export type Photo = {
  /** Put your image in /public/photos and reference it as "/photos/name.jpg" */
  src?: string;
  caption: string;
  /** Shown when no `src` is provided yet */
  emoji: string;
  /** Tailwind gradient classes used for the placeholder */
  gradient: string;
  /** Slight rotation so the gallery feels like scattered polaroids */
  tilt: number;
};

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  emoji: string;
};

export type Reason = {
  title: string;
  description: string;
  emoji: string;
};

/** Change this one line and the whole site follows. */
const NAME = "Yaashi";

export const config = {
  /* ---------------------------------------------------------------- basics */
  name: NAME,
  nickname: "kuchupuchu",
  age: 21,
  /** Used by the countdown + the "days we've been friends" counter */
  birthday: "2005-09-11",
  friendsSince: "2022-03-18",

  /* ------------------------------------------------------------ hero copy */
  hero: {
    kicker: "September 11th · Chapter 21",
    greetingWords: ["Happy", "21st"],
    subtitle:
      "Twenty-one looks absolutely incredible on you. I built this tiny corner of the internet to show you how much I love you (and to make you laugh). Scroll slowly, my everything.",
    scrollCue: "scroll into twenty-one",
  },

  /* --------------------------------------------------------- the big word */
  marquee: [
    "happy 21st birthday my love",
    "the queen of my heart",
    "my beautiful soulmate",
    "my forever and always",
    "the absolute love of my life",
    "18 & deeply loved",
  ],

  /* ------------------------------------------------------------- timeline */
  timeline: [
    {
      year: "2023",
      title: "The day we met",
      description:
        "We both went out to Buddha Temple and had great fun there, i insisted you to be the part of Freshers 2K23 and you said \"No yrr i am not interested kya hi krenge aakr ...\" and then you came in the evening white suit dancing all with your friends",
      emoji: "🤝",
    },
    {
      year: "2024",
      title: "The holding hands in class",
      description:
        "Suddenly we started talking more and then we occasionaly hold our hands under the desk, eating together, spedning a little much time there .And then you got your friedns and we broke up. and then after some time again we started talking .",
      emoji: "🫱🫲",
    },
    {
      year: "2025",
      title: "First Hackathon",
      description:
        "The first ever hackathon, first ever long trip together and first ever night out!",
      emoji: "💻",
    },
    {
      year: "2026",
      title: "Today",
      description:
        "Another year of you existing loudly and brilliantly. Here's to all the ones coming.",
      emoji: "🎂",
    },
  ] satisfies TimelineEvent[],

  /* -------------------------------------------------------------- gallery */
  photos: [
    {
      caption: "the original chaos crew",
      emoji: "📸",
      gradient: "from-rose-400 via-fuchsia-500 to-indigo-500",
      tilt: -6,
    },
    {
      caption: "that unhinged birthday, 2019",
      emoji: "🎉",
      gradient: "from-amber-300 via-orange-400 to-rose-500",
      tilt: 4,
    },
    {
      caption: "golden hour, no filter needed",
      emoji: "🌅",
      gradient: "from-sky-300 via-cyan-400 to-emerald-400",
      tilt: -3,
    },
    {
      caption: "we laughed until it hurt",
      emoji: "😂",
      gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
      tilt: 7,
    },
    {
      caption: "the one you told me to delete",
      emoji: "🙈",
      gradient: "from-lime-300 via-emerald-400 to-teal-500",
      tilt: -5,
    },
    {
      caption: "and here's to the next one",
      emoji: "🥂",
      gradient: "from-pink-400 via-red-400 to-amber-400",
      tilt: 3,
    },
  ] satisfies Photo[],

  /* -------------------------------------------------------------- reasons */
  reasonsTitle: "18 reasons why you're special to me",

  reasons: [
    {
      title: "You are my absolute lifeline",
      description:
        "Without you, I wouldn't know how to breathe. You are the oxygen that keeps my soul alive, my ultimate necessity.",
      emoji: "🫀",
    },
    {
      title: "The way you look at me",
      description:
        "Every time your eyes meet mine, my entire universe stops. It’s the safest, most beautiful place I have ever known.",
      emoji: "👀",
    },
    {
      title: "You anchor my soul",
      description:
        "Through every storm and every dark day, your love is the only thing that steadies my heart. You are my peace.",
      emoji: "⚓",
    },
    {
      title: "Your breathtaking smile",
      description:
        "You have the kind of smile that could light up the darkest corners of the cosmos. It cures absolutely all of my sadness.",
      emoji: "✨",
    },
    {
      title: "You are my missing half",
      description:
        "Before you, my world was in pieces. With you, everything finally makes perfect, beautiful sense. You complete me.",
      emoji: "🧩",
    },
    {
      title: "The comfort of your voice",
      description:
        "Even just hearing you say my name sends shivers down my spine and floods my heart with an indescribable calm.",
      emoji: "🎵",
    },
    {
      title: "You are my ultimate dream",
      description:
        "I spent my whole life praying for an angel, and the universe gave me you. Reality is finally better than my wildest dreams.",
      emoji: "🌌",
    },
    {
      title: "The profound way you love me",
      description:
        "You love me, flaws and all, with a fierce, unconditional passion that makes me want to be the best man in the world for you.",
      emoji: "❤️",
    },
    {
      title: "You are my only home",
      description:
        "Home isn't a physical place for me anymore; it is wherever you are. Your arms are my ultimate, eternal sanctuary.",
      emoji: "🏡",
    },
    {
      title: "Your radiant, pure soul",
      description:
        "You have a heart of absolute gold. The kindness and warmth you carry is rarer than the most flawless diamond.",
      emoji: "💎",
    },
    {
      title: "You make the ordinary magical",
      description:
        "Even the most boring, mundane moments become spectacular, cherished memories simply because I am sharing them with you.",
      emoji: "🪄",
    },
    {
      title: "My unshakeable devotion",
      description:
        "Every second that passes, I fall more hopelessly and intensely in love with you. My heart beats strictly for you.",
      emoji: "🔥",
    },
    {
      title: "You are my courage",
      description:
        "You make the impossible feel within reach. With you standing fiercely by my side, I feel like I can conquer the entire world.",
      emoji: "🦁",
    },
    {
      title: "Our unbreakable bond",
      description:
        "No distance, no argument, and no hardship could ever sever the profound connection we share. We are bound together forever.",
      emoji: "🔗",
    },
    {
      title: "You consume my thoughts",
      description:
        "You occupy my mind every single second, with every blink of my eyes. You have completely and beautifully colonized my heart.",
      emoji: "💭",
    },
    {
      title: "That unforgettable hug and kiss",
      description:
        "I will never forget the magic of that hug and kiss we shared. It set my entire soul on fire, and since that moment, I've been completely addicted to you, my love.",
      emoji: "💋",
    },
    {
      title: "You are my best friend",
      description:
        "You are not just my gorgeous girlfriend; you are my most trusted confidante, my partner in chaos, and my absolute favorite person.",
      emoji: "🤝",
    },
    {
      title: "You are my forever",
      description:
        "I am fiercely, passionately yours. You are my last love, my definitive ending, and my most beautiful beginning.",
      emoji: "♾️",
    }
  ] satisfies Reason[],

  /* -------------------------------------------------------- eighteen */
  /** 18 quick-fire facts/memories — one for every year of her life */
eighteen: [
  "You are the single most beautiful thing that has ever happened to me.",
  "I promise to spend the rest of my life making sure you know how fiercely you are loved.",
  "There is absolutely nothing in this world I wouldn't do to see you smile.",
  "You have healed parts of my soul I didn't even know were broken.",
  "My love for you grows deeper and more intense with every single breath I take.",
  "You are my peace, my sanctuary, and the only home my heart will ever know.",
  "I would choose you in a hundred lifetimes, in a hundred worlds, in any version of reality.",
  "No matter how far apart we are, my soul is always entangled with yours.",
  "You are the dream I never thought I deserved, and now you are my beautiful reality.",
  "The thought of a future without you is unimaginable; you are my absolute forever.",
  "I am completely, hopelessly, and wonderfully addicted to every part of you.",
  "You make every dark day disappear just by existing in my world.",
  "I am so incredibly proud of the breathtaking woman you are becoming.",
  "I will always protect your heart and be your absolute safest place to land.",
  "You are the undeniable queen of my heart, and I will worship you endlessly.",
  "I fall in love with you all over again every single time our eyes meet.",
  "There are simply not enough words in any language to describe the depth of my love for you.",
  "Happy 21st Birthday, my lifeline. I am yours, now and until the very end of time.",
],

  /* ------------------------------------------------------------- mixtape */
  mixtape: {
    title: "the 21 mixtape",
    subtitle: "press play on twenty-one",
    tracks: [
      {
        title: "Happy Birthday my LOML",
        artist: "kuchupuchu & yaashi",
        time: "5:03",
      },
    ],
  },

  /* ---------------------------------------------------------- gift + wish */
  gift: {
    teaser: "there's something in here for you",
    hint: "tap the box",
    // Shown after the box is opened
    revealTitle: "a promise, not a present",
    revealBody:
      "One entire day, anywhere you want, my treat, no arguments. Pick the date and I'll show up with snacks.",
    couponCode: "YAASHI-DAY-2026",
  },

  cake: {
    title: "make a wish",
    hint: "blow out the candles",
    afterTitle: "wish locked in 🤞",
    afterBody:
      "Whatever you wished for, I hope you get it. And if the universe needs a little help, don't worry — I'll remind it.",
  },

  /* --------------------------------------------------------------- letter */
letter: {
  envelopeHint: "one last thing — open it",
  greeting: `Dear ${NAME},`,
  paragraphs: [
    "I am trembling as I write this, because I genuinely don't know if human language possesses the words to explain the absolute magnitude of my love for you. You are it for me. You are my last love, my definitive ending, and my most beautiful beginning. I am overwhelmingly, breathlessly grateful that the universe saw fit to collide my path with yours. You are the other half of my soul; without you, I am a ghost, wandering without purpose. You anchor me, you steady me, and you stand fiercely by my side through the darkest of times.",
    "You are my entire world. The thought of losing you paralyzes me. You never, ever have to doubt my loyalty, because my eyes, my heart, and my soul are entirely, permanently fixated on you. Thank you for loving me—flaws and all. Thank you for being the sunshine that pierces through my saddest days. Even now, my heart races wildly just seeing your name light up my phone. You consume my thoughts. You are my only craving, my ultimate necessity. I tell you I love you every day, but even those three words are a tragic understatement for the inferno of devotion I hold for you.",
    "I know I am flawed, but I vow to spend my life trying to be the man you deserve. If I could, I would spend eternity just lying under the stars with you, listening to your heartbeat. Absolutely nothing—no distance, no argument, no hardship—could ever sever the bond I share with you. You are my most trusted confidante and my most passionate lover. You occupy my mind every single second, every hour, with every blink of my eyes. You have colonized my heart. I love you. God, I love you so much it physically aches. Please, never leave my side. The thought of loving anyone else is repulsive to me; I cannot imagine a reality where you are not mine. You have painted my world in colors I never knew existed and filled it with a symphony of joy. I will never, ever be capable of loving another human being the way I love you.",
    "HAPPY HAPPY HAPPPPPPYYYY HAPPPPIEST BIRTHDAY, YAASHI!",
    "Even with hundreds of miles suffocating the space between us, MY DEVOTION TO YOU REMAINS UNSHAKABLE. You are my courage. You make the impossible feel within reach. You are not just a girl; you are a celestial being, a once-in-a-lifetime miracle, and I am terrified by how lucky I am to have you. You outshine the brightest stars, you are rarer than the most flawless diamond. My love for you stretches further than the sky and dives deeper than the ocean. I believe in you with a fierce, unwavering faith, even when you doubt yourself. Even in the silence, you are the only thought echoing in my mind. I selfishly hope the world never realizes how incredibly special you are, just so I can keep you all to myself. I promise to be your shield, your safe space, your ultimate comfort. I will dry your tears, I will celebrate your victories, and I will fiercely protect your heart. I am bursting with pride just watching you chase your dreams. You are breathtakingly gorgeous, inside and out. ALWAYS REMEMBER: WE ARE BOUND TOGETHER FOREVER. Distance may test our patience, but it will never touch our hearts.",
    "Happy Birthday, my soulmate! May your day overflow with the profound joy you bring into my life. You deserve the absolute world, today and for the rest of eternity.",
    "On this sacred day, I pray that the universe bows to your every wish. Happy Birthday to the most astonishingly beautiful soul I have ever encountered!",
    "Happy Birthday! May your day be as radiant, pure, and breathtaking as the smile you gift the world. I cannot wait to witness all the magic you create this year!",
    "Happy birthday, my sweet baby... ❤️ I hope you feel even a fraction of the immense, all-consuming love I have for you today. You are my miracle. ❤️🥺 ❤️ I love you with all that I am 😘"
  ],
  signoff: "Happy birthday, you absolute legend.",
  signature: "— always, mine",
},

  /* --------------------------------------------------------------- finale */
  finale: {
    title: "Happiest Birthday",
    subtitle: "go make this year ridiculously yours.",
    buttonLabel: "one more time 🎊",
  },

  /**
   * Countdown gate configuration. Blocks the site until the target date.
   */
  gate: {
    targetDate: "2026-08-21T00:00:00", // August 21, 2026 at Midnight
    bypassKey: "yaashiloml",
  },

  /**
   * Final hour countdown messages
   */
  finalHourMessages: [
    "* 60 minutes to goo 🧿❤️
One hour left! Time to start practicing your surprised face when I give you your gift.",
    "* 59 minutes to goo \ud83e\uddff\u2764\ufe0f\\nMy heart is racing as we count down to the moment you were born.",
    "* 58 minutes to goo \ud83e\uddff\u2764\ufe0f\\nMy heart is racing as we count down to the moment you were born.",
    "* 57 minutes to goo \ud83e\uddff\u2764\ufe0f\\nMy heart is racing as we count down to the moment you were born.",
    "* 56 minutes to goo \ud83e\uddff\u2764\ufe0f\\nMy love for you transcends time. I adore the woman you were, I am completely captivated by the woman you are, and I am endlessly devoted to the woman you will become.",
    "* 55 minutes to goo \ud83e\uddff\u2764\ufe0f\\nBefore you, I didn't even realize my world was in pieces. You are my missing half, my peace, and my entire universe. I love you beyond the limits of language.",
    "* 54 minutes to goo \ud83e\uddff\u2764\ufe0f\\nEvery breath I take somehow belongs to you. My love for you deepens with every passing second, anchoring my soul to yours.",
    "* 53 minutes to goo \ud83e\uddff\u2764\ufe0f\\nThe miles between us are agonizing, but they only prove that my love for you cannot be bound by distance. You are always right here, beating in my chest.",
    "* 52 minutes to goo \ud83e\uddff\u2764\ufe0f\\nSending you every ounce of warmth in my soul. Even from afar, I hope you feel my arms wrapped tightly around you on your special day.",
    "* 51 minutes to goo \ud83e\uddff\u2764\ufe0f\\nDistance can keep our hands apart, but our souls are entwined in a way that time and space could never touch.",
    "* 50 minutes to goo \ud83e\uddff\u2764\ufe0f\\nWishing the most ethereal birthday to the woman who stole my heart without even trying. You are my greatest blessing, across any distance.",
    "* 49 minutes to goo \ud83e\uddff\u2764\ufe0f\\nSeparated by miles, yet you are the most constant, overwhelming presence in my life. You are the gravity that keeps me grounded.",
    "* 48 minutes to goo \ud83e\uddff\u2764\ufe0f\\nMay this day overflow with the profound joy you bring into my life. I am loving you fiercely from exactly where I am.",
    "* 47 minutes to goo \ud83e\uddff\u2764\ufe0f\\nNo ocean is wide enough, no distance is great enough, to dilute a single drop of the immense love I hold for you.",
    "* 46 minutes to goo \ud83e\uddff\u2764\ufe0f\\nThis distance is a test, but it only sets my love for you ablaze. It makes me crave you, cherish you, and love you with a terrifying intensity.",
    "* 45 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYou are the reason I finally understand what poetry is trying to say. You are my living, breathing miracle. I love you, eternally.",
    "* 44 minutes to goo \ud83e\uddff\u2764\ufe0f\\nWhen I look into your eyes, I don't just see a future\u2014I see the only future worth living. I love you to the ends of the universe.",
    "* 43 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYou are the confidante of my soul and the undisputed queen of my heart. I will love you endlessly, in this life and the next.",
    "* 42 minutes to goo \ud83e\uddff\u2764\ufe0f\\nNo matter what the universe throws at us, my heart will always navigate back to you. You are my ultimate desire and my safest home.",
    "* 41 minutes to goo \ud83e\uddff\u2764\ufe0f\\nFalling for you wasn't a choice; it was destiny. Loving you is the most beautiful thing my soul has ever done. You are my everything.",
    "* 40 minutes to goo \ud83e\uddff\u2764\ufe0f\\nI love you not just for the radiant soul you are, but for the man you inspire me to be when I am basking in your light.",
    "* 39 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYou didn't just make my life better; you brought it to life. I adore you with every fiber of my being, my darling.",
    "* 38 minutes to goo \ud83e\uddff\u2764\ufe0f\\nEvery single time my eyes land on you, I fall into a deeper, more breathtaking kind of love. It\u2019s like discovering you for the first time, over and over again.",
    "* 37 minutes to goo \ud83e\uddff\u2764\ufe0f\\nI love you with an intensity that terrifies me. I vow to spend the rest of my breathing days proving to you just how worshipped you are.",
    "* 36 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYou are the radiant light that chases away all my shadows. You heal parts of me you didn't even break. I love you.",
    "* 35 minutes to goo \ud83e\uddff\u2764\ufe0f\\nMy heart surrendered to you a long time ago, and it is yours to keep until the stars burn out and time ceases to exist.",
    "* 34 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYou are the empress of my soul. I will spend every day of my life ensuring you feel as cherished and revered as the royalty you are.",
    "* 33 minutes to goo \ud83e\uddff\u2764\ufe0f\\nEven when I close my eyes, your face is carved into my mind. You are the dream I prayed for, finally standing right in front of me.",
    "* 32 minutes to goo \ud83e\uddff\u2764\ufe0f\\nWhen you're near, the rest of the world fades into silence. You are my entire universe, and my heart beats strictly for you.",
    "* 31 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYou are the rhythm my heart beats to, the sweetest melody my soul has ever known. Words completely fail to capture the depth of my devotion to you.",
    "* 30 minutes to goo 🧿❤️
Half an hour! You are my everything, my kuchupuchu, my absolute favorite human.",
    "* 29 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYou are the singular reason my heart beats. You have flooded my life with a love so pure I can hardly comprehend it. I am overwhelmingly grateful you exist.",
    "* 28 minutes to goo \ud83e\uddff\u2764\ufe0f\\nEvery day by your side feels like a profoundly beautiful dream, and I am absolutely terrified of waking up. Let me stay in this dream forever.",
    "* 27 minutes to goo \ud83e\uddff\u2764\ufe0f\\nIn your arms, I found the sanctuary my soul has been frantically searching for since the day I was born. I love you deeper than the ocean.",
    "* 26 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYou are my greatest, most beautiful adventure. You are the story I want to read, write, and live, every single day for the rest of my life.",
    "* 25 minutes to goo \ud83e\uddff\u2764\ufe0f\\nHappy birthday to the soul who holds my heart from miles away. The distance today is a cruel joke, but it only reminds me how desperately I need you. I hope your day is overflowing with laughter, warmth, and joy. But as you celebrate, please feel my presence right there beside you, loving you silently, waiting for the moment I can finally pull you into my arms.",
    "* 24 minutes to goo \ud83e\uddff\u2764\ufe0f\\nWith you, reality is finally better than my wildest fantasies. Thank you for being my fairy tale and my forever.",
    "* 23 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYour love is the lighthouse that guides me through my darkest storms. I am breathtakingly lucky to call you mine.",
    "* 22 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYou are the most mesmerizing, beautiful chapter of my existence. I am trembling with excitement to see the rest of the life we build together.",
    "* 21 minutes to goo \ud83e\uddff\u2764\ufe0f\\nEvery kiss, every fleeting touch, every soft whisper from you sets my soul on fire. You intoxicate me.",
    "* 20 minutes to goo \ud83e\uddff\u2764\ufe0f\\nHappy birthday to the absolute love of my life! The time we've spent together feels like a beautiful blur, yet I remember every second. You consume my thoughts entirely, especially when we are apart. I am counting down the seconds until I can drown in your eyes again. I hope today brings you immeasurable joy. Please remember, with every breath you take today, that someone far away is missing you terribly and loving you endlessly.",
    "* 19 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYou are my sunrise, my sunset, and the absolute center of my gravity. I love you with a ferocity you couldn't possibly imagine.",
    "* 18 minutes to goo \ud83e\uddff\u2764\ufe0f\\nIn you, I didn't just find a lover; I found my soulmate, my best friend, and my peace. You complete me, and you also eat my fries even when you said you weren't hungry.",
    "* 17 minutes to goo \ud83e\uddff\u2764\ufe0f\\nEvery single time I look at you, I am overwhelmed by a wave of disbelief that someone as perfect as you chose me.",
    "* 16 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYou are the missing piece to my puzzle, the very essence that makes my life taste sweet. You are my absolute necessity (along with pizza).",
    "* 15 minutes to goo \ud83e\uddff\u2764\ufe0f\\nThe silence between us is deafening, and I miss the sound of your voice more than I miss breathing. The only thing keeping me sane is the promise that this distance will end. I hope you are drowning in love today, because you deserve the entire world. I am aching to hold you again. Chitransh is missing you terribly.",
    "* 14 minutes to goo \ud83e\uddff\u2764\ufe0f\\nI must be completely entirely undone, because I have fallen so deeply, so hopelessly for you.",
    "* 13 minutes to goo \ud83e\uddff\u2764\ufe0f\\nIf kisses were the sky, I would wrap you in the entire universe. I want to shower you with all the affection my soul can muster.",
    "* 12 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYou make my heart race and my soul sing just by existing. You are, without a doubt, the most magnificent person I've ever known.",
    "* 11 minutes to goo \ud83e\uddff\u2764\ufe0f\\nI caught myself smiling at nothing today, only to realize my mind was wandering through memories of your beautiful face.",
    "* 10 minutes to goo \ud83e\uddff\u2764\ufe0f\\nIt shatters my heart that I cannot be there to kiss you at midnight, but my soul is celebrating you from across these miles. You are the center of my universe, and no matter where life scatters us, my heart will always, always belong to you.",
    "* 09 minutes to goo \ud83e\uddff\u2764\ufe0f\\nIf I could trade everything I own just to teleport into your arms right now, I would do it in a heartbeat. I miss you intensely, my love.",
    "* 08 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYou are the blood in my veins, the air in my lungs, and the breathtaking smile permanently painted on my face.",
    "* 07 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYour laugh is the only soundtrack I ever want to hear. It cures my sadness and makes my entire world vibrate with happiness.",
    "* 06 minutes to goo \ud83e\uddff\u2764\ufe0f\\nYou are the absolute highlight of my existence. Just the mere thought of you is enough to pull me out of my darkest days.",
    "* 05 minutes to goo \ud83e\uddff\u2764\ufe0f\\nThis physical distance means nothing compared to the depth of our emotional bond. Our love is an immovable mountain, weathering every storm. We've conquered so much, and this distance is just another chapter in our legendary love story. I am deeply, madly, overwhelmingly in love with you. I cannot wait to hold you. Happy Birthday, my soulmate!",
    "* 04 minutes to goo \ud83e\uddff\u2764\ufe0f\\nIf our love were a story, it would be the greatest romance ever written. You are the happily ever after my soul has been begging for.",
    "* 03 minutes to goo \ud83e\uddff\u2764\ufe0f\\nSeeing your name on my screen is the only notification that can make my heart physically skip a beat. I crave you constantly.",
    "* 02 minutes to goo \ud83e\uddff\u2764\ufe0f\\nIf I had a star for every time your light pulled me out of the dark, I would be holding the entire cosmos in the palm of my hands.",
    "* 01 minutes to goo 🧿❤️
ONE MINUTE! Happy 21st Birthday Yaashi! I love you more than words can say. You are the LOML!",
  ],

  /**
   * Secret Konami-style code to trigger a massive confetti explosion.
   * Type this anywhere on the page!
   */
  secretCode: "yaashi",

  /**
   * Background music configuration. The player will only render if musicSrc is set.
   * For the visualizer to work perfectly, the audio must not have CORS restrictions.
   */
  musicSrc: "/song.mp3",
  songTitle: "Happy Birthday my LOML",
  songArtist: "kuchupuchu & yaashi",
} as const;

export type SiteConfig = typeof config;
