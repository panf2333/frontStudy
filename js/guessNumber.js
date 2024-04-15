let randomNumber = getRandomNumber();
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener("click", checkGuess);
guessField.focus();
document.addEventListener("DOMContentLoaded", () => {
    // guessField.focus();
    const elements = document.querySelectorAll("div");
    for (const element of elements) {
        console.log(element);
    }
})

function checkGuess() {
    // alert("I am a placeholder");
    const userGuess = Number(guessField.value);
    if (guessCount == 1) {
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += userGuess + " ";
    
    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = userGuess < randomNumber ? "Last guess was too low!" : "Last guess was too high!";
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.id = "resetButton"
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessField.disabled = false;
    guessSubmit.disabled = false;

    const resetParas = document.querySelectorAll(".resultParas p")
    for (const iterator of resetParas) {
        iterator.textContent = "";
    }
    guessField.value = "";
    guessField.focus();
    lastResult.style.backgroundColor = "white";

    guessCount = 1;
    randomNumber = getRandomNumber();
    resetButton = document.querySelector("#resetButton");
    resetButton.parentElement.removeChild(resetButton);
    // document.removeChild(resetButton)
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}