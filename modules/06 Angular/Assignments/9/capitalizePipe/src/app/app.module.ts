import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {capitalizePipe} from './app.capitalizePipe'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    capitalizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
