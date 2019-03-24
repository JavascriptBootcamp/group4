import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SqrtPipe } from './app.sqrt';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
