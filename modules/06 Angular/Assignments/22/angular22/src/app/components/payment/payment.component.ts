import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingService } from '../shopping/shopping.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public shoppingService: ShoppingService) { }

  ngOnInit() {
  }
  send() {
    alert("Send");
  }
}
