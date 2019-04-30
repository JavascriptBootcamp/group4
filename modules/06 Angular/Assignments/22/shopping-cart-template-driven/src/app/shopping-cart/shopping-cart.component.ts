import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Cart} from '../cart.module'
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartArr:Cart[];
  totalPrice:number;
  constructor(private cartService:CartService) { 
    this.cartArr = [];
    this.cartService = cartService;
    this.totalPrice = 0;
  }

  ngOnInit() {
  }

  addItem(selectedItem,price){
   
    this.totalPrice +=  Number(price);
   this.cartArr = this.cartService.addItem(selectedItem,price); 
  }

  remove(index){
    this.totalPrice -= Number(this.cartArr[index].price);
    this.cartService.remove(index);
    
  }

}
