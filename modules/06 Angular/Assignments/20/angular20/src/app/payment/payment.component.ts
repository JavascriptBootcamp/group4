import { Component, OnInit ,ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  hidden: boolean;
  submit: boolean;
  profileForm : FormGroup;
  constructor() {
    this.hidden = true;
    this.submit = false;
  }

   ngOnInit() {
    this.profileForm = new FormGroup({
      
    });
  }
  onSubmit() {
   
  }

}
