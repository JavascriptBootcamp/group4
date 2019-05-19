import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ResultsComponent } from './components/results/results.component';
import { ClockPipe } from './clock.pipe';
import { LetsPlayComponent } from './components/lets-play/lets-play.component';
import { HomeComponent } from './components/home/home.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    InstructionsComponent,
    QuestionsComponent,
    ResultsComponent,
    ClockPipe,
    LetsPlayComponent,
    HomeComponent,
    HowToPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
