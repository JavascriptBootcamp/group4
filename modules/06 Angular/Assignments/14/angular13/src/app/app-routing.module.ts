import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriviaComponent } from './components/trivia/trivia.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "Instructions", component: InstructionsComponent },
  { path: "ques/:id", component: TriviaComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
