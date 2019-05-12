import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path : 'shoppingCart',
    component: ShoppingCartComponent,
    pathMatch: 'full'
  },{
    path: 'payment',
    component: PaymentComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
