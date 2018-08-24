/*
produceWord();
clearBoard();
//where to place this function?
//win when word is fully complete; score++

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

var displayP = document.getElementById("answer");
var lettersGuessedP = document.getElementById("lettersguessed");

// Manipulate HTML elements

displayP.textContent = placeholder.join(" ");
lettersGuessedP.textContent = "None";

// Define global functions

function clearBoard() {
    guessesLeft = 10;
    score = 0;
    wordIndex = 0;
    document.getElementById("answer").innerHTML = "_ _ _ _ _";
    document.textContent("message").innerHTML = "Press any key to start the game!";
    document.getElementById("message").style.visibility = "visible";
}

function getPlaceholder(word) {
    return word.split("").map(function(letter) {
        return "_";
    });
}

// Log to console

console.log("Guessing word: " + currentWord);
console.log("Guesses left: " + guessesLeft);
console.log("Wins: " + score);
console.log("Answer bank:", answerBank);

// Game start when any key is pressed

document.onkeyup = function (event) {

    this.getElementById("message").style.visibility = "hidden";

    var userGuess = event.key;

    console.log("User guessed: " + userGuess);
    
    if (guessesLeft > 0 && answerBank.indexOf(userGuess) === -1) {

        if (currentWord.includes(userGuess)) {
            console.log("true");
            // letter should fill answer array
            // update on html
            for (let i = 0; i < currentWord.length; i++) {
                if (userGuess === currentWord[i]) {
                    placeholder[i] = userGuess;
                }
            }

            displayP.textContent = placeholder.join(" ");
        }
        else {
            console.log("false");
            guessesLeft--;
            document.getElementById("guessesleft").innerHTML = guessesLeft;
            // letter will fill answer array
            // show on letters guessed
            // shouldnt be able to be used to guess anymore
        }

        answerBank.push(userGuess);
        lettersGuessedP.textContent = answerBank.join(", ");
    }
    else {
        console.log("You already guessed that!");
        // clearBoard();
    }
 }