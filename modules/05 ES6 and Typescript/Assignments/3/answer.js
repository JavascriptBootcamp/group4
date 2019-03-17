class Account{
    constructor(owner, number){
        this.owner = owner;
        this.number = number;
        this.balance = 0;
    }

    withdraw(amount){
        this.balance -= amount;
    }

    deposit(amount){
        this.balance += amount;
    }

    getBalance(){
        return this.balance;
    }
}

class BankAccount extends Account {
    constructor(accountNumber, ownerAccount){
        super(accountNumber,ownerAccount);
    }
}

class CreditCardAccount extends Account{

    constructor(creditCardNumber,ownerAccount){
        super(creditCardNumber,ownerAccount);
        const creditCardDigits =  (""+creditCardNumber).split("");
         let result = this.validate(creditCardNumber.toString(),creditCardDigits)["valid"];
        this.creditCard = (result && creditCardNumber) || null;
    }
    
    checkLength(creditCardWithNoDashes) {
        return (creditCardWithNoDashes.length == 16);
    }
    
    checkAllItemsNumbers(creditCardDigits) {
        const isAllItemsNumbers = creditCardDigits.every(element=>{
            return (+element >=0 && +element <=9);
        });
        return isAllItemsNumbers;
    }
    
    checkDigitsSum(creditCardDigits) {
        let sum = 0;
        for(let d in creditCardDigits){
            sum += +d;
        }
        return ( sum > 16);
    }
    
    checkIfAllDigitsSame(creditCardDigits) {
        const isAllDigitsSame = creditCardDigits.every(function(element){
            return +element === creditCardDigits[0];
        });
        return !isAllDigitsSame;
    }
    
    CheckLastDigitEven(creditCardDigits) {
        return (creditCardDigits[creditCardDigits.length - 1] % 2 == 0)
    }

    validate(creditCard,creditCardDigits){
        if (this.checkLength(creditCardDigits)){
            if (this.checkAllItemsNumbers(creditCardDigits)){
                if (this.checkDigitsSum()){
                    if (this.checkIfAllDigitsSame(creditCardDigits)){
                        if (this.CheckLastDigitEven(creditCardDigits)){
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


const bankOfAmericaAccount = new BankAccount(123456789, "John Doe");
bankOfAmericaAccount.deposit(5000);
bankOfAmericaAccount.withdraw(2000);
const visaAccount = new CreditCardAccount(4580123412341234, "John Doe");
visaAccount.deposit(10000);
visaAccount.withdraw(3000);


console.log(bankOfAmericaAccount.getBalance()); // 3000
console.log(visaAccount.getBalance()); // 7000
