import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';
import { QuizComponent } from './quiz/quiz.component';
const routes: Routes = [
  {path:'',component:QuizComponent,pathMatch:'full'},
  {path:'result/:correctAnswers',component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
