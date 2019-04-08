import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    ThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
