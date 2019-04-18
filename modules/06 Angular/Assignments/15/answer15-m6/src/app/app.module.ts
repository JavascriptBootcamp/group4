import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ImageCompComponent } from './image-comp/image-comp.component';
import { AppRoutingModule } from './app-routing.module';
import { AutherPicsComponent } from './auther-pics/auther-pics.component';

const appRoutes: Routes = [
  { path: 'authors/name', component: AutherPicsComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    ImageCompComponent,
    AutherPicsComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
