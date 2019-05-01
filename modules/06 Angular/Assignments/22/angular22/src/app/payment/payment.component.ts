import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild('form') form;
  @ViewChild('cardNum') cardNum;
  @ViewChild('card') card;
  @ViewChild('Exp') Exp;
  @ViewChild('Security') Security;
  hidden: boolean;
  submit: boolean;
  constructor() {
    this.hidden = true;
    this.submit = false;
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.form.invalid) {
      this.hidden = false;
      this.submit = false;
    }
    else {
      this.hidden = true;
      this.submit = true;
    }
  }
}
