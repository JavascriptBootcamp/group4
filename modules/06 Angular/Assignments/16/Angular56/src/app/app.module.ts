import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BigPictureComponent } from './big-picture/big-picture.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';

@NgModule({
  declarations: [
    AppComponent,
    BigPictureComponent,
    ThumbnailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
