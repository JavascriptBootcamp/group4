import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  total: number;
  activatedRoute: ActivatedRoute;
  constructor(ActivatedRoute: ActivatedRoute) {
    this.activatedRoute = ActivatedRoute;
  }

  ngOnInit() {
    this.total=this.activatedRoute.snapshot.params.totalPrice;
  }

}