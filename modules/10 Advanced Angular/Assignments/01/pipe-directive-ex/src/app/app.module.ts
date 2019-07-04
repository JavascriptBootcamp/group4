import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthColoredDirective } from './directives/month-colored.directive';
import { MonthPipe } from './pipes/month.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MonthColoredDirective,
    MonthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
