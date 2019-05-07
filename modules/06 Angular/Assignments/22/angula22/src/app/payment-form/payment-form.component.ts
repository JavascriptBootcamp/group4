import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  totalPrice:number;
  cardNumber:string;
  cardOwner:string;
  expirateDate:string;
  securityCode:string;

  constructor(private shoppingCart: ShoppingCartService) {    this.getTotalPrice();
 }

  ngOnInit() {
  }

  getTotalPrice(){
   this.totalPrice= this.shoppingCart.calculate();
  }


  onSubmitForm(e,form:NgForm){
      e.preventDefault();
      
  }

}
