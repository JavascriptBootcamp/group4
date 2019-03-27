import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IsAnagramPipe } from './shared/pipes/is-anagram.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IsAnagramPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
