import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../services/back-end.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent{
  products: Product[];
  cart: Product[];
  constructor(private BackEndService: BackEndService ) {
    this.products = this.BackEndService.products;
    this.cart = this.BackEndService.cart;
  }
  // addToCart(item,price){
  //   this.items.push(new Item(item,price));
  //   this.totalPrice += Number(price);
  // }
  // removeFromCart(event){
  //   let price = this.items[event.path[2].id].price;
  //   this.totalPrice -= Number(price);
  //   this.items.splice(event.path[2].id,1);
  // }
}
