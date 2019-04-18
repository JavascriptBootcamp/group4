import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { ImagesListComponent } from './images-list/images-list.component';
import { AuthorComponent } from './author/author.component';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ImagesListComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
