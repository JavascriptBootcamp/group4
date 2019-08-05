import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthsComponent } from './months/months.component';
import { MonthsColorDirective } from './months-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    MonthsComponent,
    MonthsColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
