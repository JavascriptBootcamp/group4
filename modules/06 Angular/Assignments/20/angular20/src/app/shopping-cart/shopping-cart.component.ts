import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { cart } from '../cart.model';

 @Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @ViewChild('productsName') productsName;
  @ViewChild('price') price;
  @ViewChild('productToRemove') productToRemove
  totalPrice: number;
  newItem: cart;
  cart: cart[];
  id: number;
  constructor(private shoppingService: ShoppingService) {
    this.totalPrice = 0;
    this.newItem = null;
    this.id = 0;
    this.cart = null;
  }
  ngOnInit() {
  }
  createProductItem() {
    this.newItem = {
      id: this.id,
      name: this.productsName.nativeElement.options[this.productsName.nativeElement.selectedIndex].value,
      price: this.price.nativeElement.value
    }
    this.incrementId();
    this.addItemToCart();
  }
  incrementId() {
    this.id++;
  }
  addItemToCart() {
    this.shoppingService.addToCart(this.newItem);
    this.setDefaultPrice();
    this.getCartArray();
  }
  setDefaultPrice() {
    this.price.nativeElement.value = 0;
  }
  getCartArray() {
    this.cart = this.shoppingService._getCartArray;
    this.calculateTotalPrice();
  }
  calculateTotalPrice() {
    this.totalPrice = this.shoppingService._getTotalPrice;
  }
  removeProduct(productId: number) {
    this.shoppingService.removeFromCart(productId);
    this.calculateTotalPrice();
  }
}