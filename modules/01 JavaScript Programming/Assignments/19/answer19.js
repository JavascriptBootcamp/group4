var CreditCardNumber = "9999-7777-8888-0000";
var arr = CreditCardNumber.toString().split("-");
var checkNumber;
var arrWithoutDuplicates = new Array(10).fill(0);
var NumOfDigitsWithoutDuplicates =0;
var lastIndex;
var sum = 0;
var errorMassage = "";

function validateCreditCard(CreditCardNumber){
    //check duplicates numbers in the array and sum between numbers 
    CalcNumbersAndCheckDuplicates(); 
    lastIndex = arr.length-1;
    lastIndex = arr[lastIndex];
    if(NumOfDigitsWithoutDuplicates >= 2 && !isNaN(checkNumber) && arr.length === 16  && lastIndex % 2 ===0 && sum > 16 ? true : false) 
    {
        var creditObj = {
            valid : true ,
            number : checkNumber ,  
        } 
        return creditObj;
    }
    else{
        var creditObj = {
            valid : false ,
            number : checkNumber , 
            error : checkError()
        } 
        return creditObj;
    }
}
function CalcNumbersAndCheckDuplicates(){
    checkNumber = arr.join('');
    arr = arr.join('').split("");

    arr.forEach(function(item,index){
        sum+=Number(item);
        arrWithoutDuplicates[item]++;
    });

    for(var i=0; i<arrWithoutDuplicates.length; i++){ 
       if(arrWithoutDuplicates[i] >0 ){
          NumOfDigitsWithoutDuplicates++;
       }
    }
}

function checkError(){
    if(NumOfDigitsWithoutDuplicates < 2){
        errorMassage = "You must have at least two different digits represented";
    }
    else if(isNaN(checkNumber)){
        errorMassage = "all of them must be numbers";
    }
    else if(arr.length !== 16){
        errorMassage = "Number must be 16 digits";
    }
    else if(lastIndex % 2 !==0){
        errorMassage = "The final digit must be even";
    }
    else if(sum <= 16){
        errorMassage = "The sum of all the digits must be greater than 16";
    }
    else{
         errorMassage = "some other error";
    }
    return errorMassage;
}

console.log(validateCreditCard(CreditCardNumber));
    