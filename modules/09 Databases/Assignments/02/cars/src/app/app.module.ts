import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayByComponent } from './display-by/display-by.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { AddingCarComponent } from './adding-car/adding-car.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DisplayByComponent,
    DisplayListComponent,
    AddingCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
