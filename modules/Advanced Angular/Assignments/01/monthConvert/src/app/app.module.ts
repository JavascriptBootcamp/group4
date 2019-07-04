import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberToMonthPipe } from './number-to-month.pipe';
import { PaintByMonthDirective } from './paint-by-month.directive';

@NgModule({
  declarations: [
    AppComponent,
    NumberToMonthPipe,
    PaintByMonthDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
