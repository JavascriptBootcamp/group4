import { Injectable } from '@angular/core';
import { Item } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Item[];
  total: number;

  constructor() { 
    this.cart = [];
    this.total = 0;
  }

  addItem(item: Item){
    this.cart.push(item);
    this.total += item.price;
  }

  removeItem(index: number){
    this.total -= this.cart[index].price;
    this.cart.splice(index,1);
  }

  getCart(): Item[]{
    return this.cart;
  }

  getTotal(): number{
    return this.total;
  }
}
