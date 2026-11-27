/* =========================================================
   HIGH-VALUE NATIVE GUIDES & BING SEO UPGRADE (PT / VI / ZH)
   Strictly native copy (zero English leakage, zero editorial-article class).
   Targets highest-click & highest-impression international Bing pages:
   - Brazil Portuguese (/pt/*): 27% of total site clicks
   - Vietnamese (/vi/*): high-CTR striking-distance pages
   - Simplified Chinese (/zh/*): high-impression generator terms
   ========================================================= */

export default {
  "number-picker-wheel": {
    pt: {
      title: "Roleta de Números Online | Sorteador 1 a 60, 100 e 250",
      description: "Gire a Roleta de Números (Roleta dos Números) online grátis! Sorteador de números de 01 a 60, 1 a 100 ou 1 a 250 sem repetir, com histórico CSV sem cadastro.",
      keywords: "roleta de números, roleta de numeros, roleta online números, roleta dos números, roleta numeros, sorteador de 01 a 60, roleta aleatória de números, roleta numérica, roleta de 1 a 250, sorteador de números roleta, roleta para sorteio de números",
      heroTitle: "Roleta de Números Online",
      heroHighlight: "Sorteador de Números Grátis (01 a 60, 100 e 250)",
      heroSubtitle: "Sorteie números para rifas escolares, bingos, dinâmicas de sala e jogos de 01 a 60, 1 a 100 ou 1 a 250 direto no navegador.",
      quickAnswer: "<strong>Como usar a Roleta de Números Online?</strong> Escolha um atalho pronto (1 a 10, 01 a 60, 1 a 100 ou 1 a 250) ou cole até 500 bilhetes personalizados do Excel. Cada giro usa a Web Cryptography API do navegador com opção de remover números já sorteados e baixar comprovante em CSV.",
      presets: {
        num10: { label: "1 a 10 (Rápido)", items: Array.from({ length: 10 }, (_, i) => String(i + 1)) },
        num60: { label: "01 a 60 (Bolão / Rifas)", items: Array.from({ length: 60 }, (_, i) => String(i + 1).padStart(2, "0")) },
        num100: { label: "1 a 100 (Cartela Completa)", items: Array.from({ length: 100 }, (_, i) => String(i + 1)) },
        num250: { label: "1 a 250 (Rifa Grande)", items: Array.from({ length: 250 }, (_, i) => String(i + 1)) }
      },
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Como organizar rifas, bingos e sorteios de números sem erro",
        subtitle: "Dicas práticas para sorteios ao vivo no WhatsApp, Instagram, escolas e confraternizações.",
        intro: "Quem já fez uma rifa beneficente ou um bingo de família sabe que sortear número em um quadradinho frio de texto deixa metade do grupo desconfiada. Colocar todos os bilhetes na roleta visível na tela — seja na TV da sala, no projetor da escola ou gravando a tela do celular — deixa o momento empolgante e elimina qualquer dúvida sobre o resultado.",
        paragraphs: [
          "Os atalhos logo acima da lista já cobrem os intervalos mais buscados no Brasil: de 1 a 10 para desempates rápidos, de 01 a 60 para combinações estilo bolão ou rifas médias, de 1 a 100 para cartelas clássicas e de 1 a 250 para rifas maiores de formatura e ação entre amigos. Se a sua rifa tiver números quebrados ou apenas bilhetes vendidos (por exemplo, do 101 ao 380), basta copiar a coluna da planilha e usar 'Colar Vários Nomes'."
        ],
        sections: [
          {
            heading: "Dois ajustes essenciais antes de girar o primeiro prêmio",
            body: "Para não precisar recomeçar uma live ou aula no meio, confira duas chaves nas Configurações:",
            bullets: [
              "Rifas, bingos e chamadas escolares: ligue 'Remover Vencedor Após Giro' para garantir que o mesmo número nunca saia duas vezes.",
              "Aulas de probabilidade e jogos de tabuleiro: mantenha a remoção desligada para que todos os números continuem com a mesma chance a cada rodada.",
              "Velocidade do giro: use 2 segundos quando precisar sortear 30 números seguidos de um bingo, ou suba para 10 segundos com som de tambor no prêmio principal."
            ]
          },
          {
            heading: "Como prestar contas de uma rifa usando o histórico CSV",
            body: "Depois de sortear o 3º, o 2º e o 1º prêmio, clique em 'Exportar CSV' no cartão de Histórico de Giros. O arquivo baixa na hora com a ordem exata e o horário de cada número sorteado, pronto para enviar no grupo da turma ou da família."
          }
        ],
        tips: [
          "Em rifas de 1 a 250, clique em 'Embaralhar' uma vez antes de girar se preferir os números fora da ordem sequencial.",
          "Lembre-se de salvar a roleta no navegador ('Salvar Roleta') se o evento tiver rodadas em dias diferentes.",
          "Todo o sorteio roda 100% no seu aparelho sem enviar nenhuma lista para servidores externos."
        ]
      },
      faqs: [
        { q: "Como sortear números de 01 a 60 ou de 1 a 250 na roleta?", a: "Clique nos botões de modelo rápido logo acima da lista para alternar em um toque entre 1–10, 1–60, 1–100 e 1–250 — ou cole qualquer sequência de até 500 números." },
        { q: "Como impedir que o mesmo número saia repetido na rifa?", a: "Ative a opção 'Remover Vencedor Após Giro' nas configurações. Assim, cada bilhete premiado sai automaticamente antes do próximo giro." },
        { q: "Posso colocar apenas os números que foram realmente vendidos?", a: "Sim! Clique em Limpar Tudo, abra 'Colar Vários Nomes' e cole somente os números vendidos da sua planilha ou mensagem do WhatsApp." },
        { q: "A roleta de números é imparcial mesmo em muitos giros?", a: "Sim. Cada número é escolhido por criptografia do próprio navegador (window.crypto.getRandomValues) antes de a animação começar, sem vício na velocidade do clique." },
        { q: "Dá para baixar a lista de números sorteados ao final?", a: "Sim. Use o botão 'Exportar CSV' no Histórico de Giros para salvar todos os números sorteados com data e hora." }
      ]
    },
    vi: {
      title: "Vòng Quay Chọn Số Ngẫu Nhiên | Quay Số 1–100 Miễn Phí",
      description: "Quay số ngẫu nhiên online miễn phí từ 1 đến 10, 1–50, 1–100 hoặc dán tới 500 số tùy chỉnh. Tự xóa số đã trúng, chỉnh tốc độ 2s–20s và xuất CSV.",
      heroTitle: "Vòng Quay Chọn Số Ngẫu Nhiên",
      heroHighlight: "Quay Số Trúng Thưởng & Gọi Số Lớp Học",
      heroSubtitle: "Chọn nhanh dãy số 1–10, 1–20, 1–50, 1–100 hoặc dán danh sách số phiếu bốc thăm tối đa 500 số — công bằng bằng Web Cryptography.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Mẹo quay số ngẫu nhiên minh bạch cho lớp học, minigame và bốc thăm",
        intro: "So với ô hiện số tĩnh chớp nhoáng trong nửa giây, vòng quay số trực quan giúp cả lớp học hoặc người xem livestream nhìn rõ từng nhịp quay chậm dần rồi dừng đúng con số trúng thưởng.",
        paragraphs: [
          "Bạn có thể dùng các bộ mẫu có sẵn hoặc dán cột số thứ tự học sinh, mã vé sự kiện (ví dụ từ 101 đến 400) trực tiếp từ Excel vào mục Dán Hàng Loạt. Mọi thao tác chạy hoàn toàn trên trình duyệt của bạn, không tải dữ liệu lên máy chủ."
        ],
        tips: [
          "Bật 'Xóa Người Thắng Sau Khi Quay' khi gọi số trúng thưởng hoặc quay số thứ tự trình bày để không lặp lại số cũ.",
          "Hạ thời gian quay xuống 2 giây nếu cần quay liên tục nhiều số cho trò chơi Lô Tô hoặc Bingo.",
          "Bấm 'Xuất File CSV' trong Lịch Sử Quay để lưu bằng chứng danh sách các số đã gọi kèm thời gian."
        ]
      },
      faqs: [
        { q: "Làm sao quay số ngẫu nhiên không bị trùng lặp?", a: "Hãy bật công tắc 'Xóa Người Thắng Sau Khi Quay' trong phần Cài Đặt; mỗi con số trúng sẽ tự động rút khỏi vòng quay." },
        { q: "Tôi có thể dán dãy mã vé không liên tiếp từ Excel không?", a: "Hoàn toàn được. Chọn Xóa Tất Cả, mở Dán Hàng Loạt và dán tối đa 500 con số bất kỳ." },
        { q: "Tốc độ quay nhanh hay chậm có ảnh hưởng đến xác suất trúng số không?", a: "Không. Kết quả được chọn bằng thuật toán mã hóa Web Cryptography ngay khi bấm quay, thời lượng 2s–20s chỉ tạo hiệu ứng hồi hộp." }
      ]
    },
    zh: {
      title: "随机数大转盘 | 免费在线数字抽奖与学号点名器 (1–500)",
      description: "免费在线随机数大转盘与数字抽奖轮盘：内置1–10、1–20与自定义最多500个数字Excel批量导入，支持中奖号码自动剔除不重复、1x–20x权重调节、随时手动停止与CSV记录导出，免登录即用。",
      keywords: "随机数大转盘, 数字转盘游戏, 随机数字转盘, 学号随机点名器, 在线抽奖转盘数字",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "课堂抽学号、门票开奖与自定义数字范围的实用技巧",
        intro: "比起瞬间跳出数字的静态随机框，可视化数字大转盘能让全班同学或直播间观众全程见证指针减速停靠，现场氛围和公信力都会明显提升。",
        paragraphs: [
          "如果活动门票或班级学号不是从 1 开始连续编号（例如 201 到 450，或剔除了空号），可以直接在 Excel 整理好整列号码，通过“批量粘贴”一键导入，最多支持 500 个数字扇区。"
        ],
        tips: [
          "多轮抽奖或依次抽查学号时，务必先打开“中奖后自动剔除”，避免同一号码重复被抽中。",
          "在 2 秒（快速问答）与 12 秒（压轴大奖配合擂鼓声）之间自由调节旋转时长。",
          "开奖结束后点击“导出CSV表格”，保留带时间戳的完整开奖凭证。"
        ]
      },
      faqs: [
        { q: "可以自定义 101 到 300 这样的非默认数字区间吗？", a: "可以！在 Excel 下拉填充所需数字，复制整列后点击“批量粘贴”即可一次性导入最多 500 个号码。" },
        { q: "如何保证每个数字的中奖概率完全一样？", a: "默认权重均为 1x 时，系统调用浏览器原生密码学随机接口（crypto.getRandomValues）配合拒绝采样，杜绝余数偏差。" },
        { q: "连续抽多个奖项时怎样避免重复中奖？", a: "在设置中开启“中奖后自动剔除”，每次抽出的数字都会自动移出轮盘。" }
      ]
    }
  },

  "letter-picker-wheel": {
    pt: {
      title: "Roleta de Letras e Roleta do Alfabeto A–Z (Stop Grátis)",
      description: "Gire a Roleta de Letras (Roleta do Alfabeto A a Z) online grátis! Sorteador de letras sem repetir para Stop, Adedonha e sala de aula — opção sem K, W e Y.",
      keywords: "roleta de letras, roleta alfabeto, roleta do alfabeto, roleta de alfabeto, roleta letras, roleta das letras, sorteador de letras, sorteio de letras, roleta de letras do alfabeto, roleta online de letras",
      heroTitle: "Roleta de Letras e Roleta do Alfabeto (A–Z)",
      heroHighlight: "Sorteador de Letras Online para Stop e Adedonha",
      heroSubtitle: "Sorteie qualquer letra de A a Z, apenas vogais, consoantes ou modo Stop sem K, W e Y — sem repetir nenhuma rodada.",
      quickAnswer: "<strong>Como jogar Stop / Adedonha com a Roleta de Letras?</strong> Clique em Girar com todas as 26 letras do alfabeto (ou use o atalho 'Stop Sem K, W, X, Y, Z' acima da lista) e ative 'Remover Vencedor Após Giro' para nunca repetir a mesma letra na partida.",
      presets: {
        az26: { label: "Alfabeto Completo A–Z (26)", items: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("") },
        stop21: { label: "Stop / Adedonha (Sem K, W, X, Y, Z)", items: "ABCDEFGHIJLMNOPQRSTUV".split("") },
        vogais: { label: "Apenas Vogais (A, E, I, O, U)", items: ["A", "E", "I", "O", "U"] },
        consoantes: { label: "Apenas Consoantes (21)", items: "BCDFGHJKLMNPQRSTVWXYZ".split("") }
      },
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Guia rápido para jogar Stop (Adedonha) e treinar alfabetização",
        subtitle: "Lista pronta de categorias de Adedonha e truques para escolas e noites de jogos em família.",
        intro: "Na hora de jogar Stop ou Adedonha com amigos, contar nos dedos quase sempre acaba caindo nas mesmas letras do começo do alfabeto — A, B, C, M, P — enquanto letras ótimas como G, L, R, T e V demoram a aparecer. Girando a Roleta de Letras, todas as letras têm exatamente a mesma chance e ninguém reclama da contagem.",
        paragraphs: [
          "Para partidas ágeis em família ou no recreio, muita gente prefere retirar as letras K, W, X e Y clicando no botão de apagar antes da primeira rodada. Já professores de alfabetização usam os atalhos de Vogais e Consoantes na lousa digital para criar desafios rápidos de leitura e formação de palavras."
        ],
        sections: [
          {
            heading: "12 categorias clássicas de Stop / Adedonha para copiar no papel",
            body: "Faltou ideia de coluna para a folha de caderno? Copie esta seleção clássica brasileira:",
            bullets: [
              "1) Nome Próprio  •  2) Animal  •  3) Cidade, Estado ou País (CEP)  •  4) Fruta ou Comida",
              "5) Objeto  •  6) Cor  •  7) Profissão  •  8) Filme, Série ou Novela",
              "9) Marca  •  10) Parte do Corpo  •  11) Minha Sogra É...  •  12) Time ou Esporte"
            ]
          }
        ],
        tips: [
          "Ligue 'Remover Vencedor Após Giro' para fazer 10 rodadas seguidas de Stop sem repetir uma única letra.",
          "Ajuste o tempo de giro para 2 segundos para pular direto para o cronômetro da rodada.",
          "Em turmas do 1º ao 3º ano, experimente adicionar sílabas ou dígrafos (CH, LH, NH, RR) usando a colagem em massa."
        ]
      },
      faqs: [
        { q: "Como remover as letras difíceis como K, W, X e Y no Stop?", a: "Basta clicar no botão de excluir ao lado de K, W, X e Y na lista de itens antes de girar — ou salvar sua própria lista 'Stop Rápido' no navegador." },
        { q: "Posso sortear letras sem repetir na mesma partida de Adedonha?", a: "Sim! Ative 'Remover Vencedor Após Giro' nas configurações para eliminar automaticamente cada letra já jogada." },
        { q: "A roleta tem opção só com vogais ou só com consoantes?", a: "Sim, clique nos modelos rápidos acima da lista para alternar entre Alfabeto Completo (A–Z), Vogais e Consoantes." },
        { q: "Funciona bem no celular para jogar com amigos na mesa?", a: "Sim, a interface é responsiva, não exige cadastro e pode ser usada em tela cheia direto no celular." }
      ]
    },
    vi: {
      title: "Vòng Quay Chữ Cái A–Z | Chọn Chữ Ngẫu Nhiên Miễn Phí",
      description: "Quay vòng quay chữ cái A–Z miễn phí cho trò chơi nối chữ, dạy đánh vần, học từ vựng tiếng Anh và đố vui nhóm — tự động loại chữ đã quay.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Ứng dụng Vòng Quay Chữ Cái cho lớp học và trò chơi từ vựng",
        intro: "Vòng quay 26 chữ cái A–Z giúp giáo viên tiếng Anh, gia sư và nhóm bạn tổ chức trò chơi tìm từ nhanh theo chủ đề mà không bị trùng chữ cái giữa các lượt.",
        tips: [
          "Bật 'Xóa Người Thắng Sau Khi Quay' để chơi 10 lượt liên tiếp với 10 chữ cái hoàn toàn khác nhau.",
          "Dùng bộ lọc Nguyên âm / Phụ âm để luyện phát âm và ghép vần cho học sinh tiểu học.",
          "Bạn có thể dán thêm chữ cái tiếng Việt có dấu (Ă, Â, Đ, Ê, Ô, Ơ, Ư) nếu dạy tiếng Việt."
        ]
      },
      faqs: [
        { q: "Có thể loại bỏ các chữ khó như Q, X, Z khi chơi tìm từ tiếng Anh không?", a: "Có, bạn chỉ cần xóa các chữ đó khỏi danh sách rồi lưu lại thành vòng quay riêng trên trình duyệt." },
        { q: "Có thể thêm chữ cái tiếng Việt như Ă, Â, Đ, Ơ, Ư vào vòng quay không?", a: "Hoàn toàn được. Bạn có thể nhập từng chữ hoặc dán toàn bộ 29 chữ cái tiếng Việt qua mục Dán Hàng Loạt." }
      ]
    }
  },

  "color-picker-wheel": {
    pt: {
      title: "Roleta de Cores e Roleta das Cores Online (Sorteador)",
      description: "Gire a Roleta de Cores (Roleta das Cores) online grátis! Sorteador de cores para o Desafio das 3 Cores no desenho, educação infantil, RGB/HEX e gincanas.",
      keywords: "roleta de cores, roleta das cores, roleta de cores online, sorteador de cores, roleta cores, roleta de cores para girar, roleta da cor, sorteio de cores",
      heroTitle: "Roleta de Cores Online",
      heroHighlight: "Sorteador de Cores para Desenho, Desafio 3 Cores e Jogos",
      heroSubtitle: "Sorteie cores do arco-íris, tons pastéis, neon ou códigos HEX/RGB para desafios artísticos, educação infantil e dinâmicas de festa.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Desafio das 3 Cores, atividades infantis e combinações criativas",
        subtitle: "Como artistas, pais e professores aproveitam a roleta de cores no dia a dia.",
        intro: "Quando abrimos uma caixa com 36 lápis de cor, a mão vai quase no piloto automático para os mesmos tons confortáveis de azul, preto e vermelho. No famoso Desafio das 3 Cores (muito popular no TikTok e em oficinas de arte), girar a roleta três vezes com eliminação ligada obriga o desenhista a criar sombras, contrastes e personagens usando apenas as três cores sorteadas.",
        paragraphs: [
          "Na educação infantil, projetar ou abrir a Roleta de Cores no celular vira uma caça ao tesouro em cinco minutos: cada criança gira uma cor e precisa encontrar um objeto daquela tonalidade na sala. Já designers e ilustradores digitais podem colar seus próprios códigos HEX (#F59E0B, #10B981, #3B82F6) em 'Colar Vários Nomes' para testar variações inesperadas."
        ],
        tips: [
          "Ligue 'Remover Vencedor Após Giro' antes de começar o Desafio das 3 Cores para não sortear a mesma cor duas vezes.",
          "Combine a Roleta de Cores com a Roleta dos Animais para inventar personagens malucos em aulas de artes.",
          "Troque o Tema Visual nas configurações (Pastel, Neon ou Arco-Íris) para combinar com o clima da brincadeira."
        ]
      },
      faqs: [
        { q: "Como fazer o Desafio das 3 Cores no desenho sem repetir cor?", a: "Ative 'Remover Vencedor Após Giro' nas configurações e gire 3 vezes seguidas — cada cor sorteada sai da roleta na hora." },
        { q: "Posso colocar os nomes exatos dos meus lápis ou códigos HEX?", a: "Sim! Clique em Limpar Tudo e cole sua lista personalizada de cores ou códigos HEX usando 'Colar Vários Nomes'." },
        { q: "A roleta funciona para jogos de educação infantil sem propagandas invasivas?", a: "Sim, basta tocar em Tela Cheia para manter apenas o disco colorido em destaque no celular, tablet ou lousa digital." }
      ]
    },
    vi: {
      title: "Vòng Quay Màu Sắc Online | Chọn Màu Ngẫu Nhiên Miễn Phí",
      description: "Quay vòng quay màu sắc ngẫu nhiên miễn phí cho thử thách vẽ tranh 3 màu, trò chơi nhận biết màu sắc cho bé và chọn bảng màu thiết kế.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Thử thách vẽ 3 màu và trò chơi nhận biết màu sắc cho trẻ em",
        intro: "Vòng quay màu sắc giúp các bạn trẻ vẽ thử thách 3 cây bút màu (3-Marker Challenge) công bằng hơn, đồng thời là hoạt động cực vui giúp trẻ mầm non học gọi tên màu sắc tiếng Việt và tiếng Anh.",
        tips: [
          "Bật 'Xóa Người Thắng Sau Khi Quay' và quay 3 lần để nhận đúng 3 màu khác nhau cho thử thách vẽ tranh.",
          "Bạn có thể dán mã màu HEX thiết kế riêng của mình vào danh sách để chọn tông màu chủ đạo cho poster.",
          "Bật chế độ toàn màn hình khi tổ chức trò chơi tìm đồ vật theo màu trong lớp học."
        ]
      },
      faqs: [
        { q: "Làm sao quay đúng 3 màu không trùng cho thử thách vẽ tranh?", a: "Bật công tắc 'Xóa Người Thắng Sau Khi Quay' rồi quay 3 lượt liên tiếp." },
        { q: "Có thể thêm các màu sắc tùy chỉnh hoặc mã HEX không?", a: "Có, bạn chỉ cần nhập tên màu hoặc mã HEX trực tiếp vào ô thêm mục." }
      ]
    },
    zh: {
      description: "免费颜色随机大转盘与在线配色抽签轮盘：内置彩虹基础色、莫兰迪柔和粉彩与赛博霓虹色预设，开启中奖自动剔除即可轻松完成三色绘画挑战（3-Marker Challenge），支持自定义HEX色号批量导入且免登录即用。",
      keywords: "颜色随机大转盘, 三色绘画挑战转盘, 在线颜色抽签器, 随机配色转盘"
    }
  },

  "country-picker-wheel": {
    zh: {
      description: "免费全球国家随机大转盘（世界各国抽签轮盘）：支持按亚洲、欧洲、美洲、非洲与大洋洲筛选国家及国旗，开启中奖自动剔除即可进行不重复的地理课堂提问、世界地图淘汰赛与旅行美食目的地随机抽选。",
      keywords: "全球国家随机大转盘, 世界国家转盘, 随机国家生成器, 地理课堂抽签转盘"
    },
    pt: {
      title: "Roleta de Todos os Países do Mundo (195) | Eliminação",
      description: "Gire a Roleta com Todos os Países do Mundo (195 países da ONU) grátis! Filtre por continente e ative eliminação automática para guerra de mapas e geografia.",
      keywords: "roleta de todos os países do mundo, roleta com todos os países do mundo, roleta de paises, roleta de países, roleta de países do mundo, roleta sorteadora de todos os países do mundo com eliminação, roleta dos países, sorteador de paises",
      heroTitle: "Roleta de Todos os Países do Mundo",
      heroHighlight: "Todos os 195 Países com Eliminação Automática",
      heroSubtitle: "Sorteie qualquer um dos 195 países reconhecidos pela ONU — perfeito para batalha de países no mapa, aulas de geografia e desafios gastronômicos.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Batalha de Países com eliminação, aulas de geografia e culinária",
        subtitle: "Como aproveitar todos os 195 países da ONU e os filtros por continente.",
        intro: "Se você pedir a alguém para pensar em um país aleatório, quase sempre saem Brasil, Japão, França, Estados Unidos ou Itália — deixando mais de 180 países fora da brincadeira. Reunir os 195 estados soberanos com fatias idênticas garante exatamente 0,51% de chance para cada nação.",
        paragraphs: [
          "Um dos usos favoritos na internet brasileira é o jogo 'Quem Domina o Mundo' (batalha de países no mapa): basta ligar 'Remover Vencedor Após Giro', baixar o tempo de giro para 2 segundos e ir eliminando ou conquistando territórios vizinhos até restar apenas um país campeão. Em casa, casais e famílias sorteiam um país por mês para preparar uma receita típica daquela cultura."
        ],
        tips: [
          "Use os filtros de continente (Europa, Ásia, África, Américas e Oceania) para rodadas mais curtas em sala de aula.",
          "Em jogos de eliminação com todos os 195 países, mantenha a janela do vencedor ligada para ler o nome e a bandeira com nitidez.",
          "Quer focar apenas no Brasil? Confira também nossa Roleta dos Estados do Brasil com todas as 27 UFs."
        ]
      },
      faqs: [
        { q: "A roleta realmente contém todos os 195 países do mundo?", a: "Sim! Estão carregados os 193 países-membros da ONU mais os 2 estados observadores (Vaticano e Palestina), totalizando os 195 países soberanos." },
        { q: "Como jogar batalha de países com eliminação na roleta?", a: "Ligue 'Remover Vencedor Após Giro' nas configurações e reduza o Tempo de Giro para 2 segundos para eliminar países rapidamente sem repetir." },
        { q: "Posso filtrar apenas países da Europa ou da América do Sul?", a: "Sim, clique nos modelos rápidos de continente logo acima da lista de países." }
      ]
    }
  },

  "truth-or-dare-wheel": {
    pt: {
      title: "Roleta Verdade ou Desafio Online | Jogo de Roleta Grátis",
      description: "Jogue Verdade ou Desafio Jogo Roleta online grátis! Escolha Clássico 50/50, Família, Casais, Escola ou Festa com amigos — divertido no celular ou na TV.",
      keywords: "verdade ou desafio jogo roleta, roleta verdade ou desafio, verdade ou desafio roleta, roleta de verdade ou desafio, giro de verdade e desafio, verdade ou desafio online roleta",
      heroTitle: "Roleta Verdade ou Desafio Online",
      heroHighlight: "Jogo de Roleta para Festas, Casais, Amigos e Família",
      heroSubtitle: "Acabe com a dúvida de quem escolhe Verdade toda rodada — gire no celular ou projete na TV com modos Clássico, Festa, Casais e Família.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Como deixar o jogo Verdade ou Desafio mais animado e sem climão",
        subtitle: "Regras simples de convivência e ideias prontas para festas, acampamentos e viagens.",
        intro: "Toda rodada tradicional de Verdade ou Desafio corre o risco de travar quando ninguém consegue inventar um desafio criativo na hora ou quando alguém escolhe 'Verdade' cinco vezes seguidas. Passar a decisão para a roleta tira o peso do grupo e mantém o ritmo leve da primeira à última rodada.",
        paragraphs: [
          "Antes de começar, combine dois acordos rápidos com todos na roda: nada que envolva mexer no celular pessoal de alguém ou colocar ninguém em risco, e cada jogador tem direito a um 'Passa a Vez' durante a noite caso uma pergunta deixe a pessoa desconfortável."
        ],
        tips: [
          "Com crianças ou família reunida, selecione o modelo 'Família & Crianças' acima da lista para desafios leves e engraçados.",
          "Deixe cada amigo adicionar secretamente 1 verdade divertida e 1 desafio criativo antes da primeira rodada.",
          "Ative 'Remover Vencedor Após Giro' quando carregar listas de perguntas específicas para não repetir nenhum desafio."
        ]
      },
      faqs: [
        { q: "Existe modo limpo de Verdade ou Desafio para jogar em família ou escola?", a: "Sim! Clique nos modelos prontos 'Família' ou 'Escola' logo acima da lista para carregar perguntas e desafios leves para todas as idades." },
        { q: "Posso escrever minhas próprias verdades e desafios na roleta?", a: "Sim, clique em Limpar Tudo e digite ou cole até 500 perguntas e desafios personalizados sem criar conta." },
        { q: "Como sortear quem vai girar a roleta em cada turno?", a: "Abra a Roleta de Nomes em outra aba (ou use o celular em roda) para sortear quem está na vez antes de girar Verdade ou Desafio." }
      ]
    },
    vi: {
      title: "Vòng Quay Thật Hay Thách Online | Trò Chơi Tiệc Miễn Phí",
      description: "Chơi Thật Hay Thách online miễn phí trên vòng quay! Chế độ Cổ điển 50/50, Gia đình vui nhộn, Lớp học an toàn và Tiệc bạn bè không cần tải app.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Mẹo chơi Thật Hay Thách vui vẻ, không gượng gạo cho nhóm bạn",
        intro: "Vòng quay giúp nhóm bạn không còn bí ý tưởng đặt câu hỏi hay lo ai đó chỉ chọn Nói Thật mãi. Bạn có thể chuyển nhanh giữa chế độ 50/50 cổ điển hoặc nạp sẵn các thử thách hài hước, văn minh.",
        tips: [
          "Thống nhất trước nguyên tắc tôn trọng quyền riêng tư và cho mỗi người 1 lượt Miễn Phạt nếu gặp câu hỏi ngại trả lời.",
          "Bật chế độ loại bỏ kết quả đã quay khi dùng danh sách câu hỏi riêng để không bị trùng thử thách.",
          "Dùng chế độ toàn màn hình khi chiếu lên TV phòng khách hoặc chia sẻ qua Discord."
        ]
      },
      faqs: [
        { q: "Có sẵn bộ câu hỏi Thật Hay Thách lành mạnh cho gia đình và học sinh không?", a: "Có, hãy chọn các bộ mẫu có sẵn ngay phía trên danh sách mục của vòng quay." },
        { q: "Có thể tự thêm các thử thách riêng của nhóm bạn không?", a: "Hoàn toàn được — bạn có thể thêm hoặc dán tối đa 500 câu hỏi và thử thách riêng." }
      ]
    }
  },

  "brazil-state-picker-wheel": {
    es: {
      title: "Ruleta con los Estados de Brasil | 26 Estados + DF (IBGE)",
      description: "¡Gira la Ruleta con los Estados de Brasil (Ruleta de los 26 Estados Brasileños + Distrito Federal) gratis! Filtra por las 5 regiones del IBGE sin repetición.",
      keywords: "ruleta con los estados de brasil, ruleta de los estados de brasil, estados de brasil al azar, ruleta estados brasileños, geografía de brasil"
    },
    pt: {
      title: "Roleta dos Estados do Brasil | 26 Estados + DF (IBGE)",
      description: "Gire a Roleta dos Estados do Brasil (Sorteador de Estados Brasileiros) com todos os 26 estados + Distrito Federal! Filtre pelas 5 regiões do IBGE grátis.",
      keywords: "roleta dos estados do brasil, roleta estados brasileiros, sorteador de estados, roleta dos estados brasileiros, sorteador online de estado brasileiro, estados do brasil roleta",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Quiz de capitais, siglas (UF) e regiões do Brasil pelo IBGE",
        subtitle: "Todas as 27 unidades federativas com probabilidade exata de 1/27 (3,70%).",
        intro: "De norte a sul, as 27 unidades federativas do Brasil reúnem sotaques, biomas e culinárias completamente diferentes. Usar a Roleta dos Estados do Brasil transforma aulas de geografia, gincanas escolares e desafios de viagem em uma dinâmica interativa onde Acre, Roraima e Sergipe têm a mesma visibilidade de São Paulo e Rio de Janeiro.",
        paragraphs: [
          "Experimente o desafio relâmpago de capitais e siglas: ative 'Remover Vencedor Após Giro', projete a roleta em tela cheia e dê cinco segundos para cada equipe responder a capital, a sigla (UF) e a macrorregião do IBGE (Norte, Nordeste, Centro-Oeste, Sudeste ou Sul) do estado sorteado."
        ],
        tips: [
          "Use os botões rápidos de região (Nordeste, Sudeste, Sul, Norte, Centro-Oeste) para estudar uma região por aula.",
          "Com a remoção automática ligada, é possível revisar todas as 27 capitais brasileiras em menos de cinco minutos.",
          "Para uma brincadeira gastronômica em casa, sorteie um estado por mês e cozinhe um prato típico daquele lugar."
        ]
      },
      faqs: [
        { q: "A roleta inclui o Distrito Federal além dos 26 estados?", a: "Sim, carrega todas as 27 unidades federativas do Brasil (26 estados + Distrito Federal), cada uma com sigla oficial." },
        { q: "Como revisar todas as 27 capitais sem repetir nenhum estado?", a: "Ligue 'Remover Vencedor Após Giro' e ajuste o tempo de giro para 2,5 segundos para passar por todos os 27 estados rapidamente." }
      ]
    }
  },

  "yes-no-wheel": {
    zh: {
      description: "纠结症与选择困难救星！免费在线“是/否（Yes or No）”随机决策大转盘，采用浏览器原生密码学随机算法保证50/50绝对公平，支持纯粹二选一、包含“也许/再转一次”模式及三局两胜，免注册即刻使用。",
      keywords: "是否随机转盘, 二选一决策转盘, 在线决定转盘, 幸运大转盘小决定"
    },
    pt: {
      title: "Roleta Sim ou Não Online | Decisão 50/50 e Talvez Grátis",
      description: "Gire a Roleta Sim ou Não (Sim ou Não Roleta) online grátis para decidir rápido! Alterne entre 50/50 exato, Sim/Não/Talvez ou Melhor de 3 sem cadastro.",
      keywords: "roleta sim ou não, sim ou não roleta, roleta de sim ou não, roleta online sim ou não, jogo sim ou nao roleta",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Quando uma roleta 50/50 ajuda você a decidir mais rápido",
        intro: "Passar vinte minutos travado em uma escolha pequena — pedir lanche ou cozinhar, sair hoje ou descansar, ver mais um episódio — cansa a mente sem melhorar o resultado. Enquanto a roleta desacelera por alguns segundos, sua reação sincera geralmente aparece antes mesmo de o ponteiro parar: alívio confirma a resposta, e vontade de girar de novo mostra o que você já queria fazer.",
        tips: [
          "Combine antes de clicar se vale um único giro ou 'melhor de três' acompanhando o Histórico de Giros.",
          "Use o modo 50/50 estrito para desempates definitivos, ou mantenha 'Talvez' para brincadeiras em grupo.",
          "Guarde a roleta para decisões leves do dia a dia — nunca para escolhas médicas, financeiras ou jurídicas."
        ]
      },
      faqs: [
        { q: "A Roleta Sim ou Não tem exatamente 50% de chance para cada lado?", a: "Sim! No modo Sim / Não (50/50), cada opção ocupa exatamente metade do círculo e é sorteada via Web Cryptography API." },
        { q: "Posso aumentar a chance do 'Sim' em relação ao 'Não'?", a: "Sim, basta clicar no botão '+' ao lado de Sim para dar peso 2x, 3x ou mais, vendo a nova porcentagem ao vivo." },
        { q: "Por que às vezes sai Sim três vezes seguidas?", a: "Em sorteios realmente independentes, sequências acontecem naturalmente (12,5% de chance em 3 giros). Um giro anterior nunca altera o próximo." }
      ]
    }
  },

  "animal-picker-wheel": {
    zh: {
      description: "免费动物随机大转盘（野生动物与萌宠抽签轮盘）：涵盖丛林猛兽、海洋生物、飞禽鸟类与常见宠物预设，支持1x–20x自定义权重与中奖自动剔除，非常适合生物课提问、儿童早教认知、你画我猜与动物融合绘画挑战。",
      keywords: "动物随机大转盘, 随机动物生成器, 儿童动物认知转盘, 绘画灵感随机轮盘"
    },
    pt: {
      title: "Roleta dos Animais Aleatórios | Sorteador Online Grátis",
      description: "Gire a Roleta dos Animais grátis! Sorteie bichos da selva, marinhos, aves e pets para mímica, desenho criativo, aulas de ciências e brincadeiras.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Mímica em família, desenho de animais híbridos e aulas de ciências",
        intro: "Pedir para crianças desenharem 'qualquer bicho' quase sempre termina em gato ou cachorro. Quando você ativa a remoção automática e gira a Roleta dos Animais duas vezes, surgem desafios criativos inesquecíveis — como misturar Pinguim com Polvo ou Águia com Tartaruga — que soltam a imaginação em segundos.",
        tips: [
          "Para mímica silenciosa com crianças menores, mostre o animal sorteado com emoji direto na tela do celular.",
          "Alterne entre Selva, Animais Marinhos e Aves nos botões rápidos acima da lista.",
          "Em aulas de biologia ou inglês, peça aos alunos para descreverem habitat e alimentação do animal sorteado."
        ]
      },
      faqs: [
        { q: "Posso sortear dois animais diferentes para desafio de desenho?", a: "Sim! Ligue 'Remover Vencedor Após Giro' e gire duas vezes para combinar dois bichos diferentes." },
        { q: "Dá para adicionar animais da fauna brasileira como Capivara e Onça-Pintada?", a: "Com certeza — digite novos animais no campo de entrada ou cole uma lista inteira em 'Colar Vários Nomes'." }
      ]
    }
  },

  "team-picker-wheel": {
    pt: {
      title: "Roleta de Times e Equipes | Sorteador de Grupos Grátis",
      description: "Divida amigos, alunos ou colegas em equipes equilibradas com a Roleta de Times grátis! Ideal para pelada de futebol, escola e gincanas sem panelinha.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Como tirar times equilibrados para pelada, escola e trabalho",
        intro: "Escolher times no 'par ou ímpar' com dois capitães sempre gera constrangimento para quem sobra por último. Usando a Roleta de Times com remoção automática, o sorteio fica transparente para todo mundo na quadra ou na sala de aula.",
        paragraphs: [
          "Dica de ouro para peladas equilibradas: faça o sorteio em dois potes! Primeiro coloque apenas os 4 melhores jogadores (ou goleiros) e sorteie um para cada equipe; depois cole o restante da galera e vá alternando entre Time A, Time B e Time C."
        ],
        tips: [
          "Cole a lista de confirmados direto do grupo do WhatsApp usando 'Colar Vários Nomes'.",
          "Exporte o histórico em CSV ao terminar para mandar a escalação oficial no chat da turma.",
          "As listas ficam salvas só no seu navegador, sem precisar criar conta."
        ]
      },
      faqs: [
        { q: "Como garantir que os dois melhores jogadores não caiam no mesmo time?", a: "Sorteie primeiro apenas os cabeças de chave (um para cada equipe) com remoção ligada e depois sorteie os demais jogadores." },
        { q: "Quantos nomes cabem na Roleta de Times?", a: "Até 500 participantes de uma só vez, direto pelo celular ou computador." }
      ]
    },
    vi: {
      title: "Vòng Quay Chia Nhóm & Chia Đội | Random Công Bằng",
      description: "Chia nhóm lớp học, chia đội đá bóng hay team building minh bạch với Vòng Quay Chia Nhóm miễn phí. Dán nhanh 500 tên và tự loại người đã chọn.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Cách chia đội công bằng và cân bằng trình độ trong 30 giây",
        intro: "Để tránh tình trạng nhóm mạnh dồn về một phe khi đá bóng hoặc làm bài tập nhóm, hãy chia làm 2 lượt quay: lượt 1 chỉ quay nhóm trưởng/thành viên trụ cột phân đều vào từng đội, lượt 2 dán toàn bộ thành viên còn lại và bật tự động xóa tên sau khi quay.",
        tips: [
          "Dán nhanh danh sách thành viên từ Zalo hoặc Excel bằng nút Dán Hàng Loạt.",
          "Xuất file CSV sau khi chia xong để gửi bảng danh sách đội vào nhóm chat."
        ]
      },
      faqs: [
        { q: "Làm sao chia 4 đội đều nhau không trùng người?", a: "Bật 'Xóa Người Thắng Sau Khi Quay', lần lượt ghi tên người trúng vào Đội 1, Đội 2, Đội 3, Đội 4 theo vòng tròn." },
        { q: "Danh sách tên nhân viên hay học sinh có bị lưu lên mạng không?", a: "Không, mọi dữ liệu chạy cục bộ hoàn toàn trong trình duyệt của bạn." }
      ]
    }
  },

  "month-picker-wheel": {
    pt: {
      title: "Roleta dos Meses do Ano | Sortear Mês (Jan a Dez)",
      description: "Gire a Roleta dos Meses do Ano de Janeiro a Dezembro grátis! Ótima para escolher mês de viagem, metas mensais, aniversários e dinâmicas escolares.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Ideias criativas para usar a Roleta dos Meses (Janeiro a Dezembro)",
        intro: "Tirar uma viagem ou um desafio pessoal do papel fica muito mais fácil quando você trava um mês concreto no calendário. Em casa, também funciona super bem na brincadeira 'Roleta da Galeria': sorteie um mês e cada pessoa mostra uma foto tirada naquele mês no ano passado.",
        tips: [
          "Ative 'Remover Vencedor Após Giro' para sortear os 12 anfitriões de encontros mensais sem repetir ninguém.",
          "Em aulas do ensino fundamental, pergunte qual estação do ano ou feriado cai no mês sorteado."
        ]
      },
      faqs: [
        { q: "Cada mês de janeiro a dezembro tem a mesma chance?", a: "Sim, exatamente 1/12 (8,33%) para cada mês via Web Cryptography." }
      ]
    }
  },

  "music-genre-wheel": {
    pt: {
      title: "Roleta de Estilos Musicais | Sortear Gênero Online",
      description: "Gire a Roleta de Estilos Musicais grátis! Sorteie Sertanejo, MPB, Rock, Pop, Funk, Eletrônica ou Jazz para playlists, karaokê e viagens de carro.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Fim da briga pelo som do carro e desafios de karaokê",
        intro: "Os algoritmos de streaming costumam repetir as mesmas faixas toda semana. Usar a roleta de estilos musicais em viagens de carro ou noites de karaokê garante que todo mundo da turma tenha sua vez no som sem discussão.",
        tips: [
          "Em viagens longas, cada passageiro escolhe 2 estilos, liga a remoção automática e gira uma troca a cada hora.",
          "No karaokê, sorteie o estilo primeiro para obrigar o cantor a sair da zona de conforto."
        ]
      },
      faqs: [
        { q: "Posso adicionar Pagode, Forró, Sertanejo ou Bossa Nova na roleta?", a: "Sim! Edite ou adicione qualquer gênero brasileiro em segundos e salve sua playlist favorita no navegador." }
      ]
    }
  },

  "language-picker-wheel": {
    pt: {
      title: "Roleta de Idiomas | Sorteador de Línguas Online Grátis",
      description: "Gire a Roleta de Idiomas grátis para escolher qual língua estudar hoje! Inglês, Espanhol, Japonês, Francês, Coreano e Italiano sem cadastro.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Como escolher o próximo idioma sem ficar meses em dúvida",
        intro: "Muita gente passa semanas comparando se estuda Espanhol, Inglês, Italiano ou Japonês e acaba não começando nenhum. Deixe na roleta apenas os 3 idiomas que realmente despertam sua curiosidade, gire uma vez e comprometa-se com 30 dias focados no vencedor.",
        tips: [
          "Se você já estuda dois ou mais idiomas, gire a roleta toda manhã para alternar podcasts e leitura.",
          "Professores podem usar a roleta para sortear temas culturais e saudações mundiais em projetos escolares."
        ]
      },
      faqs: [
        { q: "Quantos idiomas posso colocar na roleta personalizada?", a: "Até 500 idiomas ou tópicos de conversação usando o botão de colagem em massa." }
      ]
    }
  },

  "planet-picker-wheel": {
    pt: {
      title: "Roleta dos Planetas | Sortear Sistema Solar Online",
      description: "Gire a Roleta dos Planetas grátis! Sorteie entre os 8 planetas do Sistema Solar (Mercúrio a Netuno), Plutão e luas famosas para trabalhos escolares.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Dividindo feiras de ciências e quizzes astronômicos com justiça",
        intro: "Em qualquer trabalho escolar sobre o Sistema Solar, quase todos os grupos disputam Saturno ou Marte e deixam Mercúrio, Vênus e Urano de lado. Girar a roleta ao vivo na sala distribui os oito planetas com exatamente 12,5% de chance para cada um.",
        tips: [
          "Clique no modelo 'Luas & Planetas Anões' para incluir Plutão, Titã e Europa em turmas mais avançadas.",
          "Ligue 'Remover Vencedor Após Giro' para garantir que cada equipe pesquise um planeta diferente."
        ]
      },
      faqs: [
        { q: "Qual a chance de cada um dos 8 planetas sair na roleta?", a: "Exatamente 1/8 (12,5%) para cada planeta, sorteado com criptografia no navegador." }
      ]
    },
    vi: {
      title: "Vòng Quay Hành Tinh | Chọn 8 Hành Tinh Hệ Mặt Trời",
      description: "Quay vòng quay chọn ngẫu nhiên 8 hành tinh Hệ Mặt Trời (Sao Thủy đến Sao Hải Vương) miễn phí cho thuyết trình khoa học và đố vui thiên văn.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Chia đề tài thuyết trình Hệ Mặt Trời công bằng trên lớp",
        intro: "Thay vì nhóm nào cũng tranh làm về Sao Thổ hay Sao Hỏa, giáo viên có thể chiếu vòng quay 8 hành tinh và bật tự động loại bỏ sau mỗi lượt quay để 8 nhóm nhận đúng 8 đề tài khác nhau.",
        tips: [
          "Hỏi nhanh học sinh vị trí thứ tự tính từ Mặt Trời của hành tinh vừa quay trúng.",
          "Có thể thêm Sao Diêm Vương hoặc Mặt Trăng nếu mở rộng bài học thiên văn."
        ]
      },
      faqs: [
        { q: "Mỗi hành tinh trong 8 hành tinh có xác suất bao nhiêu?", a: "Chính xác 12,5% (1/8) cho từng hành tinh bằng Web Cryptography." }
      ]
    }
  },

  "zodiac-picker-wheel": {
    pt: {
      title: "Roda dos Signos Online | Roleta dos 12 Signos Grátis",
      description: "Gire a Roda dos Signos grátis de Áries a Peixes! Filtre pelos elementos Fogo, Terra, Ar e Água para quizzes, criação de personagens e festas.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Brincadeiras em grupo e criação de personagens com os 12 signos",
        intro: "Escritores, mestres de RPG e grupos de amigos adoram girar a Roda dos Signos como ponto de partida criativo: sorteie um signo e descubra qual amigo da mesa mais combina com aquele perfil ou use o elemento sorteado (Fogo, Terra, Ar ou Água) para definir o temperamento de um personagem.",
        tips: [
          "Use os botões de elemento acima da lista para filtrar apenas signos de Fogo, Terra, Ar ou Água.",
          "Você também pode colar os 12 signos do Horóscopo Chinês e salvar sua roleta personalizada."
        ]
      },
      faqs: [
        { q: "Todos os 12 signos de Áries a Peixes estão na roleta?", a: "Sim, cada um dos 12 signos ocupa exatamente 1/12 (8,33%) do círculo." }
      ]
    }
  },

  "coin-flip-wheel": {
    pt: {
      title: "Roleta Cara ou Coroa | Jogar Moeda Online 50/50 Grátis",
      description: "Sem moeda no bolso? Gire a Roleta Cara ou Coroa online grátis com 50/50 exato para futebol, jogos de mesa, desempates e melhor de três.",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "Cara ou Coroa justo 50/50 sem moeda caindo no chão",
        intro: "Na hora de decidir quem dá a saída na pelada ou quem começa o jogo de tabuleiro, ninguém mais anda com moeda trocada no bolso — e moeda física ainda pode rolar para baixo do sofá. Na Roleta Cara ou Coroa, todo mundo acompanha o resultado 50/50 na tela com histórico automático para 'melhor de três'.",
        tips: [
          "Combine Cara ou Coroa em voz alta antes de apertar o botão Girar.",
          "Acompanhe o saldo de vitórias no cartão de Estatísticas para desafios de melhor de 3 ou melhor de 5."
        ]
      },
      faqs: [
        { q: "Por que a roleta padrão vem com 4 fatias alternadas de Cara e Coroa?", a: "Duas fatias de Cara e duas de Coroa mantêm exatamente 50% para cada lado e deixam a rotação visual mais empolgante." }
      ]
    }
  },

  "raffle-wheel": {
    zh: {
      title: "在线抽奖转盘生成器 | 免费活动抽奖与年会大转盘",
      description: "免费在线抽奖转盘生成器与幸运大转盘：支持从Excel批量粘贴最多500名参与者或抽奖编号，提供1x–20x自定义概率权重、中奖后自动剔除、随时手动停止与CSV开奖凭证导出，免登录打开即用。",
      keywords: "在线抽奖转盘生成器, 幸运大转盘在线生成器, 随机轮盘生成器, 在线转盘生成器, 抽奖转盘免费",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "直播间抽奖、公司年会与粉丝回馈转盘设置指南",
        intro: "举办直播间粉丝福利或公司年会抽奖时，最影响口碑的往往不是奖品大小，而是开奖过程是否公开透明。开启全屏模式或将无广告的嵌入地址放入 OBS 直播画面，让所有观众亲眼看到名单与真实减速开奖过程。",
        paragraphs: [
          "遇到 VIP 额外抽奖券或转发加权规则时，无需重复粘贴同一用户名十几次把扇区挤得看不清字——直接点击该名单旁的“+”权重按钮（支持 1x–20x），既保留清晰名字，又能实时展示准确中奖百分比。"
        ],
        tips: [
          "多奖项活动建议按三等奖 → 二等奖 → 一等奖顺序抽取，并提前开启“中奖后自动剔除”。",
          "大奖开奖时可将转动时长拉长至 8–12 秒并开启擂鼓音效，拉满现场氛围。",
          "抽奖结束后点击“导出CSV表格”，保存完整时间记录方便事后核对。"
        ]
      },
      faqs: [
        { q: "如何给特定参与者设置双倍或多倍中奖概率？", a: "点击名单右侧的“+”按钮即可将该项权重在 1x 至 20x 之间调整，无需重复录入名字。" },
        { q: "可以在 OBS 直播软件中直接嵌入纯净无广告的抽奖转盘吗？", a: "可以！点击“嵌入到您的网站”获取 ?embed=1 链接，直接添加为 OBS 浏览器源即可。" }
      ]
    }
  },

  "classroom-name-picker": {
    zh: {
      title: "课堂随机点名转盘 | 免费教师在线点名器（免登录）",
      description: "免费课堂随机点名转盘与教师在线点名器：一键批量粘贴Excel全班学生花名册（最高500人），支持已点同学自动剔除不重复、1x–20x权重、静音模式与本地浏览器隐私保存，完美适配电子白板投影。",
      keywords: "课堂随机点名转盘, 在线大转盘随机点名器, 转盘点名器, 随机点名大转盘, 课堂点名轮盘",
      replaceGuide: true,
      mergeFaqs: true,
      guide: {
        title: "老师在电子白板与网课中高效使用随机点名器的方法",
        intro: "课堂提问如果总是靠老师主观挑人，容易集中在前排活跃同学；用投影大屏转动随机点名转盘，不仅能立刻拉回走神学生的注意力，还能让学生感受到提问完全公平。",
        paragraphs: [
          "所有导入的学生姓名只在当前电脑的浏览器本地内存和 localStorage 运行，不上传到任何外部服务器，也不需要注册账号，非常适合学校公用电脑和多媒体教室。"
        ],
        tips: [
          "为不同班级（例如“高一3班”“英语提高班”）分别点击“保存当前转盘”，上课前一键切换。",
          "打开“中奖后自动剔除”，确保本节课或本周内每位同学都能轮到一次发言机会。",
          "自习课或安静测验时可点击顶部喇叭图标一键静音。"
        ]
      },
      faqs: [
        { q: "学生花名册数据会上传到网络服务器吗？", a: "不会。全部名单仅保存在您的本地浏览器中，刷新不丢失且充分保护学生隐私。" },
        { q: "全班点完一轮后怎样快速恢复完整名单？", a: "从“我保存的转盘”下拉框重新载入班级名单即可一键恢复全部同学。" }
      ]
    }
  },

  "picker-wheel": {
    zh: {
      description: "免费在线随机选择大转盘（自定义选项决定器）：自由输入或从Excel批量粘贴多达500个选项、任务或灵感清单，支持1x–20x自定义概率权重、抽中自动剔除、随时手动停止与二维码分享，免登录公平帮你做决定。",
      keywords: "随机选择大转盘, 在线决定转盘, 随机转盘决定器, 大转盘小决定网页版, 自定义转盘生成器"
    }
  },

  "wheel-of-names": {
    zh: {
      description: "免费在线名字大转盘与随机姓名抽取器：支持从Excel或表格一键批量粘贴多达500个名字，提供1x–20x概率权重调节、中奖名单自动剔除不重复、随时手动停止与CSV导出，广泛用于教师课堂点名、团队晨会与年会抽奖。",
      keywords: "名字大转盘, 随机点名器, 在线抽奖转盘生成器, 轮盘随机名字生成器, 随机抽名字转盘"
    }
  },

  "randomizer-number-1-100": {
    zh: {
      description: "免费1到100随机数大转盘（1–100完整百格抽奖轮盘）：支持1–10、1–60与全量1–100数字一键加载，每个数字精确拥有1%中奖概率，已抽号码可自动剔除不重复并导出CSV记录，非常适合课堂学号抽查、百人抽奖与概率实验。",
      keywords: "1到100随机数转盘, 1-100数字大转盘, 百人抽奖转盘, 随机数字生成器1-100"
    }
  }
};
