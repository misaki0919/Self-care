function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("メールアドレスとパスワードを入力してください。");
        return;
    }

    location.href = "name.html";
}