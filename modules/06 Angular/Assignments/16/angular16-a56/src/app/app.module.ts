import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPictureComponent } from './main-picture/main-picture.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { PictureComponent } from './thumbnails/picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPictureComponent,
    ThumbnailsComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
