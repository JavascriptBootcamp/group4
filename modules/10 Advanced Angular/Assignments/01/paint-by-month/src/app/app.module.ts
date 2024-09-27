import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonthsComponent } from './components/months/months.component';
import { MonthNumberToWordPipe } from './pipes/month-number-to-word.pipe';
import { ColorByMonthDirective } from './directives/color-by-month.directive';

@NgModule({
  declarations: [
    AppComponent,
    MonthsComponent,
    MonthNumberToWordPipe,
    ColorByMonthDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
