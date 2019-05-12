import { Component, OnInit } from '@angular/core';
import {ActionsService} from '../actions.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  status:string
  
  constructor(private actionsService: ActionsService){
  }

  ngOnInit() {
  }
  onSubmitForm(f: NgForm){
    console.log(this.actionsService.validateCreditCard(f.controls.cn.value));
    if (this.actionsService.validateCreditCard(f.controls.cn.value).error){
      this.status = this.actionsService.validateCreditCard(f.controls.cn.value).error
    }
    else {
      let url = 'http://localhost:3000/Order';
      let data = {"cardNumber" : f.controls.cn.value,
                  "cardName" : f.controls.cn.value,
                  "expiryDate" : f.controls.exd.value,
                  "securityCode" : f.controls.sc.value
      };
      
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
    }
  }
}
