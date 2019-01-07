function validateCreditCard (card) {
    function testLength16(card) { // test if card equals 16 and All digit are Numbers
        if (card.length === 16 && /^\d+$/.test(card)) {
            return true;
        }
        return false;
    }
    function testLength19(card) { // test if card equals 19 and has dashes in right places
        if (card.length === 19 && card[4] === '-' && card[9] === '-' && card[14] === '-') {
            return true;
        }
        else {
            return false;
        }
    }
    function testFinaleSumSame(card){ // test if card digit are not the same, if final even and sum grater then 16
        var sumDigits = 0;
        if (!(/^(.)\1+$/.test(card))) { // if all digit are not the same
            for(var i = 0;i <16 ; i++) { // sum all digits
                sumDigits += Number(card[i]);
            }
            if (sumDigits>16 && card[15]%2===0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    function testStringCard(card) { // run test on string
        if (testLength19(card)) {
            card = card.split('-').join(''); // fix dashs
        }
        if (testLength16(card)) {
            if (testFinaleSumSame(card)){
                return true;
            }
        }
        return false;
    } 
    if(isNaN(card)) { // if card is string
        return testStringCard(card);
    }
    else { // if card is number
        return testStringCard(card.toString());
    }
}