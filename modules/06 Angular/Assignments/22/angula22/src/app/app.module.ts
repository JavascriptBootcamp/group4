import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { PaymentFormComponent } from './payment-form/payment-form.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    PaymentFormComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
