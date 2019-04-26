import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RecipeService }  from '../recipe.service';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {
  recipe: Recipe;
  
  constructor(private route: ActivatedRoute,private recipeService: RecipeService, private location: Location){}
  
  ngOnInit(): void {
    this.getRecipe();
  }
  
  getRecipe(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.recipeService.getRecipe(title).subscribe(recipe => this.recipe = recipe);
  }

  goBack(): void {
    this.location.back();
  }
 
}

