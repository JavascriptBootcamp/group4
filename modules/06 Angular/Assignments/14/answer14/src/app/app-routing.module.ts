import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { LetsPlayComponent } from './lets-play/lets-play.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
  { path: 'lets-play', component: LetsPlayComponent },
  { path: 'lets-play/questions', component: QuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
