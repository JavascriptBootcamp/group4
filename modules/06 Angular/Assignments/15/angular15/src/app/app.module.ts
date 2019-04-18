import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgComponent } from './img/img.component';
import { AppRoutingModule } from './app-routing.module';
import { ImagesBoxComponent } from './images-box/images-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ImagesBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
