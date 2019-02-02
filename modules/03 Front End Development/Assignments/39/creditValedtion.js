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