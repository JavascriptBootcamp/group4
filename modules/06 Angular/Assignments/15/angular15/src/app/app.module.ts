import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { NumberOfLikeComponent } from './number-of-like/number-of-like.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    LikeButtonComponent,
    NumberOfLikeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
