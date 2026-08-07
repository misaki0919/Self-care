const nextButton = document.querySelector(".next");
const errorMessage = document.querySelector(".error-message");
// console.log(nextButton,errorMessage)

nextButton.addEventListener("click", () => {
// console.log("hello");
    const selectedCharacter = document.querySelector(
        'input[name="chara"]:checked'
    );

    if (!selectedCharacter) {
        errorMessage.textContent = "キャラを選んでね！";
        return;
    }


    localStorage.setItem(
        "character",
        selectedCharacter.value
    );


    location.href = "support.html";

});


