import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { VideoComponent } from './components/video/video.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ThumbnailComponent,
    VideoComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
