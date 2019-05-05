import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  totalPrice:string;
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute = activatedRoute;
    this.totalPrice = this.activatedRoute.snapshot.params.price;
   }

  ngOnInit() {
  }

}
