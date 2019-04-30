import { Injectable } from '@angular/core';
import {Cart} from './cart.module'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartArr:Cart[];
  constructor() { 
    this.cartArr = [];
  }

  
  addItem(selectedItem,price){
 
    this.cartArr.push({item:selectedItem,price:price});
    return this.cartArr;
  }

  remove(index){
    this.cartArr.splice(index,1);
    
  }
}
