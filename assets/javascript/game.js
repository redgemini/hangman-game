//Pseudocode
//generate a word at random
//correct guesses is less than length of word
//promt user to guess a letter
//if guess correct increment correctGuess by one
//if guess incorrect increment incorrectGuess by one
//if incorrect guesses greater than 5

//Global Variables
//========================================================================================================

//Arrays and Variables
var wordOptions = ["bob schneider", "janis joplin", "robert earl keen", "townes van zandt", 
    "stevie ray vaughn", "willie nelson", "gary clark jr", "jimmie vaughan", "monte montgomery"]
var selectedWord = "";
var lettersinWord = []
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game Counters

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//Functions
//=================================

//Main Process 
//==================================