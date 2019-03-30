import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NormalbloodpressurePipe } from './pipes/normalbloodpressure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NormalbloodpressurePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
