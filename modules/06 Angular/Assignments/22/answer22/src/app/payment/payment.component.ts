import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  totalPrice: number;
  display: boolean;
  constructor(private shoppingCartService: ShoppingCartService) {
    this.totalPrice = this.shoppingCartService._getTotalPrice;
    this.display = false;
  }

  checkCard(form: NgForm) {
    if (form.invalid) {
      this.display = false;
    } else {
      this.display = true;
    }
  }
  ngOnInit() {
  }

}
