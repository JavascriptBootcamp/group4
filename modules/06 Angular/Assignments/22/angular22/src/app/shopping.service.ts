import { Injectable } from '@angular/core';
import { cart } from './cart.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  cart: cart[];
  index: number;
  totalPrice: number;
  constructor() {
    this.cart = [];
    this.index = 0;
    this.totalPrice = 0;
  }
  addToCart(item: cart): void {
    this.cart.push(item);
    this.totalPrice += Number(item.price);
  }
  removeFromCart(productId: number): void {
    this.index = 0;
    for (let key of this.cart) {
      if (key.id === Number(productId)) {
        this.cart.splice(this.index, 1);
        this.totalPrice -= Number(key.price);
      }
      this.index++;
    }
  }
  get _getCartArray(): cart[] {
    return this.cart;
  }
  get _getTotalPrice(): number {
    return this.totalPrice;
  }
  removeAllItems(): void {
    this.cart = [];
    this.resetPrice();
  }
  resetPrice(){
    this.totalPrice = 0;
  }
}
