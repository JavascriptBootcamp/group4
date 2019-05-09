import { Component, OnInit } from '@angular/core';

import {  FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PaymentFormService } from '../payment-form.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  totalPrice:number;
  form:FormGroup;
  messageErrorType:string;
  constructor(private shoppingCart:ShoppingCartService,private paymentService: PaymentFormService, builder:FormBuilder) {    this.getTotalPrice();
    this.form=builder.group({
        "cardNumber":[
          "",[Validators.required,this.validateCreditCard]          
        ],
        "cardOwner":[
          "",[Validators.required]          
        ]
        ,
        "expirateDate":[
          "",[Validators.required]          
        ]
        ,
        "securityCode":[
          "",[Validators.required,Validators.maxLength(3)  ]      
        ]
    })    ;  

 }

  ngOnInit() { 

  }

  getTotalPrice(){
   this.totalPrice= this.shoppingCart.calculate();
  }


  onSubmitForm(e){
      e.preventDefault();
      console.log(this.form)
     if(this.form.valid){
       this.paymentService.fetchOrderPage();
     }
     
        
  }

  validateCreditCard=(control:FormControl): {[key:string]:boolean}=>
  {
 
    let result =  this.paymentService.validateCardNumber(control.value);
 
    this.messageErrorType=Object.keys(result)[0];
    if((result[Object.keys(result)[0]])===true) return null;
    return result; //result;
    

    
  }

}
