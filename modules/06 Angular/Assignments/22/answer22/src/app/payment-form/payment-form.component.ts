import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomizedValidatorsService } from '../services/customized-validators.service';
import { BackEndService } from '../services/back-end.service';
import { PaymentForm } from '../models/payment-form'

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  model = new PaymentForm ("","",null,null)
  submitted = false;
  constructor(private BackEndService: BackEndService) { }

  ngOnInit() {
  }
  onSubmit(paymentForm:Object){
    console.log(paymentForm, this.BackEndService.cart);
    this.submitted = true;
    this.BackEndService.postData(`http://localhost:3000/Order`, [paymentForm, this.BackEndService.cart])
    .then(data => console.log(JSON.stringify(data)))
    .catch(error => console.error(error));
  }

}
