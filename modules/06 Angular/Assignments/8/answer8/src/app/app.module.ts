import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Anagram } from './app.anagram';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    Anagram,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
