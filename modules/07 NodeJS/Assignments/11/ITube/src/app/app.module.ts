import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { MenuComponent } from './menu/menu.component';
import { SrcYoutubePipe } from './src-youtube.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MenuComponent,
    SrcYoutubePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
