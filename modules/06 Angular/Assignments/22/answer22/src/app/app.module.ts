import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShoppingCardTableComponent } from './shopping-card-table/shopping-card-table.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';

import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {path: '', component: ShoppingCardTableComponent},
  {path: 'payment', component: PaymentFormComponent}
  // {path: '**', component: AppComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ShoppingCardTableComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
