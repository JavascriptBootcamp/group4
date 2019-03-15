class Account{

    constructor(owner, number){
        this.owner = owner;
        this.number = number;
    }

    getBalance(){
        console.log("Account class get balance: Not exists",);
    }

}

class BankAccount extends Account {
    constructor(accountNumber, ownerAccount){
        super(accountNumber,ownerAccount,balance);
        this.balance = balance;
    }

    withdraw(amount){
        this.balance -= amount;
    }
    deposit(amount){
        this.balance += amount;
    }
    getBalance(){
        Account.getBalance();
        console.log("BankAccount class get balance",this.balance);
        return this.balance;
    }
}

class CreditCardAccount extends Account{

    constructor(accountNumber,ownerAccount){
        super(accountNumber,ownerAccount,creditCard);
        let creditCardNumbers =  creditCardWithNoDashes.split("").map(Number);
        let result = this.validate(creditCard,creditCardNumbers)["valid"];
        this.creditCard = result && creditCard;
        this.creditCardNumbersSum = 0;
        this.creditCardWithNoDashes = creditCard.split("-").join("");
        this.creditCardNumbers =  creditCardWithNoDashes.split("").map(Number);
    }
    
    checkLength(creditCardWithNoDashes) {
        return (creditCardWithNoDashes.length == 16);
    }
    
    checkAllItemsNumbers(creditCardNumbers) {
        const isAllItemsNumbers = creditCardNumbers.every(element=>{
            creditCardNumbersSum += element;
            return (element >=0 && element <=9);
        });
        return isAllItemsNumbers;
    }
    
    checkDigitsSum() {
            return (creditCardNumbersSum > 16);
        }
    
    checkIfAllDigitsSame(creditCardNumbers) {
        const isAllDigitsSame = creditCardNumbers.every(function(element){
            return element === creditCardNumbers[0];
        });
        return !isAllDigitsSame;
    }
    
    CheckLastDigitEven(creditCardNumbers) {
        return (creditCardNumbers[creditCardNumbers.length - 1] % 2 == 0)
    }

    validate(creditCard,creditCardNumbers){
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
}


let bankAccount1 = new BankAccount(12345, "Moshe");
let bankAccount2 = new BankAccount(34567, "Eli");
let bankAccount3 = new BankAccount(54321, "Mor");

bankAccount1.deposit(1000);
bankAccount2.deposit(1000);
bankAccount3.deposit(1000);

bankAccount1.withdraw(200);
bankAccount2.withdraw(500);
bankAccount3.withdraw(1500);

console.log(`Account Number: ${ bankAccount1.accountNumber }${"\n"}Owner Account: ${ bankAccount1.ownerAccount}${"\n"}Current Balance: ${ bankAccount1.getBalance()} NIS${"\n"}`);
console.log(`Account Number: ${ bankAccount2.accountNumber }${"\n"}Owner Account: ${ bankAccount2.ownerAccount}${"\n"}Current Balance: ${ bankAccount2.getBalance()} NIS${"\n"}`);
console.log(`Account Number: ${ bankAccount3.accountNumber }${"\n"}Owner Account: ${ bankAccount3.ownerAccount}${"\n"}Current Balance: ${ bankAccount3.getBalance()} NIS`);


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