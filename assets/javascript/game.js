//Pseudocode
//start=generate a word at random
//correct guesses is less than length of word =Spaces and word letters
//promt user to guess a letter =
//if guess correct increment correctGuess by one
//if guess incorrect increment incorrectGuess by one
//if incorrect guesses greater than 9 (Hangman including face=9)
//Check letter against word to verify 
//Resources: 
//Get each letter out of a word: (https://stackoverflow.com/questions/6484670/how-do-i-split-a-string-into-an-array-of-characters)
//Selecting a random word: https://css-tricks.com/snippets/javascript/select-random-item-array/
//Syntax and operations guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting
//MagentaReds Help!: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//-----------------------------------------------------------------------------------------------------------------------------

//Variables
var wordOptions = ["bob schneider", "janis joplin", "robert earl keen", "townes van zandt", 
    "stevie ray vaughn", "willie nelson", "gary clark jr", "jimmie vaughan", "monte montgomery"];
var selectedWord = "";
var lettersInWord = [];
var numSpaces = 0;
var gameBoard = [];
var attemptedLetters = [];
var findLetterInWord = false;


//Game Stat
var totalWins = 0;
var totalLosses = 0;
var guessesRemaining= 9;

//Functions
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]; 
    lettersInWord = selectedWord.split("");  numSpaces = lettersInWord.length;

    function inspectLetters(letter) {
        alert (letter);
        var lettersInWord = false;
        for (var i=0; i<numBlanks; i++)
    
    
        if(SelectedWord[i] = letter) {
            islettersInWord = true;
            alert("letter found");
        }
    }
for(var i=0; i<numSpaces; i++){
    gameBoard.push("_"); }

//HTML Link
document.getElementById("gameBoard").innerHTML = gameBoard; 
document.getElementById("totalWins").innerHTML = totalWins;
document.getElementById("totalLosses").innerHTML = totalLosses;
document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

//console.log for startGame * 
//Per MagentaReds: Removed from functions for game board to load correctly in log

    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numSpaces);
    console.log(gameBoard);
}


//Processes

startGame();

//NEED TA HELP

document.onKeyUp = function(event){
    var letterSelected = String.fromCharCode(event.toLowerCase)();
    console.log(letterSelected);
}
