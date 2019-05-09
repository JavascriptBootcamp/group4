import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PaymentFormComponent} from './payment-form/payment-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'paymentForm' , component:PaymentFormComponent}  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
