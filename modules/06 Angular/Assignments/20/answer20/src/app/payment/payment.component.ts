import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  totalPrice: number;
  form: FormGroup;
  displaySuccess: boolean;
  displayError: boolean;

  constructor(private shoppingCartService: ShoppingCartService, builder: FormBuilder) {
    this.totalPrice = this.shoppingCartService._getTotalPrice;
    this.displaySuccess = false;
    this.displayError = false;
    this.form = builder.group({
      number: ["", [Validators.required, this.validateLengthAndNumbers, this.validateSum, this.validateLastDigitEven, this.validateTwoDifferentDigit]],
      name: ["", [Validators.required]],
      date: ["", [Validators.required]],
      code: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    })
  }

  validateLengthAndNumbers(control: FormControl): { [key: string]: boolean } {
    if (control.value.length === 16 && !isNaN(control.value)) {
      return null;
    }
    return {
      'lengthAndAllNumbers': true
    }
  }

  validateSum(control: FormControl): { [key: string]: boolean } {
    let sum: number = 0;
    for (let i = 0; i < control.value.length; i++) {
      sum += Number(control.value[i]);
    }
    if (sum > 16) {
      return null
    }
    return {
      'sum': true
    }
  }

  validateLastDigitEven(control: FormControl): { [key: string]: boolean } {
    if (control.value.length === 16 && control.value[15] % 2 === 0) {
      return null;
    }
    return {
      'lastDigitIsEven': true
    }
  }

  validateTwoDifferentDigit(control: FormControl): { [key: string]: boolean } {
    let arrCreditNumber = Array.from(control.value);

    let isAllTheSame = arrCreditNumber.every((element) => {
      return arrCreditNumber[0] === element;

    });
    if (isAllTheSame) {
      return {
        'allTheSame': isAllTheSame
      }
    } else
      return null;
  }


  submit() {
    if (this.form.valid) {
      this.displaySuccess = true;
      fetch("http://localhost:3000/Order").then(function (response) {
        return response.json();
      })
        .then(function (data) {
          console.log(JSON.stringify(data));
        });
    }
    else {
      this.displaySuccess = false;
      this.displayError = true;
    }
  }

  ngOnInit() {
  }

}
