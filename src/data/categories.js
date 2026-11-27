/* =========================================================
   8 CANONICAL CATEGORY HUBS
   Organizes all 69 specialized wheels into clear user-facing
   topics with CollectionPage + ItemList + BreadcrumbList + FAQPage schema.
   ========================================================= */

const CATEGORIES = [
  {
    slug: "quick-decisions",
    name: "Quick Decisions",
    icon: "⚡",
    ogImage: "eng-yes-no-wheel.webp",
    title: "Quick Decision & Choice Wheels | Free Online Spinners",
    description: "Spin free decision wheels for Yes or No answers, virtual coin flips, custom lists, weekdays, and months with fair browser-local randomness.",
    keywords: "decision wheel, yes or no wheel, picker wheel, coin flip wheel, random choice wheel, online decision maker",
    h1: "Quick Decision & Choice Wheels",
    subtitle: "Settle binary calls, custom shortlists, coin tosses, and calendar rotations in seconds—all running locally in your browser with no account.",
    quickAnswer: "<strong>Need a fast, neutral tie-breaker?</strong> Choose the <a href=\"/yes-no-wheel\">Yes or No Wheel</a> or <a href=\"/coin-flip-wheel\">Coin Flip Wheel</a> for strict 50/50 calls, use the <a href=\"/picker-wheel\">Picker Wheel</a> or weighted <a href=\"/decision-wheel\">Decision Wheel</a> for custom shortlists, or rotate dates with <a href=\"/day-picker-wheel\">Day Picker</a> and <a href=\"/month-picker-wheel\">Month Picker</a>.",
    guideHeading: "Choosing the Right Quick-Decision Spinner",
    guideSubtitle: "When a 50/50 coin toss beats a weighted list—and when a wheel shouldn't make the call at all.",
    guideSections: [
      {
        heading: "Match the Wheel Format to the Choice in Front of You",
        body: "Most everyday stalemates happen between options that are already good enough—two weekend plans, three errands, or whether to cook or order in. Picking a pre-built format saves you from setting up a blank wheel every time: stick to the <a href=\"/yes-no-wheel\">Yes or No Wheel</a> or <a href=\"/coin-flip-wheel\">Coin Flip Wheel</a> when there are strictly two sides, switch to the <a href=\"/decision-wheel\">Decision Wheel</a> when one option deserves higher 1x–20x odds, or open the <a href=\"/picker-wheel\">Picker Wheel</a> to paste up to 500 tasks or ideas.",
        bullets: [
          "<strong>Two-Way Tie-Breakers (50/50):</strong> Use <a href=\"/yes-no-wheel\">Yes or No Wheel</a> (including its optional Yes/No/Maybe mode) for personal gut checks, or <a href=\"/coin-flip-wheel\">Coin Flip Wheel</a> for kickoff tosses and first-turn board-game draws.",
          "<strong>Ranked Shortlists &amp; Errands:</strong> Load 4–8 tasks on the <a href=\"/picker-wheel\">Picker Wheel</a> or <a href=\"/decision-wheel\">Decision Wheel</a> with <em>Remove Winner After Spin</em> enabled to turn a messy to-do list into a clear step-by-step order.",
          "<strong>Weekly &amp; Monthly Schedules:</strong> Assign gym days, team standups, or travel months without favoritism using <a href=\"/day-picker-wheel\">Day Picker Wheel</a> and <a href=\"/month-picker-wheel\">Month Picker Wheel</a>."
        ]
      },
      {
        heading: "Use the Gut-Check Rule (and Skip Wheels for High-Stakes Calls)",
        body: "A practical habit that makes binary wheels surprisingly useful: notice your first half-second reaction when the pointer stops. If it lands on \"No\" and you feel a quick spike of disappointment, you just discovered you actually wanted \"Yes\"—follow that instinct instead of spinning three more times. Keep wheels for low-to-medium stakes choices; medical, legal, and major financial decisions belong on a pros-and-cons sheet, not a spinner. For more on why externalizing small choices frees up mental energy, read <a href=\"/blogs/psychology-random-decision-making\">the psychology behind random decision making</a>, or hop over to <a href=\"/category/food-and-lifestyle\">Food &amp; Lifestyle Wheels</a> when dinner is the real debate."
      }
    ],
    relatedBlogs: [
      { slug: "yes-no-wheel-when-to-use", title: "Yes or No Wheel — When to Use It and Why It Actually Helps", tag: "Decision Guide" },
      { slug: "psychology-random-decision-making", title: "The Psychology Behind Random Decision Making", tag: "Psychology" },
      { slug: "spin-wheel-vs-other-random-pickers", title: "Spin the Wheel vs. Other Random Pickers", tag: "Comparison" },
      { slug: "spin-the-wheel-tool", title: "What Is a Spin the Wheel Tool — and How Does It Work?", tag: "Complete Guide" }
    ],
    faqs: [
      { q: "Which wheel is best for a fast 50/50 choice?", a: "Both the Yes or No Wheel and the Coin Flip Wheel deliver exact 50/50 odds using the browser Web Cryptography API. Pick Yes or No for quick personal calls and Coin Flip for sports kickoffs or tabletop first-turn draws." },
      { q: "How does custom slice weighting work on decision wheels?", a: "Click the + or - controls beside any entry to scale its weight from 1x up to 20x. The slice widens visually on the canvas and updates its exact win percentage immediately." },
      { q: "Can I share a custom decision list with friends?", a: "Yes. Click Share Wheel to copy a link encoding your exact choices, or show a scannable QR code so anyone on a phone can open and spin the same list." },
      { q: "Are my personal choice lists uploaded to any server?", a: "Never. All wheel entries, weights, and saved lists run 100% locally in your browser memory and LocalStorage." }
    ]
  },
  {
    slug: "names-and-classrooms",
    name: "Names & Classrooms",
    icon: "👤",
    ogImage: "eng-team-picker-wheel.webp",
    title: "Name Picker & Classroom Wheels | Free Teacher Spinners",
    description: "Free Wheel of Names, classroom student picker, random team generator, icebreaker wheel, and presentation order spinners built for teachers and teams.",
    keywords: "wheel of names, classroom name picker, random name picker, team picker wheel, student selector wheel, icebreaker question wheel",
    h1: "Name Picker & Classroom Wheels",
    subtitle: "Call on every student fairly, draft balanced project teams, run crisp standups, and keep lessons moving with no-repeat name draws.",
    quickAnswer: "<strong>Calling on students or running team turns?</strong> Paste up to 500 names into our flagship <a href=\"/wheel-of-names\">Wheel of Names</a> or <a href=\"/classroom-name-picker\">Classroom Name Picker</a>, draft balanced groups with <a href=\"/team-picker-wheel\">Team Picker Wheel</a>, warm up rooms via <a href=\"/icebreaker-question-wheel\">Icebreaker Question Wheel</a>, and set talk order on <a href=\"/presentation-order-wheel\">Presentation Order Wheel</a>.",
    guideHeading: "Practical Classroom & Team Roster Workflows",
    guideSubtitle: "Keeping student names private on school devices while making every draw visible to the whole room.",
    guideSections: [
      {
        heading: "Preventing Cold-Call Bias on Smartboards & Video Calls",
        body: "When teachers call on hands from memory, the same five confident volunteers end up answering half the questions while quieter students drift out of the discussion. Putting <a href=\"/classroom-name-picker\">Classroom Name Picker</a> or <a href=\"/wheel-of-names\">Wheel of Names</a> up in Fullscreen Mode makes participation visibly even-handed. Turn ON <em>Remove Winner After Spin</em> at the start of the period so everyone gets called once before any name cycles back in.",
        bullets: [
          "<strong>Five-Second Roster Import:</strong> Copy a full class column from Google Classroom, Excel, or Slack and paste up to 500 names straight into <a href=\"/wheel-of-names\">Wheel of Names</a> or <a href=\"/classroom-name-picker\">Classroom Name Picker</a>.",
          "<strong>Fair Lab Partners &amp; Squads:</strong> Alternate spins on the <a href=\"/team-picker-wheel\">Team Picker Wheel</a> to draft lab partners, debate sides, or hackathon squads without cliques.",
          "<strong>Standups &amp; Presentations:</strong> Eliminate the awkward \"who wants to go first?\" pause with <a href=\"/presentation-order-wheel\">Presentation Order Wheel</a> and low-pressure warmups from <a href=\"/icebreaker-question-wheel\">Icebreaker Question Wheel</a>.",
          "<strong>Fiction &amp; Roleplay Naming:</strong> Draft story characters, NPCs, or baby-name shortlists using <a href=\"/random-name-generator\">Random Name Generator</a>."
        ]
      },
      {
        heading: "Privacy Note for Schools & Multi-Wheel Lesson Combos",
        body: "Because every roster stays strictly in your browser's local storage and is never uploaded to a remote server, teachers can save Period 1, Period 2, and Advisory lists right on their classroom laptop without creating student accounts or syncing personal names to a third-party database. For full lesson activities, open a second tab from <a href=\"/category/numbers-and-math\">Numbers &amp; Math Wheels</a> for mental-math drills, <a href=\"/category/geography-and-knowledge\">Geography &amp; Knowledge Wheels</a> for map and vocabulary prompts, or <a href=\"/category/giveaways-and-events\">Giveaways &amp; Events Wheels</a> for Friday reward draws."
      }
    ],
    relatedBlogs: [
      { slug: "spin-wheel-classroom-activities", title: "How Teachers Use Spin the Wheel in Classrooms", tag: "Education" },
      { slug: "how-to-use-spin-wheel-classroom-examples", title: "20+ Classroom Spin Wheel Examples for Teachers", tag: "Lesson Ideas" },
      { slug: "name-picker-wheel-work-school", title: "10 Smart Ways to Use a Name Picker Wheel at Work & School", tag: "Work & School" },
      { slug: "spin-wheel-icebreakers-onboarding", title: "25+ Spin Wheel Icebreakers for New Employee Onboarding", tag: "Onboarding" },
      { slug: "spin-wheel-team-building", title: "How Remote Teams Use Spin the Wheel for Team Building", tag: "Remote Teams" },
      { slug: "best-wheel-of-names-alternatives-free-spinner-tools", title: "Best Wheel of Names Alternatives & Free Spinners Compared", tag: "Comparison" }
    ],
    faqs: [
      { q: "How many student or employee names can I paste onto the wheel?", a: "Up to 500 entries per wheel. Paste names line-by-line or comma-separated straight from Google Sheets or Excel using Bulk Paste Entries." },
      { q: "How do I prevent the same student from being picked twice in one class?", a: "Enable 'Remove Winner After Spin' in Settings (or click 'Remove Winner & Continue' in the result popup) so each student gets one turn before resetting." },
      { q: "Can I save separate wheels for Period 1, Period 2, and Team Standups?", a: "Yes. Click 'Save Custom Wheel' to store multiple named class rosters or meeting lists in your browser's LocalStorage." },
      { q: "Is there a silent mode for quiet study halls or test prep?", a: "Yes—toggle the header speaker icon to Mute or set Sound Effect to Silent while keeping fullscreen mode and confetti active." }
    ]
  },
  {
    slug: "numbers-and-math",
    name: "Numbers & Math",
    icon: "🔢",
    ogImage: "eng-number-picker-wheel.webp",
    title: "Random Number & Math Wheels | 1–10, 1–100 & Bingo",
    description: "Spin free random number wheels for 1–5, 1–10, 1–16, 1–20 D20, 1–50, 1–100, and 1–75 Bingo calls with no-repeat mode and CSV history export.",
    keywords: "number picker wheel, random number 1 to 100, bingo number generator 1-75, random number 1 to 10, random number 1 to 20, random number 1 to 50",
    h1: "Random Number & Math Wheels",
    subtitle: "Visible, verifiable number spinners for ticket raffles, 75-ball Bingo nights, probability labs, D20 tabletop rolls, and tournament seeding.",
    quickAnswer: "<strong>Need a number between 1 and 100 or a live Bingo caller?</strong> Open the <a href=\"/number-picker-wheel\">Number Picker Wheel</a> for custom ranges, jump straight into pre-loaded spans (<a href=\"/1-5-random-number-generator\">1–5</a>, <a href=\"/pick-a-number-between-1-and-10\">1–10</a>, <a href=\"/number-generator-1-to-16\">1–16</a>, <a href=\"/random-number-1-20\">1–20 D20</a>, <a href=\"/random-number-1-50\">1–50</a>, <a href=\"/randomizer-number-1-100\">1–100</a>), or call B1–O75 rounds on our <a href=\"/bingo-number-generator-1-75\">Bingo Number Generator (1–75)</a>.",
    guideHeading: "With Replacement vs. No-Repeat Number Draws",
    guideSubtitle: "Choosing the exact preset span and recording verifiable CSV logs for classrooms, raffles, and Bingo halls.",
    guideSections: [
      {
        heading: "Why Setting Replacement Mode First Prevents Do-Overs",
        body: "Plain text RNG boxes flash a single digit in silence, which makes live audiences wonder whether the host clicked twice before sharing. A spinning number wheel puts the full draw on screen—and getting one setting right before Spin #1 avoids restarting mid-event. Keep <em>Remove Winner After Spin</em> OFF (sampling with replacement) for independent probability labs, dice trials, and repeated math drills. Switch it ON (sampling without replacement) before calling <a href=\"/bingo-number-generator-1-75\">Bingo 1–75</a>, seeding a <a href=\"/number-generator-1-to-16\">16-team bracket</a>, or pulling <a href=\"/randomizer-number-1-100\">1–100 raffle tickets</a>.",
        bullets: [
          "<strong>Short Everyday Ranges:</strong> <a href=\"/1-5-random-number-generator\">1–5 Wheel</a> for rating scales and group numbers, <a href=\"/pick-a-number-between-1-and-10\">1–10 Wheel</a> for warm-up math facts, and <a href=\"/random-number-1-20\">1–20 Wheel (D20)</a> for RPG ability checks.",
          "<strong>Brackets, Pools &amp; Ticket Stubs:</strong> <a href=\"/number-generator-1-to-16\">1–16 Wheel</a> for knockout seeds, <a href=\"/random-number-1-50\">1–50 Wheel</a> for 50-ticket sheets, and <a href=\"/randomizer-number-1-100\">1–100 Wheel</a> for 100-square sports pools.",
          "<strong>75-Ball Bingo &amp; Auditable Logs:</strong> Call B1–O75 without duplicates on <a href=\"/bingo-number-generator-1-75\">Bingo 1–75 Wheel</a>, and click <em>Export CSV</em> under Spin History on any number wheel to save a timestamped sheet of every call."
        ]
      },
      {
        heading: "Linking Number Draws With Prizes & Classroom Math Labs",
        body: "Math teachers use the built-in Winner Frequency Stats chart after 30–50 spins to show students the Law of Large Numbers live: short runs look streaky, while longer series settle toward equal 1/N frequencies. If you are running a live charity draw or league lottery, pair numeric wheels with <a href=\"/category/giveaways-and-events\">Giveaways &amp; Events Wheels</a> (<a href=\"/raffle-wheel\">Raffle Wheel</a> and <a href=\"/fantasy-draft-order-wheel\">Fantasy Draft Order Wheel</a>) or walk through setup rules in <a href=\"/blogs/random-number-bingo-raffle-wheel-complete-guide\">our complete number, Bingo &amp; raffle guide</a>."
      }
    ],
    relatedBlogs: [
      { slug: "random-number-bingo-raffle-wheel-complete-guide", title: "Random Number, Bingo & Raffle Wheel Complete Guide", tag: "Numbers & Bingo" },
      { slug: "is-spin-wheel-truly-random", title: "Is a Digital Spin Wheel Truly Random? Science Explained", tag: "Cryptography" },
      { slug: "spin-wheel-vs-other-random-pickers", title: "Spin the Wheel vs. Dice, Coins & Number Generators", tag: "Comparison" }
    ],
    faqs: [
      { q: "How do I run a no-repeat Bingo 1–75 or 1–100 number draw?", a: "Open the Bingo 1–75 Wheel or Random Number 1–100 Wheel and switch ON 'Remove Winner After Spin' in Settings so each called number exits automatically." },
      { q: "Can I paste custom raffle ticket numbers like 1001 to 1250?", a: "Yes. Open Number Picker Wheel, click Bulk Paste Entries, and paste up to 500 custom ticket numbers directly from Excel or Google Sheets." },
      { q: "Can math teachers export spin results to check empirical distribution?", a: "Yes. Click Export CSV under Spin History to download a timestamped log of every spun number and compare counts against theoretical odds." },
      { q: "Is the Number Picker Wheel suitable as a D20 or D6 dice substitute?", a: "Yes—our 1–20 Wheel works as a visual D20, and Number Picker Wheel includes a 1–6 preset alongside our dedicated Dice Roller Wheel." }
    ]
  },
  {
    slug: "giveaways-and-events",
    name: "Giveaways & Events",
    icon: "🎁",
    ogImage: "eng-team-picker-wheel.webp",
    title: "Raffle, Giveaway & Prize Wheels | Fair Winner Spinners",
    description: "Host fair live raffles, weighted trade-show prize wheels, Secret Santa matches, White Elephant swaps, and fantasy draft lotteries online free.",
    keywords: "raffle wheel, prize wheel, giveaway spinner, secret santa wheel, fantasy draft order wheel, gift exchange wheel",
    h1: "Raffle, Giveaway & Prize Wheels",
    subtitle: "Keep social contests, expo booths, holiday gift swaps, and fantasy league draft lotteries open, exciting, and easy to verify live.",
    quickAnswer: "<strong>Running a contest draw or live event booth?</strong> Pull contest winners on <a href=\"/raffle-wheel\">Raffle Wheel</a>, set up weighted booth perks on <a href=\"/prize-wheel\">Prize Wheel</a>, seed league drafts via <a href=\"/fantasy-draft-order-wheel\">Fantasy Draft Order Wheel</a>, or run holiday games with <a href=\"/secret-santa-wheel\">Secret Santa Wheel</a> and <a href=\"/gift-exchange-wheel\">Gift Exchange Wheel</a>.",
    guideHeading: "Running Live Draws Your Audience Immediately Trusts",
    guideSubtitle: "Practical habits for screen-recorded social giveaways, weighted booth budgets, and dispute-free fantasy lotteries.",
    guideSections: [
      {
        heading: "Three Habits That Eliminate Giveaway Skepticism",
        body: "Nothing kills engagement on a brand giveaway faster than posting a plain text winner announcement with zero proof of how it was chosen. Recording a single uncut clip in Fullscreen Mode—showing the pasted entrant count, toggling <em>Remove Winner After Spin</em> before multi-prize rounds, and exporting the CSV history right after—answers questions before anyone asks. When ticket buyers or VIP members hold extra entries, use the <code>+</code> weight button (up to 20x) on <a href=\"/raffle-wheel\">Raffle Wheel</a> or <a href=\"/prize-wheel\">Prize Wheel</a> so their exact share stays readable on screen.",
        bullets: [
          "<strong>Social &amp; Charity Raffles:</strong> Clean duplicate comments first, paste up to 500 handles into <a href=\"/raffle-wheel\">Raffle Wheel</a>, and draw 1st, 2nd, and 3rd place cleanly with winner removal ON.",
          "<strong>Expo Booths &amp; Retail Promos:</strong> Keep prize budgets predictable on <a href=\"/prize-wheel\">Prize Wheel</a> by weighting smaller perks (e.g., Sticker Pack 6x, 10% Off 4x) higher than a scarce Grand Prize (1x).",
          "<strong>Leagues &amp; Holiday Parties:</strong> Reveal snake-draft slots live with <a href=\"/fantasy-draft-order-wheel\">Fantasy Draft Order Wheel</a>, pair gift givers on <a href=\"/secret-santa-wheel\">Secret Santa Wheel</a>, or add steal/swap twists using <a href=\"/gift-exchange-wheel\">Gift Exchange Wheel</a>."
        ]
      },
      {
        heading: "Pairing Event Wheels With Checklists & Numbered Stubs",
        body: "Running a physical paper-ticket school fundraiser instead of names? Switch to <a href=\"/category/numbers-and-math\">Numbers &amp; Math Wheels</a> to draw directly by stub number. Before going live on Instagram, YouTube, or at a PTA night, run through the prep checklists in <a href=\"/blogs/how-to-run-online-giveaway\">how to pick a random giveaway winner fairly</a> and <a href=\"/blogs/school-raffle-spin-wheel\">our school raffle setup guide</a>."
      }
    ],
    relatedBlogs: [
      { slug: "how-to-run-online-giveaway", title: "How to Pick a Random Giveaway Winner Fairly", tag: "Giveaways" },
      { slug: "school-raffle-spin-wheel", title: "How to Run a School Raffle Using a Free Spin Wheel", tag: "School Events" },
      { slug: "hr-spin-wheel-employee-recognition-office-events", title: "How HR Teams Use Spin Wheels for Recognition & Events", tag: "Workplace" },
      { slug: "streamers-use-spin-wheel", title: "How Streamers & YouTubers Use Wheel Spinners", tag: "Streaming" }
    ],
    faqs: [
      { q: "How do I give someone multiple raffle tickets on the wheel?", a: "Either switch ON 'Allow Duplicate Entries' to paste their name multiple times, or tap the '+' weight button beside their name (1x to 20x) to scale both slice width and probability cleanly." },
      { q: "Can I draw 1st, 2nd, and 3rd prize winners without picking the same person twice?", a: "Yes. Turn ON 'Remove Winner After Spin' in Settings so each drawn winner is removed automatically before the next spin." },
      { q: "How do fantasy leagues use the Draft Order Wheel fairly?", a: "Paste all 8, 10, 12, or 14 manager names into Fantasy Draft Order Wheel, enable Remove Winner, and screen-share (or share via QR) as draft picks #1 through #14 are revealed live." },
      { q: "Can I archive raffle results after an event?", a: "Yes. Click Export CSV under Spin History immediately after your draw to download timestamped winner records." }
    ]
  },
  {
    slug: "food-and-lifestyle",
    name: "Food & Lifestyle",
    icon: "🍽️",
    ogImage: "eng-food-picker-wheel.webp",
    title: "Food, Dinner & Lifestyle Wheels | Free Decision Makers",
    description: "End meal, takeout, and routine debates with Food Picker, Dinner, Fast Food, Restaurant, Drink, Date Night, Workout, Chore & Movie wheels.",
    keywords: "food picker wheel, dinner wheel, fast food wheel, restaurant picker wheel, date night wheel, what to watch wheel, workout wheel",
    h1: "Food, Dinner & Lifestyle Wheels",
    subtitle: "End Friday takeout loops, rotate workouts and household chores, and pick movies, music, coffee, or date-night plans in one spin.",
    quickAnswer: "<strong>Stuck on dinner or movie night again?</strong> Spin <a href=\"/dinner-wheel\">Dinner Wheel</a>, <a href=\"/food-picker-wheel\">Food Picker Wheel</a>, <a href=\"/fast-food-wheel\">Fast Food Wheel</a>, <a href=\"/restaurant-picker-wheel\">Restaurant Picker Wheel</a>, or <a href=\"/drink-picker-wheel\">Drink &amp; Coffee Wheel</a>—or settle tonight's plans on <a href=\"/what-to-watch-wheel\">What to Watch</a> and <a href=\"/date-night-wheel\">Date Night Wheel</a>.",
    guideHeading: "Why the Veto-Then-Spin Method Fixes Group Indecision",
    guideSubtitle: "Turning 25 minutes of \"I don't mind, you pick\" into a two-minute routine everyone actually buys into.",
    guideSections: [
      {
        heading: "Keep Separate Saved Wheels for Weeknights vs. Treat Nights",
        body: "When everyone gets home hungry at 7 p.m., nobody wants to read forty delivery menus. The trick is loading only spots you genuinely have the time and budget for tonight—not an aspirational list that triggers instant vetoes. Keep <a href=\"/fast-food-wheel\">Fast Food Wheel</a> for ten-minute drive-thru stops, <a href=\"/restaurant-picker-wheel\">Restaurant Picker Wheel</a> for neighborhood sit-down nights, <a href=\"/dinner-wheel\">Dinner Wheel</a> for weeknight cooking rotations, and <a href=\"/drink-picker-wheel\">Drink &amp; Coffee Picker</a> for morning cafe runs.",
        bullets: [
          "<strong>The Veto-Then-Spin Rule:</strong> Load 7–8 meals or movies, let each person delete one deal-breaker before spinning, and agree upfront to honor the winning slice.",
          "<strong>Balanced Weekly Habits:</strong> Rotate 20-minute sessions on <a href=\"/workout-wheel\">Workout Wheel</a>, divide weekend cleaning fairly via <a href=\"/chore-wheel\">Chore Wheel</a>, and pick park games on <a href=\"/sport-picker-wheel\">Sport Picker Wheel</a>.",
          "<strong>Evenings, Media &amp; Creative Sparks:</strong> Plan low-stress outings with <a href=\"/date-night-wheel\">Date Night Wheel</a>, narrow streaming queues via <a href=\"/movie-genre-wheel\">Movie Genre Wheel</a>, <a href=\"/what-to-watch-wheel\">What to Watch Wheel</a>, or <a href=\"/music-genre-wheel\">Music Genre Wheel</a>, and grab design palettes on <a href=\"/color-picker-wheel\">Color Picker Wheel</a> or star-sign prompts via <a href=\"/zodiac-picker-wheel\">Zodiac Picker Wheel</a>."
        ]
      },
      {
        heading: "Build a Full Week's Plan in Seven Spins",
        body: "Want Sunday meal prep or weekday exercise scheduled in under a minute? Load ten go-to dinners or routines, turn ON <em>Remove Winner After Spin</em>, and spin five or seven times so Monday through Sunday each get a distinct pick with zero repeats. Turning Friday takeout into a full hangout? Follow dinner with <a href=\"/category/party-and-games\">Party &amp; Games Wheels</a>, or browse 35+ ready-to-paste meal slices in <a href=\"/blogs/what-to-eat-tonight-spin-wheel-dinner-decision\">our dinner wheel guide</a> and <a href=\"/blogs/date-night-roulette-spin-wheel-ideas-couples\">20 date night wheel ideas</a>."
      }
    ],
    relatedBlogs: [
      { slug: "what-to-eat-tonight-spin-wheel-dinner-decision", title: "What to Eat Tonight? Solving the Dinner Debate", tag: "Lifestyle" },
      { slug: "how-to-use-spin-wheel-plan-week-meals-workouts-tasks", title: "Plan Your Week: Meals, Workouts & Tasks With a Spin Wheel", tag: "Productivity" },
      { slug: "date-night-roulette-spin-wheel-ideas-couples", title: "Date Night Roulette: 20 Spin Wheel Ideas for Couples", tag: "Couples" }
    ],
    faqs: [
      { q: "Can I replace default food chains with local restaurants near me?", a: "Yes! Click Clear All and add up to 500 local spots via Add Entry or Bulk Paste, then click Save Custom Wheel so your neighborhood list stays ready on that browser." },
      { q: "How do groups use the Food or Restaurant wheel without complaints?", a: "Try the 'Veto-Then-Spin' rule: load 6–8 restaurants, let each person remove one spot they really don't want tonight, and spin from the remaining consensus picks." },
      { q: "Can I weight home-cooked meals higher than takeout?", a: "Yes. Tap '+' beside home-cooked dinners or salads to raise their share while leaving occasional takeout treats on the wheel." },
      { q: "How do I plan a whole week of dinners or workouts with one wheel?", a: "Load 7+ meals or workouts and switch ON 'Remove Winner After Spin' so each spin fills one day without repeating yesterday's pick." }
    ]
  },
  {
    slug: "party-and-games",
    name: "Party & Games",
    icon: "🎉",
    ogImage: "eng-truth-picker-wheel.webp",
    title: "Party Game & Icebreaker Wheels | Free Online Spinners",
    description: "Play Truth or Dare, Would You Rather, Never Have I Ever, Charades, Twister Spinner, Spin the Bottle, Dice Roller, Tarot & Emoji wheels free.",
    keywords: "truth or dare wheel, would you rather wheel, never have i ever wheel, twister spinner, spin the bottle online, charades wheel, dice roller wheel",
    h1: "Party Game & Icebreaker Wheels",
    subtitle: "Replace missing board-game spinners, spark fresh group prompts, and keep sleepovers, road trips, and family game nights moving.",
    quickAnswer: "<strong>Hosting game night or missing cardboard pieces?</strong> Spin age-filtered prompts on <a href=\"/truth-or-dare-wheel\">Truth or Dare Wheel</a>, <a href=\"/would-you-rather-wheel\">Would You Rather Wheel</a>, <a href=\"/never-have-i-ever-wheel\">Never Have I Ever Wheel</a>, and <a href=\"/charades-word-wheel\">Charades Word Wheel</a>—or replace lost hardware with <a href=\"/twister-spinner\">Twister Spinner</a>, <a href=\"/dice-roller-wheel\">Dice Roller Wheel</a>, and <a href=\"/spin-the-bottle\">Spin the Bottle</a>.",
    guideHeading: "Keeping Living-Room & Group Game Nights Moving",
    guideSubtitle: "Preset filters for kids vs. adults, silent pass-the-phone play, and pairing player wheels with prompt wheels.",
    guideSections: [
      {
        heading: "Pick the Right Prompt Pack for Your Room Before Spin #1",
        body: "Game nights lose energy during two moments: digging through closets for a lost Twister spinner or staring around the sofa trying to invent a decent dare on the spot. Every party spinner here ships with quick preset chips right above the entry list so you can match the crowd—switching from clean family rounds to bolder teen or adult packs in a single tap:",
        bullets: [
          "<strong>Conversation &amp; Acting Prompts:</strong> Run no-repeat rounds across <a href=\"/truth-or-dare-wheel\">Truth or Dare</a>, <a href=\"/would-you-rather-wheel\">Would You Rather</a>, <a href=\"/never-have-i-ever-wheel\">Never Have I Ever</a>, and <a href=\"/charades-word-wheel\">Charades &amp; Pictionary</a>.",
          "<strong>Board-Game Hardware Backups:</strong> Call all 16 official limb-and-color combos on <a href=\"/twister-spinner\">Twister Spinner</a>, roll D6/2D6/D20 odds on <a href=\"/dice-roller-wheel\">Dice Roller Wheel</a>, or spin guest names on <a href=\"/spin-the-bottle\">Spin the Bottle</a>.",
          "<strong>Visual &amp; Creative Decks:</strong> Draw Major Arcana storytelling prompts on <a href=\"/tarot-wheel\">Tarot Wheel</a> or launch Emoji Pictionary challenges with <a href=\"/emoji-picker-wheel\">Emoji Picker Wheel</a>."
        ]
      },
      {
        heading: "Pro Hosting Tips: Silent Spins & Two-Tab Combos",
        body: "Playing Charades or Emoji Pictionary where only the actor should see the prompt? Tap Mute in the header, shorten Spin Duration to 2 seconds, and hand the phone straight to the actor. For larger groups, keep guest names open on <a href=\"/spin-the-bottle\">Spin the Bottle</a> in Tab 1 and prompts open in Tab 2 so nobody plays moderator. Looking for fandom or trivia add-ons? Try <a href=\"/category/gaming-and-pop-culture\">Gaming &amp; Pop Culture Wheels</a> or <a href=\"/blogs/family-game-night-wheel-spinner\">20 family game night wheel ideas</a>."
      }
    ],
    relatedBlogs: [
      { slug: "family-game-night-wheel-spinner", title: "Fun Family Game Night Ideas Using a Free Wheel", tag: "Family Fun" },
      { slug: "spin-wheel-birthday-party-ideas", title: "Spin the Wheel Ideas for Birthdays & Baby Showers", tag: "Parties" },
      { slug: "streamers-use-spin-wheel", title: "How Streamers & YouTubers Use Challenge Wheels", tag: "Streaming" }
    ],
    faqs: [
      { q: "Are there family-safe and kids presets for Truth or Dare and Would You Rather?", a: "Yes! Both wheels include Family & Kids Clean and School-Safe preset chips right above the entry list." },
      { q: "Does the digital Twister Spinner match the official 16 moves?", a: "Yes—it covers all 4 limbs (Left/Right Hand and Left/Right Foot) across Red, Blue, Yellow, and Green, plus an optional Air-Moves preset." },
      { q: "How can I play Spin the Bottle and Truth or Dare together?", a: "Open Spin the Bottle in one tab with all player names to pick who goes next, then spin Truth or Dare or Would You Rather for their prompt." },
      { q: "Can we put the party wheel up on a living-room TV?", a: "Yes—tap the Fullscreen icon in the top header for crisp, distraction-light viewing on smart TVs and projectors." }
    ]
  },
  {
    slug: "gaming-and-pop-culture",
    name: "Gaming & Pop Culture",
    icon: "🎮",
    ogImage: "eng-sport-picker-wheel.webp",
    title: "Sports, Gaming & Pop Culture Wheels | Free Spinners",
    description: "Spin free NFL, NBA, MLB & Premier League team wheels, NBA players, Pokemon generators, Fortnite drops, Roblox games, Dandy's World & Sorting Hat.",
    keywords: "random nfl team generator, nba team wheel, mlb team wheel, premier league team wheel, random pokemon generator, fortnite drop wheel, dandy world wheel",
    h1: "Sports, Gaming & Pop Culture Wheels",
    subtitle: "Complete league rosters and fandom challenge wheels for Madden, NBA 2K, EA FC, Pokémon Nuzlockes, Fortnite squads, and Roblox nights.",
    quickAnswer: "<strong>Starting a random franchise save or squad challenge?</strong> Spin all 32 teams on <a href=\"/random-nfl-team-generator\">Random NFL Team Generator</a>, all 30 franchises on <a href=\"/nba-team-wheel\">NBA Team Wheel</a> &amp; <a href=\"/mlb-team-wheel\">MLB Team Wheel</a>, 20 English clubs on <a href=\"/premier-league-team-wheel\">Premier League Wheel</a>, or run gaming challenges via <a href=\"/random-pokemon-generator\">Pokémon</a>, <a href=\"/fortnite-drop-wheel\">Fortnite Drop</a>, <a href=\"/roblox-game-picker-wheel\">Roblox</a>, <a href=\"/dandy-world-wheel-spinner\">Dandy's World</a>, and <a href=\"/harry-potter-sorting-hat-wheel\">Sorting Hat</a>.",
    guideHeading: "Franchise Rebuilds, Squad Rules & OBS Stream Setups",
    guideSubtitle: "Using full league rosters and ad-free ?embed=1 overlays to keep replays and livestreams unpredictable.",
    guideSections: [
      {
        heading: "Complete League Lineups Without Manual Typing",
        body: "Starting a new Madden Franchise, NBA 2K MyNBA save, MLB The Show rebuild, or EA FC Career Mode usually pulls players straight toward the same handful of high-overall favorites. Spinning a complete league roster gives underdog rebuilds an equal shot and keeps couch tournaments balanced. Use the conference or division filter chips above any roster wheel, or combine <a href=\"/nba-team-wheel\">NBA Team Wheel</a> with <a href=\"/nba-player-spin-the-wheel\">NBA Player Spin the Wheel</a> for crossover trivia grids.",
        bullets: [
          "<strong>North American Pro Leagues:</strong> <a href=\"/random-nfl-team-generator\">All 32 NFL Teams</a> (AFC/NFC), <a href=\"/nba-team-wheel\">All 30 NBA Teams</a> (East/West), <a href=\"/nba-player-spin-the-wheel\">NBA Players &amp; Legends</a>, and <a href=\"/mlb-team-wheel\">All 30 MLB Teams</a> (AL/NL).",
          "<strong>English Football:</strong> <a href=\"/premier-league-team-wheel\">All 20 Premier League Clubs</a> with Title Contender and Underdog Rebuild quick presets.",
          "<strong>Gaming &amp; Fandom Challenges:</strong> <a href=\"/fortnite-drop-wheel\">Fortnite Drop POIs</a>, <a href=\"/random-pokemon-generator\">Pokémon Starters &amp; 18-Type Nuzlockes</a>, <a href=\"/roblox-game-picker-wheel\">Roblox Experience Picker</a>, <a href=\"/dandy-world-wheel-spinner\">Dandy's World Toons</a>, and <a href=\"/harry-potter-sorting-hat-wheel\">Hogwarts Sorting Hat</a>."
        ]
      },
      {
        heading: "Cleaner OBS Browser Sources & Seasonal Roster Updates",
        body: "Live creators on Twitch and YouTube can click <em>Embed Wheel</em> on any tool to grab an ad-free <code>?embed=1</code> URL for OBS—and shorten Spin Duration to 2–3 seconds during fast Fortnite or Roblox lobbies. Whenever a game drops a new season map or three Championship clubs earn Premier League promotion, edit those slices inline and save your updated list locally in seconds. For 25+ ready-to-run stream formats, read our <a href=\"/blogs/sports-gaming-spin-wheel-challenges-nfl-nba-pokemon-fortnite\">Sports &amp; Gaming Spin Wheel Challenges Guide</a>."
      }
    ],
    relatedBlogs: [
      { slug: "sports-gaming-spin-wheel-challenges-nfl-nba-pokemon-fortnite", title: "Sports & Gaming Spin Wheel Challenges (NFL, NBA, Pokémon & Fortnite)", tag: "Gaming & Sports" },
      { slug: "streamers-use-spin-wheel", title: "How Streamers & YouTubers Use Wheel Spinners to Engage Audiences", tag: "Streaming" },
      { slug: "best-uses-random-wheel-spinner", title: "10 Best Uses of a Random Wheel Spinner", tag: "Ideas" }
    ],
    faqs: [
      { q: "Are all 32 NFL, 30 NBA, 30 MLB, and 20 Premier League teams included?", a: "Yes! Every pro sports wheel loads the complete league lineup by default along with conference and division filter presets." },
      { q: "How do creators use Fortnite, Roblox, and Dandy's World wheels for challenges?", a: "Turn on 'Remove Winner After Spin' to draft random Toons, Roblox games, or drop POIs one by one during squad streams and challenge videos." },
      { q: "Can I add custom rules like 'Pistols Only' or 'No Fast Travel'?", a: "Yes—type any custom challenge modifiers into Add Entry or save a custom challenge wheel via 'Save Custom Wheel'." },
      { q: "Is this useful for picking fantasy sports draft orders?", a: "Yes—pair any pro league wheel with our dedicated Fantasy Draft Order Wheel to assign picks #1 through #14 live on screen." }
    ]
  },
  {
    slug: "geography-and-knowledge",
    name: "Geography & Knowledge",
    icon: "🌍",
    ogImage: "eng-country-picker-wheel.webp",
    title: "Geography, Letters & Knowledge Wheels | Free Spinners",
    description: "Spin all 195 Countries, 50 US States, 27 Brazilian States, World Flags, A–Z Letters, Words, Languages, Animals & Planets free online.",
    keywords: "country wheel, wheel of countries, pick a planet, animal wheel, flag wheel, brazil state picker wheel, us state picker wheel, country picker wheel, letter picker wheel, random word generator wheel",
    h1: "Geography, Letters & Knowledge Wheels",
    subtitle: "Reference-checked educational spinners covering all 195 countries, 50 US states, 27 Brazilian states, world flags, A–Z letters, words, languages, planets, and wildlife.",
    quickAnswer: "<strong>Running a geography bee, Scattergories round, or science unit?</strong> Spin all 195 nations on <a href=\"/country-picker-wheel\">Country Wheel</a> or <a href=\"/country-name-generator\">Country Name Generator</a>, all 50 states on <a href=\"/us-state-picker-wheel\">US State Picker</a>, all 27 units on <a href=\"/brazil-state-picker-wheel\">Brazil State Picker</a>, test flags on <a href=\"/random-flag-generator\">Flag Wheel</a> &amp; <a href=\"/guess-the-country\">Guess the Country</a>, or practice literacy with <a href=\"/letter-picker-wheel\">A–Z Letters</a>, <a href=\"/random-word-generator\">Words</a>, <a href=\"/language-picker-wheel\">Languages</a>, <a href=\"/animal-picker-wheel\">Animals</a>, and <a href=\"/planet-picker-wheel\">Planets</a>.",
    guideHeading: "Verified Reference Datasets for Classrooms, Quizzes & Trivia",
    guideSubtitle: "How each knowledge wheel is scoped so teachers, students, and map-game fans skip 20 minutes of list prep.",
    guideSections: [
      {
        heading: "Complete Geographic & Subject Lists Ready in One Click",
        body: "Typing all 195 UN countries or 50 US states into a blank spinner takes longer than the quiz itself—and usually leaves two or three small nations accidentally missing. Every knowledge wheel below starts with a verified reference roster plus regional or topic filter chips so you can narrow to one continent, one US Census region, vowels only, or terrestrial planets immediately:",
        bullets: [
          "<strong>World &amp; Regional Geography:</strong> <a href=\"/country-picker-wheel\">All 195 Countries Wheel</a> (with 6 UN regional filters), <a href=\"/us-state-picker-wheel\">50 US States Wheel</a>, <a href=\"/brazil-state-picker-wheel\">Brazil State Picker Wheel</a> (all 26 states + DF), <a href=\"/country-name-generator\">Country Name Generator</a>, <a href=\"/random-flag-generator\">World Flag Spinner</a>, and <a href=\"/guess-the-country\">Guess the Country Game</a>.",
          "<strong>Alphabet, Vocabulary &amp; Languages:</strong> <a href=\"/letter-picker-wheel\">A–Z Letter Wheel</a> for Scattergories and phonics, <a href=\"/random-word-generator\">Word Generator</a> for writing sprints and Pictionary, and <a href=\"/language-picker-wheel\">Language Picker</a> for polyglot challenges.",
          "<strong>Astronomy &amp; Wildlife:</strong> <a href=\"/planet-picker-wheel\">Planet Picker Wheel</a> (all 8 IAU planets plus dwarf-planet presets) and <a href=\"/animal-picker-wheel\">Animal Picker Wheel</a> for biology research and sketching."
        ]
      },
      {
        heading: "Pair Knowledge Wheels With Student Pickers & Study Guides",
        body: "A reliable classroom rhythm is keeping <a href=\"/category/names-and-classrooms\">Names &amp; Classrooms Wheels</a> open in Tab 1 and a geography or literacy wheel in Tab 2: draw a student, draw their state, country, or letter with winner removal ON, and export the CSV log at the bell so every student's report topic is saved. For structured revision ideas, read <a href=\"/blogs/spin-wheel-language-learning-vocabulary-verbs-conversation\">our language learning wheel guide</a> and <a href=\"/blogs/how-students-use-spin-wheels-study-revision-focus\">student study &amp; revision guide</a>."
      }
    ],
    relatedBlogs: [
      { slug: "spin-wheel-language-learning-vocabulary-verbs-conversation", title: "Spin Wheel Ideas for Language Learning & Vocabulary", tag: "Language Learning" },
      { slug: "how-students-use-spin-wheels-study-revision-focus", title: "How Students Use Spin Wheels for Study & Revision", tag: "Student Guide" },
      { slug: "how-to-use-spin-wheel-classroom-examples", title: "20+ Classroom Spin Wheel Examples Across Subjects", tag: "Classrooms" }
    ],
    faqs: [
      { q: "Does the US State Picker Wheel include all 50 states and regional presets?", a: "Yes! It loads all 50 US states by default plus quick presets for West, Midwest, South, and Northeast US Census regions." },
      { q: "Can I use the Letter Picker Wheel for Scattergories without repeating letters?", a: "Yes. Enable 'Remove Winner After Spin' in Settings so each drawn A–Z letter exits the wheel until your game wraps up." },
      { q: "What is the difference between Country Picker Wheel and Country Name Generator?", a: "Country Picker Wheel loads all 195 UN-recognized countries with regional filters, flag-and-map Battle Royale game guides, and travel inspiration, while Country Name Generator is streamlined for clean sovereign nation assignments in Model UN, school essays, and trivia sheets." },
      { q: "Can I paste my own school spelling or vocabulary word list?", a: "Yes—open Random Word Generator, click Clear All, and bulk-paste up to 500 vocabulary or spelling words." }
    ]
  }
];

const CATEGORIES_BY_SLUG = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c]));
const CATEGORY_NAME_TO_SLUG = Object.fromEntries(CATEGORIES.map((c) => [c.name, c.slug]));

export { CATEGORIES, CATEGORIES_BY_SLUG, CATEGORY_NAME_TO_SLUG };
export default { CATEGORIES, CATEGORIES_BY_SLUG, CATEGORY_NAME_TO_SLUG };
