//Pseudocode
//start=generate a word at random
//correct guesses is less than length of word =Spaces and word letters
//promt user to guess a letter =
//if guess correct increment correctGuess by one
//if guess incorrect increment incorrectGuess by one
//if incorrect guesses greater than 5
//Resources: 
//Get each letter out of a word: (https://stackoverflow.com/questions/6484670/how-do-i-split-a-string-into-an-array-of-characters)
//Selecting a random word: https://css-tricks.com/snippets/javascript/select-random-item-array/
//Syntax and operations guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting
//Arrays and Variables

var wordOptions = ["bob schneider", "janis joplin", "robert earl keen", "townes van zandt", 
    "stevie ray vaughn", "willie nelson", "gary clark jr", "jimmie vaughan", "monte montgomery"];
var selectedWord = "";
var lettersInWord = [];
var numSpaces = 0;
var gameBoard = [];
var attemptedLetters = [];
var letterSelected= "letterSelected".toLowerCase();

//Game Stat
var totalWins = 0;
var totalLosses = 0;
var guessesRemaining= 9;

//Functions
function startGame() {
selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    console.log(selectedWord);
lettersInWord = selectedWord.split("");
    console.log(lettersInWord);
numSpaces = lettersInWord.length;
    console.log(numSpaces);

for(var i=0; i<numSpaces; i++){
    gameBoard.push("_");
}
        console.log(gameBoard);

//HTML Link
document.getElementById("gameBoard").innerHTML = gameBoard; 
document.getElementById("totalWins").innerHTML = totalWins;
document.getElementById("totalLosses").innerHTML = totalLosses;
document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
}

//Main Process 

startGame();