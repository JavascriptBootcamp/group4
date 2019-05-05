import { Component } from '@angular/core';
class Item{
  name:string;
  price:number;
  constructor(item,price){
    this.name = item;
    this.price = price;
  }
}
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent {
  items:Item[];
  totalPrice:number;
  constructor() {
    this.items=[];
    this.totalPrice=0;
  }
  addToCart(item,price){
    this.items.push(new Item(item,price));
    this.totalPrice += Number(price);
  }
  removeFromCart(event){
    let price = this.items[event.path[2].id].price;
    this.totalPrice -= Number(price);
    this.items.splice(event.path[2].id,1);
  }
}
