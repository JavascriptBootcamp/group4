import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  paymentForm:FormGroup;
  validresult:string;
  constructor(private fb:FormBuilder) { 
    this.validresult="";
    this.paymentForm=this.fb.group({
      cardNumber:['',[Validators.required, this.validateDigitAndNumber, this.validteDiffrentDigits, this.validteFinalDigitEven, this.validteSumGreater16]],
      cardOwnerName:['', Validators.required],
      expDate:['', Validators.required],
      cvv:['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]]
    })
  }

  ngOnInit() {
   
  }
  validateDigitAndNumber(control: FormControl): { [key: string]: boolean } {

    if (control.value.length === 16 && !isNaN(control.value) && !control.value.includes('-')) {
      return null
    }
    else if (control.value.length === 19 && control.value.includes('-') && !isNaN(control.value.split('-').join(''))) {
      return null
    }
    return {
      "DigitAndNumber": true
    }
  }
  validteFinalDigitEven(control: FormControl): { [key: string]: boolean } {
    if (control.value[15] % 2 === 0 && !control.value.includes('-')) {
      return null
    }
    else if (control.value[18] % 2 === 0 && control.value.includes('-')) {
      return null
    }
    return {
      "FinalDigitEven": true
    }
  }
  validteSumGreater16(control: FormControl): { [key: string]: boolean } {
    let sum: number = 0;
    let ctl: string;
    if(control.value.includes('-'))
    {
      ctl = control.value.split('-').join('');
      for (let i = 0; i < ctl.length; i++) {
        sum += Number(ctl[i]);
      }
    }
    else{
      for (let i = 0; i < control.value.length; i++) {
        sum += Number(control.value[i]);
      }
    }
    if (sum > 16) {
      return null
    }
    return {
      "SumGreater16": true
    }
  }
  validteDiffrentDigits(control: FormControl): { [key: string]: boolean } {
    let duplicates: number = 0;
    let duplicatesArr: Array<number> = new Array(10).fill(0);
    let ctl: string;
    if(control.value.includes('-'))
    {
      ctl = control.value.split('-').join('');
      for (let i = 0; i < ctl.length; i++) {
        duplicatesArr[ctl[i]]++;
      }
    }
    else{
      for (let i = 0; i < control.value.length; i++) {
        duplicatesArr[control.value[i]]++;
      }
    }
    for (let i = 0; i < duplicatesArr.length; i++) {
      if (duplicatesArr[i] > 0) {
        duplicates++;
      }
    }
    if (duplicates >= 2) {
      return null
    }
    return {
      "DiffrentDigits": true
    }
  }
  onSubmit(){
    console.log(this.paymentForm.value)
  if (this.paymentForm.valid) {
    fetch("http://localhost:3000/Order").then(function (response) {
      return response.json();
    })
      .then(function (myJson) {
       // console.log(JSON.stringify(myJson));
      });
  }
  else {
    this.validresult = this.paymentForm.status.toString();
  }


}
}

