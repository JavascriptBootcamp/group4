
class Account {
    constructor(accountNumber , ownerAccount ) {
        this.accountNumber = accountNumber;
        this.ownerAccount = ownerAccount;
        this.balance = 0;
       }
    getBalance() {
        return this.balance;
    }
}

class BankAccount extends Account{
       constructor(accountNumber, ownerAccount){
        super(accountNumber,ownerAccount );
 }
    withdraw(amount){
        this.balance -= amount;
    }
    deposit(amount){
    this.balance += amount;
    }
 }




 class  CreditCardAccount extends Account{
    constructor(accountNumber, ownerAccount){
        super(accountNumber,ownerAccount );
        }
       
 
 withdraw(amount){
    this.balance -= amount;
}
deposit(amount){
this.balance += amount;
}
    validateCreditCard(creditCard) {
        let creditCardNumbers;
        let creditCardWithNoDashes;
        creditCardWithNoDashes = creditCard.split("-");
        creditCardWithNoDashes = creditCardWithNoDashes.join(""); 
        creditCardNumbers =  creditCardWithNoDashes.split("").map(Number);
           if (this.checkLength(creditCardNumbers)){
            if (this.checkAllItemsNumbers(creditCardNumbers)){
                if (this.checkDigitsSum(creditCardNumbers)){
                    if (this.checkIfAllDigitsSame(creditCardNumbers)){
                        if (this.CheckLastDigitEven(creditCardNumbers)){
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

 checkLength(creditCardWithNoDashes) {
        return (creditCardWithNoDashes.length == 16);
    }

   checkAllItemsNumbers(creditCardNumbers) {
        var creditCardNumbersSum = 0;
        var isAllItemsNumbers = creditCardNumbers.every((element)=>{
            creditCardNumbersSum += element;
            return (element >=0 && element <=9);
            
        });

        return isAllItemsNumbers;
    }

     checkDigitsSum(creditCardNumbers) {
console.log(creditCardNumbers);
        var creditCardNumbersSum = 0;
        var isAllItemsNumbers = creditCardNumbers.every(function(element){
            console.log(+element);
            creditCardNumbersSum += +element;
            
        });
        return (creditCardNumbersSum > 16);
    }

  checkIfAllDigitsSame(creditCardNumbers) {
        var isAllDigitsSame = creditCardNumbers.every(function(element){
            return element === creditCardNumbers[0];
        });
        return !isAllDigitsSame;
    }

    CheckLastDigitEven(creditCardNumbers) {
        return (creditCardNumbers[creditCardNumbers.length - 1] % 2 == 0)
    }
 }

 
const bankOfAmericaAccount = new BankAccount("123456789", "John Doe");
bankOfAmericaAccount.deposit(5000);
bankOfAmericaAccount.withdraw(2000);
const visaAccount = new CreditCardAccount("4580123412341234", "John Doe");
visaAccount.deposit(10000);
visaAccount.withdraw(3000);


console.log(bankOfAmericaAccount.getBalance()); // 3000
console.log(visaAccount.getBalance()); // 7000
