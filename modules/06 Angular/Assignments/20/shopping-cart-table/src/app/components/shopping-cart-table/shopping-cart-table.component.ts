import { Component, OnInit } from '@angular/core';

import { CartService } from "../../services/cart.service";
import { Item } from "../../models/item.models";

@Component({
  selector: 'shopping-cart-table',
  templateUrl: './shopping-cart-table.component.html',
  styleUrls: ['./shopping-cart-table.component.css']
})
export class ShoppingCartTableComponent implements OnInit {

  cart_items:string[] = [];
  shopping_items:Item[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cart_items = this.cartService.getItems();
    this.shopping_items = this.cartService.get_user_cart();
  }

  addItem(name: string, price: number) {
    this.cartService.add_to_user_cart(name, price);
  }

  removeItem(name: string, price: number) {
    let item: Item = {name, price};
    this.cartService.remove_from_user_cart(item);
  }

}
