import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  paymentForm:FormGroup;
  constructor(private fb:FormBuilder) { 

  }

  ngOnInit() {
    this.paymentForm=this.fb.group({
      cardNumber:'',
      cardOwnerName:'',
      expDate:null,
      cvv:''
    })
  }
  onSubmit(){
    console.log(this.paymentForm.value)
  }

}
