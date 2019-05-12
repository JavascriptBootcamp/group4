import { Component, OnInit } from '@angular/core';
import { CardDataAndActionsManagementService } from '../card-data-and-actions-management.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit{

  paymentForm: FormGroup;
  forbiddenSecurityCodes = ['12345678', '87654321'];

  constructor(private fb: FormBuilder, private logicServiceObj: CardDataAndActionsManagementService) { }

  ngOnInit() {
    this.paymentForm = new FormGroup({
      'cardNumber': new FormControl(null, [
        Validators.required,
        this.logicServiceObj.isValidCardLength,
        this.logicServiceObj.eachCharIsDigit,
        this.logicServiceObj.isCorrectDigitsSum,
        this.logicServiceObj.allDigitsAreSame,
        this.logicServiceObj.isCardLastDigitEven
      ]),

      'cardName': new FormControl('', [Validators.required]),
      'cardOwnerName': new FormControl('', [Validators.required]),
      
      'cardRenewedData': new FormGroup({
        'expireDate': new FormControl(null, Validators.required),
        'securityCode': new FormControl(null, [
          Validators.required, 
          Validators.minLength(8),
          Validators.maxLength(12),
          this.forbiddenCodes.bind(this)]
        )   
      })
      
    });
  }

  forbiddenCodes(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenSecurityCodes.indexOf(control.value) !== -1) {
      return {'codeIsForbidden': true}
    }
    return null;
  }
}
