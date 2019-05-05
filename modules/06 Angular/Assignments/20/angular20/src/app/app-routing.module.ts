import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentComponent} from './payment/payment.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path : '' , component : ShoppingCartComponent , pathMatch : 'full'},
  {path : 'PaymentComponent' , component : PaymentComponent},
  {path : 'ShoppingCartComponent' , component :ShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
