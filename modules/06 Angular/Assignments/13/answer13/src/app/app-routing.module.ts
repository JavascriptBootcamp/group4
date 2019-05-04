import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path:'', component: QuestionsComponent, pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
