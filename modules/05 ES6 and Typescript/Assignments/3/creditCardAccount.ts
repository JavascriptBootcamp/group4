class CreditCardAccount extends Account {
  constructor(number: number, owner: string) {
      super(123, "Some name");
      this.balance = 0;
  }

  withdraw(amount: number) {
    return this.balance -= amount;
  }

  deposit(amount: number) {
      return this.balance += amount;
  }


  // Credit card validation methods:

  // Returns true if every digit in num parameter is number
  // Returns false if there is one or more digit(s) in num parameter is not a number
  public eachCharIsDigit(num: string): boolean {
    let numericDigit: number = 0;

    for (let i: number = 0; i < num.length; i++) {
        numericDigit = Number(num[i]);  
        if (isNaN(numericDigit)) return false;
    }
    return true;
  }
 
  
  // Returns true if all digits in num are same
  // Returns false otherwise
  public allDigitsAreSame(num: string): boolean {
    let numericDigit: number;
    let firstDigit = Number(num.substring(0, 1));
    //console.log('first digit: ', firstDigit);
    let countOfFirstDigit = 1;

    // var secondDigit = Number(num.substring(1, 2));
    // console.log('second digit: ', secondDigit);

    for (let i: number = 1; i < num.length; i++) {
      numericDigit = Number(num[i]);  

      if (numericDigit === firstDigit) countOfFirstDigit++;    
    }

    if (countOfFirstDigit === num.length) return true;

    return false;
  }


  // Returns true if a final digit of num is even
  // Returns false otherwise (if a final digit of num is odd)
  public isFinalDigitEven(num: string): boolean {
    let finalDigit = Number(num.substring(num.length-1, num.length));
    if (finalDigit % 2 === 0) return true;
    return false;
  }


  // Returns true if the sum of num digits equals or bigger than a minimal required sum (bigger than 16)
  // Returns false otherwise
  public correctDigitsSum(num: string): boolean {
    const DIGITS_MINIMAL_SUM: number = 17;
    let numDigitsSum: number = 0;

    for (let i: number = 0; i < num.length; i++) {
        numDigitsSum += Number(num[i]);
    }

    if (numDigitsSum >= DIGITS_MINIMAL_SUM) return true;

    return false;
  }

  
  public validateCreditCard(cardNum: string): object {
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
