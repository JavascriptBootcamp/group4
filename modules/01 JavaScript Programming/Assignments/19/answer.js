function validateCreditCard(creditCard)
{
    var CreditCardAnalyzer = 
    {
        valid : false,
        number : creditCard,
        error: "wrong_input_type",
    }
    
    // first we wanna see if the value of creditCard is null/undefined/0/false et cetera and some more validations..
    if(creditCard && (typeof creditCard == 'string' || creditCard instanceof String || !isNaN(creditCard)))
    {
        // convert the input to a string so will be more comfortable to validate the input.
        var creditCardStr = String(creditCard);

        switch(creditCardStr.length)
        {
            // Rule No.1
            case 16:
            {
                CreditCardAnalyzer = StandardRulesExaminer(creditCardStr, CreditCardAnalyzer);
                break;
            }
            //Bonus rule No.1
            case 19:
            {
                if(isCreditCardContainValidDashes(creditCardStr))
                {
                    creditCardStr = removeDashesFromCreditCard(creditCardStr);

                    CreditCardAnalyzer = StandardRulesExaminer(creditCardStr, CreditCardAnalyzer);
                }
                else
                {
                    CreditCardAnalyzer.error = "invalid_dashes";
                }
                break;
            }
    
            default:
            {
                CreditCardAnalyzer.error = "wrong_length";
                break;
            }
        }
    }
    
    return CreditCardAnalyzer;
}

// Helper Function for rule No.4.
function sumDigitsOfNumber(theNumber)
{
    var sum = 0;
    
    while(theNumber)
    {
        sum += theNumber % 10;
        theNumber = Math.floor(theNumber / 10);
    }

    return sum;
}


// Rule No.4
function isSumOfAllDigitsGreaterThan16(theNumber)
{
    return sumDigitsOfNumber(theNumber) > 16;
}

// Rule No.3
function isLastDigitEven(theNumber)
{
    return theNumber[theNumber.length - 1] % 2 === 0;
}

// Helper function for bonus No. 1
function isCreditCardContainValidDashes(creditCard)
{
    var creditCardStr = String(creditCard);
    var isValid = true;

    if(creditCardStr.match(/-/g).length !== 3)
    {
        isValid = false;
    }
    else
    {
        for(var i = 4; i < creditCardStr.length; i += 5)
        //1111-1111-1111-1111
        {
            if(creditCardStr[i] !== "-")
            {
                isValid = false;
                break;
            }
        }
    }

    return isValid;
}

// Rule No.2
function isTwoDigitsAtLeastDiff(theNumber)
{
    digitsArray = Array.from(theNumber.toString()).map(Number);

    digitsArray = digitsArray.sort(function(a,b){return a-b});

    return digitsArray[0] !== digitsArray[digitsArray.length - 1];
}
function removeDashesFromCreditCard(theNumber)
{
    return theNumber.replace(/\-/g,'');
}

function StandardRulesExaminer(creditCardStr,CreditCardAnalyzer)
{
    if(isSumOfAllDigitsGreaterThan16(Number(creditCardStr)))
    {

        if(isLastDigitEven(creditCardStr))
        {
            if(isTwoDigitsAtLeastDiff(Number(creditCardStr)))
            {
                delete CreditCardAnalyzer.error;
                CreditCardAnalyzer.valid = true;
            }
            else
            {
                CreditCardAnalyzer.error = "there_is_no_two_diff_digits_atleast";
            }
        }
        else
        {
            CreditCardAnalyzer.error = "last_digit_isnt_even";
        }
    }
    else
    {
        CreditCardAnalyzer.error = "sum_of_digits_isnt_greater_than_16";
    }

    return CreditCardAnalyzer;
}

console.log(validateCreditCard(8888888888888888));
