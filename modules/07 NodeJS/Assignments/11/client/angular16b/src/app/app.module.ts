import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { YoutubePipe } from './youtube.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ThumbnailComponent,
    YoutubePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
