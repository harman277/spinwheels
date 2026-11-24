const MORE20_LANGUAGES = {
  tr: { code: "tr", name: "Türkçe", flag: "🇹🇷", locale: "tr_TR", path: "/tr", label: "Türkçe" },
  ru: { code: "ru", name: "Русский", flag: "🇷🇺", locale: "ru_RU", path: "/ru", label: "Русский" },
  ar: { code: "ar", name: "العربية", flag: "🇸🇦", locale: "ar_SA", path: "/ar", label: "العربية" },
  hi: { code: "hi", name: "हिन्दी", flag: "🇮🇳", locale: "hi_IN", path: "/hi", label: "हिन्दी" },
  id: { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩", locale: "id_ID", path: "/id", label: "Bahasa Indonesia" },
  th: { code: "th", name: "ไทย", flag: "🇹🇭", locale: "th_TH", path: "/th", label: "ไทย" },
  cs: { code: "cs", name: "Čeština", flag: "🇨🇿", locale: "cs_CZ", path: "/cs", label: "Čeština" },
  fi: { code: "fi", name: "Suomi", flag: "🇫🇮", locale: "fi_FI", path: "/fi", label: "Suomi" },
  el: { code: "el", name: "Ελληνικά", flag: "🇬🇷", locale: "el_GR", path: "/el", label: "Ελληνικά" },
  ro: { code: "ro", name: "Română", flag: "🇷🇴", locale: "ro_RO", path: "/ro", label: "Română" },
  hu: { code: "hu", name: "Magyar", flag: "🇭🇺", locale: "hu_HU", path: "/hu", label: "Magyar" },
  uk: { code: "uk", name: "Українська", flag: "🇺🇦", locale: "uk_UA", path: "/uk", label: "Українська" },
  he: { code: "he", name: "עברית", flag: "🇮🇱", locale: "he_IL", path: "/he", label: "עברית" },
  ms: { code: "ms", name: "Bahasa Melayu", flag: "🇲🇾", locale: "ms_MY", path: "/ms", label: "Bahasa Melayu" },
  tl: { code: "tl", name: "Filipino", flag: "🇵🇭", locale: "fil_PH", path: "/tl", label: "Filipino" },
  bn: { code: "bn", name: "বাংলা", flag: "🇧🇩", locale: "bn_BD", path: "/bn", label: "বাংলা" },
  sk: { code: "sk", name: "Slovenčina", flag: "🇸🇰", locale: "sk_SK", path: "/sk", label: "Slovenčina" },
  bg: { code: "bg", name: "Български", flag: "🇧🇬", locale: "bg_BG", path: "/bg", label: "Български" },
  hr: { code: "hr", name: "Hrvatski", flag: "🇭🇷", locale: "hr_HR", path: "/hr", label: "Hrvatski" },
  et: { code: "et", name: "Eesti", flag: "🇪🇪", locale: "et_EE", path: "/et", label: "Eesti" }
};

// Helper generator to build complete language translation structures
function makeTrans(cfg) {
  return {
    metaTitle: cfg.metaTitle,
    metaDesc: cfg.metaDesc,
    heroTitle: cfg.heroTitle,
    heroHighlight: cfg.heroHighlight,
    heroSubtitle: cfg.heroSubtitle,
    quickAnswer: cfg.quickAnswer,
    badges: {
      free: cfg.bFree || "100% Free Forever",
      noSignup: cfg.bNoSignup || "No Registration Required",
      secure: cfg.bSecure || "Cryptographically Fair",
      capacity: cfg.bCapacity || "Up to 500 Names",
      device: cfg.bDevice || "Mobile & Desktop Optimized"
    },
    ui: {
      spinBtn: cfg.spinBtn || "SPIN THE WHEEL",
      spinning: cfg.spinning || "SPINNING...",
      resultDecided: cfg.resultDecided || "The Wheel Has Spoken",
      addNamesHeading: cfg.addNamesHeading || "🎯 Add Names or Choices",
      inputPlaceholder: cfg.inputPlaceholder || "Type an entry...",
      addBtn: cfg.addBtn || "Add Entry",
      bulkBtn: cfg.bulkBtn || "📋 Bulk Paste Entries",
      bulkPlaceholder: cfg.bulkPlaceholder || "Paste multiple names, one per line...",
      bulkAddBtn: cfg.bulkAddBtn || "Add All to Wheel",
      bulkCloseBtn: cfg.bulkCloseBtn || "Cancel",
      clearAllBtn: cfg.clearAllBtn || "🗑 Clear All",
      shuffleBtn: cfg.shuffleBtn || "🔀 Shuffle",
      sortBtn: cfg.sortBtn || "🔤 Sort A-Z",
      presetsHeading: cfg.presetsHeading || "⚡ Quick Presets",
      themesHeading: cfg.themesHeading || "🎨 Wheel Theme",
      settingsHeading: cfg.settingsHeading || "⚙️ Customization & Settings",
      spinDuration: cfg.spinDuration || "Spin Duration",
      soundEffect: cfg.soundEffect || "Sound Effect",
      soundVolume: cfg.soundVolume || "Volume",
      soundTick: cfg.soundTick || "Mechanical Clicker",
      soundDrum: cfg.soundDrum || "Suspense Drumroll",
      soundFanfare: cfg.soundFanfare || "Victory Fanfare",
      soundCheer: cfg.soundCheer || "Crowd Cheering",
      soundNone: cfg.soundNone || "Mute / Silent",
      removeWinner: cfg.removeWinner || "Remove Winner After Spin",
      removeWinnerDesc: cfg.removeWinnerDesc || "Eliminate the winning item so it cannot be chosen again.",
      showConfetti: cfg.showConfetti || "Confetti Celebration",
      showPopup: cfg.showPopup || "Show Winner Popup",
      allowDuplicates: cfg.allowDuplicates || "Allow Duplicate Entries",
      fairnessAudit: cfg.fairnessAudit || "Cryptographic Randomness",
      fairnessDesc: cfg.fairnessDesc || "Powered by Web Cryptography API for zero algorithmic bias.",
      historyHeading: cfg.historyHeading || "📜 Spin History",
      noSpinsYet: cfg.noSpinsYet || "No spins recorded yet. Hit the spin button to start!",
      clearHistory: cfg.clearHistory || "Clear Log",
      exportHistory: cfg.exportHistory || "Export CSV",
      statsHeading: cfg.statsHeading || "📊 Winner Stats",
      statsDesc: cfg.statsDesc || "Track theoretical probability vs. real spin outcomes.",
      saveWheel: cfg.saveWheel || "💾 Save Custom Wheel",
      loadWheel: cfg.loadWheel || "📂 My Saved Wheels",
      shareWheel: cfg.shareWheel || "🔗 Share Wheel",
      shareSuccess: cfg.shareSuccess || "Link copied to clipboard!",
      qrCodeTitle: cfg.qrCodeTitle || "Scan QR Code on Phone",
      embedTitle: cfg.embedTitle || "Embed Wheel Widget",
      fullscreen: cfg.fullscreen || "Fullscreen Mode",
      exitFullscreen: cfg.exitFullscreen || "Exit Fullscreen",
      spinAgain: cfg.spinAgain || "Spin Again",
      removeAndContinue: cfg.removeAndContinue || "Remove Winner & Continue",
      winnerTitle: cfg.winnerTitle || "🎉 We Have a Winner!"
    },
    presets: cfg.presets,
    howTo: cfg.howTo,
    useCases: cfg.useCases,
    fairness: cfg.fairness,
    comparison: cfg.comparison,
    faqs: cfg.faqs
  };
}

const MORE20_TRANSLATIONS = {
  tr: makeTrans({
    metaTitle: "Çark Çevir Online Ücretsiz – İsim Çarkı ve Karar Çarkı",
    metaDesc: "Ücretsiz online çark çevir aracı: 500'e kadar isim veya seçenek ekleyin. Çekiliş çarkı, sınıf öğrencisi seçici, karar çarkı ve parti oyunları. Kayıt yok.",
    heroTitle: "Çark Çevir Online Ücretsiz",
    heroHighlight: "İsim Çarkı & Rastgele Karar Seçici",
    heroSubtitle: "İsimleri, seçenekleri veya sayıları girin ve tarafsız, kriptografik rastgelelikle dönen çarkı başlatın. Sınıflar, çekilişler ve günlük kararlar için mükemmel.",
    quickAnswer: "<strong>Çark Çevir Nedir?</strong> Tarayıcınızda çalışan, kriptografik rastgelelik (<code>crypto.getRandomValues</code>) ile desteklenen ücretsiz bir rastgele seçim aracıdır. 500 seçeneğe kadar ekleyebilir, kazananı otomatik çıkartabilir ve linkle paylaşabilirsiniz.",
    bFree: "100% Ücretsiz", bNoSignup: "Kayıt Gerektirmez", bSecure: "Kriptografik Olarak Adil", bCapacity: "500 İsme Kadar", bDevice: "Mobil ve Masaüstü Uyumlu",
    spinBtn: "ÇARKI ÇEVİR", spinning: "DÖNÜYOR...", resultDecided: "Kazanan Belirlendi", addNamesHeading: "🎯 İsim veya Seçenek Ekle",
    inputPlaceholder: "Bir isim veya seçenek yazın...", addBtn: "Ekle", bulkBtn: "📋 Toplu Ekle",
    bulkPlaceholder: "Birden fazla ismi her satıra bir tane gelecek şekilde yapıştırın...",
    bulkAddBtn: "Hepsini Çarka Ekle", bulkCloseBtn: "İptal", clearAllBtn: "🗑 Temizle", shuffleBtn: "🔀 Karıştır", sortBtn: "🔤 Sırala A-Z",
    presetsHeading: "⚡ Hızlı Şablonlar", themesHeading: "🎨 Çark Teması", settingsHeading: "⚙️ Ayarlar ve Ses",
    spinDuration: "Dönüş Süresi", soundEffect: "Ses Efekti", soundVolume: "Ses Seviyesi",
    soundTick: "Mekanik Tıkırtı", soundDrum: "Gerilim Davulu", soundFanfare: "Zafer Müziği", soundCheer: "Alkış", soundNone: "Sessiz",
    removeWinner: "Kazananı Çarktan Çıkar", removeWinnerDesc: "Aynı kişinin tekrar seçilmemesi için kazananı otomatik listeden siler.",
    showConfetti: "Konfeti Kutlaması", showPopup: "Kazanan Açılır Penceresi", allowDuplicates: "Yinelenenlere İzin Ver",
    fairnessAudit: "Kriptografik Doğrulama", fairnessDesc: "Sıfır algoritma yanlılığı sağlayan Web Cryptography API ile çalışır.",
    historyHeading: "📜 Geçmiş", noSpinsYet: "Henüz dönüş yapılmadı.", clearHistory: "Temizle", exportHistory: "CSV İndir",
    statsHeading: "📊 İstatistikler", statsDesc: "Teorik olasılık ile gerçekleşen sonuçları karşılaştırın.",
    saveWheel: "💾 Çarkı Kaydet", loadWheel: "📂 Kayıtlı Çarklar", shareWheel: "🔗 Çarkı Paylaş", shareSuccess: "Bağlantı kopyalandı!",
    qrCodeTitle: "Telefonda QR Kod Tara", embedTitle: "Siteye Yerleştir", fullscreen: "Tam Ekran", exitFullscreen: "Tam Ekrandan Çık",
    spinAgain: "Tekrar Çevir", removeAndContinue: "Kazananı Çıkar ve Devam Et", winnerTitle: "🎉 Tebrikler Kazanan!",
    presets: {
      yesno: { label: "Evet / Hayır", items: ["Evet ✅", "Hayır ❌", "Belki 🤔", "Tekrar Sor 🔄"] },
      drawnames: { label: "İsimler", items: ["Ahmet", "Mehmet", "Ayşe", "Fatma", "Mustafa", "Zeynep", "Emre", "Elif", "Burak", "Selin"] },
      dinner: { label: "Ne Yesek?", items: ["Kebap 🍢", "Pizza 🍕", "Burger 🍔", "Pide 🥖", "Ev Yemeği 🍲", "Döner 🥙", "Salata 🥗", "Makarna 🍝"] },
      numbers: { label: "1 - 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Doğruluk / Cesaret", items: ["Doğruluk 🤫", "Cesaret 😈", "Doğruluk 🤫", "Cesaret 😈", "Çift Cesaret 🔥", "Pas 🌟"] },
      giveaway: { label: "Çekiliş", items: ["Büyük Ödül 🏆", "2. Ödül 🥈", "3. Ödül 🥉", "Hediye Çeki 🎁", "Sürpriz Kutu 📦", "Tekrar Dene 🍀"] }
    },
    howTo: {
      title: "Online Çark Çevir Aracı Nasıl Kullanılır?",
      subtitle: "Dört kolay adımda kendi özel çarkınızı oluşturup çevirin.",
      steps: [
        { num: 1, title: "İsimleri veya Seçenekleri Girin", desc: "Seçenekleri tek tek yazın veya 'Toplu Ekle' butonuna basarak kopyala-yapıştır yapın." },
        { num: 2, title: "Renk ve Ses Seçin", desc: "Çark temasını, ses efektini ve dönüş süresini (2-15 saniye) isteğinize göre ayarlayın." },
        { num: 3, title: "Çarkı Çevirin", desc: "'Çarkı Çevir' butonuna tıklayın. Gerçekçi fiziksel yavaşlamayla kazanan belirlenecektir." },
        { num: 4, title: "Sonucu Yönetin ve Paylaşın", desc: "Kazananı çıkarıp bir sonraki tura geçin veya çark linkini QR kod ile paylaşın." }
      ]
    },
    useCases: {
      title: "Eğitimde, İş Hayatında ve Eğlencede Kullanım Alanları",
      subtitle: "Öğretmenler, yayıncılar ve ekipler için en iyi karar aracı.",
      items: [
        { icon: "🏫", title: "Sınıf İçi Söz Hakkı", desc: "Öğretmenler akıllı tahtada öğrencileri tarafsızca seçmek için çark kullanır." },
        { icon: "🎁", title: "Canlı Yayın Çekilişleri", desc: "YouTube ve Twitch yayıncıları şeffaf ve güvenilir çekilişler düzenler." },
        { icon: "💼", title: "Toplantı ve Görev Dağılımı", desc: "Çevik ekipler günlük toplantılarda konuşmacı ve nöbetçi belirler." },
        { icon: "🎉", title: "Parti Oyunları & Yemek Kararı", desc: "Yemekte ne yeneceğine veya parti oyunlarında kimin başlayacağına saniyeler içinde karar verin." }
      ]
    },
    fairness: {
      title: "Kriptografik Güvenlik ve Tam Adillik",
      subtitle: "Hiçbir hile barındırmayan matematiksel saf rastgelelik.",
      text1: "Sıradan araçların aksine sistemimiz Web Cryptography API (<code>window.crypto.getRandomValues</code>) kullanır.",
      text2: "Donanım düzeyindeki entropiden beslenerek her bir dilime tam olarak eşit seçilme şansı tanır.",
      formula: "P(Dilim) = 1 / Toplam_Dilim",
      text3: "Çark ibresi ve seçilen sonuç mükemmel bir biçimde örtüşür."
    },
    comparison: {
      title: "Karşılaştırma: Online Çark vs Diğer Yöntemler",
      headers: ["Kriter", "SpinTheWheelsOnline", "Fiziksel Zar / Yazı Tura", "Basit Sayı Üreteci", "Kağıttan Kura"],
      rows: [
        ["Görsel Heyecan", "⭐⭐⭐⭐⭐ Yüksek", "⭐⭐ Orta", "⭐ Düşük", "⭐⭐ Orta"],
        ["Kapasite", "En fazla 500 isim", "6-20 Taraf", "Yalnızca Rakam", "Yazması Zahmetli"],
        ["Adillik & Güven", "Kriptografik CSPRNG", "Aşınmaya Bağlı", "Temel Algoritma", "El Hilesine Açık"],
        ["Kazananı Eleme", "Otomatik Tek Tıkla", "Yeniden Atış Gerekir", "Manuel Filtre", "Kağıdı Ayırmak Gerek"]
      ]
    },
    faqs: [
      { q: "Çark çevirme aracı tamamen ücretsiz mi?", a: "Evet, sınırsız kullanım ile yüzde yüz ücretsizdir. Üyelik veya kart gerekmez." },
      { q: "En fazla kaç isim ekleyebilirim?", a: "Tek bir çarka 500'e kadar isim veya seçenek ekleyebilirsiniz." },
      { q: "Sonuçların hilesiz olduğunu nasıl anlarım?", a: "Tarayıcının resmi Web Cryptography API altyapısı kullanılarak donanım rastgeleliği sağlanır." }
    ]
  }),

  ru: makeTrans({
    metaTitle: "Колесо Фортуны Онлайн Бесплатно – Колесо Имен и Рандомайзер",
    metaDesc: "Бесплатное онлайн колесо фортуны: добавьте до 500 имен или вариантов. Генератор случайных имен для конкурсов, школы, розыгрышей и принятия решений. Без регистрации.",
    heroTitle: "Колесо Фортуны Онлайн Бесплатно",
    heroHighlight: "Колесо Имен & Генератор Случайных Решений",
    heroSubtitle: "Введите имена, числа или варианты и крутите колесо для честного криптографического выбора. Идеально для учителей, стримеров и розыгрышей призов.",
    quickAnswer: "<strong>Что такое Колесо Фортуны Онлайн?</strong> Это бесплатный рандомайзер в браузере на базе Web Cryptography API (<code>crypto.getRandomValues</code>). Поддерживает до 500 записей, звуковые эффекты, автоматическое удаление победителя и экспорт.",
    bFree: "100% Бесплатно", bNoSignup: "Без Регистрации", bSecure: "Криптографически Честно", bCapacity: "До 500 Имен", bDevice: "Для ПК и Смартфонов",
    spinBtn: "КРУТИТЬ КОЛЕСО", spinning: "ВРАЩЕНИЕ...", resultDecided: "Результат Определен", addNamesHeading: "🎯 Добавить Имена или Варианты",
    inputPlaceholder: "Введите имя или приз...", addBtn: "Добавить", bulkBtn: "📋 Вставить Списком",
    bulkPlaceholder: "Вставьте список имен, каждое с новой строки...", bulkAddBtn: "Добавить Все в Колесо", bulkCloseBtn: "Отмена",
    clearAllBtn: "🗑 Очистить", shuffleBtn: "🔀 Перемешать", sortBtn: "🔤 По алфавиту",
    presetsHeading: "⚡ Быстрые Наборы", themesHeading: "🎨 Тема Колеса", settingsHeading: "⚙️ Настройки и Звук",
    spinDuration: "Время Вращения", soundEffect: "Звуковой Эффект", soundVolume: "Громкость",
    soundTick: "Щелчки Колеса", soundDrum: "Барабанная Дробь", soundFanfare: "Фанфары Победы", soundCheer: "Аплодисменты", soundNone: "Без Звука",
    removeWinner: "Удалять Победителя После Вращения", removeWinnerDesc: "Автоматически исключает выбранный сектор для многораундовых розыгрышей.",
    showConfetti: "Конфетти", showPopup: "Окно Победителя", allowDuplicates: "Разрешить Дубликаты",
    fairnessAudit: "Криптографическая Проверка", fairnessDesc: "Аппаратная энтропия Web Cryptography API для абсолютной честности.",
    historyHeading: "📜 История Вращений", noSpinsYet: "Пока нет записей. Нажмите 'Крутить', чтобы начать!",
    saveWheel: "💾 Сохранить Колесо", loadWheel: "📂 Мои Колеса", shareWheel: "🔗 Поделиться", shareSuccess: "Ссылка скопирована!",
    qrCodeTitle: "QR-код для Телефона", embedTitle: "Встроить Виджет", fullscreen: "Во Весь Экран", exitFullscreen: "Выйти из Полноэкранного Режима",
    spinAgain: "Крутить Снова", removeAndContinue: "Удалить Победителя и Продолжить", winnerTitle: "🎉 У Нас Есть Победитель!",
    presets: {
      yesno: { label: "Да / Нет", items: ["Да ✅", "Нет ❌", "Возможно 🤔", "Спросить Снова 🔄"] },
      drawnames: { label: "Имена", items: ["Александр", "Дмитрий", "Максим", "Сергей", "Андрей", "Анна", "Мария", "Елена", "Ольга", "Татьяна"] },
      dinner: { label: "Что Съесть", items: ["Пицца 🍕", "Суши 🍣", "Бургеры 🍔", "Шашлык 🥩", "Паста 🍝", "Пельмени 🥟", "Салат 🥗", "Борщ 🍲"] },
      numbers: { label: "1 до 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Правда / Действие", items: ["Правда 🤫", "Действие 😈", "Правда 🤫", "Действие 😈", "Супер Действие 🔥", "Пропуск 🌟"] },
      giveaway: { label: "Розыгрыш", items: ["Главный Приз 🏆", "2-е Место 🥈", "3-е Место 🥉", "Подарочная Карта 🎁", "Секретный Бокс 📦", "Попробуй Снова 🍀"] }
    },
    howTo: {
      title: "Как Пользоваться Онлайн Колесом Фортуны",
      subtitle: "Создайте и запустите собственное колесо за четыре простых шага.",
      steps: [
        { num: 1, title: "Введите Имена или Варианты", desc: "Добавьте записи по одной или воспользуйтесь опцией 'Вставить Списком'." },
        { num: 2, title: "Настройте Цвета и Звуки", desc: "Выберите цветовую палитру, звуковой эффект и продолжительность вращения." },
        { num: 3, title: "Крутите Колесо", desc: "Нажмите 'Крутить Колесо'. Физическая анимация плавно остановится на случайном победителе." },
        { num: 4, title: "Управляйте Результатом", desc: "Исключите победителя для следующего раунда или поделитесь ссылкой." }
      ]
    },
    useCases: {
      title: "Популярные Сферы Применения",
      subtitle: "Для уроков, стримов, работы и домашних праздников.",
      items: [
        { icon: "🏫", title: "Выбор Ученика в Классе", desc: "Честный опрос школьников и студентов без предвзятости." },
        { icon: "🎁", title: "Розыгрыши на Стримах", desc: "Прозрачное определение победителей призов на Twitch и YouTube." },
        { icon: "💼", title: "Командные Встречи", desc: "Жеребьевка докладчиков и дежурств на Scrum-митингах." },
        { icon: "🎉", title: "Игры и Вечеринки", desc: "Быстрый выбор игры, ресторана или штрафного задания." }
      ]
    },
    fairness: {
      title: "Криптографическая Надежность",
      subtitle: "Абсолютная математическая непредвзятость.",
      text1: "Вместо устаревшего Math.random используется стандарт Web Cryptography API.",
      text2: "Случайность формируется ядром ОС на основе физической энтропии оборудования.",
      formula: "Вероятность = 1 / Число_Секторов",
      text3: "Визуальный указатель точно соответствует вычисленному результату."
    },
    comparison: {
      title: "Сравнение: Онлайн Колесо vs Другие Методы",
      headers: ["Критерий", "SpinTheWheelsOnline", "Кубики и Монетки", "Генератор Чисел", "Бумажная Жеребьевка"],
      rows: [
        ["Эмоции и Зрелищность", "⭐⭐⭐⭐⭐ Высокая", "⭐⭐ Средняя", "⭐ Минимальная", "⭐⭐ Средняя"],
        ["Вместимость", "До 500 вариантов", "До 6-20 граней", "Только числа", "Трудоемко писать"],
        ["Честность", "CSPRNG криптография", "Зависит от броска", "Простой скрипт", "Риск подглядывания"],
        ["Исключение Выигравшего", "Один клик", "Нужно перебрасывать", "Ручная настройка", "Вытаскивать бумажку"]
      ]
    },
    faqs: [
      { q: "Колесо действительно бесплатное?", a: "Да, абсолютно бесплатно и без ограничений по количеству вращений." },
      { q: "Сколько имен можно внести?", a: "До 500 имен в один список." },
      { q: "Можно ли крутить с телефона?", a: "Да, инструмент полностью адаптирован для экранов iPhone, Android и планшетов." }
    ]
  }),

  ar: makeTrans({
    metaTitle: "عجلة الحظ أونلاين مجاناً – عجلة الأسماء وقرعة الاختيار العشوائي",
    metaDesc: "أداة عجلة الحظ الإلكترونية المجانية: أدخل حتى 500 اسم أو خيار واحصل على قرعة عادلة وفورية. ممتازة للفصول الدراسية، السحوبات، والألعاب.",
    heroTitle: "عجلة الحظ أونلاين مجاناً",
    heroHighlight: "عجلة الأسماء والقرعة العشوائية",
    heroSubtitle: "أدخل الأسماء أو الخيارات وقم بتدوير العجلة لاتخاذ قرارات نزيهة وعشوائية وموثقة تشفيرياً. مثالية للمعلمين والمسابقات وفعاليات البث المباشر.",
    quickAnswer: "<strong>ما هي عجلة الحظ أونلاين؟</strong> أداة عشوائية مجانية تعمل عبر المتصفح مدعومة بتقنية التشفير المتقدمة (<code>crypto.getRandomValues</code>). تدعم حتى 500 اسم مع مؤثرات صوتية واستبعاد الفائزين ومشاركة الروابط والباركود.",
    bFree: "مجاني 100% دائماً", bNoSignup: "بدون تسجيل حساب", bSecure: "نزاهة تشفيرية تامة", bCapacity: "حتى 500 اسم", bDevice: "متوافق مع الجوال والكمبيوتر",
    spinBtn: "تدوير العجلة", spinning: "جارٍ الدوران...", resultDecided: "العجلة اختارت الفائز", addNamesHeading: "🎯 إضافة الأسماء أو الخيارات",
    inputPlaceholder: "اكتب اسماً أو خياراً...", addBtn: "إضافة", bulkBtn: "📋 لصق جماعي",
    bulkPlaceholder: "الصق قائمة الأسماء، كل اسم في سطر مستقل...", bulkAddBtn: "إضافة الكل إلى العجلة", bulkCloseBtn: "إلغاء",
    clearAllBtn: "🗑 مسح الكل", shuffleBtn: "🔀 خلط عشوائي", sortBtn: "🔤 ترتيب أبجدي",
    presetsHeading: "⚡ نماذج جاهزة", themesHeading: "🎨 ألوان ومظهر العجلة", settingsHeading: "⚙️ الإعدادات والصوت",
    spinDuration: "مدة الدوران", soundEffect: "المؤثر الصوتي", soundVolume: "مستوى الصوت",
    soundTick: "تكتكة العجلة", soundDrum: "قرع الطبول الحماسي", soundFanfare: "موسيقى الفوز", soundCheer: "تصفيق الجمهور", soundNone: "صامت",
    removeWinner: "إزالة الفائز بعد السحب", removeWinnerDesc: "استبعاد الاسم الفائز تلقائياً لضمان عدم تكرار الفوز في الجولات التالية.",
    showConfetti: "مفرقعات واحتفال الفوز", showPopup: "نافذة إعلان الفائز", allowDuplicates: "السماح بالأسماء المكررة",
    fairnessAudit: "فحص النزاهة التشفيرية", fairnessDesc: "تعتمد العشوائية على واجهة Web Cryptography API لضمان حيادية تامة 100%.",
    historyHeading: "📜 سجل السحوبات", noSpinsYet: "لا توجد سحوبات بعد. اضغط على الزر للبدء!",
    saveWheel: "💾 حفظ العجلة", loadWheel: "📂 عجلاتي المحفوظة", shareWheel: "🔗 مشاركة العجلة", shareSuccess: "تم نسخ الرابط بنجاح!",
    qrCodeTitle: "مسح رمز QR بالجوال", embedTitle: "تضمين العجلة بموقعك", fullscreen: "ملء الشاشة", exitFullscreen: "الخروج من ملء الشاشة",
    spinAgain: "تدوير مجدداً", removeAndContinue: "استبعاد الفائز والمتابعة", winnerTitle: "🎉 ألف مبروك للفائز!",
    presets: {
      yesno: { label: "نعم / لا", items: ["نعم ✅", "لا ❌", "ربما 🤔", "اسأل ثانية 🔄"] },
      drawnames: { label: "أسماء", items: ["محمد", "أحمد", "علي", "عمر", "خالد", "فاطمة", "مريم", "سارة", "نور", "زينب"] },
      dinner: { label: "ماذا نأكل؟", items: ["شاورما 🌯", "بيتزا 🍕", "برجر 🍔", "مشاوي 🍢", "كبسة 🍚", "سوشي 🍣", "سلطة 🥗", "معكرونة 🍝"] },
      numbers: { label: "1 إلى 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "صراحة / جرأة", items: ["صراحة 🤫", "جرأة 😈", "صراحة 🤫", "جرأة 😈", "تحدي مضاعف 🔥", "إعفاء 🌟"] },
      giveaway: { label: "جوائز", items: ["الجائزة الكبرى 🏆", "المركز الثاني 🥈", "المركز الثالث 🥉", "قسيمة شراء 🎁", "صندوق مفاجآت 📦", "حظ أوفر 🍀"] }
    },
    howTo: {
      title: "كيف تستخدم عجلة الحظ الإلكترونية؟",
      subtitle: "أنشئ عجلتك الخاصة وقم بالسحب في أربع خطوات سهلة ومباشرة.",
      steps: [
        { num: 1, title: "إدخال الأسماء والخيارات", desc: "اكتب الأسماء يدوياً أو استخدم 'اللصق الجماعي' لاستيراد القوائم دفعة واحدة." },
        { num: 2, title: "تخصيص الألوان والأصوات", desc: "اختر نسق الألوان المفضل ومؤثر الصوت التفاعلي وفترة الدوران المناسبة." },
        { num: 3, title: "تدوير العجلة", desc: "اضغط على زر التدوير لتشاهد حركة الفيزياء الانسيابية حتى التوقف على الفائز." },
        { num: 4, title: "مشاركة النتيجة أو استبعاد الفائز", desc: "استبعد الفائز للجولات التالية أو شارك الرابط المباشر مع المشاركين." }
      ]
    },
    useCases: {
      title: "استخدامات واسعة في التعليم والعمل والترفيه",
      subtitle: "المعلمون وفرق العمل وصناع المحتوى يعتمدون عليها يومياً.",
      items: [
        { icon: "🏫", title: "القرعة المدرسية بالفصل", desc: "اختيار الطلاب للإجابة على السبورة الذكية بعدالة ومن دون أي إحراج." },
        { icon: "🎁", title: "سحوبات البث المباشر", desc: "إجراء مسابقات شفافة وموثوقة على تيك توك، يوتيوب، وتويتش." },
        { icon: "💼", title: "اجتماعات العمل والشركات", desc: "تحديد أدوار المتحدثين وتوزيع مهام المناوبة بإنصاف تام." },
        { icon: "🎉", title: "ألعاب الجمعات والعائلة", desc: "إنهاء الحيرة في اختيار وجبة العشاء أو تحديد ترتيب اللاعبين." }
      ]
    },
    fairness: {
      title: "نزاهة تشفيرية وأمان رياضي مطلق",
      subtitle: "لا مجال للتلاعب أو الانحياز الخوارزمي.",
      text1: "تستخدم منصتنا معيار Web Cryptography API المعترف به دولياً.",
      text2: "يتم استخلاص العشوائية من مصادر إنتروبيا العتاد الفيزيائي في جهازك.",
      formula: "احتمال كل خيار = 1 / إجمالي_الخيارات",
      text3: "مؤشر التوقف يتطابق بدقة تامة مع الحساب الرياضي المشفر."
    },
    comparison: {
      title: "مقارنة: عجلة الحظ الرقمية مقابل الوسائل التقليدية",
      headers: ["المعيار", "عجلة الحظ أونلاين", "القرعة الورقية", "النرد والعملة", "الأرقام العشوائية البسيطة"],
      rows: [
        ["التشويق البصري", "⭐⭐⭐⭐⭐ ممتاز وحماسي", "⭐⭐ متوسط", "⭐⭐ عادي", "⭐ ضعيف جداً"],
        ["سعة الأسماء", "حتى 500 خيار", "محدود ومتعب بالكتابة", "6 إلى 20 وجهاً فقط", "أرقام فقط"],
        ["النزاهة والشفافية", "تشفير CSPRNG عتادي", "عرضة للغش واللمس", "يتأثر بطريقة الرمي", "خوارزمية برمجية قابلة للتكرار"],
        ["استبعاد الفائز تلقائياً", "بنقرة زر واحدة", "يتطلب تمزيق الورقة", "إعادة رمي إجبارية", "تعديل النطاق يدوياً"]
      ]
    },
    faqs: [
      { q: "هل عجلة الحظ مجانية تماماً؟", a: "نعم، مجانية بنسبة 100% لعدد دورات غير محدود وبدون أي رسوم أو تسجيل." },
      { q: "كم اسماً يمكنني إضافته للعجلة؟", a: "يمكن إضافة حتى 500 اسم أو خيار في العجلة الواحدة." },
      { q: "هل تعمل على الهواتف الذكية؟", a: "نعم، مصممة لتعمل بسلاسة فائقة على هواتف آيفون وأندرويد والأجهزة اللوحية." }
    ]
  }),

  hi: makeTrans({
    metaTitle: "स्पिन द व्हील ऑनलाइन फ्री – नाम चक्र और रैंडम डिसीजन पिकर",
    metaDesc: "फ्री ऑनलाइन स्पिन द व्हील टूल: 500 तक नाम या विकल्प जोड़ें और निष्पक्ष परिणाम पाएं। क्लासरूम, गिवअवे, लकी ड्रा और पार्टी गेम्स के लिए सर्वोत्तम।",
    heroTitle: "स्पिन द व्हील ऑनलाइन फ्री",
    heroHighlight: "नाम चक्र और निष्पक्ष रैंडम पिकर",
    heroSubtitle: "नाम, नंबर या विकल्प दर्ज करें और पहिया घुमाएं। वेब क्रिप्टोग्राफी द्वारा संचालित पूर्ण निष्पक्ष और पारदर्शी परिणाम प्राप्त करें।",
    quickAnswer: "<strong>स्पिन द व्हील क्या है?</strong> यह ब्राउज़र में चलने वाला एक शक्तिशाली फ्री रैंडम व्हील है जो <code>crypto.getRandomValues</code> पर काम करता है। इसमें 500 नामों की क्षमता, साउंड इफेक्ट्स और विजेता हटाने की सुविधा है।",
    bFree: "100% हमेशा फ्री", bNoSignup: "रजिस्ट्रेशन की जरूरत नहीं", bSecure: "क्रिप्टोग्राफिक निष्पक्षता", bCapacity: "500 नामों तक", bDevice: "मोबाइल और कंप्यूटर अनुकूलित",
    spinBtn: "पहिया घुमाएं (SPIN)", spinning: "घूम रहा है...", resultDecided: "विजेता तय हुआ", addNamesHeading: "🎯 नाम या विकल्प जोड़ें",
    inputPlaceholder: "नाम या विकल्प लिखें...", addBtn: "जोड़ें", bulkBtn: "📋 बल्क पेस्ट करें",
    bulkPlaceholder: "कई नाम एक साथ पेस्ट करें, हर लाइन में एक नाम...", bulkAddBtn: "सबको व्हील में जोड़ें", bulkCloseBtn: "रद्द करें",
    clearAllBtn: "🗑 सब मिटाएं", shuffleBtn: "🔀 फेरबदल (Shuffle)", sortBtn: "🔤 वर्णमाला क्रम",
    presetsHeading: "⚡ तुरंत प्रीसेट", themesHeading: "🎨 व्हील का रंग और थीम", settingsHeading: "⚙️ सेटिंग्स और साउंड",
    spinDuration: "घूमने का समय", soundEffect: "साउंड इफेक्ट", soundVolume: "आवाज़ (Volume)",
    soundTick: "मैकेनिकल टिक-टिक", soundDrum: "सस्पेंस ड्रमरोल", soundFanfare: "जीत की धुन", soundCheer: "तालियों की गड़गड़ाहट", soundNone: "म्यूट (शांत)",
    removeWinner: "जीतने के बाद नाम हटाएं", removeWinnerDesc: "चुने गए नाम को स्वचालित रूप से हटा दें ताकि दोबारा न चुना जाए।",
    showConfetti: "पटाखे और कंफेटी", showPopup: "विजेता पॉपअप दिखाएं", allowDuplicates: "डुप्लिकेट नाम की अनुमति दें",
    fairnessAudit: "क्रिप्टोग्राफिक ऑडिट", fairnessDesc: "हार्डवेयर स्तर की निष्पक्षता के लिए Web Cryptography API का उपयोग।",
    historyHeading: "📜 स्पिन का इतिहास", noSpinsYet: "अभी तक कोई स्पिन नहीं हुआ है। शुरू करने के लिए बटन दबाएं!",
    saveWheel: "💾 व्हील सेव करें", loadWheel: "📂 सेव किए गए व्हील", shareWheel: "🔗 व्हील शेयर करें", shareSuccess: "लिंक कॉपी हो गया!",
    qrCodeTitle: "फोन से QR कोड स्कैन करें", embedTitle: "वेबसाइट में लगाएं", fullscreen: "फुलस्क्रीन मोड", exitFullscreen: "फुलस्क्रीन से बाहर आएं",
    spinAgain: "फिर से घुमाएं", removeAndContinue: "विजेता हटाएं और जारी रखें", winnerTitle: "🎉 बधाई हो! विजेता चुना गया!",
    presets: {
      yesno: { label: "हाँ / ना", items: ["हाँ ✅", "ना ❌", "शायद 🤔", "फिर पूछें 🔄"] },
      drawnames: { label: "नाम", items: ["राहुल", "अमित", "प्रिया", "पूजा", "रोहित", "नेहा", "विकास", "अंजलि", "दीपक", "सुमन"] },
      dinner: { label: "आज क्या खाएं?", items: ["पनीर टिक्का 🍲", "पिज्जा 🍕", "बर्गर 🍔", "दाल मखनी 🍛", "डोसा 🥞", "बिरयानी 🍚", "सैंडविच 🥪", "सलाद 🥗"] },
      numbers: { label: "1 से 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "सच या हिम्मत", items: ["सच 🤫", "हिम्मत 😈", "सच 🤫", "हिम्मत 😈", "डबल डेयर 🔥", "पास 🌟"] },
      giveaway: { label: "लकी ड्रा", items: ["प्रथम पुरस्कार 🏆", "दूसरा पुरस्कार 🥈", "तीसरा पुरस्कार 🥉", "गिफ्ट कार्ड 🎁", "सरप्राइज बॉक्स 📦", "फिर प्रयास करें 🍀"] }
    },
    howTo: {
      title: "स्पिन द व्हील का उपयोग कैसे करें?",
      subtitle: "चार आसान चरणों में अपना मनपसंद पहिया तैयार करें।",
      steps: [
        { num: 1, title: "नाम या विकल्प दर्ज करें", desc: "नाम टाइप करें या एक साथ पूरी लिस्ट पेस्ट करें।" },
        { num: 2, title: "रंग और आवाज़ चुनें", desc: "आकर्षक थीम और पसंदीदा साउंड इफेक्ट सेट करें।" },
        { num: 3, title: "पहिया घुमाएं", desc: "'स्पिन द व्हील' पर क्लिक करें। पहिया घूमकर विजेता पर रुकेगा।" },
        { num: 4, title: "विजेता प्रबंधित करें और शेयर करें", desc: "विजेता को हटाकर अगला राउंड खेलें या दोस्तों के साथ लिंक शेयर करें।" }
      ]
    },
    useCases: {
      title: "स्कूल, ऑफिस और मनोरंजन में बेहतरीन उपयोग",
      subtitle: "लाखों शिक्षक, स्ट्रीमर्स और प्रोफेशनल्स की पहली पसंद।",
      items: [
        { icon: "🏫", title: "क्लास में छात्रों का चयन", desc: "स्मार्ट बोर्ड पर बिना किसी भेदभाव के निष्पक्ष रूप से छात्रों को बुलाएं।" },
        { icon: "🎁", title: "यूट्यूब व लाइव लकी ड्रा", desc: "दर्शकों के सामने बिल्कुल निष्पक्ष और पारदर्शी गिवअवे करें।" },
        { icon: "💼", title: "ऑफिस मीटिंग व टास्क", desc: "टीम मीटिंग में बोलने की बारी और रोस्टर तय करने के लिए।" },
        { icon: "🎉", title: "पार्टी गेम्स और खाना तय करना", desc: "दोस्त मिलकर क्या खाएं या गेम में किसकी बारी है, तुरंत फैसला करें।" }
      ]
    },
    fairness: {
      title: "क्रिप्टोग्राफिक सुरक्षा और 100% निष्पक्षता",
      subtitle: "शून्य एल्गोरिथम पूर्वाग्रह की गारंटी।",
      text1: "हम साधारण Math.random के बजाय ब्राउज़र के Web Cryptography API का उपयोग करते हैं।",
      text2: "यह आपके डिवाइस के हार्डवेयर एंट्रॉपी से रैंडम नंबर बनाता है जिससे हर विकल्प की संभावना समान होती है।",
      formula: "जीतने की संभावना = 1 / कुल विकल्प",
      text3: "पहिए का पॉइंटर पूरी तरह से गणितीय गणना के अनुरूप ही रुकता है।"
    },
    comparison: {
      title: "तुलना: ऑनलाइन चक्र बनाम पारंपरिक तरीके",
      headers: ["मानक", "स्पिन द व्हील ऑनलाइन", "सिक्का / पासा", "साधारण नंबर पिकर", "कागज की पर्ची"],
      rows: [
        ["रोमांच और सस्पेंस", "⭐⭐⭐⭐⭐ जबरदस्त", "⭐⭐ मध्यम", "⭐ बहुत कम", "⭐⭐ मध्यम"],
        ["क्षमता", "500 नामों तक", "केवल 6-20 विकल्प", "केवल संख्या", "लिखने में समय बर्बाद"],
        ["निष्पक्षता", "क्रिप्टोग्राफिक CSPRNG", "फेंकने के तरीके पर निर्भर", "बेसिक कोड", "हाथ की चालाकी संभव"],
        ["विजेता हटाना", "एक क्लिक में", "बार-बार रोल करना", "मैनुअल फिल्टर", "पर्ची अलग करनी पड़ती है"]
      ]
    },
    faqs: [
      { q: "क्या यह टूल सच में पूरी तरह फ्री है?", a: "हाँ, असीमित स्पिन के साथ 100% मुफ्त है। किसी खाते या कार्ड की आवश्यकता नहीं है।" },
      { q: "मैं एक पहिये में कितने नाम डाल सकता हूँ?", a: "आप एक बार में 500 तक नाम या विकल्प डाल सकते हैं।" },
      { q: "क्या यह मोबाइल पर काम करता है?", a: "हाँ, यह एंड्रॉइड और आईफोन दोनों पर बेहद तेज़ और सुचारू रूप से चलता है।" }
    ]
  }),

  id: makeTrans({
    metaTitle: "Putar Roda Online Gratis – Roda Nama & Pengambil Keputusan Acak",
    metaDesc: "Alat putar roda online gratis: masukkan hingga 500 nama atau pilihan untuk hasil acak yang adil. Roda nama untuk kelas, giveaway, arisan, dan undian.",
    heroTitle: "Putar Roda Online Gratis",
    heroHighlight: "Roda Nama & Pengambil Keputusan Acak",
    heroSubtitle: "Masukkan nama, angka, atau pilihan dan putar roda untuk keputusan yang adil dan acak secara kriptografis. Sangat pas untuk guru, arisan, giveaway, dan game seru.",
    quickAnswer: "<strong>Apa itu Putar Roda Online?</strong> Alat pemilih acak online gratis berbasis Web Cryptography API (<code>crypto.getRandomValues</code>). Mendukung hingga 500 entri, efek suara, penghapusan pemenang otomatis, dan berbagi lewat tautan atau QR.",
    bFree: "100% Gratis Selamanya", bNoSignup: "Tanpa Daftar Akun", bSecure: "Adil Secara Kriptografis", bCapacity: "Hingga 500 Nama", bDevice: "Optimal di Ponsel & PC",
    spinBtn: "PUTAR RODA", spinning: "MEMUTAR...", resultDecided: "Roda Telah Memilih", addNamesHeading: "🎯 Tambah Nama atau Pilihan",
    inputPlaceholder: "Ketik nama atau hadiah...", addBtn: "Tambah", bulkBtn: "📋 Tempel Massal",
    bulkPlaceholder: "Tempel banyak nama sekaligus, satu per baris...", bulkAddBtn: "Masukkan Semua ke Roda", bulkCloseBtn: "Batal",
    clearAllBtn: "🗑 Hapus Semua", shuffleBtn: "🔀 Acak Urutan", sortBtn: "🔤 Urutkan A-Z",
    presetsHeading: "⚡ Pilihan Cepat", themesHeading: "🎨 Tema Warna Roda", settingsHeading: "⚙️ Pengaturan & Suara",
    spinDuration: "Durasi Putaran", soundEffect: "Efek Suara", soundVolume: "Volume Suara",
    soundTick: "Detik Mekanis", soundDrum: "Ketukan Drum Tegang", soundFanfare: "Terompet Kemenangan", soundCheer: "Sorak Penonton", soundNone: "Hening (Bisu)",
    removeWinner: "Hapus Pemenang Setelah Putaran", removeWinnerDesc: "Otomatis mengeliminasi nama pemenang agar tidak terpilih berulang.",
    showConfetti: "Efek Konfeti Kemenangan", showPopup: "Tampilkan Modal Pemenang", allowDuplicates: "Izinkan Nama Duplikat",
    fairnessAudit: "Verifikasi Kriptografis", fairnessDesc: "Didukung API Kriptografi Web untuk memastikan probabilitas murni tanpa rekayasa.",
    historyHeading: "📜 Riwayat Putaran", noSpinsYet: "Belum ada putaran tercatat. Tekan tombol putar untuk mulai!",
    saveWheel: "💾 Simpan Roda", loadWheel: "📂 Roda Tersimpan", shareWheel: "🔗 Bagikan Roda", shareSuccess: "Tautan berhasil disalin!",
    qrCodeTitle: "Pindai Kode QR Lewat HP", embedTitle: "Sematkan di Website", fullscreen: "Layar Penuh", exitFullscreen: "Keluar Layar Penuh",
    spinAgain: "Putar Lagi", removeAndContinue: "Hapus Pemenang & Lanjut", winnerTitle: "🎉 Selamat Kepada Pemenang!",
    presets: {
      yesno: { label: "Ya / Tidak", items: ["Ya ✅", "Tidak ❌", "Mungkin 🤔", "Tanya Lagi 🔄"] },
      drawnames: { label: "Nama", items: ["Budi", "Siti", "Andi", "Dewi", "Rian", "Maya", "Eko", "Putri", "Bayu", "Rina"] },
      dinner: { label: "Makan Apa?", items: ["Nasi Goreng 🍚", "Bakso 🍜", "Ayam Geprek 🍗", "Sate Ayam 🍢", "Pizza 🍕", "Mie Ayam 🥢", "Martabak 🥞", "Salad 🥗"] },
      numbers: { label: "1 sampai 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Truth or Dare", items: ["Jujur (Truth) 🤫", "Tantangan (Dare) 😈", "Jujur 🤫", "Tantangan 😈", "Tantangan Ganda 🔥", "Lewat 🌟"] },
      giveaway: { label: "Undian Hadiah", items: ["Hadiah Utama 🏆", "Juara 2 🥈", "Juara 3 🥉", "Voucher Belanja 🎁", "Kotak Misteri 📦", "Coba Lagi 🍀"] }
    },
    howTo: {
      title: "Cara Menggunakan Pemutar Roda Online",
      subtitle: "Buat roda keberuntungan kustom Anda dalam empat langkah praktis.",
      steps: [
        { num: 1, title: "Ketik Nama atau Pilihan", desc: "Ketik satu per satu atau gunakan opsi 'Tempel Massal' dari Excel atau catatan." },
        { num: 2, title: "Sesuaikan Desain & Suara", desc: "Pilih palet warna, atur durasi putaran (2-15 detik), dan pilih efek suara." },
        { num: 3, title: "Putar Rodanya", desc: "Tekan tombol 'PUTAR RODA'. Roda akan melambat secara mulus hingga berhenti." },
        { num: 4, title: "Kelola Hasil & Bagikan", desc: "Hapus pemenang untuk babak berikutnya atau bagikan tautan lewat kode QR." }
      ]
    },
    useCases: {
      title: "Solusi Cerdas untuk Berbagai Kebutuhan",
      subtitle: "Dipakai harian oleh pendidik, kreator konten, dan tim profesional.",
      items: [
        { icon: "🏫", title: "Panggil Siswa di Kelas", desc: "Bantu guru menunjuk siswa secara adil di layar proyektor tanpa pilih kasih." },
        { icon: "🎁", title: "Giveaway & Undian Arisan", desc: "Menentukan pemenang giveaway live di Instagram/TikTok atau kocokan arisan keluarga." },
        { icon: "💼", title: "Rapat & Giliran Tugas Kantor", desc: "Menentukan urutan bicara saat sprint meeting atau pembagian piket kantor." },
        { icon: "🎉", title: "Game Nongkrong & Pilihan Makanan", desc: "Atasi kebingungan memilih tempat makan siang atau giliran permainan bersama kawan." }
      ]
    },
    fairness: {
      title: "Keamanan Kriptografi & Keadilan Penuh",
      subtitle: "Tanpa algoritma curang atau rekayasa pihak ketiga.",
      text1: "Kami tidak memakai generator acak biasa, melainkan standar Web Cryptography API resmi.",
      text2: "Mengambil entropi langsung dari sistem operasi perangkat Anda demi probabilitas merata sempurna.",
      formula: "Peluang = 1 / Total Pilihan",
      text3: "Jarum penunjuk secara presisi menyentuh sektor yang dihitung algoritma."
    },
    comparison: {
      title: "Perbandingan: Roda Putar vs Metode Tradisional",
      headers: ["Kriteria", "Putar Roda Online", "Dadu / Koin Fisik", "Generator Angka Biasa", "Kocokan Kertas"],
      rows: [
        ["Sensasi & Keseruan", "⭐⭐⭐⭐⭐ Sangat Tinggi", "⭐⭐ Sedang", "⭐ Rendah Sekali", "⭐⭐ Sedang"],
        ["Kapasitas Opsi", "Hingga 500 entri", "Terbatas 6-20 sisi", "Hanya deret angka", "Capek menulis tangan"],
        ["Keadilan & Bebas Curang", "CSPRNG Kriptografis", "Tergantung sudut lempar", "Algoritma dasar", "Rentan kecurangan tangan"],
        ["Eliminasi Pemenang", "Otomatis Sekali Klik", "Harus kocok ulang", "Harus edit angka", "Harus buang kertas"]
      ]
    },
    faqs: [
      { q: "Apakah alat putar roda ini benar-benar gratis?", a: "Ya, 100% gratis tanpa batasan jumlah putaran dan tanpa perlu mendaftar akun." },
      { q: "Berapa banyak nama yang bisa saya masukkan?", a: "Anda dapat menambahkan hingga 500 nama atau pilihan dalam satu roda." },
      { q: "Apakah bisa dibuka di HP?", a: "Sangat bisa! Situs ini responsif dan lancar di iPhone, Android, dan tablet." }
    ]
  })
};

// Fill in remaining 15 languages with programmatic localized defaults
const REMAINING_CONFIGS = [
  { code: "th", name: "ไทย", flag: "🇹🇭", locale: "th_TH", spin: "หมุนวงล้อ", title: "วงล้อสุ่ม ออนไลน์ ฟรี – วงล้อสุ่มชื่อและตัดสินใจ", desc: "วงล้อสุ่มชื่อและตัวเลือกออนไลน์ฟรี ใส่ได้ถึง 500 ชื่อ สำหรับห้องเรียน แจกของรางวัล และตัดสินใจ" },
  { code: "cs", name: "Čeština", flag: "🇨🇿", locale: "cs_CZ", spin: "ROZTOČIT KOLO", title: "Kolo Štěstí Online Zdarma – Kolo Jmen a Náhodný Výběr", desc: "Online kolo štěstí zdarma: přidejte až 500 jmen či možností pro férové losování a rozhodování." },
  { code: "fi", name: "Suomi", flag: "🇫🇮", locale: "fi_FI", spin: "PYÖRÄYTÄ PYÖRÄÄ", title: "Onnenpyörä Online Ilmainen – Nimipyörä ja Arvontatyökalu", desc: "Ilmainen online-onnenpyörä: lisää jopa 500 nimeä tai vaihtoehtoa reilua arvontaa varten." },
  { code: "el", name: "Ελληνικά", flag: "🇬🇷", locale: "el_GR", spin: "ΓΥΡΙΣΤΕ ΤΟΝ ΤΡΟΧΟ", title: "Τροχός της Τύχης Online Δωρεάν – Τροχός Ονομάτων & Επιλογών", desc: "Δωρεάν online τροχός τύχης: προσθέστε έως 500 ονόματα για δίκαιη και τυχαία κλήρωση." },
  { code: "ro", name: "Română", flag: "🇷🇴", locale: "ro_RO", spin: "ÎNVÂRTE ROATA", title: "Roata Norocului Online Gratis – Roata Numelor Aleatorii", desc: "Roata norocului gratuită online: adăugați până la 500 de nume pentru tombole și decizii corecte." },
  { code: "hu", name: "Magyar", flag: "🇭🇺", locale: "hu_HU", spin: "KERÉK MEGFORGATÁSA", title: "Szerencsekerék Online Ingyen – Névkerék és Döntéshozó", desc: "Ingyenes online szerencsekerék: adjon hozzá akár 500 nevet sorsolásokhoz és döntésekhez." },
  { code: "uk", name: "Українська", flag: "🇺🇦", locale: "uk_UA", spin: "КРУТИТИ КОЛЕСО", title: "Колесо Фортуни Онлайн Безкоштовно – Колесо Імен та Рандомайзер", desc: "Безкоштовне онлайн-колесо фортуни: до 500 імен для чесних розіграшів та вибору в класі." },
  { code: "he", name: "עברית", flag: "🇮🇱", locale: "he_IL", spin: "סובב את הגלגל", title: "גלגל המזל אונליין בחינם – גלגל שמות ובחירה אקראית", desc: "גלגל מזל חינמי באינטרנט: הוסף עד 500 שמות להגרלות הוגנות ומהירות ללא הרשמה." },
  { code: "ms", name: "Bahasa Melayu", flag: "🇲🇾", locale: "ms_MY", spin: "PUTAR RODA", title: "Roda Putar Online Percuma – Roda Nama & Pilihan Rawak", desc: "Roda putar rawak percuma: masukkan sehingga 500 nama untuk cabutan bertuah dan keputusan adil." },
  { code: "tl", name: "Filipino", flag: "🇵🇭", locale: "fil_PH", spin: "PAIKUTIN ANG GULONG", title: "Spin the Wheel Online Libre – Gulong ng Pangalan at Desisyon", desc: "Libreng spin the wheel online: maglagay ng hanggang 500 pangalan para sa raffle at bunutan sa klase." },
  { code: "bn", name: "বাংলা", flag: "🇧🇩", locale: "bn_BD", spin: "চাকা ঘোরান", title: "স্পিন হুইল অনলাইন ফ্রি – নামের চাকা ও র্যান্ডম লটারি", desc: "বিনামূল্যে অনলাইন স্পিন দ্য হুইল: ৫০০ নাম যোগ করুন এবং ক্রিপ্টোগ্রাফিক লটারি ফলাফল পান।" },
  { code: "sk", name: "Slovenčina", flag: "🇸🇰", locale: "sk_SK", spin: "ROZTOČIŤ KOLESO", title: "Koleso Šťastia Online Zadarmo – Koleso Mien a Výber", desc: "Bezplatné online koleso šťastia: pridajte až 500 mien pre férové žrebovanie bez registrácie." },
  { code: "bg", name: "Български", flag: "🇧🇬", locale: "bg_BG", spin: "ЗАВЪРТИ КОЛЕЛОТО", title: "Колело на Късмета Онлайн Безплатно – Колело с Имена", desc: "Безплатно онлайн колело на късмета: въведете до 500 имена за честни томболи и игри." },
  { code: "hr", name: "Hrvatski", flag: "🇭🇷", locale: "hr_HR", spin: "ZAVRTI KOLO", title: "Kolo Sreće Online Besplatno – Kolo Imena i Slučajni Odabir", desc: "Besplatno online kolo sreće: unesite do 500 imena za pošteno izvlačenje i brze odluke." },
  { code: "et", name: "Eesti", flag: "🇪🇪", locale: "et_EE", spin: "KEERUTA RATAS", title: "Õnneratas Veebis Tasuta – Nimeratas ja Loosiratas", desc: "Tasuta online-õnneratas: lisage kuni 500 nime ausaks ja krüptograafiliselt kontrollitud loosimiseks." }
];

REMAINING_CONFIGS.forEach(rc => {
  MORE20_TRANSLATIONS[rc.code] = makeTrans({
    metaTitle: rc.title,
    metaDesc: rc.desc,
    heroTitle: rc.title.split("–")[0].trim(),
    heroHighlight: rc.title.includes("–") ? rc.title.split("–")[1].trim() : rc.name,
    heroSubtitle: rc.desc,
    quickAnswer: `<strong>${rc.title.split("–")[0].trim()}</strong>: A high-performance browser-based random wheel powered by cryptographic randomness (<code>crypto.getRandomValues</code>). Supports up to 500 entries, sound effects, and instant sharing.`,
    spinBtn: rc.spin,
    presets: {
      yesno: { label: "Yes / No", items: ["YES ✅", "NO ❌", "MAYBE 🤔", "AGAIN 🔄"] },
      drawnames: { label: "Names", items: ["Alex", "Sam", "Jordan", "Taylor", "Morgan", "Casey", "Riley", "Jamie"] },
      dinner: { label: "Dinner", items: ["Pizza 🍕", "Burger 🍔", "Sushi 🍣", "Pasta 🍝", "Salad 🥗", "Tacos 🌮"] },
      numbers: { label: "1 - 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Truth / Dare", items: ["Truth 🤫", "Dare 😈", "Double Dare 🔥", "Pass 🌟"] },
      giveaway: { label: "Giveaway", items: ["Grand Prize 🏆", "Runner Up 🥈", "Gift Card 🎁", "Mystery Box 📦", "Try Again 🍀"] }
    },
    howTo: {
      title: "How to Use the Wheel",
      subtitle: "Four quick steps to spin and decide.",
      steps: [
        { num: 1, title: "Add Entries", desc: "Type choices or paste multiple names." },
        { num: 2, title: "Customize", desc: "Pick theme, sounds, and duration." },
        { num: 3, title: "Spin", desc: "Click spin for a smooth physical rotation." },
        { num: 4, title: "Share", desc: "Remove winner or share via link and QR code." }
      ]
    },
    useCases: {
      title: "Ideal for Classrooms, Giveaways, and Teams",
      subtitle: "Unbiased decisions for education, streaming, and games.",
      items: [
        { icon: "🏫", title: "Classroom Student Picker", desc: "Fair student calling without bias." },
        { icon: "🎁", title: "Livestream Raffles", desc: "Transparent drawings on Twitch and YouTube." },
        { icon: "💼", title: "Team Meetings", desc: "Assign standup order and on-call tasks." },
        { icon: "🎉", title: "Games & Party Decisions", desc: "End dinner debates and select board games." }
      ]
    },
    fairness: {
      title: "Cryptographic Fairness",
      subtitle: "Pure mathematical probability with zero algorithmic bias.",
      text1: "Powered by browser Web Cryptography API (crypto.getRandomValues).",
      text2: "Entropy from system kernel ensures identical odds for every sector.",
      formula: "P(Slice) = 1 / Total_Slices",
      text3: "Physical pointer lands exactly on the cryptographically selected slice."
    },
    comparison: {
      title: "Wheel of Names vs Other Methods",
      headers: ["Criterion", "Online Wheel", "Dice / Coin", "Number Generator", "Paper Draw"],
      rows: [
        ["Suspense & Fun", "⭐⭐⭐⭐⭐ High", "⭐⭐ Medium", "⭐ Low", "⭐⭐ Medium"],
        ["Capacity", "Up to 500 entries", "6-20 sides", "Numbers only", "Manual writing"],
        ["Fairness", "Cryptographic CSPRNG", "Wear & toss bias", "Basic non-crypto RNG", "Manual fold bias"],
        ["Auto-Remove", "Instant 1-Click", "Re-roll required", "Manual filter", "Discard paper"]
      ]
    },
    faqs: [
      { q: "Is this wheel completely free?", a: "Yes, 100% free with unlimited spins and no registration." },
      { q: "How many entries can I add?", a: "Up to 500 custom names or options per wheel." },
      { q: "Does it work on smartphones?", a: "Yes, fully responsive for iOS, Android, and tablets." }
    ]
  });
});

export { MORE20_LANGUAGES, MORE20_TRANSLATIONS };
export default { MORE20_LANGUAGES, MORE20_TRANSLATIONS };
