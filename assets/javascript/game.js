
// new game

function clearBoard() {
    guessesLeft = 10;
    score = 0;
    wordIndex = 0;
    document.getElementById("answer").innerHTML = "_ _ _ _ _";
    document.getElementById("start").style.visibility = "visible";
}

clearBoard();

// define variables

var wordBank = ["zelda", "triforce", "mastersword"];
var zelda = [" _ ", " _ ", " _ ", " _ ", " _ "];
var triforce = [" _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ "];
var mastersword = [" _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ "];
var answerBank = [zelda, triforce, mastersword];

var wordIndex = 0;
var currentWord = wordBank[wordIndex];

var guessesLeft = 10;
var score = 0;

//console.log

//will not be shown to player
console.log("Guessing word: " + currentWord);
//incorporate into changing id in html
console.log("Guesses left: " + guessesLeft);
console.log("Wins: " + score);
console.log("Press any key to start game");

//define functions

    function produceWord() {

        for (var i = 0; i < wordBank.length; i++) {
            
            answerBank[i];

            var wordOnScreen = document.getElementById("answer");

            wordOnScreen.innerHTML = answerBank[i];
            
        }
    }


    document.onkeyup = function (event) {

        this.getElementById("start").style.visibility = "hidden";

        var userGuess = event.key;

        console.log("User guessed: " + userGuess);
    
        if (guessesLeft > 0) {

            if (currentWord.includes(userGuess)) {
                console.log("true");
                // letter should fill answer array
                // update on html
            }
            else {
                console.log("false");
                guessesLeft--;
                console.log("Guesses left: " + guessesLeft);
                // letter will fill answer array
                // show on letters guessed
                // shouldnt be able to be used to guess anymore
            }
        }
        else {
            clearBoard();
        }
    }


    
    produceWord();
    //where to place this function?





    //win when word is fully complete

    // restart game when
        // all words complete
        // out of guesses