import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomizedValidatorsService } from '../services/customized-validators.service';
import { BackEndService } from '../services/back-end.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  paymentForm: FormGroup;
  constructor(private fb: FormBuilder,private CustomizedValidators: CustomizedValidatorsService, private BackEndService: BackEndService) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      cardNumber: ['',[
        Validators.required,
        this.CustomizedValidators.validateLength,
        this.CustomizedValidators.areAllNumbers,
        this.CustomizedValidators.validateSum,
        this.CustomizedValidators.areAllDigitsTheSame,
        this.CustomizedValidators.isLastDigitEven
      ]],
      cardOwnerName: ['',[Validators.required]],
      exparationDate: [null,[Validators.required]],
      CVV: [null,[Validators.required]]
    })
  }
  onSubmit(){
    console.log(this.paymentForm.value,this.BackEndService.cart);
    this.BackEndService.postData(`http://localhost:3000/Order`, [this.paymentForm.value,this.BackEndService.cart])
    .then(data => console.log(JSON.stringify(data)))
    .catch(error => console.error(error));
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
