import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddShirtComponent } from './components/add-shirt/add-shirt.component';
import { ShirtByIdComponent } from './components/shirt-by-id/shirt-by-id.component';
import { ShirtsByPriceRangeComponent } from './components/shirts-by-price-range/shirts-by-price-range.component';
import { ColorsBySizeComponent } from './components/colors-by-size/colors-by-size.component';
import { ShirtFitComponent } from './components/shirt-fit/shirt-fit.component';
import { LessExpensiveShirtComponent } from './components/less-expensive-shirt/less-expensive-shirt.component';

@NgModule({
  declarations: [
    AppComponent,
    AddShirtComponent,
    ShirtByIdComponent,
    ShirtsByPriceRangeComponent,
    ColorsBySizeComponent,
    ShirtFitComponent,
    LessExpensiveShirtComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
