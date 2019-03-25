import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { bloodPipe } from './app.bloodPipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    bloodPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
