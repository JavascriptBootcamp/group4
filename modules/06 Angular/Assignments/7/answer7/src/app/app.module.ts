import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderPipe} from './app.HeaderPipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    HeaderPipe,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
