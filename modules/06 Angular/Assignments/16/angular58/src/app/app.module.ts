import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarSideVideosComponent } from './bar-side-videos/bar-side-videos.component';
import { BigImgComponent } from './big-img/big-img.component';

@NgModule({
  declarations: [
    AppComponent,
    BarSideVideosComponent,
    BigImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
