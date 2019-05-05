import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  f: FormGroup;
  constructor(builder: FormBuilder) {

    this.f = builder.group({
      // cardNumber
      card: builder.group({
        CardNumber: [
          "", [
            Validators.required,
            Validators.minLength(9),
          ]
        ],
        NameCard: [
          ""
        ], Expiry: [],
        Security: [""]

      })
    })
  }

  ngOnInit() {
  }

}
