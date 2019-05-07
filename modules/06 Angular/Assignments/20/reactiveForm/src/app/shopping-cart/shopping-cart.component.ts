import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shoppingCart.model';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @ViewChild('select') selected;
  @ViewChild('price') priceSelected;

  shoppingCart: Product[];
  sum: number;
  constructor(
    private cartService: CartService,
    private activeRoute: ActivatedRoute) {

    this.sum=0;
  }

  ngOnInit() {
    this.getItems();
  }

  addItem(): void {
    this.cartService.addItem(this.selected.nativeElement.value, this.priceSelected.nativeElement.value);
    this.sum += Number(this.priceSelected.nativeElement.value);
  }

  getItems(): void {
    this.shoppingCart = this.cartService.getItems();
  }

  remove(i: number,price:number) {
    this.cartService.remove(i);
    this.sum -=price;
  }

  toPayment(sum:number){
    this.cartService.sendSumToPayment(sum);
  }

}