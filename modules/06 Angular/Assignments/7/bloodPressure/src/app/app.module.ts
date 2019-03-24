import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {bloodpressure} from './app.bloodpressure'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    bloodpressure
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
