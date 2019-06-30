import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{SafePipe} from './video-player/video-player.component';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    VideoDetailsComponent,
    VideoPlayerComponent,
    SafePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
