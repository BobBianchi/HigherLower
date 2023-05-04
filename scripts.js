//declarations
let answer;
let maxNum;
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
    let guess = Number(document.getElementById("numGuess").value);
    let feedback = document.getElementById("feedback");

    if (guess > maxNum || guess < 1) {
        feedback.innerHTML = "That number is not in range, try again.";
    } else if (guess == answer) {
        feedback.innerHTML = "Correct! Refresh to play again";
    } else if (guess > answer) {
        feedback.innerHTML = "Lower, try again.";
    } else if (guess < answer) {
        feedback.innerHTML = "Higher, try again.";
    } else if (isNaN(guess)) {
        feedback.innerHTML = "That is not a number!";
    }
}

//initialize arrays
function init_history() {
    lorem;
}
