import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AnagramPipe } from './app.anagram';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AnagramPipe,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
