import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BorderDirective } from './border.directive';
import { RainbowDirective } from './rainbow.directive';
import { MaskCreditCardDirective } from './mask-credit-card.directive';
import { CreditCardDetailsComponent } from './credit-card-details/credit-card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderDirective,
    RainbowDirective,
    MaskCreditCardDirective,
    CreditCardDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
