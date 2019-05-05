import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  products: string[];
  constructor() {
    this.products = [
      'apple',
      'candy',
      'water',
      'carrot',
      'umbrella',
      'proteinShake',
      'bread',
      'shlizel',
      'shkolad',
      'milk'
    ];
  }

  getProducts(){
    return this.products;
  }

  addProducts(product: string){
    
  }
}
