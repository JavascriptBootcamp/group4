import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {AllRecipesComponent} from './all-recipes/all-recipes.component';
import {RecipeComponent} from './recipe/recipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,  pathMatch : 'full'},
  { path: 'homepage', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'recipes/all', component: AllRecipesComponent },
  { path: 'recipes/:recipeId', component: RecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
