import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Blood } from './app.bloodPresure';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    Blood,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
