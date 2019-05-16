import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ImageCompComponent } from './image-comp/image-comp.component';
import { AppRoutingModule } from './app-routing.module';
import { AutherPicsComponent } from './auther-pics/auther-pics.component';
import { BigImgComponent } from './big-img/big-img.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageCompComponent,
    AutherPicsComponent,
    BigImgComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
