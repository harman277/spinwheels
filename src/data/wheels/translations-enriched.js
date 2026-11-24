/* =========================================================
   ENRICHED LOCALIZED FAQS (ALL 52 ZERO-FAQ WHEELS) + NATIVE GUIDES
   Merged onto SPECIALIZED_WHEELS[slug].translations[lang] by data/specialized-wheels.js.
   Every FAQ & guide accurately describes implemented features (Web Crypto API,
   500-entry limit, weights, winner elimination, localStorage, ?w= sharing).
   ========================================================= */

const WHEEL_TRANSLATIONS_ENRICHED = {
  "coin-flip-wheel": {
    es: {
      faqs: [
        { q: "¿Es realmente un 50/50 lanzar la Ruleta Cara o Cruz?", a: "Sí. Cada giro calcula un número entero imparcial mediante Web Crypto API (crypto.getRandomValues) entre porciones idénticas de Cara y Cruz, manteniendo una probabilidad exacta del 50 % sin sesgos físicos." },
        { q: "¿Puedo personalizar las etiquetas o hacer más rondas seguidas?", a: "Claro. Puedes editar las entradas para reemplazar Cara y Cruz por nombres de equipos o decisiones binarias y activar el historial para ver la racha empírica de resultados." }
      ]
    },
    de: {
      faqs: [
        { q: "Bietet das Kopf-oder-Zahl-Rad eine echte 50:50-Chance?", a: "Ja. Alle Segmente sind gleich groß und das Ergebnis wird kryptografisch über die Web Crypto API (crypto.getRandomValues) bestimmt — ganz ohne Gewichtsungleichgewicht." },
        { q: "Kann ich eigene Optionen statt Kopf und Zahl eingeben?", a: "Ja, du kannst die Felder beliebig anpassen oder über die Gewichtung einzelne Felder häufiger vorkommen lassen." }
      ]
    },
    fr: {
      faqs: [
        { q: "La Roue Pile ou Face garantit-elle une probabilité exacte de 50/50 ?", a: "Oui. Chaque tirage utilise l'API Web Crypto (crypto.getRandomValues) sur des parts égales de Pile et Face, assurant un tirage équilibré à 50 %." },
        { q: "Puis-je renommer Pile et Face pour arbitrer un duel d'équipes ?", a: "Tout à fait. Modifiez les libellés dans la liste ou cliquez sur Partager pour sauvegarder un lien vers votre duel personnalisé." }
      ]
    }
  },

  "picker-wheel": {
    es: {
      faqs: [
        { q: "¿Cuántas opciones puedo añadir a la Ruleta Selectora?", a: "Puedes introducir hasta 500 entradas manuales o pegarlas de golpe desde Excel o Google Sheets mediante la opción de pegado masivo." },
        { q: "¿Cómo elimino automáticamente al ganador tras cada giro?", a: "Activa el interruptor «Eliminar ganador después de girar» en los ajustes para no repetir la misma opción en sorteos consecutivos." },
        { q: "¿Puedo compartir la Ruleta Selectora con mi equipo o clase?", a: "Sí. Al pulsar Compartir se genera un enlace único con tus entradas codificadas junto con un código QR y código iframe." }
      ],
      guide: {
        title: "Cómo sacar el máximo partido a la Ruleta Selectora",
        intro: "La Ruleta Selectora convierte cualquier lista de opciones en una decisión visual transparente en segundos, sin registros ni descargas.",
        tips: [
          "Usa el pegado masivo para cargar docenas de nombres o tareas directamente desde Excel o Google Sheets.",
          "Ajusta los botones + / − en cada elemento si deseas dar mayor probabilidad a ciertas opciones mediante ponderación.",
          "Activa el modo pantalla completa en proyectores o videollamadas para que todo el grupo vea la selección imparcial."
        ]
      }
    },
    de: {
      faqs: [
        { q: "Wie viele Einträge passen maximal in das Auswahlrad?", a: "Das Auswahlrad unterstützt bis zu 500 Einträge, die du einzeln hinzufügen oder per Masseneinfügen aus Excel übernehmen kannst." },
        { q: "Kann ich gezogene Gewinner automatisch entfernen lassen?", a: "Ja, aktiviere in den Einstellungen einfach die Option zur automatischen Gewinnerentfernung nach jedem Dreh." },
        { q: "Werden meine benutzerdefinierten Listen gespeichert?", a: "Deine Listen werden lokal im Browser über localStorage gespeichert und können jederzeit per Link oder QR-Code geteilt werden." }
      ],
      guide: {
        title: "Praxis-Tipps für das digitale Auswahlrad",
        intro: "Ob Unterricht, Meeting-Moderation oder schnelle Alltagsentscheidung — das Auswahlrad sorgt dank Web Crypto API für sofortige, nachvollziehbare Fairness.",
        tips: [
          "Nutze das Masseneinfügen-Feld, um ganze Listen aus Tabellenkalkulationen einzukopieren.",
          "Passe über die Gewichte (+/-) gezielt die Gewinnchancen einzelner Einträge an.",
          "Teile deine fertige Konfiguration als QR-Code oder binde das Rad per Iframe in Präsentationen ein."
        ]
      }
    },
    fr: {
      faqs: [
        { q: "Combien d'éléments puis-je ajouter à la Roue de Choix ?", a: "Vous pouvez ajouter jusqu'à 500 entrées différentes, soit une par une, soit en collant une liste complète depuis Excel ou Google Sheets." },
        { q: "Comment éviter qu'une même option sorte deux fois de suite ?", a: "Activez simplement l'interrupteur « Supprimer le gagnant après le tour » dans les paramètres avant de lancer votre série de tirages." },
        { q: "Mes choix restent-ils privés ?", a: "Oui. Vos données restent stockées localement dans votre navigateur et ne sont envoyées vers aucun serveur." }
      ],
      guide: {
        title: "Guide pratique pour optimiser la Roue de Choix",
        intro: "La Roue de Choix remplace les tirages manuels fastidieux par une animation claire pilotée par la cryptographie du navigateur.",
        tips: [
          "Utilisez l'import groupé pour charger instantanément toute une colonne de participants ou de tâches.",
          "Activez l'élimination automatique pour les tours de parole ou les tirages sans remise.",
          "Exportez l'historique en fichier CSV si vous avez besoin d'une trace écrite d'un tirage."
        ]
      }
    },
    it: {
      faqs: [
        { q: "Quante voci posso inserire nella Ruota Selettore?", a: "Puoi inserire fino a 500 opzioni, anche incollando interi elenchi da Excel o Google Fogli con la funzione di incollaggio multiplo." },
        { q: "I risultati della ruota sono davvero casuali?", a: "Sì. Ogni rotazione calcola l'esito tramite Web Crypto API (crypto.getRandomValues) per garantire estrazioni imparziali." }
      ]
    },
    pt: {
      faqs: [
        { q: "Quantas opções posso adicionar à Roleta Seletora?", a: "Você pode adicionar até 500 itens manualmente ou colar uma lista inteira de uma vez usando a caixa de inserção em massa." },
        { q: "Posso remover o item sorteado automaticamente?", a: "Sim. Basta ativar a opção de remover ganhador após o giro nas configurações antes de iniciar os sorteios." },
        { q: "Preciso criar conta para salvar minhas roletas?", a: "Não. Suas listas ficam salvas automaticamente no navegador e também podem ser compartilhadas por link único ou QR Code." }
      ],
      guide: {
        title: "Dicas práticas para usar a Roleta Seletora",
        intro: "A Roleta Seletora facilita sorteios, dinâmicas de sala de aula e decisões rápidas sem depender de planilhas complexas ou cadastros.",
        tips: [
          "Cole dezenas de opções de uma só vez pelo botão de colagem em massa compatível com Excel e Planilhas Google.",
          "Use os botões de peso (+/-) quando precisar dar mais chances a determinados itens.",
          "Ative o modo tela cheia ou incorpore a roleta em sua página com o código iframe pronto."
        ]
      }
    },
    ja: {
      faqs: [
        { q: "ランダム選択ルーレットには最大何件まで登録できますか？", a: "最大500項目まで登録できます。一括貼り付け機能を使えばExcelやスプレッドシートのリストも一瞬で読み込めます。" },
        { q: "一度選ばれた項目を自動で消すことはできますか？", a: "はい。設定パネルの「当選項目を回転後に削除」をオンにすると、同じ項目が重複して選ばれないようになります。" }
      ]
    },
    ko: {
      faqs: [
        { q: "랜덤 선택 돌림판에 항목을 최대 몇 개까지 넣을 수 있나요?", a: "최대 500개까지 입력할 수 있으며, 엑셀이나 구글 시트 목록을 한 번에 복사해 붙여넣을 수도 있습니다." },
        { q: "한 번 뽑힌 항목은 다음 추첨에서 자동으로 빠지게 할 수 있나요?", a: "네. 설정에서 당첨자 자동 제거 옵션을 켜면 이미 나온 항목은 돌림판에서 즉시 제외됩니다." }
      ]
    },
    zh: {
      faqs: [
        { q: "随机选择转盘最多支持多少个选项？", a: "单次最多可添加 500 个选项，支持手动逐条输入或从 Excel / Google 表格直接批量粘贴。" },
        { q: "抽中的选项可以自动从转盘中剔除吗？", a: "可以。在设置面板开启“旋转后移除中奖者”开关，即可实现不重复抽取。" },
        { q: "如何把配置好的转盘分享给其他人？", a: "点击“保存、分享与网页嵌入”中的分享按钮，即可生成包含当前列表的专属链接和二维码。" }
      ],
      guide: {
        title: "随机选择转盘高效使用指南",
        intro: "无论是课堂抽签、团队分工还是日常选择困难症，随机选择转盘都能借助 Web Crypto 密码学算法给出公平透明的结果。",
        tips: [
          "利用批量导入框直接粘贴多行文字，省去逐条敲入的时间。",
          "通过每个条目旁的 +/- 权重按钮微调特定选项的中奖概率。",
          "需要多人监督或投影演示时，可一键开启全屏模式并保留抽签记录统计。"
        ]
      }
    }
  },

  "decision-wheel": {
    es: {
      faqs: [
        { q: "¿Para qué tipo de elecciones funciona mejor la Ruleta de Decisiones?", a: "Resulta ideal cuando varias opciones son igualmente aceptables —como elegir qué cenar, qué película ver o qué tarea empezar— y necesitas romper el bloqueo de análisis." },
        { q: "¿Puedo dar más peso a una opción preferida en la Ruleta de Decisiones?", a: "Sí. Pulsa el botón + junto a cualquier entrada para duplicar o multiplicar su tamaño proporcional en la ruleta." }
      ],
      guide: {
        title: "Cómo decidir más rápido sin dudas con la Ruleta de Decisiones",
        intro: "La fatiga por decisión ocurre cuando comparamos opciones casi equivalentes. Girar la Ruleta de Decisiones delega la elección aleatoria y revela al instante qué resultado te entusiasma más.",
        tips: [
          "Limita la ruleta entre 4 y 10 finalistas reales para mantener las etiquetas claras y legibles.",
          "Si sientes decepción al ver una opción ganadora, ya descubriste cuál preferías en el fondo.",
          "Guarda tus listas frecuentes (fin de semana, tareas, restaurantes) en el navegador para reusarlas."
        ]
      }
    },
    de: {
      faqs: [
        { q: "Wann lohnt sich das Entscheidungsrad besonders?", a: "Immer dann, wenn alle Optionen auf deiner Shortlist gleichwertig erscheinen und endloses Abwägen nur Zeit kostet." },
        { q: "Kann ich eigene Wahrscheinlichkeiten pro Entscheidung einstellen?", a: "Ja, über die +/- Gewichtungsregler lässt sich die relative Chance jeder Option flexibel anpassen." }
      ],
      guide: {
        title: "Entscheidungsblockaden spielend mit dem Entscheidungsrad lösen",
        intro: "Ein faires Zufallsrad nimmt emotionalen Druck aus Alltags- und Teamentscheidungen und sorgt in Sekundenschnelle für ein klares Ergebnis.",
        tips: [
          "Trage nur echte Alternativen ein, mit deren Ausgang du tatsächlich leben kannst.",
          "Nutze die Speicherfunktion, um wiederkehrende Routinen mit einem Klick erneut zu laden.",
          "Im Vollbildmodus eignet sich das Rad optimal für schnelle Team-Abstimmungen per Bildschirmfreigabe."
        ]
      }
    },
    fr: {
      faqs: [
        { q: "Comment la Roue de Décision aide-t-elle à trancher rapidement ?", a: "Elle choisit équitablement parmi votre présélection grâce à l'API Web Crypto, vous évitant de tourner en rond sur des choix du quotidien." },
        { q: "Puis-je sauvegarder plusieurs roues de décision dans mon navigateur ?", a: "Oui. Utilisez le bouton Enregistrer pour conserver localement vos différentes listes (repas, sorties, tâches)." }
      ],
      guide: {
        title: "Sortir de l'indécision grâce à la Roue de Décision",
        intro: "Lorsque deux ou plusieurs options se valent, laisser le hasard trancher de façon transparente économise votre énergie mentale.",
        tips: [
          "Réduisez votre liste à vos 4 à 8 meilleurs choix avant de faire tourner la roue.",
          "Utilisez les poids (+/-) pour refléter vos préférences sans renoncer au suspense.",
          "Partagez l'URL générée avec vos amis ou collègues pour qu'ils voient la même liste."
        ]
      }
    },
    pt: {
      faqs: [
        { q: "Como a Roleta de Decisões evita escolhas tendenciosas?", a: "Cada giro sorteia o ângulo final por meio da API Web Crypto (crypto.getRandomValues), garantindo o mesmo rigor matemático em todas as rodadas." },
        { q: "Posso aumentar a chance de uma das decisões na roleta?", a: "Sim. Basta usar o controle de peso (+/-) ao lado do item desejado na lista da roleta." }
      ],
      guide: {
        title: "Como destravar decisões diárias com a Roleta de Decisões",
        intro: "Comparar opções parecidas cansa e consome tempo. Colocar suas alternativas na Roleta de Decisões resolve impasses com transparência e bom humor.",
        tips: [
          "Deixe na roleta apenas opções viáveis para o momento para aceitar o resultado sem arrependimento.",
          "Ajuste pesos maiores para suas prioridades do dia sem precisar repetir o mesmo texto várias vezes.",
          "Salve suas roletas favoritas localmente para acessar em segundos sempre que precisar decidir."
        ]
      }
    },
    ja: {
      faqs: [
        { q: "意思決定ルーレットの抽選はどのくらい公平ですか？", a: "Web Crypto API（crypto.getRandomValues）を用いて偏りのない乱数を生成しているため、どの項目も登録された割合に応じて公平に選ばれます。" },
        { q: "特定の選択肢だけ当選確率を上げることはできますか？", a: "はい。項目横の ＋ / − ボタンで重み付けを調整すると、当選確率のバランスを柔軟に変更できます。" }
      ]
    }
  },

  "wheel-of-names": {
    it: {
      faqs: [
        { q: "Come importo velocemente una classe o lista di partecipanti nella Ruota dei Nomi?", a: "Apri l'area di inserimento multiplo, incolla i nomi da Excel o Google Fogli (uno per riga) e clicca per aggiungerli in un secondo." },
        { q: "Posso evitare che la stessa persona venga estratta due volte?", a: "Sì, attiva l'opzione per rimuovere automaticamente il vincitore dopo ogni giro nei comandi della ruota." },
        { q: "Quanti nomi supporta al massimo la Ruota dei Nomi?", a: "Fino a 500 nomi contemporaneamente, con calcolo casuale tramite Web Crypto API." }
      ]
    },
    pt: {
      faqs: [
        { q: "Quantos nomes posso colocar na Roleta de Nomes de uma vez?", a: "Você pode adicionar até 500 nomes manualmente ou colar uma coluna inteira do Excel e Google Planilhas pela caixa em massa." },
        { q: "Como não sortear a mesma pessoa duas vezes?", a: "Ative a chave de remoção automática do ganhador nas configurações da roleta antes de iniciar o sorteio." },
        { q: "É seguro usar a Roleta de Nomes com alunos ou participantes?", a: "Sim. Os nomes não saem do seu dispositivo: tudo roda localmente no navegador sem envio de listas para servidores." }
      ],
      guide: {
        title: "Guia rápido da Roleta de Nomes para aulas e sorteios",
        intro: "A Roleta de Nomes torna chamadas escolares, sorteios em lives e divisão de tarefas muito mais dinâmicos e transparentes.",
        tips: [
          "Copie a lista de presença do Excel ou Google Planilhas e cole de uma vez no campo de inserção em massa.",
          "Ative a remoção automática do vencedor para que todos participem uma vez por rodada.",
          "Gere um link compartilhável ou QR Code caso queira abrir exatamente os mesmos nomes no celular ou na lousa digital."
        ]
      }
    },
    ja: {
      faqs: [
        { q: "名前ルーレットには最大何人まで登録できますか？", a: "1つのルーレットにつき最大500名まで追加可能です。出席名簿や参加者リストの一括貼り付けにも対応しています。" },
        { q: "一度当たった人を次の抽選から自動で外せますか？", a: "はい。設定で「当選後に削除」をオンにしておけば、全員に順番が回るまで重複なしで抽選できます。" }
      ]
    },
    ko: {
      faqs: [
        { q: "이름 뽑기 돌림판에 한 번에 몇 명까지 넣을 수 있나요?", a: "최대 500명의 이름을 등록할 수 있으며, 출석부나 참가자 명단을 한꺼번에 붙여넣는 기능을 지원합니다." },
        { q: "이미 당첨된 사람을 다음 차례에서 자동으로 뺄 수 있나요?", a: "네. 설정의 당첨자 자동 제거 옵션을 켜면 한 번 뽑힌 이름은 돌림판에서 바로 제외됩니다." }
      ]
    },
    nl: {
      faqs: [
        { q: "Hoe plak ik snel een hele klaslijst in het Namenwiel?", a: "Klik op de knop voor bulk-invoer, plak de namen uit Excel of Google Spreadsheets (één per regel) en voeg ze allemaal tegelijk toe." },
        { q: "Hoe zorg ik dat niemand twee keer achter elkaar wint?", a: "Schakel de optie om de winnaar na elke draai automatisch te verwijderen in bij de instellingen." }
      ]
    },
    zh: {
      faqs: [
        { q: "名字大转盘最多可以输入多少个名字？", a: "单次最多支持 500 个姓名条目，您可以直接从 Excel 表格复制整列名单一键批量粘贴。" },
        { q: "课堂点名时如何防止同一位同学被重复抽到？", a: "开启设置中的“中奖后自动移除”功能后，每次抽中的名字都会自动从名单中移出。" },
        { q: "我导入的名单会上传到网络服务器吗？", a: "不会。所有名单仅在您的本地浏览器内存中运算并保存在 localStorage，充分保护隐私。" }
      ],
      guide: {
        title: "名字大转盘课堂与活动点名技巧",
        intro: "无论用于线上课堂提问、团队会议发言顺序还是活动嘉宾抽奖，名字大转盘都能让每一次点名清晰、公正且充满期待感。",
        tips: [
          "使用批量粘贴功能一秒导入几十上百人的花名册。",
          "打开防重复抽中开关，确保全员依次公平轮换。",
          "抽取结束后可导出 CSV 历史记录，方便核对或存档。"
        ]
      }
    },
    pl: {
      faqs: [
        { q: "Ile imion mogę wkleić naraz do Koła Imion?", a: "Koło obsługuje do 500 imion. Możesz szybko wkleić całą listę uczniów lub uczestników konkursu z Excela." },
        { q: "Czy wylosowana osoba może znikać z koła automatycznie?", a: "Tak. Wystarczy włączyć opcję usuwania zwycięzcy po losowaniu, aby każda kolejna runda losowała spośród pozostałych osób." }
      ]
    },
    vi: {
      faqs: [
        { q: "Vòng Quay Tên Ngẫu Nhiên hỗ trợ tối đa bao nhiêu người?", a: "Bạn có thể nhập tối đa 500 tên cùng lúc, hỗ trợ dán nhanh cả danh sách lớp hoặc danh sách người chơi từ Excel." },
        { q: "Làm sao để người đã trúng không bị quay trúng lần nữa?", a: "Hãy bật tùy chọn tự động loại bỏ người thắng sau khi quay trong phần cài đặt." }
      ],
      guide: {
        title: "Mẹo sử dụng Vòng Quay Tên cho lớp học và livestream công bằng",
        intro: "Dù bạn là giáo viên gọi học sinh trả lời bài, trưởng nhóm chia việc hay streamer quay thưởng tặng quà, vòng quay giúp mọi người thấy rõ kết quả hoàn toàn minh bạch.",
        tips: [
          "Dùng nút dán hàng loạt để nhập nhanh danh sách lớp hoặc người tham gia từ Excel hay Google Trang Tính.",
          "Bật chế độ tự động loại bỏ tên đã quay để mọi thành viên đều có lượt trước khi lặp lại.",
          "Tùy chỉnh tốc độ quay từ 2 đến 20 giây và bật chế độ toàn màn hình khi chiếu lên tivi hoặc chia sẻ qua Zoom."
        ]
      }
    }
  },

  "random-name-generator": {
    es: {
      faqs: [
        { q: "¿Puedo reemplazar los nombres precargados por mi propia lista?", a: "Sí. Haz clic en Limpiar lista o pega directamente tus nombres desde una hoja de cálculo hasta un máximo de 500 entradas." },
        { q: "¿Cómo se garantiza la imparcialidad al elegir un nombre aleatorio?", a: "El generador utiliza Web Crypto API (crypto.getRandomValues) en el navegador para que cada nombre tenga exactamente la misma probabilidad base." }
      ]
    },
    de: {
      faqs: [
        { q: "Kann ich eigene Namen im Zufälligen Namensgenerator verwenden?", a: "Ja, du kannst die Beispielliste löschen und jederzeit bis zu 500 eigene Namen eintragen oder aus Excel einfügen." },
        { q: "Wie funktioniert die zufällige Auswahl technisch?", a: "Die Ziehung basiert auf der kryptografischen Web Crypto API (crypto.getRandomValues) direkt in deinem Browser." }
      ]
    },
    fr: {
      faqs: [
        { q: "Puis-je charger ma propre liste dans le Générateur de Prénoms ?", a: "Oui. Effacez la liste d'exemple et importez jusqu'à 500 prénoms ou pseudos en un clic via le collage en masse." },
        { q: "Chaque prénom a-t-il bien exactement la même chance de sortir ?", a: "Oui, tant que leurs poids restent identiques, l'API Web Crypto garantit un tirage équiprobable à chaque lancer." }
      ]
    }
  },

  "raffle-wheel": {
    es: {
      faqs: [
        { q: "¿Cómo asigno más boletos o participaciones a una persona en la Ruleta de Sorteos?", a: "Usa los botones + / − junto al nombre del participante para ajustar su peso (hasta 20x) según los boletos que haya conseguido." },
        { q: "¿Cómo demuestro que mi sorteo en vivo fue limpio?", a: "Graba tu pantalla en modo presentación, comparte previamente el enlace del sorteo y descarga el historial en CSV al terminar." }
      ],
      guide: {
        title: "Cómo organizar un sorteo transparente con la Ruleta de Sorteos",
        intro: "Los sorteos en redes sociales, escuelas o eventos ganan credibilidad instantánea cuando la audiencia ve girar cada boleto en tiempo real.",
        tips: [
          "Asigna pesos proporcionales si vendiste múltiples boletos por participante en lugar de repetir líneas.",
          "Activa la eliminación automática del ganador al entregar varios premios en orden.",
          "Exporta los resultados en CSV al finalizar como respaldo verificable de la rifa."
        ]
      }
    },
    de: {
      faqs: [
        { q: "Wie gebe ich Teilnehmern mit mehreren Losen höhere Chancen?", a: "Nutze einfach die Gewichtungstasten (+ / −) neben dem Namen oder der Losnummer, um den Anteil auf dem Verlosungs-Glücksrad exakt abzubilden." },
        { q: "Wie vermeide ich Doppelgewinne bei mehreren Preisen?", a: "Aktiviere die automatische Gewinner-Entfernung nach jeder Ziehung und lade am Ende die CSV-Ziehungshistorie herunter." }
      ],
      guide: {
        title: "Verlosungen & Gewinnspiele fair und transparent durchführen",
        intro: "Ob Instagram-Giveaway, Vereins-Tombola oder Live-Stream-Gewinnspiel: Eine sichtbare Ziehung auf dem Verlosungsrad schafft Vertrauen.",
        tips: [
          "Übertrage Losnummern oder Namen direkt per Masseneinfügen aus deiner Teilnehmer-Tabelle.",
          "Nutze den Trommelwirbel-Sound und Vollbildmodus für maximale Spannung beim Gewinner-Moment.",
          "Exportiere das Ziehungsprotokoll als CSV, um alle ausgelosten Gewinne sauber zu dokumentieren."
        ]
      }
    },
    fr: {
      faqs: [
        { q: "Comment attribuer plusieurs tickets à un même participant sur la Roue de Tombola ?", a: "Ajustez simplement le multiplicateur (+ / −) en face du participant pour augmenter sa part sur le disque sans encombrer le texte." },
        { q: "Puis-je tirer plusieurs lots à la suite sans remettre le même gagnant ?", a: "Oui, en activant la suppression automatique après chaque tirage dans les options de la roue." }
      ],
      guide: {
        title: "Réussir une tombola ou un jeu-concours transparent en direct",
        intro: "La Roue de Tombola remplace les boîtes en carton et affiche instantanément à votre public chaque participant avant et pendant le tirage.",
        tips: [
          "Importez votre liste de tickets en une fois depuis un tableur.",
          "Activez l'élimination des gagnants lorsque vous distribuez plusieurs lots successifs.",
          "Conservez une trace du tirage en exportant l'historique CSV à la fin de la session."
        ]
      }
    },
    pt: {
      faqs: [
        { q: "Como dar mais chances para quem comprou mais números na Roleta de Rifa?", a: "Basta clicar no botão + ao lado do nome ou número na lista para ajustar o peso da fatia proporcionalmente (até 20x)." },
        { q: "Consigo exportar a lista de ganhadores depois do sorteio?", a: "Sim. O painel de histórico permite baixar os resultados sorteados em arquivo CSV com um clique." }
      ],
      guide: {
        title: "Como fazer rifas e sorteios ao vivo com total transparência",
        intro: "Transmitir a Roleta de Rifa em tela cheia elimina qualquer desconfiança sobre quem ganhou o prêmio principal ou secundário.",
        tips: [
          "Importe todos os bilhetes ou participantes de uma só vez pelo campo de colagem em massa.",
          "Marque a remoção automática do ganhador quando houver vários prêmios para sortear em sequência.",
          "Use o recurso de link compartilhável antes da live para que os participantes confiram os nomes na roleta."
        ]
      }
    },
    zh: {
      guide: {
        title: "活动抽奖与直播间抽粉丝的透明实用指南",
        intro: "无论是年会奖品抽取、直播弹幕抽奖还是社团礼品派发，将所有参与者或奖券编号放上转盘公开滚动，能立刻消除暗箱疑虑并调动现场气氛。",
        tips: [
          "直接从表格复制最多 500 位参与者名单或编号，一秒批量粘贴进抽奖列表。",
          "使用条目旁的 + / − 按钮设置 1x–20x 中奖权重，无需重复输入名字也能体现多张奖券概率。",
          "抽出多轮奖项时开启“中奖后自动剔除”，抽完后导出 CSV 历史记录留存凭证。"
        ]
      }
    }
  },

  "number-picker-wheel": {
    es: {
      faqs: [
        { q: "¿Puedo usar la Ruleta de Números con rangos personalizados como 1–20, 1–50 o 1–100?", a: "Sí. Elige uno de los preajustes rápidos o introduce cualquier rango hasta 500 números en la ruleta." },
        { q: "¿Sirve la Ruleta de Números para bingos o rifas sin repetición?", a: "Exacto. Activa «Eliminar ganador después de girar» para que cada número sorteado quede fuera en el resto de la partida." }
      ],
      guide: {
        title: "Usos prácticos de la Ruleta de Números en clase y sorteos",
        intro: "Desde rifas numeradas hasta ejercicios de cálculo mental y selección de turnos, ver girar los números añade dinamismo a cualquier dinámica grupal.",
        tips: [
          "Selecciona los botones de preajuste rápido para alternar entre rangos populares al instante.",
          "En sorteos y juegos tipo bingo, mantén activa la eliminación automática para no cantar un número repetido.",
          "Descarga el historial en CSV cuando necesites auditar todos los números extraídos en orden."
        ]
      }
    },
    de: {
      faqs: [
        { q: "Welche Zahlenbereiche unterstützt das Zahlen-Glücksrad?", a: "Über die Schnellwahl-Presets startest du sofort mit 1–10, 1–20, 1–50 oder 1–100 und kannst eigene Bereiche bis zu 500 Feldern laden." },
        { q: "Kann ich ein Ziehen ohne Zurücklegen wie beim Lotto simulieren?", a: "Ja, mit aktivierter automatischer Entfernung scheidet jede gezogene Zahl für die restlichen Runden aus." }
      ],
      guide: {
        title: "Zufallszahlen anschaulich und fair ziehen",
        intro: "Ein Zahlen-Glücksrad macht abstrakte Zufallszahlen für Klassenräume, Tombolas und Spielabende auf einen Blick nachvollziehbar.",
        tips: [
          "Wechsle über die Preset-Buttons mit einem Klick zwischen häufig genutzten Zahlenbereichen.",
          "Schalte die Gewinner-Entfernung ein, wenn jede Zahl in einer Ziehung nur einmal vorkommen darf.",
          "Beobachte die eingebaute Häufigkeitsstatistik für Wahrscheinlichkeits-Experimente im Unterricht."
        ]
      }
    },
    fr: {
      faqs: [
        { q: "Comment changer rapidement l'intervalle sur la Roue des Chiffres ?", a: "Cliquez simplement sur l'un des préréglages rapides (1–10, 1–20, 1–50, 1–100) ou collez votre suite personnalisée jusqu'à 500 numéros." },
        { q: "Peut-on tirer des numéros de loto ou tombola sans doublon ?", a: "Oui, cochez l'option de suppression après tirage afin qu'un numéro tiré ne puisse plus ressortir." }
      ],
      guide: {
        title: "Tirer des nombres aléatoires avec la Roue des Chiffres",
        intro: "Parfaite pour attribuer un ordre de passage, lancer un tirage de numéros ou animer des exercices mathématiques en direct.",
        tips: [
          "Utilisez les puces de préréglage pour changer d'intervalle en une fraction de seconde.",
          "Activez l'élimination des gagnants pour garantir des tirages sans remise.",
          "Consultez l'historique et exportez vos résultats en CSV en fin de session."
        ]
      }
    },
    it: {
      faqs: [
        { q: "Quali intervalli numerici posso scegliere nella Ruota dei Numeri?", a: "Puoi selezionare subito i preset 1–10, 1–20, 1–50 o 1–100 oppure inserire un elenco personalizzato fino a 500 numeri." },
        { q: "Come evito che lo stesso numero esca due volte durante una tombola o sorteggio?", a: "Attiva l'interruttore di rimozione automatica del vincitore prima di iniziare le estrazioni." }
      ]
    },
    ja: {
      faqs: [
        { q: "数字ルーレットではどんな範囲の数字を設定できますか？", a: "1〜10や1〜100などのワンクリック設定に加え、最大500個までの好きな数字・番号リストを自由に入力できます。" },
        { q: "ビンゴのように出た数字を重複させずに引くことは可能ですか？", a: "はい。設定から「当選項目を自動削除」を有効にすれば重複なしで抽選できます。" }
      ]
    },
    ko: {
      faqs: [
        { q: "숫자 뽑기 돌림판에서 원하는 숫자 범위로 바로 바꿀 수 있나요?", a: "네, 기본 제공 프리셋(1–10, 1–20 등)을 클릭하거나 최대 500개의 연속·맞춤 번호를 붙여넣을 수 있습니다." },
        { q: "나온 숫자가 다시 나오지 않게 빙고처럼 추첨할 수 있나요?", a: "설정에서 당첨 항목 자동 제거를 켜두면 뽑힌 숫자는 즉시 목록에서 빠집니다." }
      ]
    },
    zh: {
      faqs: [
        { q: "数字随机转盘支持哪些常见区间？", a: "您可以一键切换 1–10、1–20、1–50 或 1–100 预设，也可通过批量粘贴导入最多 500 个任意数字或编号。" },
        { q: "如何像宾果或号码抽奖一样抽取不重复数字？", a: "在右侧设置开启“移除已抽中选项”，每次抽到的数字都会自动剔除。" }
      ],
      guide: {
        title: "数字随机转盘实用玩法指南",
        intro: "数字随机转盘适用于课堂抽学号、年会幸运号抽取、分组排号以及概率统计教学演示。",
        tips: [
          "点击预设标签快速载入常用数字区间，无需手工一条条添加。",
          "不希望号码重复出现时，务必勾选抽后自动移除开关。",
          "配合下方的实时频率统计栏，可直观演示大数定律与分布均匀度。"
        ]
      }
    },
    pt: {
      guide: {
        title: "Como sortear números para rifas, Mega-Sena, bingos e aulas",
        intro: "A Roleta de Números substitui papelzinhos dobrados e geradores frios de texto por um sorteio visual justo em tela cheia, com atalhos prontos de 1 a 10, 1 a 60 (Mega-Sena e loterias), 1 a 100 e 1 a 250.",
        tips: [
          "Clique nos botões rápidos acima da lista para alternar imediatamente entre 1–10, 1–60, 1–100 ou 1–250 (e cole sequências personalizadas de até 500 números).",
          "Ative a remoção automática após o giro ao realizar rifas de múltiplos prêmios ou bingos para nunca repetir um número sorteado.",
          "Ajuste a velocidade do giro de 2s a 20s nas configurações e clique em Exportar CSV ao final para salvar o comprovante dos números."
        ]
      }
    },
    vi: {
      guide: {
        title: "Cách dùng Vòng Quay Số cho lô tô, bốc thăm lớp học và xác suất",
        intro: "Vòng Quay Chọn Số Ngẫu Nhiên hiển thị trực quan mọi con số từ 1–10, 1–60 đến 1–100 ngay trên màn hình, giúp cả lớp hoặc phòng họp theo dõi kết quả công khai minh bạch.",
        tips: [
          "Nhấn chọn nhanh các bộ số 1–10, 1–60, 1–100 hoặc dán tối đa 500 số báo danh, số thứ tự tùy chỉnh từ Excel.",
          "Bật chế độ tự động xóa số vừa trúng khi quay nhiều lượt liên tiếp cho trò chơi lô tô hoặc bốc thăm quà tặng.",
          "Xuất file lịch sử CSV ngay sau buổi quay để lưu đối chiếu danh sách các con số đã gọi."
        ]
      }
    }
  },

  "food-picker-wheel": {
    es: {
      faqs: [
        { q: "¿Puedo añadir mis restaurantes o comidas favoritas a la Ruleta de Comida?", a: "Sí. Haz clic en los preajustes de estilos de comida o edita las opciones libremente para incluir los locales cercanos a tu casa u oficina." },
        { q: "¿Puedo guardar la lista de comidas de mi grupo para usarla cada viernes?", a: "Por supuesto. Guarda tu ruleta en el navegador o genera un enlace compartible para enviarlo por WhatsApp al instante." }
      ],
      guide: {
        title: "Cómo terminar con el clásico «¿qué comemos hoy?» en segundos",
        intro: "Elegir comida entre amigos, pareja o compañeros de oficina suele alargarse más que el propio almuerzo. La Ruleta de Comida resuelve el empate en un giro.",
        tips: [
          "Usa el preajuste más acorde al momento (comida rápida, asiática, saludable o casera) y tacha lo que no apetezca.",
          "Aumenta el peso de un antojo compartido para equilibrar preferencias sin imponer.",
          "Comparte el enlace ?w= por chat para que todos vean las opciones disponibles antes de girar."
        ]
      }
    },
    de: {
      faqs: [
        { q: "Kann ich eigene Lieferdienste oder Rezepte im Essens-Glücksrad eintragen?", a: "Ja! Du kannst vorhandene Gerichte direkt ersetzen, eigene Lieblingsrestaurants einfügen und die Liste im Browser speichern." },
        { q: "Gibt es schnelle Voreinstellungen für verschiedene Küchenrichtungen?", a: "Ja, nutze die Preset-Buttons oberhalb der Liste, um sofort zwischen Kategorien wie Fast Food, Asiatisch oder Gesund zu wechseln." }
      ],
      guide: {
        title: "Nie wieder endlos über das Mittag- oder Abendessen diskutieren",
        intro: "Ob Büromittag oder Wochenend-Lieferservice: Das Essens-Glücksrad trifft in wenigen Sekunden eine für alle akzeptable Wahl.",
        tips: [
          "Streiche vorab alles, worauf heute wirklich niemand Lust hat.",
          "Nutze die + / − Gewichtung, falls sich eine Mehrheit eher in Richtung eines Favoriten neigt.",
          "Speichere deine lokale Restaurant-Liste direkt im Browser für die nächste Mittagspause."
        ]
      }
    },
    fr: {
      faqs: [
        { q: "Puis-je ajouter mes propres plats ou restaurants dans la Roue des Repas ?", a: "Oui, vous pouvez modifier n'importe quel segment ou coller la liste de vos restaurants favoris autour du bureau." },
        { q: "Comment partager ma sélection culinaire avec mes collègues ou amis ?", a: "Cliquez sur Partager pour copier un lien court contenant tous vos choix actuels ou affichez le QR code à scanner." }
      ],
      guide: {
        title: "Fini l'éternelle question « On mange quoi aujourd'hui ? »",
        intro: "La Roue des Repas transforme le casse-tête quotidien du déjeuner ou du dîner en un choix rapide et ludique.",
        tips: [
          "Filtrez d'abord les envies du jour grâce aux préréglages rapides de cuisines.",
          "Sauvegardez votre roue de quartier dans le navigateur pour ne pas la ressaisir chaque semaine.",
          "Si tout le monde grimace au résultat, supprimez cette option et relancez jusqu'au consensus."
        ]
      }
    },
    pt: {
      faqs: [
        { q: "Posso colocar os restaurantes do meu bairro ou iFood na Roleta de Comida?", a: "Sim! Edite ou substitua qualquer opção padrão e salve sua lista personalizada diretamente no navegador." },
        { q: "Como usar a Roleta de Comida para decidir entre amigos?", a: "Cada pessoa escolhe 1 ou 2 opções viáveis, adiciona à lista e você gira a roleta para fechar o pedido sem discussão." }
      ],
      guide: {
        title: "Acabe com a dúvida do que pedir hoje usando a Roleta de Comida",
        intro: "Em vez de rolar aplicativos de entrega por meia hora, selecione suas opções favoritas na Roleta de Comida e deixe o giro decidir em 5 segundos.",
        tips: [
          "Troque os pratos pelas cozinhas ou restaurantes reais que entregam no seu CEP.",
          "Dê peso 2x para os lugares com promoção ou entrega grátis do dia.",
          "Envie o link compartilhável ou QR Code no grupo da família para todo mundo acompanhar o giro."
        ]
      }
    },
    ja: {
      faqs: [
        { q: "よく行くお店や自炊メニューを食べ物・ランチルーレットに登録できますか？", a: "はい。既存のリストを編集したり、お気に入りのランチ店・メニューを一括貼り付けしてブラウザに保存できます。" },
        { q: "グループでシェアして今日のランチを決める方法は？", a: "共有ボタンから専用リンクやQRコードを発行すれば、友人や同僚と同じ候補リストを共有できます。" }
      ]
    }
  },

  "dinner-wheel": {
    es: {
      faqs: [
        { q: "¿Cuál es la diferencia entre la Ruleta de Cenas y la de Comida?", a: "La Ruleta de Cenas está pensada específicamente para resolver rápidamente qué cenar esta noche —combinando platos caseros y comida a domicilio— con preajustes nocturnos." },
        { q: "¿Cómo descarto un plato que cenamos ayer?", a: "Pulsa la × junto al plato o activa la eliminación tras girar si estás planificando el menú completo de la semana." }
      ]
    },
    de: {
      faqs: [
        { q: "Wie hilft das Abendessen-Rad bei der Wochenplanung?", a: "Lade deine Lieblingsgerichte, aktiviere die automatische Entfernung nach dem Dreh und ziehe siebenmal hintereinander — schon steht dein Wochenplan." },
        { q: "Kann ich schnelle Rezepte von Liefer-Gerichten trennen?", a: "Ja, wähle oben einfach den passenden Preset-Button aus oder speichere zwei separate Listen lokal im Browser." }
      ]
    },
    fr: {
      faqs: [
        { q: "Comment planifier mes repas de la semaine avec la Roue du Dîner ?", a: "Activez la suppression du gagnant après chaque tour et lancez 5 à 7 fois la roue pour composer votre menu sans répétition." },
        { q: "Puis-je y inclure mes propres recettes maison ?", a: "Oui, modifiez la liste librement et enregistrez votre roue dans le navigateur pour la retrouver chaque soir." }
      ]
    }
  },

  "truth-or-dare-wheel": {
    es: {
      faqs: [
        { q: "¿Puedo añadir mis propios retos o preguntas a la Ruleta Verdad o Reto?", a: "Sí. Puedes usar los preajustes por nivel o introducir tus propias preguntas y pruebas divertidas en segundos." },
        { q: "¿Cómo evito que se repita el mismo reto en una fiesta?", a: "Activa «Eliminar ganador después de girar» en los ajustes para ir tachando cada reto a medida que sale." }
      ],
      guide: {
        title: "Cómo animar cualquier fiesta con Verdad o Reto en ruleta",
        intro: "Girar la Ruleta Verdad o Reto elimina discusiones sobre si una prueba es justa: el giro decide al azar si toca confesar o cumplir el desafío.",
        tips: [
          "Alterna preajustes suaves para reuniones familiares o más atrevidos para grupos de amigos.",
          "Activa la eliminación automática para no repetir preguntas en partidas largas.",
          "Activa el sonido de tambor para subir la tensión justo antes de revelar cada reto."
        ]
      }
    },
    de: {
      faqs: [
        { q: "Kann ich eigene Aufgaben im Wahrheit-oder-Pflicht-Rad hinzufügen?", a: "Natürlich. Nutze die Themen-Presets oder füge bis zu 500 eigene Fragen und Aufgaben direkt hinzu." },
        { q: "Wie verhindere ich doppelte Aufgaben während der Party?", a: "Schalte einfach die automatische Entfernung gezogener Einträge ein, damit jedes Feld pro Spielrunde nur einmal dran kommt." }
      ],
      guide: {
        title: "So bringst du Schwung in jede Runde Wahrheit oder Pflicht",
        intro: "Mit dem digitalen Wahrheit-oder-Pflicht-Rad fällt jede Runde dynamischer aus — auf Wunsch am Smartphone oder groß am Fernseher.",
        tips: [
          "Wähle zu Beginn ein passendes Preset je nach Altersgruppe und Runde.",
          "Mit aktiviertem Soundeffekt wird jeder Dreh zum kleinen Show-Moment.",
          "Entferne erledigte Aufgaben automatisch nach jedem Spin für maximale Abwechslung."
        ]
      }
    },
    fr: {
      faqs: [
        { q: "Puis-je personnaliser les défis de la Roue Action ou Vérité ?", a: "Oui. Remplacez les cartes de base ou chargez l'un des préréglages selon l'ambiance de votre soirée." },
        { q: "Comment ne jamais retomber sur le même gage ?", a: "Activez l'élimination automatique après chaque tour pour rayer les actions déjà réalisées." }
      ],
      guide: {
        title: "Animer une soirée réussie avec la Roue Action ou Vérité",
        intro: "La Roue Action ou Vérité ajoute du suspense et garantit que tout le monde est logé à la même enseigne.",
        tips: [
          "Adaptez rapidement la liste à votre groupe en effaçant les gages qui ne conviennent pas.",
          "Passez l'écran en mode plein écran sur TV ou ordinateur lors des soirées entre amis.",
          "Sauvegardez votre liste de soirée personnalisée pour les prochaines retrouvailles."
        ]
      }
    },
    pt: {
      guide: {
        title: "Regras rápidas para jogar Verdade ou Desafio sem travar a festa",
        intro: "A Roleta Verdade ou Desafio acaba com o clássico impasse em que ninguém sabe inventar um desafio na hora ou sempre escolhe a pergunta mais leve.",
        tips: [
          "Escolha entre Clássico 50/50 ou Família & Leve nos atalhos acima da roleta conforme a idade do grupo.",
          "Ative a remoção automática após cada giro quando quiser garantir que nenhuma pergunta ou prenda se repita na noite.",
          "Use o modo tela cheia na TV da sala ou combine com a lista de nomes dos amigos para decidir quem cumpre a rodada."
        ]
      }
    },
    vi: {
      guide: {
        title: "Mẹo chơi Thật Hay Thách vui hết cỡ mà không bị lặp câu hỏi",
        intro: "Thay vì tốn thời gian nghĩ hình phạt hay để một bạn né thử thách mãi, hãy dùng Vòng Quay Thật Hay Thách để máy chọn ngẫu nhiên công bằng cho cả nhóm.",
        tips: [
          "Chọn nhanh gói Cổ Điển 50/50 hoặc gói Vui Nhộn & Lành Mạnh cho buổi tụ tập gia đình, lớp học.",
          "Bật chế độ tự động loại bỏ câu đã quay để cuộc vui không bị trùng lặp các thử thách cũ.",
          "Bật hiệu ứng âm thanh trống hồi hộp hoặc chế độ toàn màn hình khi chơi đông người."
        ]
      }
    }
  },

  "dice-roller-wheel": {
    es: {
      faqs: [
        { q: "¿Las tiradas de la Ruleta de Dados del 1 al 6 son tan justas como un dado físico?", a: "Incluso más consistentes: los dados físicos baratos pueden tener imperfecciones, mientras que Web Crypto API da exactamente un 16,67 % a cada cara." },
        { q: "¿Puedo convertirla en un dado de 12 o 20 caras (D12 / D20) para rol?", a: "Sí. Elige los preajustes de poliedros o añade números del 1 al 20 con la herramienta en segundos." }
      ]
    },
    de: {
      faqs: [
        { q: "Ist das Würfel-Rad genauso fair wie ein echter Spielwürfel?", a: "Ja — dank gleich großer Felder und Web Crypto API hat jede der 6 Seiten exakt dieselbe 1/6-Wahrscheinlichkeit ohne Produktionsfehler." },
        { q: "Unterstützt das Würfel-Rad auch W10- oder W20-Würfel für Pen-&-Paper?", a: "Ja, wähle einfach das gewünschte Zahlen-Preset oder trage die Zahlen 1 bis 20 direkt ein." }
      ]
    },
    fr: {
      faqs: [
        { q: "La Roue de Dés est-elle aussi équilibrée qu'un dé classique ?", a: "Oui. Chaque face occupe la même portion angulaire et le tirage cryptographique donne exactement une chance sur six (ou 1/N)." },
        { q: "Puis-je l'utiliser comme dé à 12 ou 20 faces (D12 / D20) ?", a: "Bien sûr : utilisez les préréglages ou collez les chiffres de 1 à 20 pour vos parties de jeu de rôle." }
      ]
    }
  },

  "yes-no-wheel": {
    es: {
      guide: {
        title: "Cómo aprovechar la Ruleta Sí o No cuando dudas",
        intro: "Una moneda virtual o una Ruleta Sí o No con porciones equilibradas al 50 % ayuda tanto a elegir objetivamente como a detectar tu verdadera inclinación.",
        tips: [
          "Alterna entre 2, 4 o 6 sectores simétricos o añade la opción «Quizás» desde los preajustes.",
          "Si al frenar la ruleta esperabas en secreto el resultado contrario, ya tienes tu respuesta.",
          "Incluye opciones ponderadas si necesitas inclinar ligeramente la balanza (por ejemplo 70 % / 30 %)."
        ]
      }
    },
    pt: {
      guide: {
        title: "Quando usar a Roleta Sim ou Não no dia a dia",
        intro: "Quando duas escolhas parecem empatadas, a Roleta Sim ou Não decide em segundos com probabilidade igual e mostra qual resposta você realmente queria.",
        tips: [
          "Alterne entre 50/50 clássico (Sim / Não) ou inclua fatias de Talvez nos preajustes rápidos.",
          "Observe sua reação imediata ao resultado para confirmar se você concorda com o sorteio.",
          "Personalize os textos caso queira transformar o giro em qualquer dilema com dois ou três caminhos."
        ]
      }
    },
    vi: {
      guide: {
        title: "Mẹo dùng Vòng Quay Có Hoặc Không để chốt nhanh mọi phân vân",
        intro: "Vòng Quay Có Hoặc Không mang lại xác suất 50/50 minh bạch dựa trên Web Crypto API, giúp bạn phá vỡ sự do dự chỉ trong một lần bấm.",
        tips: [
          "Chuyển đổi nhanh giữa chế độ Có / Không hoặc Có / Không / Có Thể ngay trên hàng mẫu có sẵn.",
          "Lắng nghe cảm giác đầu tiên khi kim dừng lại để nhận ra lựa chọn bạn thực sự mong muốn.",
          "Bạn hoàn toàn có thể đổi nhãn hai lựa chọn thành tên món ăn, địa điểm hay hai phương án công việc."
        ]
      }
    },
    zh: {
      guide: {
        title: "“是或否”转盘高效决策技巧",
        intro: "当您在两件难分伯仲的事情之间犹豫不决时，使用对称 50/50 的“是或否”决策转盘能迅速打破内耗。",
        tips: [
          "可在上方预设中一键切换纯“是/否”或加入“再想想”的三态选项。",
          "指针停下的那一瞬间，若您心里涌现希望反悔的念头，往往就已经看清了内心真实偏好。",
          "支持随时修改文本，把“是/否”替换成任意两个具体行动方案。"
        ]
      }
    },
    de: {
      guide: {
        title: "So hilft das Ja-oder-Nein-Rad bei schnellen Bauchentscheidungen",
        intro: "Mit symmetrischen 50:50-Segmenten und Web Crypto API beendet das Ja oder Nein Rad unnötiges Grübeln innerhalb von fünf Sekunden.",
        tips: [
          "Wechsle über die Voreinstellungen blitzschnell zwischen reinem Ja/Nein und Ja/Nein/Vielleicht.",
          "Achte auf dein erstes Bauchgefühl im Moment des Ergebnisses — oft merkst du genau dann, was du wirklich willst.",
          "Du kannst Ja und Nein jederzeit in zwei konkrete Alternativen umbenennen."
        ]
      }
    },
    fr: {
      guide: {
        title: "Utiliser la Roue Oui ou Non pour sortir de l'hésitation",
        intro: "Grâce à ses parts parfaitement symétriques et au tirage cryptographique du navigateur, la Roue Oui ou Non tranche vos dilemmes sans parti pris.",
        tips: [
          "Passez facilement du mode Oui / Non classique au mode avec l'option Peut-être.",
          "Fiez-vous à votre réaction instinctive dès que la roue s'arrête.",
          "Remplacez Oui et Non par deux choix précis lorsque votre décision est binaire."
        ]
      }
    }
  },

  "team-picker-wheel": {
    es: {
      guide: {
        title: "Organiza equipos equilibrados en clase o deportes con la Ruleta de Equipos",
        intro: "Usar un sorteo público con eliminación automática evita que queden los mismos grupos de siempre o que alguien se sienta elegido al final.",
        tips: [
          "Pega la lista completa de nombres y activa «Eliminar ganador después de girar».",
          "Asigna alternativamente a Equipo A, Equipo B o Equipo C cada nombre que salga.",
          "Activa la vista a pantalla completa para proyectar el reparto en clase o compartir pantalla en reunión."
        ]
      }
    },
    pt: {
      guide: {
        title: "Como dividir times e grupos sem panelinha na escola ou futebol",
        intro: "A Roleta de Times e Equipes garante transparência total na hora de formar grupos para trabalhos escolares, dinâmicas ou peladas.",
        tips: [
          "Cole todos os participantes de uma vez no campo em massa e ative a remoção após cada giro.",
          "Alterne os sorteados entre Time A e Time B até esvaziar a roleta com imparcialidade.",
          "Salve sua lista fixa da turma ou pelada no navegador para usar todas as semanas."
        ]
      }
    },
    vi: {
      guide: {
        title: "Chia nhóm & chia đội công bằng trong tích tắc",
        intro: "Dù chia nhóm học tập hay chia đội đá bóng, Vòng Quay Chia Nhóm giúp loại bỏ cảm giác thiên vị và tạo không khí hào hứng.",
        tips: [
          "Dán nhanh toàn bộ danh sách thành viên rồi bật tính năng tự động xóa người đã chọn.",
          "Lần lượt gán từng người vừa quay trúng vào Đội A, Đội B hoặc Nhóm 1, 2, 3.",
          "Bật chế độ toàn màn hình khi trình chiếu trước lớp hoặc trên cuộc họp trực tuyến."
        ]
      }
    },
    de: {
      guide: {
        title: "Faire Gruppen- und Team-Einteilung ohne Diskussion",
        intro: "Mit dem Team Generator Rad werden Klassenarbeiten, Workshops oder Hobbymannschaften sicht- und nachvollziehbar ausgelost.",
        tips: [
          "Aktiviere die automatische Entfernung gezogener Namen, damit niemand doppelt eingeteilt wird.",
          "Loste abwechselnd für Team A, B oder C, bis alle Namen vergeben sind.",
          "Speichere wiederkehrende Klassen- oder Vereinslisten direkt lokal im Browser."
        ]
      }
    },
    fr: {
      guide: {
        title: "Former des équipes équilibrées en toute impartialité",
        intro: "La Roue Générateur d'Équipes assure une répartition aléatoire irréprochable devant toute la classe ou l'équipe sportive.",
        tips: [
          "Collez l'effectif complet et cochez la suppression automatique du gagnant.",
          "Répartissez les noms au fur et à mesure dans vos différentes équipes.",
          "Conservez une copie des affectations via l'export CSV si nécessaire."
        ]
      }
    }
  },

  "country-picker-wheel": {
    pt: {
      guide: {
        title: "Ideias criativas para usar a Roleta de Países do Mundo",
        intro: "Explore culturas, planeje desafios de culinária internacional ou conduza dinâmicas escolares de geografia girando países aleatórios.",
        tips: [
          "Use em aulas de geografia ou história para sortear temas de apresentação entre alunos.",
          "Combine a roleta com noites temáticas em casa: cozinhe ou assista a um filme do país sorteado.",
          "Ative a eliminação automática caso queira percorrer vários países sem repetir."
        ]
      }
    },
    vi: {
      guide: {
        title: "Cách tận dụng Vòng Quay Quốc Gia Thế Giới hiệu quả",
        intro: "Từ trò chơi đố vui địa lý trên lớp đến thử thách nấu món ăn truyền thống theo quốc gia, vòng quay mang cả thế giới lên màn hình của bạn.",
        tips: [
          "Dùng làm đề bài ngẫu nhiên cho bài thuyết trình văn hóa, du lịch hoặc ngoại ngữ.",
          "Bật tùy chọn tự động loại bỏ để thực hiện thử thách khám phá nhiều quốc gia liên tiếp.",
          "Tự do chỉnh sửa danh sách theo từng châu lục bạn muốn tập trung."
        ]
      }
    }
  },

  "color-picker-wheel": {
    pt: {
      guide: {
        title: "Como usar a Roleta de Cores em desafios artísticos e jogos",
        intro: "Desbloqueie a criatividade sorteando paletas de cores aleatórias para desenho, pintura, moda, maquiagem ou brincadeiras infantis.",
        tips: [
          "Gire três vezes seguidas com a eliminação ativada para montar uma paleta de 3 cores únicas.",
          "Excelente para ensinar nomes de cores para crianças ou praticar vocabulário em novos idiomas.",
          "Edite as opções para testar combinações sazonais ou tons específicos de projeto."
        ]
      }
    },
    vi: {
      guide: {
        title: "Ý tưởng sáng tạo cùng Vòng Quay Màu Sắc",
        intro: "Vòng Quay Màu Sắc hỗ trợ chọn màu chủ đạo ngẫu nhiên cho họa sĩ, nhà thiết kế, thử thách trang điểm hoặc trò chơi dạy học cho trẻ nhỏ.",
        tips: [
          "Bật chế độ loại bỏ sau khi quay và quay 3 lần để chọn ngẫu nhiên một bảng phối 3 màu.",
          "Thay đổi hoặc thêm tên màu sắc theo tông Pastel, Neon hoặc màu theo chủ đề bạn cần.",
          "Dùng hiệu ứng âm thanh sinh động khi tổ chức trò chơi nhận diện màu sắc trong lớp."
        ]
      }
    }
  },

  "letter-picker-wheel": {
    pt: {
      guide: {
        title: "Como jogar Adedonha (Stop!) e dinâmicas com a Roleta de Letras",
        intro: "Contar letras nos dedos quase sempre cai nas mesmas iniciais fáceis ou gera discussão sobre qual dedo parou. A Roleta de Letras A–Z garante sorteio criptográfico justo das 26 letras do alfabeto.",
        tips: [
          "Clique no modelo 'Modo Stop / Adedonha' para remover letras raras como K, W, X e Y em rodadas rápidas entre amigos.",
          "Mantenha ativada a remoção automática após o giro para jogar várias rodadas de Stop sem repetir letra nenhuma.",
          "Use o filtro 'Somente Vogais' com turmas em alfabetização para formar sílabas e palavras em voz alta."
        ]
      }
    },
    vi: {
      guide: {
        title: "Cách dùng Vòng Quay Chữ Cái A–Z cho trò chơi từ vựng và dạy bé",
        intro: "Vòng Quay Bảng Chữ Cái giúp giáo viên tiếng Anh, lớp tiểu học và nhóm bạn tìm chữ cái khởi đầu ngẫu nhiên cho trò chơi nối chữ, đố vui và luyện phát âm.",
        tips: [
          "Chuyển nhanh giữa đủ 26 chữ cái A–Z hoặc bộ 5 nguyên âm A-E-I-O-U ngay phía trên danh sách.",
          "Bật tự động xóa chữ đã trúng để mỗi lượt chơi đố chữ đều là chữ cái mới hoàn toàn.",
          "Dán thêm các chữ cái tiếng Việt có dấu (Ă, Â, Đ, Ê, Ô, Ơ, Ư) nếu dạy đánh vần lớp 1."
        ]
      }
    }
  },

  "brazil-state-picker-wheel": {
    pt: {
      guide: {
        title: "Dinâmicas de geografia e desafios com os 27 estados do Brasil",
        intro: "A Roleta dos Estados do Brasil reúne todos os 26 estados brasileiros mais o Distrito Federal com probabilidade idêntica de 1/27 (3,70%), permitindo filtrar pelas cinco regiões oficiais do IBGE.",
        tips: [
          "Use os filtros de Norte, Nordeste, Centro-Oeste, Sudeste e Sul para revisar capitais, bandeiras estaduais ou sotaques regionais.",
          "Ative a remoção automática após o giro em gincanas escolares para distribuir os 27 estados entre equipes sem repetições.",
          "Baixe o histórico em CSV após sortear temas de pesquisa ou receitas típicas de cada região."
        ]
      }
    }
  },

  "animal-picker-wheel": {
    pt: {
      guide: {
        title: "Desafios de desenho, mímica e ciências com a Roleta dos Animais",
        intro: "Sortear animais aleatórios ajuda professores em pesquisas sobre biomas e desbloqueia a criatividade em desafios de desenhar criaturas híbridas em família ou nas redes sociais.",
        tips: [
          "Gire duas vezes com a eliminação ativada para criar um animal híbrido divertido no desafio de desenho.",
          "Alterne entre os filtros Selva, Animais Marinhos e Aves para focar o conteúdo da aula de ciências.",
          "Use o modo tela cheia durante partidas de mímica infantil para que todas as crianças enxerguem o bicho sorteado."
        ]
      }
    },
    vi: {
      guide: {
        title: "Ý tưởng trò chơi đoán vật, vẽ tranh và học từ vựng động vật",
        intro: "Vòng Quay Con Vật biến tiết học tiếng Anh, sinh học và buổi chơi cuối tuần của trẻ nhỏ thành trò chơi đầy bất ngờ khi máy chọn ngẫu nhiên các loài từ rừng rậm đến đại dương.",
        tips: [
          "Chuyển nhanh bộ lọc Rừng Xanh và Đại Dương hoặc tự nhập danh sách con vật theo chủ đề bài học.",
          "Bật loại bỏ sau mỗi lần quay rồi quay 2 lần để học sinh ghép tranh con vật tưởng tượng.",
          "Dùng trên bảng tương tác hoặc TV để cả lớp cùng chơi trò mô phỏng tiếng kêu động vật."
        ]
      }
    }
  },

  "language-picker-wheel": {
    pt: {
      guide: {
        title: "Como escolher um novo idioma ou variar treinos com a roleta",
        intro: "Quem gosta de estudar idiomas costuma travar tentando decidir qual língua começar primeiro ou acaba praticando apenas a mais confortável. A Roleta de Idiomas resolve o impasse em segundos.",
        tips: [
          "Deixe apenas os 3 ou 4 idiomas que você realmente cogita aprender e comprometa-se por 14 dias com o vencedor.",
          "Se você já estuda vários idiomas, ative a remoção automática e gire um por dia da semana para manter todos ativos.",
          "Em escolas e cursos, sorteie países e línguas para apresentações culturais sem repetir temas."
        ]
      }
    },
    vi: {
      guide: {
        title: "Dùng Vòng Quay Ngôn Ngữ để chọn ngoại ngữ học tiếp theo",
        intro: "Phân vân giữa tiếng Anh, Nhật, Hàn, Trung hay Đức khiến bạn chần chừ mãi chưa bắt đầu? Vòng quay giúp chốt nhanh ngôn ngữ ưu tiên hoặc chia chủ đề văn hóa trên lớp.",
        tips: [
          "Giữ lại 2 đến 3 ngoại ngữ bạn yêu thích nhất và quay thử thách 30 ngày với ngôn ngữ vừa trúng.",
          "Với người học đa ngôn ngữ, bật chế độ xóa sau khi quay để luân phiên luyện nghe nói mỗi ngày một thứ tiếng.",
          "Thêm tên chủ đề giao tiếp thực tế ngay trên từng ô để luyện phản xạ nói."
        ]
      }
    }
  },

  "emoji-picker-wheel": {
    pt: {
      guide: {
        title: "Histórias criativas, mímica de filmes e aulas com a Roleta de Emojis",
        intro: "Inspirada nos clássicos dados de histórias, a Roleta de Emojis sorteia símbolos expressivos que estimulam redações criativas, desafios em vídeos curtos e brincadeiras de adivinhar filmes.",
        tips: [
          "Ative a remoção do ganhador e gire 3 emojis seguidos para desafiar alunos a escrever uma história ligando todos os símbolos.",
          "Misture emojis com os nomes das crianças (por exemplo '🦁 Lucas') para usar em chamada interativa com turmas menores.",
          "Cole qualquer sequência de emojis Unicode do seu celular usando o botão de colagem em massa."
        ]
      }
    }
  },

  "zodiac-picker-wheel": {
    pt: {
      guide: {
        title: "Brincadeiras de festa e criação de personagens com os 12 signos",
        intro: "Todos os 12 signos de Áries a Peixes dividem exatamente a mesma fatia (8,33%), com atalhos pelos elementos Fogo, Terra, Ar e Água para quebra-gelos ou jogos de RPG.",
        tips: [
          "Use os filtros de elementos acima da lista quando quiser sortear apenas signos de Fogo ou Água.",
          "Escritores e jogadores de RPG podem combinar um signo sorteado com nomes aleatórios para definir traços de personalidade.",
          "Substitua os itens pelos 12 animais do Horóscopo Chinês caso deseje variar a dinâmica em festas temáticas."
        ]
      }
    }
  },

  "month-picker-wheel": {
    pt: {
      guide: {
        title: "Sorteios anuais, férias e metas mensais com a Roleta dos Meses",
        intro: "Cada mês de Janeiro a Dezembro ocupa exatamente 30 graus na roleta (8,33% de chance), facilitando definir o próximo destino do mês, rodízios de aniversário ou desafios fotográficos.",
        tips: [
          "Use o atalho '4 Estações' quando precisar apenas escolher a melhor temporada para uma viagem em grupo.",
          "Ative a eliminação automática ao distribuir os 12 meses para projetos anuais ou temas mensais sem repetir.",
          "Combine com a Roleta de Números (1–31) para sortear uma data exata aleatória do calendário."
        ]
      }
    },
    vi: {
      guide: {
        title: "Cách sử dụng Vòng Quay 12 Tháng cho trò chơi và lập kế hoạch",
        intro: "Từ tháng Giêng đến tháng Chạp, cả 12 ô chia đều góc quay 30 độ chuẩn 8,33% giúp nhóm bạn chọn nhanh tháng du lịch, chia lịch trực nhật hoặc dạy bé nhớ tên 12 tháng.",
        tips: [
          "Chọn nhanh gói 4 Mùa Xuân Hạ Thu Đông nếu chỉ cần chốt thời điểm dã ngoại.",
          "Bật tự động loại bỏ tháng đã trúng khi phân công lịch sinh hoạt hàng tháng cho 12 tổ nhóm.",
          "Kết hợp quay thêm vòng quay số 1–31 để chọn một ngày ngẫu nhiên bất kỳ trong năm."
        ]
      }
    }
  },

  "planet-picker-wheel": {
    pt: {
      guide: {
        title: "Aulas de astronomia sem briga pelo mesmo planeta na escola",
        intro: "Em feiras de ciências, quase toda dupla quer apresentar Saturno pelos anéis ou Marte pelos robôs. Girar a Roleta dos Planetas em tela cheia distribui Mercúrio, Vênus, Terra, Júpiter, Urano e Netuno com humor e justiça.",
        tips: [
          "Clique em 'Luas & Planetas Anões' para turmas avançadas estudarem Plutão, Europa, Titã e Ceres.",
          "Em turmas com mais de 8 grupos, ajuste os pesos (+ / −) igualmente para cada planeta receber a mesma quantidade de equipes.",
          "Ative o modo tela cheia na lousa digital para que toda a sala assista ao giro juntos."
        ]
      }
    },
    vi: {
      guide: {
        title: "Phân chia đề tài Hệ Mặt Trời công bằng trên lớp học khoa học",
        intro: "Thay vì học sinh chỉ tranh chọn Sao Thổ hay Sao Hỏa, Vòng Quay Hành Tinh giúp giáo viên bốc thăm ngẫu nhiên đủ 8 hành tinh với xác suất 12,5% mỗi hành tinh.",
        tips: [
          "Bật chế độ xóa sau khi quay để 8 nhóm nhận 8 hành tinh khác nhau không bị trùng.",
          "Có thể nhập thêm Mặt Trăng, Sao Diêm Vương hoặc các vệ tinh nổi tiếng trực tiếp vào danh sách.",
          "Chia sẻ đường dẫn ?w= cho học sinh tự quay ôn tập kiến thức thiên văn tại nhà."
        ]
      }
    }
  },

  "music-genre-wheel": {
    pt: {
      guide: {
        title: "Acabe com a disputa pelo som no carro ou na festa com a roleta",
        intro: "Reúna Sertanejo, Pagode, Funk, MPB, Rock, Pop, Eletrônica e Lo-Fi na mesma roleta para renovar playlists de treino, animar karaokês ou inspirar desafios de composição musical.",
        tips: [
          "Use os filtros 'Ritmos Brasileiros' ou 'Estilos Globais' para ajustar a trilha sonora ao clima da reunião.",
          "Músicos e produtores podem girar duas vezes com a remoção ativada para criar um desafio misturando dois gêneros opostos.",
          "Reduza a duração do giro para 2 segundos nas configurações quando estiver rodando rodadas rápidas de karaokê."
        ]
      }
    },
    vi: {
      guide: {
        title: "Chọn nhanh dòng nhạc hát karaoke và playlist cuối tuần không cần cãi nhau",
        intro: "Thuật toán nghe nhạc hay lặp lại những bài quen thuộc. Quay ngẫu nhiên Pop, K-Pop, Rap, Rock, EDM hay Bolero giúp buổi tụ họp thêm mới mẻ hoặc mở ra thử thách hát theo thể loại.",
        tips: [
          "Chọn sẵn danh sách Nhạc Tiệc Tùng hoặc tự dán tên bài hát tủ của nhóm bạn.",
          "Bật loại bỏ sau khi quay để mỗi lượt hát karaoke là một dòng nhạc khác hẳn nhau.",
          "Chỉnh thời gian quay 2 giây cho các thử thách phản xạ đoán tên bài hát."
        ]
      }
    }
  }
};

export default WHEEL_TRANSLATIONS_ENRICHED;
