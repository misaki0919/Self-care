function nextPage(){

    const nickname = document.getElementById("nickname").value.trim();

    if(nickname === ""){
        alert("ニックネームを入力してください");
        return;
    }

    location.href = "character.html";
}