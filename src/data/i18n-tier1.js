const TIER1_LANGUAGES = {
  ja: { code: "ja", name: "日本語", flag: "🇯🇵", locale: "ja_JP", path: "/ja", label: "日本語" },
  ko: { code: "ko", name: "한국어", flag: "🇰🇷", locale: "ko_KR", path: "/ko", label: "한국어" },
  nl: { code: "nl", name: "Nederlands", flag: "🇳🇱", locale: "nl_NL", path: "/nl", label: "Nederlands" },
  sv: { code: "sv", name: "Svenska", flag: "🇸🇪", locale: "sv_SE", path: "/sv", label: "Svenska" },
  da: { code: "da", name: "Dansk", flag: "🇩🇰", locale: "da_DK", path: "/da", label: "Dansk" },
  no: { code: "no", name: "Norsk", flag: "🇳🇴", locale: "nb_NO", path: "/no", label: "Norsk" }
};

const TIER1_TRANSLATIONS = {
  ja: {
    metaTitle: "ルーレット オンライン 無料 – 名前のルーレット＆ランダム決定ツール",
    metaDesc: "無料のオンラインルーレット：最大500個の名前や選択肢を入力して即座に公平なランダム抽選。名前のルーレット、授業での指名、プレゼント企画、罰ゲーム決定に最適。登録不要。",
    heroTitle: "ルーレット オンライン 無料",
    heroHighlight: "名前のルーレット＆ランダム決定ツール",
    heroSubtitle: "名前、数字、選択肢を入力してルーレットを回すだけ。Web Cryptography APIに基づく暗号学的に公平な抽選が行えます。教室での指名、プレゼント抽選、チーム分け、パーティーゲームに最適です。",
    quickAnswer: "<strong>ルーレット オンラインとは？</strong> ブラウザ上で動作する高性能な無料ランダム抽選ツールです。暗号学的に安全な乱数生成（<code>crypto.getRandomValues</code>）を採用し、最大500件のエントリ登録、カラーテーマの変更、リアルな回転音、当選者の自動除外、リンクやQRコードでの共有に対応しています。",
    badges: {
      free: "100% 完全無料",
      noSignup: "登録・ログイン不要",
      secure: "暗号学的に完全公平",
      capacity: "最大500件登録可能",
      device: "スマホ・PC・タブレット対応"
    },
    ui: {
      spinBtn: "ルーレットを回す",
      spinning: "回転中...",
      resultDecided: "結果が決まりました",
      addNamesHeading: "🎯 選択肢・名前を追加",
      inputPlaceholder: "名前や選択肢を入力...",
      addBtn: "追加",
      bulkBtn: "📋 まとめて一括入力",
      bulkPlaceholder: "複数の名前を入力 — 1行に1つ、またはカンマ区切り\n例：\n佐藤\n鈴木\n高橋\n田中",
      bulkAddBtn: "すべてルーレットに追加",
      bulkCloseBtn: "キャンセル",
      clearAllBtn: "🗑 全てクリア",
      shuffleBtn: "🔀 シャッフル",
      sortBtn: "🔤 五十音順ソート",
      presetsHeading: "⚡ クイックプリセット",
      themesHeading: "🎨 カラーテーマ",
      settingsHeading: "⚙️ カスタマイズ＆設定",
      spinDuration: "回転時間",
      soundEffect: "効果音",
      soundVolume: "音量",
      soundTick: "機械式カチカチ音",
      soundDrum: "ドラムロール",
      soundFanfare: "勝利のファンファーレ",
      soundCheer: "歓声",
      soundNone: "消音（ミュート）",
      removeWinner: "当選者を自動除外",
      removeWinnerDesc: "当選した選択肢を自動的にリストから削除し、連続抽選で重複を防ぎます。",
      showConfetti: "紙吹雪でお祝い",
      showPopup: "当選ポップアップを表示",
      allowDuplicates: "重複登録を許可",
      fairnessAudit: "暗号学的公平性検証",
      fairnessDesc: "ブラウザのWeb Cryptography APIにより、各セクションの当選確率は完全に均等です。",
      historyHeading: "📜 抽選履歴",
      noSpinsYet: "まだ回転履歴はありません。ボタンを押してスタート！",
      clearHistory: "履歴をクリア",
      exportHistory: "CSV出力",
      statsHeading: "📊 当選確率統計",
      statsDesc: "理論上の確率と実際の当選結果をリアルタイム比較。",
      saveWheel: "💾 ルーレットを保存",
      loadWheel: "📂 保存したルーレット",
      shareWheel: "🔗 ルーレットを共有",
      shareSuccess: "共有リンクをクリップボードにコピーしました！",
      qrCodeTitle: "スマホでQRコードをスキャン",
      embedTitle: "Webサイトに埋め込む",
      fullscreen: "全画面表示",
      exitFullscreen: "全画面を終了",
      spinAgain: "もう一度回す",
      removeAndContinue: "当選者を除外して続ける",
      winnerTitle: "🎉 当選おめでとうございます！"
    },
    presets: {
      yesno: { label: "はい / いいえ", items: ["はい ✅", "いいえ ❌", "たぶん 🤔", "もう一度 🔄"] },
      drawnames: { label: "名前一覧", items: ["佐藤", "鈴木", "高橋", "田中", "伊藤", "渡辺", "山本", "中村", "小林", "加藤"] },
      dinner: { label: "今夜の夕食", items: ["ラーメン 🍜", "寿司 🍣", "焼肉 🥩", "カレー 🍛", "居酒屋 🍶", "パスタ 🍝", "ピザ 🍕", "うどん・そば 🍲"] },
      numbers: { label: "1から10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "真実か挑戦か", items: ["真実 🤫", "挑戦 😈", "真実 🤫", "挑戦 😈", "ダブル挑戦 🔥", "パス 🌟"] },
      giveaway: { label: "プレゼント抽選", items: ["特等賞 🏆", "1等賞 🥈", "2等賞 🥉", "ギフトカード 🎁", "シークレット賞 📦", "残念賞 🍀"] }
    },
    howTo: {
      title: "無料オンラインルーレットの使い方",
      subtitle: "わずか4ステップで、オリジナルの名前ルーレットを作成して抽選を開始できます。",
      steps: [
        {
          num: 1,
          title: "名前や選択肢を入力",
          desc: "入力ボックスに名前を1つずつ入力するか、プリセットを選ぶか、「まとめて一括入力」からExcelやメモ帳のリストを直接貼り付けます。"
        },
        {
          num: 2,
          title: "テーマとサウンドを調整",
          desc: "お好みのカラーパレット（カジノゴールド、ネオン、パステルなど）を選び、回転音や回転速度（2〜20秒）をお好みに設定します。"
        },
        {
          num: 3,
          title: "ルーレットを回す",
          desc: "「ルーレットを回す」ボタンをクリックするか、スペースキーを押します。リアルな減速アニメーションを経て、当選項目でピタリと止まり紙吹雪が舞います。"
        },
        {
          num: 4,
          title: "結果管理と共有",
          desc: "「当選者を除外」を選んで次回に重複しないようにするか、履歴を確認し、生成されたリンクやQRコードで仲間と共有します。"
        }
      ]
    },
    useCases: {
      title: "主な活用シーン：学校教育・ビジネス・エンタメ",
      subtitle: "世界中の教師、チームリーダー、配信者、イベント主催者に選ばれています。",
      items: [
        {
          icon: "🏫",
          title: "学校の授業・発表者決め",
          desc: "電子黒板やプロジェクターに投影して、公平で楽しい生徒指名やグループ分け、日直決めを行えます。"
        },
        {
          icon: "🎁",
          title: "YouTube / Twitch 配信での抽選会",
          desc: "フォロワーへのプレゼント企画や参加型ゲームの順番決めなど、視聴者に完全な透明性を提供できます。"
        },
        {
          icon: "💼",
          title: "職場でのミーティング・朝礼",
          desc: "アジャイル開発のデイリースタンドアップでの発言順、当番決め、コードレビューの担当割り振りに。"
        },
        {
          icon: "🎉",
          title: "パーティーゲーム・日常の決断",
          desc: "「今夜何食べる？」「誰がゲームの先攻？」などの日常の迷いをルーレットで楽しくスッキリ解決。"
        }
      ]
    },
    fairness: {
      title: "暗号学的公平性と数学的アルゴリズム",
      subtitle: "一切の操作や作為のない、完全な真のランダム性を保証します。",
      text1: "一般的なルーレットツールは周期性や偏りが生じる標準的な擬似乱数（Math.random）を使用していますが、当サイトは最新のWeb Cryptography API（<code>window.crypto.getRandomValues</code>）を採用しています。",
      text2: "お使いのデバイスのOSカーネルから物理的なエントロピーを取得するため、全セクションの当選確率は数学的に完全に均一です：",
      formula: "当選確率 = 1 / 登録選択肢総数",
      text3: "画面上の針の停止角度と暗号学的に選出されたインデックスは精密に連動しており、いかなる作為も排除されています。"
    },
    comparison: {
      title: "比較表：オンラインルーレット vs 従来の抽選方法",
      headers: ["比較項目", "当サイトのルーレット", "サイコロ・コイントス", "単純な乱数生成器", "紙のくじ引き"],
      rows: [
        ["演出と盛り上がり", "⭐⭐⭐⭐⭐ 最高（音と滑らかな物理演算）", "⭐⭐⭐ 普通（目の前の机のみ）", "⭐ 低い（静止した数字のみ）", "⭐⭐⭐ 普通（紙を開くだけ）"],
        ["登録できる数", "最大500個の自由なテキスト", "最大6〜20面程度", "数字のみ", "手書きが非常に大変"],
        ["公平性と検証性", "暗号学的CSPRNG（最高水準）", "投げ方や摩耗に左右される", "単純な擬似乱数", "折り目や手触りで判別可能"],
        ["当選者の自動除外", "ワンクリックで自動除外可能", "振り直しの手間が必要", "フィルター設定の変更が必要", "手動で紙を捨てる必要がある"]
      ]
    },
    faqs: [
      {
        q: "ルーレットの利用は本当に完全無料ですか？",
        a: "はい、回数無制限で完全無料です。会員登録、メールアドレス登録、アプリのインストールは一切不要です。"
      },
      {
        q: "最大何個の名前や選択肢を入力できますか？",
        a: "1つのルーレットに最大500個まで入力できます。文字の大きさや角度は自動的に最適化されます。"
      },
      {
        q: "抽選結果は本当に公平ですか？",
        a: "はい。ブラウザ標準のWeb Cryptography APIを使用しており、作為的な偏りやイカサマは数学的に不可能です。"
      },
      {
        q: "当選した人を次回から除外できますか？",
        a: "はい。「当選者を自動除外」にチェックを入れるか、当選画面のボタンを押すと、自動的にリストから削除されます。"
      },
      {
        q: "スマートフォンでも動きますか？",
        a: "はい。iPhone、iPad、Androidスマートフォン、タブレット、PCの全画面サイズに最適化されています。"
      },
      {
        q: "作成したルーレットを保存したり共有できますか？",
        a: "はい。「ルーレットを共有」ボタンから専用URLやQRコードを発行でき、誰とでも同じルーレットを共有できます。"
      }
    ]
  },

  ko: {
    metaTitle: "온라인 돌림판 룰렛 무료 – 이름 뽑기 & 랜덤 선택기",
    metaDesc: "무료 온라인 돌림판 룰렛: 최대 500개의 이름이나 선택지를 추가하여 공정한 랜덤 추첨을 진행하세요. 수업 발표자 뽑기, 이벤트 경품 추첨, 점심 메뉴 고르기. 무설치·무료.",
    heroTitle: "온라인 돌림판 룰렛 무료",
    heroHighlight: "이름 뽑기 & 랜덤 결정 룰렛",
    heroSubtitle: "이름, 숫자, 항목을 입력하고 룰렛을 돌리세요. 브라우저 Web Cryptography 기반의 공정한 알고리즘으로 조작 없는 투명한 추첨을 보장합니다.",
    quickAnswer: "<strong>온라인 돌림판 룰렛이란?</strong> 브라우저에서 바로 작동하는 초고속 무료 랜덤 추첨 도구입니다. 암호학적 난수 생성(<code>crypto.getRandomValues</code>)을 기반으로 최대 500개 항목 지원, 사운드 효과, 당첨자 자동 제거, 링크 및 QR 코드 공유 기능을 제공합니다.",
    badges: {
      free: "100% 평생 무료",
      noSignup: "회원가입 필요 없음",
      secure: "암호학적 공정성 보장",
      capacity: "최대 500개 입력 가능",
      device: "모바일 & PC 완벽 지원"
    },
    ui: {
      spinBtn: "돌림판 돌리기",
      spinning: "돌아가는 중...",
      resultDecided: "결과가 결정되었습니다",
      addNamesHeading: "🎯 이름 또는 항목 추가",
      inputPlaceholder: "이름, 항목, 경품 입력...",
      addBtn: "추가",
      bulkBtn: "📋 대량 붙여넣기",
      bulkPlaceholder: "여러 이름을 한 줄에 하나씩 또는 쉼표로 구분하여 붙여넣으세요\n예시:\n김민수\n이서연\n박도윤\n정하은",
      bulkAddBtn: "모두 룰렛에 추가",
      bulkCloseBtn: "취소",
      clearAllBtn: "🗑 전체 삭제",
      shuffleBtn: "🔀 무작위 섞기",
      sortBtn: "🔤 가나다순 정렬",
      presetsHeading: "⚡ 빠른 프리셋",
      themesHeading: "🎨 테마 색상",
      settingsHeading: "⚙️ 설정 및 사운드",
      spinDuration: "회전 시간",
      soundEffect: "효과음",
      soundVolume: "볼륨",
      soundTick: "기계식 딸깍음",
      soundDrum: "긴장감 넘치는 드럼롤",
      soundFanfare: "승리의 팡파르",
      soundCheer: "환호성",
      soundNone: "무음 (음소거)",
      removeWinner: "추첨 후 당첨자 자동 제거",
      removeWinnerDesc: "선택된 항목을 자동으로 제거하여 중복 당첨 없는 연속 추첨을 진행합니다.",
      showConfetti: "축하 꽃가루 효과",
      showPopup: "당첨 팝업창 표시",
      allowDuplicates: "중복 항목 허용",
      fairnessAudit: "암호학적 공정성 검증",
      fairnessDesc: "브라우저 내장 Web Cryptography API를 사용하여 모든 항목이 정확히 동일한 확률을 갖습니다.",
      historyHeading: "📜 추첨 기록",
      noSpinsYet: "아직 회전 기록이 없습니다. 버튼을 눌러 시작하세요!",
      clearHistory: "기록 지우기",
      exportHistory: "CSV 파일 내보내기",
      statsHeading: "📊 당첨 빈도 통계",
      statsDesc: "이론적 확률과 실제 당첨 횟수를 비교 분석합니다.",
      saveWheel: "💾 룰렛 저장하기",
      loadWheel: "📂 내 저장된 룰렛",
      shareWheel: "🔗 룰렛 공유하기",
      shareSuccess: "공유 링크가 클립보드에 복사되었습니다!",
      qrCodeTitle: "스마트폰으로 QR 코드 스캔",
      embedTitle: "웹사이트에 위젯 삽입",
      fullscreen: "전체화면 모드",
      exitFullscreen: "전체화면 종료",
      spinAgain: "다시 돌리기",
      removeAndContinue: "당첨자 제외하고 계속하기",
      winnerTitle: "🎉 당첨을 축하합니다!"
    },
    presets: {
      yesno: { label: "예 / 아니오", items: ["예 ✅", "아니오 ❌", "글쎄 🤔", "다시 질문 🔄"] },
      drawnames: { label: "이름 명단", items: ["김민수", "이서연", "박도윤", "정하은", "최지우", "강예준", "조수아", "윤시우", "장지민", "임유진"] },
      dinner: { label: "오늘 뭐 먹지", items: ["삼겹살 🥩", "치킨 🍗", "김치찌개 🍲", "피자 🍕", "초밥 🍣", "짜장면 🍜", "분식 떡볶이 🍢", "샐러드 🥗"] },
      numbers: { label: "1부터 10까지", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "진실 혹은 도전", items: ["진실 🤫", "도전 😈", "진실 🤫", "도전 😈", "더블 도전 🔥", "패스 🌟"] },
      giveaway: { label: "경품 추첨", items: ["대상 🏆", "금상 🥈", "은상 🥉", "상품권 🎁", "행운의 선물 📦", "다음 기회에 🍀"] }
    },
    howTo: {
      title: "무료 온라인 돌림판 사용 방법",
      subtitle: "간단한 4단계로 나만의 맞춤 룰렛을 만들고 추첨하세요.",
      steps: [
        {
          num: 1,
          title: "이름 또는 선택지 입력",
          desc: "이름을 하나씩 입력하거나 '대량 붙여넣기' 버튼을 눌러 엑셀이나 텍스트 문서의 명단을 한 번에 추가합니다."
        },
        {
          num: 2,
          title: "디자인과 효과음 설정",
          desc: "원하는 색상 테마를 선택하고 현실감 넘치는 회전 사운드와 회전 시간(2초~20초)을 조절합니다."
        },
        {
          num: 3,
          title: "돌림판 돌리기",
          desc: "'돌림판 돌리기' 버튼을 누르거나 스페이스바를 누릅니다. 부드러운 감속 물리 효과와 함께 최종 당첨 항목에 멈춥니다."
        },
        {
          num: 4,
          title: "결과 확인 및 공유",
          desc: "연속 추첨을 위해 당첨자를 제거하거나 통계를 확인하고 링크 및 QR 코드로 학생이나 동료에게 공유합니다."
        }
      ]
    },
    useCases: {
      title: "다양한 활용 분야: 교육, 업무 및 일상 모임",
      subtitle: "전 세계 수많은 선생님, 팀 리더, 크리에이터들이 매일 사용합니다.",
      items: [
        {
          icon: "🏫",
          title: "교실 수업 발표자 뽑기",
          desc: "전자칠판이나 프로젝터에 띄워 공정하게 학생을 호명하고 조 편성을 진행할 수 있습니다."
        },
        {
          icon: "🎁",
          title: "라이브 방송 경품 이벤트",
          desc: "유튜브, 치지직, 아프리카TV 라이브 중 시청자 추첨을 투명하고 흥미진진하게 진행합니다."
        },
        {
          icon: "💼",
          title: "회사 미팅 및 팀 빌딩",
          desc: "스크럼 회의 발언 순서 결정, 당직 근무 배정, 사내 이벤트 추첨을 불만 없이 공정하게 해결합니다."
        },
        {
          icon: "🎉",
          title: "점심 메뉴 고르기 및 파티 게임",
          desc: "더 이상 점심 메뉴로 고민하지 마세요! 보드게임 순서 정하기나 술자리 벌칙에도 제격입니다."
        }
      ]
    },
    fairness: {
      title: "암호학적 보안성과 완벽한 공정성",
      subtitle: "어떠한 알고리즘 편향도 없는 순수한 수학적 무작위성을 구현합니다.",
      text1: "일반적인 룰렛 사이트는 규칙성이 드러날 수 있는 Math.random을 사용하지만, 당사 플랫폼은 최신 Web Cryptography API(<code>window.crypto.getRandomValues</code>)를 사용합니다.",
      text2: "사용자 기기의 운영체제 커널에서 발생하는 하드웨어 엔트로피를 직접 사용하여 모든 칸에 완벽히 균등한 확률을 부여합니다:",
      formula: "당첨 확률 = 1 / 전체_항목_수",
      text3: "바늘의 시각적 멈춤 각도는 알고리즘으로 선정된 인덱스와 정확히 일치하여 완전한 신뢰를 보장합니다."
    },
    comparison: {
      title: "비교: 온라인 돌림판 vs 기존 추첨 방식",
      headers: ["비교 항목", "온라인 돌림판 룰렛", "주사위 / 동전 던지기", "단순 숫자 생성기", "종이 제비뽑기"],
      rows: [
        ["시각적 재미와 긴장감", "⭐⭐⭐⭐⭐ 최고 (물리 애니메이션 & 음향)", "⭐⭐⭐ 보통 (오프라인 테이블 한정)", "⭐ 매우 낮음 (텍스트 숫자만 표시)", "⭐⭐⭐ 보통 (종이 펴기)"],
        ["선택지 수용 한도", "최대 500개 긴 텍스트 지원", "최대 6~20면 한정", "숫자만 지원", "일일이 손으로 써야 함"],
        ["조작 방지 공정성", "CSPRNG 암호학적 난수", "던지는 힘과 각도에 영향", "기본 Math.random", "손 감각으로 부정 가능"],
        ["당첨자 자동 제외", "클릭 한 번으로 즉시 제외", "다시 굴려야 함", "필터 재설정 필요", "종이를 직접 버려야 함"]
      ]
    },
    faqs: [
      {
        q: "돌림판 이용료는 정말 무료인가요?",
        a: "네, 회전 횟수 제한 없이 100% 영구 무료입니다. 회원가입이나 앱 다운로드도 전혀 필요 없습니다."
      },
      {
        q: "항목은 최대 몇 개까지 등록할 수 있나요?",
        a: "최대 500개까지 등록 가능하며, 글자 크기가 자동으로 조절되어 깔끔하게 표시됩니다."
      },
      {
        q: "추첨 결과가 조작되지 않았다는 것을 어떻게 알 수 있나요?",
        a: "브라우저 내장 하드웨어 엔트로피 기반의 Web Cryptography API를 적용하여 누구도 결과를 예측하거나 개입할 수 없습니다."
      },
      {
        q: "뽑힌 사람을 다음 회전에서 뺄 수 있나요?",
        a: "'당첨자 자동 제거' 옵션을 켜두시면 다음 회전부터 자동으로 목록에서 빠집니다."
      },
      {
        q: "스마트폰에서도 잘 작동하나요?",
        a: "네, 아이폰, 갤럭시, 아이패드 및 모든 데스크톱 PC 브라우저에 최적화되어 있습니다."
      }
    ]
  },

  nl: {
    metaTitle: "Rad van Fortuin Online Gratis – Namen Kiezer & Beslisrad",
    metaDesc: "Draai gratis aan het online rad: voeg tot 500 namen of keuzes toe. Namen kiezer voor de klas, winacties, loterijen en snelle beslissingen. Geen registratie.",
    heroTitle: "Rad van Fortuin Online Gratis",
    heroHighlight: "Namen Kiezer & Willekeurig Draairad",
    heroSubtitle: "Voer namen, cijfers of keuzes in en draai aan het rad voor eerlijke, cryptografisch bewezen beslissingen. Ideaal voor leraren, giveaways en spellen.",
    quickAnswer: "<strong>Wat is het Online Rad van Fortuin?</strong> Een gratis online tool voor willekeurige selecties op basis van Web Cryptography (<code>crypto.getRandomValues</code>). Ondersteunt tot 500 opties, geluidseffecten, automatische winnaarsverwijdering en delen via QR-code.",
    badges: {
      free: "100% Altijd Gratis",
      noSignup: "Geen Registratie Vereist",
      secure: "Cryptografisch Eerlijk",
      capacity: "Tot 500 Namen",
      device: "Geoptimaliseerd voor Mobiel & PC"
    },
    ui: {
      spinBtn: "DRAAI HET RAD",
      spinning: "DRAAIT...",
      resultDecided: "Het Rad Heeft Gekozen",
      addNamesHeading: "🎯 Namen of Opties Toevoegen",
      inputPlaceholder: "Typ een naam, optie of prijs...",
      addBtn: "Toevoegen",
      bulkBtn: "📋 Meerdere Namen Plakken",
      bulkPlaceholder: "Plak meerdere namen — één per regel of gescheiden door komma's\nbijv.:\nDaan\nEmma\nLiam\nSophie",
      bulkAddBtn: "Alles Toevoegen aan Rad",
      bulkCloseBtn: "Annuleren",
      clearAllBtn: "🗑 Alles Wissen",
      shuffleBtn: "🔀 Schudden",
      sortBtn: "🔤 Sorteren A-Z",
      presetsHeading: "⚡ Snelle Voorbeelden",
      themesHeading: "🎨 Kleurenthema",
      settingsHeading: "⚙️ Instellingen & Geluid",
      spinDuration: "Draaiduur",
      soundEffect: "Geluidseffect",
      soundVolume: "Volume",
      soundTick: "Mechanische Klik",
      soundDrum: "Tromgeroffel",
      soundFanfare: "Overwinningsfanfare",
      soundCheer: "Publieksgejuich",
      soundNone: "Dempen / Stil",
      removeWinner: "Verwijder Winnaar na Draai",
      removeWinnerDesc: "Verwijdert de getrokken optie automatisch voor opeenvolgende rondes zonder dubbelen.",
      showConfetti: "Confetti bij Winst",
      showPopup: "Toon Winnaar Pop-up",
      allowDuplicates: "Dubbele Opties Toestaan",
      fairnessAudit: "Eerlijkheidsverificatie",
      fairnessDesc: "Echte willekeur via Web Cryptography API garandeert gelijke winkansen voor elk vakje.",
      historyHeading: "📜 Draaigeschiedenis",
      noSpinsYet: "Nog geen draaibeurten. Druk op de knop om te beginnen!",
      clearHistory: "Geschiedenis Wissen",
      exportHistory: "Exporteer CSV",
      statsHeading: "📊 Statistieken",
      statsDesc: "Vergelijk theoretische kansen met de werkelijke uitkomsten.",
      saveWheel: "💾 Rad Opslaan",
      loadWheel: "📂 Mijn Opgeslagen Raden",
      shareWheel: "🔗 Rad Delen",
      shareSuccess: "Link gekopieerd naar klembord!",
      qrCodeTitle: "Scan QR-code met Telefoon",
      embedTitle: "Rad Insluiten op Website",
      fullscreen: "Volledig Scherm",
      exitFullscreen: "Volledig Scherm Sluiten",
      spinAgain: "Nog Eens Draaien",
      removeAndContinue: "Winnaar Verwijderen & Doorgaan",
      winnerTitle: "We Hebben een Winnaar!"
    },
    presets: {
      yesno: { label: "Ja / Nee", items: ["Ja ✅", "Nee ❌", "Misschien 🤔", "Vraag opnieuw 🔄"] },
      drawnames: { label: "Namenlijst", items: ["Noah", "Emma", "Sem", "Julia", "Lucas", "Mila", "Liam", "Tess", "Levi", "Sophie"] },
      dinner: { label: "Avondeten", items: ["Pizza 🍕", "Sushi 🍣", "Pannenkoeken 🥞", "Pasta 🍝", "Burgers 🍔", "Friet 🍟", "Salade 🥗", "Thais 🍜"] },
      numbers: { label: "1 tot 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Doen / Durf / Waarheid", items: ["Waarheid 🤫", "Durf 😈", "Waarheid 🤫", "Durf 😈", "Dubbel Durf 🔥", "Vrijstelling 🌟"] },
      giveaway: { label: "Loterij", items: ["Hoofdprijs 🏆", "2e Prijs 🥈", "3e Prijs 🥉", "Cadeaubon 🎁", "Verrassing 📦", "Volgende Keer Beter 🍀"] }
    },
    howTo: {
      title: "Hoe Werkt het Online Rad van Fortuin?",
      subtitle: "In vier simpele stappen naar een eerlijke willekeurige beslissing.",
      steps: [
        {
          num: 1,
          title: "Opties Invoeren",
          desc: "Typ namen één voor één in of gebruik 'Meerdere Namen Plakken' om een complete lijst uit Excel in te laden."
        },
        {
          num: 2,
          title: "Kleuren & Geluid Kiezen",
          desc: "Kies een modern kleurenthema en selecteer bijpassend geluid zoals een tikkend rad of tromgeroffel."
        },
        {
          num: 3,
          title: "Draai aan het Rad",
          desc: "Klik op 'DRAAI HET RAD' of druk op de spatiebalk. De realistische natuurkundige animatie remt geleidelijk af tot de winnaar."
        },
        {
          num: 4,
          title: "Resultaten Beheren & Delen",
          desc: "Verwijder winnaars voor volgende rondes, bekijk de statistieken of deel het rad via een unieke link of QR-code."
        }
      ]
    },
    useCases: {
      title: "Veelgebruikte Toepassingen: Onderwijs, Werk en Feest",
      subtitle: "Ontdek waarom docenten, teamleiders en streamers dagelijks op onze tool vertrouwen.",
      items: [
        {
          icon: "🏫",
          title: "In het Klaslokaal",
          desc: "Docenten kiezen leerlingen voor beurten, maken groepjes en verdelen taken op het digibord zonder voortrekkerij."
        },
        {
          icon: "🎁",
          title: "Online Giveaways & Streams",
          desc: "Voor transparante winacties op YouTube, Twitch of Instagram voor de ogen van uw volgers."
        },
        {
          icon: "💼",
          title: "Vergaderingen & Agile Standups",
          desc: "Bepaal de spreekvolgorde in meetings of wijs weekenddiensten onpartijdig toe."
        },
        {
          icon: "🎉",
          title: "Spelletjesavonden & Besluiteloosheid",
          desc: "Wat eten we vanavond? Wie begint met het bordspel? Laat het rad de knoop doorhakken!"
        }
      ]
    },
    fairness: {
      title: "Cryptografische Veiligheid en Eerlijkheid",
      subtitle: "Wiskundig bewezen willekeur zonder manipulatie.",
      text1: "Veel simpele websites gebruiken basisformules met voorspelbare patronen. Ons rad maakt gebruik van de officiële Web Cryptography API (<code>window.crypto.getRandomValues</code>).",
      text2: "De willekeurige getallen worden direct gegenereerd door hardware-entropie van uw besturingssysteem. Elk vakje heeft exact dezelfde winkans:",
      formula: "Kans = 1 / Totaal_Aantal_Vakken",
      text3: "De visuele wijzer stopt tot op de pixel nauwkeurig op de berekende index, wat absolute eerlijkheid waarborgt."
    },
    comparison: {
      title: "Vergelijking: Online Rad vs Andere Methoden",
      headers: ["Criterium", "Ons Online Rad", "Dobbelstenen / Munt", "Eenvoudige Nummergenerator", "Briefjes in een Hoed"],
      rows: [
        ["Spanning & Beleving", "⭐⭐⭐⭐⭐ Maximaal (Audio & Animatie)", "⭐⭐⭐ Gemiddeld (Alleen op tafel)", "⭐ Laag (Statische cijfers)", "⭐⭐⭐ Gemiddeld (Handmatig vouwen)"],
        ["Capaciteit", "Tot 500 eigen tekstelementen", "Maximaal 6 tot 20 zijden", "Alleen getallen", "Erg bewerkelijk om te schrijven"],
        ["Onpartijdigheid", "CSPRNG Cryptografie (Hoogste niveau)", "Afhankelijk van werpkracht", "Zwakker algoritme", "Kans op onevenredig grabbelen"],
        ["Winnaar Uitsluiten", "Automatisch met één klik", "Vereist opnieuw gooien", "Opnieuw instellen nodig", "Handmatig briefje wegleggen"]
      ]
    },
    faqs: [
      {
        q: "Is dit rad van fortuin echt gratis?",
        a: "Ja, 100% gratis zonder registratie, verborgen kosten of limieten op het aantal draaibeurten."
      },
      {
        q: "Hoeveel namen kan ik maximaal invoeren?",
        a: "U kunt tot 500 namen of opties toevoegen. De lettergrootte past zich automatisch aan voor optimale leesbaarheid."
      },
      {
        q: "Hoe weet ik zeker dat de uitkomst eerlijk is?",
        a: "Dankzij de Web Cryptography API van uw browser, die echte willekeurige getallen genereert uit hardware-entropie."
      },
      {
        q: "Kan ik getrokken namen uitsluiten van volgende rondes?",
        a: "Zeker, vink 'Verwijder Winnaar na Draai' aan om lootjes te trekken zonder dubbele winnaars."
      },
      {
        q: "Werkt het goed op telefoons en tablets?",
        a: "Ja, de site is volledig geoptimaliseerd voor touchscreens op iPhone, iPad, Android en pc's."
      }
    ]
  },

  sv: {
    metaTitle: "Lyckohjul Online Gratis – Slumpmässigt Namnhjul & Beslutshjul",
    metaDesc: "Snurra lyckohjulet online gratis: lägg till upp till 500 namn eller val. Namnhjul för skola, utlottningar, tävlingar och snabba beslut. Ingen inloggning.",
    heroTitle: "Lyckohjul Online Gratis",
    heroHighlight: "Namnhjul & Slumpmässig Väljare",
    heroSubtitle: "Mata in namn, siffror eller alternativ och snurra hjulet för rättvisa, kryptografiskt verifierade slumpval. Perfekt för klassrum, giveaways och fest.",
    quickAnswer: "<strong>Vad är Lyckohjul Online?</strong> Ett gratis digitalt slumpverktyg i webbläsaren baserat på Web Cryptography API (<code>crypto.getRandomValues</code>). Stödjer upp till 500 alternativ, ljudeffekter, automatisk vinnarborttagning och delning via länk eller QR-kod.",
    badges: {
      free: "100% Gratis För Alltid",
      noSignup: "Ingen Registrering",
      secure: "Kryptografiskt Rättvist",
      capacity: "Upp till 500 Namn",
      device: "Optimerad för Mobil & Dator"
    },
    ui: {
      spinBtn: "SNURRA HJULET",
      spinning: "SNURRAR...",
      resultDecided: "Hjulet Har Bestämt",
      addNamesHeading: "🎯 Lägg till Namn eller Val",
      inputPlaceholder: "Skriv ett namn, val eller pris...",
      addBtn: "Lägg till",
      bulkBtn: "📋 Klistra in Flera Namn",
      bulkPlaceholder: "Klistra in flera namn — ett per rad eller separerade med kommatecken\nt.ex.:\nWilliam\nAstrid\nLucas\nElla",
      bulkAddBtn: "Lägg till Alla i Hjulet",
      bulkCloseBtn: "Avbryt",
      clearAllBtn: "🗑 Rensa Allt",
      shuffleBtn: "🔀 Blanda",
      sortBtn: "🔤 Sortera A-Ö",
      presetsHeading: "⚡ Snabbmallar",
      themesHeading: "🎨 Färgtema",
      settingsHeading: "⚙️ Inställningar & Ljud",
      spinDuration: "Snurrtid",
      soundEffect: "Ljudeffekt",
      soundVolume: "Volym",
      soundTick: "Mekaniskt Klickande",
      soundDrum: "Trumvirvel",
      soundFanfare: "Segerfanfar",
      soundCheer: "Publikjubel",
      soundNone: "Tyst läge",
      removeWinner: "Ta Bort Vinnare Efter Snurr",
      removeWinnerDesc: "Tar automatiskt bort det dragna alternativet för utlottningar utan upprepning.",
      showConfetti: "Konfettiregn",
      showPopup: "Visa Vinnarruta",
      allowDuplicates: "Tillåt Dubbletter",
      fairnessAudit: "Kryptografisk Granskning",
      fairnessDesc: "Slumpmässighet via Web Cryptography API garanterar identiska vinstchanser för alla fält.",
      historyHeading: "📜 Snurrhistorik",
      noSpinsYet: "Inga snurr än. Klicka på knappen för att starta!",
      clearHistory: "Rensa Historik",
      exportHistory: "Exportera CSV",
      statsHeading: "📊 Vinststatistik",
      statsDesc: "Jämför teoretisk sannolikhet med faktiska utfall.",
      saveWheel: "💾 Spara Hjul",
      loadWheel: "📂 Mina Sparade Hjul",
      shareWheel: "🔗 Dela Hjul",
      shareSuccess: "Länk kopierad till urklipp!",
      qrCodeTitle: "Skanna QR-kod med Mobilen",
      embedTitle: "Bädda in på Hemsida",
      fullscreen: "Helskärmsläge",
      exitFullscreen: "Lämna Helskärm",
      spinAgain: "Snurra Igen",
      removeAndContinue: "Ta Bort Vinnare & Fortsätt",
      winnerTitle: "Vi Har En Vinnare!"
    },
    presets: {
      yesno: { label: "Ja / Nej", items: ["Ja ✅", "Nej ❌", "Kanske 🤔", "Fråga igen 🔄"] },
      drawnames: { label: "Namnlista", items: ["William", "Astrid", "Liam", "Maja", "Noah", "Vera", "Hugo", "Alma", "Oliver", "Selma"] },
      dinner: { label: "Middag", items: ["Pizza 🍕", "Hamburgare 🍔", "Sushi 🍣", "Tacos 🌮", "Pasta 🍝", "Köttbullar 🥘", "Sallad 🥗", "Wok 🍜"] },
      numbers: { label: "1 till 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Sanning eller KONSEKVENS", items: ["Sanning 🤫", "Konsekvens 😈", "Sanning 🤫", "Konsekvens 😈", "Dubbel Konsekvens 🔥", "Frikort 🌟"] },
      giveaway: { label: "Lotteri", items: ["Första Pris 🏆", "Andra Pris 🥈", "Tredje Pris 🥉", "Presentkort 🎁", "Överraskning 📦", "Bättre Lycka Nästa Gång 🍀"] }
    },
    howTo: {
      title: "Så Fungerar Lyckohjulet Online",
      subtitle: "Skapa och snurra ditt eget namnhjul i fyra enkla steg.",
      steps: [
        {
          num: 1,
          title: "Skriv in Namn eller Val",
          desc: "Mata in namn ett och ett eller använd 'Klistra in Flera Namn' för att ladda upp hela klasslistan på en sekund."
        },
        {
          num: 2,
          title: "Välj Utseende och Ljud",
          desc: "Välj en attraktiv färgpalett och autentiska ljudeffekter som hjulets klickande eller trumvirvel."
        },
        {
          num: 3,
          title: "Snurra Hjulet",
          desc: "Tryck på 'SNURRA HJULET' eller mellanslagstangenten. Den fysikbaserade animationen saktar in mjukt och stannar på vinnaren."
        },
        {
          num: 4,
          title: "Hantera och Dela",
          desc: "Ta bort vinnaren för nästa dragning, granska statistiken eller dela hjulet med elever eller tittare via QR-kod."
        }
      ]
    },
    useCases: {
      title: "Användningsområden: Skola, Företag och Fritid",
      subtitle: "Ett oumbärligt verktyg för lärare, mötesledare och evenemang.",
      items: [
        {
          icon: "🏫",
          title: "Skola och Undervisning",
          desc: "Låt hjulet utse vem som ska svara, bilda arbetsgrupper och fördela klassrumssysslor utan partiskhet."
        },
        {
          icon: "🎁",
          title: "Tävlingar och Livestreams",
          desc: "Gör utlottningar live på Twitch, YouTube eller TikTok med full transparens inför dina följare."
        },
        {
          icon: "💼",
          title: "Möten och Arbetsplatser",
          desc: "Slumpa talarordning på morgonmötet eller fördela jourpass och arbetsuppgifter rättvist."
        },
        {
          icon: "🎉",
          title: "Spelkvällar och Vardagsbeslut",
          desc: "Slipp diskussioner om vad familjen ska äta till middag eller vem som börjar brädspelet."
        }
      ]
    },
    fairness: {
      title: "Kryptografisk Äkthet och Rättvisa",
      subtitle: "Matematiskt felfri slumpmässighet utan manipulation.",
      text1: "Enkla verktyg använder förutsägbara matematiska funktioner. Vårt hjul drivs av webbläsarens inbyggda Web Cryptography API (<code>window.crypto.getRandomValues</code>).",
      text2: "Slumptalen hämtas direkt från operativsystemets hårdvaruentropi, vilket ger varje fält exakt samma vinstchans:",
      formula: "Sannolikhet = 1 / Totalt_Antal_Fält",
      text3: "Pilens visuella stopposition matchar det uträknade indexet med absolut precision."
    },
    comparison: {
      title: "Jämförelse: Onlinehjul vs Traditionella Metoder",
      headers: ["Kriterium", "Vårt Onlinehjul", "Tärning / Slantsingling", "Enkel Slumpgenerator", "Lappar i en Hatt"],
      rows: [
        ["Spänning och Inlevelse", "⭐⭐⭐⭐⭐ Högsta (Ljud och Fysik)", "⭐⭐⭐ Medel (Endast på bordet)", "⭐ Låg (Bara statisk text)", "⭐⭐⭐ Medel (Manuell öppning)"],
        ["Kapacitet", "Upp till 500 valfria textalternativ", "Maximalt 6 till 20 sidor", "Endast siffror", "Tidskrävande att skriva"],
        ["Manipulationssäkerhet", "CSPRNG Kryptografi (Högsta klass)", "Påverkas av kastyta", "Enkel pseudo-slump", "Risk för ojämn blandning"],
        ["Utesluta Vinnare", "Automatiskt med ett klick", "Kräver omkast", "Kräver omkonfigurering", "Måste plockas bort för hand"]
      ]
    },
    faqs: [
      {
        q: "Är lyckohjulet verkligen gratis att använda?",
        a: "Ja, 100% gratis för alltid utan registrering, begränsningar eller dolda kostnader."
      },
      {
        q: "Hur många namn kan jag lägga till?",
        a: "Du kan lägga till upp till 500 namn. Textstorleken anpassas automatiskt så att allt förblir tydligt."
      },
      {
        q: "Hur vet jag att resultatet är opartiskt?",
        a: "Tack vare Web Cryptography API som genererar äkta kryptografisk slump direkt från din enhet."
      },
      {
        q: "Kan jag ta bort den som vunnit inför nästa snurr?",
        a: "Ja, aktivera bara 'Ta Bort Vinnare Efter Snurr' för utlottningar utan dubbeldragningar."
      },
      {
        q: "Fungerar verktyget bra i mobilen?",
        a: "Ja, sidan är fullt optimerad för pekskärmar på iPhone, iPad, Android och datorer."
      }
    ]
  },

  da: {
    metaTitle: "Lykkehjul Online Gratis – Navnehjul & Tilfældig Vælger",
    metaDesc: "Drej lykkehjulet online gratis: tilføj op til 500 navne eller valg. Navnehjul til klasseværelset, lodtrækninger og hurtige beslutninger. Uden oprettelse.",
    heroTitle: "Lykkehjul Online Gratis",
    heroHighlight: "Navnehjul & Tilfældig Vælger",
    heroSubtitle: "Indtast navne, tal eller valgmuligheder og drej hjulet for retfærdige, kryptografisk sikrede lodtrækninger. Oplagt til undervisning, konkurrencer og spil.",
    quickAnswer: "<strong>Hvad er Lykkehjul Online?</strong> Et gratis online værktøj til tilfældig udvælgelse via Web Cryptography API (<code>crypto.getRandomValues</code>). Håndterer op til 500 felter, lydeffekter, automatisk vinderfjernelse og deling via QR-kode.",
    badges: {
      free: "100% Gratis Altid",
      noSignup: "Ingen Oprettelse",
      secure: "Kryptografisk Retfærdigt",
      capacity: "Op til 500 Navne",
      device: "Optimeret til Mobil & PC"
    },
    ui: {
      spinBtn: "DREJ HJULET",
      spinning: "DREJER...",
      resultDecided: "Hjulet Har Talt",
      addNamesHeading: "🎯 Tilføj Navne eller Valg",
      inputPlaceholder: "Skriv et navn, valg eller præmie...",
      addBtn: "Tilføj",
      bulkBtn: "📋 Indsæt Flere Navne",
      bulkPlaceholder: "Indsæt flere navne — ét per linje eller adskilt med komma\nf.eks.:\nOliver\nEmma\nNoah\nFreja",
      bulkAddBtn: "Tilføj Alt til Hjulet",
      bulkCloseBtn: "Annuller",
      clearAllBtn: "🗑 Ryd Alt",
      shuffleBtn: "🔀 Bland",
      sortBtn: "🔤 Sorter A-Å",
      presetsHeading: "⚡ Hurtige Skabeloner",
      themesHeading: "🎨 Farvetema",
      settingsHeading: "⚙️ Indstillinger & Lyd",
      spinDuration: "Rotationsvarighed",
      soundEffect: "Lydeffekt",
      soundVolume: "Lydstyrke",
      soundTick: "Mekanisk Klikken",
      soundDrum: "Trommehvirvel",
      soundFanfare: "Sejrsfanfare",
      soundCheer: "Publikumsjubel",
      soundNone: "Lydløs",
      removeWinner: "Fjern Vinder Efter Drej",
      removeWinnerDesc: "Fjerner automatisk det udtrukne felt til lodtrækninger uden gentagelser.",
      showConfetti: "Konfettiregn ved Gevinst",
      showPopup: "Vis Vindervindue",
      allowDuplicates: "Tillad Dubletter",
      fairnessAudit: "Kryptografisk Verifikation",
      fairnessDesc: "Ægte tilfældighed baseret på Web Cryptography API sikrer ens chancer for alle felter.",
      historyHeading: "📜 Trækningshistorik",
      noSpinsYet: "Ingen spin endnu. Tryk på knappen for at starte!",
      clearHistory: "Ryd Historik",
      exportHistory: "Eksporter CSV",
      statsHeading: "📊 Vinderstatistik",
      statsDesc: "Sammenlign teoretisk sandsynlighed med de faktiske resultater.",
      saveWheel: "💾 Gem Hjul",
      loadWheel: "📂 Mine Gemte Hjul",
      shareWheel: "🔗 Del Hjul",
      shareSuccess: "Link kopieret til udklipsholder!",
      qrCodeTitle: "Scan QR-kode med Telefon",
      embedTitle: "Indsæt Hjul på Hjemmeside",
      fullscreen: "Fuld Skærm",
      exitFullscreen: "Forlad Fuld Skærm",
      spinAgain: "Drej Igen",
      removeAndContinue: "Fjern Vinder & Fortsæt",
      winnerTitle: "Vi Har En Vinder!"
    },
    presets: {
      yesno: { label: "Ja / Nej", items: ["Ja ✅", "Nej ❌", "Måske 🤔", "Spørg igen 🔄"] },
      drawnames: { label: "Navneliste", items: ["William", "Ida", "Noah", "Emma", "Victor", "Freja", "Lucas", "Clara", "Oscar", "Ella"] },
      dinner: { label: "Aftensmad", items: ["Pizza 🍕", "Burger 🍔", "Sushi 🍣", "Pasta 🍝", "Kylling 🍗", "Tacos 🌮", "Salat 🥗", "Smørrebrød 🥪"] },
      numbers: { label: "1 til 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Sandhed eller KONSEKVENS", items: ["Sandhed 🤫", "Konsekvens 😈", "Sandhed 🤫", "Konsekvens 😈", "Dobbelt Konsekvens 🔥", "Frikort 🌟"] },
      giveaway: { label: "Lodtrækning", items: ["1. Præmie 🏆", "2. Præmie 🥈", "3. Præmie 🥉", "Gavekort 🎁", "Overraskelse 📦", "Prøv Igen 🍀"] }
    },
    howTo: {
      title: "Sådan Bruger du Lykkehjulet Online",
      subtitle: "Lav og drej dit eget tilpassede lykkehjul i fire lette trin.",
      steps: [
        {
          num: 1,
          title: "Indtast Navne eller Valg",
          desc: "Skriv navne enkeltvis eller brug 'Indsæt Flere Navne' til at importere hele klasselisten direkte fra Excel."
        },
        {
          num: 2,
          title: "Vælg Udseende og Lyd",
          desc: "Vælg en flot farvepalette og realistiske lyde som det klassiske tikkende hjul eller en dramatisk trommehvirvel."
        },
        {
          num: 3,
          title: "Drej Hjulet",
          desc: "Tryk på 'DREJ HJULET' eller brug mellemrumstasten. Hjulet sagtner farten jævnt og stopper præcist på vinderen med konfetti."
        },
        {
          num: 4,
          title: "Håndter og Del",
          desc: "Udeluk vinderen for efterfølgende runder, tjek statistikken eller del hjulet med elever eller seere via QR-kode."
        }
      ]
    },
    useCases: {
      title: "Oplagte Anvendelser: Skole, Arbejde og Fest",
      subtitle: "Brugt dagligt af undervisere, projektledere og streamere.",
      items: [
        {
          icon: "🏫",
          title: "I Klasseværelset",
          desc: "Lærere bruger hjulet på smartboardet til retfærdig elevhøring, gruppeinddeling og lektietjek uden favorisering."
        },
        {
          icon: "🎁",
          title: "Giveaways og Livestreams",
          desc: "Udfør gennemskuelige lodtrækninger direkte foran dine følgere på YouTube, Twitch eller TikTok."
        },
        {
          icon: "💼",
          title: "Møder og Virksomheder",
          desc: "Bestem talerækken på morgenmødet eller fordel vagter og opgaver i teamet på en objektiv måde."
        },
        {
          icon: "🎉",
          title: "Spilleaftener og Hverdagsvalg",
          desc: "Slut med uendelige diskussioner om aftensmaden eller hvem der starter brætspillet!"
        }
      ]
    },
    fairness: {
      title: "Kryptografisk Sikkerhed og Fuld Retfærdighed",
      subtitle: "Matematisk uigennemtrængelig tilfældighed uden manipulation.",
      text1: "Hvor almindelige værktøjer benytter svage pseudo-tilfældige funktioner, anvender vi browserens officielle Web Cryptography API (<code>window.crypto.getRandomValues</code>).",
      text2: "Entropien stammer direkte fra enhedens hardware, hvilket sikrer fuldkommen lige vinderchancer for hvert felt:",
      formula: "Sandsynlighed = 1 / Samlet_Antal_Felter",
      text3: "Den visuelle pil lander med matematisk præcision på det udtrukne felt, så lodtrækningen altid er uangribelig."
    },
    comparison: {
      title: "Sammenligning: Online Hjul vs Klassiske Metoder",
      headers: ["Kriterium", "Vores Online Hjul", "Terninger / Mønt", "Simpel Talgenerator", "Sedler i en Hat"],
      rows: [
        ["Visuel Spænding", "⭐⭐⭐⭐⭐ Maksimal (Lyd og Fysik)", "⭐⭐⭐ Mellem (Kun på bordet)", "⭐ Lav (Kun teksttal)", "⭐⭐⭐ Mellem (Manuel udtrækning)"],
        ["Kapacitet", "Op til 500 brugerdefinerede felter", "Maksimalt 6 til 20 sider", "Kun tal", "Tidskrævende at skrive"],
        ["Manipulationssikker", "CSPRNG Kryptografi (Højeste)", "Påvirket af kastevinkel", "Simpel standard-RNG", "Risiko for uensartet blanding"],
        ["Fjern Vinder", "Automatisk med ét klik", "Kræver omkast", "Kræver genindstilling", "Manuel frasortering af sedler"]
      ]
    },
    faqs: [
      {
        q: "Er lykkehjulet helt gratis at bruge?",
        a: "Ja, 100% gratis altid uden brugeroprettelse, begrænsninger eller skjulte gebyrer."
      },
      {
        q: "Hvor mange navne kan der tilføjes?",
        a: "Du kan tilføje op til 500 navne. Tekststørrelsen tilpasses automatisch for optimal læsbarhed."
      },
      {
        q: "Hvordan garanteres en retfærdig lodtrækning?",
        a: "Gennem Web Cryptography API i din browser, der trækker ægte tilfældighed fra systemets hardware."
      },
      {
        q: "Kan vinderen fjernes automatisk efter trækningen?",
        a: "Ja, aktivér 'Fjern Vinder Efter Drej' for at køre lodtrækninger uden gengangere."
      },
      {
        q: "Virker det på smartphones og tablets?",
        a: "Ja, hele siden er fuldstændig optimeret til touchskærme på iPhone, iPad, Android og computere."
      }
    ]
  },

  no: {
    metaTitle: "Lykkehjul På Nett Gratis – Navnehjul & Tilfeldig Trekking",
    metaDesc: "Snurr lykkehjulet gratis på nett: legg til opptil 500 navn eller alternativer. Navnehjul for klasserom, loddtrekning, konkurranser og valg. Ingen registrering.",
    heroTitle: "Lykkehjul På Nett Gratis",
    heroHighlight: "Navnehjul & Tilfeldig Beslutningshjul",
    heroSubtitle: "Skriv inn navn, tall eller valg og snurr hjulet for rettferdige, kryptografisk verifiserte trekninger. Perfekt for lærere, giveaways og spillkvelder.",
    quickAnswer: "<strong>Hva er Lykkehjul På Nett?</strong> Et gratis nettbasert trekkehjul drevet av Web Cryptography API (<code>crypto.getRandomValues</code>). Støtter opptil 500 alternativer, lydeffekter, automatisk vinnerfjerning og enkel deling med lenke eller QR-kode.",
    badges: {
      free: "100% Gratis Alltid",
      noSignup: "Ingen Registrering",
      secure: "Kryptografisk Rettferdig",
      capacity: "Opptil 500 Navn",
      device: "Optimalisert for Mobil & PC"
    },
    ui: {
      spinBtn: "SNURR HJULET",
      spinning: "SNURRER...",
      resultDecided: "Hjulet Har Bestemt",
      addNamesHeading: "🎯 Legg til Navn eller Valg",
      inputPlaceholder: "Skriv inn et navn, valg eller premie...",
      addBtn: "Legg til",
      bulkBtn: "📋 Lim inn Mange Navn",
      bulkPlaceholder: "Lim inn flere navn — ett per linje eller adskilt med komma\nf.eks.:\nJakob\nNora\nEmil\nSofie",
      bulkAddBtn: "Legg Alt til i Hjulet",
      bulkCloseBtn: "Avbryt",
      clearAllBtn: "🗑 Tøm Alt",
      shuffleBtn: "🔀 Bland",
      sortBtn: "🔤 Sorter A-Å",
      presetsHeading: "⚡ Raske Maler",
      themesHeading: "🎨 Fargetema",
      settingsHeading: "⚙️ Innstillinger & Lyd",
      spinDuration: "Snurretid",
      soundEffect: "Lydeffekt",
      soundVolume: "Lydstyrke",
      soundTick: "Mekanisk Tikking",
      soundDrum: "Trommevirvel",
      soundFanfare: "Seiersfanfare",
      soundCheer: "Jubel fra Publikums",
      soundNone: "Lydløs",
      removeWinner: "Fjern Vinner Etter Snurr",
      removeWinnerDesc: "Fjerner automatisk vinneren fra listen for etterfølgende trekninger uten gjentakelser.",
      showConfetti: "Konfettiregn",
      showPopup: "Vis Vinnervindu",
      allowDuplicates: "Tillat Duplikater",
      fairnessAudit: "Kryptografisk Verifisering",
      fairnessDesc: "Ekte tilfeldighet med Web Cryptography API garanterer like vinnersjanser for alle felt.",
      historyHeading: "📜 Trekkehistorikk",
      noSpinsYet: "Ingen snurr foreløpig. Trykk på knappen for å snurre!",
      clearHistory: "Tøm Historikk",
      exportHistory: "Eksporter CSV",
      statsHeading: "📊 Vinnerstatistikk",
      statsDesc: "Sammenlign teoretisk sannsynlighet med faktiske utfall.",
      saveWheel: "💾 Lagre Hjul",
      loadWheel: "📂 Mine Lagrede Hjul",
      shareWheel: "🔗 Del Hjul",
      shareSuccess: "Lenke kopiert til utklippstavlen!",
      qrCodeTitle: "Skann QR-kode med Telefon",
      embedTitle: "Bygg inn på Egen Nettside",
      fullscreen: "Fullskjerm",
      exitFullscreen: "Lukk Fullskjerm",
      spinAgain: "Snurr Igjen",
      removeAndContinue: "Fjern Vinner & Fortsett",
      winnerTitle: "Vi Har En Vinner!"
    },
    presets: {
      yesno: { label: "Ja / Nei", items: ["Ja ✅", "Nei ❌", "Kanskje 🤔", "Spør igjen 🔄"] },
      drawnames: { label: "Navneliste", items: ["Jakob", "Nora", "Emil", "Sofie", "Oliver", "Emma", "Filip", "Ella", "Noah", "Maja"] },
      dinner: { label: "Middag", items: ["Pizza 🍕", "Taco 🌮", "Sushi 🍣", "Pasta 🍝", "Burger 🍔", "Fiskegrateng 🐟", "Salat 🥗", "Kylling 🍗"] },
      numbers: { label: "1 til 10", items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      truth: { label: "Nødt eller Sannhet", items: ["Sannhet 🤫", "Nødt 😈", "Sannhet 🤫", "Nødt 😈", "Dobbel Nødt 🔥", "Frikort 🌟"] },
      giveaway: { label: "Loddtrekning", items: ["Hovedpremie 🏆", "2. Premie 🥈", "3. Premie 🥉", "Gavekort 🎁", "Overraskelse 📦", "Prøv Igjen 🍀"] }
    },
    howTo: {
      title: "Slik Bruker du Lykkehjulet På Nett",
      subtitle: "Lag og snurr ditt eget spesialtilpassede hjul på fire enkle steg.",
      steps: [
        {
          num: 1,
          title: "Legg inn Navn eller Valg",
          desc: "Skriv inn ett og ett navn eller velg 'Lim inn Mange Navn' for å legge inn en hel klasseliste fra Excel."
        },
        {
          num: 2,
          title: "Velg Farger og Lyd",
          desc: "Velg en flott fargepalett og realistiske lydeffekter som tikkende hjul eller spennende trommevirvel."
        },
        {
          num: 3,
          title: "Snurr Hjulet",
          desc: "Trykk 'SNURR HJULET' eller bruk mellomromstasten. Den jevne animasjonen sakker av farten og stopper på vinneren med konfetti."
        },
        {
          num: 4,
          title: "Administrer og Del",
          desc: "Fjern vinneren for neste runde, se statistikk eller del hjulet med elever eller seere via QR-kode."
        }
      ]
    },
    useCases: {
      title: "Bruksområder i Skole, Arbeidsliv og Fritid",
      subtitle: "Uunnværlig verktøy for lærere, møteledere og sosiale sammenkomster.",
      items: [
        {
          icon: "🏫",
          title: "I Klasserommet",
          desc: "Lærere bruker hjulet på storskjerm for rettferdig elevutvelgelse, gruppeinndeling og leksesjekk uten partiskhet."
        },
        {
          icon: "🎁",
          title: "Giveaways og Direktesendinger",
          desc: "Gjennomfør transparente trekninger direkte foran følgerne dine på YouTube, Twitch eller TikTok."
        },
        {
          icon: "💼",
          title: "Møter og Bedrifter",
          desc: "Bestem talerekkefølgen på morgenmøtet eller fordel oppgaver og vakter på en nøytral måte."
        },
        {
          icon: "🎉",
          title: "Spillkvelder og Hverdagsvalg",
          desc: "Slutt på middagsdiskusjoner og hvem som starter brettspillet – la hjulet bestemme!"
        }
      ]
    },
    fairness: {
      title: "Kryptografisk Sikkerhet og Rettferdighet",
      subtitle: "Matematisk feilfri tilfeldighet uten manipulering.",
      text1: "Mange enkle verktøy benytter svake pseudo-tilfeldige funksjoner. Vårt hjul drives av browserens offisielle Web Cryptography API (<code>window.crypto.getRandomValues</code>).",
      text2: "Entropien hentes rett fra enhetens operativsystem, noe som gir nøyaktig like vinnersjanser for hvert eneste felt:",
      formula: "Sannsynlighet = 1 / Totalt_Antall_Felt",
      text3: "Pilen stopper med millimeterpresisjon på det uttrukne feltet, slik at trekningen alltid er hevet over enhver tvil."
    },
    comparison: {
      title: "Sammenligning: Nettbasert Hjul vs Tradisjonelle Metoder",
      headers: ["Kriterium", "Vårt Nettbaserte Hjul", "Terninger / Mynt", "Enkel Tallgenerator", "Lapper i en Hatt"],
      rows: [
        ["Visuell Spenning", "⭐⭐⭐⭐⭐ Høyeste (Lyd og Fysikk)", "⭐⭐⭐ Middels (Kun på bordet)", "⭐ Lav (Kun talltekst)", "⭐⭐⭐ Middels (Manuell åpning)"],
        ["Kapasitet", "Opptil 500 egne tekstfelt", "Maksimalt 6 til 20 sider", "Kun tall", "Tidkrevende å skrive for hånd"],
        ["Manipulasjonssikker", "CSPRNG Kryptografi (Høyeste nivå)", "Påvirket av kastet", "Vanlig grunn-RNG", "Fare for ujevn blanding"],
        ["Fjern Vinner", "Automatisk med ett klikk", "Må kaste på nytt", "Må stille inn på nytt", "Må kaste lappen manuelt"]
      ]
    },
    faqs: [
      {
        q: "Er lykkehjulet helt gratis å bruke?",
        a: "Ja, 100% gratis for alltid uten registrering, bruksbegrensninger eller skjulte kostnader."
      },
      {
        q: "Hvor mange navn kan legges inn?",
        a: "Du kan legge inn opptil 500 navn. Skriftstørrelsen tilpasser seg automatisk for optimal lesbarhet."
      },
      {
        q: "Hvordan kan jeg være trygg på at trekningen er rettferdig?",
        a: "Gjennom Web Cryptography API i nettleseren din, som henter ekte tilfeldighet fra enhetens maskinvare."
      },
      {
        q: "Kan vinneren fjernes automatisk etter trekningen?",
        a: "Ja, bare huk av for 'Fjern Vinner Etter Snurr' for å trekke flere premier uten gjentakelser."
      },
      {
        q: "Fungerer det bra på mobil og nettbrett?",
        a: "Ja, hele siden er fullstendig optimalisert for berøringsskjermer på iPhone, iPad, Android og PC."
      }
    ]
  }
};

export { TIER1_LANGUAGES, TIER1_TRANSLATIONS };
export default { TIER1_LANGUAGES, TIER1_TRANSLATIONS };
