import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonthsComponent } from './components/months/months.component';
import { ColormonthDirective } from './directives/colormonth.directive';
import { MonthnumtowordPipe } from './pipes/monthnumtoword.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MonthsComponent,
    ColormonthDirective,
    MonthnumtowordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
