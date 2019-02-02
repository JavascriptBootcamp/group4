var sum = 0;
var creditCardSum;

function addProduct(){
    var shoppingCardTableElem = document.getElementById("shoppingCart");
    var productName = document.getElementById("productsNames").value;
    var productPrice = document.getElementById("itemPrice").value;
    var totalPriceElem = document.getElementById("totalPrice");

    var cart = {
        name : productPrice
    }

    sum += register(cart);
    totalPriceElem.innerHTML=sum;
    
    if(productName && productPrice){
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var btn = document.createElement("button");
        td.innerText = productName;
        tr.appendChild(td);
        td2.innerText = productPrice;
        tr.appendChild(td2);
        btn.onclick = function(){
            this.parentNode.parentNode.remove();
            sum -= register(cart)
            totalPriceElem.innerHTML=sum;
        }
        btn.innerText = "Remove";
        td3.appendChild(btn);
        tr.appendChild(td3);
        shoppingCardTableElem.appendChild(tr);
    }
    else{
        return;
    }
}
    

function register(cart){
    var sum = 0;
    for (var key in cart) {
        if(cart.hasOwnProperty(key)) sum+=parseFloat(cart[key]);       
    }
    return sum;
}
    


    

function validateCreditCard(){
    creditCardSum = 0;
    var creditCardNumber = document.getElementById("cardNumber").value;
    var nameOfCard = document.getElementById("nameOfCard").value;
    var expireDate = document.getElementById("expireDate").value;
    var securityCode = document.getElementById("securityCode").value;
    var paymentForm = document.getElementById("payment");
    var errorMessage = document.getElementById("error");
    var creditObj = validateCreditCard();
    errorMessage.innerText = "";
    console.log(creditCardNumber);
    
    if(creditObj.error || !creditCardNumber || !nameOfCard || !expireDate || !securityCode){
        errorMessage.innerText = creditObj.error;
    }
    else{
        paymentForm.onsubmit = true;
    }
}


function validateCreditCard(){
    var CreditCardNumber = document.getElementById("CardNumber").value;
    var arr = CreditCardNumber.toString().split("-");
    arr = arr.join('').split("");
    var checkNumber;
    var arrWithoutDuplicates = new Array(10).fill(0);
    var NumOfDigitsWithoutDuplicates =0;
    var lastIndex;
    var errorMassage = "";
    //check duplicates numbers in the array and sum between numbers 
    NumOfDigitsWithoutDuplicates = CalcNumbersAndCheckDuplicates(arr,arrWithoutDuplicates,NumOfDigitsWithoutDuplicates);
    lastIndex = arr.length-1;
    lastIndex = arr[lastIndex];
    if(NumOfDigitsWithoutDuplicates >= 2 && !isNaN(checkNumber) && arr.length === 16  && lastIndex % 2 ===0 && creditCardSum > 16 ? true : false) 
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
            error : checkError(lastIndex,arr,NumOfDigitsWithoutDuplicates,errorMassage)
        } 
        return creditObj;
    }
}
    

function CalcNumbersAndCheckDuplicates(arr, arrWithoutDuplicates, NumOfDigitsWithoutDuplicates){
    checkNumber = arr.join('');
    arr = arr.join('').split("");
    arr.forEach(function(item,index){
        creditCardSum+=Number(item);
        arrWithoutDuplicates[item]++;
    });
    for(var i=0; i<arrWithoutDuplicates.length; i++){ 
        if(arrWithoutDuplicates[i] > 0 ){
            NumOfDigitsWithoutDuplicates++;
        }
    }
    return NumOfDigitsWithoutDuplicates;
}
    

function checkError(lastIndex,arr,NumOfDigitsWithoutDuplicates,errorMassage){
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
    else if(creditCardSum <= 16){
        errorMassage = "The sum of all the digits must be greater than 16";
    }
    return errorMassage;
}