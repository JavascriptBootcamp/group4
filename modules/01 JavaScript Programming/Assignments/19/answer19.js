var creditCardNumber = "9999777788880000";
//var creditCardNumber = "6666666666661666";
//var creditCardNumber = "a92332119c011112";
//var creditCardNumber = "4444444444444444";
//var creditCardNumber = "1111111111111110";
//var creditCardNumber = "6666666666666661";
//var creditCardNumber = "9999-7777-8888-0000";
//var creditCardNumber = "6666-6666-6666-1666";

var tmparr;

function validateCreditCard(arrDigits) {

    var strnumber = arrDigits.join("");

    if (arrDigits.length != 16)
        return { valid: false, number: creditCardNumber, error: "Worng Length" };

    else if (isNaN(Number(strnumber)))
        return { valid: false, number: creditCardNumber, error: "Card number contains letters" };

    else if (arrDigits.every((value, i, arr) => value === arr[0]))
        return { valid: false, number: creditCardNumber, error: "There must be at least two different numbers" };

    else if (Number(strnumber.charAt(strnumber.length - 1)) % 2 === 1)
        return { valid: false, number: creditCardNumber, error: "Final digit is odd" };

    else if ((arrDigits.reduce((total, value) => Number(total) + Number(value))) <= 16)
        return { valid: false, number: creditCardNumber, error: "The sum of all the digits must be greater than 16" };

    else
        return { valid: true, number: creditCardNumber };
}

tmparr = creditCardNumber.split("").filter((value) => value !== "-");
console.log(validateCreditCard(tmparr));