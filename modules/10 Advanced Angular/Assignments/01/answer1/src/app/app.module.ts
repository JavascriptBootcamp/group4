import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonthsPipe } from './months.pipe';
import { PaintDirective } from './paint.directive';

@NgModule({
  declarations: [
    AppComponent,
    MonthsPipe,
    PaintDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
