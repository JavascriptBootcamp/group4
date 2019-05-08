import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  f: FormGroup;
  totalPrice: any;
  constructor(private activatedRoute:ActivatedRoute,builder:FormBuilder) {
    this.totalPrice = this.activatedRoute.snapshot.params.price;

    this.f = builder.group({
      // username

      CardNumber: [
        "", [
          Validators.required,
          //  Validators.maxLength(16),
          Validators.max(999999999999999),
          Validators.min(100000000000000),
          this.CheckLastDigitEvenvalidator,
          this.checkIfAllDigitsSamevalidator,
          this.checkDigitsSumvalidator//,

          // this.myvalidator
        ]
      ],
      cardname: [
        "Mesisterano", [
          Validators.required,
          Validators.maxLength(16)
        ]
      ],
      ExpiryDate: [
        "Mesisterano", [
          Validators.required
        ]
      ],
      SecurityCode: [
        "Mesisterano", [
          Validators.required,
          Validators.maxLength(3)
        ]
      ]

    })
  }
  CheckLastDigitEvenvalidator(control: FormControl): { [key: string]: boolean } {
    // console.log(control.value.toString()[15])
    if ((control.value && control.value.toString().length < 16) || control.value.toString()[15] % 2 === 0) {
      return null;
    }
    return {
      'containsB': true
    }
  }

  checkIfAllDigitsSamevalidator(control: FormControl): { [key: string]: boolean } {
    console.log(control.value.toString().length)
    if (control.value && control.value.toString().length === 16) {
      let arrayValue = Array.from(control.value.toString());

      let isAllDigitsSame = arrayValue.every((element) => {
        return element === arrayValue[0];

      });
      return { 'invalid_characters': isAllDigitsSame };
    } else {
      return null;
    }

  }
  
  checkDigitsSumvalidator(control: FormControl): { [key: string]: boolean } {
  
    if (control.value && control.value.toString().length === 16) {
      let arrayValue = Array.from(control.value.toString());
        var creditCardNumbersSum=0;
      arrayValue.map((element) => {
        creditCardNumbersSum += +element;

      });
      console.log(creditCardNumbersSum)
      return { 'invalid_sum': creditCardNumbersSum < 16 };
    } else {
      return null;
    }

  }
  onSubmit(e) {
    e.preventDefault();
    // console.log('f', this.f);
    // console.log('f.get.lastname', this.f.get('username').get('lastname'));
    return false
  }
}
