import { Component, OnInit, ViewChild } from '@angular/core';
import { ManageService } from '../manage.service';
import { Product } from '../product.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @ViewChild ('selectItem') nameSelection;
  @ViewChild ('price') priceAmount;

  products: Product[];
  sum:number;

  constructor(private manageService : ManageService) {
    this.sum =0;
   }

   ngDoCheck() {
     this.sum = this.manageService.getSum();
   }

  ngOnInit() {
    this.products=this.manageService.getProducts();
  }

  addItem () {
    this.manageService.add({ name: this.nameSelection.nativeElement.value, price: this.priceAmount.nativeElement.value});
    this.products = this.manageService.getProducts();
  }

  removeItem (p:Product) {
    this.manageService.remove(p);
    this.products = this.manageService.getProducts();

  }
}