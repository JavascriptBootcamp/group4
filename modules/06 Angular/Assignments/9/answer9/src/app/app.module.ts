import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Capitalize } from './app.capitalize';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    Capitalize,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
