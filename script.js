// =====================================
// 英語熟語学習アプリ
// script.js
// Part 1
// =====================================

// -----------------------------
// 熟語データ
// -----------------------------
const idioms = [

    { english: "get up", japanese: "起きる" },
    { english: "wake up", japanese: "目を覚ます" },
    { english: "go to bed", japanese: "寝る" },
    { english: "come home", japanese: "帰宅する" },
    { english: "go home", japanese: "家へ帰る" },
    { english: "look at", japanese: "～を見る" },
    { english: "listen to", japanese: "～を聞く" },
    { english: "talk to", japanese: "～に話しかける" },
    { english: "speak to", japanese: "～に話す" },
    { english: "wait for", japanese: "～を待つ" },
    { english: "look for", japanese: "～を探す" },
    { english: "look after", japanese: "～の世話をする" },
    { english: "get on", japanese: "乗る" },
    { english: "get off", japanese: "降りる" },
    { english: "put on", japanese: "身につける" },
    { english: "take off", japanese: "脱ぐ" },
    { english: "turn on", japanese: "つける" },
    { english: "turn off", japanese: "消す" },
    { english: "pick up", japanese: "拾う" },
    { english: "stand up", japanese: "立ち上がる" },
    { english: "sit down", japanese: "座る" },
    { english: "come in", japanese: "入る" },
    { english: "go out", japanese: "外出する" },
    { english: "write down", japanese: "書き留める" },
    { english: "grow up", japanese: "成長する" },
    { english: "hurry up", japanese: "急ぐ" },
    { english: "be late for", japanese: "～に遅れる" },
    { english: "be good at", japanese: "～が得意だ" },
    { english: "be interested in", japanese: "～に興味がある" },
    { english: "be busy with", japanese: "～で忙しい" },
    { english: "be famous for", japanese: "～で有名だ" },
    { english: "be different from", japanese: "～と違う" },
    { english: "be kind to", japanese: "～に親切だ" },
    { english: "be full of", japanese: "～でいっぱいだ" },
    { english: "be afraid of", japanese: "～を恐れる" },
    { english: "have to", japanese: "～しなければならない" },
    { english: "want to", japanese: "～したい" },
    { english: "need to", japanese: "～する必要がある" },
    { english: "try to", japanese: "～しようとする" },
    { english: "forget to", japanese: "～するのを忘れる" },
    { english: "begin to", japanese: "～し始める" },
    { english: "start to", japanese: "～し始める" },
    { english: "learn to", japanese: "～できるようになる" },
    { english: "hope to", japanese: "～したいと思う" },
    { english: "decide to", japanese: "～することを決める" },
    { english: "stop to", japanese: "～するために立ち止まる" },
    { english: "like to", japanese: "～するのが好きだ" },
    { english: "love to", japanese: "～するのが大好きだ" },
    { english: "help ... with", japanese: "～の...を手伝う" },
    { english: "thank ... for", japanese: "～について...に感謝する" },
    { english: "ask ... to", japanese: "…に～するよう頼む" },
    { english: "tell ... to", japanese: "…に～するよう言う" },
    { english: "want ... to", japanese: "…に～してほしい" },
    { english: "show ... around", japanese: "…を案内する" },
    { english: "take care of", japanese: "～の世話をする" },
    { english: "come from", japanese: "～の出身である" },
    { english: "arrive at", japanese: "～に到着する" },
    { english: "arrive in", japanese: "～に到着する" },
    { english: "leave for", japanese: "～へ出発する" },
    { english: "think about", japanese: "～について考える" },
    { english: "know about", japanese: "～について知っている" },
    { english: "hear of", japanese: "～のことを聞く" },
    { english: "hear from", japanese: "～から便りをもらう" },
    { english: "learn about", japanese: "～について学ぶ" },
    { english: "talk about", japanese: "～について話す" },
    { english: "think of", japanese: "～を思いつく" },
    { english: "look like", japanese: "～のように見える" },
    { english: "feel like", japanese: "～のような気がする" },
    { english: "sound like", japanese: "～のように聞こえる" },
    { english: "take a walk", japanese: "散歩する" },
    { english: "take a picture", japanese: "写真を撮る" },
    { english: "take a bath", japanese: "風呂に入る" },
    { english: "have breakfast", japanese: "朝食を食べる" },
    { english: "have lunch", japanese: "昼食を食べる" },
    { english: "have dinner", japanese: "夕食を食べる" },
    { english: "have a good time", japanese: "楽しい時間を過ごす" },
    { english: "have a cold", japanese: "風邪をひいている" },
    { english: "catch a cold", japanese: "風邪をひく" },
    { english: "take medicine", japanese: "薬を飲む" },
    { english: "go shopping", japanese: "買い物に行く" },
    { english: "go fishing", japanese: "釣りに行く" },
    { english: "go swimming", japanese: "泳ぎに行く" },
    { english: "go skiing", japanese: "スキーに行く" },
    { english: "go camping", japanese: "キャンプに行く" },
    { english: "go hiking", japanese: "ハイキングに行く" },
    { english: "come true", japanese: "実現する" },
    { english: "grow into", japanese: "～に成長する" },
    { english: "fall asleep", japanese: "眠りにつく" },
    { english: "wake ... up", japanese: "…を起こす" },
    { english: "clean up", japanese: "掃除する" },
    { english: "wash up", japanese: "手や顔を洗う" },
    { english: "give up", japanese: "あきらめる" },
    { english: "find out", japanese: "見つけ出す・知る" },
    { english: "take out", japanese: "取り出す" },
    { english: "put away", japanese: "片付ける" },
    { english: "throw away", japanese: "捨てる" },
    { english: "carry out", japanese: "実行する" },
    { english: "bring back", japanese: "持ち帰る" },
    { english: "come back", japanese: "戻る" },
    { english: "go back", japanese: "戻る" },
    { english: "send back", japanese: "送り返す" },
    { english: "write back", japanese: "返事を書く" },
    { english: "call back", japanese: "折り返し電話する" },
    { english: "look up", japanese: "調べる" },
    { english: "get together", japanese: "集まる" },
    { english: "come along", japanese: "一緒に来る" },
    { english: "go away", japanese: "立ち去る" },
    { english: "run away", japanese: "逃げる" },
    { english: "walk around", japanese: "歩き回る" },
    { english: "look around", japanese: "見て回る" },
    { english: "show around", japanese: "案内する" },
    { english: "take part in", japanese: "参加する" },
    { english: "join in", japanese: "参加する" },
    { english: "belong to", japanese: "～に所属している" },
    { english: "agree with", japanese: "～に賛成する" },
    { english: "agree to", japanese: "～に同意する" },
    { english: "laugh at", japanese: "～を笑う" },
    { english: "smile at", japanese: "～に微笑む" },
    { english: "shout at", japanese: "～を怒鳴る" },
    { english: "look forward to", japanese: "～を楽しみにする" },
    { english: "be surprised at", japanese: "～に驚く" },
    { english: "be proud of", japanese: "～を誇りに思う" },
    { english: "be careful of", japanese: "～に気を付ける" },
    { english: "be ready for", japanese: "～の準備ができている" },
    { english: "be worried about", japanese: "～を心配している" },
    { english: "be angry with", japanese: "～に怒っている" },
    { english: "be pleased with", japanese: "～に満足している" },
    { english: "be excited about", japanese: "～にわくわくしている" },
    { english: "be tired of", japanese: "～に飽きている" },
    { english: "be interested in", japanese: "～に興味がある" },
    { english: "all over", japanese: "いたるところに" },
    { english: "at first", japanese: "最初は" },
    { english: "at last", japanese: "ついに" },
    { english: "at once", japanese: "すぐに" },
    { english: "at home", japanese: "家で" },
    { english: "by bike", japanese: "自転車で" },
    { english: "by bus", japanese: "バスで" },
    { english: "by train", japanese: "電車で" },
    { english: "by car", japanese: "車で" },
    { english: "for example", japanese: "例えば" },
    { english: "in fact", japanese: "実際には" },
    { english: "in front of", japanese: "～の前に" },
    { english: "in the future", japanese: "将来" },
    { english: "on foot", japanese: "徒歩で" },
    { english: "of course", japanese: "もちろん" },
    { english: "over there", japanese: "あそこに" },
    { english: "right now", japanese: "今すぐ" },
    { english: "this morning", japanese: "今朝" },
    { english: "this afternoon", japanese: "今日の午後" },
    { english: "this evening", japanese: "今晩" },
    { english: "next week", japanese: "来週" },
    { english: "last year", japanese: "去年" }

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