import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentFormService {

  constructor() { }


  validateCardNumber(x: string): { [key: string]: boolean } {
    let arrNumbers = x.split("");
    let flag = true;
    let validationStatus: string = "";
    let total = 0;
    if (arrNumbers.length !== 16) {
      validationStatus += " --you have to fill 16 numbers";
      flag = false;
    }

    let bool = false;
    for (let i = 0; i < arrNumbers.length; i++) {
      for (let j = 0; j < arrNumbers.length; j++) {
        if (arrNumbers[i] !== arrNumbers[j])
          bool = true;

      }
    }
    if (!bool) {
      validationStatus += " --you must have 2 different numbers";
      flag = false;
    }

    let isNumbers = arrNumbers.every(function (item) {
      return !isNaN(+item);
    });

    if (!isNumbers) {
      validationStatus += " --you have to enter just numbers without chars";
      flag = false;

    }

    if (!(+arrNumbers[arrNumbers.length - 1] % 2 === 0)) {
      validationStatus += " --the last digit must be even ";
      flag = false;
    }

    for (var i in arrNumbers) {
      total += +arrNumbers[i];
    }

    if (total <= 16) {
      validationStatus += " --you must have sum of numbers that is greater than 16  ";
      flag = false;
    }


    return { [validationStatus]: flag };




  }

// 
  fetchOrderPage() {
    fetch("http://localhost:3000/Order").then(function (response) {
      alert("G");
        return response.json();
      })
        .then(function (myJson) {
          console.log(JSON.stringify(myJson));
        });
    }

}
