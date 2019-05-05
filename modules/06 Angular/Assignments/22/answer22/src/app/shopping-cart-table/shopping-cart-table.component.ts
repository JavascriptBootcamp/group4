import { Component, OnInit } from '@angular/core';
import {IShoppingCart} from './IShoppingC';

@Component({
  selector: 'app-shopping-cart-table',
  templateUrl: './shopping-cart-table.component.html',
  styleUrls: ['./shopping-cart-table.component.css']
})
export class ShoppingCartTableComponent implements OnInit, IShoppingCart {
possibleTableNeededElements: IShoppingCart[];
  constructor() {
    this.possibleTableNeededElements = [];
  }

  ngOnInit() {
    this.possibleTableNeededElements=[
      {name:"Banana",
    price:10}
    ]
  }
  addItem() {
    }


}
