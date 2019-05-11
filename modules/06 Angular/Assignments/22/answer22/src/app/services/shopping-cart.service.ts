import { Injectable } from '@angular/core';
import { Cart } from '../cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cart: Cart[];
  totalPrice: number;
  constructor() {
    this.cart = [];
    this.totalPrice = 0;
  }

  addItem(name: string, price: number): void {
    this.cart.push({ name, price });
    this.totalPrice += Number(price);
  }

  removeItem(index: number): void {
    this.totalPrice -= Number(this.cart[index].price);
    this.cart.splice(index, 1);
  }

  get _getCartItems(): Cart[] {
    return this.cart;
  }

  get _getTotalPrice(): number {
    return this.totalPrice
  }
}
