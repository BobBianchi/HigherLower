//declarations
let answer;
let maxNum;
let history = [];

//promt to get Max Number
answer = get_max("Enter the Max Number for our guessing game.");

function get_max(prompt) {
    let valid_input = false;
    let num, input;

    while (!valid_input) {
        input = window.prompt(prompt);

        maxNum = Number(input);

        if (maxNum != NaN && maxNum > 0) {
            valid_input = true;
        }
    }
    console.log(`maxNum inputed was ${maxNum}`);
    num = Math.floor(Math.random() * Math.round(maxNum)) + 1;
    return num;
}

//console log target answer
console.log(`The answer is ${answer}`);

//on button click
function gameStart() {
    let guess = Math.round(Number(document.getElementById("numGuess").value));
    let feedback = document.getElementById("feedback");
    let repeat = false;

    if (history.includes(guess)) {
        feedback.innerHTML = "That number has already been guessed";
        repeat = true;
    } else {
        if (guess > maxNum || guess < 1) {
            feedback.innerHTML = "That number is not in range, try again.";
        } else if (guess == answer) {
            history.push(guess);
            feedback.innerHTML = `Correct! It took you ${history.length} time(s) to guess it and your guesses were ${history}. Refresh to play again`;
        } else if (guess > answer) {
            feedback.innerHTML = "Lower, try again.";
            history.push(guess);
        } else if (guess < answer) {
            feedback.innerHTML = "Higher, try again.";
            history.push(guess);
        } else if (isNaN(guess)) {
            feedback.innerHTML = "That is not a number!";
        } else {
            feedback.innerHTML = "Error";
        }
        if (repeat === true) {
            history.pop();
            repeat = false;
        }
        console.log(`List of guesses: ${history}`);
    }
}
