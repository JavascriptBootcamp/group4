import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Recipe } from "../../models/recipe";
import { RecipesService } from "../../services/recipes.service";

import { from } from 'rxjs';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: Recipe = null;

  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    this.recipe = this.recipesService.get_recipe(id);
  }

}
