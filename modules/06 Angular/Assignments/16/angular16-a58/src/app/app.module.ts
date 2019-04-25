import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { VideosMenuComponent } from './videos-menu/videos-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    VideosMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
