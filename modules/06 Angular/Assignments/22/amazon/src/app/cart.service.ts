import { Injectable } from '@angular/core';
// import {shoppingCart} from './shoppingCart.model';
import { Product } from './shoppingCart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shoppingCart: Product[];
  constructor() {
    this.shoppingCart = [{ name: "ball", price: 8 }];
  }

  addItem(name:string,price:number) {
    this.shoppingCart.push({name:name,price:price});
  }

  getItems():Product[] {
    return this.shoppingCart;
  }

  remove(i:number){
    this.shoppingCart.splice(i,1);
  }

}
