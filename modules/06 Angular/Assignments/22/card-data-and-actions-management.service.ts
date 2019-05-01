import { Injectable, ViewChild } from '@angular/core';

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
    this.canGoToPay = true;
    this.totalPrice += Number(prodPrice);
  }


  removeProduct(prodName, prodPrice) {
    for(let i = 0; i < this.shoppingCard.length; i++) {
      if(this.shoppingCard[i].productName === prodName && 
         this.shoppingCard[i].productPrice === prodPrice) {
          this.shoppingCard.splice(i, 1);
          this.totalPrice -= Number(prodPrice);
         }
    }
  }

  cardValidate(creditCardForm) {
    console.log('No need for validation yet');
    console.log(creditCardForm);
  }
}
