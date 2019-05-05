import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  creditCardNumbers;
  creditCardNumbersSum = 0;
  creditCardWithNoDashes;
  constructor() {
    this.creditCardNumbers = '';
    this.creditCardNumbersSum = 0;
    this.creditCardWithNoDashes = '';
   }

  checkLength(creditCardWithNoDashes) {
    return (creditCardWithNoDashes.length == 16);
  }

  checkAllItemsNumbers(creditCardNumbers) {
    let isAllItemsNumbers = creditCardNumbers.every(function (element) {
      this.creditCardNumbersSum += element;
      return (element >= 0 && element <= 9);
    });

    return isAllItemsNumbers;
  }

  checkDigitsSum() {
    return (this.creditCardNumbersSum > 16);
  }

  checkIfAllDigitsSame(creditCardNumbers) {
    var isAllDigitsSame = creditCardNumbers.every(function (element) {
      return element === creditCardNumbers[0];
    });
    return !isAllDigitsSame;
  }

  CheckLastDigitEven(creditCardNumbers) {
    return (creditCardNumbers[creditCardNumbers.length - 1] % 2 == 0)
  }

  validateCreditCard(creditCard) {
    this.creditCardWithNoDashes = creditCard.split("-");
    this.creditCardWithNoDashes = this.creditCardWithNoDashes.join("");
    this.creditCardNumbers = this.creditCardWithNoDashes.split("").map(Number);

    if (this.checkLength(this.creditCardNumbers)) {
      if (this.checkAllItemsNumbers(this.creditCardNumbers)) {
        if (this.checkDigitsSum()) {
          if (this.checkIfAllDigitsSame(this.creditCardNumbers)) {
            if (this.CheckLastDigitEven(this.creditCardNumbers)) {
              return { valid: true, number: creditCard }
            }
            else {
              return { valid: false, error: "odd final number", number: creditCard }
            }
          }
          else {
            return { valid: false, error: "only one type of number", number: creditCard }
          }
        }
        else {
          return { valid: false, error: "sum less than 16", number: creditCard }
        }
      }
      else {
        return { valid: false, error: "invalid characters", number: creditCard }
      }
    }
    else {
      return { valid: false, error: "Credit Card Length Must Be 16 Digits", number: creditCard }
    }
  }
}
