import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriviaComponent } from './components/trivia/trivia.component';
import { HowtoplayComponent } from './components/howtoplay/howtoplay.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: 'howtoplay', component: HowtoplayComponent },
  { path: "question/:id", component: TriviaComponent },
  { path: '**', redirectTo: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
