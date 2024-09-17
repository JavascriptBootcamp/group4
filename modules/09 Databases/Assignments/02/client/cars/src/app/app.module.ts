import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { AddCarComponent } from './components/car/add-car/add-car.component';
import { DisplayCarLicenseComponent } from './components/car/display-car-license/display-car-license.component';
import { DisplayCarRangeComponent } from './components/car/display-car-range/display-car-range.component';
import { DisplayCarManufacturerComponent } from './components/car/display-car-manufacturer/display-car-manufacturer.component';
import { DisplayCarModelComponent } from './components/car/display-car-model/display-car-model.component';
import { DisplayCarExpensiveComponent } from './components/car/display-car-expensive/display-car-expensive.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminAreaComponent } from './components/admin-area/admin-area.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AddCarComponent,
    DisplayCarLicenseComponent,
    DisplayCarRangeComponent,
    DisplayCarManufacturerComponent,
    DisplayCarModelComponent,
    DisplayCarExpensiveComponent,
    AdminComponent,
    AdminAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
