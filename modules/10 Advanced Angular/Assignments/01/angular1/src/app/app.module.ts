import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonthNumberToNamePipe } from './month-number-to-name.pipe';
import { PaintMonthDirective } from './paint-month.directive';

@NgModule({
  declarations: [
    AppComponent,
    MonthNumberToNamePipe,
    PaintMonthDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
