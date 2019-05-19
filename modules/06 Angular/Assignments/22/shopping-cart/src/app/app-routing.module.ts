import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartTableComponent } from './shopping-cart-table/shopping-cart-table.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';

const routes: Routes = [
  {path:'', redirectTo: '/shopping-cart', pathMatch:'full'},
  {path:'shopping-cart',component:ShoppingCartTableComponent},
  {path:'shopping-cart/payment', component : PaymentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
