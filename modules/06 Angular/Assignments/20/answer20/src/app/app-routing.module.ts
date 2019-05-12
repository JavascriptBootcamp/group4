import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {PaymentComponent} from './payment/payment.component';

const routes: Routes = [
  { path: '', component: ShoppingCartComponent, pathMatch: 'full' },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
