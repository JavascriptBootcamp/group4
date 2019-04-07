import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
