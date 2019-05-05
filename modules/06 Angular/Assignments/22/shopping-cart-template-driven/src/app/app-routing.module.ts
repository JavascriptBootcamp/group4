import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
const routes: Routes = [
  {path:'',component:ShoppingCartComponent,pathMatch:'full'},
  {path:'payment/:price',component:PaymentFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
