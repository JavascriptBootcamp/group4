// Template - driven Forms
// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { ShoppingService } from '../shopping/shopping.service';

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {

//   constructor(public shoppingService: ShoppingService) { }

//   ngOnInit() {
//   }
//   send() {
//     alert("Send");
//   }
// }

// Reactive Forms
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ShoppingService } from '../shopping/shopping.service';
import { CreditcardService } from './creditcard.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  curDate: Date;
  form: FormGroup;
  cardNumber: AbstractControl;
  nameCard: AbstractControl;
  cvvCode: AbstractControl;
  expiryDate: AbstractControl;
  constructor(public shoppingService: ShoppingService, private fb: FormBuilder, private creditcard: CreditcardService) {
    this.form = this.fb.group({
      card: this.fb.group({
        cardNumber: ["", [
          Validators.required,
          Validators.minLength(16), Validators.maxLength(16),
          Validators.pattern(/^\d*$/),
          this.creditcard.diffNumbers,
          this.creditcard.finalDigitOdd,
          this.creditcard.sumGreater16
        ]],
        nameCard: ["", [
          Validators.required,
          Validators.pattern(/^[a-z A-z]*$/)
        ]],
        expiryDate: ["", [
          Validators.required
        ]],
        cvvCode: ["", [
          Validators.required,
          Validators.pattern(/^\d{3}$/)
        ]]
      })
    })
    this.cardNumber = this.form.get('card').get('cardNumber');
    this.nameCard = this.form.get('card').get('nameCard');
    this.cvvCode = this.form.get('card').get('cvvCode');
    this.expiryDate = this.form.get('card').get('expiryDate');
    this.curDate = new Date();
  }

  ngOnInit() {
  }
  send(): void {
    fetch("http://localhost:3000/Order")
      .then(response => response.json())
      .then(myJson => console.log(JSON.stringify(myJson)))
      .catch(error => console.log(error));
  }
}
