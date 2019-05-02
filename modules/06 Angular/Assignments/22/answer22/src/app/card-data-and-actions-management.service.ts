import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CardDataAndActionsManagementService {
  // @ViewChild('productNameSelectElem') productNameSelectElem;
  // @ViewChild('productPriceElem') productPriceElem;

  canGoToPay: boolean;
  shoppingCard: {productName: string, productPrice: number}[];
  totalPrice: number;



  constructor() { 
    this.canGoToPay = false;
    this.totalPrice = 0;
    this.shoppingCard = [];
  }


  addProduct(prodName, prodPrice) {
    this.shoppingCard.push( { productName: prodName, productPrice: Number(prodPrice) } );
    // console.log(this.shoppingCard);
    this.canGoToPay = true;
    this.totalPrice += Number(prodPrice);
  }


  removeProduct(prodName, prodPrice) {
    for(let i = 0; i < this.shoppingCard.length; i++) {
      if(this.shoppingCard[i].productName === prodName && 
         this.shoppingCard[i].productPrice === prodPrice) {
           // console.log(`Removing ${prodName} which price is ${prodPrice}`);
          this.shoppingCard.splice(i, 1);
          this.totalPrice -= Number(prodPrice);
      }
      if(this.shoppingCard.length === 0) this.canGoToPay = false;
    }
  }


  cardValidate(creditCardForm: NgForm) {
    console.log('No need for validation yet');
    console.log(creditCardForm);
    console.log('Card Number: ' + creditCardForm.value.creditCardNumber);
    console.log('Card Name: ' + creditCardForm.value.creditCardName);
    console.log('Card Expire Date: ' + creditCardForm.value.creditCardExpireDate);
    console.log('Card Sequrity Code: ' + creditCardForm.value.creditCardSecurityCode);
  }
}
