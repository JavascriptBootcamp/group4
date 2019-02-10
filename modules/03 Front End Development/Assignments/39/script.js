var total_price = 0; // counts the total price
var row_id = 2;

function AddRemovePrice(price){
    total_price = total_price+parseInt(price); // updates the total price
    document.getElementById("pricedisplay").innerText='Total Price: '+total_price+'$'; // display updated total price
}

function InsertRowToTable(){
    var itemName = document.getElementById("item_name").value; // get item name
    var itemPrice = document.getElementById("item_price").value; // get item price
    
    if (itemPrice){
        
        AddRemovePrice(itemPrice);
        var table = document.getElementById("myTable"); // get table
        var row = table.insertRow(2); // incsert row 
        row.setAttribute('align','center'); 
        row_id++;
        row.setAttribute('id',row_id);
        
        var cell1 = row.insertCell(0).innerHTML = itemName; // insert and update cell 1
        var cell2 = row.insertCell(1);
        cell2.setAttribute("type", "number");
        cell2.innerHTML = itemPrice;
        
        button = document.createElement("INPUT");
        button.setAttribute("type", "submit");
        button.setAttribute("value", "remove");
        button.setAttribute("onclick", "RemoveRow(this); return false;");
        
        var cell3 = row.insertCell(2).appendChild(button); // insert and update cell 3
    }
    var def = document.getElementById("item_name")[0];
    document.getElementById("item_name").value = 0; // set item name
    document.getElementById("item_price").value = 0; // set item price
}

function RemoveRow(el){
    //var itemPrice = document.getElementById("item_price").value; // get item price
    //AddRemovePrice(-itemPrice);
    var element = el.parentNode.parentNode;
    var itemPrice = element.cells[1].innerHTML;
    //document.getElementById("pricedisplay").innerHTML = itemPrice; // display updated total price
    AddRemovePrice(-itemPrice);
    element.parentNode.removeChild(element);

}

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