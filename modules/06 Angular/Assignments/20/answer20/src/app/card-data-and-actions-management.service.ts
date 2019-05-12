import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CardDataAndActionsManagementService {
  // @ViewChild('productNameSelectElem') productNameSelectElem;
  // @ViewChild('productPriceElem') productPriceElem;

  canGoToPay: boolean;
  shoppingCard: {productName: string, productPrice: number}[];
  totalPrice: number;
  DIGITS_MINIMAL_SUM: number;


  constructor() { 
    this.canGoToPay = false;
    this.totalPrice = 0;
    this.shoppingCard = [];
    this.DIGITS_MINIMAL_SUM = 17;
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
      if(this.shoppingCard.length === 0) this.canGoToPay = false;
    }
  }


  isValidCardLength(control:FormControl):{[key:string]:boolean} {
    let fieldValue = control.value + '';
    if(fieldValue.length === 16) return null;
    else  return {"invalidCardLength": true};   
  }


  eachCharIsDigit(control:FormControl):{[key:string]:boolean} {
    let fieldValue = control.value + '';
    let charsArr = fieldValue.split("");
    
    if(charsArr.every(char => {return !isNaN(Number(char));})) return null;
    else  return {"notEachCharIsDigit": true};    
  }


  isCorrectDigitsSum(control:FormControl):{[key:string]:boolean}{
    let fieldValue = control.value + '';
    let charsArr = fieldValue.split("");
    let digitsSum = 0;

    for(let i = 0; i < charsArr.length; i++){
      digitsSum += Number(charsArr[i]);
    }

    if(digitsSum >= 17) return null;
    else return {"cardDigitsSumSmallerThan17": true};
  }


  allDigitsAreSame(control:FormControl):{[key:string]:boolean}{
    let fieldValue = control.value + '';
    let charsArr = fieldValue.split("");

    if(charsArr.every(char => { return char === charsArr[0];})) return {"allDigitsAreSame": true};
    else return null;   
  }


  isCardLastDigitEven(control:FormControl):{[key:string]:boolean}{
    let fieldValue = control.value + '';
    let charsArr = fieldValue.split("");

    if(Number(charsArr[charsArr.length - 1]) % 2 === 0) return null; 
    else return {"lastCardDigitNotEven": true}; 
  }


  postDataToHTTP(url = ``, sendedData = {}){
    return fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
          "Content-Type": "application/json",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(sendedData),
    }) 
    .then(response => response.json()); 
  }


  cardValidate(paymentForm: NgForm) {
    if(paymentForm.valid) {
      this.postDataToHTTP(`http://localhost:4200/Order`, [paymentForm.value, this.shoppingCard])
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
    }
  }

}




