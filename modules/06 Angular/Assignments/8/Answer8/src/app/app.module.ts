import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AnagramPipe } from "./anagram.pipe"
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AnagramPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
