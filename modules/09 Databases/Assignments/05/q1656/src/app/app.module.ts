import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    AlbumsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
