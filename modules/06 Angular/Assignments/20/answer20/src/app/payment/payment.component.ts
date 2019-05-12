import { Component, OnInit } from '@angular/core';
import { ManageService } from '../manage.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  f: FormGroup;
  sum: number;
  fetchString: string;



  constructor(builder: FormBuilder, private manageService: ManageService) {
    this.f = builder.group({
      creditCard: ["", [Validators.required, this.cardnumberValidator]],
      creditCardName: ["", Validators.required],
      date: ["", Validators.required],
      securityCode: ["", [Validators.required, Validators.minLength(3)]],
    })

    this.fetchString = null;

  }

  get creditCard() {
    return this.f.get('creditCard');
  }

  get creditCardName() {
    return this.f.get('creditCardName');
  }

  get date() {
    return this.f.get('date');
  }

  get securityCode() {
    return this.f.get('securityCode');
  }



  cardnumberValidator(control: FormControl): { [key: string]: boolean } {

    if (control.value.length === 16) {
      if (validateCreditCard(control.value)) {
        return null;
      } else {
        return { "invalidCardNumber": true };
      }
    } else {
      return { "invalidCardNumber": true };
    }

    function validateCreditCard(creditCard: string) {
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

  ngOnInit() {
    console.log("payment", this.manageService.getProducts());
    this.sum = this.manageService.getSum();
  }

  onSubmitForm() {
    console.log("f is:", this.f);

    const options = {
      method: 'POST',
      body: JSON.stringify(this.f.value),
      headers: {}
    };

    fetch('http://localhost:3000/Order', options)
      .then((response) => {
        this.fetchString = "The fetch is successful";
        return response.json;
      })
      .catch((myJson) => {
        this.fetchString = "The fetch failed";
      });
  }
}
