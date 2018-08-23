
// initial variables
var wordBank = [
    { word: "zelda" },
    { word: "triforce" },
    { word: "mastersword" }
];
var guessesLeft = 10;
var wins = 0;
var wordIndex = 0;

// to limit characters that may be pressed
var alphabet = "abcdefghijklmnopqrstuvwxyz";

console.log("Press any key to start game");

document.onkeyup = function (event) {

    var currentWord = wordBank[wordIndex].word;
    var userGuess = event.key;

    console.log("Guesses left: " + guessesLeft);
    console.log("Wins: " + wins);

    //wouldn't show on document
    console.log("Guessing word: " + currentWord);


    document.onkeyup = function (event) {

        console.log("User guessed: " + userGuess);

        for (var guessesLeft, guessesLeft > 0, )
            if (currentWord.includes(userGuess)) {
                console.log("true");
                wins++;
            }
            else {
                console.log("false");
                guessesLeft--;
            }
    }
}
    // restart game when finished with words

    //    if (wordIndex < wordBank.length-1) {
    //      index ++;
    //  } 