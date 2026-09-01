// =====================================
// 英語熟語学習アプリ
// script.js
// Part 1
// =====================================

// -----------------------------
// 熟語データ
// -----------------------------
const idioms = [

    // ===== 基本動作・日常生活 =====
    { english: "get up", japanese: "起きる", category: "句動詞" },
    { english: "wake up", japanese: "目を覚ます", category: "句動詞" },
    { english: "go to bed", japanese: "寝る", category: "日常・行動表現" },
    { english: "come home", japanese: "帰宅する", category: "日常・行動表現" },
    { english: "go home", japanese: "家へ帰る", category: "日常・行動表現" },
    { english: "look at", japanese: "～を見る", category: "前置詞を使う表現" },
    { english: "listen to", japanese: "～を聞く", category: "前置詞を使う表現" },
    { english: "talk to", japanese: "～に話しかける", category: "前置詞を使う表現" },
    { english: "speak to", japanese: "～に話しかける", category: "前置詞を使う表現" },
    { english: "wait for", japanese: "～を待つ", category: "前置詞を使う表現" },
    { english: "look for", japanese: "～を探す", category: "前置詞を使う表現" },
    { english: "look after", japanese: "～の世話をする", category: "前置詞を使う表現" },
    { english: "get on", japanese: "（乗り物）に乗る", category: "句動詞" },
    { english: "get off", japanese: "（乗り物）から降りる", category: "句動詞" },
    { english: "put on", japanese: "～を身につける", category: "句動詞" },
    { english: "take off", japanese: "～を脱ぐ", category: "句動詞" },
    { english: "turn on", japanese: "～をつける", category: "句動詞" },
    { english: "turn off", japanese: "～を消す", category: "句動詞" },
    { english: "pick up", japanese: "～を拾う", category: "句動詞" },
    { english: "stand up", japanese: "立ち上がる", category: "句動詞" },
    { english: "sit down", japanese: "座る", category: "句動詞" },
    { english: "come in", japanese: "入る", category: "句動詞" },
    { english: "go out", japanese: "外出する", category: "句動詞" },
    { english: "write down", japanese: "書き留める", category: "句動詞" },
    { english: "grow up", japanese: "成長する", category: "句動詞" },
    { english: "hurry up", japanese: "急ぐ", category: "句動詞" },
    { english: "be late for", japanese: "～に遅れる", category: "be動詞・形容詞表現" },

    // ===== be動詞＋形容詞＋前置詞 =====
    { english: "be good at", japanese: "～が得意だ", category: "be動詞・形容詞表現" },
    { english: "be interested in", japanese: "～に興味がある", category: "be動詞・形容詞表現" },
    { english: "be busy with", japanese: "～で忙しい", category: "be動詞・形容詞表現" },
    { english: "be famous for", japanese: "～で有名だ", category: "be動詞・形容詞表現" },
    { english: "be different from", japanese: "～と違う", category: "be動詞・形容詞表現" },
    { english: "be kind to", japanese: "～に親切だ", category: "be動詞・形容詞表現" },
    { english: "be full of", japanese: "～でいっぱいだ", category: "be動詞・形容詞表現" },
    { english: "be afraid of", japanese: "～を恐れている", category: "be動詞・形容詞表現" },

    // ===== to不定詞 =====
    { english: "have to", japanese: "～しなければならない", category: "不定詞・動名詞" },
    { english: "want to", japanese: "～したい", category: "不定詞・動名詞" },
    { english: "need to", japanese: "～する必要がある", category: "不定詞・動名詞" },
    { english: "try to", japanese: "～しようとする", category: "不定詞・動名詞" },
    { english: "forget to", japanese: "～するのを忘れる", category: "不定詞・動名詞" },
    { english: "begin to", japanese: "～し始める", category: "不定詞・動名詞" },
    { english: "start to", japanese: "～し始める", category: "不定詞・動名詞" },
    { english: "learn to", japanese: "～することを学ぶ", category: "不定詞・動名詞" },
    { english: "hope to", japanese: "～したいと思う", category: "不定詞・動名詞" },
    { english: "decide to", japanese: "～することを決める", category: "不定詞・動名詞" },
    { english: "stop to", japanese: "～するために立ち止まる", category: "不定詞・動名詞" },
    { english: "like to", japanese: "～するのが好きだ", category: "不定詞・動名詞" },
    { english: "love to", japanese: "～するのが大好きだ", category: "不定詞・動名詞" },

    // ===== 動詞＋人＋表現 =====
    { english: "help ... with", japanese: "…の～を手伝う", category: "その他の重要表現" },
    { english: "thank ... for", japanese: "～について…に感謝する", category: "その他の重要表現" },
    { english: "ask ... to", japanese: "…に～するよう頼む", category: "不定詞・動名詞" },
    { english: "tell ... to", japanese: "…に～するよう言う", category: "不定詞・動名詞" },
    { english: "want ... to", japanese: "…に～してほしい", category: "不定詞・動名詞" },
    { english: "show ... around", japanese: "…を案内する", category: "日常・行動表現" },

    // ===== その他の基本表現 =====
    { english: "take care of", japanese: "～の世話をする", category: "前置詞を使う表現" },
    { english: "come from", japanese: "～の出身である", category: "前置詞を使う表現" },
    { english: "arrive at", japanese: "～に到着する", category: "前置詞を使う表現" },
    { english: "arrive in", japanese: "～に到着する", category: "前置詞を使う表現" },
    { english: "leave for", japanese: "～へ出発する", category: "前置詞を使う表現" },
    { english: "think about", japanese: "～について考える", category: "前置詞を使う表現" },
    { english: "know about", japanese: "～について知っている", category: "前置詞を使う表現" },
    { english: "hear of", japanese: "～のことを聞く", category: "前置詞を使う表現" },
    { english: "hear from", japanese: "～から便りをもらう", category: "前置詞を使う表現" },
    { english: "learn about", japanese: "～について学ぶ", category: "前置詞を使う表現" },
    { english: "talk about", japanese: "～について話す", category: "前置詞を使う表現" },
    { english: "think of", japanese: "～を思いつく", category: "前置詞を使う表現" },
    { english: "look like", japanese: "～のように見える", category: "前置詞を使う表現" },
    { english: "feel like", japanese: "～のような気がする", category: "前置詞を使う表現" },
    { english: "sound like", japanese: "～のように聞こえる", category: "前置詞を使う表現" },

    // ===== take / have =====
    { english: "take a walk", japanese: "散歩する", category: "動詞＋名詞" },
    { english: "take a picture", japanese: "写真を撮る", category: "動詞＋名詞" },
    { english: "take a bath", japanese: "風呂に入る", category: "動詞＋名詞" },
    { english: "have breakfast", japanese: "朝食を食べる", category: "動詞＋名詞" },
    { english: "have lunch", japanese: "昼食を食べる", category: "動詞＋名詞" },
    { english: "have dinner", japanese: "夕食を食べる", category: "動詞＋名詞" },
    { english: "have a good time", japanese: "楽しい時間を過ごす", category: "動詞＋名詞" },
    { english: "have a cold", japanese: "風邪をひいている", category: "動詞＋名詞" },
    { english: "catch a cold", japanese: "風邪をひく", category: "動詞＋名詞" },
    { english: "take medicine", japanese: "薬を飲む", category: "動詞＋名詞" },

    // ===== go＋～ing =====
    { english: "go shopping", japanese: "買い物に行く", category: "日常・行動表現" },
    { english: "go fishing", japanese: "釣りに行く", category: "日常・行動表現" },
    { english: "go swimming", japanese: "泳ぎに行く", category: "日常・行動表現" },
    { english: "go skiing", japanese: "スキーに行く", category: "日常・行動表現" },
    { english: "go camping", japanese: "キャンプに行く", category: "日常・行動表現" },
    { english: "go hiking", japanese: "ハイキングに行く", category: "日常・行動表現" },

    // ===== 句動詞 =====
    { english: "come true", japanese: "実現する", category: "句動詞" },
    { english: "grow into", japanese: "～に成長する", category: "句動詞" },
    { english: "fall asleep", japanese: "眠りにつく", category: "句動詞" },
    { english: "wake ... up", japanese: "…を起こす", category: "句動詞" },
    { english: "clean up", japanese: "掃除する", category: "句動詞" },
    { english: "give up", japanese: "あきらめる", category: "句動詞" },
    { english: "find out", japanese: "見つけ出す・知る", category: "句動詞" },
    { english: "take out", japanese: "取り出す", category: "句動詞" },
    { english: "put away", japanese: "片付ける", category: "句動詞" },
    { english: "throw away", japanese: "捨てる", category: "句動詞" },
    { english: "carry out", japanese: "実行する", category: "句動詞" },
    { english: "bring back", japanese: "持って帰る", category: "句動詞" },
    { english: "come back", japanese: "戻ってくる", category: "句動詞" },
    { english: "go back", japanese: "戻っていく", category: "句動詞" },
    { english: "send back", japanese: "送り返す", category: "句動詞" },
    { english: "call back", japanese: "折り返し電話する", category: "句動詞" },
    { english: "look up", japanese: "調べる", category: "句動詞" },
    { english: "get together", japanese: "集まる", category: "句動詞" },
    { english: "go away", japanese: "立ち去る", category: "句動詞" },
    { english: "run away", japanese: "逃げる", category: "句動詞" },
    { english: "walk around", japanese: "歩き回る", category: "句動詞" },
    { english: "look around", japanese: "見て回る", category: "句動詞" },

    // ===== 参加・人間関係 =====
    { english: "take part in", japanese: "～に参加する", category: "前置詞を使う表現" },
    { english: "join in", japanese: "～に参加する", category: "句動詞" },
    { english: "belong to", japanese: "～に所属している", category: "前置詞を使う表現" },
    { english: "agree with", japanese: "～に賛成する", category: "前置詞を使う表現" },
    { english: "agree to", japanese: "～に同意する", category: "前置詞を使う表現" },
    { english: "laugh at", japanese: "～を笑う", category: "前置詞を使う表現" },
    { english: "smile at", japanese: "～に微笑む", category: "前置詞を使う表現" },
    { english: "shout at", japanese: "～を怒鳴る", category: "前置詞を使う表現" },

    // ===== be＋形容詞＋前置詞 =====
    { english: "look forward to", japanese: "～を楽しみにする", category: "前置詞を使う表現" },
    { english: "be surprised at", japanese: "～に驚く", category: "be動詞・形容詞表現" },
    { english: "be proud of", japanese: "～を誇りに思う", category: "be動詞・形容詞表現" },
    { english: "be careful of", japanese: "～に気をつける", category: "be動詞・形容詞表現" },
    { english: "be ready for", japanese: "～の準備ができている", category: "be動詞・形容詞表現" },
    { english: "be worried about", japanese: "～を心配している", category: "be動詞・形容詞表現" },
    { english: "be angry with", japanese: "～に怒っている", category: "be動詞・形容詞表現" },
    { english: "be pleased with", japanese: "～に満足している", category: "be動詞・形容詞表現" },
    { english: "be excited about", japanese: "～にわくわくしている", category: "be動詞・形容詞表現" },
    { english: "be tired of", japanese: "～に飽きている", category: "be動詞・形容詞表現" },

    // ===== その他の重要表現 =====
    { english: "all over", japanese: "いたるところに", category: "その他の重要表現" },
    { english: "at first", japanese: "最初は", category: "その他の重要表現" },
    { english: "at last", japanese: "ついに", category: "その他の重要表現" },
    { english: "at once", japanese: "すぐに", category: "その他の重要表現" },
    { english: "at home", japanese: "家で", category: "その他の重要表現" },
    { english: "by bike", japanese: "自転車で", category: "その他の重要表現" },
    { english: "by bus", japanese: "バスで", category: "その他の重要表現" },
    { english: "by train", japanese: "電車で", category: "その他の重要表現" },
    { english: "by car", japanese: "車で", category: "その他の重要表現" },
    { english: "for example", japanese: "例えば", category: "その他の重要表現" },
    { english: "in fact", japanese: "実際には", category: "その他の重要表現" },
    { english: "in front of", japanese: "～の前に", category: "前置詞を使う表現" },
    { english: "in the future", japanese: "将来", category: "その他の重要表現" },
    { english: "on foot", japanese: "徒歩で", category: "その他の重要表現" },
    { english: "of course", japanese: "もちろん", category: "その他の重要表現" },
    { english: "over there", japanese: "あそこに", category: "その他の重要表現" },
    { english: "right now", japanese: "今、ちょうど今", category: "その他の重要表現" },
    { english: "this morning", japanese: "今朝", category: "その他の重要表現" },
    { english: "this afternoon", japanese: "今日の午後", category: "その他の重要表現" },
    { english: "this evening", japanese: "今晩", category: "その他の重要表現" },
    { english: "next week", japanese: "来週", category: "その他の重要表現" },
    { english: "last year", japanese: "去年", category: "その他の重要表現" },

    // ===== 追加：中2・高校入試頻出表現 =====

    // ----- 助動詞・不定詞関連 -----
    { english: "be able to", japanese: "～することができる", category: "不定詞・動名詞" },
    { english: "be going to", japanese: "～するつもりだ／～する予定だ", category: "不定詞・動名詞" },
    { english: "would like to", japanese: "～したいと思う", category: "不定詞・動名詞" },
    { english: "used to", japanese: "以前は～したものだ", category: "その他の重要表現" },
    { english: "have a chance to", japanese: "～する機会がある", category: "不定詞・動名詞" },
    { english: "be ready to", japanese: "～する準備ができている", category: "不定詞・動名詞" },
    { english: "be sure to", japanese: "きっと～する", category: "不定詞・動名詞" },
    { english: "make sure", japanese: "確かめる／必ず～するようにする", category: "その他の重要表現" },

    // ----- be動詞＋形容詞・前置詞 -----
    { english: "be good for", japanese: "～に良い", category: "be動詞・形容詞表現" },
    { english: "be known for", japanese: "～で知られている", category: "be動詞・形容詞表現" },
    { english: "be made of", japanese: "～でできている", category: "be動詞・形容詞表現" },
    { english: "be made from", japanese: "～から作られている", category: "be動詞・形容詞表現" },
    { english: "be made in", japanese: "～で作られている", category: "be動詞・形容詞表現" },
    { english: "be covered with", japanese: "～で覆われている", category: "be動詞・形容詞表現" },
    { english: "be filled with", japanese: "～でいっぱいになっている", category: "be動詞・形容詞表現" },
    { english: "be afraid to", japanese: "こわくて～できない", category: "be動詞・形容詞表現" },
    { english: "be different from", japanese: "～と違う", category: "be動詞・形容詞表現" },

    // ----- 人間関係・コミュニケーション -----
    { english: "get along with", japanese: "～とうまくやっていく", category: "前置詞を使う表現" },
    { english: "make friends with", japanese: "～と友達になる", category: "前置詞を使う表現" },
    { english: "keep in touch with", japanese: "～と連絡を取り続ける", category: "前置詞を使う表現" },
    { english: "each other", japanese: "お互いに", category: "その他の重要表現" },
    { english: "one another", japanese: "お互いに", category: "その他の重要表現" },
    { english: "be friendly to", japanese: "～に親切である／友好的である", category: "be動詞・形容詞表現" },
    { english: "be nice to", japanese: "～に親切にする", category: "be動詞・形容詞表現" },

    // ----- 動詞＋前置詞 -----
    { english: "pay attention to", japanese: "～に注意を払う", category: "前置詞を使う表現" },
    { english: "depend on", japanese: "～に頼る／～次第である", category: "前置詞を使う表現" },
    { english: "believe in", japanese: "～を信じる", category: "前置詞を使う表現" },
    { english: "wait for", japanese: "～を待つ", category: "前置詞を使う表現" },
    { english: "care about", japanese: "～を気にする／～を大切にする", category: "前置詞を使う表現" },
    { english: "worry about", japanese: "～を心配する", category: "前置詞を使う表現" },
    { english: "prepare for", japanese: "～の準備をする", category: "前置詞を使う表現" },
    { english: "search for", japanese: "～を探す", category: "前置詞を使う表現" },
    { english: "ask for", japanese: "～を求める／～を頼む", category: "前置詞を使う表現" },
    { english: "hear about", japanese: "～について聞く", category: "前置詞を使う表現" },

    // ----- take / have / make -----
    { english: "take a look at", japanese: "～を見る", category: "動詞＋名詞" },
    { english: "have a look at", japanese: "～を見る", category: "動詞＋名詞" },
    { english: "take a seat", japanese: "座る", category: "動詞＋名詞" },
    { english: "take a break", japanese: "休憩する", category: "動詞＋名詞" },
    { english: "take a chance", japanese: "思い切ってやってみる", category: "動詞＋名詞" },
    { english: "make a mistake", japanese: "間違える", category: "動詞＋名詞" },
    { english: "make a plan", japanese: "計画を立てる", category: "動詞＋名詞" },
    { english: "make a decision", japanese: "決定する", category: "動詞＋名詞" },
    { english: "make a difference", japanese: "違いを生む／影響を与える", category: "動詞＋名詞" },
    { english: "have no idea", japanese: "全く分からない", category: "動詞＋名詞" },

    // ----- 時間・数量・程度 -----
    { english: "a lot of", japanese: "たくさんの", category: "その他の重要表現" },
    { english: "lots of", japanese: "たくさんの", category: "その他の重要表現" },
    { english: "a few", japanese: "少しの／いくつかの", category: "その他の重要表現" },
    { english: "a little", japanese: "少しの", category: "その他の重要表現" },
    { english: "at least", japanese: "少なくとも", category: "その他の重要表現" },
    { english: "at most", japanese: "多くても／せいぜい", category: "その他の重要表現" },
    { english: "from time to time", japanese: "時々", category: "その他の重要表現" },
    { english: "for a while", japanese: "しばらくの間", category: "その他の重要表現" },
    { english: "all day", japanese: "一日中", category: "その他の重要表現" },
    { english: "all the time", japanese: "いつも／ずっと", category: "その他の重要表現" },

    // ----- 動名詞 -----
    { english: "enjoy ~ing", japanese: "～することを楽しむ", category: "不定詞・動名詞" },
    { english: "finish ~ing", japanese: "～し終える", category: "不定詞・動名詞" },
    { english: "keep ~ing", japanese: "～し続ける", category: "不定詞・動名詞" },
    { english: "stop ~ing", japanese: "～するのをやめる", category: "不定詞・動名詞" },
    { english: "spend time ~ing", japanese: "～して時間を過ごす", category: "不定詞・動名詞" },
    { english: "be good at ~ing", japanese: "～するのが得意だ", category: "不定詞・動名詞" },

    // ----- その他の重要表現 -----
    { english: "instead of", japanese: "～の代わりに", category: "前置詞を使う表現" },
    { english: "because of", japanese: "～のために／～が原因で", category: "前置詞を使う表現" },
    { english: "according to", japanese: "～によると", category: "前置詞を使う表現" },
    { english: "such as", japanese: "～のような", category: "その他の重要表現" },
    { english: "for the first time", japanese: "初めて", category: "その他の重要表現" },
    { english: "for the first time in", japanese: "～で初めて", category: "その他の重要表現" },
    { english: "from now on", japanese: "これからは", category: "その他の重要表現" },
    { english: "from then on", japanese: "その時から／それ以来", category: "その他の重要表現" },
    { english: "in order to", japanese: "～するために", category: "不定詞・動名詞" },
    { english: "more and more", japanese: "ますます", category: "その他の重要表現" }

];

// =====================================
// 学習データ
// =====================================

let currentIndex = 0;

let stats = JSON.parse(localStorage.getItem("idiomStats")) || {};

idioms.forEach((item) => {

    if (!stats[item.english]) {

        stats[item.english] = {

            correct: 0,

            wrong: 0

        };

    }

});

// =====================================
// HTML取得
// =====================================

const idiom = document.getElementById("idiom");
const meaning = document.getElementById("meaning");
const btnSpeak = document.getElementById("btnSpeak");

const btnShow = document.getElementById("btnShow");
const btnCorrect = document.getElementById("btnCorrect");
const btnWrong = document.getElementById("btnWrong");

const btnRandom = document.getElementById("btnRandom");
const btnReset = document.getElementById("btnReset");

const totalCount = document.getElementById("totalCount");
const learnedCount = document.getElementById("learnedCount");
const correctRate = document.getElementById("correctRate");

const idiomTable = document.getElementById("idiomTable");
// =====================================
// カード表示
// =====================================

function showCard(index) {

    currentIndex = index;

    idiom.textContent = idioms[index].english;

    meaning.textContent = idioms[index].japanese;

    meaning.style.display = "none";

}

function randomCard() {

    const index = Math.floor(Math.random() * idioms.length);

    showCard(index);

}

// =====================================
// 学習状況更新
// =====================================

function updateStatus() {

    totalCount.textContent = idioms.length;

    let learned = 0;
    let correct = 0;
    let total = 0;

    idioms.forEach(item => {

        const s = stats[item.english];

        const count = s.correct + s.wrong;

        if (count > 0) {

            learned++;

        }

        correct += s.correct;
        total += count;

    });

    learnedCount.textContent = learned;

    if (total === 0) {

        correctRate.textContent = "0%";

    } else {

        correctRate.textContent =
            Math.round(correct / total * 100) + "%";

    }

    localStorage.setItem(
        "idiomStats",
        JSON.stringify(stats)
    );

}

// =====================================
// 一覧作成
// =====================================

function createTable() {

    idiomTable.innerHTML = "";

    idioms.forEach((item, index) => {

        const s = stats[item.english];

        const total = s.correct + s.wrong;

        let rate = "-";

        if (total > 0) {

            rate =
                Math.round(s.correct / total * 100) + "%";

        }

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.english}</td>
            <td>${item.japanese}</td>
            <td>${rate}</td>
        `;

        idiomTable.appendChild(tr);

    });

}
// =====================================
// イベント
// =====================================

// 意味を見る
btnShow.addEventListener("click", () => {

    meaning.style.display = "block";

});

// ○ 正解
btnCorrect.addEventListener("click", () => {

    const key = idioms[currentIndex].english;

    stats[key].correct++;

    updateStatus();

    createTable();

    randomCard();

});

// × 不正解
btnWrong.addEventListener("click", () => {

    const key = idioms[currentIndex].english;

    stats[key].wrong++;

    updateStatus();

    createTable();

    randomCard();

});

// ランダム出題
btnRandom.addEventListener("click", () => {

    randomCard();

});

// 学習履歴リセット
btnReset.addEventListener("click", () => {

    if (!confirm("学習履歴をリセットしますか？")) {

        return;

    }

    localStorage.removeItem("idiomStats");

    stats = {};

    idioms.forEach(item => {

        stats[item.english] = {

            correct: 0,

            wrong: 0

        };

    });

    updateStatus();

    createTable();

    randomCard();

});

// =====================================
// 初期表示
// =====================================

updateStatus();

createTable();

randomCard();

// =====================================
// 検索機能
// =====================================

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", searchIdioms);

function searchIdioms() {

    const keyword = searchBox.value.trim().toLowerCase();

    idiomTable.innerHTML = "";

    idioms.forEach((item, index) => {

        if (
            item.english.toLowerCase().includes(keyword) ||
            item.japanese.includes(keyword)
        ) {

            const s = stats[item.english];

            const total = s.correct + s.wrong;

            let rate = "-";

            if (total > 0) {

                rate =
                    Math.round(
                        s.correct / total * 100
                    ) + "%";

            }

            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.english}</td>
                <td>${item.japanese}</td>
                <td>${rate}</td>
            `;

            tr.style.cursor = "pointer";

            tr.addEventListener("click", () => {

                showCard(index);

            });

            idiomTable.appendChild(tr);

        }

    });

}

// =====================================
// 苦手熟語だけ表示
// =====================================

const btnReview = document.getElementById("btnReview");

btnReview.addEventListener("click", showWeakIdioms);

function showWeakIdioms() {

    idiomTable.innerHTML = "";

    let count = 0;

    idioms.forEach((item, index) => {

        const s = stats[item.english];

        // 不正解が1回以上ある熟語だけ表示
        if (s.wrong > 0) {

            count++;

            const total = s.correct + s.wrong;

            const rate =
                Math.round(s.correct / total * 100) + "%";

            const tr = document.createElement("tr");

            tr.style.cursor = "pointer";

            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.english}</td>
                <td>${item.japanese}</td>
                <td>${rate}</td>
            `;

            tr.addEventListener("click", () => {

                showCard(index);

            });

            idiomTable.appendChild(tr);

        }

    });

    // 苦手がない場合
    if (count === 0) {

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td colspan="4">
                苦手な熟語はありません🎉
            </td>
        `;

        idiomTable.appendChild(tr);

    }

}

// =====================================
// 4択クイズ
// =====================================

const btnQuiz = document.getElementById("btnQuiz");
const quizQuestion = document.getElementById("quizQuestion");
const quizChoices = document.getElementById("quizChoices");

let quizAnswer = "";

btnQuiz.addEventListener("click", startQuiz);

function startQuiz() {

    const answerIndex = Math.floor(Math.random() * idioms.length);

    quizAnswer = idioms[answerIndex].english;

    quizQuestion.textContent =
        idioms[answerIndex].japanese;

    const choices = [quizAnswer];

    while (choices.length < 4) {

        const word =
            idioms[
                Math.floor(Math.random() * idioms.length)
            ].english;

        if (!choices.includes(word)) {

            choices.push(word);

        }

    }

    shuffle(choices);

    quizChoices.innerHTML = "";

    choices.forEach(choice => {

        const btn = document.createElement("button");

        btn.textContent = choice;

        btn.addEventListener("click", () => {

            checkQuiz(choice);

        });

        quizChoices.appendChild(btn);

    });

}

// =====================================
// クイズ判定
// =====================================

function checkQuiz(choice) {

    if (choice === quizAnswer) {

        alert("⭕ 正解！");

        stats[choice].correct++;

    } else {

        alert("❌ 不正解\n\n正解：" + quizAnswer);

        stats[quizAnswer].wrong++;

    }

    updateStatus();

    createTable();

    startQuiz();

}

// =====================================
// 配列シャッフル
// =====================================

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
            [array[j], array[i]];

    }

}


// =====================================
// 発音
// =====================================

btnSpeak.addEventListener("click", speakWord);

function speakWord() {

    speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(
        idioms[currentIndex].english
    );

    utter.lang = "en-US";

    utter.rate = 0.9;     // 少しゆっくり

    utter.pitch = 1.0;

    utter.volume = 1.0;

    speechSynthesis.speak(utter);

}
