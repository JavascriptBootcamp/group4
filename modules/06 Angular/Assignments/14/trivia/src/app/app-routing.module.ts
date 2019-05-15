import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'quiz',component:QuizComponent},
  {path:'instructions',component:InstructionsComponent},
  {path:'result/:correctAnswersCount',component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
