import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  f: FormGroup;
  total: number;
  constructor(builder: FormBuilder, private cartService: CartService) {

    this.f = builder.group({

      card: builder.group({
        CardNumber: [
          "", [
            Validators.required,
            Validators.minLength(16),
            Validators.pattern(/^\d*$/),
            this.lastDigit,
            this.differentNumbers,
            this.sumDigits
          ]
        ],
        NameCard: [
          "", [
            Validators.required,
            Validators.pattern(/^[a-z A-z]*$/)]
        ],
        Expiry: [, [
          Validators.required]],
        Security: ["", [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^\d{3}$/)]
        ],
      })
    })
  }

  ngOnInit() {
    if (this.cartService.sum)
      this.total = this.cartService.sum;
    else
      this.total = Number(localStorage.getItem("total"));
  }


  lastDigit(control: FormControl): { [key: string]: boolean } {
    if (control.value[15]) {
      if (control.value[15] % 2 == 0)
        return null;
      else {
        console.log(control);
        return { "lastDigit": true };
      }
    }
  }

  differentNumbers(control: FormControl): { [key: string]: boolean } {
    let numbers: string[] = control.value.split("");
    let isValid: boolean = true;
    if (numbers.length) {
      isValid = numbers.every((value, i, arr) => value === arr[0]);
    }
    if (isValid) {
      return { 'differentNumbers': true };
    }
    return null;
  }

  sumDigits(control: FormControl): { [key: string]: boolean } {
    let numbers: string[] = control.value.split("");
    let sum: number = 0;
    if (numbers.length) {
      numbers.forEach(value => {
        sum += Number(value);
      });
    }
    if (sum <= 16) {
      return { 'sumDigits': true };
    }
    return null;
  }

}
