import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AnagramsPipe } from './app.anagrams'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AnagramsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
