import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { SearchIncludingComponent } from './search-including/search-including.component';
import { BuyingFormatsComponent } from './buying-formats/buying-formats.component';
import { ConditionComponent } from './condition/condition.component';
import { ShowResultsComponent } from './show-results/show-results.component';
import { LocationComponent } from './location/location.component';
import { SellersComponent } from './sellers/sellers.component';
import { ResultsComponent } from './results/results.component';
import { PriceComponent } from './price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    KeywordsComponent,
    SearchIncludingComponent,
    BuyingFormatsComponent,
    ConditionComponent,
    ShowResultsComponent,
    LocationComponent,
    SellersComponent,
    ResultsComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
