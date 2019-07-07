import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SqrtPipe } from './app.sqrt';

import { AppComponent } from './app.component';
import { MoshikoIsTheKingComponent } from './moshiko-is-the-king/moshiko-is-the-king.component';

@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    MoshikoIsTheKingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
