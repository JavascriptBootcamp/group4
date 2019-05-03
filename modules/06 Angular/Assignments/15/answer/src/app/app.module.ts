import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/image/image.component';
import { BigPicComponent } from './components/big-pic/big-pic.component';
import { TopPicsComponent } from './components/top-pics/top-pics.component';
import { MainGalleryComponent } from './components/main-gallery/main-gallery.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorService } from './author.service';
import { ImageService } from './image.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageComponent,
    BigPicComponent,
    TopPicsComponent,
    MainGalleryComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthorService,ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
