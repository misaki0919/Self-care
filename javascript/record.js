// 〇を取得
const circles = document.querySelectorAll(".circle");

// ゴミ箱
const deleteBtn = document.getElementById("deleteBtn");

// モーダル
const modal = document.getElementById("modal");
const okBtn = document.getElementById("okBtn");
const cancelBtn = document.getElementById("cancelBtn");

// 〇を押したら選択
circles.forEach(circle => {
    circle.addEventListener("click", () => {
        circle.classList.toggle("selected");
    });
});

// ゴミ箱を押す
deleteBtn.addEventListener("click", () => {

    // 1つでも選択されていたらモーダル表示
    if(document.querySelector(".circle.selected")){
        modal.classList.add("show");
    }
});

// 「いいえ」
cancelBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

// 「はい」
okBtn.addEventListener("click", () => {

    document.querySelectorAll(".circle.selected").forEach(circle => {
        circle.closest(".record-wrap").remove();
    });

    modal.classList.remove("show");
});





// 追加ボタン
const addBtn = document.getElementById("addBtn");

const bottomSheet = document.getElementById("bottomSheet");
const sheetBg = document.getElementById("sheetBg");

const addTaskBtn = document.getElementById("addTaskBtn");
const newTask = document.getElementById("newTask");

// ボトムシートを開く
addBtn.addEventListener("click", () => {
    bottomSheet.classList.add("show");
    sheetBg.classList.add("show");
});

// 背景を押したら閉じる
sheetBg.addEventListener("click", () => {
    bottomSheet.classList.remove("show");
    sheetBg.classList.remove("show");
});

// 項目を追加
addTaskBtn.addEventListener("click", () => {

    const text = newTask.value.trim();

    if(text === "") return;

    const record = document.createElement("div");
    record.className = "record-wrap";

    record.innerHTML = `
        <img src="images/mugic.png" alt="">
        <p class="word zen-maru-gothic-regular">${text}</p>
        <div class="circle"></div>
    `;

    // フッターの前に追加
    document.querySelector(".footer-wrap").before(record);

    // 新しく追加した丸にもイベントを付ける
    const circle = record.querySelector(".circle");
    circle.addEventListener("click", () => {
        circle.classList.toggle("selected");
    });

    newTask.value = "";

    bottomSheet.classList.remove("show");
    sheetBg.classList.remove("show");
});





let pressTimer;
let deleteTarget = null;


// =========================
// 長押しで削除モード
// =========================

function addLongPress(record){
    record.addEventListener("touchstart",()=>{
        pressTimer = setTimeout(()=>{
            record.classList.toggle("delete-mode");
        },800);
    });

    record.addEventListener("touchend",()=>{
        clearTimeout(pressTimer);
    });

    // PC用
    record.addEventListener("mousedown",()=>{
        pressTimer = setTimeout(()=>{
            record.classList.toggle("delete-mode");
        },800);
    });


    record.addEventListener("mouseup",()=>{
        clearTimeout(pressTimer);
    });
}



// 最初からある項目に適用
document.querySelectorAll(".record-wrap")
.forEach(record=>{
    addLongPress(record);
});





// =========================
// ゴミ箱を押した時
// =========================

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete-icon")){
        // 削除する項目を保存
        deleteTarget = e.target.closest(".record-wrap");
        // モーダル表示
        document.getElementById("modal")
        .classList.add("show");
    }
});





// =========================
// はい（削除）
// =========================

document.getElementById("okBtn")
.addEventListener("click",()=>{
    if(deleteTarget){
        deleteTarget.remove();
    }
    document.getElementById("modal")
    .classList.remove("show");
    deleteTarget = null;
});





// =========================
// いいえ（キャンセル）
// =========================

document.getElementById("cancelBtn")
.addEventListener("click",()=>{
    document.getElementById("modal")
    .classList.remove("show");
    deleteTarget = null;
});

// let pressTimer;


// // 長押し検知
// document.querySelectorAll(".record-wrap").forEach(record=>{

//     record.addEventListener("touchstart",()=>{
//         pressTimer = setTimeout(()=>{
//             record.classList.toggle("delete-mode");
//         },800);
//     });
//     record.addEventListener("touchend",()=>{
//         clearTimeout(pressTimer);
//     });

//     // PC用
//     record.addEventListener("mousedown",()=>{
//         pressTimer = setTimeout(()=>{
//             record.classList.toggle("delete-mode");
//         },800);
//     });

//     record.addEventListener("mouseup",()=>{
//         clearTimeout(pressTimer);
//     });
// });

// let deleteTarget = null;
// // 削除ボタン
// document.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("delete-icon")){
//         const target = e.target.closest(".record-wrap");
        
//     }
// });

// // はい
// document.getElementById("okBtn")

// .addEventListener("click",()=>{
//     if(deleteTarget){
//         deleteTarget.remove();
//     }
//     document.getElementById("modal")
//     .classList.remove("show");
// });

// // いいえ

// document.getElementById("cancelBtn")

// .addEventListener("click",()=>{
//     document.getElementById("modal")
//     .classList.remove("show");
//     deleteTarget = null;
// });