import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
{ path:'', redirectTo:"menu" , pathMatch: 'full'} ,
 {path:'questions/:id' , component:QuestionsComponent },
 {path:'answers' , component : AnswersComponent},
 {path:"home",component:HomeComponent},
 {path:"instructions",component:InstructionsComponent},
 {path :"menu", component:MenuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
