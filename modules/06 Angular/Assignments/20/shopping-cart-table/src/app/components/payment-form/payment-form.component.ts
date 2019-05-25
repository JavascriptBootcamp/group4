import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { CartService } from "../../services/cart.service";
import { Item } from "../../models/item.models";

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  paymentForm: FormGroup;
  submitted: boolean = false;
  validNumber: boolean = true;
  successMsg: string = "";
  cardNumValidMsg: string = "";

  shopping_items: Item[] = [];
  total_price: number = 0;

  constructor( private cartService: CartService, private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      cardNumber1: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      cardNumber2: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      cardNumber3: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      cardNumber4: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });
  }

  ngOnInit() {
    this.shopping_items = this.cartService.get_user_cart();
    this.total_price = this.cartService.get_total_price();
  }

  onSubmit() {
    let card_number: string = this.paymentForm.controls.cardNumber1.value+
    this.paymentForm.controls.cardNumber2.value+
    this.paymentForm.controls.cardNumber3.value+
    this.paymentForm.controls.cardNumber4.value;

    //check valid card number
    this.validNumber = this.validate(card_number);

    //card is valid
    if(this.validNumber) {
      this.successMsg = `Payment approved!!`;
      this.submitted = true;
      this.cartService.paid_all();
      this.total_price = 0;
      
      fetch(`http://localhost:3000/Order`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }

  validate(card_number: string):boolean {
    if(card_number.length !== 16){
      this.cardNumValidMsg = "Credit Card Length Must Be 16 Digits";
      return false;
    }
    else if(isNaN(+card_number.replace(/\D/g,'*'))){
      this.cardNumValidMsg = "Invalid characters";
      return false;
    }
    else if(card_number === card_number[0].repeat(card_number.length) ){
      this.cardNumValidMsg = "Only one type of number";
      return false;
    } 
    else if(card_number.split("").reduce(function(a, b) { return Number(a) + Number(b); }, 0) < 16 ){
      this.cardNumValidMsg = "Sum of the card number is less than 16";
      return false;
    }
    else if(Number(card_number[card_number.length - 1]) % 2 !== 0){
      this.cardNumValidMsg = "odd final number";
      return false;
    }

    return true;
  }

}
