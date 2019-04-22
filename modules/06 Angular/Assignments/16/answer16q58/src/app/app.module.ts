import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
