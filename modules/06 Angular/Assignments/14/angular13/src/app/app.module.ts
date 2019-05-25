import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { QuestionComponent } from './components/question/question.component';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { HomeComponent } from './components/home/home.component';
import { TimerComponent } from './components/trivia/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent,
    QuestionComponent,
    HeaderComponent,
    InstructionsComponent,
    HomeComponent,
    TimerComponent
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
