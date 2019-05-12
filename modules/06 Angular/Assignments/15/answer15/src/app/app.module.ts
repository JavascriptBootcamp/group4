import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthorImagesComponent } from './author-images/author-images.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InstushService } from './instush.service';
import { AuthorDetailsComponent } from './author-details/author-details.component';



const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: `authorImages/:authorID/:authorName`, component: AuthorImagesComponent},
  {path: `authorDetails/:authorID`, component: AuthorDetailsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AuthorImagesComponent,
    MainPageComponent,
    AuthorDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 
  constructor(private instushService: InstushService) {
  }
}
