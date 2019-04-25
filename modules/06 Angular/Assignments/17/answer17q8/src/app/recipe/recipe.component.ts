import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  recipes: Recipe[];
  recipeUrl: string;
  displayLink: string;
  displayLinkBack: string;

  constructor(private activatedRoute: ActivatedRoute, private recipesService:RecipesService) {
    this.displayLink = "block";
    this.displayLinkBack = "none";
    this.activatedRoute = activatedRoute;
    this.recipeUrl = this.activatedRoute.snapshot.params.recipeId;
    this.recipes = this.recipesService.getRecipes();
  }

  ngOnInit() {
    if (!this.recipe) {
      for (let item of this.recipes) {
        if (item.title === this.recipeUrl) {
          this.recipe = item;
          this.displayLink= "none";
          this.displayLinkBack = "block";
        }
      }
    }
  }
}
