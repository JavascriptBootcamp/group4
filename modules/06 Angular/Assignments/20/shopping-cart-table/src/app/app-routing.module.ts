import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentFormComponent } from "./components/payment-form/payment-form.component";
import { ShoppingCartTableComponent } from "./components/shopping-cart-table/shopping-cart-table.component";

const routes: Routes = [
  { path: '', component: ShoppingCartTableComponent, pathMatch: 'full'},
  { path: 'payment', component: PaymentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
