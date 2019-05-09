import { Component} from '@angular/core';
import {Item, BlService} from '../bl.service'



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent  {
  //blService:BlService
  totalPrice:number;
  constructor(private blService:BlService) {
    this.totalPrice=0;
    
   }
   addItem(item,price){
    this.totalPrice+= this.blService.addItem(item,price)
   }
   removeItem(i){
    this.totalPrice-= this.blService.removeItem(i)
   }

}
