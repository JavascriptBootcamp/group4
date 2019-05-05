import { Component, OnInit } from '@angular/core';
import { ManageService } from '../manage.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  sum: number;
  creditCard: string;
  valid: boolean;
  secCode : number;
  nameCard : string;

  constructor(private manageService: ManageService) {
    this.sum = 0;
    this.creditCard = "";
    this.valid = false;
    this.secCode = null;
    this.nameCard = "";
  }


  ngDoCheck() {
    this.sum = this.manageService.getSum();
    console.log("get products",this.manageService.getProducts());
  }

  ngOnInit() {
    console.log("payment", this.manageService.getProducts());
  }


  onSubmitForm(f:NgForm) {
    console.log("f",f);
    this.valid = this.validateCreditCard(this.creditCard).valid;
  }

  validateCreditCard(creditCard:string) {
    let creditCardNumbers;
    let creditCardNumbersSum = 0;
    let creditCardWithNoDashes;

    creditCardWithNoDashes = creditCard.split("-");
    creditCardWithNoDashes = creditCardWithNoDashes.join("");
    creditCardNumbers = creditCardWithNoDashes.split("").map(Number);

    function checkLength(creditCardWithNoDashes) {
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
