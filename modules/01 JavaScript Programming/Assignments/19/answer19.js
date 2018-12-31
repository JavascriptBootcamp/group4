function validateCreditCard (CreditCardNumber){

    var CreditCardNum = updateCreditCardFormat(CreditCardNumber);
     if(!numberLengthValidation(CreditCardNum)){
         return {
            valid: false,
             number: CreditCardNumber, 
             error: "wrong_length"
         }
     }
    
    if(!areNumbers(CreditCardNum)){
        return {
            valid: false,
             number: CreditCardNumber, 
             error: "invalid characters"
         }
    }
    if(areTheSameDigits(CreditCardNum)){
        return {
            valid: false,
             number: CreditCardNumber, 
             error: "only one type of number"
         }
    }
    if(!isFinalDigitEven(CreditCardNum)){
        return {
            valid: false,
             number: CreditCardNumber, 
             error: "odd final number"
         }
    }
    if(!isSumGreaterThanSixTeen(CreditCardNum)){
        return {
            valid: false,
             number: CreditCardNumber, 
             error: "sum less than 16"
         }
    }

    return {
        valid: true,
        number: CreditCardNumber, 
    }

}

function updateCreditCardFormat(CreditCardNumber){
    var CreditCard = CreditCardNumber.split("-");
    if(CreditCard.length>0){
      var updateCreditCard = "";
      for(var i=0;i<CreditCard.length;i++){
        updateCreditCard += CreditCard[i];
      }
      return updateCreditCard;
}
    else
      return CreditCardNumber;
}


function numberLengthValidation(CreditCardNum){
    CreditCard_len = CreditCardNum.split("").length;
    if(CreditCard_len == 16){
        return true;
    }
    else
        return false;
}


function areNumbers(CreditCardNum){
    CreditCardNum_numbers = CreditCardNum.split("");
    var isNumber = true;
    for(var i=0;i<CreditCardNum_numbers.length;i++){
        isNumber = isNumber && !isNaN(CreditCardNum_numbers[i]);
    }
    return isNumber;
}


function areTheSameDigits(CreditCardNum){

    var CreditCardDigits = CreditCardNum.split("");
    var areTheSame = true;
    for(var i=0;i<CreditCardDigits.length-1;i++){
        if(CreditCardDigits[i] != CreditCardDigits[i+1]){
            areTheSame = false;
            break;
        }
    }
    return areTheSame;

}


function isFinalDigitEven(CreditCardNum){

var CreditCardDigits = CreditCardNum.split("");
var lastDigit = CreditCardDigits[CreditCardDigits.length-1];
if(lastDigit % 2 == 0){
    return true;
}
else
    return false;
}


function isSumGreaterThanSixTeen(CreditCardNum){

    var CreditCardDigits = CreditCardNum.split("");
    var sum = 0 ;
    for(var i=0;i<CreditCardDigits.length;i++){
         sum += Number(CreditCardDigits[i]) ;
    }
    if(sum > 16){
        return true;
    }
    else
        return false;
}

//validateCreditCard("9a23-3211-a901-1112");
validateCreditCard("1111-1111-1111-1006");
//validateCreditCard("1111-1111-1111-1112");