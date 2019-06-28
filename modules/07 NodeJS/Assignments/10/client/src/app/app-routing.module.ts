import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LetsPlayComponent } from './components/lets-play/lets-play.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'how-to-play', component: HowToPlayComponent},
  {path: 'lets-play', component: LetsPlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
