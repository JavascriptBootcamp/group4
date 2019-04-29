import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routingComponents} from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
