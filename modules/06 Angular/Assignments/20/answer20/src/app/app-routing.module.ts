import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';

export const routes: Routes = [
  { path: '', component: ShoppingCartComponent},
  { path: 'payment', component: PaymentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
