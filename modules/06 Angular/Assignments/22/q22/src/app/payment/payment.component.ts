import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild('form') form;
  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(){
    
  }

}
