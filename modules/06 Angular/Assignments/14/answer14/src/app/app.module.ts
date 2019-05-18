import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameInstructionsComponent } from './game-instructions/game-instructions.component';
import { QuestionComponent } from './question/question.component';
import { DisplayQuizResultsComponent } from './display-quiz-results/display-quiz-results.component';
import { GameOverComponent } from './game-over/game-over.component';
import { TwoDigitsPipe } from './pipes/two-digits.pipe';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gameInstructions', component: GameInstructionsComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'results', component: DisplayQuizResultsComponent},
  {path: 'gameOver', component: GameOverComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameInstructionsComponent,
    QuestionComponent,
    DisplayQuizResultsComponent,
    GameOverComponent,
    TwoDigitsPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
