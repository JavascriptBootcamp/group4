import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ItubeComponent } from './components/itube/itube.component';
import { DbayComponent } from './components/dbay/dbay.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    ItubeComponent,
    DbayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
