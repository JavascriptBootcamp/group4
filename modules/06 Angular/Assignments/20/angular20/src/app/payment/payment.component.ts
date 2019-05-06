import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  hidden = true;
  profileForm: FormGroup;
  constructor(builder: FormBuilder) {
    this.profileForm = builder.group({
      cardNumber: ['', [Validators.required, this.validateDigitAndNumber, this.validteDiffrentDigits, this.validteFinalDigitEven, this.validteSumGreater16]],
      cardName: ['', Validators.required],
      expiryDate: ['', Validators.required],
      SecurityCode: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]]
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
  get f() {
    return this.profileForm.controls;
  }
  onSubmit() {
    if (this.profileForm.valid) {
      this.hidden = true;
      fetch("http://localhost:3000/Order").then(function (response) {
        return response.json();
      })
        .then(function (myJson) {
          console.log(JSON.stringify(myJson));
        });
    }
    else {
      this.hidden = false;
    }
  }

}
