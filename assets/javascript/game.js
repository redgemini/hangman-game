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

//Variables Defined
    var wordOptions = ["houston", "dallas", "austin", "waco", "lubbock","galveston","amarillo", "mcallen","laredo","odessa","fredericksburg"];
    var selectedWord = "";
    var lettersInWord = [];
    var numSpaces = 0;
    var gameBoard = [];
    var wrongGuesses = [];
    var findLetterInWord = false;


//Game Stat
    var totalWins = 0;
    var totalLosses = 0;
    var guessesRemaining= 9;

//Function Start Game
    function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]; 
    lettersInWord = selectedWord.split("");  
    numSpaces = lettersInWord.length;

    //Reset
    guessesRemaining= 9;
    wrongGuesses = [];
    gameBoard = [];

//Creates game board with correct number of spaces
for(var i=0; i<numSpaces; i++){
    gameBoard.push("_");
}

//HTML Link
document.getElementById("guessThisWord").innerHTML = gameBoard;
document.getElementById("guessesRemaining").innerHTML = guessesRemaining; 
document.getElementById("totalWins").innerHTML = totalWins;
document.getElementById("totalLosses").innerHTML = totalLosses;
document.getElementById("wrongGuesses").innerHTML = wrongGuesses;

//Console.log
console.log(selectedWord);
console.log(lettersInWord);
console.log(numSpaces);
console.log(gameBoard); 
}
//Check if letter is in word
function checkLetters(letter) {
    console.log(letter);

    var isLetterInWord = false;

for(var i=0; i<numSpaces; i++){
       if(selectedWord[i] ===letter){
           isLetterInWord =true;
       }
   }

   if(isLetterInWord){
   for(var i=0; i<numSpaces; i++) {
       if(selectedWord[i] === letter){
           gameBoard[i]=letter;
       }
   } 
}
else {
    wrongGuesses.push(letter);
    guessesRemaining --
}
console.log(gameBoard);
}
//Completing round and updating counters
function roundComplete(){

    console.log("totalWins: " + totalWins + " | totalLosses: " + totalLosses + " | guessesRemaining " + guessesRemaining);

    document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
    document.getElementById("guessThisWord").innerHTML=gameBoard.toString();
    document.getElementById("wrongGuesses").innerHTML=wrongGuesses.join();

//Did player Win?
    if(lettersInWord.toString() === gameBoard.toString()){
    totalWins++;
    alert("WINNER!");

    document.getElementById("totalWins").innerHTML = totalWins;

    startGame();
    }

    else if(guessesRemaining===0){
        totalLosses++;
        alert(selectedWord);

    document.getElementById("totalLosses").innerHTML=totalLosses;

    startGame();
    }
}


//Processes

startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

//Console.log
console.log(letterGuessed);
console.log(gameBoard);

}
//TA Questions - (not sure how to research solutions)...
//1) When letters are entered in HTML the spaces go away. 
//2) commas between spaces will not go away. 
//3) win alert pops up before last word is entered. 
//4)loss counter will not reset.