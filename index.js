var max = 100;
function checkGuess() {
    var userInput = parseFloat(document.getElementById("userInput").value);
    var correctAnswer = Math.floor(Math.random() * max);
    if (userInput === correctAnswer) {
        console.log(correctAnswer);
        console.log("correct");
    }
    else {
        console.log(correctAnswer);
        console.log("".concat(userInput, " is wrong"));
    }
}
