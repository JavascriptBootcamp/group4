import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BloodPreasurePipe} from './BloodPreasurePipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BloodPreasurePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
