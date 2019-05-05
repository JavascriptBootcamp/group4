import { Component} from '@angular/core';

class Item{
  name:string;
  price:number
  constructor(name,price){
    this.name=name;
    this.price=price;
  }
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent  {
  items:Item[];
  totalPrice:number;
  constructor() {
    this.items=[];
    this.totalPrice=0;
   }


  addItem(item,price){
    console.log(item,price)
    this.items.push(new Item(item,price))
    this.totalPrice+=Number(price);
  }
  removeItem(event){
    console.log(event);
    this.items.splice(event.path[2].id,1);
    this.totalPrice-=Number(event.path[2].childNodes[1].innerText);
  }
}
