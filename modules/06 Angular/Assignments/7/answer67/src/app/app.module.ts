import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BloodPipe } from './app.blood';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    BloodPipe,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
