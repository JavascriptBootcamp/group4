
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  products : Product[];
  sum : number;

  constructor() { 
    this.products = [];
    this.sum = 0;
  }

  add(p:Product) {
    this.products.push(p);
    this.sum = this.sum + Number(p.price);
  }

  remove(p:Product) {
    this.products.splice(this.products.indexOf(p),1);
    this.sum = this.sum - Number(p.price);
  }

  getProducts () {
    return this.products;
  }

  getSum() {
    return this.sum;
  }

}