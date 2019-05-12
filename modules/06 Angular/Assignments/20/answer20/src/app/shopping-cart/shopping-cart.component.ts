import { Component, OnInit, ViewChild } from '@angular/core';
import { Cart } from '../cart.model';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @ViewChild('price') price;
  @ViewChild('selectedProduct') selectedProduct;
  totalPrice: number;
  cart: Cart[];
  constructor(private shoppingCartService: ShoppingCartService) {
    this.totalPrice = 0;
    this.cart = [];
  }

  addProduct(): void {
    this.shoppingCartService.addItem(this.selectedProduct.nativeElement.value, this.price.nativeElement.value);
    this.getCartAndTotalPrice();
  }

  removeProduct(i: number): void {
    this.shoppingCartService.removeItem(i);
    this.getCartAndTotalPrice();
  }

  getCartAndTotalPrice() {
    this.cart = this.shoppingCartService._getCartItems;
    this.totalPrice = this.shoppingCartService._getTotalPrice;
  }

  ngOnInit() {
  }

}
