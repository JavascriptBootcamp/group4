import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      cardNumber: '',
      cardOwnerName: '',
      exparationDate: null,
      CVV: null
    })
  }
  onSubmit(){
    console.log(this.paymentForm.value);
  }
}
