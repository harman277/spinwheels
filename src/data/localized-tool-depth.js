/**
 * Native localized depth generator for all 19 non-English indexable languages + English.
 * Eliminates thin/repetitive localized wheel pages and generic homepage FAQ padding
 * by generating tool-contextualized native FAQs, preset probability tables, and slice rosters.
 */

const DEPTH_COPY = {
  es: {
    companionLabel: "Ruletas en Español:",
    tableHeading: (name) => `Tabla de Modos Predefinidos y Probabilidades de ${name}`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} incluye ${count} opciones precargadas en su configuración principal, otorgando a cada sector una probabilidad matemática exacta de 1/${count} (${pct}%) por giro mediante la API Web Cryptography (window.crypto.getRandomValues). Además, puedes alternar instantáneamente entre ${pCount} modos predefinidos o pegar hasta 500 entradas personalizadas.`,
    colPreset: "Modo Predefinido",
    colCount: "Opciones",
    colOdds: "Probabilidad (1/N)",
    colSample: "Ejemplos Incluidos en la Ruleta",
    rosterHeading: (name, count) => `Lista Completa de Opciones Precargadas (${count} Sectores)`,
    rosterIntro: (name, count, pct) =>
      `A continuación se muestran todas las entradas activas por defecto en ${name}. Cada opción tiene un peso inicial de 1x (${pct}% de probabilidad) y puede editarse, eliminarse automáticamente tras salir premiada o ajustarse con pesos de 1x a 20x directamente desde el panel de control:`,
    hubGuideTitle: "Guía Completa de la Ruleta Aleatoria y Sorteos Criptográficos",
    hubGuideSubtitle: "Funcionamiento matemático, modos predefinidos y consejos para aulas, sorteos en vivo y juegos.",
    hubGuideIntro:
      "Nuestra ruleta aleatoria en español funciona directamente en el navegador utilizando entropía de hardware real a través de window.crypto.getRandomValues(), garantizando que cada participante o elección tenga exactamente la misma probabilidad matemática sin sesgos algorítmicos.",
    hubGuideParas: [
      "Para sorteos multicapa, dinámicas escolares en pizarra digital o directos en Twitch y YouTube, activa la opción de eliminar ganador tras cada giro para realizar selecciones sin reemplazo (1/N, luego 1/(N-1)) y descarga el historial con marca de tiempo en formato CSV.",
      "Todas las listas personalizadas se guardan exclusivamente en la memoria local de tu dispositivo (localStorage) o en enlaces compartibles codificados (?w=), protegiendo al 100% la privacidad de tus alumnos o participantes."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `¿Cuántas opciones vienen precargadas en ${name} y cuál es la probabilidad de cada una?`,
        a: `${name} carga por defecto ${count} opciones (${sample}…). Con pesos iguales de 1x, cada sector tiene exactamente 1/${count} (${pct}%) de probabilidad matemática certificada mediante window.crypto.getRandomValues().`
      },
      {
        q: `¿Qué modos rápidos incluye ${name} y cómo puedo personalizarlos?`,
        a: `Incluye los modos predefinidos: ${presets}. Puedes hacer clic en cualquiera de ellos para cargar la lista al instante, borrar elementos individuales con ✕ o pegar hasta 500 opciones propias con Pegado Masivo.`
      },
      {
        q: `¿Cómo evito que se repita el mismo resultado al girar ${name} varias veces?`,
        a: `Activa el interruptor «Eliminar Ganador Después del Giro» en Configuración (o pulsa Eliminar Ganador en la ventana emergente). Cada opción premiada se retirará automáticamente para los siguientes turnos.`
      },
      {
        q: `¿Puedo compartir mi configuración personalizada de ${name} o exportarla a Excel/CSV?`,
        a: `Sí. Usa «Compartir Ruleta» o «Código QR» para generar un enlace directo con tus opciones personalizadas, y pulsa «Exportar CSV» en el historial para descargar todos los resultados con hora exacta.`
      }
    ]
  },

  pt: {
    companionLabel: "Roletas em Português:",
    tableHeading: (name) => `Tabela de Predefinições e Probabilidades – ${name}`,
    tableIntro: (name, count, pct, pCount) =>
      `A ferramenta ${name} vem configurada com ${count} opções iniciais, garantindo a cada fatia uma probabilidade exata de 1/${count} (${pct}%) por giro através da API Web Cryptography (window.crypto.getRandomValues). Você pode alternar com um clique entre ${pCount} listas prontas ou colar até 500 itens personalizados.`,
    colPreset: "Lista Predefinida",
    colCount: "Itens",
    colOdds: "Chance por Giro (1/N)",
    colSample: "Amostra de Opções Incluídas",
    rosterHeading: (name, count) => `Lista Completa de Itens Pré-carregados (${count} Fatias)`,
    rosterIntro: (name, count, pct) =>
      `Confira abaixo todos os ${count} itens ativos por padrão na ${name}. Cada entrada possui peso inicial 1x (${pct}% de chance) e pode ser ajustada com pesos de 1x a 20x, embaralhada ou removida automaticamente após cada sorteio:`,
    hubGuideTitle: "Guia Completo da Roleta Aleatória e Sorteios Criptográficos",
    hubGuideSubtitle: "Probabilidade 1/N exata, listas predefinidas e dicas práticas para salas de aula, lives e sorteios.",
    hubGuideIntro:
      "Nossa roleta online em português executa todos os sorteios localmente no seu navegador usando entropia criptográfica (window.crypto.getRandomValues), assegurando transparência absoluta e chance rigorosamente igual para cada fatia.",
    hubGuideParas: [
      "Seja para sortear alunos em tela cheia no projetor da escola, realizar rifas e giveaways ao vivo com exportação em CSV, ou brincar de Stop/Adedonha e Verdade ou Desafio, basta ativar a remoção automática do vencedor para evitar repetições.",
      "Nenhuma lista de nomes é enviada para servidores externos: seus dados permanecem salvos apenas no armazenamento local (localStorage) do seu aparelho ou no link compartilhável com QR Code."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `Quantos itens vêm carregados na ${name} e qual é a chance de cada fatia?`,
        a: `A ${name} traz ${count} opções padrão (${sample}…). Com peso padrão 1x, cada fatia possui exatamente 1/${count} (${pct}%) de probabilidade real gerada via Web Cryptography API.`
      },
      {
        q: `Quais modos predefinidos estão disponíveis na ${name}?`,
        a: `Você pode alternar instantaneamente entre os modos: ${presets}. Além disso, é possível adicionar, excluir ou colar em massa até 500 opções personalizadas.`
      },
      {
        q: `Como não repetir itens já sorteados na ${name}?`,
        a: `Ative a opção «Remover Vencedor Após Girar» nas configurações. Assim, cada item sorteado é eliminado automaticamente antes da próxima rodada.`
      },
      {
        q: `Posso compartilhar minha ${name} personalizada por link ou QR Code?`,
        a: `Sim! Clique em «Compartilhar Roleta» ou «Código QR» para enviar sua lista exata para alunos, amigos ou espectadores, e exporte o histórico de giros em arquivo CSV.`
      }
    ]
  },

  fr: {
    companionLabel: "Roues en Français :",
    tableHeading: (name) => `Tableau des Préréglages et Probabilités – ${name}`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} comprend ${count} options préchargées par défaut, offrant à chaque segment une probabilité mathématique exacte de 1/${count} (${pct}%) par lancer grâce à l'API Web Cryptography (window.crypto.getRandomValues). Basculez en un clic parmi ${pCount} modes prédéfinis ou collez jusqu'à 500 entrées personnalisées.`,
    colPreset: "Mode Prédéfini",
    colCount: "Segments",
    colOdds: "Probabilité (1/N)",
    colSample: "Aperçu des Options Incluses",
    rosterHeading: (name, count) => `Liste Complète des Options Préchargées (${count} Segments)`,
    rosterIntro: (name, count, pct) =>
      `Voici l'ensemble des ${count} entrées actives par défaut dans ${name}. Chaque segment débute avec une pondération de 1x (${pct}% de chance) et peut être pondéré de 1x à 20x, mélangé ou éliminé automatiquement après chaque tirage :`,
    hubGuideTitle: "Guide Complet de la Roue Aléatoire et du Tirage Cryptographique",
    hubGuideSubtitle: "Équité mathématique 1/N, préréglages rapides et bonnes pratiques pour la classe, les streams et les tirages au sort.",
    hubGuideIntro:
      "Notre roue aléatoire en français fonctionne à 100 % côté client dans votre navigateur via window.crypto.getRandomValues(), garantissant un tirage au sort impartial, sans biais algorithmique et sans inscription.",
    hubGuideParas: [
      "Pour interroger des élèves sur tableau numérique en mode plein écran, animer une tombola en direct avec export CSV horodaté ou répartir des équipes, activez l'élimination automatique du gagnant afin qu'aucun choix ne sorte deux fois.",
      "Vos listes de prénoms et configurations restent stockées uniquement dans la mémoire locale de votre appareil (localStorage) pour une confidentialité totale conforme au RGPD."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `Combien d'options sont préchargées dans ${name} et quelle est la probabilité de gain ?`,
        a: `${name} contient ${count} segments par défaut (${sample}…). À pondération égale (1x), chaque segment dispose d'une probabilité exacte de 1/${count} (${pct}%) calculée par l'API Web Cryptography.`
      },
      {
        q: `Quels sont les modes prédéfinis inclus dans ${name} ?`,
        a: `Vous disposez des préréglages suivants : ${presets}. Vous pouvez charger n'importe quel mode en un clic ou coller votre propre liste jusqu'à 500 entrées.`
      },
      {
        q: `Comment éviter qu'un même résultat ne sorte deux fois sur ${name} ?`,
        a: `Activez l'option « Supprimer le gagnant après le tour » dans les paramètres pour retirer automatiquement chaque segment tiré au sort lors des manches suivantes.`
      },
      {
        q: `Peut-on partager une version personnalisée de ${name} ou exporter les résultats ?`,
        a: `Oui, cliquez sur « Partager la roue » ou « Code QR » pour transmettre votre roue personnalisée, et utilisez « Exporter CSV » pour télécharger l'historique complet des tirages.`
      }
    ]
  },

  de: {
    companionLabel: "Glücksräder auf Deutsch:",
    tableHeading: (name) => `Übersicht der Vorlagen & Gewinnwahrscheinlichkeiten – ${name}`,
    tableIntro: (name, count, pct, pCount) =>
      `Das ${name} ist standardmäßig mit ${count} Einträgen geladen, sodass jedes Segment dank der Web Cryptography API (window.crypto.getRandomValues) eine exakte mathematische Wahrscheinlichkeit von 1/${count} (${pct}%) pro Drehung besitzt. Sie können sofort zwischen ${pCount} Schnellvorlagen wechseln oder bis zu 500 eigene Optionen einfügen.`,
    colPreset: "Schnellvorlage / Modus",
    colCount: "Einträge",
    colOdds: "Wahrscheinlichkeit (1/N)",
    colSample: "Enthaltene Beispieloptionen",
    rosterHeading: (name, count) => `Vollständige Liste der voreingestellten Optionen (${count} Segmente)`,
    rosterIntro: (name, count, pct) =>
      `Hier sehen Sie alle ${count} Standardeinträge im ${name}. Jedes Feld hat ein Startgewicht von 1x (${pct}% Chance) und lässt sich im Bedienfeld von 1x bis 20x gewichten, mischen oder nach einem Treffer automatisch entfernen:`,
    hubGuideTitle: "Kompletter Leitfaden zum Zufallsrad & Kryptografischer Fairness",
    hubGuideSubtitle: "Mathematische 1/N-Gleichverteilung, Vorlagen und Praxistipps für Unterricht, Livestreams und Auslosungen.",
    hubGuideIntro:
      "Unser deutsches Glücksrad arbeitet vollständig lokal in Ihrem Browser mit echter Hardware-Entropie über window.crypto.getRandomValues() – für nachweisbar faire Auslosungen ohne Registrierung.",
    hubGuideParas: [
      "Ob beim Aufrufen von Schülerinnen und Schülern am Smartboard im Vollbildmodus, bei Gewinnspielen mit zeitgestempeltem CSV-Export oder bei Team-Entscheidungen: Mit der automatischen Gewinner-Entfernung ziehen Sie jede Option garantiert ohne Wiederholung.",
      "Alle eingegebenen Namen verbleiben DSGVO-freundlich ausschließlich im lokalen Speicher Ihres Endgeräts (localStorage) oder im verschlüsselten Teilen-Link."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `Wie viele Einträge sind im ${name} voreingestellt und wie hoch ist die Einzelwahrscheinlichkeit?`,
        a: `Im ${name} sind standardmäßig ${count} Optionen geladen (${sample}…). Bei gleichem Gewicht (1x) hat jedes Segment eine exakte Trefferchance von 1/${count} (${pct}%) über die Web Cryptography API.`
      },
      {
        q: `Welche Schnellvorlagen bietet das ${name}?`,
        a: `Sie können per Klick zwischen folgenden Vorlagen wechseln: ${presets}. Zusätzlich lassen sich per Masseneinfügen bis zu 500 eigene Einträge ergänzen.`
      },
      {
        q: `Wie verhindere ich doppelte Treffer beim mehrfachen Drehen des ${name}?`,
        a: `Aktivieren Sie in den Einstellungen den Schalter „Gewinner nach Drehung entfernen“, damit gezogene Segmente für die nächsten Runden automatisch ausscheiden.`
      },
      {
        q: `Kann ich mein angepasstes ${name} per Link, QR-Code oder CSV teilen?`,
        a: `Ja! Über „Rad teilen“ und „QR-Code“ erstellen Sie einen Direktlink zu Ihrer Liste, und im Verlauf exportieren Sie alle Drehungen als CSV-Datei.`
      }
    ]
  },

  it: {
    companionLabel: "Ruote in Italiano:",
    tableHeading: (name) => `Tabella dei Preset e delle Probabilità – ${name}`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} include ${count} opzioni precaricate, garantendo a ciascuno spicchio una probabilità matematica esatta di 1/${count} (${pct}%) a rotazione tramite Web Cryptography API (window.crypto.getRandomValues). Puoi passare con un clic tra ${pCount} preset rapidi o incollare fino a 500 voci personalizzate.`,
    colPreset: "Preset / Modalità",
    colCount: "Voci",
    colOdds: "Probabilità (1/N)",
    colSample: "Esempi di Opzioni Incluse",
    rosterHeading: (name, count) => `Elenco Completo delle Opzioni Precaricate (${count} Spicchi)`,
    rosterIntro: (name, count, pct) =>
      `Di seguito trovi tutte le ${count} voci predefinite di ${name}. Ogni elemento ha peso iniziale 1x (${pct}%) e può essere pesato da 1x a 20x, mescolato o rimosso automaticamente dopo l'estrazione:`,
    hubGuideTitle: "Guida Completa alla Ruota della Fortuna e all'Estrazione Crittografica",
    hubGuideSubtitle: "Probabilità uniforme 1/N, preset istantanei e consigli per scuole, giveaway e giochi di gruppo.",
    hubGuideIntro:
      "La nostra ruota della fortuna in italiano funziona interamente nel browser sfruttando l'entropia hardware di window.crypto.getRandomValues(), offrendo estrazioni imparziali e gratuite senza registrazione.",
    hubGuideParas: [
      "Ideale per interrogazioni scolastiche alla LIM in modalità schermo intero, estrazioni a premi con esportazione CSV e decisioni rapide: attiva la rimozione automatica del vincitore per evitare ripetizioni nei turni successivi.",
      "Tutte le liste personalizzate restano salvate esclusivamente nella memoria locale del tuo dispositivo (localStorage), tutelando la privacy di studenti e partecipanti."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `Quante opzioni sono precaricate in ${name} e qual è la probabilità di ciascuna?`,
        a: `${name} carica ${count} opzioni predefinite (${sample}…). Con peso uniforme 1x, ogni spicchio ha esattamente 1/${count} (${pct}%) di probabilità certificata tramite Web Cryptography API.`
      },
      {
        q: `Quali preset rapidi sono disponibili in ${name}?`,
        a: `Sono inclusi i seguenti preset: ${presets}. Puoi attivarli con un clic o incollare fino a 500 voci personalizzate.`
      },
      {
        q: `Come posso evitare che la stessa opzione esca due volte su ${name}?`,
        a: `Attiva l'opzione «Rimuovi vincitore dopo il giro» nelle impostazioni per escludere automaticamente ogni voce estratta dai giri successivi.`
      },
      {
        q: `Posso condividere ${name} tramite link o esportare la cronologia in CSV?`,
        a: `Certamente: usa «Condividi ruota» o «Codice QR» per inviare la tua configurazione e clicca su «Esporta CSV» per scaricare il registro completo delle estrazioni.`
      }
    ]
  },

  pl: {
    companionLabel: "Koła Fortuny po Polsku:",
    tableHeading: (name) => `Tabela Szablonów i Prawdopodobieństwa – ${name}`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} zawiera domyślnie ${count} pozycji, co daje każdemu segmentowi dokładne matematyczne prawdopodobieństwo 1/${count} (${pct}%) w każdym obrocie dzięki Web Cryptography API (window.crypto.getRandomValues). Możesz przełączać się między ${pCount} gotowymi szablonami lub wkleić do 500 własnych opcji.`,
    colPreset: "Szablon / Tryb",
    colCount: "Liczba Opcji",
    colOdds: "Szansa (1/N)",
    colSample: "Przykładowe Pozycje na Kole",
    rosterHeading: (name, count) => `Pełna Lista Domyślnych Opcji (${count} Segmentów)`,
    rosterIntro: (name, count, pct) =>
      `Poniżej znajduje się pełny wykaz ${count} domyślnych pozycji w narzędziu ${name}. Każda opcja ma początkową wagę 1x (${pct}% szansy) i może być modyfikowana wagami 1x–20x lub automatycznie usuwana po wylosowaniu:`,
    hubGuideTitle: "Kompletny Przewodnik po Kole Fortuny i Losowaniu Kryptograficznym",
    hubGuideSubtitle: "Uczciwy rozkład 1/N, szybkie szablony oraz wskazówki dla nauczycieli, streamerów i organizatorów konkursów.",
    hubGuideIntro:
      "Nasze polskie koło fortuny działa w 100% lokalnie w przeglądarce w oparciu o kryptograficzny generator window.crypto.getRandomValues(), zapewniając w pełni sprawiedliwe losowania bez zakładania konta.",
    hubGuideParas: [
      "Podczas wybierania uczniów do odpowiedzi na tablicy interaktywnej, losowania nagród na żywo z eksportem CSV czy gier towarzyskich włącz automatyczne usuwanie zwycięzcy, aby żadna pozycja nie powtórzyła się w kolejnych rundach.",
      "Wszystkie wpisane nazwiska i zapisane koła są przechowywane wyłącznie w pamięci lokalnej urządzenia (localStorage), co gwarantuje pełną prywatność danych."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `Ile opcji jest domyślnie wczytanych w ${name} i jaka jest szansa wylosowania każdej z nich?`,
        a: `${name} zawiera domyślnie ${count} opcji (${sample}…). Przy równej wadze 1x każdy wycinek ma dokładnie 1/${count} (${pct}%) szansy dzięki Web Cryptography API.`
      },
      {
        q: `Jakie gotowe szablony oferuje ${name}?`,
        a: `Dostępne są następujące szablony: ${presets}. Możesz wczytać dowolny z nich jednym kliknięciem lub wkleić własną listę do 500 pozycji.`
      },
      {
        q: `Jak wykluczyć powtarzanie się wylosowanych pozycji w ${name}?`,
        a: `Włącz opcję „Usuń zwycięzcę po obrocie” w ustawieniach, aby automatycznie eliminować wylosowane segmenty przed kolejnym zakręceniem.`
      },
      {
        q: `Czy mogę udostępnić własne ${name} linkiem i pobrać historię CSV?`,
        a: `Tak! Użyj przycisku udostępniania lub kodu QR, aby przekazać gotowe koło, oraz pobierz pełny rejestr losowań do pliku CSV.`
      }
    ]
  },

  vi: {
    companionLabel: "Vòng Quay Tiếng Việt:",
    tableHeading: (name) => `Bảng Chế Độ Mẫu & Xác Suất Toán Học – ${name}`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} được nạp sẵn ${count} lựa chọn mặc định, mang lại cho mỗi ô xác suất trúng chính xác 1/${count} (${pct}%) trong mỗi lượt quay nhờ Web Cryptography API (window.crypto.getRandomValues). Bạn có thể chuyển đổi nhanh giữa ${pCount} danh sách mẫu hoặc dán tối đa 500 mục tùy chỉnh.`,
    colPreset: "Chế Độ Mẫu",
    colCount: "Số Mục",
    colOdds: "Xác Suất (1/N)",
    colSample: "Các Lựa Chọn Tiêu Biểu",
    rosterHeading: (name, count) => `Danh Sách Đầy Đủ Các Mục Nạp Sẵn (${count} Ô)`,
    rosterIntro: (name, count, pct) =>
      `Dưới đây là toàn bộ ${count} mục mặc định trên ${name}. Mỗi mục có trọng số ban đầu 1x (${pct}% cơ hội) và có thể tùy chỉnh trọng số từ 1x đến 20x, xáo trộn hoặc tự động loại bỏ sau khi trúng:`,
    hubGuideTitle: "Hướng Dẫn Toàn Diện Về Vòng Quay May Mắn & Thuật Toán Ngẫu Nhiên",
    hubGuideSubtitle: "Xác suất 1/N công bằng tuyệt đối, mẫu nạp sẵn và mẹo sử dụng cho lớp học, livestream và bốc thăm.",
    hubGuideIntro:
      "Vòng quay may mắn tiếng Việt hoạt động 100% trực tiếp trên trình duyệt bằng nguồn ngẫu nhiên phần cứng window.crypto.getRandomValues(), đảm bảo kết quả minh bạch, không thiên vị và hoàn toàn miễn phí.",
    hubGuideParas: [
      "Khi gọi tên học sinh trên màn hình chiếu, quay số trúng thưởng livestream có xuất file CSV hoặc chơi trò chơi nhóm, hãy bật tính năng tự động xóa người chiến thắng để không ai bị gọi trùng lặp.",
      "Mọi danh sách tên chỉ lưu trữ cục bộ ngay trên thiết bị của bạn (localStorage) hoặc trong liên kết chia sẻ QR, bảo mật tuyệt đối dữ liệu cá nhân."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `${name} có sẵn bao nhiêu mục và tỷ lệ trúng của mỗi ô là bao nhiêu?`,
        a: `${name} nạp sẵn ${count} mục (${sample}…). Khi giữ trọng số đều 1x, mỗi ô có xác suất trúng chính xác là 1/${count} (${pct}%) thông qua Web Cryptography API.`
      },
      {
        q: `${name} hỗ trợ những chế độ mẫu (Presets) nào?`,
        a: `Công cụ bao gồm các mẫu nhanh: ${presets}. Bạn có thể bấm chọn ngay hoặc dán hàng loạt tối đa 500 mục riêng từ Excel.`
      },
      {
        q: `Làm sao để không quay trúng lại kết quả cũ trên ${name}?`,
        a: `Hãy bật tùy chọn "Xóa người thắng sau khi quay" trong phần Cài đặt để tự động loại bỏ ô vừa trúng khỏi các lượt quay tiếp theo.`
      },
      {
        q: `Tôi có thể chia sẻ ${name} qua mã QR và xuất lịch sử CSV không?`,
        a: `Có! Nhấn "Chia sẻ vòng quay" hoặc "Mã QR" để gửi danh sách của bạn cho mọi người và tải xuống nhật ký kết quả dưới dạng tệp CSV.`
      }
    ]
  },

  zh: {
    companionLabel: "中文热门转盘工具：",
    tableHeading: (name) => `${name} – 预设模式与数学概率明细表`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} 默认预载了 ${count} 个选项，借助浏览器硬件级 Web Cryptography API (window.crypto.getRandomValues)，每个扇区在单次旋转中均享有严格相等的 1/${count}（${pct}%）中签概率。您可以一键切换 ${pCount} 种预设模式，或批量粘贴最多 500 个自定义条目。`,
    colPreset: "预设模式",
    colCount: "选项数量",
    colOdds: "单次命中概率 (1/N)",
    colSample: "包含的示例选项",
    rosterHeading: (name, count) => `默认预载完整选项清单（共 ${count} 项）`,
    rosterIntro: (name, count, pct) =>
      `以下为 ${name} 默认激活的全部 ${count} 个扇区。每个选项初始权重为 1x（命中率 ${pct}%），支持在控制面板中调整 1x–20x 自定义权重、随机洗牌或开启中奖后自动移除：`,
    hubGuideTitle: "在线幸运大转盘与加密级随机抽签完整指南",
    hubGuideSubtitle: "1/N 严格均匀分布原理、快捷预设配置以及课堂点名、直播抽奖与聚会决策实用技巧。",
    hubGuideIntro:
      "本中文随机转盘完全在您的本地浏览器中运行，采用操作系统硬件熵驱动的 window.crypto.getRandomValues() 加密随机数引擎，确保每一次旋转 100% 公平透明、零算法偏见。",
    hubGuideParas: [
      "无论是教师在教室大屏开启全屏模式随机提问学生、主播在直播间进行多轮去重抽奖并导出带时间戳的 CSV 审计记录，还是朋友聚会做决定，只需开启“抽中后自动移除获胜项”即可实现无放回抽签。",
      "所有输入的名单与保存的转盘仅存储在您设备本地浏览器 (localStorage) 或加密分享链接中，绝不上传至任何外部服务器。"
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `${name} 默认包含多少个选项？每个选项的抽中概率是多少？`,
        a: `${name} 默认预载 ${count} 个选项（${sample}…）。在默认 1x 等权重下，每个扇区拥有严格相等的 1/${count}（${pct}%）硬件级加密随机概率。`
      },
      {
        q: `${name} 提供了哪些快捷预设模式？可以自己修改吗？`,
        a: `内置预设包括：${presets}。您可以一键切换任意预设，也可以点击“批量粘贴”一次性导入最多 500 个自定义选项。`
      },
      {
        q: `在 ${name} 连续抽签时，如何防止同一个结果重复中奖？`,
        a: `请在设置面板中开启“抽中后自动移除获胜项”开关，每次停转后中奖项会自动从转盘中剔除，确保后续轮次绝不重复。`
      },
      {
        q: `能否将自定义好的 ${name} 生成分享链接、二维码或导出 CSV 记录？`,
        a: `可以！点击“分享转盘”或“二维码”即可将当前名单分享给他人，并可在历史记录面板一键导出 CSV 抽奖明细表。`
      }
    ]
  },

  ja: {
    companionLabel: "日本語の関連ルーレット：",
    tableHeading: (name) => `${name} – プリセット一覧と数学的確率表`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} には初期状態で ${count} 個の項目が登録されており、Web Cryptography API (window.crypto.getRandomValues) により各項目は1回のスピンにつき厳密に 1/${count}（${pct}%）の均等確率で抽選されます。${pCount} 種類のプリセットをワンクリックで切り替えるか、最大500件のカスタム項目を一括追加できます。`,
    colPreset: "プリセットモード",
    colCount: "項目数",
    colOdds: "当選確率 (1/N)",
    colSample: "含まれる主な項目",
    rosterHeading: (name, count) => `初期搭載されている全項目リスト（全 ${count} 項目）`,
    rosterIntro: (name, count, pct) =>
      `以下は ${name} にデフォルトでセットされている全 ${count} 項目です。各項目は初期ウェイト 1x（確率 ${pct}%）で、1x〜20x の重み付け変更・シャッフル・当選後の自動除外に対応しています：`,
    hubGuideTitle: "無料オンラインルーレット＆暗号学的ランダム抽選の完全ガイド",
    hubGuideSubtitle: "1/N の厳密な公平性、プリセット活用法、授業・配信抽選・イベントでの実践テクニック。",
    hubGuideIntro:
      "当サイトの日本語ルーレットはブラウザ標準の暗号学的乱数 API (window.crypto.getRandomValues) を採用し、登録不要・完全無料で偏りのない公平な抽選を実現します。",
    hubGuideParas: [
      "学校の教室での指名やグループ分け、YouTube・Twitch 配信でのプレゼント抽選（タイムスタンプ付き CSV 出力対応）、日常の意思決定まで、「当選者を自動で除外」をオンにすれば重複なしの連続抽選が簡単に行えます。",
      "入力した名前リストや保存データはすべてお使いの端末のブラウザ内 (localStorage) にのみ保存され、外部サーバーへ送信されることはありません。"
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `${name} には初期状態で何個の項目が入っていますか？それぞれの確率は？`,
        a: `${name} にはデフォルトで ${count} 個の項目（${sample}…）が登録されています。均等ウェイト（1x）の場合、各項目は Web Cryptography API により正確に 1/${count}（${pct}%）の確率で選ばれます。`
      },
      {
        q: `${name} ではどのプリセットモードを切り替えられますか？`,
        a: `ワンクリックで切り替え可能なプリセット：${presets}。さらに一括貼り付け機能で最大500件の独自リストを追加できます。`
      },
      {
        q: `${name} で一度当たった項目が再度出ないようにするには？`,
        a: `設定パネルの「回転後に当選者を除外」をオンにしてください。当たった項目が自動的にリストから消去され、重複なしで次の抽選に進めます。`
      },
      {
        q: `カスタマイズした ${name} をURLやQRコードで共有したりCSV出力できますか？`,
        a: `はい！「ルーレットを共有」や「QRコード」で現在の項目リストをそのまま共有でき、履歴パネルから結果を CSV ファイルとしてダウンロード可能です。`
      }
    ]
  },

  ko: {
    companionLabel: "한국어 추천 돌림판:",
    tableHeading: (name) => `${name} – 프리셋 모드 및 수학적 확률표`,
    tableIntro: (name, count, pct, pCount) =>
      `${name}에는 기본으로 ${count}개의 항목이 탑재되어 있으며, 브라우저 하드웨어 기반 Web Cryptography API (window.crypto.getRandomValues)를 통해 각 항목은 회전당 정확히 1/${count}(${pct}%)의 동일한 당첨 확률을 가집니다. ${pCount}가지 프리셋을 원클릭으로 전환하거나 최대 500개의 사용자 항목을 붙여넣을 수 있습니다.`,
    colPreset: "프리셋 모드",
    colCount: "항목 수",
    colOdds: "당첨 확률 (1/N)",
    colSample: "포함된 주요 항목",
    rosterHeading: (name, count) => `기본 탑재된 전체 항목 명단 (총 ${count}개 섹터)`,
    rosterIntro: (name, count, pct) =>
      `아래는 ${name}에 기본 설정된 ${count}개의 전체 항목입니다. 모든 항목은 기본 가중치 1x(${pct}% 확률)로 시작하며, 1x~20x 가중치 조절, 순서 섞기 및 당첨 후 자동 제외 기능을 지원합니다:`,
    hubGuideTitle: "무료 온라인 랜덤 룰렛 & 암호학적 공정 추첨 완벽 가이드",
    hubGuideSubtitle: "1/N 수학적 공정성, 빠른 프리셋 및 교실 수업·라이브 방송 이벤트·모임 활용 팁.",
    hubGuideIntro:
      "한국어 온라인 돌림판은 브라우저의 암호학 난수 엔진 window.crypto.getRandomValues()를 사용하여 회원가입 없이 100% 무료로 조작 없는 공정한 추첨을 제공합니다.",
    hubGuideParas: [
      "교실 전자칠판 전체화면 모드를 활용한 학생 발표자 뽑기, 유튜브·치지직·트위치 생방송 경품 추첨(CSV 내보내기 지원), 점심 메뉴 결정 등에서 '당첨자 자동 제외'를 켜면 중복 없이 연속 추첨이 가능합니다.",
      "입력하신 모든 명단과 저장된 돌림판은 외부 서버로 전송되지 않고 오직 사용자의 기기 브라우저(localStorage)에만 안전하게 보관됩니다."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `${name}에는 기본으로 몇 개의 항목이 들어있으며 각각의 확률은 얼마인가요?`,
        a: `${name}에는 기본 ${count}개 항목(${sample}…)이 로드되어 있습니다. 동일 가중치(1x) 기준 각 칸은 Web Cryptography API를 통해 정확히 1/${count}(${pct}%)의 당첨 확률을 가집니다.`
      },
      {
        q: `${name}에서 바로 불러올 수 있는 프리셋 모드는 무엇인가요?`,
        a: `원클릭으로 전환 가능한 프리셋: ${presets}. 또한 '일괄 붙여넣기'로 엑셀이나 메모장에서 최대 500개 항목을 직접 추가할 수 있습니다.`
      },
      {
        q: `${name}을 여러 번 돌릴 때 이미 뽑힌 항목이 다시 나오지 않게 하려면?`,
        a: `설정에서 '스핀 후 당첨자 제거' 옵션을 켜면 한 번 당첨된 항목이 다음 라운드 전에 자동으로 제외됩니다.`
      },
      {
        q: `내가 만든 ${name}을 링크·QR코드로 공유하거나 결과를 CSV로 저장할 수 있나요?`,
        a: `네! '룰렛 공유' 및 'QR 코드' 버튼으로 맞춤형 돌림판을 즉시 공유할 수 있으며, 기록 패널에서 모든 추첨 결과를 CSV 파일로 다운로드할 수 있습니다.`
      }
    ]
  },

  nl: {
    companionLabel: "Rad van Fortuin in het Nederlands:",
    tableHeading: (name) => `Overzicht van Presets & Wiskundige Kansen – ${name}`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} bevat standaard ${count} voorgeladen opties, waarbij elk vakje via de Web Cryptography API (window.crypto.getRandomValues) een exacte wiskundige kans van 1/${count} (${pct}%) per draai krijgt. Wissel met één klik tussen ${pCount} presets of plak tot 500 eigen items.`,
    colPreset: "Preset / Modus",
    colCount: "Aantal Opties",
    colOdds: "Kans per Draai (1/N)",
    colSample: "Voorbeeld van Inbegrepen Opties",
    rosterHeading: (name, count) => `Volledige Lijst van Voorgeladen Opties (${count} Vakjes)`,
    rosterIntro: (name, count, pct) =>
      `Hieronder staan alle ${count} standaardopties van ${name}. Elk item start met weging 1x (${pct}% kans) en kan in het paneel worden gewogen van 1x tot 20x, geschud of automatisch verwijderd na winst:`,
    hubGuideTitle: "Complete Gids voor het Online Rad van Fortuin & Cryptografische Loting",
    hubGuideSubtitle: "Eerlijke 1/N kansverdeling, snelle presets en tips voor het digibord in de klas, livestreams en verlotingen.",
    hubGuideIntro:
      "Ons Nederlandse rad van fortuin draait volledig lokaal in je browser met hardware-entropie via window.crypto.getRandomValues(), voor 100% eerlijke en gratis lotingen zonder account.",
    hubGuideParas: [
      "Gebruik de modus Volledig Scherm op het digibord in de klas om leerlingen eerlijk een beurt te geven, of schakel 'Verwijder winnaar na draai' in bij tombola's en giveaways met CSV-export zodat niemand twee keer wordt getrokken.",
      "Al je ingevoerde namenlijsten blijven uitsluitend opgeslagen in het lokale geheugen van je eigen apparaat (localStorage)."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `Hoeveel opties zijn standaard geladen in ${name} en wat is de winkans per vakje?`,
        a: `${name} bevat standaard ${count} opties (${sample}…). Bij gelijke weging (1x) heeft elk vakje een exacte kans van 1/${count} (${pct}%) via de Web Cryptography API.`
      },
      {
        q: `Welke snelle presets zijn beschikbaar in ${name}?`,
        a: `Je kunt direct schakelen tussen: ${presets}. Daarnaast kun je tot 500 eigen namen of opties in één keer plakken.`
      },
      {
        q: `Hoe voorkom ik dat dezelfde optie twee keer wint op ${name}?`,
        a: `Zet bij Instellingen de schakelaar 'Verwijder winnaar na draai' aan, zodat gekozen opties automatisch uit het rad verdwijnen voor de volgende ronde.`
      },
      {
        q: `Kan ik mijn aangepaste ${name} delen via een link of QR-code en exporteren naar CSV?`,
        a: `Ja, klik op 'Deel Rad' of 'QR-code' om je exacte lijst te delen en download de draaihistorie met tijdstempels als CSV-bestand.`
      }
    ]
  },

  sv: {
    companionLabel: "Lyckohjul på Svenska:",
    tableHeading: (name) => `Tabell över Förval & Matematiska Sannolikheter – ${name}`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} är förladdat med ${count} alternativ, vilket ger varje fält en exakt matematisk sannolikhet på 1/${count} (${pct}%) per snurr via Web Cryptography API (window.crypto.getRandomValues). Växla direkt mellan ${pCount} färdiga förval eller klistra in upp till 500 egna poster.`,
    colPreset: "Förval / Läge",
    colCount: "Antal Val",
    colOdds: "Chans per Snurr (1/N)",
    colSample: "Exempel på Inkluderade Alternativ",
    rosterHeading: (name, count) => `Komplett Lista över Förladdade Alternativ (${count} Fält)`,
    rosterIntro: (name, count, pct) =>
      `Nedan visas alla ${count} standardalternativ i ${name}. Varje fält har startvikten 1x (${pct}% chans) och kan viktas 1x–20x, blandas eller tas bort automatiskt efter vinst:`,
    hubGuideTitle: "Komplett Guide till Slumphjulet & Kryptografiskt Rättvisa Dragningar",
    hubGuideSubtitle: "Exakt 1/N sannolikhet, snabba förval och praktiska tips för klassrum, livestreams och lotterier.",
    hubGuideIntro:
      "Vårt svenska lyckohjul körs helt lokalt i din webbläsare med hårdvaruentropi via window.crypto.getRandomValues() – 100 % gratis och utan registrering.",
    hubGuideParas: [
      "Aktivera 'Ta bort vinnare efter snurr' när du drar elever i klassrummet, lottar ut priser med tidsstämplad CSV-export eller delar in lag, så att inget alternativ väljs två gånger.",
      "Alla dina sparade listor lagras enbart lokalt i din egen webbläsare (localStorage) för fullständig integritet."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `Hur många alternativ är förladdade i ${name} och vad är chansen för varje fält?`,
        a: `${name} har ${count} förladdade alternativ (${sample}…). Med lika vikt (1x) har varje fält exakt 1/${count} (${pct}%) sannolikhet via Web Cryptography API.`
      },
      {
        q: `Vilka färdiga förval finns i ${name}?`,
        a: `Du kan växla med ett klick mellan: ${presets}. Du kan även klistra in upp till 500 egna alternativ.`
      },
      {
        q: `Hur undviker jag att samma resultat väljs flera gånger på ${name}?`,
        a: `Slå på 'Ta bort vinnare efter snurr' i inställningarna så plockas varje valt fält bort automatiskt inför nästa omgång.`
      },
      {
        q: `Kan jag dela mitt anpassade ${name} med länk/QR-kod och exportera CSV?`,
        a: `Ja! Använd 'Dela hjul' eller 'QR-kod' för att dela din lista och exportera hela snurrhistoriken till CSV.`
      }
    ]
  },

  da: {
    companionLabel: "Lykkehjul på Dansk:",
    tableHeading: (name) => `Oversigt over Forudindstillinger & Sandsynligheder – ${name}`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} er forudindlæst med ${count} muligheder, hvilket giver hvert felt en nøjagtig matematisk sandsynlighed på 1/${count} (${pct}%) pr. spin via Web Cryptography API (window.crypto.getRandomValues). Skift med ét klik mellem ${pCount} hurtige skabeloner eller indsæt op til 500 egne punkter.`,
    colPreset: "Skabelon / Tilstand",
    colCount: "Antal Felter",
    colOdds: "Chance pr. Spin (1/N)",
    colSample: "Eksempler på Indhold",
    rosterHeading: (name, count) => `Komplet Liste over Forudindlæste Muligheder (${count} Felter)`,
    rosterIntro: (name, count, pct) =>
      `Herunder ses alle ${count} standardmuligheder i ${name}. Hvert felt starter med vægt 1x (${pct}% chance) og kan vægtes 1x–20x, blandes eller fjernes automatisk efter udtrækning:`,
    hubGuideTitle: "Komplet Guide til Lykkehjulet & Kryptografisk Fair Lodtrækning",
    hubGuideSubtitle: "Matematisk 1/N-fordeling, hurtige skabeloner og tips til undervisning, giveaways og spil.",
    hubGuideIntro:
      "Vores danske lykkehjul kører 100 % lokalt i din browser ved hjælp af hardware-entropi fra window.crypto.getRandomValues(), så hver lodtrækning er helt fair og gratis uden login.",
    hubGuideParas: [
      "Slå 'Fjern vinder efter spin' til ved klasseundervisning på smartboard, konkurrencer med CSV-eksport eller holdopdeling, så det samme navn ikke trækkes to gange.",
      "Alle indtastede navnelister gemmes udelukkende lokalt i din egen browser (localStorage)."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `Hvor mange muligheder er forudindlæst i ${name}, og hvad er sandsynligheden pr. felt?`,
        a: `${name} indeholder ${count} standardmuligheder (${sample}…). Ved ens vægtning (1x) har hvert felt præcis 1/${count} (${pct}%) chance via Web Cryptography API.`
      },
      {
        q: `Hvilke hurtige skabeloner findes i ${name}?`,
        a: `Du kan skifte direkte mellem: ${presets}. Derudover kan du indsætte op til 500 egne muligheder på én gang.`
      },
      {
        q: `Hvordan undgår jeg gengangere, når jeg drejer ${name} flere gange?`,
        a: `Aktivér 'Fjern vinder efter spin' i indstillingerne, så udtrukne felter automatisk fjernes før næste runde.`
      },
      {
        q: `Kan jeg dele mit tilpassede ${name} via link/QR-kode og eksportere til CSV?`,
        a: `Ja, klik på 'Del hjul' eller 'QR-kode' for at dele din opsætning, og download hele historikken som CSV-fil.`
      }
    ]
  },

  no: {
    companionLabel: "Lykkehjul på Norsk:",
    tableHeading: (name) => `Oversikt over Forhåndsvalg & Sannsynligheter – ${name}`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} kommer ferdig lastet med ${count} alternativer, noe som gir hvert felt en eksakt matematisk sannsynlighet på 1/${count} (${pct}%) per spinn via Web Cryptography API (window.crypto.getRandomValues). Bytt raskt mellom ${pCount} forhåndsvalg eller lim inn opptil 500 egne oppføringer.`,
    colPreset: "Forhåndsvalg / Modus",
    colCount: "Antall Valg",
    colOdds: "Sjanse per Spinn (1/N)",
    colSample: "Eksempler på Alternativer",
    rosterHeading: (name, count) => `Komplett Liste over Forhåndslastede Alternativer (${count} Felter)`,
    rosterIntro: (name, count, pct) =>
      `Nedenfor finner du alle ${count} standardalternativer i ${name}. Hvert felt har startvekt 1x (${pct}% sjanse) og kan vektes fra 1x til 20x, stokkes eller fjernes automatisk etter trekning:`,
    hubGuideTitle: "Komplett Guide til Lykkehjulet & Kryptografisk Rettferdig Trekning",
    hubGuideSubtitle: "Eksakt 1/N sannsynlighet, hurtigvalg og praktiske tips for klasserom, strømming og trekninger.",
    hubGuideIntro:
      "Vårt norske lykkehjul kjører 100 % lokalt i nettleseren din med maskinvareentropi fra window.crypto.getRandomValues(), helt gratis og uten registrering.",
    hubGuideParas: [
      "Aktiver 'Fjern vinner etter spinn' når du trekker elever på storskjerm i klasserommet, arrangerer giveaways med tidsstemplet CSV-eksport eller deler inn lag uten gjentakelser.",
      "Alle navnelister og lagrede hjul oppbevares kun lokalt i nettleseren på din egen enhet (localStorage)."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `Hvor mange alternativer er forhåndslastet i ${name}, og hva er vinnersjansen per felt?`,
        a: `${name} har ${count} forhåndslastede alternativer (${sample}…). Med lik vekt (1x) har hvert felt nøyaktig 1/${count} (${pct}%) sannsynlighet via Web Cryptography API.`
      },
      {
        q: `Hvilke hurtigvalg (presets) følger med i ${name}?`,
        a: `Du kan bytte med ett klikk mellom: ${presets}. Du kan også lime inn opptil 500 egne alternativer.`
      },
      {
        q: `Hvordan unngår jeg at samme vinner trekkes to ganger på ${name}?`,
        a: `Slå på 'Fjern vinner etter spinn' i innstillingene, så fjernes hvert trukket felt automatisk før neste runde.`
      },
      {
        q: `Kan jeg dele mitt tilpassede ${name} med lenke/QR-kode og eksportere CSV?`,
        a: `Ja! Bruk 'Del hjul' eller 'QR-kode' for å dele listen din, og eksporter hele trekningsloggen til en CSV-fil.`
      }
    ]
  },

  tr: {
    companionLabel: "Türkçe Çark Araçları:",
    tableHeading: (name) => `${name} – Hazır Şablonlar ve Matematiksel Olasılık Tablosu`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} varsayılan olarak ${count} seçenekle yüklü gelir ve Web Cryptography API (window.crypto.getRandomValues) sayesinde her dilime dönüş başına tam 1/${count} (%${pct}) eşit seçilme şansı tanır. ${pCount} hazır şablon arasında tek tıkla geçiş yapabilir veya 500 adede kadar özel seçenek yapıştırabilirsiniz.`,
    colPreset: "Hazır Şablon / Mod",
    colCount: "Seçenek Sayısı",
    colOdds: "Dönüş Başına Olasılık (1/N)",
    colSample: "İçerdiği Örnek Seçenekler",
    rosterHeading: (name, count) => `Varsayılan Yüklü Seçeneklerin Tam Listesi (${count} Dilim)`,
    rosterIntro: (name, count, pct) =>
      `Aşağıda ${name} üzerinde hazır gelen tüm ${count} dilim yer almaktadır. Her seçenek 1x başlangıç ağırlığına (%${pct} ihtimal) sahiptir ve kontrol panelinden 1x–20x ağırlıklandırılabilir veya çekiliş sonrası otomatik elenebilir:`,
    hubGuideTitle: "Online Çark Çevir ve Kriptografik Kura Rehberi",
    hubGuideSubtitle: "1/N matematiksel eşitlik, hazır şablonların kullanımı ve sınıf, canlı yayın ve çekiliş ipuçları.",
    hubGuideIntro:
      "Türkçe çark çevirme aracımız, tarayıcınızın donanım tabanlı window.crypto.getRandomValues() kriptografik rastgelelik motorunu kullanarak kayıt gerektirmeden %100 adil ve şeffaf sonuçlar üretir.",
    hubGuideParas: [
      "Sınıfta akıllı tahtada tam ekran öğrenci seçerken, YouTube/Twitch canlı yayınlarında zaman damgalı CSV çıktılı çekiliş yaparken veya arkadaş grubunda karar verirken 'Kazananı Çarktan Çıkar' seçeneğini açarak tekrarsız kura çekebilirsiniz.",
      "Girdiğiniz tüm isim listeleri hiçbir sunucuya gönderilmez; yalnızca kendi cihazınızın yerel tarayıcı belleğinde (localStorage) güvenle saklanır."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `${name} içinde varsayılan kaç seçenek var ve her dilimin çıkma ihtimali nedir?`,
        a: `${name} varsayılan olarak ${count} seçenek (${sample}…) içerir. Eşit ağırlıkta (1x) her dilim Web Cryptography API ile tam 1/${count} (%${pct}) matematiksel olasılığa sahiptir.`
      },
      {
        q: `${name} hangi hazır şablonları içeriyor?`,
        a: `Tek tıkla yükleyebileceğiniz hazır şablonlar: ${presets}. Ayrıca Toplu Ekle butonuyla 500'e kadar kendi listenizi yapıştırabilirsiniz.`
      },
    ]
  },

  ru: {
    companionLabel: "Колеса Фортуны на Русском:",
    tableHeading: (name) => `${name} – Таблица Быстрых Наборов и Вероятностей`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} по умолчанию содержит ${count} вариантов, обеспечивая каждому сектору точную математическую вероятность 1/${count} (${pct}%) за одно вращение благодаря Web Cryptography API (window.crypto.getRandomValues). Переключайтесь одним кликом между ${pCount} готовыми наборами или вставьте до 500 собственных записей.`,
    colPreset: "Быстрый Набор / Режим",
    colCount: "Секторов",
    colOdds: "Вероятность (1/N)",
    colSample: "Примеры Включенных Вариантов",
    rosterHeading: (name, count) => `Полный Список Предзагруженных Вариантов (${count} Секторов)`,
    rosterIntro: (name, count, pct) =>
      `Ниже представлены все ${count} базовых секторов ${name}. Каждый пункт имеет начальный вес 1x (${pct}% шанс) и поддерживает настройку веса от 1x до 20x, перемешивание и автоматическое удаление после выпадения:`,
    hubGuideTitle: "Полное Руководство по Онлайн Колесу Фортуны и Криптографической Жеребьевке",
    hubGuideSubtitle: "Честное распределение 1/N, готовые шаблоны и советы для уроков, стримов и розыгрышей.",
    hubGuideIntro:
      "Русскоязычное колесо фортуны работает полностью локально в вашем браузере на базе аппаратного генератора window.crypto.getRandomValues(), гарантируя 100% честный выбор без регистрации.",
    hubGuideParas: [
      "При опросе учеников на интерактивной доске в полноэкранном режиме, проведении розыгрышей призов на Twitch/YouTube с выгрузкой CSV-протокола или распределении задач включите автоматическое удаление победителя для жеребьевки без повторов.",
      "Все списки имен сохраняются исключительно в локальной памяти вашего браузера (localStorage) и никогда не отправляются на сторонние серверы."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `Сколько вариантов предзагружено в ${name} и какова вероятность каждого сектора?`,
        a: `${name} содержит ${count} базовых вариантов (${sample}…). При равном весе 1x каждый сектор имеет точную вероятность 1/${count} (${pct}%) через Web Cryptography API.`
      },
      {
        q: `Какие готовые наборы доступны в ${name}?`,
        a: `Вы можете мгновенно переключаться между наборами: ${presets}, либо вставить собственный список до 500 строк.`
      }
    ]
  },

  ar: {
    companionLabel: "أدوات عجلة الحظ بالعربية:",
    tableHeading: (name) => `جدول النماذج الجاهزة والاحتمالات الرياضية – ${name}`,
    tableIntro: (name, count, pct, pCount) =>
      `تتضمن ${name} افتراضياً ${count} خيارات محملة مسبقاً، مما يمنح كل قسم احتمالاً رياضياً دقيقاً قدره 1/${count} (${pct}%) في كل دورة عبر تقنية Web Cryptography API (window.crypto.getRandomValues). يمكنك التبديل بنقرة واحدة بين ${pCount} نماذج جاهزة أو لصق حتى 500 خيار مخصص.`,
    colPreset: "النموذج الجاهز",
    colCount: "عدد الخيارات",
    colOdds: "الاحتمال لكل دورة (1/N)",
    colSample: "أمثلة من الخيارات المتضمنة",
    rosterHeading: (name, count) => `القائمة الكاملة للخيارات المحملة مسبقاً (${count} قسماً)`,
    rosterIntro: (name, count, pct) =>
      `فيما يلي جميع الخيارات الافتراضية (${count}) في ${name}. يبدأ كل خيار بوزن 1x (بنسبة ${pct}%) مع إمكانية تعديل الأوزان من 1x إلى 20x أو استبعاد الفائز تلقائياً بعد كل سحب:`,
    hubGuideTitle: "الدليل الشامل لعجلة الحظ الإلكترونية والقرعة التشفيرية العادلة",
    hubGuideSubtitle: "توزيع احتمالات 1/N المتساوي، النماذج الجاهزة، ونصائح الفصول الدراسية والمسابقات المباشرة.",
    hubGuideIntro:
      "تعمل عجلة الحظ العربية بالكامل داخل متصفحك بالاعتماد على إنتروبيا العتاد عبر window.crypto.getRandomValues() لضمان قرعة نزيهة ومجانية 100% دون الحاجة لتسجيل حساب.",
    hubGuideParas: [
      "سواء كنت تختار الطلاب للإجابة على السبورة الذكية بوضع ملء الشاشة، أو تجري سحوبات جوائز مباشرة مع تصدير سجل CSV موثق بالوقت، فعّل خيار إزالة الفائز بعد السحب لمنع تكرار الأسماء الفائزة.",
      "تُحفظ جميع قوائم الأسماء والعجلات المخصصة حصرياً في الذاكرة المحلية لجهازك (localStorage) لحماية خصوصيتك بالكامل."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `كم خياراً محملاً مسبقاً في ${name} وما نسبة فوز كل قسم؟`,
        a: `تحتوي ${name} افتراضياً على ${count} خيارات (${sample}…). عند تساوي الأوزان (1x) يحصل كل قسم على احتمال دقيق قدره 1/${count} (${pct}%) عبر Web Cryptography API.`
      },
      {
        q: `ما هي النماذج الجاهزة المتوفرة في ${name}؟`,
        a: `تشمل النماذج الجاهزة: ${presets}، ويمكنك أيضاً لصق قائمتك الخاصة حتى 500 اسم دفعة واحدة.`
      }
    ]
  },

  hi: {
    companionLabel: "हिंदी स्पिन व्हील टूल्स:",
    tableHeading: (name) => `${name} – प्रीसेट मोड और गणितीय संभावना तालिका`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} में डिफ़ॉल्ट रूप से ${count} विकल्प पहले से लोड हैं, जिससे Web Cryptography API (window.crypto.getRandomValues) के माध्यम से प्रत्येक स्लाइस को प्रति स्पिन सटीक 1/${count} (${pct}%) जीतने की संभावना मिलती है। आप एक क्लिक में ${pCount} प्रीसेट मोड बदल सकते हैं या 500 तक कस्टम नाम पेस्ट कर सकते हैं।`,
    colPreset: "प्रीसेट मोड",
    colCount: "विकल्प संख्या",
    colOdds: "प्रति स्पिन संभावना (1/N)",
    colSample: "शामिल प्रमुख विकल्प",
    rosterHeading: (name, count) => `डिफ़ॉल्ट प्री-लोडेड विकल्पों की पूरी सूची (${count} स्लाइस)`,
    rosterIntro: (name, count, pct) =>
      `नीचे ${name} में शामिल सभी ${count} डिफ़ॉल्ट विकल्प दिए गए हैं। प्रत्येक विकल्प 1x प्रारंभिक भार (${pct}% संभावना) से शुरू होता है और इसे 1x–20x भार या ऑटो-एलिमिनेशन के साथ कस्टमाइज़ किया जा सकता है:`,
    hubGuideTitle: "ऑनलाइन स्पिन द व्हील और क्रिप्टोग्राफिक लकी ड्रा की संपूर्ण गाइड",
    hubGuideSubtitle: "1/N गणितीय निष्पक्षता, तुरंत प्रीसेट और क्लासरूम, लाइव स्ट्रीम व गिवअवे के लिए उपयोगी टिप्स।",
    hubGuideIntro:
      "हमारा हिंदी स्पिन व्हील आपके ब्राउज़र में हार्डवेयर एंट्रॉपी (window.crypto.getRandomValues) का उपयोग करके बिना किसी रजिस्ट्रेशन के 100% निष्पक्ष और पारदर्शी परिणाम देता है।",
    hubGuideParas: [
      "क्लासरूम स्मार्ट बोर्ड पर फुलस्क्रीन मोड में छात्रों को चुनने, यूट्यूब/इंस्टाग्राम लाइव गिवअवे में CSV रिकॉर्ड के साथ विजेता निकालने या दोस्तों के साथ गेम खेलने के लिए 'जीतने के बाद नाम हटाएं' चालू करें ताकि कोई नाम दोबारा न आए।",
      "आपकी सभी नाम सूचियाँ केवल आपके डिवाइस के स्थानीय ब्राउज़र (localStorage) में सुरक्षित रहती हैं और किसी बाहरी सर्वर पर नहीं भेजी जातीं।"
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `${name} में डिफ़ॉल्ट रूप से कितने विकल्प हैं और प्रत्येक की जीतने की संभावना क्या है?`,
        a: `${name} में ${count} डिफ़ॉल्ट विकल्प (${sample}…) लोड हैं। समान भार (1x) पर प्रत्येक स्लाइस की संभावना Web Cryptography API द्वारा सटीक 1/${count} (${pct}%) होती है।`
      },
      {
        q: `${name} में कौन-कौन से तुरंत प्रीसेट उपलब्ध हैं?`,
        a: `इसमें ये प्रीसेट शामिल हैं: ${presets}। इसके अलावा आप बल्क पेस्ट से 500 तक अपने विकल्प जोड़ सकते हैं।`
      }
    ]
  },

  id: {
    companionLabel: "Roda Putar Bahasa Indonesia:",
    tableHeading: (name) => `${name} – Tabel Pilihan Cepat & Probabilitas Matematis`,
    tableIntro: (name, count, pct, pCount) =>
      `${name} dilengkapi dengan ${count} opsi bawaan, memberikan setiap juring peluang matematis tepat 1/${count} (${pct}%) per putaran melalui Web Cryptography API (window.crypto.getRandomValues). Anda dapat beralih di antara ${pCount} preset instan atau menempelkan hingga 500 entri kustom.`,
    colPreset: "Pilihan Cepat (Preset)",
    colCount: "Jumlah Opsi",
    colOdds: "Peluang per Putaran (1/N)",
    colSample: "Contoh Opsi yang Termasuk",
    rosterHeading: (name, count) => `Daftar Lengkap Opsi Bawaan (${count} Juring)`,
    rosterIntro: (name, count, pct) =>
      `Berikut adalah seluruh ${count} opsi default pada ${name}. Setiap entri memiliki bobot awal 1x (${pct}% peluang) dan dapat diatur bobotnya dari 1x hingga 20x, diacak, atau dihapus otomatis setelah menang:`,
    hubGuideTitle: "Panduan Lengkap Putar Roda Online & Undian Kriptografis yang Adil",
    hubGuideSubtitle: "Probabilitas 1/N murni, preset cepat, serta tips untuk kelas, kocokan arisan, dan giveaway live.",
    hubGuideIntro:
      "Alat putar roda Bahasa Indonesia ini berjalan 100% lokal di peramban Anda menggunakan entropi perangkat keras window.crypto.getRandomValues() untuk hasil kocokan yang adil tanpa daftar akun.",
    hubGuideParas: [
      "Baik untuk menunjuk siswa di layar proyektor kelas, mengundi pemenang arisan dan giveaway live dengan bukti ekspor CSV, maupun memilih menu makan, aktifkan 'Hapus Pemenang Setelah Putaran' agar tidak ada nama yang terpilih dua kali.",
      "Seluruh daftar nama peserta disimpan khusus di memori lokal perangkat Anda (localStorage) sehingga privasi data tetap terjaga sepenuhnya."
    ],
    faqs: (name, count, pct, sample, presets) => [
      {
        q: `Berapa banyak opsi bawaan di ${name} dan berapa peluang masing-masing juring?`,
        a: `${name} memuat ${count} opsi default (${sample}…). Pada bobot setara 1x, setiap juring memiliki peluang tepat 1/${count} (${pct}%) melalui Web Cryptography API.`
      },
      {
        q: `Preset cepat apa saja yang tersedia di ${name}?`,
        a: `Preset yang tersedia meliputi: ${presets}. Anda juga bisa menempelkan hingga 500 nama sendiri sekaligus.`
      }
    ]
  }
};

export function getLocalizedDepthCopy(langCode, wheelName, items, presetEntries) {
  const cfg = DEPTH_COPY[langCode];
  if (!cfg) return null;
  const safeItems = Array.isArray(items) && items.length ? items : ["1", "2", "3", "4"];
  const count = safeItems.length;
  const pct = count > 0 ? (100 / count).toFixed(count > 20 ? 2 : 1) : "0";
  const pEntries = Array.isArray(presetEntries) ? presetEntries : [];
  const pCount = pEntries.length || 1;

  return {
    companionLabel: cfg.companionLabel,
    tableHeading: cfg.tableHeading(wheelName),
    tableIntro: cfg.tableIntro(wheelName, count, pct, pCount),
    colPreset: cfg.colPreset,
    colCount: cfg.colCount,
    colOdds: cfg.colOdds,
    colSample: cfg.colSample,
    rosterHeading: cfg.rosterHeading(wheelName, count),
    rosterIntro: cfg.rosterIntro(wheelName, count, pct),
    hubGuideTitle: cfg.hubGuideTitle,
    hubGuideSubtitle: cfg.hubGuideSubtitle,
    hubGuideIntro: cfg.hubGuideIntro,
    hubGuideParas: cfg.hubGuideParas,
    presetRows: pEntries.map(([key, val]) => {
      const pItems = Array.isArray(val?.items) ? val.items : [];
      const pLen = pItems.length || 1;
      const pPct = (100 / pLen).toFixed(pLen > 20 ? 2 : 1);
      return {
        key,
        label: val?.label || key,
        count: pLen,
        odds: `1/${pLen} (${pPct}%)`,
        sample: pItems.slice(0, 6).join(", ") + (pItems.length > 6 ? "…" : "")
      };
    }),
    allItems: safeItems,
    singleOdds: `1/${count} (${pct}%)`
  };
}

export function buildContextualLocalizedFaqs(langCode, wheelName, items, presetEntries) {
  const cfg = DEPTH_COPY[langCode];
  if (!cfg || typeof cfg.faqs !== "function") return [];
  const safeItems = Array.isArray(items) && items.length ? items : ["1", "2", "3", "4"];
  const count = safeItems.length;
  const pct = count > 0 ? (100 / count).toFixed(count > 20 ? 2 : 1) : "0";
  const sample = safeItems.slice(0, 4).join(", ");
  const pEntries = Array.isArray(presetEntries) ? presetEntries : [];
  const presets = pEntries.map(([_, val]) => val?.label || "").filter(Boolean).join(" • ") || wheelName;
  return cfg.faqs(wheelName, count, pct, sample, presets);
}
