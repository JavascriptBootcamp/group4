import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthPipe } from './month.pipe';
import { MonthDirective } from './month.directive';

@NgModule({
  declarations: [
    AppComponent,
    MonthPipe,
    MonthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
