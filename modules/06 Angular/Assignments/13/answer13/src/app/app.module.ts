import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { DisplayQuizResultsComponent } from './display-quiz-results/display-quiz-results.component';


const appRoutes: Routes = [
  //{path: '', component: AppComponent},
  {path: '', component: QuestionComponent},
  {path: 'results', component: DisplayQuizResultsComponent}
  //{path: '**', component: NotFoundComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    DisplayQuizResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
