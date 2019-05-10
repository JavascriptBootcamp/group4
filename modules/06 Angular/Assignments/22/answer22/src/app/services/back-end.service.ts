import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {
  products: Product[];
  cart: Product[];
  totalPrice: number;
  constructor() {
    this.products =[];
    this.cart=[];
    this.totalPrice=0;
    this.getFakeProducts();
  }
  getFakeProducts(){
    for(let i=0;i<5;i++){
      this.products.push(new Product("Carrot",10,"../../assets/images/Carrots.JPG"));
      this.products.push(new Product("Cucumber",5,"../../assets/images/Cucumber.JPG"));
      this.products.push(new Product("Pineapple",6,"../../assets/images/Pineapple.JPG"));
      this.products.push(new Product("Tomato",2,"../../assets/images/Tomato.jpg"));
    }
  }

  postData(url = ``, data = {}){
    return fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
          "Content-Type": "application/json",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data),
    })
    .then(response => response.json()); // parses JSON response into native Javascript objects 
  }

  insertProductToCart(product:Product){
    this.cart.push(product);
  }
  removeProductFromCart(product:Product){
    const index = this.cart.indexOf(product);
    this.cart.splice(index, 1);
  }
  addToTotalPrice(price:number){
    this.totalPrice+=price;
  }
  removeFromTotalPrice(price:number){
    this.totalPrice-=price;
  }
}
