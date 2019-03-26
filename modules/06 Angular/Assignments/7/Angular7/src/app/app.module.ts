import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {normalbloodpressurePipe} from './normalbloodpressure.pipe'

@NgModule({
  declarations: [
    AppComponent,
    normalbloodpressurePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
