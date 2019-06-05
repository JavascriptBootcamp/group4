import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { InstushPanelComponent } from './instush-panel/instush-panel.component';
import { AuthorProfileComponent } from './author-profile/author-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    InstushPanelComponent,
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
