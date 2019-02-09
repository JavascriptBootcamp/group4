var threeLettersWords = ['buy', 'bus', 'car', 'man'];
var fiveLettersWords = ['David', 'woman'];
var sevenLettersWords = ['Tuesday', 'journal'];

var easyLevelChoiceButton = document.getElementById('easyLevelChoiceButton');
var mediumLevelChoiceButton = document.getElementById('mediumLevelChoiceButton');
var hardLevelChoiceButton = document.getElementById('hardLevelChoiceButton');

easyLevelChoiceButton.addEventListener('click', easyLevelWordGuess);
mediumLevelChoiceButton.addEventListener('click', mediumLevelWordGuess);
hardLevelChoiceButton.addEventListener('click', hardLevelWordGuess);

var displayShuffeledCharsWordElem = document.getElementById('displayShuffeledCharsWord');
var alphabeticCharsOptionsElem = document.getElementById('chooseFromAlphabeticOrderChars');
var resultMessageElem = document.getElementById('resultMessage');


function easyLevelWordGuess() {
    //alphabeticCharsOptionsElem.disabled = false;
    easyLevelChoiceButton.disabled = true;
    mediumLevelChoiceButton.disabled = true;
    hardLevelChoiceButton.disabled = true;
    //resultMessageElem.innerText = '';

    var random3LettersWord = getRandomValue(threeLettersWords);
    var random3LettersWordAsCharsArr= random3LettersWord.split('');
    var shuffeledCharsWord = new RandomWord(random3LettersWordAsCharsArr).randomize(3).toUpperCase();
    
    displayShuffeledCharsWordElem.innerText = shuffeledCharsWord;

    var random3LettersWord = getRandomValue(threeLettersWords).toUpperCase();;
    var random3LettersWordAsCharsArr = random3LettersWord.split(''); 
    var shuffeledCharsWord = new RandomWord(random3LettersWordAsCharsArr).randomize(3);

    displayShuffeledCharsWordElem.innerText = shuffeledCharsWord;

    var alphabeticCharsOrder = getAlphabeticStr(shuffeledCharsWord);
    for(var i = 0; i <= alphabeticCharsOrder.length; i++) {
        if(i>0) {
            var option = document.createElement("option");
            option.text = alphabeticCharsOrder[i-1];
            alphabeticCharsOptionsElem.add(option);
        }
        else {
            var option = document.createElement("option");
            option.text = '';
            alphabeticCharsOptionsElem.add(option);
        }    
    }
    

    var letterIndexNum = 0;
    var correctLetterGuesses = 0;

    alphabeticCharsOptionsElem.onchange = function() {
        //resultMessageElem.innerText = '';

        var choosenLetter = alphabeticCharsOptionsElem.value; 

        if(choosenLetter !== random3LettersWord[letterIndexNum]) {
            resultMessageElem.innerText = `NOT CORRECT: The letter on index number ${letterIndexNum} is ${random3LettersWord[letterIndexNum]}, not ${choosenLetter}`;
            alphabeticCharsOptionsElem.disabled = true;
            setTimeout( () => startNewGame(), 5000);
        }
        else {
            resultMessageElem.innerText = `CORRECT! The letter on index number ${letterIndexNum} is ${choosenLetter}`;
            letterIndexNum++;
            correctLetterGuesses++;
        }

        if(correctLetterGuesses === 3) {
            resultMessageElem.innerText = 'You won the easy level, wait 5 seconds for medium level uploading';
            setTimeout( () => mediumLevelWordGuess(), 5000);
        }   

    }
    
}


function mediumLevelWordGuess() {
    alphabeticCharsOptionsElem.disabled = false;
    easyLevelChoiceButton.disabled = true;
    mediumLevelChoiceButton.disabled = true;
    hardLevelChoiceButton.disabled = true;
    resultMessageElem.innerText = '';

    const optionsNum = alphabeticCharsOptionsElem.children.length;
    for(var i = 0; i < optionsNum; i++) {
        alphabeticCharsOptionsElem.children[0].remove();   
    }

    var random5LettersWord = getRandomValue(fiveLettersWords).toUpperCase();;
    var random5LettersWordAsCharsArr = random5LettersWord.split(''); 
    var shuffeledCharsWord = new RandomWord(random5LettersWordAsCharsArr).randomize(5);
    
    displayShuffeledCharsWordElem.innerText = shuffeledCharsWord;

    var alphabeticCharsOrder = getAlphabeticStr(shuffeledCharsWord);
    for(var i = 0; i <= alphabeticCharsOrder.length; i++) {
        var option = document.createElement("option");
        i > 0 ? option.text = alphabeticCharsOrder[i-1] : option.text = '';
        alphabeticCharsOptionsElem.add(option);
        
    }

    var letterIndexNum = 0;
    var correctLetterGuesses = 0;

    alphabeticCharsOptionsElem.onchange = function() {
        resultMessageElem.innerText = '';

        var choosenLetter = alphabeticCharsOptionsElem.value;     
        
        if(choosenLetter !== random5LettersWord[letterIndexNum]) {
            resultMessageElem.innerText = `NOT CORRECT: The letter on index number ${letterIndexNum} is ${random5LettersWord[letterIndexNum]}, not ${choosenLetter}`;
            alphabeticCharsOptionsElem.disabled = true;
            setTimeout( () => startNewGame(), 5000);
        }
        else {
            resultMessageElem.innerText = `CORRECT! The letter on index number ${letterIndexNum} is ${choosenLetter}`;
            letterIndexNum++;
            correctLetterGuesses++;
        }

        if(correctLetterGuesses === 5) {
            resultMessageElem.innerText = 'You won the medium level, wait 5 seconds for hard level uploading';
            setTimeout( () => hardLevelWordGuess(), 5000);
        }   
    }
}


function hardLevelWordGuess() {
    alphabeticCharsOptionsElem.disabled = false;
    easyLevelChoiceButton.disabled = true;
    mediumLevelChoiceButton.disabled = true;
    hardLevelChoiceButton.disabled = true;

    resultMessageElem.innerText = '';

    const optionsNum = alphabeticCharsOptionsElem.children.length;
    for(var i = 0; i < optionsNum; i++) {
        alphabeticCharsOptionsElem.children[0].remove();   
    }

    var random7LettersWord = getRandomValue(sevenLettersWords).toUpperCase();
    var random7LettersWordAsCharsArr = random7LettersWord.split('');
    var shuffeledCharsWord = new RandomWord(random7LettersWordAsCharsArr).randomize(7);
    
    displayShuffeledCharsWordElem.innerText = shuffeledCharsWord;

    var alphabeticCharsOrder = getAlphabeticStr(shuffeledCharsWord);
    for(var i = 0; i <= alphabeticCharsOrder.length; i++) {
        var option = document.createElement("option");
        i > 0 ? option.text = alphabeticCharsOrder[i-1] : option.text = '';
        alphabeticCharsOptionsElem.add(option);
    }

    var letterIndexNum = 0;
    var correctLetterGuesses = 0;

    alphabeticCharsOptionsElem.onchange = function() {
        resultMessageElem.innerText = '';

        var choosenLetter = alphabeticCharsOptionsElem.value;

        if(choosenLetter !== random7LettersWord[letterIndexNum]) {
            resultMessageElem.innerText = `NOT CORRECT: The letter on index number ${letterIndexNum} is ${random7LettersWord[letterIndexNum]}, not ${choosenLetter}`;
            alphabeticCharsOptionsElem.disabled = true;
            setTimeout( () => startNewGame(), 5000);
        }
        else {
            resultMessageElem.innerText = `CORRECT! The letter on index number ${letterIndexNum} is ${choosenLetter}`;
            letterIndexNum++;
            correctLetterGuesses++;
        }

        if(correctLetterGuesses === 7) {
            resultMessageElem.innerText = 'You won the hard level';
            setTimeout( () => startNewGame(), 5000);
        }      
    }    
}



function startNewGame() {
    resultMessageElem.innerText = '';
    displayShuffeledCharsWordElem.innerText = '';

    const optionsNum = alphabeticCharsOptionsElem.children.length;
    for(var i = 0; i < optionsNum; i++) {
        alphabeticCharsOptionsElem.children[0].remove();   
    }
    
    easyLevelChoiceButton.disabled = false;
    mediumLevelChoiceButton.disabled = false;
    hardLevelChoiceButton.disabled = false;
    alphabeticCharsOptionsElem.disabled = false;
}


function getAlphabeticStr(str) {
    var arr = str.split('');
    var tmp;

    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
        //if ASCII code greater then swap the elements position
        if(arr[i] > arr[j]){
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    return arr.join('');
}



// Shuffle chars of the word
function RandomWord(chars) {  // chars is array of strings/chars
    
    // Accepts a number length as a parameter and generates a string
    this.randomize = function(lengthNum)  {
        var resStr = '';
        var randVal;

        if (lengthNum <= 0) return 'ERROR: YOU MUST PASS A POSITIVE NUMBER AS A PARAMETER!'

        for (var i = 0; i < lengthNum; i++) {
            randVal = Math.floor( (Math.random() * chars.length)  );  //Math.random() = 0 to 1 not including 1
            resStr += chars[randVal];
            chars.splice(randVal, 1);
        }

        return resStr;
    }
}
    

// Utils
// Returns a random number between 0 to value (including value) 
function random(value) {
    return Math.floor(Math.random() * (value + 1)); 
}

// Returns random index number in array 
function getRandomIndex(array) {
    return random(array.length - 1);
}

// Returns value of random index in array 
function getRandomValue(array) {
    return array[ getRandomIndex(array) ];
}

