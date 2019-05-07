import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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
          ]
        ],
        NameCard: [
          "", [
            Validators.required]
        ], Expiry: [, [
          Validators.required]],
          Security: ["", [
          Validators.required]]

      })
    })
  }

  ngOnInit() {
    if (localStorage.getItem("total"))
      this.total = Number(localStorage.getItem("total"));
    else {
      this.total = this.cartService.sum;
      localStorage.setItem("total", (this.total).toString());
    }
  }

}
