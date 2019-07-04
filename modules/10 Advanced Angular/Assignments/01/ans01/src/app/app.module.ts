import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumToMonthPipe } from './num-to-month.pipe';
import { MonthToColorDirective } from './month-to-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    NumToMonthPipe,
    MonthToColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
