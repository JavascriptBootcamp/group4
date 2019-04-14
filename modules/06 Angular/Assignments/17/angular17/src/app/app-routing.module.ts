import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {AllRecipesComponent} from './all-recipes/all-recipes.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,  pathMatch : 'full'},
  { path: 'all-recipes', component: AllRecipesComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
