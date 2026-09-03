// /* =========================
//    ソワンちゃん記録システム
// ========================= */


// /*
//     設定
// */

// const MAX_GAUGE = 30;


// /*
//     HTML取得
// */

// const gaugeFill = document.getElementById("gaugeFill");
// const gaugeCount = document.getElementById("gaugeCount");

// const totalCountElement = document.getElementById("totalCount");
// const streakElement = document.getElementById("streak");

// const character = document.getElementById("character");
// const levelText = document.getElementById("levelText");

// const clearModal = document.getElementById("clearModal");
// const clearMessage = document.getElementById("clearMessage");
// const clearCharacter = document.getElementById("clearCharacter");
// const changeText = document.getElementById("changeText");

// const closeModal = document.getElementById("closeModal");


// /*
//     保存されているデータを取得
// */

// let totalCount =
//     Number(localStorage.getItem("totalCount")) || 0;

// let gauge =
//     Number(localStorage.getItem("gauge")) || 0;

// let streak =
//     Number(localStorage.getItem("streak")) || 0;

// let lastRecordDate =
//     localStorage.getItem("lastRecordDate");


// /*
//     初期表示
// */

// updateScreen();


// /*
//     今日の日付
// */

// function getToday(){

//     const date = new Date();

//     return date.getFullYear()
//         + "-"
//         + String(date.getMonth() + 1).padStart(2,"0")
//         + "-"
//         + String(date.getDate()).padStart(2,"0");

// }


// /*
//     昨日の日付
// */

// function getYesterday(){

//     const date = new Date();

//     date.setDate(date.getDate() - 1);

//     return date.getFullYear()
//         + "-"
//         + String(date.getMonth() + 1).padStart(2,"0")
//         + "-"
//         + String(date.getDate()).padStart(2,"0");

// }


// /*
//     画面更新
// */

// function updateScreen(){

//     /*
//         ゲージ
//     */

//     const percent =
//         (gauge / MAX_GAUGE) * 100;

//     gaugeFill.style.width =
//         percent + "%";


//     gaugeCount.textContent =
//         gauge;


//     /*
//         累計回数
//     */

//     totalCountElement.textContent =
//         totalCount;


//     /*
//         連続日数
//     */

//     streakElement.textContent =
//         streak;


//     /*
//         レベル
//     */

//     if(gauge <= 10){

//         levelText.textContent =
//             "LEVEL 1";

//     }else if(gauge <= 20){

//         levelText.textContent =
//             "LEVEL 2";

//     }else{

//         levelText.textContent =
//             "LEVEL 3";

//     }


//     /*
//         キャラクター変更
//     */

//     updateCharacter();

// }


// /*
//     キャラクター変更
// */

// function updateCharacter(){

//     /*
//         ここは好きな画像に変更できます
//     */

//     if(totalCount >= 60){

//         character.src =
//             "images/big_sowan_3.png";

//     }else if(totalCount >= 30){

//         character.src =
//             "images/big_sowan_2.png";

//     }else{

//         character.src =
//             "images/big_sowan.png";

//     }

// }


// /*
//     記録完了処理

//     record.htmlから

//     completeRecord();

//     を呼び出す
// */

// function completeRecord(){

//     const today =
//         getToday();


//     /*
//         今日すでに記録しているか確認
//     */

//     if(lastRecordDate === today){

//         alert("今日はもう記録しているよ！");

//         return;

//     }


//     /*
//         累計回数
//     */

//     totalCount++;


//     /*
//         ゲージ
//     */

//     gauge++;


//     /*
//         連続日数
//     */

//     if(lastRecordDate === getYesterday()){

//         streak++;

//     }else{

//         streak = 1;

//     }


//     /*
//         今日の日付を保存
//     */

//     lastRecordDate =
//         today;


//     /*
//         localStorage保存
//     */

//     localStorage.setItem(
//         "totalCount",
//         totalCount
//     );

//     localStorage.setItem(
//         "gauge",
//         gauge
//     );

//     localStorage.setItem(
//         "streak",
//         streak
//     );

//     localStorage.setItem(
//         "lastRecordDate",
//         lastRecordDate
//     );


//     /*
//         画面更新
//     */

//     updateScreen();


//     /*
//         ゲージMAX
//     */

//     if(gauge >= MAX_GAUGE){

//         setTimeout(() => {

//             showClearAnimation();

//         }, 800);

//     }

// }


// /*
//     ゲージ達成演出
// */

// function showClearAnimation(){

//     /*
//         キャラクターを変える
//     */

//     const nextLevel =
//         Math.floor(totalCount / MAX_GAUGE);


//     /*
//         画像変更

//         30回 → big_sowan_2.png
//         60回 → big_sowan_3.png

//         画像がない場合は、
//         好きな画像名に変更してください。
//     */

//     if(nextLevel === 1){

//         clearCharacter.src =
//             "images/big_sowan_2.png";

//         changeText.textContent =
//             "ソワンちゃんの服が変わったよ！";

//     }else if(nextLevel >= 2){

//         clearCharacter.src =
//             "images/big_sowan_3.png";

//         changeText.textContent =
//             "ソワンちゃんがさらに変化したよ！";

//     }else{

//         clearCharacter.src =
//             "images/big_sowan.png";

//         changeText.textContent =
//             "ソワンちゃんに変化があったよ！";

//     }


//     /*
//         メッセージ
//     */

//     clearMessage.textContent =
//         totalCount + "回記録したよ！";


//     /*
//         キャラクター演出
//     */

//     character.classList.add(
//         "character-change"
//     );


//     /*
//         モーダル表示
//     */

//     clearModal.classList.add(
//         "show"
//     );


//     /*
//         ゲージをリセット

//         ※次のステージへ進む
//     */

//     gauge = 0;

//     localStorage.setItem(
//         "gauge",
//         gauge
//     );


//     /*
//         少し待って画面更新
//     */

//     setTimeout(() => {

//         updateScreen();

//     }, 1000);

// }


// /*
//     おめでとう画面を閉じる
// */

// closeModal.addEventListener(
//     "click",
//     () => {

//         clearModal.classList.remove(
//             "show"
//         );

//         character.classList.remove(
//             "character-change"
//         );

//     }
// );



<div class="save-wrap">

    <button

        class="save zen-maru-gothic-regular"

        onclick="saveRecord()"

    >

        記録する

    </button>

</div>



// /* =========================
//    記録データ管理
// ========================= */


// /*
//     1ゲージに必要な記録数
// */

// const MAX_GAUGE = 3;


// /* --------------------------------
//    今日の日付
// -------------------------------- */

// function getToday(){

//     const date = new Date();

//     return date.getFullYear()
//         + "-"
//         + String(date.getMonth() + 1).padStart(2,"0")
//         + "-"
//         + String(date.getDate()).padStart(2,"0");

// }


// /* --------------------------------
//    昨日の日付
// -------------------------------- */

// function getYesterday(){

//     const date = new Date();

//     date.setDate(date.getDate() - 1);

//     return date.getFullYear()
//         + "-"
//         + String(date.getMonth() + 1).padStart(2,"0")
//         + "-"
//         + String(date.getDate()).padStart(2,"0");

// }


/* --------------------------------
   記録完了
-------------------------------- */

function completeRecord(){

    const today = getToday();


    /*
        保存されているデータ
    */

    let totalCount =
        Number(localStorage.getItem("totalCount")) || 0;

    let gauge =
        Number(localStorage.getItem("gauge")) || 0;

    let streak =
        Number(localStorage.getItem("streak")) || 0;

    let lastRecordDate =
        localStorage.getItem("lastRecordDate");


    /*
        今日すでに記録している場合
    */

    if(lastRecordDate === today){

        alert("今日はもう記録しているよ！");

        return;

    }


    /*
        累計回数 +1
    */

    totalCount++;


    /*
        ゲージ +1
    */

    gauge++;


    /*
        連続日数
    */

    if(lastRecordDate === getYesterday()){

        streak++;

    }else{

        streak = 1;

    }


    /*
        データを保存
    */

    localStorage.setItem(
        "totalCount",
        totalCount
    );

    localStorage.setItem(
        "gauge",
        gauge
    );

    localStorage.setItem(
        "streak",
        streak
    );

    localStorage.setItem(
        "lastRecordDate",
        today
    );


    /*
        ゲージが30になったら
        次のステージへ
    */

    if(gauge >= MAX_GAUGE){

        localStorage.setItem(
            "gaugeClear",
            "true"
        );

        localStorage.setItem(
            "gauge",
            "0"
        );

    }

}





/* =========================
   ゆるケア 記録データ
========================= */

const MAX_GAUGE = 3;


/* =========================
   今日の日付
========================= */

function getToday(){

    const date = new Date();

    return date.getFullYear()
        + "-"
        + String(date.getMonth() + 1).padStart(2, "0")
        + "-"
        + String(date.getDate()).padStart(2, "0");
}


/* =========================
   昨日の日付
========================= */

function getYesterday(){

    const date = new Date();

    date.setDate(date.getDate() - 1);

    return date.getFullYear()
        + "-"
        + String(date.getMonth() + 1).padStart(2, "0")
        + "-"
        + String(date.getDate()).padStart(2, "0");
}


/* =========================
   記録する
========================= */

function completeRecord(){

    const today = getToday();

    let gauge =
        Number(localStorage.getItem("gauge")) || 0;

    let totalCount =
        Number(localStorage.getItem("totalCount")) || 0;

    let streak =
        Number(localStorage.getItem("streak")) || 0;

    const lastRecordDate =
        localStorage.getItem("lastRecordDate");


    /* =========================
       同じ日に2回記録しない
    ========================= */

    if(lastRecordDate === today){

        alert("今日はもう記録しているよ！");

        return false;
    }


    /* =========================
       記録回数 +1
    ========================= */

    totalCount++;

    gauge++;


    /* =========================
       連続日数
    ========================= */

    if(lastRecordDate === getYesterday()){

        streak++;

    }else{

        streak = 1;
    }


    /* =========================
       保存
    ========================= */

    localStorage.setItem(
        "gauge",
        gauge
    );

    localStorage.setItem(
        "totalCount",
        totalCount
    );

    localStorage.setItem(
        "streak",
        streak
    );

    localStorage.setItem(
        "lastRecordDate",
        today
    );


    /* =========================
       3回でゲージ満タン
    ========================= */

    if(gauge >= MAX_GAUGE){

        localStorage.setItem(
            "gaugeClear",
            "true"
        );

        /* 次のゲージは0から */
        localStorage.setItem(
            "gauge",
            "0"
        );
    }


    return true;
}