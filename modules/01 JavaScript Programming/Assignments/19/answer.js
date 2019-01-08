function validateCreditCard(cardNumber){

    //Will return true if at least 2 digits are different
    function doesTwoDiffDigits(cardNumberAsArray){
        var result = cardNumberAsArray.some(function(item){
                return item !== cardNumberAsArray[0];
        });
        return result;
    }
    //will return the sum of all digits in the array (array must contain strings of numbers)
    function sumOfNumbers(cardNumberAsArray){
        var sum = 0;
        cardNumberAsArray.forEach(function(item){
                sum += parseInt(item);
        });
        return sum;
    }

    //will return true if the card number stands in all the demands, else will return false and log the reason
    function isValid(cardNumberAsArray){
        if(cardNumberAsArray.length===16)
        {
            if(doesTwoDiffDigits(cardNumberAsArray))
            {
                if(cardNumberAsArray[cardNumberAsArray.length-1]%2===0)
                {
                    if(sumOfNumbers(cardNumberAsArray)>16)
                    {
                        Certification.valid = true;
                        return Certification;
                    }
                    else
                    {
                        Certification.valid = false;
                        Certification.error = "Not Valid - Sum is smaller than 16";
                        return Certification;
                    }
                }
                else
                {
                    Certification.valid = false;
                    Certification.error = "Not Valid - Last digit is not even";
                    return Certification;
                }
            }
            else
            {
                Certification.valid = false;
                Certification.error = "Not Valid - All digit are the same";
                return Certification;
            }
        }
        else
        {
            Certification.valid = false;
            Certification.error = "Not Valid - Number of digit is not 16";
            return Certification;
        }
    }
    //declare an object to hold the validation info
    var Certification = {
        number: cardNumber
    }
    //will check what type of input the user inserted, change it into array of strings and transfer it to the "isValid" function (unless it contained unautorized characters)
    if(typeof(cardNumber)==="string")
    {
        cardNumber = cardNumber.split('-');
        cardNumber = cardNumber.join('');
        if(isNaN(cardNumber))
        {
            Certification.valid = false;
            Certification.error = "Not Valid - contain not numeric characters";
            return Certification;
        }
        else
        {   
            var cardNumberAsArray = cardNumber.split('');
            return isValid(cardNumberAsArray);
        }
    }
    else if (typeof(cardNumber)==="number")
    {
        cardNumberAsArray = cardNumber.toString().split('');
        return isValid(cardNumberAsArray);
    }

}
