import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayByComponent } from './display-by/display-by.component';
import { DisplayListComponent } from './display-list/display-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayByComponent,
    DisplayListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
