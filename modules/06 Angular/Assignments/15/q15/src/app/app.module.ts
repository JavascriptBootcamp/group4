import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
import { ImageComponent } from './image/image.component';
import { PicturesComponent } from './pictures/pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    ImageComponent,
    PicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
