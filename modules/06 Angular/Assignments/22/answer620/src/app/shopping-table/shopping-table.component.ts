import { Component, OnInit } from '@angular/core';
import { Cart } from '../Cart';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-table',
  templateUrl: './shopping-table.component.html',
  styleUrls: ['./shopping-table.component.css']
})
export class ShoppingTableComponent implements OnInit {
  cartArr:Cart[];
  totalPrice:number;
  constructor(private shoppingService:ShoppingService) { 
    this.cartArr = [];

    this.totalPrice = 0;
  }

   ngOnInit() {
  }

   addItem(selectedItem,price){

     this.totalPrice +=  Number(price);
   this.cartArr = this.shoppingService.addItem(selectedItem,price); 
  }

   remove(index){
    this.totalPrice -= Number(this.cartArr[index].price);
    this.shoppingService.remove(index);

   }

}
