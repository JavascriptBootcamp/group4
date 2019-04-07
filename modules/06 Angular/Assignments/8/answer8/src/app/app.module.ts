import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AnagramsPipe } from './app.AnagramsPipe';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
     AnagramsPipe,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
