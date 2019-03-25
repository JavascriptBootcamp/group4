import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {anagramPipe} from './app.anagramPipe'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    anagramPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
