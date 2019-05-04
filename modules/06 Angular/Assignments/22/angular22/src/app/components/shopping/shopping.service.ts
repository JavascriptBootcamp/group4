import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  products: Product[];
  totalSum: number;
  constructor() {
    this.products = [];
    this.totalSum = 0;
  }
  addProduct(nameProduct: string, priceProduct: string): void {
    let pricePro: number = parseFloat(priceProduct);
    this.products.push({ name: nameProduct, price: pricePro });
    this.totalSum += pricePro;
  }
  removeProduct(index: number) {
    this.totalSum -= this.products[index].price;
    this.products.splice(index, 1);
  }
}
