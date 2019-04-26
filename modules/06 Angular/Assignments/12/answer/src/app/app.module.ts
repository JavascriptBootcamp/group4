import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlacesComponent } from './components/places/places.component';
import { ActorsComponent } from './components/actors/actors.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    ActorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
