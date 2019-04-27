import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipes } from "../recipes";
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeUrl: string;
  recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute) {
    this.recipeUrl = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    for (let recipe of recipes) {
      if (recipe.name === this.recipeUrl) {
        this.recipe = recipe;
        break;
      }
    }
  }

}
