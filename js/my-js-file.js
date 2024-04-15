let mylog = document.querySelector("p");
mylog.addEventListener("click", updateNme);
function updateNme() {
    let name = prompt("Enter a new name");
    mylog.textContent = `Player 1: ${name}`;
}