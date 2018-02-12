//Pseudocode
//start=generate a word at random
//correct guesses is less than length of word =Spaces and word letters
//promt user to guess a letter =
//if guess correct increment correctGuess by one
//if guess incorrect increment incorrectGuess by one
//if incorrect guesses greater than 5


//Arrays and Variables
var wordOptions = ["bob schneider", "janis joplin", "robert earl keen", "townes van zandt", 
    "stevie ray vaughn", "willie nelson", "gary clark jr", "jimmie vaughan", "monte montgomery"];
var selectedWord = "";
var lettersInWord = []
var numSpaces = 0;
var spacesAndSuccesses = [];
var wrongLetters = [];

//Game Stats

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

}
}
//Main Process 

startGame();