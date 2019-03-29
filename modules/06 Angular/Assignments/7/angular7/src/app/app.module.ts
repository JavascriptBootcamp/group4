import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BloodPressurePipe } from "./app.bloodPressure";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    BloodPressurePipe,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
