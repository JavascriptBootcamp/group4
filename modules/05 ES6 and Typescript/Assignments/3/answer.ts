class Account {

  protected number: number;
  protected owner: string;
  protected balance: number;

  constructor(number: number, owner: string) {
      this.number = number;
      this.owner = owner;
      this.balance = 0;
  }

  getBalance() {
      return this.balance;
  }
}

class BankAccount extends Account {
  constructor(number, owner) {
	
      super(number, owner);
      this.balance = 0;
  }

  withdraw(amount: number) {
    return this.balance -= amount;
  }

  deposit(amount: number) {
    return this.balance += amount;
  }

  getBankAccountNumber() {
    return this.number;
  }

  getBankAccountOwner() {
    return this.owner;
  }
}
class CreditCardAccount extends Account {
  constructor(number: number, owner: string) {
      super(number,owner);
      this.balance = 0;
  }

  withdraw(amount: number) {
    return this.balance -= amount;
  }

  deposit(amount: number) {
      return this.balance += amount;
  }

    eachCharIsDigit(num: string): boolean {
    let numericDigit: number = 0;

    for (let i: number = 0; i < num.length; i++) {
        numericDigit = Number(num[i]);  
        if (isNaN(numericDigit)) return false;
    }
    return true;
  }

   allDigitsAreSame(num: string): boolean {
    let numericDigit: number;
    let firstDigit = Number(num.substring(0, 1));
    let countOfFirstDigit = 1;

    for (let i: number = 1; i < num.length; i++) {
      numericDigit = Number(num[i]);  

      if (numericDigit === firstDigit) countOfFirstDigit++;    
    }

    if (countOfFirstDigit === num.length) return true;

    return false;
  }

   isFinalDigitEven(num: string): boolean {
    let finalDigit = Number(num.substring(num.length-1, num.length));
    if (finalDigit % 2 === 0) return true;
    return false;
  }

   correctDigitsSum(num: string): boolean {
    const DIGITS_MINIMAL_SUM: number = 17;
    let numDigitsSum: number = 0;

    for (let i: number = 0; i < num.length; i++) {
        numDigitsSum += Number(num[i]);
    }

    if (numDigitsSum >= DIGITS_MINIMAL_SUM) return true;

    return false;
  }


   validateCreditCard(cardNum: string): object {
    const DIGITS_MINIMAL_SUM: number = 17;
      let resObj = {};
      let errorMessage: string = '';

      // Number must be 16 digits, all of them must be numbers
      if (cardNum.length !== 16) {
          errorMessage += 'The card number must contain 16 digits';
      }

      if (!this.eachCharIsDigit(cardNum)) {
          errorMessage += '    Each char of the card number must be a digit';
      }

      // You must have at least two different digits represented (all of the digits cannot be the same)
      if (this.allDigitsAreSame(cardNum)) {
          errorMessage += '    The card number must contain at least two different digits';
      }

      // The final digit must be even
      if (!this.isFinalDigitEven(cardNum)) {
          errorMessage += '     The final digit of the card number must be even';
      }

      // The sum of card num digits must be greater than 16
      if (!this.correctDigitsSum(cardNum)) {
          errorMessage += `     The sum of card num digits must be greater than ${DIGITS_MINIMAL_SUM-1}`;
      }

      if (errorMessage !== '') {
          resObj = {
              valid: false, 
              number: cardNum,
              error: errorMessage
          }

          return resObj;
      }

      resObj = {
        valid: true, 
        number: cardNum 
      }

      return resObj;
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
