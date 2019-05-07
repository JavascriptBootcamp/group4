import { Injectable } from '@angular/core';

import{Item} from './Item.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cart:Item[];
  totalPrice:number;
  constructor() { this.cart=[]; }


  addItem(product,p){
      let item :Item = {product:product,price:+p};
      this.cart.push(item);
      return this.calculate();

  }
  removeItem(){
    this.cart.pop();
    return this.calculate();

  }

  calculate(){
    this.totalPrice=0;
    for(let item of this.cart){
        this.totalPrice+=item.price;
    }
    return this.totalPrice;

  }
  getItems(){
    return this.cart;
  }



}
