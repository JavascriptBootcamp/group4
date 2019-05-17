import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriviaComponent } from './trivia/trivia.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch:'full'},
  { path:'trivia', component: TriviaComponent, pathMatch:'full'},
  { path:'instructions', component: InstructionsComponent, pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
