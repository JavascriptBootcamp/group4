import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import {RecipeComponent} from'./recipe/recipe.component';
const routes: Routes = [
  { path: 'homepage', component: HomeComponent ,pathMatch: 'full' },
  { path: 'about', component: AboutUSComponent },
  { path: 'recipes/all', component: AllRecipesComponent },
  { path: 'recipe/:title', component: RecipeComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
