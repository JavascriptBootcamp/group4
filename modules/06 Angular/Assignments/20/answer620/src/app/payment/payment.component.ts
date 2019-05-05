import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  {
  f: FormGroup;
  constructor(builder: FormBuilder) {
    this.f = builder.group({
      // username
    
      CardNumber: [
          "Shai", [
            Validators.required//,
           
           // this.myvalidator
          ]
        ],
        cardname: [
          "Mesisterano", [
            Validators.required
          ]
        ],
        ExpiryDate: [
          "Mesisterano", [
            Validators.required
          ]
        ],
        SecurityCode: [
          "Mesisterano", [
            Validators.required,
            Validators.maxLength(3)
          ]
        ]
     
    })
  }

  myvalidator(control: FormControl):{[key:string]:boolean} {
    if (control.value.indexOf('b') > -1){
      return null;
    }
    return {
      'containsB': true
    }
  }

  onSubmit() {
    console.log('f', this.f);
    console.log('f.get.lastname', this.f.get('username').get('lastname'));
  }
}
