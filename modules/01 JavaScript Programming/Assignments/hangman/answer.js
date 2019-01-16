// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

var checkFirst = true;

const phrases = ['ACCEPT INPUT FROM', 'How to make a', 'James Bond', 'Cate Blanchett', 'YOUR KEYBOARD'];
const life = 10;

function isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
}

function inputLetter(randomedPhrase, userGuesses, life) {
    // Prompt user to input data in console.
    console.log("Please input a lower case letter in command line.");
    // When user input data and click enter key.
    if (checkFirst) {
        standard_input.on('data', function (data) {
            // User input exit.
            //standard_input.resume();
            if (data.length === 3 && isLetter(data)) {// because it has also \n
                var checkIfHasTheLetter = userGuesses.some((char) =>{
                    return char === data[0];
                });
                if(!checkIfHasTheLetter){
                    userGuesses.push(data[0]);
                    !isInPhrase(randomedPhrase, userGuesses[userGuesses.length - 1]) && life--;
                    console.log("Thanks.");
                } else{
                    console.log("You've already entered the letter.");
                }
                continueTheGame(randomedPhrase, userGuesses, life);

            } else {
                // Print user input in console.
                console.log('is not a letter, please enter a letter.');
            }
        });
    }
    checkFirst = false;
}

function getFindsStr(phrase, letters) {
    var str = phrase.toLowerCase();
    var arr = str.split('');
    var hiddenStr = '';
    arr.forEach((value) => {
        var returned = false;
        value !== ' ' && letters.forEach((letter) => {
            if (value === letter) {
                hiddenStr += letter;
                returned = true;
                return;
            }
        });
        if (value === ' ') {
            hiddenStr += ' ';
        } else if (!returned) {
            hiddenStr += '_';

        }
        returned = false;
    });

    return hiddenStr;
}


function isInPhrase(phrase, letter) {
    var str = phrase.toLowerCase();
    var arr = str.split('');
    var letterMatched = arr.some((value) => {
        var hasLetter = false;
        if (value !== ' ') {
            hasLetter = value === letter ? true : false;
        }
        return hasLetter;
    });
    return letterMatched;
}

function isWon(phrase, letters) {
    var str = phrase.toLowerCase();
    var arr = str.split('');
    var allLetterMatched = arr.every((value) => {
        var hasLetter = true;
        if (value !== ' ') {
            hasLetter = letters.some((char) => {
                return char === value;
            });
        }
        return hasLetter;
    });
    return allLetterMatched;
}

function runGame(life) {
    var userLetters = [];
    var randomedPhrase = phrases[Math.floor(phrases.length * Math.random())];
    
    continueTheGame(randomedPhrase, userLetters, life);

}

function continueTheGame(randomedPhrase, userLetters, life){
    if (life > 0 && !isWon(randomedPhrase, userLetters)) {
        console.log('Remaining Life:', life);
        console.log('current found matches:', getFindsStr(randomedPhrase, userLetters));
        inputLetter(randomedPhrase, userLetters, life);

    } else {
        console.log(life === 0 ? 'You lost!' : 'You won!');
        process.exit();// Program exit.
    }
}

runGame(life);

