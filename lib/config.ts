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
  friendsSince: "2023-08-13",

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
    "happy 21st birthday Yaashviiiiiiiii🧿",
    "my beautiful soulmate",
    "my forever and always",
    "the absolute love of my life",
    "21 & deeply loved",
  ],

  /* -------------------------------------------------------------- gallery */
  photos: [
    {
      src: "/photos/photo2.png",
      caption: "",
      emoji: "📸",
      gradient: "from-rose-400 via-fuchsia-500 to-indigo-500",
      tilt: -6,
    },
    {
      src: "/photos/photo3.png",
      caption: "",
      emoji: "🥰",
      gradient: "from-amber-300 via-orange-400 to-rose-500",
      tilt: 4,
    },
    {
      src: "/photos/photo4.png",
      caption: "",
      emoji: "✨",
      gradient: "from-sky-300 via-cyan-400 to-emerald-400",
      tilt: -3,
    },
    {
      src: "/photos/photo5.png",
      caption: "",
      emoji: "😍",
      gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
      tilt: 7,
    },
    {
      src: "/photos/photo6.png",
      caption: "",
      emoji: "🙈",
      gradient: "from-lime-300 via-emerald-400 to-teal-500",
      tilt: -5,
    },
    {
      src: "/photos/photo7.png",
      caption: "",
      emoji: "🌅",
      gradient: "from-pink-400 via-red-400 to-amber-400",
      tilt: 3,
    },
    {
      src: "/photos/photo8.png",
      caption: "",
      emoji: "💕",
      gradient: "from-cyan-400 via-blue-500 to-indigo-500",
      tilt: -4,
    },
  ] satisfies Photo[],

  /* -------------------------------------------------------------- reasons */
  reasonsTitle: "21 reasons why you're special to me",

  reasons: [
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
  ] satisfies Reason[],

  /* -------------------------------------------------------- eighteen */
  /** 21 quick-fire facts/memories — one for every year of her life */
eighteen: [
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
  ],
  signoff: "Happiest Birthday my Yaashii..❤️",
  signature: "— always, CHITRANSH <3",
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
    targetDate: "2026-09-11T00:00:00", // September 11, 2026 at Midnight
    bypassKey: "yaashiloml",
  },

  /**
   * Final hour countdown messages
   */
  finalHourMessages: [
    "* 60 minutes to goo 🧿❤️\nOne hour left! I am officially vibrating with excitement for your special day.",
    "* 59 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 58 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 57 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 56 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 55 minutes to goo 🧿❤️\nJust 55 minutes left until the world celebrates the birth of my favorite person!",
    "* 54 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 53 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 52 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 51 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 50 minutes to goo 🧿❤️\nJust 50 minutes left until the world celebrates the birth of my favorite person!",
    "* 49 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 48 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 47 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 46 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 45 minutes to goo 🧿❤️\nJust 45 minutes left until the world celebrates the birth of my favorite person!",
    "* 44 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 43 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 42 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 41 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 40 minutes to goo 🧿❤️\nJust 40 minutes left until the world celebrates the birth of my favorite person!",
    "* 39 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 38 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 37 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 36 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 35 minutes to goo 🧿❤️\nJust 35 minutes left until the world celebrates the birth of my favorite person!",
    "* 34 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 33 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 32 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 31 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 30 minutes to goo 🧿❤️\nHalf an hour! You are my everything, my kuchupuchu, my absolute favorite human.",
    "* 29 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 28 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 27 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 26 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 25 minutes to goo 🧿❤️\nJust 25 minutes left until the world celebrates the birth of my favorite person!",
    "* 24 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 23 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 22 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 21 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 20 minutes to goo 🧿❤️\nJust 20 minutes left until the world celebrates the birth of my favorite person!",
    "* 19 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 18 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 17 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 16 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 15 minutes to goo 🧿❤️\nJust 15 minutes left until the world celebrates the birth of my favorite person!",
    "* 14 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 13 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 12 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 11 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 10 minutes to goo 🧿❤️\nJust 10 minutes left until the world celebrates the birth of my favorite person!",
    "* 09 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 08 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 07 minutes to goo 🧿❤️\nThinking about how incredibly lucky I am to have you in my life.",
    "* 06 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 05 minutes to goo 🧿❤️\nJust 5 minutes left until the world celebrates the birth of my favorite person!",
    "* 04 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 03 minutes to goo 🧿❤️\nI am counting down every single second until I can see your beautiful smile.",
    "* 02 minutes to goo 🧿❤️\nEvery minute that passes is just another minute I spend falling deeper in love with you.",
    "* 01 minutes to goo 🧿❤️\nONE MINUTE! Happy 21st Birthday Yaashii! I love you more than words can say. You are the LOML!",
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
  songArtist: "Chitransh",
} as const;

export type SiteConfig = typeof config;
