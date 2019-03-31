import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NormalBloodPressure} from './app.normalbloodpressure'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalBloodPressure],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
