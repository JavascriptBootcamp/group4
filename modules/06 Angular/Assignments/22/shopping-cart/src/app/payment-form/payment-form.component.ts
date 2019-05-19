import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  cardNum: number;
  cardName: string;
  exDate : Date;
  secCode: number;


  constructor() { }
  onSubmit() {
    console.log("subm");
  }
  ngOnInit() {
  }

}
