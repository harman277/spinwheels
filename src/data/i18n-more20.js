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
      subtitle: "Dört kolay adımda kendi özel isim, kura veya karar çarkınızı oluşturup çevirin.",
      steps: [
        { num: 1, title: "İsimleri veya Seçenekleri Girin", desc: "Seçenekleri tek tek yazın veya 'Toplu Ekle' butonuna basarak Excel, Word ya da not defterinden 500'e kadar ismi her satıra bir kayıt gelecek şekilde tek seferde yapıştırın. Ayrıca her dilimin yanındaki −/+ ağırlık butonlarıyla kazanma olasılığını özelleştirebilirsiniz." },
        { num: 2, title: "Renk, Tema ve Ses Seçin", desc: "Gökkuşağı, Casino Altını, Siber Neon veya Pastel çark temalarından birini seçin. Mekanik tıkırtı veya gerilim davulu ses efektini ve dönüş süresini (2 ile 15 saniye arasında) etkinliğinizin temposuna göre ayarlayın." },
        { num: 3, title: "Çarkı Çevirin veya Erken Durdurun", desc: "'ÇARKI ÇEVİR' butonuna, çarkın ortasına veya klavyenizdeki Boşluk (Space) tuşuna basın. Web Cryptography API ile belirlenen kazanan, gerçekçi fiziksel yavaşlamayla (veya Durdur butonuyla anında) ibrenin altında duracaktır." },
        { num: 4, title: "Sonucu Yönetin, Kaydedin ve Paylaşın", desc: "'Kazananı Çarktan Çıkar' seçeneğiyle çok turlu çekilişlerde aynı ismin tekrar çıkmasını önleyin, geçmişi CSV olarak indirin veya özel çarkınızı bağlantı ve QR kod ile katılımcılarla paylaşın." }
      ]
    },
    useCases: {
      title: "Eğitimde, İş Hayatında ve Eğlencede Kullanım Alanları",
      subtitle: "Öğretmenler, canlı yayın içerik üreticileri, İK ekipleri ve arkadaş grupları için en kapsamlı karar aracı.",
      items: [
        { icon: "🏫", title: "Sınıf İçi Söz Hakkı ve Grup Kurma", desc: "Öğretmenler akıllı tahtada Tam Ekran modunu açarak öğrencileri tarafsızca söz hakkı için seçer, okuma grupları oluşturur ve kelime yarışmalarını eğlenceli hale getirir." },
        { icon: "🎁", title: "Canlı Yayın ve Sosyal Medya Çekilişleri", desc: "YouTube, Twitch, TikTok ve Instagram yayıncıları katılımcı listesini toplu yapıştırarak izleyicilerin gözü önünde %100 şeffaf, CSV kayıtlı ve güvenilir ödül kuraları düzenler." },
        { icon: "💼", title: "Toplantı Sırası ve Görev Dağılımı", desc: "Çevik (Agile/Scrum) yazılım ve ofis ekipleri günlük toplantılarda konuşmacı sırasını, kod inceleme nöbetçisini veya takım içi buz kırıcı soruları adilce belirler." },
        { icon: "🎉", title: "Parti Oyunları & Günlük Yemek Kararı", desc: "Akşam yemeğinde ne yeneceğine, hangi filmin izleneceğine veya Doğruluk mu Cesaret mi oyunlarında sıranın kimde olduğuna saniyeler içinde karar verin." }
      ]
    },
    fairness: {
      title: "Kriptografik Güvenlik ve Matematiksel Tam Adillik",
      subtitle: "Hiçbir algoritma hilesi barındırmayan donanım tabanlı saf rastgelelik.",
      text1: "Sıradan sözde-rastgele (Math.random) araçların aksine sistemimiz modern tarayıcıların resmi Web Cryptography API (<code>window.crypto.getRandomValues</code>) standardını kullanır.",
      text2: "İşletim sistemi çekirdeğindeki donanım düzeyinde entropiden beslenerek her bir dilime (veya belirlediğiniz özel ağırlık katsayısına) tam olarak eşit ve öngörülemez seçilme şansı tanır.",
      formula: "P(Dilim) = Ağırlık / Toplam_Ağırlık (Eşit ağırlıkta: 1 / N)",
      text3: "Çark ibresi, döndürme başladığı anda kriptografik olarak hesaplanan hedef açıya milimetrik hassasiyetle yerleşir ve İstatistikler sekmesinde teorik olasılıklarla gerçek sonuçları canlı karşılaştırabilirsiniz."
    },
    comparison: {
      title: "Karşılaştırma: Online Çark vs Diğer Kura Yöntemleri",
      headers: ["Kriter", "SpinTheWheelsOnline", "Fiziksel Zar / Yazı Tura", "Basit Sayı Üreteci", "Kağıttan Kura Çekimi"],
      rows: [
        ["Görsel Heyecan & Sunum", "⭐⭐⭐⭐⭐ Yüksek (60 FPS + Ses)", "⭐⭐ Orta", "⭐ Düşük", "⭐⭐ Orta"],
        ["Kapasite & Esneklik", "En fazla 500 isim + Ağırlık", "6-20 Taraf ile Sınırlı", "Yalnızca Rakam", "Yazması ve Katlaması Zahmetli"],
        ["Adillik & Güven", "Kriptografik CSPRNG", "Yüzey ve Aşınmaya Bağlı", "Temel PRNG Algoritması", "Katlama ve El Hilesine Açık"],
        ["Kazananı Eleme & Kayıt", "Otomatik Tek Tıkla + CSV", "Yeniden Atış Gerekir", "Manuel Filtre", "Kağıdı Ayırmak Gerekir"]
      ]
    },
    faqs: [
      { q: "Çark çevirme aracı tamamen ücretsiz mi?", a: "Evet, SpinTheWheelsOnline sınırsız çark çevirme, kaydetme, QR kod oluşturma ve CSV dışa aktarma özellikleriyle yüzde yüz ücretsizdir. Herhangi bir üyelik, abonelik veya kredi kartı bilgisi gerekmez." },
      { q: "Tek bir çarka en fazla kaç isim veya seçenek ekleyebilirim?", a: "Tek bir çarka 500'e kadar isim, numara veya seçenek ekleyebilirsiniz. 'Toplu Ekle' özelliğini kullanarak Excel veya metin belgesindeki yüzlerce satırlık listeyi tek tıkla çarka aktarabilirsiniz." },
      { q: "Sonuçların hilesiz ve gerçekten rastgele olduğunu nasıl anlarım?", a: "Aracımız basit zaman damgalı algoritmalar yerine tarayıcının kriptografik güvenlik standardı olan window.crypto.getRandomValues() fonksiyonunu kullanır. Her dilim eşit ağırlıktayken tam 1/N olasılığa sahiptir ve İstatistikler panelinden tüm geçmiş dağılımı denetleyebilirsiniz." },
      { q: "Aynı kişinin iki kez seçilmesini nasıl engellerim?", a: "Ayarlar panelindeki 'Kazananı Çarktan Çıkar' seçeneğini aktif hale getirmeniz veya kazanan penceresindeki 'Kazananı Çıkar ve Devam Et' butonuna tıklamanız yeterlidir. Seçilen isim bir sonraki tur öncesi otomatik olarak listeden silinir." },
      { q: "Bazı seçeneklerin kazanma şansını (ağırlığını) artırabilir miyim?", a: "Evet! İsim listesindeki her seçeneğin yanında bulunan '−' ve '+' ağırlık butonlarını kullanarak bir dilimin ağırlığını 1x'ten 20x'e kadar artırabilirsiniz. Çark üzerindeki dilim genişliği ve yüzde olasılığı anında güncellenir." },
      { q: "Girdiğim öğrenci veya çekiliş listesi sunucuya kaydediliyor mu?", a: "Hayır. Gizliliğiniz bizim için önceliklidir; girdiğiniz tüm isimler ve kayıtlı çarklarınız yalnızca kendi cihazınızın tarayıcı hafızasında (localStorage) tutulur ve hiçbir dış sunucuya gönderilmez." }
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
      subtitle: "Создайте и запустите собственное колесо имен, призов или решений за четыре простых шага.",
      steps: [
        { num: 1, title: "Введите Имена или Варианты", desc: "Добавьте записи по одной или воспользуйтесь функцией 'Вставить Списком', чтобы импортировать до 500 имен из Excel или текстового файла. С помощью кнопок −/+ возле каждого пункта можно настроить индивидуальный вес (шанс выпадения) сектора." },
        { num: 2, title: "Настройте Цвета, Тему и Звуки", desc: "Выберите цветовую палитру (Радуга, Золото Казино, Кибер-Неон, Пастель), звуковой эффект (щелчки или барабанная дробь) и длительность вращения от 2 до 15 секунд." },
        { num: 3, title: "Крутите или Останавливайте Колесо", desc: "Нажмите 'КРУТИТЬ КОЛЕСО', кликните по центру колеса или нажмите клавишу Пробел (Space). Плавная 60 FPS анимация (или кнопка досрочной остановки) укажет на криптографически выбранного победителя." },
        { num: 4, title: "Управляйте Результатом и Делитесь", desc: "Включите 'Удалять Победителя После Вращения' для многораундовых розыгрышей без повторов, скачайте журнал в CSV или поделитесь колесом через ссылку и QR-код." }
      ]
    },
    useCases: {
      title: "Популярные Сферы Применения Колеса Фортуны",
      subtitle: "Универсальный инструмент для учителей, стримеров, HR-команд и домашних праздников.",
      items: [
        { icon: "🏫", title: "Выбор Ученика и Викторины в Классе", desc: "Учителя выводят колесо в полноэкранном режиме на интерактивную доску для честного опроса школьников и деления класса на команды без предвзятости." },
        { icon: "🎁", title: "Розыгрыши Призов на Стримах и в Соцсетях", desc: "Стримеры на Twitch, YouTube и в Telegram проводят прозрачные конкурсы с мгновенной выгрузкой истории вращений в CSV-протокол." },
        { icon: "💼", title: "Командные Встречи и Scrum-Стендапы", desc: "Распределяйте очередь выступлений на планерках, выбирайте дежурных по код-ревью и проводите тимбилдинг в распределенных командах." },
        { icon: "🎉", title: "Вечеринки, Игры и Повседневный Выбор", desc: "Решайте за секунды, что заказать на ужин, какой фильм посмотреть вечером или чья очередь выполнять задание в игре Правда или Действие." }
      ]
    },
    fairness: {
      title: "Криптографическая Надежность и Математическая Честность",
      subtitle: "Абсолютная непредвзятость на базе аппаратной энтропии браузера.",
      text1: "Вместо предсказуемого генератора Math.random наша платформа использует стандарт Web Cryptography API (<code>window.crypto.getRandomValues</code>).",
      text2: "Случайное число формируется ядром операционной системы на основе физической энтропии оборудования, обеспечивая каждому сектору строго равную вероятность.",
      formula: "P(Сектор) = Вес_Сектора / Сумма_Весов (при равных весах: 1 / N)",
      text3: "Визуальный указатель всегда останавливается в точном соответствии с криптографическим расчетом, а вкладка Статистика позволяет сверять реальную частоту побед с теоретической вероятностью."
    },
    comparison: {
      title: "Сравнение: Онлайн Колесо vs Другие Методы Жеребьевки",
      headers: ["Критерий", "SpinTheWheelsOnline", "Кубики и Монетки", "Генератор Чисел", "Бумажная Жеребьевка"],
      rows: [
        ["Эмоции и Зрелищность", "⭐⭐⭐⭐⭐ Высокая (60 FPS + Звук)", "⭐⭐ Средняя", "⭐ Минимальная", "⭐⭐ Средняя"],
        ["Вместимость и Веса", "До 500 вариантов + Вес 1x–20x", "До 6-20 граней", "Только числа", "Трудоемко писать вручную"],
        ["Честность и Доверие", "CSPRNG криптография", "Зависит от физического броска", "Простой скрипт", "Риск подглядывания"],
        ["Исключение Выигравшего", "Автоматически + Экспорт CSV", "Нужно перебрасывать", "Ручная настройка", "Нужно убирать бумажку"]
      ]
    },
    faqs: [
      { q: "Колесо фортуны действительно полностью бесплатное?", a: "Да, инструмент на 100% бесплатен без ограничений по числу вращений, сохранений и участников. Регистрация аккаунта или привязка карты не требуются." },
      { q: "Сколько имен или вариантов можно добавить на одно колесо?", a: "Вы можете добавить до 500 имен, чисел или призов одновременно. Через кнопку 'Вставить Списком' весь список загружается за одну секунду." },
      { q: "Как гарантируется честность выбора победителя?", a: "Мы используем криптографический генератор window.crypto.getRandomValues(), который опирается на аппаратную энтропию устройства. Каждый сектор с весом 1x имеет строгую вероятность 1/N." },
      { q: "Как исключить победителя, чтобы он не выпал повторно?", a: "Включите переключатель 'Удалять Победителя После Вращения' в настройках или нажмите кнопку 'Удалить Победителя и Продолжить' во всплывающем окне результата." },
      { q: "Можно ли изменить шанс выпадения отдельного сектора?", a: "Да! Нажимайте кнопки '−' и '+' рядом с любой записью в списке, чтобы задать вес от 1x до 20x. Ширина сектора и процентная вероятность пересчитаются автоматически." },
      { q: "Сохраняются ли мои списки на сторонних серверах?", a: "Нет. Все введенные имена и сохраненные колеса хранятся исключительно локально в браузере вашего устройства (localStorage) и никогда не передаются на внешние серверы." }
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
      subtitle: "أنشئ عجلة الأسماء أو السحوبات الخاصة بك وابدأ القرعة في أربع خطوات سهلة.",
      steps: [
        { num: 1, title: "إدخال الأسماء والخيارات", desc: "اكتب الأسماء يدوياً أو استخدم ميزة 'لصق جماعي' لاستيراد ما يصل إلى 500 اسم دفعة واحدة من ملف إكسل أو نص. يمكنك أيضاً تعديل وزن كل خيار (من 1x إلى 20x) عبر أزرار −/+." },
        { num: 2, title: "تخصيص الألوان والأصوات", desc: "اختر نسق الألوان المفضل (قوس قزح، ذهبي، نيون، باستيل)، وحدد مؤثر الصوت التفاعلي وفترة الدوران من ثانيتين إلى 15 ثانية." },
        { num: 3, title: "تدوير العجلة أو إيقافها", desc: "اضغط على زر 'تدوير العجلة' أو منتصف العجلة أو مفتاح المسافة (Space). ستدور العجلة بسلاسة وتتوقف بدقة على الفائز المختار تشفيرياً." },
        { num: 4, title: "إدارة النتيجة والمشاركة", desc: "فعّل خيار 'إزالة الفائز بعد السحب' لمنع تكرار الفوز في الجولات المتتالية، وحمّل سجل النتائج بصيغة CSV أو شارك العجلة عبر الرابط ورمز QR." }
      ]
    },
    useCases: {
      title: "استخدامات واسعة في التعليم والعمل والترفيه",
      subtitle: "المعلمون وفرق العمل وصناع المحتوى يعتمدون عليها يومياً لقرارات عادلة.",
      items: [
        { icon: "🏫", title: "القرعة المدرسية وتفاعل الفصل", desc: "عرض العجلة بوضع ملء الشاشة على السبورة الذكية لاختيار الطلاب للإجابة أو تقسيم المجموعات الدراسية بعدالة وحماس." },
        { icon: "🎁", title: "سحوبات الجوائز والبث المباشر", desc: "إجراء مسابقات وسحوبات شفافة وموثوقة أمام الجمهور على يوتيوب وتيك توك وتويتش وانستغرام مع توثيق السجل." },
        { icon: "💼", title: "اجتماعات العمل وتوزيع المهام", desc: "تحديد أدوار المتحدثين في الاجتماعات اليومية وتوزيع مهام المناوبة والعمل الجماعي بإنصاف تام." },
        { icon: "🎉", title: "ألعاب الجمعات والقرارات اليومية", desc: "إنهاء الحيرة في اختيار وجبة العشاء أو تحديد ترتيب اللاعبين وتحديات الصراحة والجرأة مع الأصدقاء والعائلة." }
      ]
    },
    fairness: {
      title: "نزاهة تشفيرية وأمان رياضي مطلق",
      subtitle: "لا مجال للتلاعب أو الانحياز الخوارزمي في نتائج القرعة.",
      text1: "تستخدم منصتنا معيار Web Cryptography API (<code>window.crypto.getRandomValues</code>) المعترف به دولياً بدلاً من الدوال العشوائية البسيطة.",
      text2: "يتم استخلاص العشوائية من مصادر إنتروبيا العتاد الفيزيائي في نظام التشغيل لضمان تكافؤ الفرص لكل مشارك.",
      formula: "احتمال الفوز = وزن_الخيار / مجموع_الأوزان (عند التساوي: 1 / N)",
      text3: "مؤشر التوقف يتطابق بدقة تامة مع الحساب الرياضي المشفر، ويمكنك مراجعة إحصائيات التكرار الفعلية مقارنة بالاحتمال النظري في أي وقت."
    },
    comparison: {
      title: "مقارنة: عجلة الحظ الرقمية مقابل الوسائل التقليدية",
      headers: ["المعيار", "عجلة الحظ أونلاين", "القرعة الورقية", "النرد والعملة", "الأرقام العشوائية البسيطة"],
      rows: [
        ["التشويق البصري", "⭐⭐⭐⭐⭐ ممتاز وحماسي (60 FPS)", "⭐⭐ متوسط", "⭐⭐ عادي", "⭐ ضعيف جداً"],
        ["سعة الأسماء والأوزان", "حتى 500 خيار + أوزان مخصصة", "محدود ومتعب بالكتابة", "6 إلى 20 وجهاً فقط", "أرقام فقط"],
        ["النزاهة والشفافية", "تشفير CSPRNG عتادي", "عرضة للغش واللمس", "يتأثر بطريقة الرمي", "خوارزمية برمجية بسيطة"],
        ["استبعاد الفائز وتصدير السجل", "تلقائي بنقرة + ملف CSV", "يتطلب تمزيق الورقة", "إعادة رمي إجبارية", "تعديل النطاق يدوياً"]
      ]
    },
    faqs: [
      { q: "هل عجلة الحظ مجانية تماماً وبدون تسجيل؟", a: "نعم، الأداة مجانية بنسبة 100% لعدد دورات غير محدود مع جميع الميزات (الحفظ، المشاركة، رمز QR، وتصدير CSV) دون الحاجة لإنشاء حساب." },
      { q: "كم اسماً يمكنني إضافته للعجلة في وقت واحد؟", a: "يمكنك إضافة حتى 500 اسم أو خيار في العجلة الواحدة باستخدام الإضافة الفردية أو ميزة اللصق الجماعي السريع." },
      { q: "كيف أضمن أن القرعة عادلة تماماً وغير منحازة؟", a: "تعتمد العجلة على واجهة التشفير القياسية window.crypto.getRandomValues() في المتصفح، والتي تمنح كل قسم فرصة رياضية متساوية تماماً (1/N)." },
      { q: "كيف أمنع تكرار فوز نفس الاسم في السحوبات المتعددة؟", a: "فعّل خيار 'إزالة الفائز بعد السحب' من قسم الإعدادات، أو اضغط على زر 'استبعاد الفائز والمتابعة' عند ظهور نافذة الفائز." },
      { q: "هل يمكنني مضاعفة فرصة فوز اسم معين؟", a: "نعم! استخدم أزرار '−' و '+' بجانب أي اسم في القائمة لزيادة وزنه من 1x حتى 20x، وستتحدث نسبة الاحتمال ومساحة القسم فوراً." },
      { q: "هل يتم حفظ أسماء الطلاب أو المشتركين في خوادم خارجية؟", a: "لا، خصوصيتك محمية بالكامل؛ جميع الأسماء والعجلات المحفوظة تُخزن محلياً داخل متصفح جهازك فقط (localStorage) ولا تُرسل لأي خادم." }
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
      subtitle: "चार आसान चरणों में अपना मनपसंद नाम चक्र या लकी ड्रा व्हील तैयार करें।",
      steps: [
        { num: 1, title: "नाम या विकल्प दर्ज करें", desc: "एक-एक करके नाम टाइप करें या 'बल्क पेस्ट करें' बटन दबाकर एक्सेल या नोटपैड से 500 तक नाम एक साथ पेस्ट करें। आप −/+ बटन से किसी भी विकल्प का वेट (संभावना) भी बदल सकते हैं।" },
        { num: 2, title: "रंग, थीम और आवाज़ चुनें", desc: "रेनबो, कैसीनो गोल्ड या नियॉन थीम चुनें, अपनी पसंद का साउंड इफेक्ट (टिक-टिक या ड्रमरोल) लगाएं और घूमने का समय 2 से 15 सेकंड के बीच सेट करें।" },
        { num: 3, title: "पहिया घुमाएं या तुरंत रोकें", desc: "'पहिया घुमाएं (SPIN)' बटन, पहिए के केंद्र या स्पेसबार (Space) को दबाएं। स्मूथ 60 FPS एनिमेशन के साथ पहिया घूमकर क्रिप्टोग्राफिक रूप से चुने गए विजेता पर रुकेगा।" },
        { num: 4, title: "विजेता हटाएं, सेव करें और शेयर करें", desc: "अगले राउंड से पहले विजेता को हटाने के लिए 'जीतने के बाद नाम हटाएं' चालू करें, इतिहास को CSV में डाउनलोड करें या लिंक व QR कोड से व्हील शेयर करें।" }
      ]
    },
    useCases: {
      title: "स्कूल, ऑफिस और मनोरंजन में बेहतरीन उपयोग",
      subtitle: "शिक्षकों, यूट्यूब स्ट्रीमर्स, एचआर टीमों और दोस्तों की पहली पसंद।",
      items: [
        { icon: "🏫", title: "क्लासरूम में छात्रों का निष्पक्ष चयन", desc: "शिक्षक स्मार्ट बोर्ड पर फुलस्क्रीन मोड खोलकर बिना किसी पक्षपात के छात्रों से सवाल पूछने और टीम बनाने के लिए इसका उपयोग करते हैं।" },
        { icon: "🎁", title: "यूट्यूब व सोशल मीडिया लकी ड्रा", desc: "लाइव स्ट्रीम और गिवअवे में दर्शकों के सामने 100% पारदर्शी लकी ड्रा करें और परिणाम को CSV फाइल के रूप में सुरक्षित रखें।" },
        { icon: "💼", title: "ऑफिस मीटिंग व टीम टास्क", desc: "डेली स्टैंडअप मीटिंग में बोलने की बारी, प्रोजेक्ट प्रेजेंटेशन का क्रम और टीम आइसब्रेकर तय करने के लिए सबसे सरल टूल।" },
        { icon: "🎉", title: "पार्टी गेम्स और रोज़मर्रा के फैसले", desc: "रात के खाने में क्या बनाएं, कौन सी फिल्म देखें या ट्रुथ ऑर डेयर गेम में किसकी बारी है—सेकंडों में फैसला करें।" }
      ]
    },
    fairness: {
      title: "क्रिप्टोग्राफिक सुरक्षा और 100% गणितीय निष्पक्षता",
      subtitle: "शून्य एल्गोरिथम पूर्वाग्रह और पूर्ण पारदर्शिता की गारंटी।",
      text1: "हम साधारण Math.random के बजाय आधुनिक ब्राउज़र के आधिकारिक Web Cryptography API (<code>window.crypto.getRandomValues</code>) का उपयोग करते हैं।",
      text2: "यह आपके डिवाइस के ऑपरेटिंग सिस्टम की हार्डवेयर एंट्रॉपी से रैंडम नंबर बनाता है जिससे हर विकल्प के जीतने की संभावना बिल्कुल समान रहती है।",
      formula: "जीतने की संभावना = विकल्प_का_भार / कुल_भार (समान भार पर: 1 / N)",
      text3: "पहिए का पॉइंटर पूरी तरह से गणितीय गणना के अनुरूप ही रुकता है और आप आंकड़े (Stats) पैनल में सैद्धांतिक बनाम वास्तविक परिणाम देख सकते हैं।"
    },
    comparison: {
      title: "तुलना: ऑनलाइन चक्र बनाम पारंपरिक तरीके",
      headers: ["मानक", "स्पिन द व्हील ऑनलाइन", "सिक्का / पासा", "साधारण नंबर पिकर", "कागज की पर्ची"],
      rows: [
        ["रोमांच और सस्पेंस", "⭐⭐⭐⭐⭐ जबरदस्त (60 FPS + साउंड)", "⭐⭐ मध्यम", "⭐ बहुत कम", "⭐⭐ मध्यम"],
        ["क्षमता और लचीलापन", "500 नामों तक + कस्टम वेट", "केवल 6-20 विकल्प", "केवल संख्या", "लिखने में समय बर्बाद"],
        ["निष्पक्षता और भरोसा", "क्रिप्टोग्राफिक CSPRNG", "फेंकने के तरीके पर निर्भर", "बेसिक कोड", "हाथ की चालाकी संभव"],
        ["विजेता हटाना व रिकॉर्ड", "एक क्लिक में + CSV एक्सपोर्ट", "बार-बार रोल करना", "मैनुअल फिल्टर", "पर्ची अलग करनी पड़ती है"]
      ]
    },
    faqs: [
      { q: "क्या यह स्पिन द व्हील टूल सच में पूरी तरह फ्री है?", a: "हाँ, यह असीमित स्पिन, कस्टम सेव, QR कोड और CSV डाउनलोड के साथ 100% मुफ्त है। किसी रजिस्ट्रेशन या क्रेडिट कार्ड की आवश्यकता नहीं है।" },
      { q: "मैं एक पहिये में अधिकतम कितने नाम डाल सकता हूँ?", a: "आप एक बार में 500 तक नाम, नंबर या विकल्प डाल सकते हैं। 'बल्क पेस्ट करें' फीचर से पूरी लिस्ट एक सेकंड में लोड हो जाती है।" },
      { q: "यह कैसे सुनिश्चित होता है कि परिणाम पूरी तरह निष्पक्ष है?", a: "हमारा व्हील ब्राउज़र के Web Cryptography API (window.crypto.getRandomValues) का उपयोग करता है, जो हर स्लाइस को 1/N का सटीक और निष्पक्ष अवसर देता है।" },
      { q: "एक ही विजेता को दोबारा चुने जाने से कैसे रोकें?", a: "सेटिंग्स में 'जीतने के बाद नाम हटाएं' विकल्प को चालू करें या विजेता पॉपअप में 'विजेता हटाएं और जारी रखें' बटन पर क्लिक करें।" },
      { q: "क्या मैं किसी विशेष नाम के जीतने की संभावना बढ़ा सकता हूँ?", a: "हाँ! सूची में प्रत्येक नाम के पास दिए गए '−' और '+' बटन से आप किसी भी स्लाइस का वजन 1x से 20x तक बढ़ा सकते हैं।" },
      { q: "क्या मेरे द्वारा डाले गए नाम किसी सर्वर पर सेव होते हैं?", a: "नहीं। आपकी गोपनीयता पूरी तरह सुरक्षित है—सभी नाम और सेव किए गए व्हील केवल आपके अपने डिवाइस के ब्राउज़र (localStorage) में रहते हैं।" }
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
      subtitle: "Buat roda nama, undian arisan, atau giveaway kustom Anda dalam empat langkah praktis.",
      steps: [
        { num: 1, title: "Ketik Nama atau Pilihan", desc: "Ketik satu per satu atau gunakan tombol 'Tempel Massal' untuk menyalin hingga 500 nama sekaligus dari Excel, WhatsApp, atau catatan. Anda juga bisa mengatur bobot peluang tiap nama dengan tombol −/+." },
        { num: 2, title: "Sesuaikan Desain & Suara", desc: "Pilih palet warna tema (Pelangi, Emas Kasino, Neon Siber, Pastel), atur durasi putaran (2 hingga 15 detik), dan pilih efek suara interaktif." },
        { num: 3, title: "Putar atau Hentikan Roda", desc: "Tekan tombol 'PUTAR RODA', klik bagian tengah roda, atau tekan tombol Spasi (Spacebar). Roda berputar mulus 60 FPS hingga menunjuk pemenang yang dipilih secara kriptografis." },
        { num: 4, title: "Kelola Hasil & Bagikan", desc: "Aktifkan 'Hapus Pemenang Setelah Putaran' untuk kocokan arisan atau undian bertahap tanpa duplikat, unduh riwayat CSV, atau bagikan lewat tautan dan kode QR." }
      ]
    },
    useCases: {
      title: "Solusi Cerdas untuk Pendidikan, Arisan & Hiburan",
      subtitle: "Dipakai harian oleh guru, penyelenggara arisan, kreator konten, dan tim kantor.",
      items: [
        { icon: "🏫", title: "Panggil Siswa & Kuis di Kelas", desc: "Bantu guru menunjuk siswa secara adil di layar proyektor dengan mode Layar Penuh serta membagi kelompok belajar tanpa pilih kasih." },
        { icon: "🎁", title: "Giveaway Live & Kocokan Arisan", desc: "Menentukan pemenang giveaway live di TikTok, Instagram, atau YouTube serta kocokan arisan keluarga dan RT secara transparan." },
        { icon: "💼", title: "Rapat Tim & Giliran Tugas Kantor", desc: "Menentukan urutan bicara saat daily standup meeting, jadwal piket, atau sesi icebreaker tim kerja jarak jauh." },
        { icon: "🎉", title: "Game Nongkrong & Pilihan Kuliner", desc: "Atasi kebingungan memilih menu makan siang bersama teman atau menentukan giliran tantangan Truth or Dare." }
      ]
    },
    fairness: {
      title: "Keamanan Kriptografi & Keadilan Matematik Penuh",
      subtitle: "Tanpa algoritma curang atau rekayasa pihak ketiga.",
      text1: "Kami tidak memakai generator acak biasa (Math.random), melainkan standar Web Cryptography API (<code>window.crypto.getRandomValues</code>) resmi pada peramban modern.",
      text2: "Mengambil entropi perangkat keras langsung dari sistem operasi perangkat Anda demi menjamin probabilitas yang merata sempurna bagi setiap peserta.",
      formula: "Peluang = Bobot_Pilihan / Total_Bobot (Bobot sama: 1 / N)",
      text3: "Jarum penunjuk secara presisi menyentuh sektor yang dihitung algoritma, dan Anda dapat memeriksa perbandingan peluang teoritis vs hasil nyata di panel Statistik."
    },
    comparison: {
      title: "Perbandingan: Roda Putar Online vs Metode Tradisional",
      headers: ["Kriteria", "Putar Roda Online", "Dadu / Koin Fisik", "Generator Angka Biasa", "Kocokan Kertas"],
      rows: [
        ["Sensasi & Visual", "⭐⭐⭐⭐⭐ Sangat Tinggi (60 FPS + Audio)", "⭐⭐ Sedang", "⭐ Rendah Sekali", "⭐⭐ Sedang"],
        ["Kapasitas & Bobot", "Hingga 500 entri + Bobot 1x–20x", "Terbatas 6-20 sisi", "Hanya deret angka", "Capek menulis & melipat kertas"],
        ["Keadilan & Transparansi", "CSPRNG Kriptografis", "Tergantung sudut lempar", "Algoritma dasar", "Rentan kertas terselip"],
        ["Eliminasi & Rekap Data", "Otomatis Sekali Klik + CSV", "Harus lempar ulang", "Harus edit rentang", "Harus pisahkan kertas"]
      ]
    },
    faqs: [
      { q: "Apakah alat putar roda ini benar-benar 100% gratis?", a: "Ya, 100% gratis selamanya tanpa batasan jumlah putaran, penyimpanan roda, maupun ekspor CSV, serta tanpa perlu mendaftar akun." },
      { q: "Berapa banyak nama peserta yang bisa saya masukkan?", a: "Anda dapat menambahkan hingga 500 nama, nomor undian, atau hadiah dalam satu roda menggunakan fitur Tempel Massal." },
      { q: "Bagaimana cara memastikan hasil kocokan arisan atau giveaway ini adil?", a: "Sistem kami menggunakan window.crypto.getRandomValues() dari Web Cryptography API yang menghasilkan angka acak murni berbasis perangkat keras dengan peluang tepat 1/N." },
      { q: "Bagaimana agar nama yang sudah menang tidak terpilih lagi?", a: "Centang opsi 'Hapus Pemenang Setelah Putaran' di bagian Pengaturan atau klik tombol 'Hapus Pemenang & Lanjut' saat pop-up pemenang muncul." },
      { q: "Bisakah saya mengatur bobot peluang berbeda untuk peserta tertentu?", a: "Bisa! Gunakan tombol '−' dan '+' di samping setiap nama pada daftar untuk mengatur bobot mulai dari 1x hingga 20x." },
      { q: "Apakah daftar nama arisan atau siswa saya disimpan di server?", a: "Tidak. Privasi Anda terjaga sepenuhnya karena seluruh daftar nama dan roda tersimpan hanya di memori lokal peramban perangkat Anda (localStorage)." }
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
