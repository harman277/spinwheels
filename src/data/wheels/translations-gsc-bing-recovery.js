/* =========================================================
   BING + GSC REAL-DATA RECOVERY TRANSLATION MODULE
   Restores high-click / high-impression localized pages across:
   - Portuguese (pt): +17 new + 1 upgraded = 24 total PT wheels
   - Vietnamese (vi): +13 new = 15 total VI wheels
   - Polish (pl): +2 new = 4 total PL wheels
   - Spanish (es): +1 new = 17 total ES wheels
   - Chinese (zh): +2 new = 6 total ZH wheels
   Strict native copy with zero English editorial leakage.
   ========================================================= */

function numRange(start, end) {
  const out = [];
  for (let i = start; i <= end; i++) out.push(String(i));
  return out;
}

const PT_NUM_1_10 = numRange(1, 10);
const PT_NUM_1_60 = numRange(1, 60);
const PT_NUM_1_100 = numRange(1, 100);
const PT_NUM_1_250 = numRange(1, 250);

const BR_STATES_PT = [
  "Acre (AC)", "Alagoas (AL)", "Amapá (AP)", "Amazonas (AM)", "Bahia (BA)",
  "Ceará (CE)", "Distrito Federal (DF)", "Espírito Santo (ES)", "Goiás (GO)", "Maranhão (MA)",
  "Mato Grosso (MT)", "Mato Grosso do Sul (MS)", "Minas Gerais (MG)", "Pará (PA)", "Paraíba (PB)",
  "Paraná (PR)", "Pernambuco (PE)", "Piauí (PI)", "Rio de Janeiro (RJ)", "Rio Grande do Norte (RN)",
  "Rio Grande do Sul (RS)", "Rondônia (RO)", "Roraima (RR)", "Santa Catarina (SC)", "São Paulo (SP)",
  "Sergipe (SE)", "Tocantins (TO)"
];

const PT_COUNTRIES_195 = [
  "Afeganistão 🇦🇫", "África do Sul 🇿🇦", "Albânia 🇦🇱", "Alemanha 🇩🇪", "Andorra 🇦🇩",
  "Angola 🇦🇴", "Antígua e Barbuda 🇦🇬", "Arábia Saudita 🇸🇦", "Argélia 🇩🇿", "Argentina 🇦🇷",
  "Armênia 🇦🇲", "Austrália 🇦🇺", "Áustria 🇦🇹", "Azerbaijão 🇦🇿", "Bahamas 🇧🇸",
  "Bahrein 🇧🇭", "Bangladesh 🇧🇩", "Barbados 🇧🇧", "Bélgica 🇧🇪", "Belize 🇧🇿",
  "Benim 🇧🇯", "Bielorrússia 🇧🇾", "Bolívia 🇧🇴", "Bósnia e Herzegovina 🇧🇦", "Botsuana 🇧🇼",
  "Brasil 🇧🇷", "Brunei 🇧🇳", "Bulgária 🇧🇬", "Burkina Faso 🇧🇫", "Burundi 🇧🇮",
  "Butão 🇧🇹", "Cabo Verde 🇨🇻", "Camarões 🇨🇲", "Camboja 🇰🇭", "Canadá 🇨🇦",
  "Catar 🇶🇦", "Cazaquistão 🇰🇿", "Chade 🇹🇩", "Chile 🇨🇱", "China 🇨🇳",
  "Chipre 🇨🇾", "Colômbia 🇨🇴", "Comores 🇰🇲", "Congo 🇨🇬", "Coreia do Norte 🇰🇵",
  "Coreia do Sul 🇰🇷", "Costa do Marfim 🇨🇮", "Costa Rica 🇨🇷", "Croácia 🇭🇷", "Cuba 🇨🇺",
  "Dinamarca 🇩🇰", "Djibuti 🇩🇯", "Dominica 🇩🇲", "Egito 🇪🇬", "El Salvador 🇸🇻",
  "Emirados Árabes Unidos 🇦🇪", "Equador 🇪🇨", "Eritreia 🇪🇷", "Eslováquia 🇸🇰", "Eslovênia 🇸🇮",
  "Espanha 🇪🇸", "Essuatíni 🇸🇿", "Estados Unidos 🇺🇸", "Estônia 🇪🇪", "Etiópia 🇪🇹",
  "Fiji 🇫🇯", "Filipinas 🇵🇭", "Finlândia 🇫🇮", "França 🇫🇷", "Gabão 🇬🇦",
  "Gâmbia 🇬🇲", "Gana 🇬🇭", "Geórgia 🇬🇪", "Granada 🇬🇩", "Grécia 🇬🇷",
  "Guatemala 🇬🇹", "Guiana 🇬🇾", "Guiné 🇬🇳", "Guiné Equatorial 🇬🇶", "Guiné-Bissau 🇬🇼",
  "Haiti 🇭🇹", "Honduras 🇭🇳", "Hungria 🇭🇺", "Iêmen 🇾🇪", "Ilhas Marshall 🇲🇭",
  "Ilhas Salomão 🇸🇧", "Índia 🇮🇳", "Indonésia 🇮🇩", "Irã 🇮🇷", "Iraque 🇮🇶",
  "Irlanda 🇮🇪", "Islândia 🇮🇸", "Israel 🇮🇱", "Itália 🇮🇹", "Jamaica 🇯🇲",
  "Japão 🇯🇵", "Jordânia 🇯🇴", "Kiribati 🇰🇮", "Kuwait 🇰🇼", "Laos 🇱🇦",
  "Lesoto 🇱🇸", "Letônia 🇱🇻", "Líbano 🇱🇧", "Libéria 🇱🇷", "Líbia 🇱🇾",
  "Liechtenstein 🇱🇮", "Lituânia 🇱🇹", "Luxemburgo 🇱🇺", "Macedônia do Norte 🇲🇰", "Madagascar 🇲🇬",
  "Malásia 🇲🇾", "Malawi 🇲🇼", "Maldivas 🇲🇻", "Mali 🇲🇱", "Malta 🇲🇹",
  "Marrocos 🇲🇦", "Maurício 🇲🇺", "Mauritânia 🇲🇷", "México 🇲🇽", "Mianmar 🇲🇲",
  "Micronésia 🇫🇲", "Moçambique 🇲🇿", "Moldávia 🇲🇩", "Mônaco 🇲🇨", "Mongólia 🇲🇳",
  "Montenegro 🇲🇪", "Namíbia 🇳🇦", "Nauru 🇳🇷", "Nepal 🇳🇵", "Nicarágua 🇳🇮",
  "Níger 🇳🇪", "Nigéria 🇳🇬", "Noruega 🇳🇴", "Nova Zelândia 🇳🇿", "Omã 🇴🇲",
  "Países Baixos 🇳🇱", "Palau 🇵🇼", "Palestina 🇵🇸", "Panamá 🇵🇦", "Papua-Nova Guiné 🇵🇬",
  "Paquistão 🇵🇰", "Paraguai 🇵🇾", "Peru 🇵🇪", "Polônia 🇵🇱", "Portugal 🇵🇹",
  "Quênia 🇰🇪", "Quirguistão 🇰🇬", "Reino Unido 🇬🇧", "República Centro-Africana 🇨🇫", "República Checa 🇨🇿",
  "República Democrática do Congo 🇨🇩", "República Dominicana 🇩🇴", "Romênia 🇷🇴", "Ruanda 🇷🇼", "Rússia 🇷🇺",
  "Samoa 🇼🇸", "San Marino 🇸🇲", "Santa Lúcia 🇱🇨", "São Cristóvão e Neves 🇰🇳", "São Tomé e Príncipe 🇸🇹",
  "São Vicente e Granadinas 🇻🇨", "Seicheles 🇸🇨", "Senegal 🇸🇳", "Serra Leoa 🇸🇱", "Sérvia 🇷🇸",
  "Singapura 🇸🇬", "Síria 🇸🇾", "Somália 🇸🇴", "Sri Lanka 🇱🇰", "Sudão 🇸🇩",
  "Sudão do Sul 🇸🇸", "Suécia 🇸🇪", "Suíça 🇨🇭", "Suriname 🇸🇷", "Tailândia 🇹🇭",
  "Tajiquistão 🇹🇯", "Tanzânia 🇹🇿", "Timor-Leste 🇹🇱", "Togo 🇹🇬", "Tonga 🇹🇴",
  "Trinidad e Tobago 🇹🇹", "Tunísia 🇹🇳", "Turcomenistão 🇹🇲", "Turquia 🇹🇷", "Tuvalu 🇹🇻",
  "Ucrânia 🇺🇦", "Uganda 🇺🇬", "Uruguai 🇺🇾", "Uzbequistão 🇺🇿", "Vanuatu 🇻🇺",
  "Vaticano 🇻🇦", "Venezuela 🇻🇪", "Vietnã 🇻🇳", "Zâmbia 🇿🇲", "Zimbábue 🇿🇼"
];

export default {
  "language-picker-wheel": {
    pt: {
      name: "Roleta de Idiomas",
      title: "Roleta de Idiomas | Sorteador de Línguas Online Grátis",
      description: "Gire a Roleta de Idiomas grátis para escolher qual língua estudar ou praticar hoje. Inclui Português, Inglês, Espanhol, Japonês, Francês e mais sem cadastro.",
      heroTitle: "Roleta de Idiomas",
      heroHighlight: "Sorteador Aleatório de Línguas do Mundo",
      heroSubtitle: "Descubra qual idioma aprender ou pratique conversação poliglota e trabalhos escolares com giro criptográfico imparcial.",
      quickAnswer: "<strong>O que é a Roleta de Idiomas?</strong> Uma ferramenta online gratuita com os idiomas mais falados e estudados do mundo, além de filtros por famílias latinas e asiáticas para estudos, desafios e aulas culturais.",
      items: ["Português 🇧🇷", "Inglês 🇺🇸", "Espanhol 🇪🇸", "Francês 🇫🇷", "Alemão 🇩🇪", "Italiano 🇮🇹", "Japonês 🇯🇵", "Coreano 🇰🇷", "Mandarim 🇨🇳", "Árabe 🇸🇦"],
      presets: {
        popular: { label: "Mais Estudados", items: ["Inglês 🇺🇸", "Espanhol 🇪🇸", "Francês 🇫🇷", "Italiano 🇮🇹", "Alemão 🇩🇪", "Japonês 🇯🇵", "Coreano 🇰🇷"] },
        asian: { label: "Idiomas Asiáticos", items: ["Japonês 🇯🇵", "Coreano 🇰🇷", "Mandarim 🇨🇳", "Vietnamita 🇻🇳", "Tailandês 🇹🇭", "Hindi 🇮🇳"] }
      },
      faqs: [
        { q: "Como usar a Roleta de Idiomas para escolher um curso?", a: "Deixe apenas os 3 ou 4 idiomas que você tem interesse em aprender e gire para começar um desafio de 14 dias." },
        { q: "Posso adicionar outros idiomas como Libras, Russo ou Turco?", a: "Sim, digite qualquer idioma no campo de entrada ou cole sua lista personalizada." }
      ]
    },
    vi: {
      name: "Vòng Quay Ngôn Ngữ Thế Giới",
      title: "Vòng Quay Ngôn Ngữ | Chọn Tiếng Học Ngẫu Nhiên Miễn Phí",
      description: "Quay vòng quay chọn ngôn ngữ miễn phí để quyết định học tiếng Anh, Nhật, Hàn, Trung, Pháp, Đức hoặc ôn tập từ vựng ngoại ngữ.",
      heroTitle: "Vòng Quay Chọn Ngôn Ngữ",
      heroHighlight: "Chọn Ngoại Ngữ Ngẫu Nhiên Trực Tuyến",
      heroSubtitle: "Chọn nhanh ngôn ngữ tiếp theo để tự học, luyện nói đa ngôn ngữ hoặc chia chủ đề văn hóa trên lớp.",
      quickAnswer: "<strong>Vòng quay ngôn ngữ là gì?</strong> Công cụ miễn phí giúp người học ngoại ngữ và giáo viên chọn ngẫu nhiên tiếng Anh, Nhật, Hàn, Trung, Tây Ban Nha hoặc Pháp trong trình duyệt.",
      items: ["Tiếng Anh 🇬🇧", "Tiếng Nhật 🇯🇵", "Tiếng Hàn 🇰🇷", "Tiếng Trung 🇨🇳", "Tiếng Pháp 🇫🇷", "Tiếng Đức 🇩🇪", "Tiếng Tây Ban Nha 🇪🇸", "Tiếng Việt 🇻🇳"],
      presets: {
        popular: { label: "Ngôn Ngữ Phổ Biến", items: ["Tiếng Anh 🇬🇧", "Tiếng Nhật 🇯🇵", "Tiếng Hàn 🇰🇷", "Tiếng Trung 🇨🇳", "Tiếng Pháp 🇫🇷", "Tiếng Đức 🇩🇪"] }
      },
      faqs: [
        { q: "Có thể thêm ngoại ngữ khác vào vòng quay không?", a: "Có. Bạn có thể tự do thêm tới 500 ngôn ngữ hoặc chủ đề từ vựng bất kỳ." }
      ]
    }
  },

  "brazil-state-picker-wheel": {
    pt: {
      name: "Roleta dos Estados do Brasil",
      title: "Roleta dos Estados do Brasil | Sortear 26 Estados + DF",
      description: "Sorteie todos os 26 estados do Brasil + Distrito Federal (DF) grátis! Filtre pelas 5 regiões do IBGE e use eliminação automática sem repetir.",
      heroTitle: "Roleta dos Estados do Brasil",
      heroHighlight: "Sorteador de Todos os 26 Estados + DF",
      heroSubtitle: "Sorteie qualquer estado brasileiro ou filtre por Nordeste, Sudeste, Sul, Norte e Centro-Oeste com pesos 1x–20x e giro ajustável de 2s a 20s.",
      quickAnswer: "<strong>O que é a Roleta dos Estados do Brasil?</strong> Um sorteador online gratuito com todas as <strong>27 unidades federativas do Brasil</strong> (26 estados + Distrito Federal, chance exata de 1/27 = 3,70%), filtros pelas 5 regiões do IBGE e remoção automática sem repetição.",
      items: BR_STATES_PT,
      presets: {
        all27: { label: "Todos os 27 (Estados + DF)", items: BR_STATES_PT },
        nordeste: { label: "Nordeste (9)", items: ["Alagoas (AL)", "Bahia (BA)", "Ceará (CE)", "Maranhão (MA)", "Paraíba (PB)", "Pernambuco (PE)", "Piauí (PI)", "Rio Grande do Norte (RN)", "Sergipe (SE)"] },
        sudeste: { label: "Sudeste (4)", items: ["Espírito Santo (ES)", "Minas Gerais (MG)", "Rio de Janeiro (RJ)", "São Paulo (SP)"] },
        sul: { label: "Sul (3)", items: ["Paraná (PR)", "Rio Grande do Sul (RS)", "Santa Catarina (SC)"] },
        norte: { label: "Norte (7)", items: ["Acre (AC)", "Amapá (AP)", "Amazonas (AM)", "Pará (PA)", "Rondônia (RO)", "Roraima (RR)", "Tocantins (TO)"] },
        centroOeste: { label: "Centro-Oeste (4)", items: ["Distrito Federal (DF)", "Goiás (GO)", "Mato Grosso (MT)", "Mato Grosso do Sul (MS)"] }
      },
      faqs: [
        { q: "A roleta tem todos os 26 estados brasileiros mais o Distrito Federal?", a: "Sim! Todas as 27 unidades da federação com suas siglas (SP, RJ, MG, BA, RS, DF etc.) já vêm carregadas de fábrica." },
        { q: "Como sortear estados do Brasil sem repetir o mesmo estado?", a: "Ative a opção 'Remover Vencedor Após Giro' nas configurações para eliminar cada estado já sorteado." },
        { q: "Posso filtrar apenas a região Nordeste, Sudeste ou Sul?", a: "Sim, basta clicar nos botões rápidos de Região logo acima da lista de estados." }
      ]
    },
    es: {
      name: "Ruleta de los Estados de Brasil",
      title: "Ruleta Estados de Brasil | 27 Estados Brasileños Online Gratis",
      description: "Gira la ruleta con todos los 26 estados de Brasil más el Distrito Federal. Filtra por regiones Norte, Nordeste, Sureste y Sur gratis y sin registro.",
      heroTitle: "Ruleta de los Estados de Brasil",
      heroHighlight: "Los 26 Estados Brasileños + Distrito Federal",
      heroSubtitle: "Sortea estados de Brasil para geografía, retos de banderas o juegos eliminatorios en directo.",
      quickAnswer: "<strong>¿Qué incluye esta Ruleta de Estados de Brasil?</strong> Las 27 unidades federativas de Brasil (26 estados + DF) con sus siglas oficiales y filtros por macroregiones del IBGE.",
      items: BR_STATES_PT,
      presets: {
        all27: { label: "Todos los 27 Estados + DF", items: BR_STATES_PT },
        suresteSur: { label: "Sureste y Sur", items: ["São Paulo (SP)", "Rio de Janeiro (RJ)", "Minas Gerais (MG)", "Espírito Santo (ES)", "Paraná (PR)", "Santa Catarina (SC)", "Rio Grande do Sul (RS)"] },
        nordeste: { label: "Nordeste (9)", items: ["Bahia (BA)", "Pernambuco (PE)", "Ceará (CE)", "Maranhão (MA)", "Paraíba (PB)", "Rio Grande do Norte (RN)", "Alagoas (AL)", "Piauí (PI)", "Sergipe (SE)"] }
      },
      faqs: [
        { q: "¿Están incluidos todos los estados de Brasil y Brasilia?", a: "Sí, carga automáticamente los 26 estados más el Distrito Federal (27 opciones)." }
      ]
    }
  },

  "planet-picker-wheel": {
    pt: {
      name: "Roleta dos Planetas",
      title: "Roleta dos Planetas | Sortear Planeta do Sistema Solar",
      description: "Gire a Roleta dos Planetas grátis! Sorteie entre Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno (+ Plutão e Luas) para trabalhos e quizzes.",
      heroTitle: "Roleta dos Planetas",
      heroHighlight: "Sorteador do Sistema Solar Online",
      heroSubtitle: "Perfeita para trabalhos escolares de ciências, quizzes astronômicos e ideias de ficção científica com probabilidade justa de 1/8.",
      quickAnswer: "<strong>Como funciona a Roleta dos Planetas?</strong> Sorteia de forma imparcial qualquer um dos 8 planetas do Sistema Solar (ou planetas anões e luas famosas nos atalhos rápidos) com Web Cryptography no navegador.",
      items: ["Mercúrio ☿️", "Vênus ♀️", "Terra 🌍", "Marte ♂️", "Júpiter ♃", "Saturno ♄", "Urano ♅", "Netuno ♆"],
      presets: {
        oito: { label: "8 Planetas Oficiais", items: ["Mercúrio ☿️", "Vênus ♀️", "Terra 🌍", "Marte ♂️", "Júpiter ♃", "Saturno ♄", "Urano ♅", "Netuno ♆"] },
        anoes: { label: "Luas & Planetas Anões", items: ["Plutão 🤍", "Lua da Terra 🌕", "Europa (Júpiter) 🧊", "Titã (Saturno) 🌫️", "Io 🌋", "Ceres 🪨"] }
      },
      faqs: [
        { q: "Posso incluir Plutão ou a Lua na roleta?", a: "Sim! Clique no modelo 'Luas & Planetas Anões' ou adicione Plutão em segundos no campo de texto." }
      ]
    },
    vi: {
      name: "Vòng Quay Hành Tinh Hệ Mặt Trời",
      title: "Vòng Quay Hành Tinh | Chọn Hành Tinh Ngẫu Nhiên Miễn Phí",
      description: "Quay vòng quay chọn ngẫu nhiên 8 hành tinh trong Hệ Mặt Trời: Sao Thủy, Sao Kim, Trái Đất, Sao Hỏa, Sao Mộc, Sao Thổ, Sao Thiên Vương và Sao Hải Vương.",
      heroTitle: "Vòng Quay Hành Tinh",
      heroHighlight: "Khám Phá Ngẫu Nhiên Hệ Mặt Trời",
      heroSubtitle: "Dành cho học sinh thuyết trình khoa học, câu lạc bộ thiên văn và trò chơi đố vui không cần đăng nhập.",
      quickAnswer: "<strong>Vòng quay hành tinh là gì?</strong> Công cụ chọn ngẫu nhiên 8 hành tinh chính trong Hệ Mặt Trời với xác suất đồng đều 12,5% mỗi hành tinh.",
      items: ["Sao Thủy ☿️", "Sao Kim ♀️", "Trái Đất 🌍", "Sao Hỏa ♂️", "Sao Mộc ♃", "Sao Thổ ♄", "Sao Thiên Vương ♅", "Sao Hải Vương ♆"],
      presets: {
        all8: { label: "8 Hành Tinh Chính", items: ["Sao Thủy ☿️", "Sao Kim ♀️", "Trái Đất 🌍", "Sao Hỏa ♂️", "Sao Mộc ♃", "Sao Thổ ♄", "Sao Thiên Vương ♅", "Sao Hải Vương ♆"] }
      },
      faqs: [
        { q: "Có thể loại bỏ hành tinh đã bốc để chia bài tập nhóm không?", a: "Có, hãy bật 'Xóa Người Thắng Sau Khi Quay' để mỗi nhóm nhận một hành tinh khác nhau." }
      ]
    }
  },

  "animal-picker-wheel": {
    pt: {
      name: "Roleta dos Animais",
      title: "Roleta de Animais Aleatórios | Sorteador Online Grátis",
      description: "Gire a Roleta dos Animais grátis! Sorteie bichos da selva, oceano, aves e pets para mímica, desenho e aulas de ciências sem repetir.",
      heroTitle: "Roleta dos Animais",
      heroHighlight: "Sorteador Aleatório de Bichos Online",
      heroSubtitle: "Ideal para mímica em família, trabalhos de biologia e desafios criativos de desenho com animais da terra, mar e ar.",
      quickAnswer: "<strong>Para que serve a Roleta dos Animais?</strong> Permite sortear instantaneamente animais da selva, marinhos, aves e domésticos usando Web Cryptography, sem baixar aplicativo.",
      items: ["Leão 🦁", "Tigre 🐯", "Elefante 🐘", "Golfinho 🐬", "Girafa 🦒", "Panda 🐼", "Canguru 🦘", "Pinguim 🐧", "Guepardo 🐆", "Coala 🐨"],
      presets: {
        selva: { label: "Selva & Terrestres", items: ["Leão 🦁", "Tigre 🐯", "Elefante 🐘", "Girafa 🦒", "Urso 🐻", "Lobo 🐺", "Macaco 🐒"] },
        marinhos: { label: "Animais Marinhos", items: ["Golfinho 🐬", "Tubarão 🦈", "Baleia 🐋", "Polvo 🐙", "Tartaruga Marinha 🐢", "Pinguim 🐧"] },
        aves: { label: "Aves & Pássaros", items: ["Águia 🦅", "Coruja 🦉", "Flamingo 🦩", "Arara 🦜", "Pavão 🦚", "Cisne 🦢"] }
      },
      faqs: [
        { q: "Posso sortear dois animais diferentes para desafios de desenho?", a: "Sim, ative 'Remover Vencedor Após Giro' e gire duas vezes para combinar características de dois bichos!" }
      ]
    },
    vi: {
      name: "Vòng Quay Con Vật Ngẫu Nhiên",
      title: "Vòng Quay Con Vật | Chọn Động Vật Ngẫu Nhiên Miễn Phí",
      description: "Quay vòng quay chọn con vật miễn phí với động vật rừng xanh, đại dương, chim trời và thú cưng. Phù hợp cho trẻ em học tiếng Anh, vẽ tranh và đoán chữ.",
      heroTitle: "Vòng Quay Con Vật",
      heroHighlight: "Chọn Động Vật Ngẫu Nhiên Vui Nhộn",
      heroSubtitle: "Dùng cho lớp học sinh học, trò chơi mô phỏng tiếng kêu động vật và thử thách vẽ tranh cho bé.",
      quickAnswer: "<strong>Vòng quay con vật hoạt động ra sao?</strong> Chọn sẵn bộ Sư tử, Cá heo, Voi, Gấu trúc, Chim đại bàng hoặc tùy chỉnh tối đa 500 loài vật yêu thích.",
      items: ["Sư Tử 🦁", "Hổ 🐯", "Voi 🐘", "Cá Heo 🐬", "Hươu Cao Cổ 🦒", "Gấu Trúc 🐼", "Chim Cánh Cụt 🐧", "Cú Mèo 🦉"],
      presets: {
        forest: { label: "Rừng Xanh", items: ["Sư Tử 🦁", "Hổ 🐯", "Voi 🐘", "Gấu Trúc 🐼", "Sói 🐺", "Khỉ 🐒"] },
        ocean: { label: "Đại Dương", items: ["Cá Heo 🐬", "Cá Mập 🦈", "Cá Voi 🐋", "Bạch Tuộc 🐙", "Rùa Biển 🐢"] }
      },
      faqs: [
        { q: "Vòng quay có phù hợp cho học sinh tiểu học không?", a: "Hoàn toàn phù hợp và an toàn, không cần tài khoản hay tải ứng dụng." }
      ]
    },
    pl: {
      name: "Koło Fortuny Zwierzęta",
      title: "Koło Fortuny Zwierzęta | Losowe Zwierzę Online Za Darmo",
      description: "Zakręć darmowym kołem ze zwierzętami! Losuj zwierzęta lądowe, morskie, ptaki i pupile do kalamburów, lekcji przyrody i wyzwań rysunkowych.",
      heroTitle: "Koło Fortuny Zwierzęta",
      heroHighlight: "Darmowy Generator Zwierząt Online",
      heroSubtitle: "Idealne do szkolnych referatów z biologii, zabaw rodzinnych dla dzieci i losowania tematów do szkicowania.",
      quickAnswer: "<strong>Jak działa Koło Zwierząt?</strong> Wpisz własne gatunki lub skorzystaj z gotowych zestawów (Sawanna, Ocean, Ptaki) z usuwaniem wylosowanych zwierząt.",
      items: ["Lew 🦁", "Tygrys 🐯", "Słoń 🐘", "Delfin 🐬", "Żyrafa 🦒", "Panda 🐼", "Pingwin 🐧", "Orzeł 🦅", "Wilk 🐺", "Koala 🐨"],
      presets: {
        dzikie: { label: "Dzikie Zwierzęta", items: ["Lew 🦁", "Tygrys 🐯", "Słoń 🐘", "Żyrafa 🦒", "Wilk 🐺", "Niedźwiedź 🐻"] },
        morskie: { label: "Zwierzęta Morskie", items: ["Delfin 🐬", "Rekin 🦈", "Wieloryb 🐋", "Ośmiornica 🐙", "Żółw Morski 🐢"] }
      },
      faqs: [
        { q: "Czy mogę dodać własne zwierzęta do koła?", a: "Tak, możesz wkleić lub wpisać do 500 własnych gatunków bez rejestracji." }
      ]
    },
    zh: {
      name: "动物随机大转盘",
      title: "动物随机大转盘 | 免费在线儿童早教与绘画抽签轮盘",
      description: "免费动物大转盘：涵盖丛林猛兽、海洋生物、飞禽与萌宠预设，支持1x–20x权重与中奖自动剔除，适合生物课点名、儿童认知与动物模仿游戏。",
      heroTitle: "动物随机大转盘",
      heroHighlight: "动物抽签与早教互动轮盘",
      heroSubtitle: "轻松挑选狮子、海豚、熊猫或老鹰，支持 1x–20x 权重与中奖自动剔除，适合家庭游戏与自然课堂。",
      quickAnswer: "<strong>动物转盘适合什么场景？</strong> 预设丛林动物、海洋生物和飞禽分组，支持一键贴入最多 500 种动物，采用浏览器加密随机算法。",
      items: ["狮子 🦁", "老虎 🐯", "大象 🐘", "海豚 🐬", "长颈鹿 🦒", "大熊猫 🐼", "企鹅 🐧", "猫头鹰 🦉", "袋鼠 🦘", "考拉 🐨"],
      presets: {
        forest: { label: "陆地与丛林", items: ["狮子 🦁", "老虎 🐯", "大象 🐘", "长颈鹿 🦒", "大熊猫 🐼", "狼 🐺", "猴子 🐒"] },
        ocean: { label: "海洋生物", items: ["海豚 🐬", "鲨鱼 🦈", "鲸鱼 🐋", "章鱼 🐙", "海龟 🐢", "企鹅 🐧"] },
        birds: { label: "飞禽鸟类", items: ["老鹰 🦅", "猫头鹰 🦉", "火烈鸟 🦩", "鹦鹉 🦜", "孔雀 🦚", "天鹅 🦢"] }
      },
      faqs: [
        { q: "如何用动物转盘玩‘你画我猜’或模仿游戏？", a: "在设置中开启“中奖后自动剔除”，每次转出一个动物后它会自动移出转盘，确保整局游戏不冷场不重复。" },
        { q: "可以自己补充海底生物或十二生肖吗？", a: "当然可以，清空示例后可批量粘贴最多 500 个动物名称。" }
      ],
      guide: {
        title: "动物随机大转盘在亲子早教与课堂上的趣味用法",
        intro: "把抽象的抽签变成生动的动物图标与旋转声效，既能帮助低龄儿童认识自然物种，也能让动物模仿与绘画接力变得更加公平好玩。",
        tips: [
          "开启不重复剔除开关连抽两只动物，让小朋友或插画师尝试把两种动物特征画在一起。",
          "使用预设标签在陆地、海洋与鸟类主题之间一键切换，免去课堂临时建表时间。",
          "通过 2s–20s 时长滑块加快节奏，或将结果历史导出为 CSV 记录学习进度。"
        ]
      }
    }
  },

  "month-picker-wheel": {
    pt: {
      name: "Roleta dos Meses do Ano",
      title: "Roleta dos Meses | Sorteador de Janeiro a Dezembro Grátis",
      description: "Gire a Roleta dos Meses online grátis para sortear de Janeiro a Dezembro! Escolha datas de viagem, festas, desafios mensais e aulas escolares.",
      heroTitle: "Roleta dos Meses do Ano",
      heroHighlight: "Sorteador de Janeiro a Dezembro (12 Meses)",
      heroSubtitle: "Todos os 12 meses com 8,33% de chance igual — ideal para definir o mês das férias, sorteios de aniversário e atividades escolares.",
      quickAnswer: "<strong>Para que serve a Roleta dos Meses?</strong> Sorteia qualquer mês de Janeiro a Dezembro ou estações do ano usando algoritmos criptográficos sem viés no navegador.",
      items: ["Janeiro ❄️", "Fevereiro 🎭", "Março 🌱", "Abril 🌧️", "Maio 🌸", "Junho 🔥", "Julho 🎆", "Agosto 🌬️", "Setembro 🌻", "Outubro 🎃", "Novembro 🍂", "Dezembro 🎄"],
      presets: {
        meses: { label: "12 Meses (Jan–Dez)", items: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"] },
        estacoes: { label: "4 Estações", items: ["Verão ☀️", "Outono 🍂", "Inverno ❄️", "Primavera 🌸"] }
      },
      faqs: [
        { q: "Todos os 12 meses têm exatamente a mesma chance?", a: "Sim, cada mês ocupa exatamente 30 graus da roleta (1/12 = 8,33% de probabilidade)." }
      ]
    },
    vi: {
      name: "Vòng Quay 12 Tháng Trong Năm",
      title: "Vòng Quay Tháng Trong Năm | Chọn Tháng Ngẫu Nhiên Miễn Phí",
      description: "Quay vòng quay chọn ngẫu nhiên từ Tháng 1 đến Tháng 12 hoặc 4 mùa trong năm hoàn toàn miễn phí để lập kế hoạch du lịch và trò chơi lớp học.",
      heroTitle: "Vòng Quay 12 Tháng",
      heroHighlight: "Chọn Ngẫu Nhiên Từ Tháng 1 Đến Tháng 12",
      heroSubtitle: "Chia đều 12 tháng xác suất 8,33% cho mini game, chọn ngày kỷ niệm và dạy học cho trẻ nhỏ.",
      quickAnswer: "<strong>Vòng quay tháng dùng để làm gì?</strong> Chọn ngẫu nhiên 1 trong 12 tháng hoặc 4 mùa Xuân Hạ Thu Đông nhanh chóng mà không cần tải app.",
      items: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
      presets: {
        seasons: { label: "4 Mùa Trong Năm", items: ["Mùa Xuân 🌸", "Mùa Hạ ☀️", "Mùa Thu 🍂", "Mùa Đông ❄️"] }
      },
      faqs: [
        { q: "Xác suất của cả 12 tháng có ngang nhau không?", a: "Có, mỗi tháng có đúng 1/12 (8,33%) cơ hội trúng nhờ thuật toán Web Cryptography." }
      ]
    }
  },

  "music-genre-wheel": {
    pt: {
      name: "Roleta de Estilos Musicais",
      title: "Roleta de Estilos Musicais | Sortear Gênero de Música Grátis",
      description: "Gire a Roleta de Estilos Musicais grátis! Sorteie Sertanejo, Funk, Rock, Pop, Pagode, Eletrônica ou Lo-Fi para festas, treinos e desafios musicais.",
      heroTitle: "Roleta de Estilos Musicais",
      heroHighlight: "Sorteador de Gêneros & Playlists Online",
      heroSubtitle: "Acabe com a briga por quem escolhe o som no carro ou na festa — coloque estilos brasileiros e globais na roleta!",
      quickAnswer: "<strong>O que é a Roleta de Estilos Musicais?</strong> Uma roda interativa gratuita para sortear ritmos brasileiros (Sertanejo, Pagode, Funk, MPB, Forró) e gêneros globais como Pop, Rock, Hip-Hop e Eletrônica.",
      items: ["Sertanejo 🤠", "Pop 🎤", "Rock 🎸", "Pagode 🥁", "Eletrônica 🎧", "Hip-Hop / Rap 🎙️", "Funk 🔊", "MPB 🎶", "Lo-Fi ☕", "Samba 💃"],
      presets: {
        brasil: { label: "Ritmos Brasileiros", items: ["Sertanejo 🤠", "Pagode 🥁", "Funk 🔊", "MPB 🎶", "Forró 🪗", "Samba 💃", "Axé ⚡"] },
        globais: { label: "Estilos Globais", items: ["Pop 🎤", "Rock 🎸", "Hip-Hop 🎙️", "EDM / Eletrônica 🎧", "Jazz 🎷", "R&B 🎵"] }
      },
      faqs: [
        { q: "Posso adicionar nomes de cantores ou músicas específicas?", a: "Sim! Você pode editar ou colar até 500 artistas, músicas ou playlists favoritas." }
      ]
    },
    vi: {
      name: "Vòng Quay Thể Loại Âm Nhạc",
      title: "Vòng Quay Thể Loại Nhạc | Chọn Nhạc Ngẫu Nhiên Miễn Phí",
      description: "Quay vòng quay chọn thể loại âm nhạc miễn phí: Pop, V-Pop, K-Pop, Ballad, Rap, EDM, Rock hay Lo-Fi cho bữa tiệc, tập gym và thử thách karaoke.",
      heroTitle: "Vòng Quay Thể Loại Âm Nhạc",
      heroHighlight: "Chọn Nhạc Ngẫu Nhiên Cho Party & Karaoke",
      heroSubtitle: "Không còn đắn đo chọn nhạc nền — quay ngay để chọn dòng nhạc cho chuyến đi hoặc buổi hát karaoke.",
      quickAnswer: "<strong>Vòng quay thể loại nhạc là gì?</strong> Công cụ chọn ngẫu nhiên Pop, K-Pop, Rap, Rock, EDM, Lo-Fi và nhạc trẻ để khuấy động cuộc vui.",
      items: ["Pop / V-Pop 🎤", "K-Pop ✨", "Rap / Hip-Hop 🎙️", "EDM / Remix 🎧", "Ballad Nhẹ Nhàng 🎹", "Rock 🎸", "Lo-Fi Chill ☕", "Bolero 🎶"],
      presets: {
        party: { label: "Nhạc Tiệc Tùng", items: ["EDM / Remix 🎧", "Pop Sôi Động 🎤", "Rap / Hip-Hop 🎙️", "K-Pop Dance ✨"] }
      },
      faqs: [
        { q: "Có thể tự nhập tên bài hát để quay số karaoke không?", a: "Có, hãy dùng tính năng Dán Hàng Loạt để nhập danh sách bài hát bạn thích." }
      ]
    }
  },

  "country-picker-wheel": {
    pt: {
      name: "Roleta de Países do Mundo",
      title: "Roleta de Países do Mundo | Todos os 195 Países Grátis",
      description: "Gire a Roleta de Países com todos os 195 países do mundo grátis! Filtre por continente, ative a eliminação e sorteie destinos na hora.",
      heroTitle: "Roleta de Países do Mundo",
      heroHighlight: "Sorteador Global dos 195 Países",
      heroSubtitle: "Explore nações de todos os continentes com bandeiras, modo de eliminação para batalhas de mapa e o conjunto completo dos 195 países em português.",
      quickAnswer: "<strong>Como funciona a Roleta de Países do Mundo?</strong> Vem pronta para sortear todos os <strong>195 países do mundo</strong> no botão rápido, filtrar por continente ou usar pesos de 1x a 20x com remoção automática sem repetir.",
      items: ["Brasil 🇧🇷", "Estados Unidos 🇺🇸", "Portugal 🇵🇹", "Espanha 🇪🇸", "França 🇫🇷", "Itália 🇮🇹", "Alemanha 🇩🇪", "Japão 🇯🇵", "Argentina 🇦🇷", "Reino Unido 🇬🇧", "Canadá 🇨🇦", "Coreia do Sul 🇰🇷", "México 🇲🇽", "Austrália 🇦🇺"],
      presets: {
        todos195: { label: "Todos os 195 Países", items: PT_COUNTRIES_195 },
        americas: { label: "Américas", items: ["Brasil 🇧🇷", "Argentina 🇦🇷", "Estados Unidos 🇺🇸", "Canadá 🇨🇦", "México 🇲🇽", "Chile 🇨🇱", "Colômbia 🇨🇴", "Peru 🇵🇪", "Uruguai 🇺🇾"] },
        europa: { label: "Europa", items: ["Portugal 🇵🇹", "Espanha 🇪🇸", "França 🇫🇷", "Itália 🇮🇹", "Alemanha 🇩🇪", "Reino Unido 🇬🇧", "Holanda 🇳🇱", "Suíça 🇨🇭"] },
        asiaAfrica: { label: "Ásia & África", items: ["Japão 🇯🇵", "Coreia do Sul 🇰🇷", "Tailândia 🇹🇭", "Marrocos 🇲🇦", "Egito 🇪🇬", "África do Sul 🇿🇦", "Angola 🇦🇴", "Moçambique 🇲🇿"] }
      },
      faqs: [
        { q: "Posso usar a roleta para jogos de batalha de países (quem domina o mundo)?", a: "Sim! Ative 'Remover Vencedor Após Giro' nas configurações para eliminar os países sorteados um por um e exporte o histórico em CSV." },
        { q: "Todos os 195 países do mundo já vêm prontos?", a: "Sim! Clique no atalho 'Todos os 195 Países' acima da lista — a roleta suporta até 500 itens com salvamento no navegador." }
      ],
      guide: {
        title: "Como usar a Roleta com Todos os 195 Países",
        intro: "Com um clique em 'Todos os 195 Países', a roleta carrega os 193 Estados-membros da ONU mais Palestina e Vaticano com suas bandeiras em português e probabilidade idêntica de 1/195.",
        tips: [
          "Ative 'Remover Vencedor Após Giro' em aulas de geografia ou batalhas de mapa para nunca repetir o mesmo país.",
          "Ajuste a duração entre 2s e 20s nas configurações e personalize pesos de 1x a 20x para sorteios ponderados de viagens.",
          "Exporte o histórico em CSV ao final da atividade ou compartilhe a lista personalizada pelo navegador sem criar conta."
        ]
      }
    },
    vi: {
      name: "Vòng Quay Quốc Gia Thế Giới",
      title: "Vòng Quay Quốc Gia | Chọn Nước Ngẫu Nhiên Online Miễn Phí",
      description: "Quay vòng quay chọn quốc gia trên thế giới miễn phí! Chọn nhanh nước ở Châu Á, Châu Âu, Châu Mỹ để du lịch, học địa lý và đố vui quốc kỳ.",
      heroTitle: "Vòng Quay Quốc Gia Thế Giới",
      heroHighlight: "Chọn Đất Nước Ngẫu Nhiên Theo Châu Lục",
      heroSubtitle: "Lý tưởng cho trò chơi địa lý, thử thách nấu món ăn thế giới và đố vui quốc kỳ trên lớp.",
      quickAnswer: "<strong>Vòng quay quốc gia dùng để làm gì?</strong> Chọn ngẫu nhiên các nước kèm lá cờ theo khu vực Châu Á, Châu Âu, Châu Mỹ và hỗ trợ dán tối đa 500 quốc gia.",
      items: ["Việt Nam 🇻🇳", "Nhật Bản 🇯🇵", "Hàn Quốc 🇰🇷", "Thái Lan 🇹🇭", "Pháp 🇫🇷", "Đức 🇩🇪", "Anh 🇬🇧", "Mỹ 🇺🇸", "Úc 🇦🇺", "Canada 🇨🇦", "Ý 🇮🇹", "Brazil 🇧🇷"],
      presets: {
        asia: { label: "Châu Á", items: ["Việt Nam 🇻🇳", "Nhật Bản 🇯🇵", "Hàn Quốc 🇰🇷", "Thái Lan 🇹🇭", "Singapore 🇸🇬", "Trung Quốc 🇨🇳", "Ấn Độ 🇮🇳"] },
        europe: { label: "Châu Âu", items: ["Pháp 🇫🇷", "Đức 🇩🇪", "Anh 🇬🇧", "Ý 🇮🇹", "Tây Ban Nha 🇪🇸", "Thụy Sĩ 🇨🇭", "Hà Lan 🇳🇱"] }
      },
      faqs: [
        { q: "Có thể dán tất cả gần 200 nước vào vòng quay không?", a: "Có. Công cụ hỗ trợ tới 500 mục cùng lúc bằng nút Dán Hàng Loạt." }
      ]
    },
    pl: {
      name: "Koło Fortuny Kraje Świata",
      title: "Koło Fortuny Kraje Świata | Losowanie Państw Online",
      description: "Zakręć darmowym kołem z państwami świata! Wylosuj kraj z Europy, Ameryk, Azji lub Afryki do quizów geograficznych i planowania podróży.",
      heroTitle: "Koło Fortuny Kraje Świata",
      heroHighlight: "Losowanie Państw i Kierunków Podróży",
      heroSubtitle: "Idealne na lekcje geografii, losowanie reprezentacji na turnieje i kulinarne podróże palcem po mapie.",
      quickAnswer: "<strong>Jak używać koła krajów?</strong> Wybierz Europę, Ameryki lub zestaw globalny i kliknij Zakręć Kołem, aby uczciwie wylosować kraj.",
      items: ["Polska 🇵🇱", "Niemcy 🇩🇪", "Francja 🇫🇷", "Włochy 🇮🇹", "Hiszpania 🇪🇸", "Wielka Brytania 🇬🇧", "USA 🇺🇸", "Japonia 🇯🇵", "Brazylia 🇧🇷", "Kanada 🇨🇦", "Australia 🇦🇺", "Norwegia 🇳🇴"],
      presets: {
        europa: { label: "Europa", items: ["Polska 🇵🇱", "Włochy 🇮🇹", "Hiszpania 🇪🇸", "Francja 🇫🇷", "Niemcy 🇩🇪", "Grecja 🇬🇷", "Portugalia 🇵🇹", "Szwecja 🇸🇪"] },
        swiat: { label: "Świat", items: ["USA 🇺🇸", "Japonia 🇯🇵", "Brazylia 🇧🇷", "Kanada 🇨🇦", "Korea Płd. 🇰🇷", "Australia 🇦🇺", "Meksyk 🇲🇽"] }
      },
      faqs: [
        { q: "Czy mogę wkleić listę wszystkich krajów świata?", a: "Tak! Koło obsługuje do 500 pozycji naraz przez przycisk Wklej Wiele." }
      ]
    },
    zh: {
      name: "全球国家随机大转盘",
      title: "国家随机大转盘 | 全球国家与旅行目的地抽签轮盘",
      description: "免费全球国家随机大转盘：按亚洲、欧洲、美洲、非洲筛选国家与国旗，支持已中奖自动剔除不重复，适合地理课堂、地图挑战与旅行灵感抽选。",
      heroTitle: "全球国家随机大转盘",
      heroHighlight: "世界各国与旅行目的地抽签器",
      heroSubtitle: "内置各大洲热门国家与国旗，支持 1x–20x 权重、2s–20s 旋转时长与中奖自动剔除，适合地理教学与世界美食挑战。",
      quickAnswer: "<strong>如何使用国家随机转盘？</strong> 一键切换亚洲、欧洲、美洲与非洲预设，或批量粘贴最多 500 个国家名称，开启自动剔除即可玩不重复抽签。",
      items: ["中国 🇨🇳", "日本 🇯🇵", "韩国 🇰🇷", "泰国 🇹🇭", "新加坡 🇸🇬", "法国 🇫🇷", "意大利 🇮🇹", "英国 🇬🇧", "美国 🇺🇸", "加拿大 🇨🇦", "巴西 🇧🇷", "澳大利亚 🇦🇺"],
      presets: {
        asia: { label: "亚洲国家", items: ["中国 🇨🇳", "日本 🇯🇵", "韩国 🇰🇷", "泰国 🇹🇭", "新加坡 🇸🇬", "马来西亚 🇲🇾", "越南 🇻🇳", "印度尼西亚 🇮🇩"] },
        europe: { label: "欧洲国家", items: ["法国 🇫🇷", "意大利 🇮🇹", "英国 🇬🇧", "德国 🇩🇪", "西班牙 🇪🇸", "瑞士 🇨🇭", "希腊 🇬🇷", "荷兰 🇳🇱"] },
        americas: { label: "美洲与大洋洲", items: ["美国 🇺🇸", "加拿大 🇨🇦", "巴西 🇧🇷", "墨西哥 🇲🇽", "阿根廷 🇦🇷", "澳大利亚 🇦🇺", "新西兰 🇳🇿"] }
      },
      faqs: [
        { q: "最多能放进多少个国家或地区？", a: "单次转盘支持最多 500 个条目，足以导入全球 195 个主权国家并导出 CSV 记录。" },
        { q: "如何让抽过的国家不再重复出现？", a: "在转盘设置中开启“中奖后自动剔除”，每次转动都会移除已选中的国家。" }
      ],
      guide: {
        title: "全球国家随机转盘的实用玩法",
        intro: "本工具在浏览器本地通过加密级安全随机数生成结果，每个国家扇区概率完全均等，所有清单保存在本地 localStorage，无需注册账号。",
        tips: [
          "地理课堂可将转盘全屏投屏，开启“中奖后自动剔除”让每位同学抽到不重复的研究国家。",
          "配合 1x–20x 权重滑块微调心仪旅行目的地的出现概率，再把旋转时长设在 2s–20s 之间。",
          "使用批量导入快速粘贴全球 195 个国家名称，抽签结束后支持一键导出 CSV 历史记录。"
        ]
      }
    }
  },

  "color-picker-wheel": {
    pt: {
      name: "Roleta de Cores Online",
      title: "Roleta de Cores Online Grátis | Sorteador de Paletas",
      description: "Gire a Roleta de Cores grátis! Sorteie cores básicas, pastel ou neon sem repetir para o desafio dos 3 marcadores, desenho e jogos infantis.",
      heroTitle: "Roleta de Cores Online",
      heroHighlight: "Sorteador Aleatório de Cores & Paletas",
      heroSubtitle: "Perfeita para o desafio dos 3 marcadores, jogos infantis de cores e criação artística com eliminação automática sem cadastro.",
      quickAnswer: "<strong>O que é a Roleta de Cores?</strong> Uma ferramenta gratuita que sorteia cores primárias, arco-íris, pastel e neon com remoção automática sem repetição e pesos de 1x a 20x.",
      items: ["Vermelho ❤️", "Azul 💙", "Amarelo 💛", "Verde 💚", "Roxo 💜", "Laranja 🧡", "Rosa 🩷", "Turquesa 🩵"],
      presets: {
        basicas: { label: "Cores Básicas", items: ["Vermelho ❤️", "Azul 💙", "Amarelo 💛", "Verde 💚", "Laranja 🧡", "Roxo 💜"] },
        pastel: { label: "Tons Pastel", items: ["Rosa Pastel 🌸", "Azul Bebê 🩵", "Menta 🌿", "Lavanda 🪻", "Pêssego 🍑", "Creme 🧈"] },
        neon: { label: "Tons Neon", items: ["Verde Neon ⚡", "Rosa Choque 💖", "Laranja Neon 🔥", "Ciano Elétrico 💎", "Roxo Ultravioleta 🎆"] }
      },
      faqs: [
        { q: "Como fazer o desafio das 3 cores no desenho?", a: "Ative 'Remover Vencedor Após Giro' e gire 3 vezes seguidas para definir a paleta obrigatória!" }
      ]
    },
    vi: {
      name: "Vòng Quay Màu Sắc Online",
      title: "Vòng Quay Màu Sắc | Chọn Màu Ngẫu Nhiên Miễn Phí",
      description: "Quay vòng quay màu sắc online miễn phí cho bé học màu, thử thách vẽ 3 màu và trò chơi tập thể. Hỗ trợ màu cơ bản và màu pastel không cần đăng nhập.",
      heroTitle: "Vòng Quay Màu Sắc",
      heroHighlight: "Chọn Màu Ngẫu Nhiên Cho Bé & Vẽ Tranh",
      heroSubtitle: "Dễ dùng trên điện thoại và máy tính cho thử thách chọn màu, dạy trẻ em và trò chơi sáng tạo.",
      quickAnswer: "<strong>Vòng quay màu sắc là gì?</strong> Công cụ miễn phí chọn ngẫu nhiên màu Đỏ, Xanh dương, Vàng, Tím, Hồng, Cam kèm chế độ loại bỏ màu đã quay.",
      items: ["Đỏ ❤️", "Xanh Dương 💙", "Vàng 💛", "Xanh Lá 💚", "Tím 💜", "Cam 🧡", "Hồng 🩷", "Xanh Ngọc 🩵"],
      presets: {
        basic: { label: "Màu Cơ Bản Cho Bé", items: ["Đỏ ❤️", "Xanh Dương 💙", "Vàng 💛", "Xanh Lá 💚", "Cam 🧡", "Tím 💜"] }
      },
      faqs: [
        { q: "Có thể chơi thử thách vẽ 3 màu ngẫu nhiên không?", a: "Có! Bật 'Xóa Người Thắng Sau Khi Quay' và quay 3 lần để lấy bộ 3 màu bắt buộc." }
      ]
    },
    zh: {
      name: "颜色随机大转盘",
      title: "颜色随机大转盘 | 免费在线配色与三色绘画挑战轮盘",
      description: "免费颜色随机大转盘：内置基础色、莫兰迪粉彩与霓虹色预设，开启自动剔除即可玩三色绘画挑战，本地浏览器运行免登录无广告弹窗。",
      heroTitle: "颜色随机大转盘",
      heroHighlight: "随机色彩挑选与三色绘画挑战轮盘",
      heroSubtitle: "轻松开启三支马克笔挑战、儿童色彩启蒙或设计灵感抽选，无需注册且支持不重复剔除。",
      quickAnswer: "<strong>颜色转盘怎么玩？</strong> 一键切换彩虹基础色、粉彩色或霓虹色预设，支持 1x–20x 权重与中奖后自动剔除，适合画师创作挑战与课堂游戏。",
      items: ["红色 ❤️", "蓝色 💙", "黄色 💛", "绿色 💚", "紫色 💜", "橙色 🧡", "粉色 🩷", "青色 🩵"],
      presets: {
        basic: { label: "基础彩虹色", items: ["红色 ❤️", "蓝色 💙", "黄色 💛", "绿色 💚", "橙色 🧡", "紫色 💜"] },
        pastel: { label: "粉彩柔和色", items: ["樱花粉 🌸", "婴儿蓝 🩵", "薄荷绿 🌿", "薰衣草 🪻", "蜜桃橙 🍑", "奶油黄 🧈"] },
        neon: { label: "荧光霓虹色", items: ["荧光绿 ⚡", "芭比粉 💖", "荧光橙 🔥", "电光青 💎", "紫外紫 🎆"] }
      },
      faqs: [
        { q: "如何玩短视频热门的三色绘画挑战？", a: "在设置中开启“中奖后自动剔除”，连续点击旋转三次即可得到互不重复的三色必用色盘。" },
        { q: "可以自定义输入十六进制颜色名称或物品吗？", a: "可以，支持自由编辑并最多添加 500 个颜色或创意主题，同时保存到浏览器本地。" }
      ],
      guide: {
        title: "用颜色随机大转盘玩转创作挑战与课堂互动",
        intro: "颜色转盘用可视化的公平抽签打破配色僵局，无需下载软件，打开网页即可在电脑或手机上使用。",
        tips: [
          "开启自动剔除连转 3 次，为插画或手账挑战锁定不重复的限定三色。",
          "利用 + / − 按钮调整每种颜色 1x–20x 的出现权重，控制主色调的抽中概率。",
          "在幼儿园或语言课堂上全屏投影，带领孩子识别不同颜色与对应物品。"
        ]
      }
    }
  },

  "letter-picker-wheel": {
    pt: {
      name: "Roleta de Letras do Alfabeto",
      title: "Roleta de Letras do Alfabeto A–Z | Jogue Stop Online",
      description: "Gire a Roleta de Letras de A a Z grátis! Perfeita para Adedonha (Stop!), alfabetização e jogos de palavras com eliminação sem repetir letras.",
      heroTitle: "Roleta de Letras (A–Z)",
      heroHighlight: "Sorteador do Alfabeto para Stop & Aulas",
      heroSubtitle: "Chega de contar dedos no Stop / Adedonha — gire as 26 letras, só vogais ou consoantes sem repetição no navegador.",
      quickAnswer: "<strong>O que é a Roleta de Letras do Alfabeto?</strong> Um sorteador online gratuito das 26 letras de A a Z (chance exata de 1/26) com modelos para Adedonha/Stop (sem K, W, Y, X) e Vogais.",
      items: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
      presets: {
        az: { label: "Alfabeto Completo A–Z", items: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] },
        stop: { label: "Modo Stop / Adedonha", items: ["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","R","S","T","U","V"] },
        vogais: { label: "Somente Vogais", items: ["A","E","I","O","U"] }
      },
      faqs: [
        { q: "Como usar a Roleta de Letras para jogar Stop / Adedonha sem repetir?", a: "Selecione o modelo 'Modo Stop / Adedonha' e deixe 'Remover Vencedor Após Giro' ativado para nunca repetir a mesma letra na partida!" }
      ]
    },
    vi: {
      name: "Vòng Quay Chữ Cái A–Z",
      title: "Vòng Quay Chữ Cái A–Z Online | Chọn Chữ Ngẫu Nhiên Miễn Phí",
      description: "Quay vòng quay bảng chữ cái A đến Z miễn phí! Dùng cho trò chơi nối chữ, dạy bảng chữ cái cho bé và lọc nguyên âm/phụ âm không trùng lặp.",
      heroTitle: "Vòng Quay Chữ Cái A–Z",
      heroHighlight: "Chọn Chữ Cái Ngẫu Nhiên Cho Lớp Học",
      heroSubtitle: "Hỗ trợ đủ 26 chữ cái tiếng Anh, bộ nguyên âm A-E-I-O-U và tự động xóa chữ đã quay.",
      quickAnswer: "<strong>Vòng quay chữ cái có tính năng gì?</strong> Chọn ngẫu nhiên chữ cái từ A tới Z (tỷ lệ 1/26 công bằng) phục vụ dạy học và trò chơi từ vựng.",
      items: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
      presets: {
        vowels: { label: "Nguyên Âm", items: ["A","E","I","O","U"] }
      },
      faqs: [
        { q: "Có thể thêm chữ cái có dấu tiếng Việt vào vòng quay không?", a: "Có, bạn hoàn toàn có thể tự nhập Ă, Â, Đ, Ê, Ô, Ơ, Ư vào danh sách." }
      ]
    }
  },

  "truth-or-dare-wheel": {
    pt: {
      name: "Roleta Verdade ou Desafio",
      title: "Roleta Verdade ou Desafio Online | Jogo de Festa Grátis",
      description: "Jogue Verdade ou Desafio online grátis na roleta! Modo clássico 50/50, perguntas em família e desafios de festa com giro justo no navegador.",
      heroTitle: "Roleta Verdade ou Desafio",
      heroHighlight: "Jogo de Festa & Perguntas Online Grátis",
      heroSubtitle: "Gire com amigos, em festas ou em família — sem repetir desafios e sem precisar baixar aplicativo.",
      quickAnswer: "<strong>Como jogar Verdade ou Desafio online?</strong> Escolha entre o modo Clássico 50/50, Edição Festa ou Família Limpa e gire para sortear Verdade, Desafio ou Desafio Duplo.",
      items: ["Verdade 🤫", "Desafio 😈", "Verdade 🤫", "Desafio 😈", "Desafio Duplo 🔥", "Passe Livre 🌟"],
      presets: {
        classico: { label: "Clássico 50/50", items: ["Verdade 🤫", "Desafio 😈", "Verdade 🤫", "Desafio 😈"] },
        familia: { label: "Família & Leve", items: ["Imitar um animal 🦁", "Contar um segredo engraçado 🤭", "Fazer 10 polichinelos ⚡", "Contar uma piada 🤡", "Elogiar alguém 💖"] }
      },
      faqs: [
        { q: "Posso escrever minhas próprias verdades e desafios na roleta?", a: "Sim! Apague os modelos e cole até 500 perguntas ou desafios personalizados da sua turma." }
      ]
    },
    vi: {
      name: "Vòng Quay Thật Hay Thách",
      title: "Vòng Quay Thật Hay Thách Online | Trò Chơi Tiệc Tùng Miễn Phí",
      description: "Chơi Thật hay Thách (Truth or Dare) miễn phí trên điện thoại & máy tính! Có sẵn chế độ 50/50 cổ điển, hội bạn thân và chế độ gia đình lành mạnh.",
      heroTitle: "Vòng Quay Thật Hay Thách",
      heroHighlight: "Trò Chơi Hội Bạn Thân & Tiệc Tùng",
      heroSubtitle: "Quay công bằng Thật (Truth), Thách (Dare), Thử Thách Kép hoặc Thẻ Miễn Phạt mà không ai trốn lượt được.",
      quickAnswer: "<strong>Vòng quay Thật hay Thách có gì?</strong> Chế độ 50/50 kinh điển, gói thử thách vui nhộn cho tiệc tùng và gói an toàn cho gia đình hoặc lớp học.",
      items: ["Nói Thật 🤫", "Thử Thách 😈", "Nói Thật 🤫", "Thử Thách 😈", "Thách Kép 🔥", "Miễn Phạt 🌟"],
      presets: {
        classic: { label: "Cổ Điển 50/50", items: ["Nói Thật 🤫", "Thử Thách 😈", "Nói Thật 🤫", "Thử Thách 😈"] },
        clean: { label: "Vui Nhộn & Lành Mạnh", items: ["Kể 1 kỷ niệm vui 😄", "Bắt chước tiếng động vật 🦁", "Hát 1 câu ngẫu nhiên 🎤", "Khen bạn bên cạnh 💖"] }
      },
      faqs: [
        { q: "Tôi có thể tự nhập câu hỏi Thật và Thách riêng không?", a: "Có, bạn có thể xóa mẫu và thêm tối đa 500 câu hỏi riêng của nhóm." }
      ]
    }
  },

  "number-picker-wheel": {
    pt: {
      name: "Roleta de Números Online",
      title: "Roleta de Números Online Grátis | Sorteador 1 a 100 e 250",
      description: "Gire a Roleta de Números grátis! Atalhos de 1 a 10, Mega-Sena (1–60), 1 a 100 e 1 a 250 com pesos 1x–20x, giro de 2s–20s e exportação CSV.",
      heroTitle: "Roleta de Números Online",
      heroHighlight: "Sorteador 1 a 10, Mega-Sena (1–60), 1 a 100 e 250",
      heroSubtitle: "Realize rifas digitais, bingos e sorteios ao vivo com pesos 1x–20x, duração de 2s a 20s e remoção automática de números sorteados.",
      quickAnswer: "<strong>Como funciona a Roleta de Números?</strong> Traz atalhos de <strong>1 a 10</strong>, <strong>Mega-Sena / Rifas (1–60)</strong>, <strong>1 a 100</strong> e <strong>1 a 250</strong>, aceita até 500 números e elimina repetidos automaticamente.",
      items: ["1","2","3","4","5","6","7","8","9","10","11","12"],
      presets: {
        n1_10: { label: "1 a 10", items: PT_NUM_1_10 },
        n1_60: { label: "1 a 60 (Mega-Sena / Rifas)", items: PT_NUM_1_60 },
        n1_100: { label: "1 a 100", items: PT_NUM_1_100 },
        n1_250: { label: "1 a 250", items: PT_NUM_1_250 }
      },
      faqs: [
        { q: "Como sortear rifas de 1 a 100 ou 1 a 250 sem repetir números?", a: "Clique em '1 a 100' ou '1 a 250' acima da lista, ajuste a duração (2s–20s) e ative 'Remover Vencedor Após Giro' nas configurações." },
        { q: "Posso exportar o resultado dos números sorteados?", a: "Sim, clique em 'Exportar CSV' no painel Histórico de Giros para baixar todos os números sorteados com horário." }
      ]
    },
    vi: {
      name: "Vòng Quay Chọn Số Ngẫu Nhiên",
      title: "Vòng Quay Chọn Số Ngẫu Nhiên | Quay Số 1–100 Miễn Phí",
      description: "Quay vòng quay chọn số ngẫu nhiên miễn phí từ 1 đến 10, 1 đến 60 hoặc 1 đến 100 để gọi số lô tô, bốc thăm vé số lớp học và chọn số thứ tự.",
      heroTitle: "Vòng Quay Chọn Số Ngẫu Nhiên",
      heroHighlight: "Quay Số 1–10, 1–60 & 1–100 Công Bằng",
      heroSubtitle: "Hoạt động hoàn toàn minh bạch với thuật toán mật mã học, hỗ trợ loại bỏ số đã quay.",
      quickAnswer: "<strong>Vòng quay chọn số làm được gì?</strong> Hỗ trợ chọn số nhanh 1–10, 1–60, 1–100 hoặc dán dãy số tùy chỉnh tối đa 500 số ngay trên trình duyệt.",
      items: ["1","2","3","4","5","6","7","8","9","10","11","12"],
      presets: {
        v1_10: { label: "1 đến 10", items: PT_NUM_1_10 },
        v1_60: { label: "1 đến 60", items: PT_NUM_1_60 },
        v1_100: { label: "1 đến 100", items: PT_NUM_1_100 }
      },
      faqs: [
        { q: "Có thể quay số từ 1 đến 100 không trùng lặp không?", a: "Có, chọn mẫu 1 đến 100 và bật 'Xóa Người Thắng Sau Khi Quay' trong phần Cài đặt." }
      ]
    }
  },

  "day-picker-wheel": {
    pt: {
      name: "Roleta dos Dias da Semana",
      title: "Roleta dos Dias da Semana | Sortear Segunda a Domingo Grátis",
      description: "Gire a Roleta dos Dias da Semana grátis para sortear Segunda, Terça, Quarta, Quinta, Sexta, Sábado ou Domingo para escalas, tarefas e treinos.",
      heroTitle: "Roleta dos Dias da Semana",
      heroHighlight: "Sorteador de Segunda a Domingo",
      heroSubtitle: "Organize dias de faxina, folgas, encontros ou treinos semanais em segundos sem discussões.",
      quickAnswer: "<strong>Para que serve a Roleta dos Dias da Semana?</strong> Sorteia igualmente entre os 7 dias da semana (14,29% cada) ou apenas dias úteis (Segunda a Sexta).",
      items: ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"],
      presets: {
        semana: { label: "Semana Completa (7)", items: ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"] },
        uteis: { label: "Dias Úteis (Seg–Sex)", items: ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"] }
      },
      faqs: [
        { q: "Posso tirar os finais de semana da roleta?", a: "Sim, clique no atalho 'Dias Úteis (Seg–Sex)' logo acima da lista." }
      ]
    }
  },

  "emoji-picker-wheel": {
    pt: {
      name: "Roleta de Emojis",
      title: "Roleta de Emojis | Sorteador de Emoji Aleatório Online Grátis",
      description: "Gire a Roleta de Emojis grátis! Sorteie emojis aleatórios para histórias criativas, mímica de emojis, desafios no TikTok/YouTube e nomes divertidos.",
      heroTitle: "Roleta de Emojis",
      heroHighlight: "Sorteador Criativo de Emojis Online",
      heroSubtitle: "Gire 3 emojis para inventar histórias, desafios de desenho ou reações ao vivo com sua audiência.",
      quickAnswer: "<strong>O que é a Roleta de Emojis?</strong> Um sorteador visual gratuito para jogos de adivinhar filmes por emoji, desafios artísticos e enquetes divertidas.",
      items: ["😂", "🔥", "🚀", "🌈", "🍕", "🦄", "👑", "🎸", "👾", "💎", "🌮", "⚡"],
      presets: {
        reacoes: { label: "Reações & Emoções", items: ["😂", "😍", "🤯", "🥳", "😎", "🤔", "😱", "🫶"] },
        objetos: { label: "Objetos & Aventura", items: ["🚀", "🔑", "🧭", "🎸", "📸", "🍕", "👑", "🛸"] }
      },
      faqs: [
        { q: "Posso colar emojis personalizados do WhatsApp ou iPhone?", a: "Sim, qualquer emoji Unicode funciona perfeitamente na roleta." }
      ]
    }
  },

  "zodiac-picker-wheel": {
    pt: {
      name: "Roda do Zodíaco (12 Signos)",
      title: "Roda do Zodíaco | Roleta dos 12 Signos Online Grátis",
      description: "Gire a Roda do Zodíaco grátis com todos os 12 signos astrológicos (Áries a Peixes). Filtre por Fogo, Terra, Ar ou Água para jogos e personagens.",
      heroTitle: "Roda do Zodíaco — 12 Signos",
      heroHighlight: "Sorteador Astrológico Online Grátis",
      heroSubtitle: "Todos os 12 signos com chance exata de 8,33%, mais filtros pelos 4 elementos (Fogo, Terra, Ar e Água).",
      quickAnswer: "<strong>O que é a Roda do Zodíaco?</strong> Uma roleta interativa com os 12 signos do zodíaco e filtros por elemento para brincadeiras, criação de personagens e quebra-gelos.",
      items: ["Áries ♈", "Touro ♉", "Gêmeos ♊", "Câncer ♋", "Leão ♌", "Virgem ♍", "Libra ♎", "Escorpião ♏", "Sagitário ♐", "Capricórnio ♑", "Aquário ♒", "Peixes ♓"],
      presets: {
        todos: { label: "Todos os 12 Signos", items: ["Áries ♈", "Touro ♉", "Gêmeos ♊", "Câncer ♋", "Leão ♌", "Virgem ♍", "Libra ♎", "Escorpião ♏", "Sagitário ♐", "Capricórnio ♑", "Aquário ♒", "Peixes ♓"] },
        fogo: { label: "Signos de Fogo", items: ["Áries ♈", "Leão ♌", "Sagitário ♐"] },
        agua: { label: "Signos de Água", items: ["Câncer ♋", "Escorpião ♏", "Peixes ♓"] }
      },
      faqs: [
        { q: "Os 12 signos têm probabilidade igual?", a: "Sim, cada signo ocupa 30 graus da roleta (1/12 = 8,33%)." }
      ]
    }
  },

  "team-picker-wheel": {
    pt: {
      name: "Roleta de Times e Equipes",
      title: "Roleta de Times | Sorteador de Equipes e Grupos Online Grátis",
      description: "Divida jogadores, alunos ou amigos em equipes equilibradas com a Roleta de Times grátis! Use eliminação sem repetição para peladas, escola e trabalho.",
      heroTitle: "Roleta de Times e Equipes",
      heroHighlight: "Sorteador Justo de Grupos e Equipes",
      heroSubtitle: "Crie times sem panelinhas no futebol, educação física, gincanas ou projetos escolares.",
      quickAnswer: "<strong>Como sortear 2 ou mais times na roleta?</strong> Cole todos os nomes, ative 'Remover Vencedor Após Giro' e distribua cada sorteado alternando entre Time A e Time B.",
      items: ["Gabriel", "Lucas", "Mariana", "Beatriz", "Rafael", "Juliana", "Mateus", "Camila", "Bruno", "Larissa"],
      presets: {
        captains: { label: "4 Equipes", items: ["Time Vermelho 🔴", "Time Azul 🔵", "Time Verde 🟢", "Time Amarelo 🟡"] }
      },
      faqs: [
        { q: "Posso colar uma lista inteira de jogadores do WhatsApp?", a: "Sim, clique em 'Colar Vários Nomes' para importar até 500 participantes de uma vez." }
      ]
    },
    vi: {
      name: "Vòng Quay Chia Nhóm & Chia Đội",
      title: "Vòng Quay Chia Nhóm | Chia Đội Ngẫu Nhiên Online Miễn Phí",
      description: "Chia nhóm thảo luận, chia đội đá bóng hay chơi game team building công bằng với Vòng Quay Chia Nhóm miễn phí. Dán nhanh tối đa 500 tên.",
      heroTitle: "Vòng Quay Chia Nhóm & Chia Đội",
      heroHighlight: "Công Cụ Chia Đội Công Bằng Trực Tuyến",
      heroSubtitle: "Dán tên lớp hoặc nhân viên và bật chế độ loại người thắng để chia đều đội nhóm trong vài giây.",
      quickAnswer: "<strong>Cách chia đội nhanh trên vòng quay?</strong> Dán danh sách thành viên, bật 'Xóa Người Thắng Sau Khi Quay' và chia luân phiên từng người vào Đội A, Đội B.",
      items: ["Minh", "Hương", "Tuấn", "Linh", "Khoa", "Vy", "Nam", "Thảo", "Đạt", "Ngọc"],
      presets: {
        teams4: { label: "4 Đội Chơi", items: ["Đội Đỏ 🔴", "Đội Xanh Dương 🔵", "Đội Xanh Lá 🟢", "Đội Vàng 🟡"] }
      },
      faqs: [
        { q: "Có thể dán danh sách lớp từ Excel để chia nhóm không?", a: "Có, công cụ hỗ trợ dán hàng loạt tới 500 tên học sinh." }
      ]
    }
  },

  "sport-picker-wheel": {
    pt: {
      name: "Roleta de Esportes",
      title: "Roleta de Esportes | Sortear Esporte Online Grátis",
      description: "Gire a Roleta de Esportes grátis! Sorteie Futebol, Vôlei, Basquete, Tênis, Natação ou Beach Tennis para aulas de educação física e fins de semana.",
      heroTitle: "Roleta de Esportes",
      heroHighlight: "Sorteador de Modalidades Esportivas",
      heroSubtitle: "Decida qual esporte jogar com os amigos ou na aula de educação física em apenas um giro.",
      quickAnswer: "<strong>Para que serve a Roleta de Esportes?</strong> Ajuda professores de educação física e grupos de amigos a sortear modalidades com raquete, bola coletiva ou esportes ao ar livre.",
      items: ["Futebol ⚽", "Vôlei 🏐", "Basquete 🏀", "Beach Tennis 🎾", "Futsal 🥅", "Natação 🏊", "Corrida 🏃", "Ciclismo 🚴"],
      presets: {
        coletivos: { label: "Esportes Coletivos", items: ["Futebol ⚽", "Vôlei 🏐", "Basquete 🏀", "Futsal 🥅", "Handebol 🤾", "Queimada 🔥"] }
      },
      faqs: [
        { q: "Posso adicionar esportes específicos como Padel ou Jiu-Jitsu?", a: "Sim, digite qualquer esporte em 'Adicionar' para incluir na hora." }
      ]
    },
    vi: {
      name: "Vòng Quay Môn Thể Thao",
      title: "Vòng Quay Thể Thao | Chọn Môn Thể Thao Ngẫu Nhiên Miễn Phí",
      description: "Quay vòng quay chọn môn thể thao ngẫu nhiên miễn phí: Bóng đá, Cầu lông, Bóng rổ, Bóng chuyền, Pickleball hay Chạy bộ cho tiết thể dục.",
      heroTitle: "Vòng Quay Môn Thể Thao",
      heroHighlight: "Chọn Hoạt Động Thể Thao Cuối Tuần",
      heroSubtitle: "Phù hợp cho giờ thể dục học đường hoặc chọn môn vận động cho nhóm bạn.",
      quickAnswer: "<strong>Vòng quay thể thao gồm những gì?</strong> Chọn sẵn Bóng đá, Cầu lông, Bóng rổ, Bóng chuyền, Pickleball và Bơi lội.",
      items: ["Bóng Đá ⚽", "Cầu Lông 🏸", "Bóng Rổ 🏀", "Bóng Chuyền 🏐", "Pickleball 🎾", "Chạy Bộ 🏃", "Bơi Lội 🏊", "Đạp Xe 🚴"],
      presets: {
        team: { label: "Thể Thao Đồng Đội", items: ["Bóng Đá ⚽", "Bóng Rổ 🏀", "Bóng Chuyền 🏐", "Cầu Lông Đôi 🏸"] }
      },
      faqs: [
        { q: "Có thể chỉnh sửa danh sách môn thể thao theo sân bãi thực tế không?", a: "Có, xóa hoặc thêm môn mới bất kỳ lúc nào ngay trên trình duyệt." }
      ]
    }
  },

  "coin-flip-wheel": {
    pt: {
      name: "Roleta Cara ou Coroa",
      title: "Roleta Cara ou Coroa | Jogar Moeda Virtual 50/50 Online Grátis",
      description: "Sem moeda no bolso? Gire a Roleta Cara ou Coroa grátis com probabilidade exata de 50/50 para desempatar partidas, jogos e decisões rápidas.",
      heroTitle: "Roleta Cara ou Coroa",
      heroHighlight: "Moeda Virtual Online 50/50 Justa",
      heroSubtitle: "Sorteio binário 50% Cara e 50% Coroa com histórico de jogadas e criptografia no navegador.",
      quickAnswer: "<strong>Como funciona o Cara ou Coroa online?</strong> Cara e Coroa dividem exatamente metade da roleta (50/50) com seleção aleatória criptográfica e registro de resultados.",
      items: ["Cara 🪙", "Coroa 👑", "Cara 🪙", "Coroa 👑"],
      presets: {
        moeda: { label: "Moeda 50/50", items: ["Cara 🪙", "Coroa 👑"] }
      },
      faqs: [
        { q: "A moeda virtual é realmente 50% para cada lado?", a: "Sim! Cara e Coroa têm exatamente 50% de chance matemática." }
      ]
    },
    vi: {
      name: "Vòng Quay Tung Đồng Xu 50/50",
      title: "Tung Đồng Xu Online | Vòng Quay Sấp Ngửa 50/50 Miễn Phí",
      description: "Quay tung đồng xu Sấp hoặc Ngửa online miễn phí với tỷ lệ chuẩn 50/50 cho thể thao, phân xử hòa và quyết định nhanh không cần đồng xu thật.",
      heroTitle: "Vòng Quay Tung Đồng Xu (Sấp / Ngửa)",
      heroHighlight: "Xác Suất Chuẩn 50/50 Trực Tuyến",
      heroSubtitle: "Phân định Sấp (Mặt hình) hoặc Ngửa (Mặt chữ) công bằng trong 2 giây.",
      quickAnswer: "<strong>Tung đồng xu online có công bằng 50/50 không?</strong> Có, Sấp và Ngửa chiếm đúng 50% mỗi bên và được quay bằng Web Cryptography.",
      items: ["Mặt Sấp 🪙", "Mặt Ngửa 👑", "Mặt Sấp 🪙", "Mặt Ngửa 👑"],
      presets: {
        coin: { label: "Sấp / Ngửa 50/50", items: ["Mặt Sấp 🪙", "Mặt Ngửa 👑"] }
      },
      faqs: [
        { q: "Có thể lưu lại lịch sử số lần tung Sấp và Ngửa không?", a: "Có, bảng Thống Kê và Lịch Sử Quay ghi lại toàn bộ số lượt trúng." }
      ]
    }
  },

  "prize-wheel": {
    pt: {
      name: "Roleta de Prêmios Online",
      title: "Roleta de Prêmios Grátis | Roleta de Descontos & Brindes",
      description: "Crie sua Roleta de Prêmios online grátis para lojas, feiras, eventos e lives! Ajuste pesos de probabilidade de 1x a 20x e personalize as fatias.",
      heroTitle: "Roleta de Prêmios Online",
      heroHighlight: "Sorteador Personalizável com Pesos 1x–20x",
      heroSubtitle: "Ideal para estandes, promoções de loja e recompensas em aula com chances ajustáveis por prêmio.",
      quickAnswer: "<strong>Como configurar pesos na Roleta de Prêmios?</strong> Use os botões + e − ao lado de cada prêmio para dar mais chance a brindes simples (10x) e menos chance ao prêmio principal (1x).",
      items: ["Prêmio Principal 🏆", "20% de Desconto 🏷️", "Brinde Especial 🎁", "Frete Grátis 🚚", "Vale-Presente 💳", "Gire Novamente 🔄"],
      presets: {
        loja: { label: "Promoção de Loja", items: ["50% OFF 🏆", "20% OFF 🔥", "10% OFF 🏷️", "Frete Grátis 🚚", "Brinde Surpresa 🎁"] }
      },
      faqs: [
        { q: "Posso controlar as chances de sair o prêmio máximo?", a: "Sim! Clique em '+' para aumentar o peso dos prêmios menores e deixe o grande prêmio com peso 1x." }
      ]
    }
  },

  "raffle-wheel": {
    zh: {
      name: "在线抽奖转盘生成器",
      title: "在线抽奖转盘生成器 | 免费活动抽奖与奖品轮盘",
      description: "免费在线抽奖转盘生成器：批量粘贴最多500名参与者或抽奖编号，支持权重调节、中奖后自动剔除及CSV导出，适合直播与年会活动。",
      heroTitle: "在线抽奖转盘生成器",
      heroHighlight: "透明公平活动抽奖大转盘",
      heroSubtitle: "一键批量导入名单或奖券编号，全屏开启彩带特效与密码学随机抽取。",
      quickAnswer: "<strong>什么是抽奖转盘生成器？</strong> 支持多达 500 个名单与 1x–20x 权重设置的免费浏览器抽奖工具，支持不重复连抽与 CSV 导出存档。",
      items: ["一等奖 🏆", "二等奖 🥈", "三等奖 🥉", "幸运红包 🧧", "精美礼品 🎁", "神秘盲盒 📦"],
      presets: {
        prize: { label: "活动抽奖预设", items: ["特等奖 👑", "一等奖 🏆", "二等奖 🥈", "三等奖 🥉", "幸运奖 🍀"] }
      },
      faqs: [
        { q: "最多支持多少位参与者同时抽奖？", a: "单次转盘支持最多 500 名参与者或抽奖号码批量导入。" }
      ]
    }
  },

  "classroom-name-picker": {
    zh: {
      name: "课堂随机点名转盘",
      title: "课堂随机点名转盘 | 免费教师点名器在线网页",
      description: "免费教师课堂随机点名转盘：从Excel批量导入班级名单，支持全屏投影与已点学生自动剔除不重复，本地运行不上传学生隐私。",
      heroTitle: "课堂随机点名转盘",
      heroHighlight: "教师课堂随机点名器",
      heroSubtitle: "粘贴全班姓名至多500人，保护学生隐私、全屏清晰投影，杜绝重复抽查。",
      quickAnswer: "<strong>为什么适合课堂点名？</strong> 名单全部在本地浏览器内运行，不上传服务器；开启“中奖后自动剔除”可让每位同学轮流回答一遍。",
      items: ["张浩", "李雨晴", "王梓轩", "陈诗涵", "刘子墨", "杨一诺", "赵宇航", "黄佳琪"],
      presets: {
        classList: { label: "示范班级名单", items: ["张浩", "李雨晴", "王梓轩", "陈诗涵", "刘子墨", "杨一诺"] }
      },
      faqs: [
        { q: "可以保存多个班级的点名转盘吗？", a: "可以！使用“保存当前转盘”可分别存下不同班级的名册以便快速切换。" }
      ]
    }
  },

  "randomizer-number-1-100": {
    pt: {
      name: "Roleta de Números 1 a 100",
      title: "Roleta de Números 1 a 100 | Sorteador Online Grátis",
      description: "Sorteie números de 1 a 100 grátis na roleta! Ideal para rifas digitais, bingos e sorteios ao vivo com eliminação automática e CSV.",
      heroTitle: "Roleta de Números 1 a 100",
      heroHighlight: "Sorteador Instantâneo de 1 até 100",
      heroSubtitle: "Todos os 100 números já vêm prontos na roleta — gire em 2s a 20s com Web Cryptography e remova números sorteados sem repetir.",
      quickAnswer: "<strong>Como funciona a Roleta 1 a 100?</strong> Já inicia carregada com todos os números de 1 a 100 (chance exata de 1% por número), pesos opcionais de 1x a 20x e histórico exportável em CSV.",
      items: PT_NUM_1_100,
      presets: {
        n1_100: { label: "Todos 1 a 100", items: PT_NUM_1_100 },
        n1_60: { label: "1 a 60 (Mega-Sena / Rifas)", items: PT_NUM_1_60 },
        n1_10: { label: "1 a 10 Rápido", items: PT_NUM_1_10 }
      },
      faqs: [
        { q: "Qual a chance de cada número sair na roleta 1 a 100?", a: "Com todos os pesos em 1x, cada número de 1 a 100 tem exatamente 1/100 (1%) de probabilidade via Web Cryptography." },
        { q: "Como evitar que o mesmo número saia duas vezes em rifas?", a: "Ative 'Remover Vencedor Após Giro' antes de começar para que cada bilhete sorteado saia da lista automaticamente." }
      ],
      guide: {
        title: "Rifas digitais, chamadas escolares e bingos de 1 a 100",
        intro: "Ter os 100 números carregados logo ao abrir a página economiza tempo em lives de rifas beneficentes, sorteios escolares e jogos de tabuleiro sem precisar digitar bilhete por bilhete.",
        tips: [
          "Deixe 'Remover Vencedor Após Giro' ligado ao sortear múltiplos prêmios de uma mesma cartela de 100 números.",
          "Ajuste a velocidade do giro entre 2 segundos (chamadas rápidas) e 20 segundos (suspense no prêmio principal).",
          "Baixe a lista de vencedores em CSV pelo Histórico de Giros para prestar contas aos participantes."
        ]
      }
    },
    zh: {
      name: "1到100随机数大转盘",
      title: "1到100随机数大转盘 | 在线免费数字抽奖与点号轮盘",
      description: "免费1到100随机数转盘：支持1–10、1–60与全量1–100数字一键加载，已抽号码自动剔除不重复，适合课堂学号抽查与活动抽奖。",
      heroTitle: "1到100随机数大转盘",
      heroHighlight: "全量 1–100 号码公平抽签器",
      heroSubtitle: "打开页面即载入 1 至 100 全部分区，支持 2s–20s 旋转调节、1x–20x 权重与中奖自动剔除，本地运行保护隐私。",
      quickAnswer: "<strong>如何使用 1 到 100 转盘？</strong> 默认均匀切分 100 个等概率数字扇区（每号 1%），支持不重复连续抽奖、CSV 导出以及 1–60 / 1–10 快速切换。",
      items: PT_NUM_1_100,
      presets: {
        n1_100: { label: "全部 1–100", items: PT_NUM_1_100 },
        n1_60: { label: "1–60 号码", items: PT_NUM_1_60 },
        n1_10: { label: "1–10 快速号", items: PT_NUM_1_10 }
      },
      faqs: [
        { q: "1 到 100 每个数字被抽中的概率相同吗？", a: "是的。所有数字默认权重为 1x 时，系统通过浏览器密码学随机算法保证每个数字概率精确相等（1/100）。" },
        { q: "连续抽多个中奖号码如何避免重复？", a: "开启设置中的“中奖后自动剔除”，每次抽出的数字都会立即移除，随后可一键导出 CSV 中奖清单。" }
      ],
      guide: {
        title: "学号抽查、号码抽奖与 1–100 宾果的高效用法",
        intro: "开箱即用的 100 个数字分区让你省去手动建表时间，无论是班主任按学号点名，还是活动现场按门票编号开奖都清晰直观。",
        tips: [
          "多轮开奖前先开启“中奖后自动剔除”，保证同一个数字不会被重复抽出。",
          "通过时长滑块在 2s（课堂快问快答）与 20s（大奖悬念倒数）之间自由切换旋转速度。",
          "使用网页分享链接将当前号码配置保留在浏览器本地，下次打开无需重新编辑。"
        ]
      }
    }
  }
};
