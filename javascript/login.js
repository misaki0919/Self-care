// function login() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     if (email === "" || password === "") {
//         alert("メールアドレスとパスワードを入力してください。");
//         return;
//     }

//     location.href = "name.html";
// }


function login(){

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if(email === ""){
        alert("メールアドレスを入力してください");
        return;
    }

    if(password === ""){
        alert("パスワードを入力してください");
        return;
    }
    
    location.href = "name.html";
}