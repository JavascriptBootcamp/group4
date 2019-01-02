

// Returns true if every digit in num parameter is number
// Returns false if there is one or more digit(s) in num parameter is not a number
function eachCharIsDigit(num) {
    var numericDigit = 0;

    for (var i = 0; i < num.length; i++) {
        numericDigit = Number(num[i]);  
        if (isNaN(numericDigit)) return false;
    }
    return true;
}
//console.log(eachCharIsDigit('333346736827678'));



// Returns true if all digits in num are same
// Returns false otherwise
function allDigitsAreSame(num) {
    var firstDigit = Number(num.substring(0, 1));
    //console.log('first digit: ', firstDigit);
    var countOfFirstDigit = 1;

    // var secondDigit = Number(num.substring(1, 2));
    // console.log('second digit: ', secondDigit);

    for (var i = 1; i < num.length; i++) {
        numericDigit = Number(num[i]);  

        if (numericDigit === firstDigit) countOfFirstDigit++;    
    }

    if (countOfFirstDigit === num.length) return true;

    return false;
}

//console.log(allDigitsAreSame('33333333334'));


// Returns true if a final digit of num is even
// Returns false otherwise (if a final digit of num is odd)
function isFinalDigitEven(num) {
    var finalDigit = Number(num.substring(num.length-1, num.length));
    if (finalDigit % 2 === 0) return true;
    return false;
}
//console.log(isFinalDigitEven('79879879858'));


const DIGITS_MINIMAL_SUM = 17;

// Returns true if the sum of num digits equals or bigger than a minimal required sum
// Returns false otherwise
function correctDigitsSum(num) {
    var numDigitsSum = 0;

    for (var i = 0; i < num.length; i++) {
        numDigitsSum += Number(num[i]);
    }

    if (numDigitsSum >= DIGITS_MINIMAL_SUM) return true;

    return false;

}
//console.log(correctDigitsSum('6666666666666661'));


function validateCreditCard(cardNum) {

    //Remove the dashes from the input string before checking if the input credit card number is valid
    var cardNumCharsArr = cardNum.split('');
    //console.log('cardNumCharsArr: ', cardNumCharsArr);

    var cardNumCharsArrNoDashes = [];

    for (var i = 0; i < cardNumCharsArr.length; i++) {
        if (cardNumCharsArr[i] === '-') cardNumCharsArr.splice(cardNumCharsArr[i], 0);
        else cardNumCharsArrNoDashes.push(cardNumCharsArr[i]);
    }
    //console.log('cardNumCharsArrNoDashes: ', cardNumCharsArrNoDashes);
    
    var cardNumStr = cardNumCharsArrNoDashes.join();
    //console.log('cardNumStr: ', cardNumStr);

    var cardNumFinalStr = '';

    for (var i = 0; i < cardNumStr.length; i++) {
        if (cardNumStr[i] !== ',') cardNumFinalStr += cardNumStr[i];
    }
    //console.log('cardNumFinalStr: ', cardNumFinalStr);

    var errorMessage = '';

    // Number must be 16 digits, all of them must be numbers
    if (cardNumFinalStr.length !== 16) {
        errorMessage += '\n ERROR: The card number must contain 16 digits';
    }

    if (!eachCharIsDigit(cardNumFinalStr)) {
        errorMessage += '\n ERROR: Each char of the card number must be a digit';
    }

    // Must have at least two different digits represented (all of the digits cannot be the same)
    if (allDigitsAreSame(cardNumFinalStr)) {
        errorMessage += '\n ERROR: The card number must contain at least two different digits';
    }

    // The final digit must be even
    if (!isFinalDigitEven(cardNumFinalStr)) {
        errorMessage += '\n ERROR: The final digit of the card number must be even';
    }

    // The sum of card num digits must be greater than 16
    if (!correctDigitsSum(cardNumFinalStr)) {
        errorMessage += `\n ERROR: The sum of card num digits must be greater than ${DIGITS_MINIMAL_SUM-1}`;
    }

    if (errorMessage !== '') {
        errorMessage += '\n'
        console.log(errorMessage);
        return false;
    }

    return true;
}


//validateCreditCard('663-6-6-6----------6666666666');
//console.log( validateCreditCard('6666-6666-6666-166') );
