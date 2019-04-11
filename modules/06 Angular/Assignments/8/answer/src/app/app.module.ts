import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AnagramPipe } from './app.anagramPipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AnagramPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
