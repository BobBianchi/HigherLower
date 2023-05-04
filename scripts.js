let guess;

function gameStart() {
    guess = Number(document.getElementById("numGuess").value);
    console.log(guess);
    if (isNaN(guess)) {
        alert("Guess was not a number. Please resubmit");
    } else if (guess % 1 != 0) {
        alert("Guess was not a whole number. Please resubmit");
    } else {
        gameScript();
    }
}

function gameScript() {
    let = 1;
}
