import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutAsComponent } from './about-as/about-as.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'about',component:AboutAsComponent},
  {path:'recipes/all',component:RecipesComponent},
  {path:'recipes/:id',component:RecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
