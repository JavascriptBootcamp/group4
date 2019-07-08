import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddingShirtComponent } from './adding-shirt/adding-shirt.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { DisplayByComponent } from './display-by/display-by.component';
import { DisplayListComponent } from './display-list/display-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddingShirtComponent,
    DisplayByComponent,
    DisplayListComponent
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
