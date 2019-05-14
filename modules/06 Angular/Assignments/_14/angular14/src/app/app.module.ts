import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LetsPlayComponent } from './lets-play/lets-play.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    HowToPlayComponent,
    HomeComponent,
    NavComponent,
    LetsPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
