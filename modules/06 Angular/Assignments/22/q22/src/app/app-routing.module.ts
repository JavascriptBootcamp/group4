import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from 'src/app/cart/cart.component';
import { PaymentComponent } from 'src/app/payment/payment.component';

const routes: Routes = [
  { path: '', component: CartComponent },
  { path: 'payment', component: PaymentComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
