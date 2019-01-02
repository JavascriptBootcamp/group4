var cardObj = {
    isValid: true,
}

// var valid1 = '9999-7777-8888-0000';
// var valid2 = 6666666666661666;
// var invalid1 = 'a92332119c011112';
// var invalid2 = 4444444444444444;
// var invalid3 = 1111111111111110;
// var invalid4 = 6666666666666661;
// var invalid5 = 4444444466666666;
// var invalid6 = 123456789012345; 
// var invalid7 = '7777-7777-7777-7777'; 
// var testCardsArray = [valid1, valid2, invalid1, invalid2, invalid3, invalid4, invalid5, invalid6, invalid7, valid1]; //-->TEST

function validateCreditCard(card) {

    cardObj.number = card;
    var cardString = String(card);
    cardString = cardString.replace(/-/g, ''); // regex: /-/g means replace all "-" g-global with "" (nothing).
    var cardNumber = Number(cardString);

    function isValidNumber() {

        if (isNaN(cardNumber)) {
            cardObj.isValid = false;
            cardObj.error = "invalid_characters";
        }
        else {
            cardObj.isValid = true;
        }

        return cardObj.isValid;
    }

    function isValidLength() {

        if (cardString.length !== 16) {
            cardObj.isValid = false;
            cardObj.error = "wrong_length";
        }
        else {
            cardObj.isValid = true;
        }

        return cardObj.isValid;
    }

    function isDifferentDigits() {

        var isAllSameDigits = true;

        for (var i = 1; i < cardString.length; i++) {

            if (cardString[0] !== cardString[i]) {
                isAllSameDigits = false;
                break;
            }
        }

        if (isAllSameDigits) {
            cardObj.isValid = false;
            cardObj.error = "card_number_digits_is_same";
        }
        else {
            cardObj.isValid = true;
        }

        return cardObj.isValid;
    }

    function isCheckFinalDigit() {
        if (cardNumber % 2 !== 0) {
            cardObj.isValid = false;
            cardObj.error = "final_digit_must_be_even";
        }
        else {
            cardObj.isValid = true;
        }

        return cardObj.isValid;
    }

    function isDigitsSum() {

        var sum = 0;

        while (cardNumber) {
            sum += (cardNumber % 10);
            cardNumber = Math.floor(cardNumber / 10);
        }

        if (sum < 16) {
            cardObj.isValid = false;
            cardObj.error = "The_sum_of_all_digits_is_less_then_16"
        }
        else {
            cardObj.isValid = true;
        }

        return cardObj.isValid;
    }

    if (!isValidNumber()) {
        return cardObj.isValid;
    }
    if (!isValidLength()) {
        return cardObj.isValid;
    }
    if (!isDifferentDigits()) {
        return cardObj.isValid;
    }
    if (!isCheckFinalDigit()) {
        return cardObj.isValid;
    }
    if (!isDigitsSum()) {
        return cardObj.isValid;
    }

    return cardObj.isValid;
}

/* TEST */

// testCardsArray.forEach(element => {
//     if (validateCreditCard(element)) {
//         delete (cardObj.error);
//         console.log(cardObj);
//     }
//     else {
//         console.log(cardObj);
//     }
// });
