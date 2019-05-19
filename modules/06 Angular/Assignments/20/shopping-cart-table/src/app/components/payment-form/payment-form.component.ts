import { Component, OnInit } from '@angular/core';

import { CartService } from "../../services/cart.service";
import { Item } from "../../models/item.models";

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  shopping_items: Item[] = [];
  total_price: number = 0;

  constructor( private cartService: CartService) {
  }

  ngOnInit() {
    this.shopping_items = this.cartService.get_user_cart();
    this.total_price = this.cartService.get_total_price();
  }

}
