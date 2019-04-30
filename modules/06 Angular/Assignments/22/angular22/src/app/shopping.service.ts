import { Injectable } from '@angular/core';
import {cart} from './cart.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  cart : cart[];
  constructor() { 
    this.cart = [];
  }
  addToCart(item : cart){
    this.cart.push(item);
  }
  get _getCartArray(){
    return this.cart;
  }
    
  
}
