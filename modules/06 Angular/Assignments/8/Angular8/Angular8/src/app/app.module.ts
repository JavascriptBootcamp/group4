import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { isAnagramPipe } from './isAnagram.pipe';


@NgModule({
  declarations: [
    AppComponent,
    isAnagramPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
