import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCarComponent } from './new-car/new-car.component';
import { NavigateComponent } from './navigate/navigate.component';
import { AboutComponent } from './about/about.component';
import { SearchCarComponent } from './search-car/search-car.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCarComponent,
    NavigateComponent,
    AboutComponent,
    SearchCarComponent
 
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
