
var inputString = "6666666666661666";

function validateCreditCard(cardNum) {

    var splitedString = cardNum.split("");

    function checkLength() {

        return splitedString.length === 16;
    }

    function isAllNum() {

        return splitedString.every(function (ch) {
            return !isNaN(ch);
        });
    }

    function checkDiff() {

        return splitedString.some(function (ch, i, arr) {

            if (i > 0)
                return arr[i - 1] !== arr[i];
        });
    }

    function isFinalEven() {

        return ((splitedString[splitedString.length - 1]) % 2 === 0);
    }

    function sumIsGreter16() {

        function sumOfNum() {
            return splitedString.reduce(function (sum, ch) {
                return Number(sum) + Number(ch);
            });
        }

        return sumOfNum() > 16;
    }

    return (checkLength() && isAllNum() && checkDiff() && isFinalEven() && sumIsGreter16())
        
}


console.log(validateCreditCard(inputString));
