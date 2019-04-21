import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicturesComponent } from './pictures/pictures.component';
import { AuthorComponent } from './author/author.component';
import { BigPictureComponent } from './big-picture/big-picture.component';
import { SmlPictureComponent } from './sml-picture/sml-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    PicturesComponent,
    AuthorComponent,
    BigPictureComponent,
    SmlPictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
