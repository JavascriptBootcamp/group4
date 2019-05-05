import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [  { path: '', component: PaymentComponent, pathMatch: 'full' },
// { path: 'about-us', component: AboutComponent },
// { path: 'movies/:movieId', component: MovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
