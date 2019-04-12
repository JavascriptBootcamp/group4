import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { VideosContainerComponent } from './videos-container/videos-container.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    VideosContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
