import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { CreditCardService } from '../credit-card.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild('f') form;
  cardNum: number;
  name: string;
  expDate: string;
  secCode: string;

  message: string;

  constructor() { 
  }

  ngOnInit() {
    this.message = '';
  }

  onSubmitForm(isValid:boolean){
    console.log(this.cardNum,this.name,this.expDate,this.secCode);
    if(!isValid)
      return;
      this.message = 'Successfully ordered!'
  }

}
