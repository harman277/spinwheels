/* =========================================================
   TIER-1 MULTILINGUAL EXPANSION MODULE
   Expands high-RPM Nordic (sv, da, no -> 8 wheels each),
   Benelux/EU (nl, it -> 8; de, fr, es -> 16), and APAC
   (ja, ko -> 8) native localizations with zero English leak.
   ========================================================= */

const num10 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const num20 = Array.from({ length: 20 }, (_, i) => String(i + 1));
const num100 = Array.from({ length: 100 }, (_, i) => String(i + 1));

export default {
  "yes-no-wheel": {
    sv: {
      name: "Ja eller Nej Hjul",
      title: "Ja eller Nej Hjul | Gratis 50/50 Beslutsnurra Online",
      description: "Snurra Ja eller Nej-hjulet gratis för snabba 50/50-val. Växla mellan strikt Ja/Nej och Ja/Nej/Kanske utan registrering.",
      heroTitle: "Ja eller Nej Hjul",
      heroHighlight: "Omedelbar 50/50 Beslutshjälp",
      heroSubtitle: "Ställ en tydlig fråga, snurra hjulet och låt kryptografisk slump avgöra på sekunder.",
      quickAnswer: "<strong>Vad är Ja eller Nej Hjulet?</strong> En gratis binär beslutsgenerator med exakt 50/50-sannolikhet via Web Cryptography. Växla mellan strikt Ja/Nej och Ja/Nej/Kanske.",
      items: ["JA ✅", "NEJ ❌", "JA ✅", "NEJ ❌", "KANSKE 🤔", "FRÅGA IGEN 🔄"],
      presets: {
        yesno: { label: "Strikt Ja / Nej (50/50)", items: ["JA ✅", "NEJ ❌"] },
        yesnomaybe: { label: "Ja / Nej / Kanske", items: ["JA ✅", "NEJ ❌", "KANSKE 🤔", "IGEN 🔄"] }
      },
      faqs: [
        { q: "Är Ja eller Nej-hjulet verkligen 50/50?", a: "Ja. I strikt Ja/Nej-läge tar båda alternativen exakt halva hjulet med kryptografiskt rättvist urval." },
        { q: "Kan jag lägga till egna svar som Kanske?", a: "Ja, välj läget Ja/Nej/Kanske eller redigera valfria alternativ direkt i listan." }
      ]
    },
    da: {
      name: "Ja eller Nej Hjul",
      title: "Ja eller Nej Hjul | Gratis 50/50 Beslutningshjul",
      description: "Drej Ja eller Nej-hjulet gratis til hurtige 50/50-afgørelser. Skift mellem ren Ja/Nej og Ja/Nej/Måske uden tilmelding.",
      heroTitle: "Ja eller Nej Hjul",
      heroHighlight: "Øjeblikkelig 50/50 Beslutningshjælp",
      heroSubtitle: "Stil et klart spørgsmål, drej hjulet og få et upartisk svar på få sekunder.",
      quickAnswer: "<strong>Hvad er Ja eller Nej Hjulet?</strong> Et gratis binært beslutningsværktøj med præcis 50/50 chance via Web Cryptography. Perfekt til hurtige hverdagsvalg og spil.",
      items: ["JA ✅", "NEJ ❌", "JA ✅", "NEJ ❌", "MÅSKE 🤔", "SPØRG IGEN 🔄"],
      presets: {
        yesno: { label: "Kun Ja / Nej (50/50)", items: ["JA ✅", "NEJ ❌"] },
        yesnomaybe: { label: "Ja / Nej / Måske", items: ["JA ✅", "NEJ ❌", "MÅSKE 🤔", "IGEN 🔄"] }
      },
      faqs: [
        { q: "Er Ja eller Nej-hjulet virkelig 50/50?", a: "Ja. Begge felter fylder nøjagtig halvdelen af hjulet og udvælges med kryptografisk tilfældighed." },
        { q: "Kan jeg tilføje Måske eller egne valg?", a: "Ja, vælg Ja/Nej/Måske-skabelonen eller skriv dine egne svar i listen." }
      ]
    },
    no: {
      name: "Ja eller Nei Hjul",
      title: "Ja eller Nei Hjul | Gratis 50/50 Beslutningshjul",
      description: "Spinn Ja eller Nei-hjulet gratis for raske 50/50-valg. Bytt mellom ren Ja/Nei og Ja/Nei/Kanskje uten registrering.",
      heroTitle: "Ja eller Nei Hjul",
      heroHighlight: "Rask 50/50 Avgjørelse på Nett",
      heroSubtitle: "Still et tydelig spørsmål, spinn hjulet og få et rettferdig svar på sekunder.",
      quickAnswer: "<strong>Hva er Ja eller Nei Hjulet?</strong> Et gratis binært beslutningshjul med eksakt 50/50 sannsynlighet via nettleserens Web Cryptography.",
      items: ["JA ✅", "NEI ❌", "JA ✅", "NEI ❌", "KANSKJE 🤔", "SPØR IGJEN 🔄"],
      presets: {
        yesno: { label: "Kun Ja / Nei (50/50)", items: ["JA ✅", "NEI ❌"] },
        yesnomaybe: { label: "Ja / Nei / Kanskje", items: ["JA ✅", "NEI ❌", "KANSKJE 🤔", "IGJEN 🔄"] }
      },
      faqs: [
        { q: "Er Ja eller Nei-hjulet helt tilfeldig 50/50?", a: "Ja. Begge alternativer har nøyaktig 50 % sjanse ved bruk av kryptografisk entropi." },
        { q: "Kan jeg legge til Kanskje eller egne svar?", a: "Ja, velg Ja/Nei/Kanskje eller legg til egne felter når som helst." }
      ]
    }
  },

  "wheel-of-names": {
    sv: {
      name: "Namnhjul",
      title: "Namnhjul Online | Gratis Slumpgenerator för Namn",
      description: "Snurra vårt gratis Namnhjul online för att välja elever, vinnare eller lag. Klistra in upp till 500 namn och ta bort vinnare automatiskt.",
      heroTitle: "Namnhjul Online",
      heroHighlight: "Slumpmässig Namnväljare för Klass & Lotteri",
      heroSubtitle: "Klistra in upp till 500 namn från Excel eller listor och välj rättvist i helskärm utan konto.",
      quickAnswer: "<strong>Vad är Namnhjulet?</strong> Ett gratis verktyg för att lotta fram elever, vinnare eller deltagare med Web Cryptography. Stödjer massinklistring och automatisk borttagning av vinnare.",
      items: ["Astrid", "Liam", "Maja", "Lucas", "Elsa", "William", "Alice", "Noah", "Freja", "Hugo"],
      presets: {
        class: { label: "Klasslista", items: ["Astrid", "Liam", "Maja", "Lucas", "Elsa", "William", "Alice", "Noah"] },
        teams: { label: "4 Grupper", items: ["Lag Röd 🔴", "Lag Blå 🔵", "Lag Grön 🟢", "Lag Guld 🟡"] }
      },
      faqs: [
        { q: "Hur många namn kan jag lägga in i Namnhjulet?", a: "Du kan lägga in upp till 500 namn per hjul via snabbinklistring." },
        { q: "Kan hjulet ta bort valda namn automatiskt?", a: "Ja, aktivera 'Ta bort vinnare efter snurr' i inställningarna så dras ingen två gånger." }
      ]
    },
    da: {
      name: "Navnehjul",
      title: "Navnehjul Online | Gratis Tilfældig Navnevælger",
      description: "Drej vores gratis Navnehjul online for at trække elever, vindere eller hold. Indsæt op til 500 navne og fjern vindere automatisk.",
      heroTitle: "Navnehjul Online",
      heroHighlight: "Retfærdig Navnevælger til Klasse & Lodtrækning",
      heroSubtitle: "Indsæt op til 500 navne fra regneark eller tekst og træk en vinder i fuld skærm uden login.",
      quickAnswer: "<strong>Hvad er Navnehjulet?</strong> Et gratis online lykkehjul til navne drevet af kryptografisk tilfældighed. Perfekt til undervisning, konkurrencer og møder.",
      items: ["Emma", "Oscar", "Freja", "William", "Clara", "Noah", "Alma", "Lucas", "Sofia", "Carl"],
      presets: {
        class: { label: "Klasseliste", items: ["Emma", "Oscar", "Freja", "William", "Clara", "Noah", "Alma", "Lucas"] },
        teams: { label: "4 Hold", items: ["Hold Rød 🔴", "Hold Blå 🔵", "Hold Grøn 🟢", "Hold Guld 🟡"] }
      },
      faqs: [
        { q: "Hvor mange navne kan Navnehjulet håndtere?", a: "Op til 500 navne på ét hjul med hurtig masseindsættelse." },
        { q: "Kan samme person undgå at blive trukket to gange?", a: "Ja, slå 'Fjern vinder efter drej' til under indstillinger." }
      ]
    },
    no: {
      name: "Navnehjul",
      title: "Navnehjul på Nett | Gratis Tilfeldig Navnetrekker",
      description: "Spinn vårt gratis Navnehjul på nett for å trekke elever, vinnere eller lag. Lim inn opptil 500 navn og fjern vinnere automatisk.",
      heroTitle: "Navnehjul på Nett",
      heroHighlight: "Rettferdig Navnevelger for Klasse & Trekning",
      heroSubtitle: "Lim inn opptil 500 navn fra lister eller Excel og trekk rettferdig i fullskjerm uten innlogging.",
      quickAnswer: "<strong>Hva er Navnehjulet?</strong> Et gratis tilfeldighetsverktøy for å trekke navn med Web Cryptography. Støtter eliminering etter hvert spinn og QR-deling.",
      items: ["Nora", "Jakob", "Emma", "Lucas", "Sofie", "Filip", "Olivia", "Henrik", "Maja", "Oskar"],
      presets: {
        class: { label: "Klasseliste", items: ["Nora", "Jakob", "Emma", "Lucas", "Sofie", "Filip", "Olivia", "Henrik"] },
        teams: { label: "4 Lag", items: ["Lag Rød 🔴", "Lag Blå 🔵", "Lag Grønn 🟢", "Lag Gull 🟡"] }
      },
      faqs: [
        { q: "Hvor mange navn kan legges inn?", a: "Opptil 500 navn per hjul via rask innliming." },
        { q: "Blir navnene lagret på en server?", a: "Nei, alle lister behandles lokalt i din egen nettleser." }
      ]
    }
  },

  "picker-wheel": {
    sv: {
      name: "Slumphjul & Valhjul",
      title: "Slumphjul Online | Gratis Anpassningsbart Lyckohjul",
      description: "Använd vårt gratis Slumphjul för att välja slumpmässigt från valfri lista. Klistra in alternativ, ändra vikt och snurra direkt.",
      heroTitle: "Slumphjul Online",
      heroHighlight: "Anpassningsbart Val- & Beslutshjul",
      heroSubtitle: "Lägg till uppgifter, priser, filmer eller idéer och låt hjulet välja rättvist på några sekunder.",
      quickAnswer: "<strong>Vad är Slumphjulet?</strong> Ett flexibelt onlineverktyg som väljer ett slumpmässigt alternativ ur upp till 500 egna poster med justerbar vikt (1x–20x) och eliminering.",
      items: ["Alternativ A ✨", "Alternativ B 🚀", "Alternativ C 🎯", "Alternativ D 💡", "Alternativ E 🌟", "Alternativ F 🔥"],
      presets: {
        weekend: { label: "Helgplaner", items: ["Skogspromenad 🥾", "Biokväll 🍿", "Testa nytt café ☕", "Brädspel 🎲", "Museum 🏛️", "Laga middag 🍝"] },
        tasks: { label: "Uppgifter", items: ["Djupfokus 💻", "Rensa inkorgen 📧", "Träning 🏃", "Ärenden 🛒", "Läsning 📚"] }
      },
      faqs: [
        { q: "Kan jag ge vissa alternativ högre chans att vinna?", a: "Ja, klicka på + bredvid valfritt alternativ för att öka vikten från 1x upp till 20x." },
        { q: "Kan jag dela mitt eget hjul med vänner?", a: "Ja, klicka på Dela hjul för att kopiera en länk eller visa QR-kod." }
      ]
    },
    da: {
      name: "Vælgerhjul",
      title: "Vælgerhjul Online | Gratis Tilfældighedshjul",
      description: "Brug vores gratis Vælgerhjul til at vælge tilfældigt fra enhver liste. Indsæt punkter, justér vægtning og drej med det samme.",
      heroTitle: "Vælgerhjul Online",
      heroHighlight: "Brugerdefineret Valg- & Listehjul",
      heroSubtitle: "Tilføj opgaver, steder eller præmier og få et hurtigt, upartisk valg uden tilmelding.",
      quickAnswer: "<strong>Hvad er et Vælgerhjul?</strong> Et fleksibelt tilfældighedshjul, der vælger ét punkt blandt op til 500 egne felter med vægtning fra 1x til 20x.",
      items: ["Valg A ✨", "Valg B 🚀", "Valg C 🎯", "Valg D 💡", "Valg E 🌟", "Valg F 🔥"],
      presets: {
        weekend: { label: "Weekendplaner", items: ["Gåtur i skoven 🥾", "Biograf 🍿", "Ny café ☕", "Brætspil 🎲", "Museum 🏛️", "Hjemmelavet mad 🍝"] },
        tasks: { label: "Dagens Opgaver", items: ["Fokusarbejde 💻", "Ryd indbakke 📧", "Træning 🏃", "Indkøb 🛒", "Læsning 📚"] }
      },
      faqs: [
        { q: "Kan jeg give et felt større sandsynlighed?", a: "Ja, brug + knappen ud for et felt for at øge vægten op til 20x." },
        { q: "Virker hjulet på mobil og tablet?", a: "Ja, det tilpasser sig automatisk både mobil, iPad og desktop." }
      ]
    },
    no: {
      name: "Valghjul",
      title: "Valghjul på Nett | Gratis Tilfeldig Listevelger",
      description: "Bruk vårt gratis Valghjul for å velge tilfeldig fra enhver liste. Lim inn alternativer, juster vekting og spinn uten innlogging.",
      heroTitle: "Valghjul på Nett",
      heroHighlight: "Tilpasset Valg- og Listevelger",
      heroSubtitle: "Legg inn gjøremål, premier eller planer og la hjulet ta valget rettferdig på sekunder.",
      quickAnswer: "<strong>Hva er Valghjulet?</strong> En fleksibel tilfeldig velger for opptil 500 egne alternativer med vektkontroll (1x–20x) og eksport av historikk.",
      items: ["Valg A ✨", "Valg B 🚀", "Valg C 🎯", "Valg D 💡", "Valg E 🌟", "Valg F 🔥"],
      presets: {
        weekend: { label: "Helgeplaner", items: ["Fjelltur 🥾", "Kino 🍿", "Ny kafé ☕", "Brettspill 🎲", "Museum 🏛️", "Lage middag 🍝"] },
        tasks: { label: "Prioriteringer", items: ["Dyparbeid 💻", "Innboks 📧", "Trening 🏃", "Handling 🛒", "Lesing 📚"] }
      },
      faqs: [
        { q: "Kan jeg øke sjansen for enkelte valg?", a: "Ja, trykk på + ved siden av et punkt for å øke vekten opptil 20x." },
        { q: "Kan jeg dele et lagret hjul?", a: "Ja, klikk på Del hjul for å kopiere direkte lenke eller QR-kode." }
      ]
    },
    nl: {
      name: "Keuzerad",
      title: "Keuzerad Online | Gratis Willekeurige Keuze Spinner",
      description: "Gebruik het gratis Keuzerad om willekeurig te kiezen uit elke lijst. Plak opties, stel gewichten in en draai direct zonder account.",
      heroTitle: "Keuzerad Online",
      heroHighlight: "Aangepaste Keuze & Lijst Spinner",
      heroSubtitle: "Voeg taken, prijzen, ideeën of namen toe en laat het wiel eerlijk kiezen in één klik.",
      quickAnswer: "<strong>Wat is een Keuzerad?</strong> Een veelzijdige willekeurige kiezer voor maximaal 500 eigen items met instelbare kansen (1x–20x) en winnaarverwijdering.",
      items: ["Optie A ✨", "Optie B 🚀", "Optie C 🎯", "Optie D 💡", "Optie E 🌟", "Optie F 🔥"],
      presets: {
        weekend: { label: "Weekendplannen", items: ["Boswandeling 🥾", "Bioscoop 🍿", "Nieuw café ☕", "Bordspelavond 🎲", "Museum 🏛️", "Koken 🍝"] },
        tasks: { label: "Takenlijst", items: ["Focusblok 💻", "Inbox legen 📧", "Sporten 🏃", "Boodschappen 🛒", "Lezen 📚"] }
      },
      faqs: [
        { q: "Kan ik een optie meer kans geven op het Keuzerad?", a: "Ja, gebruik de + knop naast een item om de kans tot 20x te verhogen." },
        { q: "Kan ik een lijst vanuit Excel plakken?", a: "Ja, gebruik 'Bulk toevoegen' om tot 500 regels in één keer te laden." }
      ]
    }
  },

  "decision-wheel": {
    sv: {
      name: "Beslutshjul",
      title: "Beslutshjul Online | Gratis Beslutssnurre för Val",
      description: "Övervinn beslutsångest med vårt gratis Beslutshjul. Väg alternativ, prioritera uppgifter och få ett rättvist slumpmässigt svar direkt.",
      heroTitle: "Beslutshjul Online",
      heroHighlight: "Slipp Beslutsångest på Sekunder",
      heroSubtitle: "Lägg in dina svåraste val, justera vikter vid behov och låt ett ärligt snurr bryta dödläget.",
      quickAnswer: "<strong>Hur hjälper ett Beslutshjul?</strong> Det omvandlar överanalyserade val till ett snabbt och kryptografiskt rättvist avgörande i webbläsaren.",
      items: ["Gör det nu ⚡", "Skjut upp till helgen 📅", "Köp inte 💸", "Fråga en vän 🗣️", "Ta en paus ☕", "Kör hårt 🚀"],
      presets: {
        life: { label: "Vardagsbeslut", items: ["Ta en promenad 🚶", "Laga mat hemma 🥗", "Se en film 🎬", "Läs en bok 📖", "Ring en vän 📞"] },
        shopping: { label: "Köpbeslut", items: ["Köp nu 🛍️", "Vänta 48 timmar ⏳", "Leta rea 🏷️", "Hoppa över ❌"] }
      },
      faqs: [
        { q: "Vad gör jag om jag hoppas på ett visst svar medan hjulet snurrar?", a: "Den magkänslan avslöjar ofta vad du egentligen vill—följ magkänslan eller håll dig strikt till hjulets resultat!" }
      ]
    },
    da: {
      name: "Beslutningshjul",
      title: "Beslutningshjul Online | Gratis Valg- & Beslutningsspil",
      description: "Bryd ubeslutsomhed med det gratis Beslutningshjul. Vej muligheder, prioritér gøremål og få et retfærdigt resultat med det samme.",
      heroTitle: "Beslutningshjul Online",
      heroHighlight: "Bryd Tvivl & Valglammelse Hurtigt",
      heroSubtitle: "Skriv dine muligheder ind, tilpas vægten og drej for at komme videre med dagen.",
      quickAnswer: "<strong>Hvad er Beslutningshjulet?</strong> Et gratis online værktøj, der hjælper dig med at træffe svære hverdagsbeslutninger hurtigt og upartisk.",
      items: ["Gør det nu ⚡", "Vent til i morgen 📅", "Spar pengene 💸", "Spørg en ven 🗣️", "Tag en pause ☕", "Kør på 🚀"],
      presets: {
        life: { label: "Aftenplaner", items: ["Gå en tur 🚶", "Lave mad hjemme 🥗", "Se en film 🎬", "Læse bog 📖", "Ringe til ven 📞"] },
        shopping: { label: "Købstjek", items: ["Køb nu 🛍️", "Vent 48 timer ⏳", "Find tilbud 🏷️", "Drop det ❌"] }
      },
      faqs: [
        { q: "Kan jeg bruge hjulet til at prioritere arbejdsopgaver?", a: "Ja, indlæs dine opgaver, slå 'Fjern vinder' til og lad hjulet lægge rækkefølgen." }
      ]
    },
    no: {
      name: "Beslutningshjul",
      title: "Beslutningshjul på Nett | Gratis Valghjelper",
      description: "Bli kvitt beslutningsvegring med vårt gratis Beslutningshjul. Vei alternativer, prioriter oppgaver og få et rettferdig valg med en gang.",
      heroTitle: "Beslutningshjul på Nett",
      heroHighlight: "Rask Avgjørelse Når Du Står Fast",
      heroSubtitle: "Skriv inn valgene dine, juster vekten om ønskelig og spinn for å komme i gang.",
      quickAnswer: "<strong>Hvordan fungerer Beslutningshjulet?</strong> Det fjerner valgparalyse ved å gi deg et upartisk, kryptografisk tilfeldig resultat på sekunder.",
      items: ["Gjør det nå ⚡", "Vent til helgen 📅", "Spar pengene 💸", "Spør en venn 🗣️", "Ta en kaffepause ☕", "Kjør på 🚀"],
      presets: {
        life: { label: "Kveldsvalg", items: ["Gå en tur 🚶", "Lage mat hjemme 🥗", "Se en film 🎬", "Lese bok 📖", "Ringe en venn 📞"] },
        shopping: { label: "Kjøpsvalg", items: ["Kjøp nå 🛍️", "Vent 48 timer ⏳", "Sjekk tilbud 🏷️", "Dropp det ❌"] }
      },
      faqs: [
        { q: "Kan jeg bruke hjulet til å prioritere gjøremål?", a: "Ja, legg inn oppgavene dine og aktiver fjerning etter spinn for å få en klar rekkefølge." }
      ]
    },
    nl: {
      name: "Beslissingsrad",
      title: "Beslissingsrad Online | Gratis Keuzes Maken Wiel",
      description: "Doorbreek keuzestress met het gratis Beslissingsrad. Weeg opties af, kies prioriteiten en laat het wiel eerlijk beslissen zonder account.",
      heroTitle: "Beslissingsrad Online",
      heroHighlight: "Direct Keuzestress Doorbreken",
      heroSubtitle: "Vul je twijfels in, geef favorieten eventueel extra gewicht en draai voor een helder resultaat.",
      quickAnswer: "<strong>Wat doet het Beslissingsrad?</strong> Het helpt je snel knopen doorhakken met eerlijke cryptografische kansen en instelbare weging per optie.",
      items: ["Meteen doen ⚡", "Uitstellen tot morgen 📅", "Niet kopen 💸", "Vriend bellen 🗣️", "Pauze nemen ☕", "Vol voor gaan 🚀"],
      presets: {
        life: { label: "Avondkeuzes", items: ["Wandelen 🚶", "Thuis koken 🥗", "Film kijken 🎬", "Boek lezen 📖", "Iemand bellen 📞"] },
        shopping: { label: "Aankoopcheck", items: ["Nu kopen 🛍️", "48 uur wachten ⏳", "Korting zoeken 🏷️", "Overslaan ❌"] }
      },
      faqs: [
        { q: "Hoe werkt het wegen van keuzes?", a: "Tik op + naast een optie om die optie 2x tot 20x vaker te laten vallen zonder dubbele regels." }
      ]
    },
    it: {
      name: "Ruota delle Decisioni",
      title: "Ruota delle Decisioni Online | Scegli Gratis Senza Dubbi",
      description: "Supera l'indecisione con la Ruota delle Decisioni gratuita. Pesa le opzioni, ordina le priorità e ottieni una scelta imparziale all'istante.",
      heroTitle: "Ruota delle Decisioni",
      heroHighlight: "Scegli Senza Stress in Pochi Secondi",
      heroSubtitle: "Inserisci le tue opzioni, regola i pesi se preferisci e gira la ruota per sbloccare la giornata.",
      quickAnswer: "<strong>Cos'è la Ruota delle Decisioni?</strong> Uno strumento online gratuito con casualità crittografica per risolvere dubbi quotidiani e priorità senza registrazione.",
      items: ["Fallo subito ⚡", "Rimanda a domani 📅", "Risparmia 💸", "Chiedi a un amico 🗣️", "Pausa caffè ☕", "Vai avanti 🚀"],
      presets: {
        life: { label: "Scelte Serali", items: ["Passeggiata 🚶", "Cucinare a casa 🥗", "Guardare un film 🎬", "Leggere 📖", "Chiamare un amico 📞"] },
        shopping: { label: "Acquisti", items: ["Compra ora 🛍️", "Aspetta 48 ore ⏳", "Cerca sconto 🏷️", "Lascia perdere ❌"] }
      },
      faqs: [
        { q: "Posso assegnare probabilità diverse alle opzioni?", a: "Sì, premi + accanto a qualsiasi voce per aumentare il peso da 1x fino a 20x." }
      ]
    },
    ko: {
      name: "결정 돌림판",
      title: "결정 룰렛 온라인 | 무료 고민 해결 랜덤 돌림판",
      description: "선택 장애를 해결하는 무료 결정 돌림판! 가중치 조절부터 중복 제거까지 회원가입 없이 공정하게 결정하세요.",
      heroTitle: "결정 돌림판",
      heroHighlight: "고민을 3초 만에 끝내는 랜덤 룰렛",
      heroSubtitle: "망설여지는 선택지들을 입력하고 돌려 암호학적으로 공정한 결과를 바로 확인하세요.",
      quickAnswer: "<strong>결정 돌림판이란?</strong> 브라우저 Web Cryptography를 사용해 여러 선택지 중 하나를 편향 없이 뽑아주는 무료 의사결정 도구입니다.",
      items: ["바로 실행 ⚡", "내일로 미루기 📅", "사지 않기 💸", "친구에게 물어보기 🗣️", "잠깐 휴식 ☕", "도전하기 🚀"],
      presets: {
        life: { label: "저녁 시간", items: ["산책하기 🚶", "집밥 먹기 🥗", "영화 보기 🎬", "독서하기 📖", "친구와 통화 📞"] },
        shopping: { label: "쇼핑 고민", items: ["지금 구매 🛍️", "이틀 고민하기 ⏳", "할인 기다리기 🏷️", "패스하기 ❌"] }
      },
      faqs: [
        { q: "특정 선택지의 확률을 더 높일 수 있나요?", a: "네! 항목 옆의 + 버튼을 눌러 1x부터 최대 20x까지 가중치를 조절할 수 있습니다." }
      ]
    }
  },

  "number-picker-wheel": {
    sv: {
      name: "Nummerhjul",
      title: "Nummerhjul 1–100 | Gratis Slumpgenerator för Siffror",
      description: "Snurra Nummerhjulet gratis för slumptal 1–6, 1–10, 1–20 eller 1–100. Perfekt för lotterier, bingo, matematik och turordning.",
      heroTitle: "Nummerhjul Online",
      heroHighlight: "Rättvis Slumpgenerator för Siffror",
      heroSubtitle: "Välj snabbt mellan 1–6, 1–10, 1–20 eller klistra in egna lottnummer upp till 500 poster.",
      quickAnswer: "<strong>Vad är Nummerhjulet?</strong> Ett visuellt slumpverktyg för siffror som använder kryptografisk entropi och stödjer borttagning av dragna nummer för bingo och lotteri.",
      items: num10,
      presets: {
        ten: { label: "1 till 10", items: num10 },
        twenty: { label: "1 till 20", items: num20 },
        dice: { label: "1 till 6 (Tärning)", items: ["1", "2", "3", "4", "5", "6"] }
      },
      faqs: [
        { q: "Hur undviker jag att samma nummer dras två gånger?", a: "Aktivera 'Ta bort vinnare efter snurr' under inställningar så försvinner dragna nummer automatiskt." }
      ]
    },
    da: {
      name: "Talhjul",
      title: "Talhjul Online | Gratis Tilfældig Talgenerator 1–100",
      description: "Drej Talhjulet gratis for tilfældige tal mellem 1–6, 1–10, 1–20 eller egne numre. Ideel til banko, lodtrækning og matematik.",
      heroTitle: "Talhjul Online",
      heroHighlight: "Retfærdig Tilfældig Talvælger",
      heroSubtitle: "Skift mellem 1–6, 1–10, 1–20 eller indsæt op til 500 egne lodnumre uden gentagelser.",
      quickAnswer: "<strong>Hvad er Talhjulet?</strong> En visuel talgenerator med kryptografisk retfærdighed, perfekt til banko, klasseværelset og lodtrækninger.",
      items: num10,
      presets: {
        ten: { label: "1 til 10", items: num10 },
        twenty: { label: "1 til 20", items: num20 },
        dice: { label: "1 til 6 (Terning)", items: ["1", "2", "3", "4", "5", "6"] }
      },
      faqs: [
        { q: "Kan samme tal undgås at blive trukket to gange?", a: "Ja, slå 'Fjern vinder efter drej' til i indstillingerne." }
      ]
    },
    no: {
      name: "Tallhjul",
      title: "Tallhjul på Nett | Gratis Tilfeldig Tallgenerator",
      description: "Spinn Tallhjulet gratis for tilfeldige tall fra 1–6, 1–10, 1–20 eller egne serier. Perfekt til bingo, loddtrekning og matte.",
      heroTitle: "Tallhjul på Nett",
      heroHighlight: "Rettferdig Talltrekker med Kryptografi",
      heroSubtitle: "Bytt raskt mellom 1–6, 1–10, 1–20 eller lim inn egne loddnumre opptil 500 tall.",
      quickAnswer: "<strong>Hva er Tallhjulet?</strong> En visuell tallgenerator som sikrer helt rettferdige trekninger til bingo, spill og undervisning.",
      items: num10,
      presets: {
        ten: { label: "1 til 10", items: num10 },
        twenty: { label: "1 til 20", items: num20 },
        dice: { label: "1 til 6 (Terning)", items: ["1", "2", "3", "4", "5", "6"] }
      },
      faqs: [
        { q: "Kan jeg trekke bingotall uten gjentakelser?", a: "Ja, aktiver fjerning av vinner etter spinn i innstillingene." }
      ]
    },
    nl: {
      name: "Getallenrad",
      title: "Getallenrad Online | Gratis Willekeurige Nummer Spinner",
      description: "Draai gratis aan het Getallenrad voor nummers 1–6, 1–10, 1–20 of eigen lotnummers. Ideaal voor bingo, lootjes en rekenlessen.",
      heroTitle: "Getallenrad Online",
      heroHighlight: "Eerlijke Willekeurige Nummerkiezer",
      heroSubtitle: "Kies direct 1–6, 1–10, 1–20 of plak tot 500 eigen lotnummers met automatische uitschakeling.",
      quickAnswer: "<strong>Wat is het Getallenrad?</strong> Een betrouwbare nummer-spinner op basis van Web Cryptography, ideaal voor bingo-avonden en transparante verlotingen.",
      items: num10,
      presets: {
        ten: { label: "1 t/m 10", items: num10 },
        twenty: { label: "1 t/m 20", items: num20 },
        dice: { label: "1 t/m 6 (Dobbelsteen)", items: ["1", "2", "3", "4", "5", "6"] }
      },
      faqs: [
        { q: "Kan ik voorkomen dat hetzelfde nummer twee keer valt?", a: "Ja, schakel 'Winnaar verwijderen na draai' in bij de instellingen." }
      ]
    }
  },

  "raffle-wheel": {
    sv: {
      name: "Lotterihjul",
      title: "Lotterihjul Online | Dra Rättvisa Vinnare Gratis",
      description: "Kör transparenta tävlingar och dragningar online med vårt Lotterihjul. Klistra in deltagare, vikta lotter och snurra live.",
      heroTitle: "Lotterihjul Online",
      heroHighlight: "Transparent Vinnardragning & Giveaway",
      heroSubtitle: "Perfekt för Instagram-tävlingar, skollotterier och livestreams med automatisk borttagning av vinnare.",
      quickAnswer: "<strong>Vad är Lotterihjulet?</strong> Ett gratis dragningshjul för upp till 500 deltagare med viktkontroll (1x–20x), helskärm och CSV-export av vinnarlistan.",
      items: ["Lott #101", "Lott #102", "Lott #103", "Lott #104", "Lott #105", "Lott #106", "Lott #107", "Lott #108"],
      presets: {
        raffle: { label: "Lotteripriser", items: ["Förstapris 🏆", "Andrapris 🥈", "Tredjepris 🥉", "Presentkort 🎁"] },
        tickets: { label: "Lott 1–10", items: num10.map((n) => `Lott #${n}`) }
      },
      faqs: [
        { q: "Hur ger jag någon fler lotter i dragningen?", a: "Klicka på + knappen bredvid namnet för att öka vinstchansen upp till 20x." }
      ]
    },
    da: {
      name: "Lodtrækningshjul",
      title: "Lodtrækningshjul Online | Træk En Vinder Gratis",
      description: "Afhold gennemsigtige lodtrækninger og konkurrencer med vores gratis Lodtrækningshjul. Indsæt op til 500 deltagere uden tilmelding.",
      heroTitle: "Lodtrækningshjul Online",
      heroHighlight: "Retfærdig Konkurrence- & Præmietrækker",
      heroSubtitle: "Ideel til sociale medier, foreningslotterier og livestreams med automatisk fjernelse af vindere.",
      quickAnswer: "<strong>Hvad er Lodtrækningshjulet?</strong> Et pålideligt værktøj til at trække vindere live med kryptografisk tilfældighed og CSV-log.",
      items: ["Lod #101", "Lod #102", "Lod #103", "Lod #104", "Lod #105", "Lod #106", "Lod #107", "Lod #108"],
      presets: {
        raffle: { label: "Præmier", items: ["Hovedpræmie 🏆", "2. præmie 🥈", "3. præmie 🥉", "Gavekort 🎁"] },
        tickets: { label: "Lod 1–10", items: num10.map((n) => `Lod #${n}`) }
      },
      faqs: [
        { q: "Kan jeg trække 1., 2. og 3. vinder uden gentagelser?", a: "Ja, aktivér 'Fjern vinder efter drej' i indstillingerne." }
      ]
    },
    no: {
      name: "Lotterihjul",
      title: "Lotterihjul på Nett | Trekk Vinnere Rettferdig Gratis",
      description: "Gjennomfør rettferdige konkurranser og utlodninger med vårt Lotterihjul. Lim inn opptil 500 deltakere og eksporter vinnerlogg.",
      heroTitle: "Lotterihjul på Nett",
      heroHighlight: "Åpen Vinnertrekning for Konkurranser",
      heroSubtitle: "Skapt for Instagram-giveaways, skolelotterier og direktesendinger med automatisk vinnerfjerning.",
      quickAnswer: "<strong>Hva er Lotterihjulet?</strong> Et gratis trekningshjul som sikrer troverdige premierunder med vektkontroll og fullskjermsmodus.",
      items: ["Lodd #101", "Lodd #102", "Lodd #103", "Lodd #104", "Lodd #105", "Lodd #106", "Lodd #107", "Lodd #108"],
      presets: {
        raffle: { label: "Premier", items: ["Hovedpremie 🏆", "2. premie 🥈", "3. premie 🥉", "Gavekort 🎁"] },
        tickets: { label: "Lodd 1–10", items: num10.map((n) => `Lodd #${n}`) }
      },
      faqs: [
        { q: "Kan en deltaker få flere lodd?", a: "Ja, bruk + knappen ved siden av navnet for å gi 2x til 20x vinnersjanse." }
      ]
    },
    nl: {
      name: "Loterij Rad",
      title: "Loterij Rad Online | Gratis Winnaar Trekken Giveaway",
      description: "Organiseer eerlijke online loterijen en social media giveaways met ons Loterij Rad. Plak tot 500 deelnemers en voorkom dubbele winnaars.",
      heroTitle: "Loterij Rad Online",
      heroHighlight: "Transparante Winnaar Kiezer & Giveaway",
      heroSubtitle: "Ideaal voor Instagram-acties, livestreams en verenigingsloterijen met CSV-bewijs.",
      quickAnswer: "<strong>Wat is het Loterij Rad?</strong> Een betrouwbaar prijzenrad met Web Cryptography, instelbare lotgewichten (1x–20x) en automatische eliminatie.",
      items: ["Lot #101", "Lot #102", "Lot #103", "Lot #104", "Lot #105", "Lot #106", "Lot #107", "Lot #108"],
      presets: {
        raffle: { label: "Prijzenpot", items: ["Hoofdprijs 🏆", "2e Prijs 🥈", "3e Prijs 🥉", "Cadeaubon 🎁"] },
        tickets: { label: "Loten 1–10", items: num10.map((n) => `Lot #${n}`) }
      },
      faqs: [
        { q: "Hoe geef ik iemand meerdere loten?", a: "Klik op + naast de naam om de winkans te schalen van 1x tot 20x." }
      ]
    },
    it: {
      name: "Ruota della Lotteria",
      title: "Ruota della Lotteria Online | Estrai Vincitori Gratis",
      description: "Organizza giveaway sui social ed estrazioni trasparenti con la Ruota della Lotteria gratuita. Fino a 500 partecipanti senza registrazione.",
      heroTitle: "Ruota della Lotteria",
      heroHighlight: "Estrazione Trasparente per Giveaway & Premi",
      heroSubtitle: "Incolla fino a 500 nomi o biglietti, rimuovi i vincitori estratti ed esporta lo storico CSV.",
      quickAnswer: "<strong>Cos'è la Ruota della Lotteria?</strong> Uno strumento gratuito per estrazioni live basato su crittografia sicura, con pesi personalizzabili e modalità schermo intero.",
      items: ["Biglietto #101", "Biglietto #102", "Biglietto #103", "Biglietto #104", "Biglietto #105", "Biglietto #106"],
      presets: {
        raffle: { label: "Premi Estrazione", items: ["Primo Premio 🏆", "Secondo Premio 🥈", "Terzo Premio 🥉", "Buono Regalo 🎁"] },
        tickets: { label: "Biglietti 1–10", items: num10.map((n) => `Ticket #${n}`) }
      },
      faqs: [
        { q: "Come evito che la stessa persona vinca due premi?", a: "Attiva 'Rimuovi vincitore dopo il giro' nelle impostazioni prima di iniziare." }
      ]
    },
    ja: {
      name: "抽選ルーレット",
      title: "抽選ルーレット無料 | ライブ配信・SNS懸賞に最適",
      description: "InstagramやYouTubeのプレゼント企画・抽選会を公平に盛り上げる無料抽選ルーレット。最大500件登録可能、当選者除外機能付き。",
      heroTitle: "抽選ルーレット",
      heroHighlight: "公平・透明なライブ当選者発表ツール",
      heroSubtitle: "最大500名の応募者やチケット番号を一括貼り付けし、その場で盛り上がる抽選を行えます。",
      quickAnswer: "<strong>抽選ルーレットとは？</strong> ブラウザの暗号学的乱数で公平に当選者を決定し、重複除外や重み付け（1x〜20x）にも対応した無料Webツールです。",
      items: ["エントリー #1", "エントリー #2", "エントリー #3", "エントリー #4", "エントリー #5", "エントリー #6"],
      presets: {
        raffle: { label: "景品リスト", items: ["特賞 🏆", "1等 🎁", "2等 🎟️", "参加賞 ✨"] },
        tickets: { label: "番号 1〜10", items: num10.map((n) => `番号 ${n}`) }
      },
      faqs: [
        { q: "一度当選した人を自動で除外できますか？", a: "はい、設定の「当選者を除外する」をオンにすると重複当選を防げます。" }
      ]
    },
    ko: {
      name: "경품 추첨 룰렛",
      title: "경품 추첨 룰렛 무료 | 유튜브·인스타 이벤트 당첨자 뽑기",
      description: "투명하고 공정한 이벤트 추첨을 위한 무료 경품 추첨 돌림판! 최대 500명 일괄 붙여넣기 및 당첨자 자동 제외 기능을 지원합니다.",
      heroTitle: "경품 추첨 룰렛",
      heroHighlight: "공정하고 투명한 라이브 당첨자 추첨기",
      heroSubtitle: "최대 500명의 참여자나 응모 번호를 붙여넣고 가중치와 중복 제거로 완벽하게 추첨하세요.",
      quickAnswer: "<strong>경품 추첨 룰렛이란?</strong> Web Cryptography 기반 공정 난수로 라이브 방송과 SNS 이벤트 당첨자를 투명하게 뽑아주는 무료 웹 도구입니다.",
      items: ["참가자 #1", "참가자 #2", "참가자 #3", "참가자 #4", "참가자 #5", "참가자 #6"],
      presets: {
        raffle: { label: "경품 목록", items: ["대상 🏆", "1등 상품 🎁", "기프티콘 ☕", "아차상 🍀"] },
        tickets: { label: "번호 1~10", items: num10.map((n) => `번호 ${n}`) }
      },
      faqs: [
        { q: "이미 뽑힌 당첨자를 자동으로 뺄 수 있나요?", a: "네, 설정에서 '당첨 후 항목 제거' 옵션을 켜면 중복 당첨 없이 여러 명을 뽑을 수 있습니다." }
      ]
    }
  },

  "food-picker-wheel": {
    sv: {
      name: "Mathjul — Vad ska vi äta?",
      title: "Mathjul Online | Gratis Snurre för Lunch & Middag",
      description: "Vet du inte vad du ska äta? Snurra Mathjulet gratis för snabba lunch-, restaurang- och middagstips. Lägg in egna favoritställen.",
      heroTitle: "Mathjul Online",
      heroHighlight: "Sluta Bråka om Vad Ni Ska Äta",
      heroSubtitle: "Snurra fram pizza, sushi, tacos eller hemlagat på tre sekunder när alla är för hungriga för att välja.",
      quickAnswer: "<strong>Vad är Mathjulet?</strong> En gratis lunch- och middagsväljare med färdiga rätter och plats för upp till 500 egna favoritrestauranger.",
      items: ["Pizza 🍕", "Sushi 🍣", "Tacos 🌮", "Pasta 🍝", "Burgare 🍔", "Thaimat 🍜", "Indiskt 🍛", "Fräsch Sallad 🥗"],
      presets: {
        quick: { label: "Snabbmat", items: ["Pizza 🍕", "Burgare 🍔", "Tacos 🌮", "Kebabrulle 🌯", "Poké Bowl 🥣"] },
        home: { label: "Hemlagat", items: ["Köttfärssås 🍝", "Lax & Potatis 🐟", "Kycklinggryta 🍛", "Pannkakor 🥞", "Wok 🥢"] }
      },
      faqs: [
        { q: "Kan jag lägga till lokala restauranger nära mig?", a: "Ja, rensa listan och skriv in dina lokala favoritställen så sparas listan i din webbläsare." }
      ]
    },
    da: {
      name: "Madhjul — Hvad skal vi spise?",
      title: "Madhjul Online | Gratis Aftensmad & Takeaway Spinner",
      description: "I tvivl om aftensmaden? Drej Madhjulet gratis og find hurtigt mellem pizza, sushi, burger eller hjemmelavet mad.",
      heroTitle: "Madhjul Online",
      heroHighlight: "Løs Aftensmadsdebatten på 3 Sekunder",
      heroSubtitle: "Indlæs dine lokale takeaway-favoritter eller køkkener og lad hjulet bestemme.",
      quickAnswer: "<strong>Hvad er Madhjulet?</strong> En gratis beslutningshjælper til frokost og aftensmad med forudindlæste retter og mulighed for egne lokale restauranter.",
      items: ["Pizza 🍕", "Sushi 🍣", "Tacos 🌮", "Pasta 🍝", "Burger 🍔", "Thaimad 🍜", "Indisk 🍛", "Salat 🥗"],
      presets: {
        quick: { label: "Takeaway", items: ["Pizza 🍕", "Burger 🍔", "Sushi 🍣", "Shawarma 🌯", "Poké Bowl 🥣"] },
        home: { label: "Hjemmelavet", items: ["Bolognese 🍝", "Laks i ovn 🐟", "Karryret 🍛", "Frikadeller 🍽️", "Wok 🥢"] }
      },
      faqs: [
        { q: "Kan jeg gemme mine egne favoritrestauranter?", a: "Ja, tryk på 'Gem eget hjul' for at gemme din personlige take-away-liste lokalt." }
      ]
    },
    no: {
      name: "Mathjul — Hva skal vi spise?",
      title: "Mathjul på Nett | Gratis Middags- og Takeawayvelger",
      description: "Usikker på hva dere skal spise? Spinn Mathjulet gratis for middag, lunsj og takeaway. Legg inn egne lokale restauranter.",
      heroTitle: "Mathjul på Nett",
      heroHighlight: "Løs Middagsvalget på Tre Sekunder",
      heroSubtitle: "Spinn mellom pizza, sushi, taco, burger eller hjemmelaget når ingen klarer å bestemme seg.",
      quickAnswer: "<strong>Hva er Mathjulet?</strong> En gratis matvelger med ferdige retter og plass til opptil 500 egne favorittsteder i nettleseren.",
      items: ["Pizza 🍕", "Sushi 🍣", "Taco 🌮", "Pasta 🍝", "Burger 🍔", "Thaimat 🍜", "Indisk 🍛", "Frisk Salat 🥗"],
      presets: {
        quick: { label: "Takeaway", items: ["Pizza 🍕", "Burger 🍔", "Taco 🌮", "Sushi 🍣", "Kebab 🌯"] },
        home: { label: "Hjemmelaget", items: ["Spaghetti 🍝", "Laks & Grønnsaker 🐟", "Kyllingcurry 🍛", "Pannekaker 🥞", "Wok 🥢"] }
      },
      faqs: [
        { q: "Kan vi legge inn restauranter i nabolaget?", a: "Ja, tøm listen og skriv inn dine lokale spisesteder, og lagre hjulet i nettleseren." }
      ]
    },
    nl: {
      name: "Eten Kiezer Rad",
      title: "Wat Eten We Vandaag Rad | Gratis Diner & Lunch Spinner",
      description: "Geen idee wat je moet eten? Draai aan het gratis Eten Kiezer Rad voor lunch, afhalen of avondeten met eigen restaurants.",
      heroTitle: "Eten Kiezer Rad",
      heroHighlight: "Geen Avondeten-Discussie Meer",
      heroSubtitle: "Kies razendsnel tussen pizza, sushi, pasta, Thais of je favoriete bezorgrestaurants in de buurt.",
      quickAnswer: "<strong>Wat is het Eten Kiezer Rad?</strong> Een gratis online maaltijd-spinner die in seconden kiest uit wereldkeukens of je eigen lijst met lokale bezorgers.",
      items: ["Pizza 🍕", "Sushi 🍣", "Taco's 🌮", "Italiaanse Pasta 🍝", "Burgers 🍔", "Thais 🍜", "Indiaas 🍛", "Maaltijdsalade 🥗"],
      presets: {
        quick: { label: "Afhalen & Bezorgen", items: ["Pizza 🍕", "Sushi 🍣", "Poké Bowl 🥣", "Friet & Snacks 🍟", "Thaise Curry 🍛"] },
        home: { label: "Zelf Koken", items: ["Pasta Pesto 🍝", "Stamppot 🥔", "Zalm uit de oven 🐟", "Wokgerecht 🥢", "Taco-avond 🌮"] }
      },
      faqs: [
        { q: "Kan ik mijn favoriete Thuisbezorgd-restaurants invullen?", a: "Ja, wis de lijst en voeg tot 500 lokale restaurants toe of sla ze lokaal op." }
      ]
    },
    it: {
      name: "Ruota del Cibo",
      title: "Ruota Cosa Mangiare Oggi | Scelta Cena & Pranzo Gratis",
      description: "Non sai cosa mangiare stasera? Gira la Ruota del Cibo gratis per scegliere tra pizza, sushi, pasta o i tuoi ristoranti preferiti.",
      heroTitle: "Ruota del Cibo",
      heroHighlight: "Scegli Cosa Mangiare Senza Indecisione",
      heroSubtitle: "Inserisci i tuoi ristoranti o piatti preferiti e lascia che un giro imparziale decida la cena.",
      quickAnswer: "<strong>Cos'è la Ruota del Cibo?</strong> Uno strumento gratuito per decidere pranzo, cena o cibo d'asporto con preset pronti e liste salvabili nel browser.",
      items: ["Pizza 🍕", "Sushi 🍣", "Pasta Italiana 🍝", "Tacos 🌮", "Hamburger 🍔", "Cucina Cinese 🥡", "Insalatona 🥗", "Poke Bowl 🥣"],
      presets: {
        quick: { label: "Asporto & Delivery", items: ["Pizza 🍕", "Sushi 🍣", "Hamburger 🍔", "Kebab 🌯", "Poke 🥣"] },
        home: { label: "Fatto in Casa", items: ["Carbonara 🍝", "Risotto 🍚", "Pollo al forno 🍗", "Zuppa calda 🍲", "Insalata Caprese 🥗"] }
      },
      faqs: [
        { q: "Posso inserire i ristoranti della mia città?", a: "Sì! Cancella la lista e aggiungi fino a 500 locali della tua zona." }
      ]
    },
    ko: {
      name: "오늘 뭐 먹지 돌림판",
      title: "오늘 뭐 먹지 룰렛 | 무료 점심·저녁 메뉴 추천 돌림판",
      description: "점심, 저녁 메뉴가 고민될 때 바로 돌리는 무료 음식 추천 돌림판! 한식, 중식, 일식, 양식 프리셋과 맛집 추가를 지원합니다.",
      heroTitle: "오늘 뭐 먹지 돌림판",
      heroHighlight: "식사 메뉴 고민 3초 해결 룰렛",
      heroSubtitle: "혼밥부터 회식, 야식까지! 자주 가는 맛집이나 먹고 싶은 메뉴를 넣고 바로 돌려보세요.",
      quickAnswer: "<strong>오늘 뭐 먹지 돌림판이란?</strong> 점심·저녁 메뉴와 배달 음식 고민을 한 번에 해결해 주는 무료 음식 랜덤 룰렛입니다.",
      items: ["김치찌개 🍲", "삼겹살 🥓", "초밥 🍣", "피자 🍕", "치킨 🍗", "짜장면 🍜", "햄버거 🍔", "쌀국수 🍲"],
      presets: {
        korean: { label: "인기 한식", items: ["김치찌개 🍲", "제육볶음 🍖", "된장찌개 🥘", "비빔밥 🥗", "국밥 🍚", "칼국수 🍜"] },
        delivery: { label: "야식 & 배달", items: ["후라이드 치킨 🍗", "피자 🍕", "떡볶이 🌶️", "족발·보쌈 🥩", "마라탕 🍲"] }
      },
      faqs: [
        { q: "우리 동네 맛집 리스트를 직접 저장할 수 있나요?", a: "네! 항목을 수정한 뒤 '나만의 돌림판 저장'을 누르면 브라우저에 바로 저장됩니다." }
      ]
    }
  },

  "truth-or-dare-wheel": {
    sv: {
      name: "Sanning eller Konka Hjul",
      title: "Sanning eller Konka Hjul | Gratis Festspel Online",
      description: "Snurra Sanning eller Konka-hjulet gratis för fester, spelkvällar och familjekul. Färdiga rena och vågade lägen utan konto.",
      heroTitle: "Sanning eller Konka Hjul",
      heroHighlight: "Roligt Fest- & Spelkvällshjul",
      heroSubtitle: "Skapa direkt stämning på festen eller pyjamaspartyt—snurra Sanning, Konka eller Dubbelkonka rättvist.",
      quickAnswer: "<strong>Vad är Sanning eller Konka Hjulet?</strong> Ett gratis partyspel med klassiskt 50/50-läge, familjevänliga utmaningar och plats för upp till 500 egna frågor.",
      items: ["Sanning 🤫", "Konka 😈", "Sanning 🤫", "Konka 😈", "Dubbelkonka 🔥", "Frikort 🌟"],
      presets: {
        classic: { label: "Klassisk 50/50", items: ["Sanning 🤫", "Konka 😈", "Sanning 🤫", "Konka 😈"] },
        family: { label: "Familj & Barnvänlig", items: ["Berätta ett skämt 🤡", "Gör ett djurläte 🦁", "Säg en rolig hemlighet 🤭", "Dansa i 15 sek 💃"] }
      },
      faqs: [
        { q: "Finns det barnvänliga frågor i hjulet?", a: "Ja, klicka på läget 'Familj & Barnvänlig' ovanför listan för snälla och roliga utmaningar." }
      ]
    },
    da: {
      name: "Sandhed eller Konsekvens Hjul",
      title: "Sandhed eller Konsekvens Hjul | Gratis Festspil Online",
      description: "Drej Sandhed eller Konsekvens-hjulet gratis til fester og familieaftener. Vælg mellem klassisk 50/50 eller familievenlige udfordringer.",
      heroTitle: "Sandhed eller Konsekvens Hjul",
      heroHighlight: "Gratis Fest- & Spilleaftenshjul",
      heroSubtitle: "Slip for kedelige pauser—lad hjulet fordele Sandhed, Konsekvens, Dobbelt Konsekvens eller Fripas.",
      quickAnswer: "<strong>Hvad er Sandhed eller Konsekvens Hjulet?</strong> Et gratis online partyspil med både klassisk 50/50 og familievenlige udfordringer uden login.",
      items: ["Sandhed 🤫", "Konsekvens 😈", "Sandhed 🤫", "Konsekvens 😈", "Dobbelt Konsekvens 🔥", "Fripas 🌟"],
      presets: {
        classic: { label: "Klassisk 50/50", items: ["Sandhed 🤫", "Konsekvens 😈", "Sandhed 🤫", "Konsekvens 😈"] },
        family: { label: "Familievenlig", items: ["Fortæl en vittighed 🤡", "Lav en dyrelyd 🦁", "Sig en sjov hemmelighed 🤭", "Dans i 15 sek 💃"] }
      },
      faqs: [
        { q: "Kan jeg skrive mine egne spørgsmål og udfordringer?", a: "Ja, slet felterne og indsæt op til 500 egne spørgsmål." }
      ]
    },
    no: {
      name: "Nødt eller Sannhet Hjul",
      title: "Nødt eller Sannhet Hjul | Gratis Festspill på Nett",
      description: "Spinn Nødt eller Sannhet-hjulet gratis for fester, overnattinger og spillkvelder. Inkluderer familievennlig og klassisk 50/50-modus.",
      heroTitle: "Nødt eller Sannhet Hjul",
      heroHighlight: "Morsomt Fest- og Spillkveldhjul",
      heroSubtitle: "La hjulet avgjøre hvem som får Sannhet, Nødt, Dobbel Nødt eller Fripass uten diskusjon.",
      quickAnswer: "<strong>Hva er Nødt eller Sannhet Hjulet?</strong> Et gratis partyspill i nettleseren med klassisk 50/50-modus og trygge familieutfordringer.",
      items: ["Sannhet 🤫", "Nødt 😈", "Sannhet 🤫", "Nødt 😈", "Dobbel Nødt 🔥", "Fripass 🌟"],
      presets: {
        classic: { label: "Klassisk 50/50", items: ["Sannhet 🤫", "Nødt 😈", "Sannhet 🤫", "Nødt 😈"] },
        family: { label: "Familievennlig", items: ["Fortell en vits 🤡", "Lag en dyrelyd 🦁", "Del en morsom hemmelighet 🤭", "Dans i 15 sek 💃"] }
      },
      faqs: [
        { q: "Finnes det barne- og familievennlige utfordringer?", a: "Ja, velg forhåndsvalget 'Familievennlig' rett over listen." }
      ]
    },
    nl: {
      name: "Doen of Durven Rad",
      title: "Doen of Durven Rad Online | Gratis Feestspel Spinner",
      description: "Draai het Doen of Durven Rad gratis tijdens feestjes, logeerpartijen en spelavonden. Inclusief 50/50 en gezinsvriendelijke opdrachten.",
      heroTitle: "Doen of Durven Rad",
      heroHighlight: "Feest- & Spelavond Opdrachtenrad",
      heroSubtitle: "Breng direct energie op elk feestje—draai voor Doen, De Waarheid, Dubbele Uitdaging of Vrijstelling.",
      quickAnswer: "<strong>Wat is het Doen of Durven Rad?</strong> Een gratis online gezelschapsspel met klassieke 50/50-modus en veilige familie-opdrachten zonder account.",
      items: ["Waarheid 🤫", "Durven 😈", "Waarheid 🤫", "Durven 😈", "Dubbel Durven 🔥", "Vrijstelling 🌟"],
      presets: {
        classic: { label: "Klassiek 50/50", items: ["Waarheid 🤫", "Durven 😈", "Waarheid 🤫", "Durven 😈"] },
        family: { label: "Gezinsvriendelijk", items: ["Vertel een grap 🤡", "Doe een dier na 🦁", "Lief compliment geven 💖", "15 sec gek dansen 💃"] }
      },
      faqs: [
        { q: "Zijn er kindvriendelijke opdrachten beschikbaar?", a: "Ja, kies de knop 'Gezinsvriendelijk' boven de invoerlijst." }
      ]
    },
    it: {
      name: "Ruota Obbligo o Verità",
      title: "Ruota Obbligo o Verità Online | Gioco Feste Gratis",
      description: "Gira la Ruota Obbligo o Verità gratis per feste, pigiama party e serate tra amici. Modalità classica 50/50 o per tutta la famiglia.",
      heroTitle: "Ruota Obbligo o Verità",
      heroHighlight: "Sfide & Domande per Serate e Feste",
      heroSubtitle: "Evita discussioni su chi tocca: lascia che la ruota assegni Verità, Obbligo o Sfida Doppia.",
      quickAnswer: "<strong>Cos'è la Ruota Obbligo o Verità?</strong> Un gioco da festa gratuito con modalità 50/50 e sfide pulite per famiglie, personalizzabile fino a 500 voci.",
      items: ["Verità 🤫", "Obbligo 😈", "Verità 🤫", "Obbligo 😈", "Doppio Obbligo 🔥", "Jolly 🌟"],
      presets: {
        classic: { label: "Classico 50/50", items: ["Verità 🤫", "Obbligo 😈", "Verità 🤫", "Obbligo 😈"] },
        family: { label: "Per Famiglie", items: ["Racconta una barzelletta 🤡", "Imita un animale 🦁", "Fai un complimento 💖", "Ballo buffo 15 sec 💃"] }
      },
      faqs: [
        { q: "Posso aggiungere domande e penitenze personalizzate?", a: "Sì, cancella la lista e incolla fino a 500 sfide personalizzate." }
      ]
    },
    ja: {
      name: "真実か挑戦かルーレット",
      title: "真実か挑戦かルーレット無料 | パーティーゲーム",
      description: "飲み会・ホームパーティー・友達との通話が盛り上がる無料の「真実か挑戦か」ルーレット。家族向けクリーンモード搭載。",
      heroTitle: "真実か挑戦かルーレット",
      heroHighlight: "定番パーティー罰ゲーム＆お題ルーレット",
      heroSubtitle: "公平なルーレットで「真実（Truth）」「挑戦（Dare）」「ダブル挑戦」を盛り上げよう！",
      quickAnswer: "<strong>真実か挑戦かルーレットとは？</strong> 定番50/50モードやファミリー向けの安心なお題パックを備えた無料ブラウザパーティーゲームです。",
      items: ["真実 🤫", "挑戦 😈", "真実 🤫", "挑戦 😈", "ダブル挑戦 🔥", "パス券 🌟"],
      presets: {
        classic: { label: "定番 50/50", items: ["真実 🤫", "挑戦 😈", "真実 🤫", "挑戦 😈"] },
        family: { label: "家族＆安心モード", items: ["面白い一発芸 🤡", "動物のモノマネ 🦁", "左の人を褒める 💖", "15秒全力ダンス 💃"] }
      },
      faqs: [
        { q: "オリジナルのお題や罰ゲームを入れられますか？", a: "はい、最大500個まで自由にお題を追加・保存できます。" }
      ]
    },
    ko: {
      name: "진실 혹은 도전 돌림판",
      title: "진실 혹은 도전 룰렛 무료 | 파티·술자리 벌칙 돌림판",
      description: "친구 모임, MT, 홈파티 분위기를 살리는 무료 진실 혹은 도전 룰렛! 가족용 순한맛부터 파티용까지 바로 돌려보세요.",
      heroTitle: "진실 혹은 도전 돌림판",
      heroHighlight: "모임과 파티를 위한 랜덤 벌칙 룰렛",
      heroSubtitle: "진실, 도전, 더블 도전, 프리 패스까지 공정한 돌림판으로 눈치 게임 없이 즐겨보세요.",
      quickAnswer: "<strong>진실 혹은 도전 돌림판이란?</strong> 50/50 기본 모드와 가족·학생용 안전 프리셋을 제공하는 무료 브라우저 파티 게임입니다.",
      items: ["진실 🤫", "도전 😈", "진실 🤫", "도전 😈", "더블 도전 🔥", "프리 패스 🌟"],
      presets: {
        classic: { label: "기본 50/50", items: ["진실 🤫", "도전 😈", "진실 🤫", "도전 😈"] },
        family: { label: "가족·순한맛", items: ["재미있는 농담하기 🤡", "동물 성대모사 🦁", "옆 사람 칭찬하기 💖", "15초 막춤 추기 💃"] }
      },
      faqs: [
        { q: "우리 모임만의 벌칙을 직접 추가할 수 있나요?", a: "네! 최대 500개의 질문을 직접 입력하거나 일괄 붙여넣기로 꾸밀 수 있습니다." }
      ]
    }
  },

  /* =========================================================
     DE, FR, ES EXPANSION TO 16 TOOLS (+4 EACH)
  ========================================================= */
  "classroom-name-picker": {
    de: {
      name: "Klassenraum Namensrad",
      title: "Klassenraum Namensrad | Schüler Zufallsgenerator",
      description: "Schüler fair im Unterricht auswählen mit dem kostenlosen Namensrad. Klassenlisten einfügen, im Vollbild projizieren & Doppelnennungen vermeiden.",
      heroTitle: "Klassenraum Namensrad",
      heroHighlight: "Fairer Schüler-Zufallsgenerator für Lehrer",
      heroSubtitle: "Fügen Sie bis zu 500 Schülernamen lokal im Browser ein — ohne Anmeldung, ohne Datenspeicherung auf Servern.",
      quickAnswer: "<strong>Was ist das Klassenraum Namensrad?</strong> Ein datenschutzfreundlicher Zufallsgenerator für Whiteboards und Beamer mit automatischer Gewinner-Entfernung.",
      items: ["Emma", "Ben", "Hannah", "Jonas", "Mia", "Leon", "Sofia", "Lukas", "Lea", "Paul"],
      presets: {
        class: { label: "Schülerliste", items: ["Emma", "Ben", "Hannah", "Jonas", "Mia", "Leon", "Sofia", "Lukas"] },
        roles: { label: "Klassendienste", items: ["Tafeldienst 🧽", "Austeildienst 📄", "Zeitwächter ⏱️", "Gruppensprecher 🎤"] }
      },
      faqs: [
        { q: "Werden Schülernamen an Server übertragen?", a: "Nein. Alle Namen verbleiben zu 100 % lokal im Arbeitsspeicher Ihres Browsers." }
      ]
    },
    fr: {
      name: "Roue Prénoms Classe",
      title: "Roue des Prénoms Classe | Tirage Élèves Gratuit",
      description: "Interrogez vos élèves équitablement avec la Roue Classe gratuite. Collez jusqu'à 500 prénoms, activez le mode plein écran et évitez les doublons.",
      heroTitle: "Roue Prénoms Classe",
      heroHighlight: "Sélecteur Aléatoire d'Élèves Sans Biais",
      heroSubtitle: "Projetez la roue sur tableau interactif et donnez la parole à chacun équitablement sans inscription.",
      quickAnswer: "<strong>À quoi sert la Roue Prénoms Classe ?</strong> Un outil scolaire confidentiel (100 % local dans le navigateur) pour tirer au sort les élèves avec élimination automatique.",
      items: ["Léo", "Emma", "Gabriel", "Jade", "Raphaël", "Louise", "Arthur", "Alice", "Louis", "Chloé"],
      presets: {
        class: { label: "Liste de Classe", items: ["Léo", "Emma", "Gabriel", "Jade", "Raphaël", "Louise", "Arthur", "Alice"] },
        roles: { label: "Rôles en Classe", items: ["Chef de groupe ⭐", "Rapporteur 📝", "Gardien du temps ⏱️", "Distributeur 📄"] }
      },
      faqs: [
        { q: "Comment éviter d'interroger deux fois le même élève ?", a: "Activez « Supprimer le gagnant après le tour » dans les paramètres." }
      ]
    },
    es: {
      name: "Ruleta Escolar de Nombres",
      title: "Ruleta para Elegir Alumnos | Selector Escolar Gratis",
      description: "Elige estudiantes al azar de forma justa en clase con nuestra ruleta escolar gratis. Pega hasta 500 nombres y proyecta en pizarra digital.",
      heroTitle: "Ruleta Escolar de Nombres",
      heroHighlight: "Selector Imparcial de Alumnos para Profesores",
      heroSubtitle: "Pega la lista desde Excel o Google Classroom y evita repetir alumnos activando la eliminación automática.",
      quickAnswer: "<strong>¿Qué es la Ruleta Escolar de Nombres?</strong> Una herramienta educativa gratuita y 100 % privada que funciona en el navegador para llamar alumnos al azar sin registro.",
      items: ["Sofía", "Mateo", "Valentina", "Santiago", "Lucía", "Sebastián", "Camila", "Matías", "Valeria", "Daniel"],
      presets: {
        class: { label: "Lista de Clase", items: ["Sofía", "Mateo", "Valentina", "Santiago", "Lucía", "Sebastián", "Camila", "Matías"] },
        roles: { label: "Roles de Aula", items: ["Portavoz 🎤", "Secretario 📝", "Control de tiempo ⏱️", "Líder de equipo ⭐"] }
      },
      faqs: [
        { q: "¿Se guardan los nombres de mis alumnos en algún servidor?", a: "No. Toda la lista se procesa exclusivamente de forma local en tu navegador." }
      ]
    }
  },

  "team-picker-wheel": {
    de: {
      name: "Team Generator Rad",
      title: "Zufälliger Team-Generator | Gruppenrad Kostenlos",
      description: "Teilen Sie Schüler, Sportspieler oder Kollegen fair in zufällige Teams ein. Ideal für Sportunterricht, Workshops und Gaming-Abende.",
      heroTitle: "Team Generator Rad",
      heroHighlight: "Faire Gruppen- & Mannschaftsauslosung",
      heroSubtitle: "Entfernen Sie gezogene Teilnehmer automatisch und bilden Sie ausgewogene Gruppen ohne Diskussion.",
      quickAnswer: "<strong>Wie funktioniert das Team Generator Rad?</strong> Fügen Sie alle Namen hinzu, aktivieren Sie die Gewinner-Entfernung und ziehen Sie abwechselnd Team Rot und Team Blau.",
      items: ["Spieler 1", "Spieler 2", "Spieler 3", "Spieler 4", "Spieler 5", "Spieler 6", "Spieler 7", "Spieler 8"],
      presets: {
        colors: { label: "4 Farbteams", items: ["Team Rot 🔴", "Team Blau 🔵", "Team Grün 🟢", "Team Gelb 🟡"] },
        tables: { label: "Gruppentische 1–6", items: ["Tisch 1", "Tisch 2", "Tisch 3", "Tisch 4", "Tisch 5", "Tisch 6"] }
      },
      faqs: [
        { q: "Wie bilde ich zwei faire Mannschaften?", a: "Schalten Sie 'Gewinner entfernen' ein und ordnen Sie die gezogenen Namen abwechselnd Team A und Team B zu." }
      ]
    },
    fr: {
      name: "Roue Générateur d'Équipes",
      title: "Roue Générateur d'Équipes | Groupes Aléatoires Gratis",
      description: "Répartissez élèves, joueurs ou collègues en équipes équilibrées au hasard. Mode élimination sans répétition et export CSV gratuit.",
      heroTitle: "Roue Générateur d'Équipes",
      heroHighlight: "Création Équitable de Groupes & Équipes",
      heroSubtitle: "Idéal pour le sport, les travaux de groupe ou les tournois entre amis sans favoritisme.",
      quickAnswer: "<strong>À quoi sert la Roue Générateur d'Équipes ?</strong> Elle permet de tirer les participants un par un pour former des équipes Rouge/Bleue ou des groupes de travail équitables.",
      items: ["Joueur 1", "Joueur 2", "Joueur 3", "Joueur 4", "Joueur 5", "Joueur 6", "Joueur 7", "Joueur 8"],
      presets: {
        colors: { label: "4 Équipes Couleur", items: ["Équipe Rouge 🔴", "Équipe Bleue 🔵", "Équipe Verte 🟢", "Équipe Or 🟡"] },
        tables: { label: "Groupes 1 à 6", items: ["Groupe 1", "Groupe 2", "Groupe 3", "Groupe 4", "Groupe 5", "Groupe 6"] }
      },
      faqs: [
        { q: "Comment répartir une classe en deux équipes ?", a: "Activez l'élimination du gagnant et alternez chaque nom tiré entre l'Équipe A et l'Équipe B." }
      ]
    },
    es: {
      name: "Ruleta Generadora de Equipos",
      title: "Ruleta para Formar Equipos | Grupos Aleatorios Gratis",
      description: "Divide estudiantes, jugadores o compañeros en equipos aleatorios justos. Usa el modo eliminación para sortear grupos sin peleas.",
      heroTitle: "Ruleta Generadora de Equipos",
      heroHighlight: "Sorteo Justo de Grupos y Equipos",
      heroSubtitle: "Activa la eliminación automática y asigna jugadores a Equipo Rojo, Azul o mesas de trabajo en segundos.",
      quickAnswer: "<strong>¿Cómo crear equipos con la ruleta?</strong> Pega la lista de participantes, activa 'Eliminar ganador' y asigna cada turno alternando entre equipos.",
      items: ["Jugador 1", "Jugador 2", "Jugador 3", "Jugador 4", "Jugador 5", "Jugador 6", "Jugador 7", "Jugador 8"],
      presets: {
        colors: { label: "4 Equipos", items: ["Equipo Rojo 🔴", "Equipo Azul 🔵", "Equipo Verde 🟢", "Equipo Oro 🟡"] },
        tables: { label: "Mesas 1–6", items: ["Mesa 1", "Mesa 2", "Mesa 3", "Mesa 4", "Mesa 5", "Mesa 6"] }
      },
      faqs: [
        { q: "¿Sirve para armar equipos en educación física o gaming?", a: "Sí, es ideal para partidos escolares, torneos y dinámicas laborales." }
      ]
    }
  },

  "prize-wheel": {
    de: {
      name: "Gewinnrad & Preisrad",
      title: "Digitales Preisrad | Kostenloses Messe-Glücksrad",
      description: "Erstellen Sie ein digitales Preisrad für Messen, Schulbelohnungen, Events & Rabatte. Individuelle Gewinnchancen von 1x bis 20x einstellen.",
      heroTitle: "Digitales Preisrad",
      heroHighlight: "Messe-, Event- & Rabatt-Glücksrad",
      heroSubtitle: "Legen Sie attraktive Hauptpreise und häufigere Kleingewinne fest mit präzisen Sektor-Gewichtungen.",
      quickAnswer: "<strong>Was ist das digitale Preisrad?</strong> Ein kostenloses Event-Glücksrad mit einstellbaren Wahrscheinlichkeiten (1x–20x), Casino-Gold-Design und Konfetti.",
      items: ["Hauptgewinn 🏆", "20 % Rabatt 🏷️", "10 % Rabatt 🎟️", "Gratis-Geschenk 🎁", "Nochmal drehen 🔄", "Überraschungsbox 📦"],
      presets: {
        promo: { label: "Shop-Rabatte", items: ["25 % Rabatt 🌟", "15 % Rabatt 🏷️", "10 % Rabatt 🎟️", "Gratis Versand 🚚"] },
        school: { label: "Schulbelohnungen", items: ["Hausaufgabengutschein 📝", "Wunschspiel 🎮", "1. in der Reihe ⭐", "Kleiner Preis 🎁"] }
      },
      faqs: [
        { q: "Wie mache ich den Hauptgewinn seltener als Rabattcodes?", a: "Belassen Sie den Hauptgewinn bei 1x und erhöhen Sie kleinere Gewinne per + Taste auf 5x bis 10x." }
      ]
    },
    fr: {
      name: "Roue des Prix & Cadeaux",
      title: "Roue des Prix en Ligne | Roue Promo & Événements",
      description: "Créez une roue des prix gratuite pour salons, stands, classe ou codes promo. Réglez facilement les probabilités de 1x à 20x par lot.",
      heroTitle: "Roue des Prix en Ligne",
      heroHighlight: "Roue Interactive pour Stands & Récompenses",
      heroSubtitle: "Affichez votre roue en plein écran sur tablette ou écran et ajustez la fréquence de chaque lot.",
      quickAnswer: "<strong>Qu'est-ce que la Roue des Prix ?</strong> Une roue personnalisable gratuite permettant de pondérer chaque récompense (1x–20x) avec effets sonores et confettis.",
      items: ["Grand Prix 🏆", "-20 % Promo 🏷️", "-10 % Promo 🎟️", "Cadeau Surprise 🎁", "Rejouer 🔄", "Lot Bonus 📦"],
      presets: {
        promo: { label: "Promotions Boutique", items: ["-25 % 🌟", "-15 % 🏷️", "-10 % 🎟️", "Livraison Gratuite 🚚"] },
        school: { label: "Récompenses Classe", items: ["Joker Devoir 📝", "Choix du Jeu 🎮", "Chef de rang ⭐", "Petit Cadeau 🎁"] }
      },
      faqs: [
        { q: "Comment rendre le Grand Prix plus rare ?", a: "Laissez le Grand Prix à 1x et augmentez les autres lots à 5x ou 10x avec le bouton +." }
      ]
    },
    es: {
      name: "Ruleta de Premios",
      title: "Ruleta de Premios Online | Sorteos, Eventos y Descuentos",
      description: "Crea una ruleta de premios gratis para ferias, promociones, streams o recompensas escolares. Ajusta probabilidades de 1x a 20x.",
      heroTitle: "Ruleta de Premios",
      heroHighlight: "Ruleta Promocional y de Recompensas Gratis",
      heroSubtitle: "Configura descuentos, regalos y premios mayores ajustando el peso exacto de cada sector.",
      quickAnswer: "<strong>¿Qué es la Ruleta de Premios?</strong> Una ruleta digital gratuita para eventos y tiendas con pesos configurables (1x–20x), pantalla completa y confeti.",
      items: ["Premio Mayor 🏆", "20 % Descuento 🏷️", "10 % Descuento 🎟️", "Regalo Sorpresa 🎁", "Tira de nuevo 🔄", "Caja Misteriosa 📦"],
      presets: {
        promo: { label: "Descuentos Tienda", items: ["25 % DTO 🌟", "15 % DTO 🏷️", "10 % DTO 🎟️", "Envío Gratis 🚚"] },
        school: { label: "Premios Escolares", items: ["Sin tarea hoy 📝", "Elegir juego 🎮", "Primero en fila ⭐", "Pegatina premio 🎁"] }
      },
      faqs: [
        { q: "¿Puedo dar menos probabilidad al premio mayor?", a: "Sí, deja el premio mayor en 1x y sube los premios frecuentes a 5x–10x usando el botón +." }
      ]
    }
  },

  "randomizer-number-1-100": {
    de: {
      name: "Zufallszahl 1 bis 100 Rad",
      title: "Zufallszahl 1 bis 100 Rad | Kostenloses 100-Felder-Rad",
      description: "Drehen Sie das 1 bis 100 Zahlenrad kostenlos für faire Zufallszahlen, 100-Los-Tombolas, Prozentwürfe und den Mathematikunterricht.",
      heroTitle: "Zufallszahl 1 bis 100",
      heroHighlight: "100-Felder Glücksrad mit Web Cryptography",
      heroSubtitle: "Jede Zahl von 1 bis 100 besitzt exakt 1 % Gewinnchance — mit optionaler Entfernung gezogener Lose.",
      quickAnswer: "<strong>Was ist das 1–100 Zahlenrad?</strong> Ein 100-teiliges Zufallsrad für Verlosungen, Prozentexperimente und Unterricht mit CSV-Export.",
      items: num100,
      presets: {
        all100: { label: "Alle Zahlen 1–100", items: num100 },
        tens: { label: "10er-Schritte (10–100)", items: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"] }
      },
      faqs: [
        { q: "Haben alle 100 Zahlen die exakt gleiche Wahrscheinlichkeit?", a: "Ja, jede Zahl hat genau 1 % Chance dank Web Cryptography ohne Modulo-Verzerrung." }
      ]
    },
    fr: {
      name: "Roue Aléatoire 1 à 100",
      title: "Roue Aléatoire 1 à 100 | Tirage Numéros Gratuit",
      description: "Faites tourner la roue de 1 à 100 gratuitement pour tombolas, grilles à 100 cases, pourcentages et cours de mathématiques.",
      heroTitle: "Roue Aléatoire 1 à 100",
      heroHighlight: "Roue Complète 100 Numéros Sans Biais",
      heroSubtitle: "Chaque entier de 1 à 100 occupe exactement 1 % du cercle grâce au générateur cryptographique du navigateur.",
      quickAnswer: "<strong>Qu'est-ce que la Roue 1 à 100 ?</strong> Une roue numérique à 100 parts égales idéale pour tombolas, jeux et probabilités avec suppression des numéros sortis.",
      items: num100,
      presets: {
        all100: { label: "Nombres 1 à 100", items: num100 },
        tens: { label: "Dizaines (10–100)", items: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"] }
      },
      faqs: [
        { q: "Peut-on tirer plusieurs numéros gagnants sans doublon ?", a: "Oui, activez « Supprimer le gagnant après le tour » dans les paramètres." }
      ]
    },
    es: {
      name: "Ruleta del 1 al 100",
      title: "Ruleta de Números del 1 al 100 | Sorteo Gratis",
      description: "Gira la ruleta del 1 al 100 gratis para rifas, bingos, sorteos de 100 boletos y porcentajes con aleatoriedad criptográfica imparcial.",
      heroTitle: "Ruleta del 1 al 100",
      heroHighlight: "Selector Aleatorio de 100 Números Gratis",
      heroSubtitle: "Cada número del 1 al 100 tiene exactamente 1 % de probabilidad y puedes eliminar boletos ya premiados.",
      quickAnswer: "<strong>¿Qué es la Ruleta del 1 al 100?</strong> Una ruleta completa de 100 sectores iguales diseñada para rifas escolares, sorteos y juegos con exportación CSV.",
      items: num100,
      presets: {
        all100: { label: "Números 1–100", items: num100 },
        tens: { label: "Decenas (10–100)", items: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"] }
      },
      faqs: [
        { q: "¿Puedo evitar que salga dos veces el mismo boleto del 1 al 100?", a: "Sí, activa 'Eliminar ganador después de girar' en Configuración." }
      ]
    }
  }
};
