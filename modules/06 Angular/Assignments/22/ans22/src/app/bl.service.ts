import { Injectable } from '@angular/core';
export class Item{
  name:string;
  price:number
  constructor(name,price){
    this.name=name;
    this.price=price;
  }
}
@Injectable({
  providedIn: 'root'
})
export class BlService {
  items:Item[];
  
  constructor() { 
    this.items=[];
    
  }
  addItem(item,price){
    console.log(item,price)
    this.items.push(new Item(item,price))
    return Number(price)
  }
  removeItem(index){
    console.log(event);
    let priceTemp=this.items[index].price
    this.items.splice(index,1);
    return priceTemp
  }
}
