import { Injectable } from '@angular/core';
import { Item } from "../models/item.models";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart_items: string[];
  user_cart: Item[];
  total_price: number;

  constructor() { 
    this.cart_items = ["banana", "appel", "candy", "water", "carrot", "umbrella", "juice", "bred", "chicken", "beef"];
    this.user_cart = [];
    this.total_price = 0;
  }

  getItems():string[] {
    return this.cart_items;
  }

  get_user_cart():Item[] {
    return this.user_cart;
  }

  get_total_price(): number {
    return this.total_price;
  }

  add_to_user_cart(name: string, price: number) {
    if(name && price && price>0) {
      this.user_cart.push({name, price});
      this.total_price+=price;
    }
  }

  remove_from_user_cart(item: Item) {
    let index = this.user_cart.indexOf(item);
    if(index !== -1) {
      this.user_cart.splice(index,1);
      this.total_price-=item.price;
    }
  }

}
