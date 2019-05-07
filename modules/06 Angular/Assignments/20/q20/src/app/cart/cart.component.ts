import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../cart.model';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart :Item[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  addItem(itemName: string,itemPrice: string,action: string){
    this.cartService.addItem({
      name: itemName,
      price: +itemPrice,
      action: action
    });
  }

  removeItem(index: number){
    this.cartService.removeItem(index);
  }
}
