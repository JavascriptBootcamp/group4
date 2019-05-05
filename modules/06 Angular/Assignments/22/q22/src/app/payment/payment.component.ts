import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreditCardService } from '../credit-card.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild('form') form;
  message: string;

  constructor(private creditCardService: CreditCardService) { 
  }

  ngOnInit() {
    this.message = '';
  }

  onSubmitForm(isValid:boolean,cardNumber: string,cardName: string,expDate: string,securityCode: string){
    if(!isValid)
      return;
      this.message = 'Successfully ordered!'
    // console.log(event,isValid,cardNumber,cardName,expDate,securityCode);
  }

}
