import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { DisplayCarByLicenseNumComponent } from './components/display-car-by-license-num/display-car-by-license-num.component';
import { DisplayCarsByYearsComponent } from './components/display-cars-by-years/display-cars-by-years.component';
import { DisplayCarsModelsByManufactorerComponent } from './components/display-cars-models-by-manufactorer/display-cars-models-by-manufactorer.component';
import { ModelsAndPricesByModelComponent } from './components/models-and-prices-by-model/models-and-prices-by-model.component';
import { MoreExpensiveCarComponent } from './components/more-expensive-car/more-expensive-car.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    DisplayCarByLicenseNumComponent,
    DisplayCarsByYearsComponent,
    DisplayCarsModelsByManufactorerComponent,
    ModelsAndPricesByModelComponent,
    MoreExpensiveCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
