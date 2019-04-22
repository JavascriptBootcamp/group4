import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapsibleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
