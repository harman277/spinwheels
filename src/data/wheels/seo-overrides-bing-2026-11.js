/* =========================================================
   FINAL SERP OVERRIDES (applied last, English only)
   Source: Bing Webmaster Tools 18-month Keyword + Page reports (Nov 2026).
   Goal: lift CTR on pages ranking positions 3-10 with high impressions
   by front-loading exact query wording into title (25-60 chars),
   description (115-165 chars), and keywords.
   ========================================================= */

const SEO_OVERRIDES = {
  // 54.8k impressions, 0.87% CTR. Queries: country wheel (5,863), wheel of countries (3,086),
  // country picker wheel (2,615), random country generator (1,983), random country wheel (1,697).
  "country-picker-wheel": {
    title: "Country Wheel & Country Picker Wheel (All 195 Countries)",
    description: "Spin the Country Wheel (Wheel of Countries) with all 195 countries! Free random country generator & country wheel spinner with continent filters & flag icons.",
    keywords: "country wheel, country picker wheel, wheel of countries, random country generator, random country wheel, country wheel spinner, country spinner, spin the wheel countries, country spin the wheel, country spin wheel, country picker, random country picker, wheel with every country, all 195 countries wheel, every country wheel"
  },
  // 10k impressions. Queries: number picker wheel (917), number wheel spinner (419), number spinner (271), free spinning wheel number picker (161).
  "number-picker-wheel": {
    title: "Number Picker Wheel – Free Number Wheel Spinner (1 to 500)",
    description: "Spin the free Number Picker Wheel (Number Spinner) for 1–10, 1–20, 1–100 or up to 500 numbers! Free spinning wheel with numbers, no-repeat mode & CSV export.",
    keywords: "number picker wheel, number wheel spinner, number spinner, free spinning wheel number picker, spin the wheel numbers, picker wheel number, numberpicker, number spinner wheel, random number picker wheel free, free spinner wheel with numbers, spin the wheel with numbers, number wheel picker"
  },
  // 9.9k impressions. Queries: animal wheel (590), animal wheel spinner (88), random animal wheel (82), wheel of animals (71).
  "animal-picker-wheel": {
    title: "Animal Wheel & Animal Picker Wheel – Wheel of All Animals",
    description: "Spin the Animal Wheel (Wheel of Animals) to pick a random animal! Free animal wheel spinner with 30+ birds & animals, Safari, Ocean, Pets & drawing presets.",
    keywords: "animal wheel, animal picker wheel, animal wheel spinner, random animal wheel, animal spin the wheel, wheel of animals, spin the wheel animals, animal spinner, random animal picker, a wheel with all the animals, birds and animals spin the wheel, pick a random animal, animal generator wheel"
  },
  // 9.4k impressions. Queries: yes or no wheel (2,828), yes no wheel (1,530), spin the wheel yes or no (363), yes or no spinner (117).
  "yes-no-wheel": {
    title: "Yes or No Wheel – Spin the Wheel Yes or No (50/50 Free)",
    description: "Spin the Yes or No Wheel (Yes No Wheel Spinner) for an instant 50/50 YES or NO verdict! Switch to Yes/No/Maybe or Best-of-3 mode—free, fair & no login.",
    keywords: "yes or no wheel, yes no wheel, spin the wheel yes or no, yes or no spinner, yes or no wheel spinner, yes or no spin the wheel, yes no wheel spin, wheel spinner yes or no, spin the wheel yes no, yes or no wheel decide, yes no maybe wheel"
  },
  // 6.5k impressions. Queries: color wheel spinner (872), colour wheel spinner (67), color picker wheel (22), color wheel picker (20).
  "color-picker-wheel": {
    title: "Color Wheel Spinner & Color Picker Wheel (Free HEX & RGB)",
    description: "Spin the free Color Wheel Spinner (Colour Wheel Spinner) to pick a random color with HEX & RGB codes! Rainbow, Pastel & Neon presets for 3-marker challenges.",
    keywords: "color wheel spinner, colour wheel spinner, color picker wheel, color wheel picker, color spin wheel, color wheel spin, color spinning wheel, color wheel spinner online free, random color generator wheel with hex codes, colour picker wheel"
  },
  // 4.1k impressions. Queries: truth or dare wheel (391), truth or dare spin the wheel (53), spin the wheel truth or dare (31), dare wheel (14).
  "truth-or-dare-wheel": {
    title: "Truth or Dare Wheel – Spin the Wheel Truth or Dare (Free)",
    description: "Play Truth or Dare Spin the Wheel online free! Switch Classic 50/50, Party Night, Couples, Family Clean & Unblocked School presets—or paste custom dares.",
    keywords: "truth or dare wheel, truth or dare spin the wheel, spin the wheel truth or dare, dare wheel, truth and dare spin wheel, truth or dare spinner wheel, truth or dare spin wheel unblocked, truth or dare wheel for couples, truth or dare questions wheel"
  },
  // 2.9k impressions. Queries: letter picker wheel (134), letter spinner (68), spin the wheel letters (39), letter picker (24), spin the wheel alphabet letters generator (8).
  "letter-picker-wheel": {
    title: "Letter Picker Wheel A–Z – Free Letter Spinner & Alphabet",
    description: "Spin the Letter Picker Wheel (A–Z Letter Spinner) for a random alphabet letter! Vowels, Consonants & Scattergories presets with no-repeat letter elimination.",
    keywords: "letter picker wheel, letter spinner, spin the wheel letters, letter picker, letter wheel spinner, random letter spinner, spin the wheel alphabet letters generator, picker wheel letters, letter spinner wheel, alphabet spinner free"
  },
  // 1.6k impressions. Queries: dandys world trinket wheel updated (7), dandy's world toon wheel (5), every trinket in dandy's world wheel (3).
  "dandy-world-wheel-spinner": {
    title: "Dandy's World Wheel – All Toons & Trinkets Spinner (2026)",
    description: "Spin the updated 2026 Dandy's World Toon & Trinket Wheel! Includes all 27+ Toons, Mains (Pebble, Vee, Astro, Shelly, Sprout, Bobette), every Trinket & curses.",
    keywords: "dandy's world wheel spinner, dandy's world toon wheel, dandys world trinket wheel updated, every trinket in dandy's world wheel, dandy's world randomizer wheel, random toon trinket curse dandys world, dandy world mains spin wheel, toon wheel dandys world 2026"
  },
  // 1.25k impressions. Queries: nba spin the wheel (25), nba team wheel (8), nba team wheel spinner (5), nba teams spin the wheel.
  "nba-team-wheel": {
    title: "NBA Team Wheel – Spin All 30 NBA Teams (East & West Free)",
    description: "Spin the NBA Team Wheel with all 30 NBA franchises! Filter Eastern & Western Conferences for NBA 2K MyNBA rebuilds, Blacktop matchups & playoff watch pools.",
    keywords: "nba team wheel, nba teams spin the wheel, nba spin the wheel, nba team wheel spinner, random nba team generator, spin all 30 nba teams"
  },
  // 782 impressions. Queries: language wheel (10), wheel of languages (8), languages spin the wheel (7), random language picker (6).
  "language-picker-wheel": {
    title: "Language Wheel & Language Picker Wheel (World Languages)",
    description: "Spin the Language Wheel (Wheel of Languages) to pick a random language! Includes popular world, European, Asian & Duolingo languages with no-repeat spins.",
    keywords: "language wheel, language picker wheel, wheel of languages, languages spin the wheel, random language picker, picker wheel language, language spinner wheel"
  },
  // 731 impressions. Queries: wheel of every nfl team (4), wheel of nfl teams (3), nfl team generator wheel (2), random nfl team wheel spin (2).
  "random-nfl-team-generator": {
    title: "NFL Team Wheel – Random NFL Team Generator (All 32 Teams)",
    description: "Spin the Wheel of All 32 NFL Teams (Random NFL Team Generator)! Switch Full 32-Team League, AFC & NFC presets for Madden rebuilds, survivor pools & drafts.",
    keywords: "random nfl team generator, wheel of every nfl team, wheel of nfl teams, nfl team wheel, random nfl team wheel spin, nfl team generator wheel, afc or nfc wheel"
  },
  // 621 impressions, 5.64% CTR. Queries: wheell of nba players active and retired (17), spin the wheel nba players (8), nba players wheel (4), wheel of nba players on every team (3).
  "nba-player-spin-the-wheel": {
    title: "NBA Players Wheel – Active & Retired NBA Player Spinner",
    description: "Spin the Wheel of NBA Players (Active Superstars & Retired All-Time Legends)! Presets for current starters across all 30 teams, 2K Blacktop & Build a Player.",
    keywords: "nba player spin the wheel, wheel of nba players active and retired, spin the wheel nba players, nba players wheel, random nba player wheel, nba player wheel spin all time, wheel of nba players on every team, nba starting lineup wheel spinner"
  },
  // 508 impressions. Queries: emoji name picker (228), emoji picker wheel (56), random emoji picker wheel (31).
  "emoji-picker-wheel": {
    title: "Emoji Picker Wheel & Emoji Name Picker – Random Spinner",
    description: "Spin the Emoji Picker Wheel or use our visual Emoji Name Picker for classrooms & streams! Random emojis for 3-emoji story prompts, Pictionary & reactions.",
    keywords: "emoji picker wheel, emoji name picker, random emoji picker wheel, random emoji spinner, emoji wheel, pick your emoji"
  },
  // 466 impressions. Queries: flag wheel (32), flag spinner (11), random flag generator wheel (10), flag wheel spinner (9), spin the wheel country flag (8).
  "random-flag-generator": {
    title: "Flag Wheel & Random Flag Generator – World Flags Spinner",
    description: "Spin the Flag Wheel (Random Flag Generator) to pick from world country flags! Great for Guess the Flag trivia, Flagdle practice, drawing & geography class.",
    keywords: "flag wheel, random flag generator, flag spinner, random flag generator wheel, flag wheel spinner, spin the wheel country flag, guess the flag spinner, all countries flags spin the wheel"
  },
  // 448 impressions. Queries: zodiac wheel (130), zodiac sign wheel (11), zodiac spin the wheel (6), zodiac signs wheel (3).
  "zodiac-picker-wheel": {
    title: "Zodiac Wheel – Spin All 12 Zodiac Signs & Dates Spinner",
    description: "Spin the Zodiac Wheel to pick from all 12 astrology zodiac signs with dates! Filter Fire, Earth, Air & Water signs for character traits, art & party games.",
    keywords: "zodiac wheel, zodiac sign wheel, zodiac picker wheel, zodiac spin the wheel, zodiac signs wheel, wheel of zodiac signs, zodiac spin wheel with dates"
  },
  // 424 impressions. Queries: month picker (19), wheel of months (16), months of the year spinner (7), months of the year wheel (7), month wheel (6).
  "month-picker-wheel": {
    title: "Month Picker Wheel – Wheel of Months (Jan to Dec Spinner)",
    description: "Spin the Month Picker Wheel (Wheel of Months) to pick a random month from January to December! Includes all 12 months & 4 seasons presets with no-repeat mode.",
    keywords: "month picker, month picker wheel, wheel of months, months of the year spinner, months of the year wheel, month wheel, months wheel, spin the wheel months"
  },
  // 340 impressions. Queries: pick a planet (14), random planet picker (9), planet spin the wheel (5), planet wheel (5).
  "planet-picker-wheel": {
    title: "Planet Picker Wheel – Pick a Planet & Solar System Wheel",
    description: "Spin the Planet Picker Wheel to pick a random planet from all 8 Solar System planets, Dwarf Planets (Pluto) & Moons! Ideal for science class & space trivia.",
    keywords: "pick a planet, planet picker wheel, random planet picker, planet spin the wheel, planet wheel, planets spin the wheel, choose a planet"
  },
  // 335 impressions. Queries: music genre wheel (5), music genre wheel spinner (4), random music genre (3).
  "music-genre-wheel": {
    title: "Music Genre Wheel – Random Music Genre & Playlist Spinner",
    description: "Spin the Music Genre Wheel to pick a random music style! Includes Pop, Hip-Hop, Rock, Jazz, Lo-Fi, EDM, Retro Decades & Latin presets for playlists & beats.",
    keywords: "music genre wheel, music genre wheel spinner, random music genre, wheel of music genres, song genre spin wheel, music genre picker wheel"
  },
  // 307 impressions. Queries: states whell (7), us states wheel (4), usa spin the wheel (3), 50 states of america picker wheel (2).
  "us-state-picker-wheel": {
    title: "US States Wheel – 50 States of America Picker Wheel Free",
    description: "Spin the US States Wheel (US State Picker Wheel) with all 50 states of America! Filter West, Midwest, South & Northeast regions for school reports & travel.",
    keywords: "us state picker wheel, us states wheel, 50 states of america picker wheel, us state wheel spinner, usa spin the wheel, states wheel, random us state generator"
  },
  // 307 impressions. Queries: team pickerwheel (44), team name picker (3), how to make groups with picker wheel (2).
  "team-picker-wheel": {
    title: "Team Picker Wheel – Free Random Team & Group Generator",
    description: "Split any class or roster into fair random groups with the Team Picker Wheel (Team Pickerwheel)! Supports up to 500 names, no-repeat drafts & CSV export.",
    keywords: "team picker wheel, team pickerwheel, team name picker, random team generator wheel, spin wheel for team picking, how to make groups with picker wheel"
  },
  // 162 impressions. Queries: picker wheel food (22), spin the wheel food (3), food spin the wheel (2), food picker wheel (1).
  "food-picker-wheel": {
    title: "Food Picker Wheel – Random Food & What to Eat Spinner",
    description: "Can't decide what to eat? Spin the Food Picker Wheel (Picker Wheel Food) for lunch, takeout, fast food, dinner & cuisines—or paste your favorite local spots.",
    keywords: "food picker wheel, picker wheel food, spin the wheel food, food spin the wheel, food picker, random food spinning wheel, lunch picker wheel"
  },
  // 125 impressions. Queries: day wheel (2), spin the wheel days the week (2), days of the week wheel (2), monday to sunday spin wheel (1).
  "day-picker-wheel": {
    title: "Days of the Week Wheel – Random Day Picker Wheel (Mon–Sun)",
    description: "Spin the Days of the Week Wheel (Day Picker Wheel) to pick a random day from Monday to Sunday! Includes Full 7-Day Week, Weekdays Only & Weekend presets.",
    keywords: "day picker wheel, days of the week wheel, day wheel, spin the wheel days of the week, days of the week random picker wheel, monday to sunday spin wheel"
  },
  // High volume head term wheel-of-names (8,951 imp).
  "wheel-of-names": {
    title: "Wheel of Names – Free Random Name Wheel & Spinner Online",
    description: "Spin our free Wheel of Names (Random Name Wheel Spinner) with up to 500 names! Built for classrooms, giveaways & teams—1x–20x weights, winner removal, no login.",
    keywords: "wheel of names, wheel of names spinner, wheels of names, random name wheel, name wheel, name wheel spinner, spin the wheel of names, spin wheel of names, name spinner, free wheel of names, wheel of names unblocked"
  }
};

export default SEO_OVERRIDES;
