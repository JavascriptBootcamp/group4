
var inputString = "6666666666661666";

function validateCreditCard(cardNum) {

    var splitedString = cardNum.split("");

    splitedString = splitedString.filter(function (ch) {
        return ch !== "-";
    });

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

    if (checkLength() && isAllNum() && checkDiff() && isFinalEven() && sumIsGreter16())
        return { valid: true, number: inputString };
    else {
        var errorOb = { valid: "false", number: inputString, error: [] };

        if (!checkLength())
            errorOb.error.push("worng length");
        if (!isAllNum())
            errorOb.error.push("all of them must be numbers");
        if (!checkDiff())
            errorOb.error.push("all of the digits cannot be the same");
        if (!isFinalEven())
            errorOb.error.push("The final digit must be even");
        if (!sumIsGreter16())
            errorOb.error.push("The sum of all the digits must be greater than 16");


        return errorOb;
    }


}


console.log(validateCreditCard(inputString));
