import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NormalBloodPressurePipe } from './normalBloodPressure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NormalBloodPressurePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
