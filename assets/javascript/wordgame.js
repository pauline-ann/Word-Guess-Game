/*
clearBoard();
// restart game when
// all words complete
// out of guesses
*/

// Define variables
var wordBank = ["zelda", "triforce", "mastersword"];
var answerBank = [];

var wordIndex = 0;
var currentWord = wordBank[wordIndex];
var placeholder = getPlaceholder(currentWord);

var guessesLeft = 10;
var score = 0;

// DOM selections
var answerDisplay = document.getElementById("answer");
var guessDisplay = document.getElementById("lettersguessed");

// Manipulate HTML elements
answerDisplay.textContent = placeholder.join(" ");
guessDisplay.textContent = "None";

// Define global functions
function clearBoard() {
    guessesLeft = 10;
    score = 0;
    wordIndex = 0;
    answerBank = [];
    document.getElementById("answer").innerHTML = answerBank;
    document.textContent("message").innerHTML = "Press any key to start the game!";
    document.getElementById("message").style.visibility = "visible";
}

// 
function getPlaceholder(word) {
    return word.split("").map(function (letter) {
        return "_";
    });
}

// Log to console
console.log("Guessing word: " + currentWord);
console.log("Wins: " + score);
console.log("Answer bank:", answerBank);

// Game start when any key is pressed
document.onkeyup = function (event) {

    var userGuess = event.key;
    this.getElementById("message").style.visibility = "hidden";
    document.getElementById("guessesleft").innerHTML = guessesLeft;

    for (i = wordIndex; i < wordBank.length; i++) {

        console.log(wordIndex);
        currentWord = wordBank[i];
        answerDisplay.textContent = placeholder.join(" ");

        // Current word is incomplete
        if (placeholder.includes("_") === true) {

            // >1 guess left & new user guess
            if (guessesLeft > 1 && answerBank.indexOf(userGuess) === -1) {

                // Guess correct
                if (currentWord.includes(userGuess)) {

                    console.log("true");
                    this.getElementById("message").style.visibility = "hidden";

                    // Fill placeholder function with correct guess
                    for (let i = 0; i < currentWord.length; i++) {

                        if (userGuess === currentWord[i]) {
                            placeholder[i] = userGuess;
                        }
                    } // Correct guesses fill in blanks on screen
                    console.log(placeholder);
                    answerDisplay.textContent = placeholder.join(" ");

                    // Current word is completed
                    if (placeholder.includes("_") === false) {

                        wordIndex++;
                        currentWord = wordBank[wordIndex];
                        placeholder = getPlaceholder(currentWord);

                        score++;
                        document.getElementById("score").innerHTML = score;

                        answerBank = [];

                        if (score === 3) {
                            document.getElementById("message").innerHTML = "You win!"
                        }
                    }

                } // Guess incorrect
                else {
                    console.log("false");
                    guessesLeft--;
                    document.getElementById("guessesleft").innerHTML = guessesLeft;
                } // Guesses (correct/incorrect) are stored in answer bank and displayed
                answerBank.push(userGuess);
                guessDisplay.textContent = answerBank.join(", ");

            } // >1 guess left & already guessed
            else if (guessesLeft > 1 && answerBank.indexOf(userGuess) != -1) {
                document.getElementById("message").style.visibility = "visible";
                document.getElementById("message").innerHTML = "You already guessed that!";

            } // One guess left, new user guess
            else if (guessesLeft === 1 && answerBank.indexOf(userGuess) === -1) {

                //Guess correct
                if (currentWord.includes(userGuess)) {

                    console.log("true");
                    this.getElementById("message").style.visibility = "hidden";
                    for (let i = 0; i < currentWord.length; i++) {
                        if (userGuess === currentWord[i]) {
                            placeholder[i] = userGuess;
                        }
                    }
                    answerDisplay.textContent = placeholder.join(" ");
                } // Guess incorrect
                else {
                    console.log("false");
                    guessesLeft--;
                    document.getElementById("message").style.visibility = "visible";
                    document.getElementById("message").innerHTML = "Game over &#9785";
                    document.getElementById("guessesleft").innerHTML = "0";
                }
            } //One guess left, already guessed
            else if (guessesLeft === 1 && answerBank.indexOf(userGuess) != -1) {
                document.getElementById("message").style.visibility = "visible";
                document.getElementById("message").innerHTML = "You already guessed that!";
            }
        }
    }
}