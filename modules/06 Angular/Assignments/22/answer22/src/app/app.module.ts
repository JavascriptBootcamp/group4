import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material';
import {  MatNativeDateModule,  MatFormFieldModule } from '@angular/material';
import { ProductComponent } from './product/product.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { CreditCardValidatorDirective } from './directives/credit-card-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    PaymentFormComponent,
    ProductComponent,
    CartProductComponent,
    CreditCardValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
