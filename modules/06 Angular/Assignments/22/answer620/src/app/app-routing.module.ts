import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { ShoppingTableComponent } from './shopping-table/shopping-table.component';

const routes: Routes = [  { path: '', component: ShoppingTableComponent, pathMatch: 'full' },
{ path: 'payment/:price', component: PaymentComponent },
{ path: 'Shopping', component: ShoppingTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
