// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

const phrases = ['ACCEPT INPUT FROM', 'How to make a', 'James Bond', 'Cate Blanchett', 'YOUR KEYBOARD'];

function isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
}

function inputLetter() {
    // Prompt user to input data in console.
    console.log("Please input a letter in command line.");

    // When user input data and click enter key.
    standard_input.on('data', function (data) {

        // User input exit.
        if (data.length === 3 && isLetter(data)) {
            // Program exit.
            console.log("User input complete, program exit.");
            process.exit();
        } else {
            // Print user input in console.
            console.log('is not a character.');
        }
    });
}

function getFindsStr(phrase, letters){
    var str = phrase.toLowerCase();
    var arr = str.split('');
    var hiddenStr = '';
    arr.forEach((value) => {
        var returned = false;
        letters.forEach((letter) =>{
            if(letter === ' '){
                hiddenStr += ' ';
                returned = true;
                return;
            }else if(value === letter){
                hiddenStr += letter;
                returned = true;
                return;
            }
        });
        if (returned){
            hiddenStr += '_';
            returned = false;
        }
    });

    return hiddenStr;
}


function isInPhrase(phrase, letter){
    var str = phrase.toLowerCase();
    var arr = str.split('');
    var letterMatched = arr.some((value) => {
        var hasLetter = false;
        if(value !== ' '){
            hasLetter = value === letter ? true:false;
        }
        return hasLetter;
    });
    return letterMatched;
}

function isWon(phrase, letters){
    var str = phrase.toLowerCase();
    var arr = str.split('');
    var allLetterMatched = arr.every((value) => {
        var hasLetter = true;
        if(value !== ' '){
            hasLetter = letters.some((char) => {
                return char === value;
            });
        }
        return hasLetter;
    });
    return allLetterMatched;
}

function runGame() {
    const life = 10;
    var userLetters = [];
    var randomedLetter = phrases[Math.floor(phrases.length * Math.random())];
    //console.log(randomedLetter);
    while(life > 0 && !isWon(randomedLetter, [])){
        inputLetter();
        
    }   
}

//console.log(isLetter('2'));


//console.log(isWon('hi guy', ['h', 'i', 'u', 'y', 'g']));

//runGame();

console.log(getFindsStr('phrase adr', ['a', 's', 'p']));
