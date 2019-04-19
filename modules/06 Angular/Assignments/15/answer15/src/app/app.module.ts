import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { BigPictureComponent } from './big-picture/big-picture.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorProfileComponent } from './author-profile/author-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    BigPictureComponent,
    AuthorProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
