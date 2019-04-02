import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CapitalizePipe } from './app.capitalize';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    CapitalizePipe,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }