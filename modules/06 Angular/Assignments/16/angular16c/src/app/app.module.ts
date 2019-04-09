import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollapsableComponent } from './collapsable/collapsable.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapsableComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
