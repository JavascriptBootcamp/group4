import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { SearchincComponent } from './searchinc/searchinc.component';
import { PriceComponent } from './price/price.component';
import { BuyFormatComponent } from './buy-format/buy-format.component';
import { ConditionComponent } from './condition/condition.component';
import { ResultsComponent } from './results/results.component';
import { LocationComponent } from './location/location.component';
import { SellersComponent } from './sellers/sellers.component';

@NgModule({
  declarations: [
    AppComponent,
    KeywordsComponent,
    SearchincComponent,
    PriceComponent,
    BuyFormatComponent,
    ConditionComponent,
    ResultsComponent,
    LocationComponent,
    SellersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
