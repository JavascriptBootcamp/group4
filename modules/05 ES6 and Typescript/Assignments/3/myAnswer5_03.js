var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(accountNumber, ownerAccount) {
        this.accountNumber = accountNumber;
        this.ownerAccount = ownerAccount;
        this.balance = 0;
    }
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    return Account;
}());
var BankAccount = /** @class */ (function (_super) {
    __extends(BankAccount, _super);
    function BankAccount(accountNumber, ownerAccount) {
        return _super.call(this, accountNumber, ownerAccount) || this;
    }
    return BankAccount;
}(Account));
var CreditCardAccount = /** @class */ (function (_super) {
    __extends(CreditCardAccount, _super);
    function CreditCardAccount(creditCard, owner) {
        // let validResultObj = validateCreditCard(creditCard);
        // console.log(validResultObj);
        // if (this.validateCreditCard(creditCard).valid) {
        return _super.call(this, creditCard, owner) || this;
        // }
        // else {
        // console.log('non');}
    }
    CreditCardAccount.prototype.checkLength = function (cNum) {
        return (cNum.length == 16);
    };
    CreditCardAccount.prototype.checkAllItemsNumbers = function (cNum) {
        cNum.split("").forEach(function (element) {
            if (isNaN(Number(element)))
                return false;
        });
        return true;
    };
    CreditCardAccount.prototype.checkDigitsSum = function (cNum) {
        var cSum = 0;
        for (var i = 0; i < cNum.length; i++) {
            cSum += Number(cNum[i]);
        }
        return cSum > 16;
    };
    CreditCardAccount.prototype.checkIfAllDigitsSame = function (cNumbers) {
        var cNumbArr = cNumbers.split('');
        var isAllDigitsSame = cNumbArr.every(function (element) {
            return element === cNumbArr[0];
        });
        return !isAllDigitsSame;
    };
    CreditCardAccount.prototype.CheckLastDigitEven = function (cNumbers) {
        var lastDigit = Number(cNumbers[cNumbers.length - 1]);
        return (lastDigit % 2 === 0);
    };
    CreditCardAccount.prototype.validateCreditCard = function (creditCard) {
        var creditCardNumbers;
        var resObj = {};
        var error = '';
        creditCardNumbers = creditCard.split("-").join("");
        if (this.checkLength(creditCardNumbers)) {
            if (this.checkAllItemsNumbers(creditCardNumbers)) {
                if (this.checkDigitsSum(creditCardNumbers)) {
                    if (this.checkIfAllDigitsSame(creditCardNumbers)) {
                        if (this.CheckLastDigitEven(creditCardNumbers)) {
                            error += "";
                        }
                        else {
                            error += "   odd final number";
                        }
                    }
                    else {
                        error += "  only one type of number";
                    }
                }
                else {
                    error + "   sum less than 16";
                }
            }
            else {
                error += "    invalid characters";
            }
        }
        else {
            error += "Credit Card Length Must Be 16 Digits";
        }
        if (error !== '')
            resObj = {
                number: creditCardNumbers,
                valid: false,
                errors: error
            };
        else
            resObj = {
                number: creditCardNumbers,
                valid: true
            };
        return resObj;
    };
    return CreditCardAccount;
}(Account));
//     //OUTPUT EXAMPLES
//     console.log(validateCreditCard("a92332119c011112"));
//     console.log(validateCreditCard("4444444444444444"));
//     console.log(validateCreditCard("1111111111111110"));
//     console.log(validateCreditCard("6666666666666661"));
//     console.log(validateCreditCard("9999-7777-8888-0000"));
//     console.log(validateCreditCard("6666-6666-6666-1666"));
var bankOfAmericaAccount = new BankAccount(123456789, "John Doe");
bankOfAmericaAccount.deposit(5000);
bankOfAmericaAccount.withdraw(2000);
var visaAccount = new CreditCardAccount(4580123412341234, "John Doe");
console.log(visaAccount.validateCreditCard('9999777788880000'));
visaAccount.deposit(10000);
visaAccount.withdraw(3000);
console.log(bankOfAmericaAccount.getBalance()); // 3000
console.log(visaAccount.getBalance()); // 7000
