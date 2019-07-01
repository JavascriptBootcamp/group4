import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { AddCarComponent } from './components/car/add-car/add-car.component';
import { DisplayCarLicenseComponent } from './components/car/display-car-license/display-car-license.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AddCarComponent,
    DisplayCarLicenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
