import { TIER1_LANGUAGES, TIER1_TRANSLATIONS } from "./i18n-tier1.js";
import { MORE20_LANGUAGES, MORE20_TRANSLATIONS } from "./i18n-more20.js";
import BING_HUB_UPGRADES from "./i18n-bing-hubs.js";
const LANGUAGES = {
  en: { code: "en", name: "English", flag: "🇺🇸", locale: "en_US", path: "/en", label: "English" },
  es: { code: "es", name: "Español", flag: "🇪🇸", locale: "es_ES", path: "/es", label: "Español" },
  de: { code: "de", name: "Deutsch", flag: "🇩🇪", locale: "de_DE", path: "/de", label: "Deutsch" },
  fr: { code: "fr", name: "Français", flag: "🇫🇷", locale: "fr_FR", path: "/fr", label: "Français" },
  it: { code: "it", name: "Italiano", flag: "🇮🇹", locale: "it_IT", path: "/it", label: "Italiano" },
  pt: { code: "pt", name: "Português", flag: "🇧🇷", locale: "pt_BR", path: "/pt", label: "Português" },
  pl: { code: "pl", name: "Polski", flag: "🇵🇱", locale: "pl_PL", path: "/pl", label: "Polski" },
  vi: { code: "vi", name: "Tiếng Việt", flag: "🇻🇳", locale: "vi_VN", path: "/vi", label: "Tiếng Việt" },
  zh: { code: "zh", name: "中文", flag: "🇨🇳", locale: "zh_CN", path: "/zh", label: "简体中文" }
};

const TRANSLATIONS = {
  en: {
    metaTitle: "Spin the Wheel Online Free — Wheel of Names & Spinner",
    metaDesc: "Spin the wheel online free with up to 500 names or choices. Custom 1x–20x weights, winner removal, and CSV logs—school-safe, private, zero signup.",
    keywords: "spin the wheel, spin the wheel online, spin the wheel online free, wheel of names, spinning tool, spinning wheel online, random wheel spinner, picker wheel",
    heroTitle: "Spin the Wheel Online Free",
    heroHighlight: "Wheel of Names & Random Picker Spinner",
    heroSubtitle: "Paste up to 500 names, numbers, or choices and spin in one click. Every draw runs locally through your browser's Web Cryptography API—zero accounts, zero paywalls, and crisp visibility on projectors or phones.",
    quickAnswer: "<strong>How does Spin The Wheels Online work?</strong> Paste up to 500 entries (or launch one of 69 pre-loaded wheels), tweak optional 1x–20x slice weights, and hit Spin. Each result is chosen client-side with <code>window.crypto.getRandomValues()</code> rejection sampling, kept strictly in your browser, and ready for CSV export, QR sharing, or clean <code>?embed=1</code> stream overlays.",
    badges: {
      free: "100% Free Forever",
      noSignup: "No Registration Required",
      secure: "Cryptographically Fair",
      capacity: "Up to 500 Names",
      device: "Mobile & Desktop Optimized"
    },
    ui: {
      spinBtn: "SPIN THE WHEEL",
      spinning: "SPINNING...",
      resultDecided: "The Wheel Has Spoken",
      addNamesHeading: "🎯 Add Names or Choices",
      inputPlaceholder: "Type a name, choice, or prize...",
      addBtn: "Add Entry",
      bulkBtn: "📋 Bulk Paste Entries",
      bulkPlaceholder: "Paste multiple names — one per line or separated by commas\ne.g.\nEmma Johnson\nLiam Smith\nOlivia Brown\nNoah Davis",
      bulkAddBtn: "Add All to Wheel",
      bulkCloseBtn: "Cancel",
      clearAllBtn: "🗑 Clear All",
      shuffleBtn: "🔀 Shuffle",
      sortBtn: "🔤 Sort A-Z",
      presetsHeading: "⚡ Quick Presets",
      themesHeading: "🎨 Wheel Theme",
      settingsHeading: "⚙️ Customization & Settings",
      spinDuration: "Spin Duration",
      soundEffect: "Sound Effect",
      soundVolume: "Volume",
      soundTick: "Mechanical Clicker",
      soundDrum: "Suspense Drumroll",
      soundFanfare: "Victory Fanfare",
      soundCheer: "Crowd Cheering",
      soundNone: "Mute / Silent",
      removeWinner: "Remove Winner After Spin",
      removeWinnerDesc: "Automatically eliminate the selected entry so each item is only drawn once.",
      showConfetti: "Confetti Celebration",
      showPopup: "Show Winner Popup Modal",
      allowDuplicates: "Allow Duplicate Entries",
      fairnessAudit: "Live Cryptographic Verification",
      fairnessDesc: "Randomness is derived from browser Web Cryptography API, ensuring uniform probability with zero algorithmic bias.",
      historyHeading: "📜 Spin History",
      noSpinsYet: "No spins recorded yet. Hit the spin button to start!",
      clearHistory: "Clear Log",
      exportHistory: "Export CSV",
      statsHeading: "📊 Winner Frequency Stats",
      statsDesc: "Track theoretical probability vs. empirical spin outcomes.",
      saveWheel: "💾 Save Custom Wheel",
      loadWheel: "📂 My Saved Wheels",
      shareWheel: "🔗 Share Wheel",
      shareSuccess: "Share link copied to clipboard!",
      qrCodeTitle: "Scan QR Code on Phone",
      embedTitle: "Embed Wheel Widget",
      fullscreen: "Fullscreen Mode",
      exitFullscreen: "Exit Fullscreen",
      spinAgain: "Spin Again",
      removeAndContinue: "Remove Winner & Continue",
      winnerTitle: "We Have a Winner!"
    },
    presets: {
      yesno: { label: "Yes / No", items: ["Yes ✅", "No ❌", "Maybe 🤔", "Ask Again 🔄"] },
      drawnames: { label: "Names", items: ["Oliver", "Charlotte", "Amelia", "Henry", "Lucas", "Mia", "Benjamin", "Sophia", "Alexander", "Ava"] },
      dinner: { label: "Dinner", items: ["Pizza 🍕", "Sushi Rolls 🍣", "Tacos & Burritos 🌮", "Italian Pasta 🍝", "Gourmet Burgers 🍔", "Thai Noodles 🍜", "Indian Curry 🍛", "Fresh Salad 🥗"] },
      numbers: { label: "1 to 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Truth / Dare", items: ["Truth 🤫", "Dare 😈", "Truth 🤫", "Dare 😈", "Double Dare 🔥", "Free Pass 🌟"] },
      giveaway: { label: "Giveaway", items: ["Grand Prize 🏆", "1st Runner Up 🥈", "2nd Runner Up 🥉", "Gift Card 🎁", "Mystery Box 📦", "Try Again 🍀"] }
    },
    howTo: {
      title: "How to Use the Free Spin the Wheel Tool",
      subtitle: "Set up and spin your custom wheel of names in four straightforward steps.",
      steps: [
        {
          num: 1,
          title: "Input Names or Options",
          desc: "Type names individually into the entry field, choose one of the instant presets, or click 'Bulk Paste' to import hundreds of names from Excel, Google Sheets, or a text file."
        },
        {
          num: 2,
          title: "Tailor Colors & Settings",
          desc: "Select a visual palette (Casino Gold, Rainbow Neon, Pastel Dream), pick your preferred sound effects (Tick clicker, Classic Drumroll, or Silent), and adjust the spin duration slider from 2 to 20 seconds."
        },
        {
          num: 3,
          title: "Spin & Reveal the Winner",
          desc: "Press 'SPIN THE WHEEL' or click the central button (or tap Spacebar). The wheel accelerates and glides through an authentic physics-based easing curve before landing on the winning slice with confetti."
        },
        {
          num: 4,
          title: "Manage Outcomes & Share",
          desc: "Choose to remove the winner for multi-round raffles, review empirical frequencies in the Statistics panel, or generate a shareable link/QR code for your audience."
        }
      ]
    },
    useCases: {
      title: "Top Use Cases Across Education, Business & Entertainment",
      subtitle: "Discover how educators, project managers, creators, and event planners rely on Spin The Wheels Online daily.",
      items: [
        {
          icon: "🏫",
          title: "Classroom Student Picker",
          desc: "Teachers use our random name picker on interactive whiteboards to call on students impartially, assign classroom duties, select presentation turns, and run educational quiz tournaments without perceived favoritism."
        },
        {
          icon: "🎁",
          title: "Giveaways & Livestream Raffles",
          desc: "Twitch streamers, YouTubers, and social media influencers use our high-visibility wheel for subscriber giveaways, game challenges, and prize lotteries with full viewer transparency."
        },
        {
          icon: "💼",
          title: "Workplace & Agile Meetings",
          desc: "Scrum masters and corporate teams use the wheel to choose daily standup speakers, assign sprint code reviews, distribute weekend on-call shifts, and break deadlocked design debates."
        },
        {
          icon: "🎉",
          title: "Game Nights & Daily Decisions",
          desc: "Eliminate decision paralysis with friends and family. Decide where to eat dinner, select board games, spin for Truth or Dare prompts, or pick movie genres for Friday film nights."
        }
      ]
    },
    fairness: {
      title: "Fairness & Cryptographic Integrity",
      subtitle: "How our browser engine avoids predictability and modulo bias.",
      text1: "Basic browser spinners often call JavaScript's standard non-cryptographic <code>Math.random()</code> loop and apply modulo division directly, which leaves subtle remainder skew. Spin The Wheels Online selects every winning index with the Web Cryptography API (<code>window.crypto.getRandomValues()</code>) plus rejection sampling.",
      text2: "System entropy feeds a cryptographically strong uniform integer, and custom weights scale each slice's angular width proportionally:",
      formula: "P(Slice_i) = Weight_i / Total_Weights",
      text3: "The landing angle is calculated strictly from that pre-selected winner, so spin duration (2–20s) never alters the mathematical odds."
    },
    comparison: {
      title: "Comparison: Wheel of Names vs. Other Random Selection Methods",
      headers: ["Feature / Criterion", "Spin the Wheel Online", "Physical Dice / Coins", "Simple Number Generator", "Hat / Paper Draw"],
      rows: [
        ["Visual Audience Suspense", "⭐⭐⭐⭐⭐ High (Physics Easing & Audio)", "⭐⭐⭐ Medium (Table only)", "⭐ Low (Instant static number)", "⭐⭐⭐ Medium (Manual reveal)"],
        ["Capacity", "Up to 500 custom text entries", "6 to 20 sides maximum", "Numbers only", "Limited by manual paper writing"],
        ["Fairness & Auditability", "Web Cryptography CSPRNG + CSV Log", "Subject to physical wear & bounce", "Standard non-crypto RNG", "Subject to folding & hand mixing bias"],
        ["Elimination / Multi-Round", "Instant automatic winner removal", "Requires physical re-rolling", "Manual re-filtering required", "Manual paper discard"],
        ["Remote & Screen Share Ready", "Yes, Fullscreen & QR Sharing", "No, difficult to film clearly", "Yes, but lacks visual suspense", "No, awkward on webcams"]
      ]
    },
    faqs: [
      {
        q: "Is Spin The Wheels Online completely free to use?",
        a: "Yes—free for classrooms, giveaways, and personal use with no spin limit, account wall, or app download. Bulk pasting, 1x–20x weights, sound effects, fullscreen mode, and saved wheels are all open on load."
      },
      {
        q: "How many names or choices can I add to the wheel?",
        a: "Up to 500 entries fit on a single wheel. Slice typography and label angle scale automatically so both a 4-item dinner wheel and a 300-ticket raffle stay readable."
      },
      {
        q: "Is the wheel truly random and fair?",
        a: "Yes. Every spin pulls a random integer via window.crypto.getRandomValues() with rejection sampling so modulo division cannot favor earlier slices. Each 1x entry shares exact equal probability."
      },
      {
        q: "Can I remove winners after they are selected?",
        a: "Yes. Switch on 'Remove Winner After Spin' in Settings, or tap 'Remove Winner' inside the winner popup, to clear each chosen entry for multi-round classroom turns or prize draws."
      },
      {
        q: "Can I assign custom weights or odds to different options?",
        a: "Yes. Use the + and - buttons beside any entry to set its weight from 1x to 20x. A 3x entry receives a slice three times wider and updates its live win percentage automatically."
      },
      {
        q: "Does this tool work on mobile phones and tablets?",
        a: "Yes. The canvas scales smoothly on iPhone, iPad, Android phones, classroom Chromebooks, and desktop displays without horizontal scrolling."
      },
      {
        q: "Can I share my custom wheel with students or viewers?",
        a: "Yes. Click 'Share Wheel' to generate a URL encoding your full entry list, or display the built-in QR code so participants can scan and inspect or spin the wheel on their phones."
      },
      {
        q: "Are my wheel lists saved when I close the browser?",
        a: "Yes. Your active list stays inside your own browser's LocalStorage, and 'Save Custom Wheel' lets you name multiple reusable setups locally without creating an account or uploading names."
      },
      {
        q: "Does the wheel keep working if my internet drops?",
        a: "Once the page loads, spinning and randomness run 100% locally in your browser (including offline caching via our Service Worker), so brief Wi-Fi drops will not interrupt a lesson or raffle."
      },
      {
        q: "Can I embed this wheel on my own website or blog?",
        a: "Yes. Click 'Embed Wheel' inside Save, Share & Embed to copy a responsive ?embed=1 iframe snippet for Notion, WordPress, Google Sites, or OBS Studio."
      },
      {
        q: "What spin the wheel app do YouTubers and streamers use?",
        a: "Many streamers load Spin The Wheels Online in Fullscreen Mode or drop the ad-free ?embed=1 link straight into an OBS Browser Source with clicker/drumroll audio and confetti."
      },
      {
        q: "Can computerized wheel spinners be rigged or timed by the host?",
        a: "A quality client-side wheel picks the winner via window.crypto.getRandomValues() the moment you click Spin—the easing animation is simply a visual reveal, and live Frequency Stats plus CSV exports give viewers an auditable spin log."
      },
      {
        q: "Does Spin The Wheels Online work unblocked at school without login?",
        a: "Yes. Everything runs in browser memory with zero logins, downloads, or external database uploads for student names—well suited to managed school Chromebooks and classroom smartboards."
      }
    ]
  },

  es: {
    metaTitle: "Ruleta Aleatoria Online Gratis | Ruleta de Nombres y Sorteos",
    metaDesc: "Gira la ruleta online gratis: añade hasta 500 nombres u opciones para sorteos instantáneos. Ruleta de nombres, decisiones, rifas y juegos de clase. Sin registro.",
    keywords: "ruleta aleatoria, ruleta de nombres, girar la ruleta, ruleta online gratis, sorteo aleatorio, ruleta de decisiones, generador de nombres al azar, selector aleatorio, ruleta para el aula, ruleta sí o no, girar ruleta online, rueda de la suerte, sorteo con ruleta, generador de números aleatorios, ruleta de premios",
    heroTitle: "Girar la Ruleta Online Gratis",
    heroHighlight: "Ruleta de Nombres y Selector Aleatorio",
    heroSubtitle: "Añade hasta 500 nombres, opciones o números y gira la ruleta aleatoria para decisiones justas e imparciales. La ruleta de nombres gratuita para profesores, sorteos en redes sociales, rifas, juegos de fiesta y eventos. Sin registro.",
    quickAnswer: "<strong>¿Qué es la Ruleta Aleatoria?</strong> Es una herramienta web gratuita que usa algoritmos criptográficos (<code>crypto.getRandomValues</code>) para seleccionar ganadores al azar entre hasta 500 opciones. Personaliza temas y sonidos, elimina ganadores automáticamente y comparte ruletas personalizadas mediante enlace o código QR — todo sin registro.",
    badges: {
      free: "100% Gratis Siempre",
      noSignup: "Sin Registro Requerido",
      secure: "Totalmente Justo e Imparcial",
      capacity: "Hasta 500 Nombres",
      device: "Optimizado Móvil y PC"
    },
    ui: {
      spinBtn: "GIRAR LA RULETA",
      spinning: "GIRANDO...",
      resultDecided: "La Ruleta Ha Decidido",
      addNamesHeading: "🎯 Añadir Nombres u Opciones",
      inputPlaceholder: "Escribe un nombre, opción o premio...",
      addBtn: "Añadir",
      bulkBtn: "📋 Pegado Masivo",
      bulkPlaceholder: "Pega múltiples nombres — uno por línea o separados por comas\nejemplo:\nCarlos García\nMaría Rodríguez\nJavier López\nSofía Martín",
      bulkAddBtn: "Añadir Todo a la Ruleta",
      bulkCloseBtn: "Cancelar",
      clearAllBtn: "🗑 Borrar Todo",
      shuffleBtn: "🔀 Mezclar",
      sortBtn: "🔤 Ordenar A-Z",
      presetsHeading: "⚡ Plantillas Rápidas",
      themesHeading: "🎨 Tema Visual",
      settingsHeading: "⚙️ Personalización y Ajustes",
      spinDuration: "Duración del Giro",
      soundEffect: "Efecto de Sonido",
      soundVolume: "Volumen",
      soundTick: "Tictac Mecánico",
      soundDrum: "Redoble de Tambor",
      soundFanfare: "Fanfarria Triunfal",
      soundCheer: "Ovación del Público",
      soundNone: "Silencio / Mudo",
      removeWinner: "Eliminar Ganador Tras Girar",
      removeWinnerDesc: "Descarta automáticamente la opción premiada para realizar sorteos sucesivos.",
      showConfetti: "Confeti al Ganar",
      showPopup: "Ventana Emergente de Ganador",
      allowDuplicates: "Permitir Duplicados",
      fairnessAudit: "Verificación Criptográfica en Vivo",
      fairnessDesc: "Aleatoriedad basada en la Web Cryptography API del navegador, garantizando total neutralidad.",
      historyHeading: "📜 Historial de Giros",
      noSpinsYet: "Aún no hay giros registrados. ¡Pulsa el botón para comenzar!",
      clearHistory: "Borrar Historial",
      exportHistory: "Exportar CSV",
      statsHeading: "📊 Frecuencia de Ganadores",
      statsDesc: "Monitorea la probabilidad teórica versus los resultados reales de cada opción.",
      saveWheel: "💾 Guardar Ruleta",
      loadWheel: "📂 Mis Ruletas Guardadas",
      shareWheel: "🔗 Compartir Ruleta",
      shareSuccess: "¡Enlace copiado al portapapeles!",
      qrCodeTitle: "Escanear Código QR",
      embedTitle: "Incrustar Ruleta en tu Web",
      fullscreen: "Pantalla Completa",
      exitFullscreen: "Salir de Pantalla Completa",
      spinAgain: "Girar de Nuevo",
      removeAndContinue: "Eliminar Ganador y Continuar",
      winnerTitle: "¡Tenemos un Ganador!"
    },
    presets: {
      yesno: { label: "Sí / No", items: ["Sí ✅", "No ❌", "Tal vez 🤔", "Pregunta de nuevo 🔄"] },
      drawnames: { label: "Nombres", items: ["Mateo", "Valentina", "Santiago", "Camila", "Sebastián", "Lucía", "Alejandro", "Isabella", "Diego", "Martina"] },
      dinner: { label: "Cena", items: ["Pizza 🍕", "Tacos 🌮", "Sushi 🍣", "Pasta Italiana 🍝", "Hamburguesas 🍔", "Comida Mexicana 🍲", "Ensalada Saludable 🥗", "Tapas Españolas 🥘"] },
      numbers: { label: "1 al 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Verdad / Reto", items: ["Verdad 🤫", "Reto 😈", "Verdad 🤫", "Reto 😈", "Doble Reto 🔥", "Pase Libre 🌟"] },
      giveaway: { label: "Sorteo", items: ["1er Premio 🏆", "2do Premio 🥈", "3er Premio 🥉", "Tarjeta Regalo 🎁", "Caja Sorpresa 📦", "Suerte la Próxima 🍀"] }
    },
    howTo: {
      title: "Cómo Usar la Ruleta Aleatoria Online",
      subtitle: "Configura y gira tu ruleta de nombres personalizada en 4 simples pasos.",
      steps: [
        {
          num: 1,
          title: "Introduce Nombres u Opciones",
          desc: "Escribe nombres individualmente, escoge una de nuestras plantillas rápidas o pulsa 'Pegado Masivo' para importar listas enteras desde Excel o Word."
        },
        {
          num: 2,
          title: "Personaliza Colores y Sonido",
          desc: "Elige una paleta cromática atractiva, configura efectos sonoros auténticos (Tictac de ruleta, redoble de tambor) y ajusta el tiempo de giro."
        },
        {
          num: 3,
          title: "Gira la Ruleta",
          desc: "Presiona el botón 'GIRAR LA RULETA' o toca el centro de la rueda. La animación calcula una física fluida con desaceleración realista hasta revelar al ganador con confeti."
        },
        {
          num: 4,
          title: "Gestiona Ganadores y Comparte",
          desc: "Elimina al seleccionado para sorteos sucesivos sin repetición, analiza las estadísticas o comparte la ruleta con tu clase o audiencia mediante un link o código QR."
        }
      ]
    },
    useCases: {
      title: "Casos de Uso Populares: Educación, Negocios y Ocio",
      subtitle: "Descubre por qué miles de usuarios confían en nuestra ruleta a diario.",
      items: [
        {
          icon: "🏫",
          title: "Participación en el Aula",
          desc: "Los profesores eligen alumnos de forma transparente y divertida, fomentando la atención y eliminando sospechas de preferencias personales."
        },
        {
          icon: "🎁",
          title: "Sorteos en Redes Sociales",
          desc: "Creadores de contenido en YouTube, Twitch e Instagram realizan rifas transparentes y en vivo frente a sus seguidores."
        },
        {
          icon: "💼",
          title: "Reuniones de Equipo y Trabajo",
          desc: "Asigna el turno de palabra en reuniones diarias de Scrum, reparte tareas semanales o decide turnos de guardia de forma imparcial."
        },
        {
          icon: "🎉",
          title: "Juegos y Decisiones Cotidianas",
          desc: "¿Qué comer hoy? ¿Quién empieza el juego de mesa? Gira la ruleta y dile adiós a las discusiones interminables con amigos y familia."
        }
      ]
    },
    fairness: {
      title: "Aleatoriedad Criptográfica Garantizada",
      subtitle: "Transparencia matemática absoluta en cada giro.",
      text1: "A diferencia de herramientas convencionales que usan funciones numéricas débiles, Spin The Wheels Online opera con la API nativa de criptografía del navegador (<code>window.crypto.getRandomValues</code>).",
      text2: "Esto aprovecha fuentes de entropía física del sistema operativo, garantizando que cada casilla posea una probabilidad idéntica sin sesgos de repetición.",
      formula: "Probabilidad = 1 / Número_de_Opciones",
      text3: "La posición visual de la aguja coincide con precisión matemática con el índice premiado, asegurando total veracidad en sorteos y concursos."
    },
    comparison: {
      title: "Comparativa: Ruleta Online frente a Otros Métodos",
      headers: ["Criterio", "Nuestra Ruleta Online", "Dados Físicos / Monedas", "Generador Simple de Números", "Papeles en un Sombrero"],
      rows: [
        ["Emoción Visual", "⭐⭐⭐⭐⭐ Máxima (Física fluida y sonido)", "⭐⭐⭐ Media (Solo mesa física)", "⭐ Muy Baja (Texto plano estático)", "⭐⭐⭐ Media (Apertura manual)"],
        ["Capacidad de Nombres", "Hasta 500 opciones con texto largo", "Limitado a 6 o 20 caras", "Solo valores numéricos", "Tedioso de escribir a mano"],
        ["Neutralidad Demostrable", "Criptografía CSPRNG de alta seguridad", "Sujeto a defectos de fabricación", "Función Math.random básica", "Sujeto a manipulación manual"],
        ["Eliminación de Ganadores", "Inmediata y automática en un clic", "Requiere volver a lanzar", "Exige reprogramar filtros", "Descarte manual de papeles"]
      ]
    },
    faqs: [
      {
        q: "¿Es esta ruleta de nombres 100% gratuita?",
        a: "Sí, es completamente gratis para siempre. No requiere registro, ni suscripciones, ni descargas de programas."
      },
      {
        q: "¿Cuántos nombres u opciones puedo añadir?",
        a: "Puedes añadir hasta 500 opciones simultáneas. La rueda ajusta automáticamente el tamaño de la tipografía para que todo sea perfectamente legible."
      },
      {
        q: "¿Cómo se asegura la imparcialidad del sorteo?",
        a: "Utilizamos la Web Cryptography API nativa del navegador, un estándar criptográfico internacional que previene cualquier manipulación o patrón predecible."
      },
      {
        q: "¿Puedo eliminar al ganador para que no vuelva a salir?",
        a: "Sí. Activa la casilla 'Eliminar Ganador Tras Girar' o pulsa el botón correspondiente en la ventana emergente tras el resultado."
      },
      {
        q: "¿Funciona correctamente en móviles y tablets?",
        a: "Sí, la plataforma está 100% optimizada para pantallas táctiles de teléfonos móviles, tablets y ordenadores con resolución hasta 4K."
      },
      {
        q: "¿Puedo guardar y compartir mis ruletas?",
        a: "Sí. Puedes guardar varias ruletas en tu navegador y compartir cualquier ruleta personalizada mediante un enlace directo o código QR."
      }
    ]
  },

  de: {
    metaTitle: "Glücksrad Online Kostenlos | Namensrad & Zufallsgenerator",
    metaDesc: "Glücksrad kostenlos drehen: bis zu 500 Namen eingeben für faire Zufallsentscheidungen. Namensrad für Schule, Verlosungen & Spiele. Ohne Anmeldung.",
    keywords: "Glücksrad online, Glücksrad drehen, Namensrad, Zufallsgenerator online, Glücksrad kostenlos, Rad drehen, Zufallsauswahl, Namen ziehen Zufall, Losrad online, Entscheidungsrad, Ja oder Nein Rad, Zufallsrad für Schule, Gewinnspiel Rad, Namensgenerator Zufall, Glücksrad erstellen",
    heroTitle: "Glücksrad Online Kostenlos Drehen",
    heroHighlight: "Namensrad & Zufallsgenerator",
    heroSubtitle: "Bis zu 500 Namen, Zahlen oder Optionen eingeben und das Glücksrad für faire, kryptografisch sichere Zufallsentscheidungen drehen. Das kostenlose Namensrad für Lehrer, Verlosungen, Gewinnspiele und Teamevents — ohne Anmeldung.",
    quickAnswer: "<strong>Was ist das Online-Glücksrad?</strong> Ein kostenloses Zufallsauswahl-Tool im Browser, das echte kryptografische Zufälligkeit (<code>crypto.getRandomValues</code>) nutzt. Geben Sie bis zu 500 Einträge ein, passen Sie Themes und Soundeffekte an, entfernen Sie Gewinner automatisch und teilen Sie Ihr Glücksrad per Link oder QR-Code.",
    badges: {
      free: "100% Dauerhaft Kostenlos",
      noSignup: "Ohne Registrierung",
      secure: "Kryptografisch Fair",
      capacity: "Bis zu 500 Einträge",
      device: "Optimal für Handy & PC"
    },
    ui: {
      spinBtn: "RAD DREHEN",
      spinning: "DREHT SICH...",
      resultDecided: "Das Rad hat entschieden",
      addNamesHeading: "🎯 Namen oder Optionen Hinzufügen",
      inputPlaceholder: "Name oder Option eingeben...",
      addBtn: "Hinzufügen",
      bulkBtn: "📋 Mehrere Namen Einfügen",
      bulkPlaceholder: "Mehrere Namen zeilenweise oder kommagetrennt einfügen\nBeispiel:\nMaximilian\nSophie\nLukas\nEmma",
      bulkAddBtn: "Alle Einträge Hinzufügen",
      bulkCloseBtn: "Abbrechen",
      clearAllBtn: "🗑 Alles Löschen",
      shuffleBtn: "🔀 Mischen",
      sortBtn: "🔤 Sortieren A-Z",
      presetsHeading: "⚡ Schnellvorlagen",
      themesHeading: "🎨 Farbschema",
      settingsHeading: "⚙️ Einstellungen & Audio",
      spinDuration: "Drehdauer",
      soundEffect: "Soundeffekt",
      soundVolume: "Lautstärke",
      soundTick: "Mechanisches Ticken",
      soundDrum: "Trommelwirbel",
      soundFanfare: "Siegesfanfare",
      soundCheer: "Publikumsjubel",
      soundNone: "Lautlos",
      removeWinner: "Gewinner Nach Drehung Entfernen",
      removeWinnerDesc: "Entfernt die gezogene Option automatisch aus der Liste für mehrstufige Auslosungen.",
      showConfetti: "Konfetti bei Gewinn",
      showPopup: "Gewinner-Popup Anzeigen",
      allowDuplicates: "Duplikate Erlauben",
      fairnessAudit: "Echte Zufallsprüfung",
      fairnessDesc: "Zufallsauswahl via Web Cryptography API garantiert absolute Chancengleichheit ohne Algorithmen-Bias.",
      historyHeading: "📜 Verlauf",
      noSpinsYet: "Noch keine Drehungen vorhanden. Drücken Sie den Button!",
      clearHistory: "Verlauf Leeren",
      exportHistory: "CSV Exportieren",
      statsHeading: "📊 Gewinner-Statistik",
      statsDesc: "Vergleicht theoretische Wahrscheinlichkeiten mit realen Ergebnissen.",
      saveWheel: "💾 Rad Speichern",
      loadWheel: "📂 Gespeicherte Räder",
      shareWheel: "🔗 Rad Teilen",
      shareSuccess: "Link in die Zwischenablage kopiert!",
      qrCodeTitle: "QR-Code mit Smartphone Scannen",
      embedTitle: "Rad in Eigene Webseite Einbinden",
      fullscreen: "Vollbildmodus",
      exitFullscreen: "Vollbild Beenden",
      spinAgain: "Nochmal Drehen",
      removeAndContinue: "Gewinner Entfernen & Weiter",
      winnerTitle: "Gewinner Gezogen!"
    },
    presets: {
      yesno: { label: "Ja / Nein", items: ["Ja ✅", "Nein ❌", "Vielleicht 🤔", "Nochmal fragen 🔄"] },
      drawnames: { label: "Namen", items: ["Noah", "Mia", "Matteo", "Emma", "Elias", "Hannah", "Leon", "Sophia", "Paul", "Lina"] },
      dinner: { label: "Abendessen", items: ["Pizza 🍕", "Sushi 🍣", "Döner 🥙", "Pasta 🍝", "Burger 🍔", "Asiatisch 🍜", "Salat 🥗", "Hausmannskost 🍲"] },
      numbers: { label: "1 bis 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Wahrheit / Pflicht", items: ["Wahrheit 🤫", "Pflicht 😈", "Wahrheit 🤫", "Pflicht 😈", "Doppelte Pflicht 🔥", "Freilos 🌟"] },
      giveaway: { label: "Gewinnspiel", items: ["Hauptpreis 🏆", "2. Platz 🥈", "3. Platz 🥉", "Gutschein 🎁", "Überraschung 📦", "Trostpreis 🍀"] }
    },
    howTo: {
      title: "Anleitung: So funktioniert das Online-Glücksrad",
      subtitle: "In vier einfachen Schritten zu Ihrer maßgeschneiderten Zufallsauswahl.",
      steps: [
        {
          num: 1,
          title: "Einträge festlegen",
          desc: "Tippen Sie Namen einzeln ein oder nutzen Sie die Sammelfunktion, um ganze Schülerlisten oder Teilnehmerdateien sofort einzufügen."
        },
        {
          num: 2,
          title: "Design & Sound wählen",
          desc: "Wählen Sie Farbpaletten wie Casino Gold oder Neon und aktivieren Sie passende Soundkulissen wie Klickgeräusche oder Trommelwirbel."
        },
        {
          num: 3,
          title: "Rad drehen",
          desc: "Klicken Sie auf 'RAD DREHEN'. Die physikalische Verlangsamung erzeugt echte Spannung bis zur Landung auf dem Gewinnersegment."
        },
        {
          num: 4,
          title: "Auswerten & Teilen",
          desc: "Entfernen Sie Gewinner für weitere Runden, prüfen Sie die Statistik oder teilen Sie das Rad per QR-Code mit Ihrem Publikum."
        }
      ]
    },
    useCases: {
      title: "Einsatzbereiche in Schule, Beruf und Freizeit",
      subtitle: "Vielseitig einsetzbar für transparente Gruppenentscheidungen.",
      items: [
        {
          icon: "🏫",
          title: "Unterricht & Schule",
          desc: "Lehrkräfte schätzen den fairen Namenswähler für mündliche Beteiligung, Gruppenbildung und Präsentationsreihenfolgen am Smartboard."
        },
        {
          icon: "🎁",
          title: "Online-Verlosungen & Streams",
          desc: "Streamer und Firmen nutzen die visuelle Raddrehung für nachvollziehbare Live-Giveaways vor der Kamera."
        },
        {
          icon: "💼",
          title: "Meeting-Moderation & Scrum",
          desc: "Wählen Sie zufällige Sprecher im Daily Standup oder verteilen Sie Bereitschaftsdienste unparteiisch im Team."
        },
        {
          icon: "🎉",
          title: "Spieleabende & Alltag",
          desc: "Beenden Sie Diskussionen über Essenswünsche oder Spielzüge mit einem schnellen, spaßigen Dreh."
        }
      ]
    },
    fairness: {
      title: "Kryptografische Sicherheit und Chancengleichheit",
      subtitle: "Mathematisch einwandfreie Zufallsauswahl ohne Manipulation.",
      text1: "Herkömmliche Webseiten nutzen einfache mathematische Zufallsfunktionen, die statistische Muster aufweisen können. Unser Tool verwendet die hochsichere Web Cryptography API (<code>window.crypto.getRandomValues</code>).",
      text2: "Die Zufallszahlen stammen direkt aus Hardware-Entropiequellen des Betriebssystems. Jedes Segment hat exakt dieselbe Gewinnchance:",
      formula: "Wahrscheinlichkeit = 1 / Gesamtzahl_der_Felder",
      text3: "Der visuelle Zeiger stoppt pixelgenau auf dem ermittelten Index. Absolute Fairness ist somit für jeden Teilnehmer garantiert."
    },
    comparison: {
      title: "Vergleich: Online-Glücksrad vs. Klassische Methoden",
      headers: ["Kriterium", "Unser Online Glücksrad", "Würfel / Münzen", "Einfacher Zufallsgenerator", "Lose im Lostopf"],
      rows: [
        ["Spannungsfaktor", "⭐⭐⭐⭐⭐ Sehr Hoch (Audio & Physik)", "⭐⭐⭐ Mittel (Nur am Tisch)", "⭐ Gering (Statische Zahl)", "⭐⭐⭐ Mittel (Manuelles Ziehen)"],
        ["Kapazität", "Bis zu 500 eigene Textoptionen", "Maximal 6 bis 20 Seiten", "Nur Ziffern", "Aufwendig auf Papier"],
        ["Manipulationssicherheit", "CSPRNG Kryptografie (Höchste Stufe)", "Abhängig von Wurfkraft", "Einfaches Pseudo-Random", "Gefahr ungleichmäßigen Mischens"],
        ["Gewinner-Ausschluss", "Automatisch mit einem Klick", "Erfordert Neuwurf", "Aufwendiges Umkonfigurieren", "Manuelles Weglegen"]
      ]
    },
    faqs: [
      {
        q: "Ist das Glücksrad wirklich kostenlos?",
        a: "Ja, zu 100% kostenlos ohne Registrierung, versteckte Gebühren oder Beschränkungen der Drehanzahl."
      },
      {
        q: "Wie viele Namen können eingetragen werden?",
        a: "Sie können bis zu 500 Namen oder Begriffe einfügen. Die Schriftgröße skaliert automatisch für optimale Lesbarkeit."
      },
      {
        q: "Wie wird garantiert, dass das Rad fair ist?",
        a: "Durch Nutzung der browsernativen Web Cryptography API, die echten Zufall anhand von Systementropie generiert."
      },
      {
        q: "Kann ich den Gewinner automatisch entfernen lassen?",
        a: "Ja, aktivieren Sie einfach 'Gewinner Nach Drehung Entfernen'. Ideal für mehrrundige Tombolas und Klassenauslosungen."
      },
      {
        q: "Funktioniert das Tool auf Smartphones und Tablets?",
        a: "Ja, vollständig für Touchscreens unter iOS (iPhone/iPad), Android und Desktop-Browser optimiert."
      }
    ]
  },

  fr: {
    metaTitle: "Roue de la Fortune en Ligne Gratuite | Roue des Noms & Tirage",
    metaDesc: "Roue de la fortune gratuite en ligne : jusqu'à 500 noms pour tirages au sort en classe, concours et décisions équitables sans inscription.",
    keywords: "roue de la fortune en ligne, tourner la roue, roue des noms, roue aléatoire, tirage au sort en ligne, roue de la chance, roue de décision, générateur de noms aléatoire, sélecteur aléatoire, roue oui ou non, roue pour la classe, tirage au sort gratuit, roue des prénoms, générateur de nombres aléatoires, roue pour concours",
    heroTitle: "Roue de la Fortune en Ligne Gratuite",
    heroHighlight: "Roue des Noms & Tirage au Sort Aléatoire",
    heroSubtitle: "Ajoutez jusqu'à 500 noms, options ou nombres et faites tourner la roue pour des décisions aléatoires et cryptographiquement équitables. L'outil gratuit pour enseignants, tirages au sort, concours en direct et jeux de société — sans inscription.",
    quickAnswer: "<strong>Qu'est-ce que la Roue en Ligne ?</strong> Un outil web gratuit qui utilise des algorithmes cryptographiques (<code>crypto.getRandomValues</code>) pour sélectionner un gagnant parmi jusqu'à 500 entrées. Personnalisez les thèmes et effets sonores, éliminez automatiquement les gagnants et partagez la roue par lien ou code QR.",
    badges: {
      free: "100% Gratuit Toujours",
      noSignup: "Sans Inscription",
      secure: "Équité Cryptographique",
      capacity: "Jusqu'à 500 Noms",
      device: "Optimisé Mobile & PC"
    },
    ui: {
      spinBtn: "TOURNER LA ROUE",
      spinning: "ROTATION EN COURS...",
      resultDecided: "La Roue a Décidé",
      addNamesHeading: "🎯 Ajouter des Noms ou Choix",
      inputPlaceholder: "Entrez un prénom, un choix ou un lot...",
      addBtn: "Ajouter",
      bulkBtn: "📋 Collage en Masse",
      bulkPlaceholder: "Collez plusieurs noms — un par ligne ou séparés par des virgules\nexemple:\nLucas\nEmma\nGabriel\nChloé",
      bulkAddBtn: "Tout Ajouter à la Roue",
      bulkCloseBtn: "Annuler",
      clearAllBtn: "🗑 Tout Effacer",
      shuffleBtn: "🔀 Mélanger",
      sortBtn: "🔤 Trier A-Z",
      presetsHeading: "⚡ Modèles Rapides",
      themesHeading: "🎨 Thème Visuel",
      settingsHeading: "⚙️ Personnalisation & Audio",
      spinDuration: "Durée de Rotation",
      soundEffect: "Effet Sonore",
      soundVolume: "Volume",
      soundTick: "Tic-tac Mécanique",
      soundDrum: "Roulement de Tambour",
      soundFanfare: "Fanfare de Victoire",
      soundCheer: "Applaudissements",
      soundNone: "Muet",
      removeWinner: "Retirer le Gagnant Après le Tour",
      removeWinnerDesc: "Élimine automatiquement l'élément tiré pour réaliser des tirages consécutifs.",
      showConfetti: "Confettis de Victoire",
      showPopup: "Afficher le Popup Gagnant",
      allowDuplicates: "Autoriser les Doublons",
      fairnessAudit: "Contrôle d'Aléatoire Certifié",
      fairnessDesc: "Génération aléatoire basée sur la Web Cryptography API pour une impartialité absolue.",
      historyHeading: "📜 Historique des Tirages",
      noSpinsYet: "Aucun tirage pour l'instant. Cliquez sur le bouton pour lancer !",
      clearHistory: "Effacer l'Historique",
      exportHistory: "Exporter en CSV",
      statsHeading: "📊 Fréquence des Gagnants",
      statsDesc: "Comparez les probabilités théoriques avec les résultats effectifs de chaque tranche.",
      saveWheel: "💾 Sauvegarder la Roue",
      loadWheel: "📂 Mes Roues Enregistrées",
      shareWheel: "🔗 Partager la Roue",
      shareSuccess: "Lien copié dans le presse-papier !",
      qrCodeTitle: "Scanner le QR Code",
      embedTitle: "Intégrer la Roue sur votre Site",
      fullscreen: "Plein Écran",
      exitFullscreen: "Quitter le Plein Écran",
      spinAgain: "Tourner à Nouveau",
      removeAndContinue: "Retirer le Gagnant & Continuer",
      winnerTitle: "Nous Avons un Gagnant !"
    },
    presets: {
      yesno: { label: "Oui / Non", items: ["Oui ✅", "Non ❌", "Peut-être 🤔", "Rejouer 🔄"] },
      drawnames: { label: "Prénoms", items: ["Gabriel", "Jade", "Léo", "Louise", "Raphaël", "Ambre", "Louis", "Alice", "Arthur", "Rose"] },
      dinner: { label: "Dîner", items: ["Pizza 🍕", "Sushi 🍣", "Tacos 🌮", "Pâtes Italiennes 🍝", "Burgers 🍔", "Cuisine Asiatique 🍜", "Salade Composée 🥗", "Crêpes 🥞"] },
      numbers: { label: "1 à 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Action / Vérité", items: ["Vérité 🤫", "Action 😈", "Vérité 🤫", "Action 😈", "Double Action 🔥", "Joker 🌟"] },
      giveaway: { label: "Concours", items: ["1er Prix 🏆", "2e Prix 🥈", "3e Prix 🥉", "Bon d'Achat 🎁", "Boîte Mystère 📦", "Recommencer 🍀"] }
    },
    howTo: {
      title: "Comment Utiliser la Roue de Tirage en Ligne",
      subtitle: "Créez et lancez votre roue personnalisée en quatre étapes simples.",
      steps: [
        {
          num: 1,
          title: "Saisir les Noms",
          desc: "Tapez vos choix un à un ou utilisez le collage en masse pour intégrer une liste de classe ou des participants à un jeu concours."
        },
        {
          num: 2,
          title: "Personnaliser Visuel et Son",
          desc: "Sélectionnez un style de couleurs (Casino, Néon) et activez des sons réalistes comme le cliquetis de roue ou le roulement de tambour."
        },
        {
          num: 3,
          title: "Lancer la Roue",
          desc: "Appuyez sur 'TOURNER LA ROUE'. La physique d'animation ralentit progressivement jusqu'à s'arrêter sur l'élément victorieux sous une pluie de confettis."
        },
        {
          num: 4,
          title: "Gérer et Partager",
          desc: "Retirez le gagnant pour enchaîner sans répétition, consultez les statistiques ou partagez la roue par QR Code avec vos amis ou spectateurs."
        }
      ]
    },
    useCases: {
      title: "Usages Fréquents : École, Travail et Soirées",
      subtitle: "Découvrez pourquoi notre roue est adoptée par des milliers d'utilisateurs chaque jour.",
      items: [
        {
          icon: "🏫",
          title: "Enseignement & Écoles",
          desc: "Interrogez les élèves de manière équitable et ludique, désignez les chefs d'équipe et animez des quiz sur vidéoprojecteur."
        },
        {
          icon: "🎁",
          title: "Concours & Lives Stream",
          desc: "Organisez des tirages au sort transparents en direct sur Twitch, YouTube ou TikTok devant votre communauté."
        },
        {
          icon: "💼",
          title: "Réunions & Équipes Agiles",
          desc: "Attribuez la parole lors des stand-ups quotidiens et répartissez les tâches d'astreinte sans contestation possible."
        },
        {
          icon: "🎉",
          title: "Soirées et Choix du Quotidien",
          desc: "Fini les débats pour choisir le restaurant ou le premier joueur d'un jeu de société : laissez la roue décider !"
        }
      ]
    },
    fairness: {
      title: "Équité Mathématique et Aléatoire Cryptographique",
      subtitle: "Un tirage au sort certifié sans tricherie ni biais.",
      text1: "Les générateurs basiques emploient des fonctions prévisibles. Spin The Wheels Online exploite l'API Web Cryptography (<code>window.crypto.getRandomValues</code>), standard industriel de pointe.",
      text2: "L'entropie provient directement du matériel de votre appareil. Chaque case a exactement la même probabilité d'être choisie :",
      formula: "Probabilité = 1 / Nombre_de_Sections",
      text3: "L'aiguille visuelle correspond rigoureusement à l'élément sélectionné par l'algorithme, assurant une intégrité absolue pour vos concours."
    },
    comparison: {
      title: "Comparatif : Roue en Ligne vs Autres Méthodes",
      headers: ["Critère", "Notre Roue en Ligne", "Dés / Pile ou Face", "Générateur Chiffré Simple", "Tirage Chapeau / Papier"],
      rows: [
        ["Suspense Visuel", "⭐⭐⭐⭐⭐ Maximal (Physique et sons)", "⭐⭐⭐ Moyen (Sur table uniquement)", "⭐ Très Faible (Texte brut)", "⭐⭐⭐ Moyen (Ouverture manuelle)"],
        ["Capacité de Choix", "Jusqu'à 500 entrées textuelles", "Limité à 6 ou 20 faces", "Nombres uniquement", "Fastidieux à écrire à la main"],
        ["Sécurité Anti-Triche", "Cryptographie CSPRNG certifiée", "Soumis aux biais du lancer", "Pseudo-aléatoire basique", "Risque de triche lors du tirage"],
        ["Élimination Automatique", "Instantanée en un clic", "Nécessite de relancer", "Exige de refaire les filtres", "Retrait manuel des papiers"]
      ]
    },
    faqs: [
      {
        q: "L'utilisation de la roue est-elle gratuite ?",
        a: "Oui, totalement gratuite et sans aucune limite de tirages. Pas besoin d'inscription ni de carte bancaire."
      },
      {
        q: "Combien d'options puis-je inscrire ?",
        a: "Vous pouvez ajouter jusqu'à 500 prénoms ou options. Le texte s'adapte automatiquement pour rester net et lisible."
      },
      {
        q: "Comment garantir que le tirage est impartial ?",
        a: "Grâce à la Web Cryptography API qui fournit des nombres aléatoires hautement sécurisés issus de l'entropie matérielle."
      },
      {
        q: "Puis-je supprimer le gagnant pour les tours suivants ?",
        a: "Oui, activez 'Retirer le Gagnant Après le Tour' pour organiser des tombolas sans doublons."
      },
      {
        q: "L'outil fonctionne-t-il sur smartphone ?",
        a: "Oui, l'affichage est optimisé pour les écrans tactiles sur iPhone, iPad, Android et ordinateurs de bureau."
      }
    ]
  },

  it: {
    metaTitle: "Ruota della Fortuna Online Gratis | Ruota dei Nomi & Sorteggi",
    metaDesc: "Gira la ruota online gratis: fino a 500 nomi per sorteggi casuali istantanei. Ruota dei nomi per scuola, estrazioni, giochi e decisioni. Senza login.",
    keywords: "ruota della fortuna online, gira la ruota, ruota dei nomi, ruota casuale, sorteggio online, selettore casuale, generatore nomi casuali, ruota delle decisioni, ruota sì o no, ruota online gratis, ruota per la classe, estrazione a sorte, generatore di numeri casuali, ruota della fortuna gratis, sorteggio casuale",
    heroTitle: "Gira la Ruota Online Gratis",
    heroHighlight: "Ruota dei Nomi & Sorteggio Casuale",
    heroSubtitle: "Inserisci fino a 500 nomi, numeri o scelte e fai girare la ruota della fortuna per decisioni imparziali e crittograficamente casuali. Lo strumento gratuito per insegnanti, estrazioni, sorteggi e giochi — senza registrazione.",
    quickAnswer: "<strong>Cos'è la Ruota Online?</strong> Uno strumento web gratuito che utilizza algoritmi crittografici (<code>crypto.getRandomValues</code>) per selezionare un vincitore tra fino a 500 elementi. Personalizza temi ed effetti audio, rimuovi automaticamente i vincitori e condividi la ruota via link o codice QR.",
    badges: {
      free: "100% Gratuita Sempre",
      noSignup: "Nessuna Registrazione",
      secure: "Crittograficamente Imparziale",
      capacity: "Fino a 500 Nomi",
      device: "Ottimizzata per Smartphone e PC"
    },
    ui: {
      spinBtn: "GIRA LA RUOTA",
      spinning: "GIRANDO...",
      resultDecided: "La Ruota Ha Scelto",
      addNamesHeading: "🎯 Aggiungi Nomi o Opzioni",
      inputPlaceholder: "Scrivi un nome, una scelta o un premio...",
      addBtn: "Aggiungi",
      bulkBtn: "📋 Incolla Più Nomi",
      bulkPlaceholder: "Incolla più nomi — uno per riga o separati da virgole\nesempio:\nLorenzo\nSofia\nLeonardo\nGiulia",
      bulkAddBtn: "Aggiungi Tutto alla Ruota",
      bulkCloseBtn: "Annulla",
      clearAllBtn: "🗑 Cancella Tutto",
      shuffleBtn: "🔀 Mescola",
      sortBtn: "🔤 Ordina A-Z",
      presetsHeading: "⚡ Modelli Pronti",
      themesHeading: "🎨 Tema Grafico",
      settingsHeading: "⚙️ Personalizzazione e Audio",
      spinDuration: "Durata del Giro",
      soundEffect: "Effetto Sonoro",
      soundVolume: "Volume",
      soundTick: "Ticchettio Meccanico",
      soundDrum: "Rullo di Tamburi",
      soundFanfare: "Fanfara Trionfale",
      soundCheer: "Applausi del Pubblico",
      soundNone: "Silenzioso",
      removeWinner: "Rimuovi Vincitore Dopo il Giro",
      removeWinnerDesc: "Elimina automaticamente l'opzione estratta per sorteggi successivi senza ripetizioni.",
      showConfetti: "Coriandoli alla Vittoria",
      showPopup: "Mostra Finestra del Vincitore",
      allowDuplicates: "Consenti Duplicati",
      fairnessAudit: "Casualità Certificata",
      fairnessDesc: "Estrazione generata tramite Web Cryptography API per garantire l'assoluta equità di ogni giro.",
      historyHeading: "📜 Storico delle Estrazioni",
      noSpinsYet: "Nessun giro registrato finora. Premi il pulsante per iniziare!",
      clearHistory: "Cancella Storico",
      exportHistory: "Esporta CSV",
      statsHeading: "📊 Statistiche Vincitori",
      statsDesc: "Confronta la probabilità teorica con i risultati effettivi registrati.",
      saveWheel: "💾 Salva Ruota",
      loadWheel: "📂 Ruote Salvate",
      shareWheel: "🔗 Condividi Ruota",
      shareSuccess: "Link copiato negli appunti!",
      qrCodeTitle: "Scansiona Codice QR",
      embedTitle: "Incorpora Ruota nel tuo Sito",
      fullscreen: "Schermo Intero",
      exitFullscreen: "Esci da Schermo Intero",
      spinAgain: "Gira Ancora",
      removeAndContinue: "Rimuovi Vincitore e Continua",
      winnerTitle: "Abbiamo un Vincitore!"
    },
    presets: {
      yesno: { label: "Sì / No", items: ["Sì ✅", "No ❌", "Forse 🤔", "Chiedi di nuovo 🔄"] },
      drawnames: { label: "Nomi", items: ["Leonardo", "Sofia", "Francesco", "Aurora", "Alessandro", "Giulia", "Mattia", "Ginevra", "Lorenzo", "Beatrice"] },
      dinner: { label: "Cena", items: ["Pizza Margherita 🍕", "Sushi 🍣", "Pasta al Forno 🍝", "Hamburger 🍔", "Cucina Indiana 🍛", "Tacos Messicani 🌮", "Insalata Fresca 🥗", "Bistecca alla Griglia 🥩"] },
      numbers: { label: "1 a 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Obbligo / Verità", items: ["Verità 🤫", "Obbligo 😈", "Verità 🤫", "Obbligo 😈", "Doppio Obbligo 🔥", "Pass 🌟"] },
      giveaway: { label: "Estrazione Premi", items: ["1° Premio 🏆", "2° Premio 🥈", "3° Premio 🥉", "Buono Regalo 🎁", "Pacco Sorpresa 📦", "Ritenta 🍀"] }
    },
    howTo: {
      title: "Come Usare la Ruota delle Decisioni Online",
      subtitle: "Crea e fai girare la tua ruota dei nomi in quattro semplici passaggi.",
      steps: [
        {
          num: 1,
          title: "Inserisci Nomi o Scelte",
          desc: "Digita i nomi singolarmente oppure utilizza la funzione di inserimento rapido per incollare elenchi da Excel o documenti di testo."
        },
        {
          num: 2,
          title: "Scegli Colori e Suoni",
          desc: "Personalizza la tavolozza grafica con tonalità vivaci e imposta effetti sonori come il ticchettio o il rullo di tamburi."
        },
        {
          num: 3,
          title: "Gira la Ruota",
          desc: "Fai clic su 'GIRA LA RUOTA'. L'animazione simula la decelerazione fisica realistica fermandosi sul vincitore con una pioggia di coriandoli."
        },
        {
          num: 4,
          title: "Gestisci Risultati e Condividi",
          desc: "Rimuovi il vincitore per estrazioni senza ripetizioni, consulta le statistiche o condividi la ruota con un link o codice QR."
        }
      ]
    },
    useCases: {
      title: "Utilizzi Comuni: Scuola, Lavoro ed Eventi",
      subtitle: "Scopri come docenti, creatori e gruppi utilizzano la nostra ruota ogni giorno.",
      items: [
        {
          icon: "🏫",
          title: "Docenti e Scuola",
          desc: "Interroga gli studenti in modo imparziale e divertente, forma gruppi di lavoro e assegna compiti senza favoritismi."
        },
        {
          icon: "🎁",
          title: "Giveaway e Dirette Streaming",
          desc: "Organizza estrazioni a premi trasparenti e coinvolgenti in diretta su Twitch, YouTube o Instagram."
        },
        {
          icon: "💼",
          title: "Riunioni e Team Aziendali",
          desc: "Stabilisci l'ordine degli interventi nei meeting agili e distribuisci turni e incarichi in modo trasparente."
        },
        {
          icon: "🎉",
          title: "Feste e Decisioni Quotidiane",
          desc: "Scegli dove mangiare la pizza o chi inizia il gioco di società senza discussioni interminabili."
        }
      ]
    },
    fairness: {
      title: "Casualità e Sicurezza Crittografica",
      subtitle: "Sorteggio matematicamente impeccabile senza trucchi.",
      text1: "I generatori semplici usano funzioni prevedibili. Spin The Wheels Online si affida alla Web Cryptography API nativa del browser (<code>window.crypto.getRandomValues</code>).",
      text2: "I numeri casuali sono generati dall'entropia hardware del sistema operativo. Ogni spicchio della ruota ha esattamente la stessa probabilità:",
      formula: "Probabilità = 1 / Numero_Totale_Spicchi",
      text3: "La freccia grafica si allinea con precisione millimetrica all'indice estratto crittograficamente, garantendo un'estrazione limpida e trasparente."
    },
    comparison: {
      title: "Confronto: Ruota Online vs Altri Metodi",
      headers: ["Caratteristica", "Nostra Ruota Online", "Dadi / Moneta", "Generatore Numerico Semplice", "Bigliettini nel Cappello"],
      rows: [
        ["Coinvolgimento Visivo", "⭐⭐⭐⭐⭐ Massimo (Fisica e Suoni)", "⭐⭐⭐ Medio (Solo sul tavolo)", "⭐ Molto Basso (Testo fisso)", "⭐⭐⭐ Medio (Estrazione manuale)"],
        ["Capacità Scelte", "Fino a 500 nomi personalizzati", "Da 6 a 20 facce", "Solo cifre numeriche", "Lento da compilare a mano"],
        ["Imparzialità Verificabile", "Crittografia CSPRNG avanzata", "Soggetto a difetti di lancio", "Pseudo-casualità di base", "Rischio di mescolamento non uniforme"],
        ["Rimozione Vincitore", "Automatica in un solo clic", "Richiede nuovo lancio", "Richiede riconfigurazione filtri", "Scarto manuale dei foglietti"]
      ]
    },
    faqs: [
      {
        q: "La ruota online è davvero gratuita?",
        a: "Sì, gratuita al 100% e senza limiti di utilizzo. Nessuna registrazione né carta di credito richiesta."
      },
      {
        q: "Quanti nomi posso inserire?",
        a: "Puoi inserire fino a 500 nomi o scelte. Il carattere si adatta automaticamente per garantire sempre la massima leggibilità."
      },
      {
        q: "Come viene garantita la casualità?",
        a: "Attraverso la Web Cryptography API del browser, lo standard crittografico globale che genera vera entropia casuale."
      },
      {
        q: "Posso eliminare il vincitore dopo ogni giro?",
        a: "Certamente, basta spuntare l'opzione 'Rimuovi Vincitore Dopo il Giro' per estrazioni continue senza duplicati."
      },
      {
        q: "Funziona su telefoni cellulari e tablet?",
        a: "Sì, l'interfaccia è interamente ottimizzata per touchscreen su dispositivi Android, iPhone, iPad e computer desktop."
      }
    ]
  },

  pt: {
    metaTitle: "Roleta Online Grátis | Girar Roleta de Nomes e Sorteio",
    metaDesc: "Gire a roleta online grátis sem cadastro! Cole até 500 nomes, números, letras ou cores, ajuste pesos 1x–20x, remova sorteados e baixe o histórico CSV.",
    keywords: "roleta, roleta online, girar roleta online, roleta de nomes, roleta de sorteio, roleta de números, roleta de letras, roleta de cores",
    heroTitle: "Roleta Online Grátis",
    heroHighlight: "Girar Roleta de Nomes, Números e Sorteios",
    heroSubtitle: "Cole até 500 nomes, números ou opções do Excel, ajuste os pesos de 1x a 20x e gire na hora. Sorteio imparcial direto no navegador via Web Cryptography API — para aulas, rifas, lives e brincadeiras, sem cadastro.",
    quickAnswer: "<strong>Como funciona a Roleta Online?</strong> Cole até 500 nomes, números ou tarefas direto no navegador, ajuste pesos opcionais (1x–20x) e clique em Girar. O sorteio usa <code>window.crypto.getRandomValues()</code> localmente sem enviar suas listas para servidores, com remoção automática, QR Code e exportação em CSV.",
    badges: {
      free: "100% Grátis Para Sempre",
      noSignup: "Sem Cadastro Necessário",
      secure: "Totalmente Justo e Aleatório",
      capacity: "Até 500 Nomes",
      device: "Otimizado para Celular e PC"
    },
    ui: {
      spinBtn: "GIRAR A ROLETA",
      spinning: "GIRANDO...",
      resultDecided: "A Roleta Decidiu",
      addNamesHeading: "🎯 Adicionar Nomes ou Opções",
      inputPlaceholder: "Digite um nome, opção ou prêmio...",
      addBtn: "Adicionar",
      bulkBtn: "📋 Colar Vários Nomes",
      bulkPlaceholder: "Cole vários nomes — um por linha ou separados por vírgula\nexemplo:\nLucas\nBeatriz\nGabriel\nMariana",
      bulkAddBtn: "Adicionar Tudo à Roleta",
      bulkCloseBtn: "Cancelar",
      clearAllBtn: "🗑 Limpar Tudo",
      shuffleBtn: "🔀 Embaralhar",
      sortBtn: "🔤 Ordenar A-Z",
      presetsHeading: "⚡ Modelos Rápidos",
      themesHeading: "🎨 Tema Visual",
      settingsHeading: "⚙️ Configurações e Áudio",
      spinDuration: "Tempo de Giro",
      soundEffect: "Efeito Sonoro",
      soundVolume: "Volume",
      soundTick: "Tique-taque Mecânico",
      soundDrum: "Redobre de Tambor",
      soundFanfare: "Fanfarra da Vitória",
      soundCheer: "Palmas da Plateia",
      soundNone: "Silencioso",
      removeWinner: "Remover Vencedor Após Giro",
      removeWinnerDesc: "Descarta automaticamente o item sorteado para realizar rodadas consecutivas sem repetição.",
      showConfetti: "Chuva de Confetes",
      showPopup: "Exibir Janela do Vencedor",
      allowDuplicates: "Permitir Duplicados",
      fairnessAudit: "Auditoria Criptográfica em Tempo Real",
      fairnessDesc: "Aleatoriedade gerada via Web Cryptography API, garantindo probabilidades matematicamente idênticas.",
      historyHeading: "📜 Histórico de Giros",
      noSpinsYet: "Nenhum giro realizado ainda. Clique no botão para começar!",
      clearHistory: "Limpar Histórico",
      exportHistory: "Exportar CSV",
      statsHeading: "📊 Estatísticas de Vencedores",
      statsDesc: "Acompanhe a probabilidade teórica versus o resultado real de cada fatia.",
      saveWheel: "💾 Salvar Roleta",
      loadWheel: "📂 Minhas Roletas Salvas",
      shareWheel: "🔗 Compartilhar Roleta",
      shareSuccess: "Link copiado para a área de transferência!",
      qrCodeTitle: "Escanear QR Code no Celular",
      embedTitle: "Incorporar Roleta no seu Site",
      fullscreen: "Tela Cheia",
      exitFullscreen: "Sair da Tela Cheia",
      spinAgain: "Girar Novamente",
      removeAndContinue: "Remover Vencedor e Continuar",
      winnerTitle: "Temos um Vencedor!"
    },
    presets: {
      yesno: { label: "Sim / Não", items: ["Sim ✅", "Não ❌", "Talvez 🤔", "Girar de novo 🔄"] },
      drawnames: { label: "Nomes", items: ["Miguel", "Helena", "Arthur", "Alice", "Bernardo", "Laura", "Heitor", "Manuela", "Davi", "Sophia"] },
      dinner: { label: "Jantar", items: ["Pizza 🍕", "Hambúrguer 🍔", "Sushi 🍣", "Churrasco 🥩", "Comida Italiana 🍝", "Comida Japonesa 🍱", "Salada Leve 🥗", "Pastel 🥟"] },
      numbers: { label: "1 a 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Verdade / Desafio", items: ["Verdade 🤫", "Desafio 😈", "Verdade 🤫", "Desafio 😈", "Super Desafio 🔥", "Passa a Vez 🌟"] },
      giveaway: { label: "Sorteio", items: ["1º Prêmio 🏆", "2º Prêmio 🥈", "3º Prêmio 🥉", "Vale Compras 🎁", "Caixa Misteriosa 📦", "Tente Outra Vez 🍀"] }
    },
    howTo: {
      title: "Como Usar a Roleta de Sorteio Online",
      subtitle: "Configure e gire sua roleta personalizada em 4 etapas práticas.",
      steps: [
        {
          num: 1,
          title: "Adicione os Nomes",
          desc: "Digite nomes um por um ou use a opção 'Colar Vários Nomes' para importar listas de alunos ou participantes de sorteios."
        },
        {
          num: 2,
          title: "Ajuste Cores e Efeitos",
          desc: "Escolha uma combinação de cores moderna e selecione efeitos sonoros empolgantes como o tique-taque de roleta ou redobre de tambor."
        },
        {
          num: 3,
          title: "Gire a Roleta",
          desc: "Pressione 'GIRAR A ROLETA'. A animação física desacelera de maneira realista até repousar na fatia vencedora com confetes."
        },
        {
          num: 4,
          title: "Gerencie e Compartilhe",
          desc: "Elimine o sorteado para as próximas rodadas, consulte o histórico ou gere um link/código QR para seus espectadores."
        }
      ]
    },
    useCases: {
      title: "Onde Usar: Sala de Aula, Redes Sociais e Trabalho",
      subtitle: "A ferramenta de sorteio preferida por milhares de usuários diariamente.",
      items: [
        {
          icon: "🏫",
          title: "Professores e Sala de Aula",
          desc: "Chame alunos para responder perguntas sem preferências, crie equipes de trabalho e organize apresentações de forma dinâmica."
        },
        {
          icon: "🎁",
          title: "Sorteios em Lives e Redes Sociais",
          desc: "Faça sorteios ao vivo no Instagram, YouTube ou Twitch com total clareza e credibilidade para seu público."
        },
        {
          icon: "💼",
          title: "Empresas e Reuniões Ágeis",
          desc: "Defina quem fala primeiro nas reuniões diárias e divida plantões ou tarefas de equipe de maneira imparcial."
        },
        {
          icon: "🎉",
          title: "Amigos e Noite de Jogos",
          desc: "Decida o restaurante do jantar ou o primeiro jogador da rodada sem brigas ou indecisões prolongadas."
        }
      ]
    },
    fairness: {
      title: "Segurança Criptográfica e Imparcialidade",
      subtitle: "Sorteios matematicamente perfeitos e sem manipulações.",
      text1: "Muitos sorteadores simples usam algoritmos fracos. Nossa roleta opera com a Web Cryptography API do próprio navegador (<code>window.crypto.getRandomValues</code>).",
      text2: "A aleatoriedade é gerada a partir da entropia física do sistema operacional do seu dispositivo. Cada fatia possui exata igualdade de chances:",
      formula: "Probabilidade = 1 / Total_de_Fatias",
      text3: "O ponteiro aponta com exatidão matemática para a fatia contemplada, assegurando lisura em qualquer sorteio ou premiação."
    },
    comparison: {
      title: "Comparativo: Roleta Online vs Outros Métodos",
      headers: ["Critério", "Nossa Roleta Online", "Dados / Moeda", "Sorteador Simples de Números", "Papéis no Chapéu"],
      rows: [
        ["Emoção e Suspense", "⭐⭐⭐⭐⭐ Altíssimo (Animação e Áudio)", "⭐⭐⭐ Médio (Apenas presencial)", "⭐ Baixo (Texto estático)", "⭐⭐⭐ Médio (Sorteio manual)"],
        ["Capacidade de Opções", "Até 500 nomes com texto longo", "6 a 20 lados no máximo", "Apenas números", "Demorado para escrever à mão"],
        ["Garantia de Neutralidade", "Criptografia CSPRNG de alta precisão", "Pode ter vícios no arremesso", "Pseudoaleatoriedade comum", "Pode sofrer manipulação ao tirar"],
        ["Exclusão de Vencedores", "Automática em 1 clique", "Exige novo arremesso", "Precisa reprogramar", "Descarte manual de papéis"]
      ]
    },
    faqs: [
      {
        q: "A roleta online é gratuita mesmo?",
        a: "Sim, 100% gratuita para sempre, sem limite de giros, sem cadastro, aplicativo ou taxas ocultas."
      },
      {
        q: "Quantos nomes ou itens posso colocar na roleta?",
        a: "Você pode adicionar até 500 nomes, números ou opções por roleta. O texto se ajusta automaticamente para manter a leitura nítida."
      },
      {
        q: "Posso dar mais chances ou peso diferente para algumas fatias?",
        a: "Sim. Clique nos botões + e - ao lado de cada item para ajustar o peso entre 1x e 20x e acompanhar a porcentagem exata em tempo real."
      },
      {
        q: "Como sei que o resultado é realmente aleatório?",
        a: "Utilizamos a Web Cryptography API (window.crypto.getRandomValues) do navegador com amostragem de rejeição, impedindo viés ou manipulação."
      },
      {
        q: "Posso remover o vencedor para girar de novo sem repetir?",
        a: "Sim, ative 'Remover Vencedor Após Giro' nas configurações para eliminar automaticamente quem já foi sorteado e exportar o histórico em CSV."
      },
      {
        q: "Funciona bem no celular?",
        a: "Sim, a ferramenta é totalmente responsiva para Android, iPhone, iPad, Chromebooks escolares e computadores."
      }
    ]
  },

  pl: {
    metaTitle: "Koło Fortuny Online Za Darmo | Losowanie Imion & Generator",
    metaDesc: "Zakręć kołem fortuny online za darmo: wpisz do 500 imion lub opcji. Koło imion do losowań w szkole, konkursów, loterii i decyzji. Bez logowania i rejestracji.",
    keywords: "koło fortuny online, koło fortuny za darmo, losowanie imion, generator losowy, koło imion, losowy wybór, generator imion, koło losujące, koło tak czy nie, losowanie online, koło fortuny dla nauczycieli, generator liczb losowych, koło decyzji, losowy selektor, losowanie konkurs",
    heroTitle: "Koło Fortuny Online Za Darmo",
    heroHighlight: "Koło Imion & Losowy Generator Wyborów",
    heroSubtitle: "Wpisz do 500 imion, liczb lub opcji i zakręć kołem fortuny dla sprawiedliwych, losowych decyzji opartych na kryptografii. Darmowe narzędzie dla nauczycieli, konkursów online, losowań i gier towarzyskich — bez rejestracji.",
    quickAnswer: "<strong>Czym jest Koło Fortuny Online?</strong> Darmowe narzędzie losujące w przeglądarce, oparte na kryptografii (<code>crypto.getRandomValues</code>). Dodaj do 500 wpisów, dostosuj kolory i dźwięki, automatycznie usuwaj zwycięzców i udostępniaj przez link lub kod QR.",
    badges: {
      free: "100% Za Darmo Zawsze",
      noSignup: "Bez Rejestracji",
      secure: "Kryptograficznie Uczciwe",
      capacity: "Do 500 Wpisów",
      device: "Działa na Telefonie i PC"
    },
    ui: {
      spinBtn: "ZAKRĘĆ KOŁEM",
      spinning: "LOSOWANIE...",
      resultDecided: "Koło Zdecydowało",
      addNamesHeading: "🎯 Dodaj Imiona lub Opcje",
      inputPlaceholder: "Wpisz imię, wybór lub nagrodę...",
      addBtn: "Dodaj",
      bulkBtn: "📋 Wklej Wiele Imion",
      bulkPlaceholder: "Wklej wiele imion — po jednym w wierszu lub po przecinku\nnp.:\nJan\nAnna\nPiotr\nZofia",
      bulkAddBtn: "Dodaj Wszystko do Koła",
      bulkCloseBtn: "Anuluj",
      clearAllBtn: "🗑 Wyczyść Wszystko",
      shuffleBtn: "🔀 Wymieszaj",
      sortBtn: "🔤 Sortuj A-Z",
      presetsHeading: "⚡ Szybkie Szablony",
      themesHeading: "🎨 Motyw Kolorystyczny",
      settingsHeading: "⚙️ Ustawienia i Dźwięk",
      spinDuration: "Czas Kręcenia",
      soundEffect: "Efekt Dźwiękowy",
      soundVolume: "Głośność",
      soundTick: "Mechaniczne Tykanie",
      soundDrum: "Werbel Perkusyjny",
      soundFanfare: "Fanfara Zwycięstwa",
      soundCheer: "Oklaski Publiczności",
      soundNone: "Wyciszony",
      removeWinner: "Usuń Zwycięzcę Po Losowaniu",
      removeWinnerDesc: "Automatycznie usuwa wylosowaną opcję przed kolejnym kręceniem.",
      showConfetti: "Konfetti po Wygranej",
      showPopup: "Pokaż Okno Zwycięzcy",
      allowDuplicates: "Zezwalaj na Duplikaty",
      fairnessAudit: "Kryptograficzna Weryfikacja",
      fairnessDesc: "Losowość oparta na Web Cryptography API gwarantuje równe szanse dla każdej opcji.",
      historyHeading: "📜 Historia Losowań",
      noSpinsYet: "Brak losowań. Naciśnij przycisk, aby zakręcić!",
      clearHistory: "Wyczyść Historię",
      exportHistory: "Eksportuj CSV",
      statsHeading: "📊 Statystyka Wyników",
      statsDesc: "Porównaj prawdopodobieństwo teoretyczne z rzeczywistą liczbą trafień.",
      saveWheel: "💾 Zapisz Koło",
      loadWheel: "📂 Moje Zapisane Koła",
      shareWheel: "🔗 Udostępnij Koło",
      shareSuccess: "Link skopiowany do schowka!",
      qrCodeTitle: "Zeskanuj Kod QR",
      embedTitle: "Osadź Koło na Swojej Stronie",
      fullscreen: "Pełny Ekran",
      exitFullscreen: "Wyłącz Pełny Ekran",
      spinAgain: "Zakręć Ponownie",
      removeAndContinue: "Usuń Zwycięzcę i Kontynuuj",
      winnerTitle: "Mamy Zwycięzcę!"
    },
    presets: {
      yesno: { label: "Tak / Nie", items: ["Tak ✅", "Nie ❌", "Może 🤔", "Zapytaj ponownie 🔄"] },
      drawnames: { label: "Imiona", items: ["Antoni", "Zuzanna", "Jan", "Zofia", "Aleksander", "Hanna", "Franciszek", "Maja", "Jakub", "Laura"] },
      dinner: { label: "Obiad", items: ["Pizza 🍕", "Sushi 🍣", "Pierogi 🥟", "Burger 🍔", "Kuchnia Włoska 🍝", "Kebab 🥙", "Sałatka 🥗", "Schabowy 🥩"] },
      numbers: { label: "1 do 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Prawda / Wyzwanie", items: ["Prawda 🤫", "Wyzwanie 😈", "Prawda 🤫", "Wyzwanie 😈", "Podwójne Wyzwanie 🔥", "Koło Ratunkowe 🌟"] },
      giveaway: { label: "Konkurs", items: ["Nagroda Główna 🏆", "2. Miejsce 🥈", "3. Miejsce 🥉", "Karta Podarunkowa 🎁", "Niespodzianka 📦", "Spróbuj Ponownie 🍀"] }
    },
    howTo: {
      title: "Jak Używać Koła Fortuny Online",
      subtitle: "Stwórz i zakręć własnym kołem imion w 4 prostych krokach.",
      steps: [
        {
          num: 1,
          title: "Wpisz Opcje lub Imiona",
          desc: "Wpisuj opcje pojedynczo lub użyj funkcji 'Wklej Wiele Imion', aby szybko załadować całą listę uczniów lub uczestników."
        },
        {
          num: 2,
          title: "Dopasuj Kolory i Dźwięk",
          desc: "Wybierz atrakcyjną paletę kolorów oraz realistyczne efekty dźwiękowe tykającego koła lub werbla."
        },
        {
          num: 3,
          title: "Zakręć Kołem",
          desc: "Kliknij 'ZAKRĘĆ KOŁEM'. Płynna animacja fizyczna wyhamuje na wylosowanym polu, a ekran rozbłyśnie konfetti."
        },
        {
          num: 4,
          title: "Zarządzaj i Udostępniaj",
          desc: "Usuń zwycięzcę przed kolejną rundą, sprawdź statystyki lub wygeneruj link i kod QR dla widzów."
        }
      ]
    },
    useCases: {
      title: "Zastosowania: Szkoła, Praca i Rozrywka",
      subtitle: "Niezastąpione narzędzie w klasie, na imprezie i w biurze.",
      items: [
        {
          icon: "🏫",
          title: "Szkoła i Lekcje",
          desc: "Sprawiedliwe odpowiadanie przy tablicy, podział na grupy i wybór kolejności prezentacji bez faworyzowania."
        },
        {
          icon: "🎁",
          title: "Konkursy i Transmisje na Żywo",
          desc: "Przejrzyste losowanie nagród przed kamerą na YouTube, Twitchu czy TikToku."
        },
        {
          icon: "💼",
          title: "Praca i Spotkania Zespołowe",
          desc: "Losowanie osoby prowadzącej spotkanie czy sprawiedliwy podział dyżurów w firmie."
        },
        {
          icon: "🎉",
          title: "Gry Towarzyskie i Decyzje",
          desc: "Koniec sporów o to, co zamówić na obiad lub kto zaczyna grę planszową."
        }
      ]
    },
    fairness: {
      title: "Uczciwość i Bezpieczeństwo Kryptograficzne",
      subtitle: "Matematycznie precyzyjne losowanie bez manipulacji.",
      text1: "Nasz mechanizm korzysta z natywnego interfejsu Web Cryptography API (<code>window.crypto.getRandomValues</code>), zapewniającego prawdziwą losowość.",
      text2: "Wartości losowe czerpane są bezpośrednio ze sprzętowych źródeł entropii systemu operacyjnego:",
      formula: "Prawdopodobieństwo = 1 / Liczba_Pól",
      text3: "Strzałka wskazuje wylosowany element ze stuprocentową dokładnością, gwarantując uczciwość w każdym konkursie."
    },
    comparison: {
      title: "Porównanie: Koło Online a Inne Metody",
      headers: ["Cecha", "Nasze Koło Online", "Kostki / Rzut Monetą", "Zwykły Generator Liczb", "Karteczki w Czapce"],
      rows: [
        ["Napięcie Wizualne", "⭐⭐⭐⭐⭐ Bardzo Duże (Dźwięki i Fizyka)", "⭐⭐⭐ Średnie (Tylko na żywo)", "⭐ Niskie (Sam suchy tekst)", "⭐⭐⭐ Średnie (Ręczne losowanie)"],
        ["Pojemność Opcji", "Aż do 500 własnych wpisów", "Maksymalnie 6 do 20 ścianek", "Tylko liczby", "Czasochłonne pisanie ręczne"],
        ["Uczciwość i Przejrzystość", "Kryptografia CSPRNG (Najwyższa)", "Zależna od siły rzutu", "Zwykłe Math.random", "Ryzyko nierównego wymieszania"],
        ["Usuwanie Wygranych", "Automatyczne jednym kliknięciem", "Wymaga ponownego rzutu", "Wymaga zmiany ustawień", "Ręczne odkładanie kartek"]
      ]
    },
    faqs: [
      {
        q: "Czy koło fortuny jest całkowicie darmowe?",
        a: "Tak, w 100% bezpłatne bez limitów losowań, rejestracji i ukrytych opłat."
      },
      {
        q: "Ile imion mogę dodać do koła?",
        a: "Możesz dodać do 500 imion. Wielkość czcionki dostosowuje się automatycznie."
      },
      {
        q: "Skąd pewność, że losowanie jest uczciwe?",
        a: "Stosujemy przeglądarkowe Web Cryptography API gwarantujące brak jakichkolwiek powtarzalnych wzorców."
      },
      {
        q: "Czy mogę usuwać wylosowane osoby?",
        a: "Tak, wystarczy zaznaczyć 'Usuń Zwycięzcę Po Losowaniu', aby prowadzić eliminacje bez powtórek."
      },
      {
        q: "Czy narzędzie działa na telefonach komórkowych?",
        a: "Tak, strona jest w pełni dostosowana do ekranów dotykowych na Androidzie, iOS oraz komputerach."
      }
    ]
  },

  vi: {
    metaTitle: "Vòng Quay May Mắn Online Miễn Phí | Quay Tên & Chọn Số",
    metaDesc: "Quay vòng quay may mắn online miễn phí không cần đăng ký! Dán tới 500 tên, số hoặc câu hỏi, chỉnh trọng số 1x–20x, xóa người trúng và xuất file CSV.",
    keywords: "vòng quay may mắn online, vong quay may man online, vòng quay may mắn miễn phí, quay số ngẫu nhiên, vòng quay chọn tên, vòng quay quyết định",
    heroTitle: "Vòng Quay May Mắn Online Miễn Phí",
    heroHighlight: "Vòng Quay Chọn Tên & Bốc Thăm Ngẫu Nhiên",
    heroSubtitle: "Dán tối đa 500 tên, số hoặc lựa chọn và quay ngay không cần tài khoản. Tùy chỉnh trọng số 1x–20x, tự xóa người đã trúng và đảm bảo công bằng với thuật toán Web Cryptography API.",
    quickAnswer: "<strong>Vòng Quay May Mắn Online hoạt động ra sao?</strong> Công cụ quay số miễn phí trên trình duyệt sử dụng thuật toán mã hóa (<code>window.crypto.getRandomValues()</code>). Hỗ trợ dán tới 500 mục từ Excel, chỉnh tỷ lệ 1x–20x, tự loại người thắng, xuất file CSV và chia sẻ qua mã QR hoặc link nhúng.",
    badges: {
      free: "100% Miễn Phí Vĩnh Viễn",
      noSignup: "Không Cần Đăng Ký",
      secure: "Thuật Toán Công Bằng",
      capacity: "Tối Đa 500 Tên",
      device: "Tối Ưu Cho Điện Thoại & Máy Tính"
    },
    ui: {
      spinBtn: "QUAY VÒNG QUAY",
      spinning: "ĐANG QUAY...",
      resultDecided: "Vòng Quay Đã Quyết Định",
      addNamesHeading: "🎯 Thêm Tên Hoặc Lựa Chọn",
      inputPlaceholder: "Nhập tên, lựa chọn hoặc giải thưởng...",
      addBtn: "Thêm",
      bulkBtn: "📋 Dán Hàng Loạt",
      bulkPlaceholder: "Dán danh sách nhiều tên — mỗi tên một dòng hoặc cách nhau bằng dấu phẩy\nví dụ:\nNguyễn Văn An\nTrần Thị Mai\nLê Hoàng Nam\nPhạm Minh Tuấn",
      bulkAddBtn: "Thêm Tất Cả Vào Vòng Quay",
      bulkCloseBtn: "Hủy",
      clearAllBtn: "🗑 Xóa Tất Cả",
      shuffleBtn: "🔀 Xáo Trộn",
      sortBtn: "🔤 Sắp Xếp A-Z",
      presetsHeading: "⚡ Mẫu Có Sẵn",
      themesHeading: "🎨 Giao Diện Màu Sắc",
      settingsHeading: "⚙️ Cài Đặt & Âm Thanh",
      spinDuration: "Thời Gian Quay",
      soundEffect: "Hiệu Ứng Âm Thanh",
      soundVolume: "Âm Lượng",
      soundTick: "Tiếng Tách Cơ Học",
      soundDrum: "Hồi Trống Hồi Hộp",
      soundFanfare: "Kèn Chiến Thắng",
      soundCheer: "Tiếng Vỗ Tay",
      soundNone: "Tắt Tiếng",
      removeWinner: "Xóa Người Thắng Sau Khi Quay",
      removeWinnerDesc: "Tự động loại bỏ tên trúng giải để tiếp tục quay những người còn lại.",
      showConfetti: "Pháo Giấy Khi Thắng",
      showPopup: "Hiện Hộp Thoại Người Thắng",
      allowDuplicates: "Cho Phép Trùng Lặp",
      fairnessAudit: "Xác Thực Ngẫu Nhiên",
      fairnessDesc: "Tạo số ngẫu nhiên bằng Web Cryptography API, đảm bảo cơ hội tuyệt đối công bằng cho mọi ô.",
      historyHeading: "📜 Lịch Sử Quay",
      noSpinsYet: "Chưa có lượt quay nào. Hãy bấm nút để quay!",
      clearHistory: "Xóa Lịch Sử",
      exportHistory: "Xuất File CSV",
      statsHeading: "📊 Thống Kê Người Trúng",
      statsDesc: "So sánh tỉ lệ lý thuyết với số lần trúng thực tế của từng lựa chọn.",
      saveWheel: "💾 Lưu Vòng Quay",
      loadWheel: "📂 Vòng Quay Đã Lưu",
      shareWheel: "🔗 Chia Sẻ Vòng Quay",
      shareSuccess: "Đã sao chép liên kết vào bộ nhớ tạm!",
      qrCodeTitle: "Quét Mã QR Bằng Điện Thoại",
      embedTitle: "Nhúng Vòng Quay Vào Website",
      fullscreen: "Toàn Màn Hình",
      exitFullscreen: "Thoát Toàn Màn Hình",
      spinAgain: "Quay Lại",
      removeAndContinue: "Xóa Tên & Tiếp Tục",
      winnerTitle: "Chúc Mừng Người Chiến Thắng!"
    },
    presets: {
      yesno: { label: "Có / Không", items: ["Có ✅", "Không ❌", "Có Thể 🤔", "Hỏi Lại 🔄"] },
      drawnames: { label: "Danh Sách Tên", items: ["Nguyễn An", "Trần Bình", "Lê Chi", "Phạm Dũng", "Hoàng Giang", "Vũ Hằng", "Đặng Khoa", "Bùi Lan", "Đỗ Minh", "Hồ Nga"] },
      dinner: { label: "Hôm Nay Ăn Gì", items: ["Phở Bò 🍜", "Bún Chả 🍲", "Cơm Tấm 🍚", "Pizza 🍕", "Gà Rán 🍗", "Bánh Mì 🥖", "Bún Đậu Mắm Tôm 🥢", "Lẩu Thái 🥘"] },
      numbers: { label: "Số 1 Đến 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Thật Hay Thách", items: ["Nói Thật 🤫", "Hành Động 😈", "Nói Thật 🤫", "Hành Động 😈", "Thách Kép 🔥", "Miễn Phạt 🌟"] },
      giveaway: { label: "Bốc Thăm", items: ["Giải Nhất 🏆", "Giải Nhì 🥈", "Giải Ba 🥉", "Voucher 🎁", "Hộp Bí Ẩn 📦", "Chúc May Mắn 🍀"] }
    },
    howTo: {
      title: "Cách Dùng Vòng Quay May Mắn Online",
      subtitle: "Tạo và quay vòng quay của riêng bạn trong 4 bước đơn giản.",
      steps: [
        {
          num: 1,
          title: "Nhập Danh Sách Tên",
          desc: "Nhập từng tên hoặc chọn 'Dán Hàng Loạt' để nhập cả danh sách lớp từ Excel chỉ trong một giây."
        },
        {
          num: 2,
          title: "Tùy Chỉnh Màu Sắc & Âm Thanh",
          desc: "Chọn bảng màu sắc sống động và âm thanh kịch tính như tiếng tách bánh xe hoặc hồi trống dồn dập."
        },
        {
          num: 3,
          title: "Bấm Quay",
          desc: "Nhấn nút 'QUAY VÒNG QUAY'. Hiệu ứng chuyển động giảm tốc mượt mà sẽ dừng lại đúng người chiến thắng cùng pháo hoa rực rỡ."
        },
        {
          num: 4,
          title: "Xem Kết Quả & Chia Sẻ",
          desc: "Tự động loại người thắng để quay tiếp, theo dõi lịch sử hoặc gửi liên kết/mã QR cho bạn bè cùng xem."
        }
      ]
    },
    useCases: {
      title: "Ứng Dụng Thực Tế Trong Đời Sống",
      subtitle: "Giải pháp bốc thăm công bằng cho giáo dục, công việc và giải trí.",
      items: [
        {
          icon: "🏫",
          title: "Dành Cho Giáo Viên & Lớp Học",
          desc: "Gọi học sinh trả lời bài tập ngẫu nhiên, chia nhóm thảo luận và tạo không khí học tập hào hứng, công bằng."
        },
        {
          icon: "🎁",
          title: "Livestream & Minigame",
          desc: "Tổ chức giveaway trực tiếp trên Facebook, TikTok hay YouTube cực kỳ minh bạch và chuyên nghiệp."
        },
        {
          icon: "💼",
          title: "Họp Nhóm & Doanh Nghiệp",
          desc: "Chọn người thuyết trình đầu tiên trong các buổi họp hoặc phân công ca trực một cách khách quan."
        },
        {
          icon: "🎉",
          title: "Giải Trí & Quyết Định Hằng Ngày",
          desc: "Giải quyết câu hỏi 'hôm nay ăn gì' hay ai phải rửa bát trong nháy mắt mà không cần tranh luận."
        }
      ]
    },
    fairness: {
      title: "Đảm Bảo Tính Ngẫu Nhiên Tuyệt Đối",
      subtitle: "Thuật toán chuẩn mực, minh bạch và không thiên vị.",
      text1: "Không như các công cụ đơn giản dùng hàm ngẫu nhiên thông thường, chúng tôi sử dụng Web Cryptography API (<code>window.crypto.getRandomValues</code>).",
      text2: "Nguồn ngẫu nhiên được lấy trực tiếp từ phần cứng máy tính hoặc điện thoại, đảm bảo xác suất đồng đều cho mỗi ô:",
      formula: "Xác Suất = 1 / Tổng_Số_Ô",
      text3: "Kim chỉ dừng lại chính xác tuyệt đối vào ô được thuật toán chọn, đảm bảo uy tín cho mọi chương trình bốc thăm."
    },
    comparison: {
      title: "So Sánh: Vòng Quay Online Với Cách Truyền Thống",
      headers: ["Tiêu Chí", "Vòng Quay Online Của Chúng Tôi", "Xúc Xắc / Tung Đồng Xu", "Tạo Số Ngẫu Nhiên", "Bốc Thăm Bằng Giấy"],
      rows: [
        ["Độ Hồi Hộp", "⭐⭐⭐⭐⭐ Cực Cao (Âm thanh & Hiệu ứng)", "⭐⭐⭐ Trung Bình (Chỉ bàn ăn)", "⭐ Rất Thấp (Chỉ là chữ số)", "⭐⭐⭐ Trung Bình (Mở giấy tay)"],
        ["Số Lượng Lựa Chọn", "Lên đến 500 tên tùy biến", "Tối đa 6 đến 20 mặt", "Chỉ số, không có chữ", "Tốn công viết từng mẩu giấy"],
        ["Độ Minh Bạch", "Mã hóa CSPRNG cấp cao", "Dễ lệch do góc ném", "Hàm ngẫu nhiên thông thường", "Dễ gian lận khi bốc"],
        ["Tự Loại Người Thắng", "Tự động chỉ với 1 cú nhấp", "Phải tung lại", "Phải cấu hình lại bộ lọc", "Phải bỏ giấy thủ công"]
      ]
    },
    faqs: [
      {
        q: "Công cụ này có hoàn toàn miễn phí không?",
        a: "Có, miễn phí 100% không giới hạn lượt quay, không cần đăng ký tài khoản."
      },
      {
        q: "Có thể nhập tối đa bao nhiêu tên?",
        a: "Bạn có thể nhập lên đến 500 tên hoặc lựa chọn. Kích thước chữ sẽ tự động co giãn để đảm bảo luôn rõ ràng."
      },
      {
        q: "Làm sao biết vòng quay không bị gian lận?",
        a: "Nhờ sử dụng Web Cryptography API tích hợp sẵn trong trình duyệt, mang lại kết quả ngẫu nhiên hoàn toàn độc lập."
      },
      {
        q: "Tôi có thể xóa tên người vừa trúng không?",
        a: "Có, chỉ cần bật tính năng 'Xóa Người Thắng Sau Khi Quay' để quay tiếp các giải phụ mà không bị trùng lặp."
      },
      {
        q: "Dùng trên điện thoại có mượt không?",
        a: "Rất mượt mà, công cụ được tối ưu riêng cho màn hình cảm ứng iPhone, Android và máy tính."
      }
    ]
  },

  zh: {
    metaTitle: "在线抽奖转盘生成器免费 — 幸运大转盘与随机点名器",
    metaDesc: "免费在线抽奖转盘生成器与随机大转盘工具：支持 Excel 批量粘贴最多 500 个名单、1x–20x 权重调节、中奖自动剔除与 CSV 导出，免注册打开即用。",
    keywords: "在线抽奖转盘生成器, 随机转盘生成器, 幸运大转盘在线生成器, 在线大转盘, 转盘点名器, 幸运轮盘",
    heroTitle: "在线大转盘抽奖与随机转盘生成器",
    heroHighlight: "免费幸运转盘与课堂随机点名器",
    heroSubtitle: "支持从 Excel 批量粘贴最多 500 个名单或选项，内置 1x–20x 权重调节与密码学级（Web Cryptography）公平随机算法，适用于课堂互动、直播抽奖及日常决策，无需登录。",
    quickAnswer: "<strong>什么是“在线抽奖转盘生成器”？</strong> 这是一款完全免费、免注册的网页随机转盘，调用浏览器底层的 <code>window.crypto.getRandomValues()</code> 密码学随机算法与拒绝采样技术。支持最多 500 个选项、1x–20x 概率权重、抽后自动剔除、CSV 纪录导出、二维码及无广告嵌入（<code>?embed=1</code>）。",
    badges: {
      free: "100% 永久免费",
      noSignup: "无需注册登录",
      secure: "密码学级绝对公平",
      capacity: "最高支持500个名字",
      device: "手机与电脑完美适配"
    },
    ui: {
      spinBtn: "转动大转盘",
      spinning: "转动中...",
      resultDecided: "轮盘已做出决定",
      addNamesHeading: "🎯 添加名字或选项",
      inputPlaceholder: "输入名字、选项或奖品...",
      addBtn: "添加",
      bulkBtn: "📋 批量粘贴名字",
      bulkPlaceholder: "批量粘贴多个名字 — 每行一个或用逗号隔开\n例如：\n张伟\n王芳\n李娜\n刘洋",
      bulkAddBtn: "全部加入转盘",
      bulkCloseBtn: "取消",
      clearAllBtn: "🗑 清空所有",
      shuffleBtn: "🔀 随机打乱",
      sortBtn: "🔤 字母排序",
      presetsHeading: "⚡ 快捷预设",
      themesHeading: "🎨 轮盘主题",
      settingsHeading: "⚙️ 个性化设置与音效",
      spinDuration: "转动时长",
      soundEffect: "转动音效",
      soundVolume: "音量调节",
      soundTick: "机械转盘滴答声",
      soundDrum: "悬疑擂鼓声",
      soundFanfare: "胜利号角",
      soundCheer: "全场欢呼喝彩",
      soundNone: "静音",
      removeWinner: "中奖后自动剔除",
      removeWinnerDesc: "抽出中奖者后自动从列表中移除，适合多轮抽奖不重复。",
      showConfetti: "中奖礼花特效",
      showPopup: "弹出中奖提示框",
      allowDuplicates: "允许重复选项",
      fairnessAudit: "密码学随机性验证",
      fairnessDesc: "基于浏览器的Web Cryptography API底层硬件熵源，确保每一个扇区中奖概率完全均等。",
      historyHeading: "📜 转动历史记录",
      noSpinsYet: "暂无抽奖记录，点击上方按钮开始转动！",
      clearHistory: "清空记录",
      exportHistory: "导出CSV表格",
      statsHeading: "📊 出现频次统计",
      statsDesc: "实时对比理论概率与实际抽中次数。",
      saveWheel: "💾 保存当前转盘",
      loadWheel: "📂 我保存的转盘",
      shareWheel: "🔗 分享转盘",
      shareSuccess: "分享链接已复制到剪贴板！",
      qrCodeTitle: "手机扫码打开",
      embedTitle: "嵌入到您的网站",
      fullscreen: "全屏展示模式",
      exitFullscreen: "退出全屏",
      spinAgain: "再次转动",
      removeAndContinue: "移除中奖项并继续",
      winnerTitle: "🎉 恭喜中奖！"
    },
    presets: {
      yesno: { label: "是 / 否", items: ["是 ✅", "否 ❌", "也许 🤔", "再问一次 🔄"] },
      drawnames: { label: "常用名字", items: ["张伟", "王芳", "李伟", "王秀英", "李秀英", "李娜", "张秀英", "刘伟", "张敏", "李强"] },
      dinner: { label: "今天吃什么", items: ["火锅 🍲", "烧烤 🍢", "麻辣烫 🍜", "披萨 🍕", "汉堡 🍔", "寿司 🍣", "家常小炒 🍚", "减脂沙拉 🥗"] },
      numbers: { label: "数字 1 到 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "真心话大冒险", items: ["真心话 🤫", "大冒险 😈", "真心话 🤫", "大冒险 😈", "双倍冒险 🔥", "豁免卡 🌟"] },
      giveaway: { label: "奖品抽奖", items: ["一等奖 🏆", "二等奖 🥈", "三等奖 🥉", "精美礼品 🎁", "盲盒大礼 📦", "谢谢参与 🍀"] }
    },
    howTo: {
      title: "如何使用在线幸运大转盘",
      subtitle: "仅需四个简捷步骤，轻松完成个性化抽奖。",
      steps: [
        {
          num: 1,
          title: "添加名单或选项",
          desc: "逐个输入名字，或点击'批量粘贴'一次性从Excel导入整班学生或客户名单。"
        },
        {
          num: 2,
          title: "自选主题与转盘音效",
          desc: "选择您喜爱的色彩方案（如经典赌场、霓虹派对），设置齿轮滴答声或激昂鼓点。"
        },
        {
          num: 3,
          title: "点击转动轮盘",
          desc: "点击'转动大转盘'，逼真的物理惯性动画将平滑减速，最终在彩带漫天飞舞中定格在获奖选项。"
        },
        {
          num: 4,
          title: "处理结果与一键分享",
          desc: "选择自动剔除获奖者继续下一轮，或生成二维码让现场观众用手机直接扫码打开。"
        }
      ]
    },
    useCases: {
      title: "广泛的应用场景：教育、企业与娱乐",
      subtitle: "满足不同群体在各种决策场合的抽签需求。",
      items: [
        {
          icon: "🏫",
          title: "教师课堂随机点名",
          desc: "在大屏幕或电子白板上使用大转盘随机点名提问、分配小组任务，激发学生参与热情且公开公正。"
        },
        {
          icon: "🎁",
          title: "直播抽奖与自媒体互动",
          desc: "在抖音、B站、快手等平台直播抽奖时使用，画面清晰吸睛，过程透明可信。"
        },
        {
          icon: "💼",
          title: "敏捷例会与企业团建",
          desc: "随机抽取晨会发言顺序、分配轮值值日生或年会抽奖，轻松打破僵局。"
        },
        {
          icon: "🎉",
          title: "聚会游戏与日常纠结",
          desc: "聚餐不知道吃什么、聚会真心话大冒险谁受罚？转一转立马得出结论，免去无休止的讨论。"
        }
      ]
    },
    fairness: {
      title: "密码学级安全与数学公平性",
      subtitle: "杜绝任何程序内定或偏颇，确保真正纯随机。",
      text1: "普通的抽奖工具往往依赖简单的伪随机算法。我们采用国际标准的Web Cryptography API（<code>window.crypto.getRandomValues</code>）。",
      text2: "直接从操作系统的硬件中断噪声等物理源采集熵值，保证每个扇区拥有完全相同的数学概率：",
      formula: "中奖概率 = 1 / 扇区总数量",
      text3: "转盘指针所指位置与算法计算的中奖索引完美对齐，为您提供毫无争议的公信力保障。"
    },
    comparison: {
      title: "对比：在线大转盘 vs 传统抽签方法",
      headers: ["对比维度", "我们的在线大转盘", "传统骰子 / 抛硬币", "简单数字随机生成器", "纸条抽签抓阄"],
      rows: [
        ["视觉悬念与氛围", "⭐⭐⭐⭐⭐ 极佳（物理减速与震撼音效）", "⭐⭐⭐ 一般（仅限现场桌面）", "⭐ 极低（仅静态单调数字）", "⭐⭐⭐ 一般（手动展开纸条）"],
        ["选项容量上限", "高达500个自定义文字选项", "最多仅6到20面", "仅限阿拉伯数字", "手工书写极为繁琐费时"],
        ["公平与防作弊", "密码学CSPRNG认证算法", "受投掷角度与磨损影响", "普通伪随机算法易有规律", "易受纸条手感和折痕作弊"],
        ["中奖自动剔除", "一键自动移除继续下轮", "必须反复重新掷投", "需手动重新设置筛选", "必须手工丢弃纸条"]
      ]
    },
    faqs: [
      {
        q: "这个在线大转盘是完全免费的吗？",
        a: "是的，100%完全免费，转动次数不限，无需下载App，也无需注册账号。"
      },
      {
        q: "我最多可以在轮盘里添加多少个名字？",
        a: "最多可支持500个名字或选项。扇区文字会自适应缩放排版，保证清晰美观。"
      },
      {
        q: "如何确保转盘结果绝对公平真实？",
        a: "我们调用浏览器底层的现代密码学随机数接口，杜绝任何人工暗箱操作或规律预测。"
      },
      {
        q: "抽中名字后可以自动移除吗？",
        a: "可以！只需开启【中奖后自动剔除】功能，抽出的名字就会自动离开转盘，非常适合多重奖项抽取。"
      },
      {
        q: "在手机和平板上可以使用吗？",
        a: "完全支持！网页针对苹果iOS、安卓手机、平板以及各种尺寸的电脑屏幕进行了深度触控与全屏优化。"
      }
    ]
  }
};

// Merge Tier-1 expanded languages (ja, ko, nl, sv, da, no)
Object.assign(LANGUAGES, TIER1_LANGUAGES);
Object.assign(TRANSLATIONS, TIER1_TRANSLATIONS);

// Merge 20 additional global & high-traffic languages (tr, ru, ar, hi, id, th, cs, fi, el, ro, hu, uk, he, ms, tl, bn, sk, bg, hr, et)
Object.assign(LANGUAGES, MORE20_LANGUAGES);
Object.assign(TRANSLATIONS, MORE20_TRANSLATIONS);

// Apply Bing & global exact-match hub SEO pass across all 20 indexable hubs
for (const [code, patch] of Object.entries(BING_HUB_UPGRADES)) {
  if (TRANSLATIONS[code]) {
    Object.assign(TRANSLATIONS[code], patch);
  }
}

export { LANGUAGES, TRANSLATIONS };
export default { LANGUAGES, TRANSLATIONS };
