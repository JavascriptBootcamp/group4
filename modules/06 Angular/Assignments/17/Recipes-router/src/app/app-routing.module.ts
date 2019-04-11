import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
export const routes: Routes = [
{path:'',component:HomeComponent,pathMatch:'full'},
{path:'aboutUs',component:AboutusComponent},
{path:'recipes',component:RecipesComponent},
{path:'recipes/:id',component:RecipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
