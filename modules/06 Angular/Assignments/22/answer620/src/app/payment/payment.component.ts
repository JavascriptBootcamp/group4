import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  CardNumberModel: string="";
  cardnameModel: string="";
  ExpiryDate: string="";
  SecurityCodeModel: number=0;
  valid: boolean;
  totalPrice: any;
  constructor(private activatedRoute:ActivatedRoute) {
    this.totalPrice = this.activatedRoute.snapshot.params.price;
  
  }
  onSubmit(e,f: NgForm) {
    
    e.preventDefault();
    this.valid = this.validateCreditCard(this.CardNumberModel).valid;
  }

   validateCreditCard(creditCard:string) {
    let creditCardNumbers;
    let creditCardNumbersSum = 0;
    let creditCardWithNoDashes;

     creditCardWithNoDashes = creditCard.split("-");
    creditCardWithNoDashes = creditCardWithNoDashes.join("");
    creditCardNumbers = creditCardWithNoDashes.split("").map(Number);

     function checkLength(creditCardWithNoDashes) {
    console.log(creditCardWithNoDashes.length )
      return (creditCardWithNoDashes.length == 16);
    }

     function checkAllItemsNumbers(creditCardNumbers) {
      let isAllItemsNumbers = creditCardNumbers.every(function (element) {
        creditCardNumbersSum += element;
        return (element >= 0 && element <= 9);
      });

       return isAllItemsNumbers;
    }

     function checkDigitsSum() {
      return (creditCardNumbersSum > 16);
    }

     function checkIfAllDigitsSame(creditCardNumbers) {
      let isAllDigitsSame = creditCardNumbers.every(function (element) {
        return element === creditCardNumbers[0];
      });
      return !isAllDigitsSame;
    }

     function CheckLastDigitEven(creditCardNumbers) {
      return (creditCardNumbers[creditCardNumbers.length - 1] % 2 == 0)
    }

     if (checkLength(creditCardNumbers)) {
      if (checkAllItemsNumbers(creditCardNumbers)) {
        if (checkDigitsSum()) {
          if (checkIfAllDigitsSame(creditCardNumbers)) {
            if (CheckLastDigitEven(creditCardNumbers)) {
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