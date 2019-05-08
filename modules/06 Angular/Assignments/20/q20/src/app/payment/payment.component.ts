import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';
import { CreditCardService } from '../credit-card.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  f: FormGroup;
  message: string;

  constructor(builder: FormBuilder, private creditCardService: CreditCardService) {
    this.f = builder.group({
      creditCard: builder.group({
        cardNum: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(20)]],
        name: ['', [Validators.required]],
        expDate: ['', [Validators.required]],
        secCode: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
      })
    })
  }

  ngOnInit() {
    this.message = '';
  }

  onSubmitForm() {
    this.message = '';
    console.log('f', this.f);
    console.log('cardNum:', this.f.get('creditCard').get('cardNum'));
    console.log('name:', this.f.get('creditCard').get('name'));
    console.log('expDate:', this.f.get('creditCard').get('expDate'));
    console.log('secCode:', this.f.get('creditCard').get('secCode'));

    if (this.f.invalid)
      return;
    if (this.creditCardService.validateCreditCard(this.f.get('creditCard').get('cardNum').value)) {
      fetch("http://localhost:3000/Order").
        then(stream => { return stream.json() }).
        then(data => {
          console.log(data);
          this.message = 'Successfully ordered!'
        }).
        catch(err => console.log(err));
    }
  }

}
