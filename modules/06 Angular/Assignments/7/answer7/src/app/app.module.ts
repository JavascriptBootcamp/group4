import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BloodPressurePipe } from "./app.BloodPressurePipe";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BloodPressurePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
