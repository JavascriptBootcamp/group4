import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator, FormControl } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  paymentForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      cardNumber: ['',[
        Validators.required,
        this.validateLength,
        this.areAllNumbers,
        this.validateSum,
        this.areAllDigitsTheSame,
        this.isLastDigitEven
      ]],
      cardOwnerName: ['',[Validators.required]],
      exparationDate: [null,[Validators.required]],
      CVV: [null,[Validators.required]]
    })
  }
  onSubmit(){
    console.log(this.paymentForm.value);
    this.postData(`http://localhost:3000/Order`, this.paymentForm.value)
    .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
    .catch(error => console.error(error));
  }

  postData(url = ``, data = {}){
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
      body: JSON.stringify(data),
    })
    .then(response => response.json()); // parses JSON response into native Javascript objects 
  }

  validateLength(control:FormControl):{[key:string]:boolean}{
    let value = control.value + '';
    if(value.length===16){
      return null;
    }
    else
      return {"lengthIsNot16":true};
  }
  areAllNumbers(control:FormControl):{[key:string]:boolean}{
    let value = control.value + '';
    let valuesAsArray = value.split("");
    if(valuesAsArray.every(function(currentValue){
      return !isNaN(Number(currentValue));
    })){
      return null;
    }
    else
      return {"notAllAreNumbers":true}
  }
  isNumber(currentValue) {
    return !isNaN(currentValue);
  }
  validateSum(control:FormControl):{[key:string]:boolean}{
    let value = control.value + '';
    let valuesAsArray = value.split("");
    let sumOfValues = 0;
    for(let i=0;i<valuesAsArray.length;i++){
      sumOfValues += Number(valuesAsArray[i]);
    }
    if(sumOfValues>=16){
      return null;
    }
    else
      return {"sumSmallerThan16":true}
  }
  areAllDigitsTheSame(control:FormControl):{[key:string]:boolean}{
    let value = control.value + '';
    let valuesAsArray = value.split("");
    if(valuesAsArray.every(function(element){
        return element === valuesAsArray[0];
    })){
      return {"allDigitAreTheSame":true}
    }
    else
      return null;
  }
  isLastDigitEven(control:FormControl):{[key:string]:boolean}{
    let value = control.value + '';
    let valuesAsArray = value.split("");
    if(Number(valuesAsArray[valuesAsArray.length - 1]) % 2 === 0)
      return null
    else
      return {"lastDigitNotEven":true}
  }

  get cardNumber(){
    return this.paymentForm.get('cardNumber');
  }
  get cardOwnerName(){
    return this.paymentForm.get('cardOwnerName');
  }
  get exparationDate(){
    return this.paymentForm.get('exparationDate');
  }
  get CVV(){
    return this.paymentForm.get('CVV');
  }





}
