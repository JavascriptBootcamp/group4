import { Injectable } from '@angular/core';

export interface Products {
  itemName: string;
  itemPrice: number;
}
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  products: Products[];
  myProducts: Products[] = [];
  constructor() {
    this.products = [
      {
        itemName: 'apple',
        itemPrice: 1.35
      },
      {
        itemName: 'candy',
        itemPrice: 0.99
      },
      {
        itemName: 'water',
        itemPrice: 25.01
      },
      {
        itemName: 'carrot',
        itemPrice: 0.6
      },
      {
        itemName: 'umbrella',
        itemPrice: 1.25
      },
      {
        itemName: 'proteinShake',
        itemPrice: 3.25
      },
      {
        itemName: 'bread',
        itemPrice: 7.5
      },
      {
        itemName: 'shnizel',
        itemPrice: 30.99
      },

      {
        itemName: 'milk',
        itemPrice: 6.25
      }
    ];
  }
  getProducts() {
    return this.products;
  }

  addProducts(myProduct: Products, myProducts: Products[]) {
    myProducts.push(myProduct);
    console.log(myProduct);
  }

  removeProduct(myProduct: Products, myProducts: Products[]) {

    console.log("called",myProduct,myProducts);
    const index = this.myProducts.indexOf(myProduct);
    console.log(index);
    if (index > -1) {
      this.myProducts.splice(index, 1);
    }
  }
}
