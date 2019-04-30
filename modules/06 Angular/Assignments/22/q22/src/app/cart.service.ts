import { Injectable } from '@angular/core';
import { Item } from './cart.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Item[];
  constructor() { 
    this.cart = [];
  }

  addItem(item: Item){
    this.cart.push(item);
  }

  removeItem(index: number){
    this.cart.splice(index,1);
  }

  getCart(){
    return this.cart;
  }
}
