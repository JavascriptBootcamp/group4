import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriviaComponent } from './components/trivia/trivia.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  { path: "", component: TriviaComponent, pathMatch: "full" },
  { path: "ques/:id", component: TriviaComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
