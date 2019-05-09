import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../shopping-cart.service';
import { Item } from '../Item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  totalPrice: number;
  items: Item[];
  constructor(private shoppingCart: ShoppingCartService) {
    this.totalPrice = 0;
    this.getItems();
  }

  ngOnInit() {
  }

  addItem(product, price) {

    this.totalPrice = this.shoppingCart.addItem(product.value, price.value);
    price.value = "";
  }

  getItems() {
    this.items = this.shoppingCart.getItems();
  }

  removeItem() {
    this.totalPrice = this.shoppingCart.removeItem();

  }


}
