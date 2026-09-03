/* =========================
   ホーム画面
========================= */


/*
    HTML取得
*/

const gaugeFill =
    document.getElementById("gaugeFill");

const gaugeCount =
    document.getElementById("gaugeCount");

const totalCountElement =
    document.getElementById("totalCount");

const streakElement =
    document.getElementById("streak");

const character =
    document.getElementById("character");

const levelText =
    document.getElementById("levelText");


/*
    データ取得
*/

const totalCount =
    Number(localStorage.getItem("totalCount")) || 0;

const gauge =
    Number(localStorage.getItem("gauge")) || 0;

const streak =
    Number(localStorage.getItem("streak")) || 0;


/*
    ゲージ表示
*/

const percent =
    (gauge / 30) * 100;

gaugeFill.style.width =
    percent + "%";


/*
    数字表示
*/

gaugeCount.textContent =
    gauge;

totalCountElement.textContent =
    totalCount;

streakElement.textContent =
    streak;


/*
    LEVEL表示
*/

if(gauge <= 10){

    levelText.textContent =
        "LEVEL 1";

}else if(gauge <= 20){

    levelText.textContent =
        "LEVEL 2";

}else{

    levelText.textContent =
        "LEVEL 3";

}


/*
    キャラクター変更
*/

if(totalCount >= 60){

    character.src =
        "images/big_sowan_3.png";

}else if(totalCount >= 30){

    character.src =
        "images/big_sowan_2.png";

}else{

    character.src =
        "images/big_sowan.png";

}


/*
    セリフ変更
*/

const timeText =
    document.querySelector(".time");


if(totalCount >= 60){

    timeText.textContent =
        "すごい！もっともっと頑張ろう！";

}else if(totalCount >= 30){

    timeText.textContent =
        "わあ！成長したよ！";

}else if(totalCount >= 10){

    timeText.textContent =
        "順調だね！この調子！";

}else{

    timeText.textContent =
        "薬の時間だよ。";

}


/*
    ゲージ達成チェック
*/

const gaugeClear =
    localStorage.getItem("gaugeClear");


if(gaugeClear === "true"){

    showClear();


    /*
        一度表示したら消す
    */

    localStorage.removeItem(
        "gaugeClear"
    );

}


/*
    おめでとう
*/

function showClear(){

    /*
        モーダルがなければ終了
    */

    const modal =
        document.getElementById("clearModal");

    if(!modal){

        return;

    }


    const message =
        document.getElementById("clearMessage");

    const clearCharacter =
        document.getElementById("clearCharacter");

    const changeText =
        document.getElementById("changeText");


    /*
        累計回数によって
        キャラクターを変更
    */

    if(totalCount >= 60){

        clearCharacter.src =
            "images/big_sowan_3.png";

        changeText.textContent =
            "ソワンちゃんがさらに変化したよ！";

    }else{

        clearCharacter.src =
            "images/big_sowan_2.png";

        changeText.textContent =
            "ソワンちゃんが成長したよ！";

    }


    message.textContent =
        totalCount + "回記録したよ！";


    /*
        モーダル表示
    */

    modal.classList.add("show");

}


/*
    おめでとう画面を閉じる
*/

const closeModal =
    document.getElementById("closeModal");


if(closeModal){

    closeModal.addEventListener(
        "click",
        () => {

            document
                .getElementById("clearModal")
                .classList.remove("show");

        }
    );

}