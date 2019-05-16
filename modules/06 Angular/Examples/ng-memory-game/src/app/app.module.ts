import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { PictureComponent } from './card/picture/picture.component';
import { ClockPipe } from './clock.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    PictureComponent,
    ClockPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
