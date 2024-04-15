let mylog = document.querySelector("p");
mylog.addEventListener("click", updateNme);
function updateNme() {
    let name = prompt("Enter a new name");
    mylog.textContent = `Player 1: ${name}`;
}


document.addEventListener("DOMContentLoaded", () => {
    function createParagraph() {
        const para = document.createElement("p");
        para.textContent = "You click the button!";
        document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll("button");

    for (const button of buttons) {
        button.addEventListener("click", createParagraph);
    }
})