import { Injectable } from '@angular/core';
import { Product } from './shoppingCart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shoppingCart: Product[];
  sum: number;
  constructor() {
    this.shoppingCart = [];
  }

  addItem(name: string, price: number) {
    this.shoppingCart.push({ name: name, price: price });
    localStorage.setItem("cart", JSON.stringify(this.shoppingCart));
    
  }

  getItems(): Product[] {
    if (localStorage.getItem("cart"))
      this.shoppingCart = JSON.parse(localStorage.getItem("cart"));
    return this.shoppingCart;
  }

  remove(i: number) {
    this.shoppingCart.splice(i, 1);
  }

  sendSumToPayment(sum: number) {
    this.sum = sum;
  }

}