
class Account {
    protected accountNumber: number;
    protected ownerAccount: string;
    protected balance: number;

    constructor(accountNumber: number, ownerAccount: string) {

        this.accountNumber = accountNumber;
        this.ownerAccount = ownerAccount;
        this.balance = 0;
    }
    getBalance(): number {
        return this.balance;
    }
    withdraw(amount: number) {
        this.balance -= amount;
    }
    deposit(amount: number) {
        this.balance += amount;
    }
}

class BankAccount extends Account {
    constructor(accountNumber, ownerAccount) {
        super(accountNumber, ownerAccount);
    }



}
class CreditCardAccount extends Account {

    constructor(creditCard, owner) {
    
            super(creditCard, owner);
        

    }
    checkLength(cNum: string): boolean {
        return (cNum.length == 16);
    }
    checkAllItemsNumbers(cNum: string) {

        cNum.split("").forEach(element => {
            if (isNaN(Number(element)))
                return false;

        });
        return true;

    }
    checkDigitsSum(cNum: String) {
        let cSum = 0;
        for (let i = 0; i < cNum.length; i++) {
            cSum += Number(cNum[i]);
        }
        return cSum > 16;
    }


    checkIfAllDigitsSame(cNumbers: string): boolean {
        let cNumbArr = cNumbers.split('');
        let isAllDigitsSame = cNumbArr.every(function (element) {
            return element === cNumbArr[0];
        });
        return !isAllDigitsSame;
    }
    CheckLastDigitEven(cNumbers: string): boolean {
        let lastDigit = Number(cNumbers[cNumbers.length - 1]);
        return (lastDigit % 2 === 0)
    }
    validateCreditCard(creditCard: string): object {
        let creditCardNumbers: string;
        let resObj: object = {};
        let error: string = '';

        creditCardNumbers = creditCard.split("-").join("");

        if (this.checkLength(creditCardNumbers)) {
            if (this.checkAllItemsNumbers(creditCardNumbers)) {
                if (this.checkDigitsSum(creditCardNumbers)) {
                    if (this.checkIfAllDigitsSame(creditCardNumbers)) {
                        if (this.CheckLastDigitEven(creditCardNumbers)) {
                            error += ``;
                        }
                        else {
                            error += `   odd final number`;
                        }
                    }

                    else { error += `  only one type of number`; }
                }
                else { error + `   sum less than 16`; }
            }
            else { error += `    invalid characters`; }
        }

        else { error += `Credit Card Length Must Be 16 Digits`; }

        if (error !== '')
            resObj = {
                number: creditCardNumbers,
                valid: false,
                errors: error
            }
        else
            resObj = {
                number: creditCardNumbers,
                valid: true

            }
        return resObj;
    }
}

//     //OUTPUT EXAMPLES
//     console.log(validateCreditCard("a92332119c011112"));
//     console.log(validateCreditCard("4444444444444444"));
//     console.log(validateCreditCard("1111111111111110"));
//     console.log(validateCreditCard("6666666666666661"));
//     console.log(validateCreditCard("9999-7777-8888-0000"));
//     console.log(validateCreditCard("6666-6666-6666-1666"));

const bankOfAmericaAccount = new BankAccount(123456789, "John Doe");
bankOfAmericaAccount.deposit(5000);
bankOfAmericaAccount.withdraw(2000);

const visaAccount = new CreditCardAccount(4580123412341234, "John Doe");
console.log(visaAccount.validateCreditCard('9999777788880000'));
visaAccount.deposit(10000);
visaAccount.withdraw(3000);
console.log(bankOfAmericaAccount.getBalance()); // 3000
console.log(visaAccount.getBalance()); // 7000
