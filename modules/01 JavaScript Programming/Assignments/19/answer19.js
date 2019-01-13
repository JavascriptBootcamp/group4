function validateCreditCard(creditCard) {
    var creditCardNumbers;
    var creditCardNumbersSum = 0;
    var creditCardWithNoDashes;

    creditCardWithNoDashes = creditCard.split("-");
    creditCardWithNoDashes = creditCardWithNoDashes.join(""); 
    creditCardNumbers =  creditCardWithNoDashes.split("").map(Number);

    function checkLength(creditCardWithNoDashes) {
        return (creditCardWithNoDashes.length == 16);
    }

    function checkAllItemsNumbers(creditCardNumbers) {
        var isAllItemsNumbers = creditCardNumbers.every(function(element){
            creditCardNumbersSum += element;
            return (element >=0 && element <=9);
        });

        return isAllItemsNumbers;
    }

    function checkDigitsSum() {
        return (creditCardNumbersSum > 16);
    }

    function checkIfAllDigitsSame(creditCardNumbers) {
        var isAllDigitsSame = creditCardNumbers.every(function(element){
            return element === creditCardNumbers[0];
        });
        return !isAllDigitsSame;
    }

    function CheckLastDigitEven(creditCardNumbers) {
        return (creditCardNumbers[creditCardNumbers.length - 1] % 2 == 0)
    }

    if (checkLength(creditCardNumbers)){
        if (checkAllItemsNumbers(creditCardNumbers)){
            if (checkDigitsSum()){
                if (checkIfAllDigitsSame(creditCardNumbers)){
                    if (CheckLastDigitEven(creditCardNumbers)){
                        return {valid : true, number : creditCard}
                    }
                    else {
                        return {valid : false, error : "odd final number", number : creditCard}
                    }
                }
                else {
                    return {valid : false, error : "only one type of number", number : creditCard}
                }
            }
            else {
                return {valid : false, error : "sum less than 16", number : creditCard}
            }
        }
        else {
            return {valid : false, error : "invalid characters", number : creditCard}
        }
    }
    else {
        return {valid : false, error : "Credit Card Length Must Be 16 Digits", number : creditCard}
    }
}

//OUTPUT EXAMPLES
console.log(validateCreditCard("a92332119c011112"));
console.log(validateCreditCard("4444444444444444"));
console.log(validateCreditCard("1111111111111110"));
console.log(validateCreditCard("6666666666666661"));
console.log(validateCreditCard("9999-7777-8888-0000"));
console.log(validateCreditCard("6666-6666-6666-1666"));