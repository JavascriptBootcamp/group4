import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

export interface Recipe {
  title: string;
  ingredients: string[];
  time: number;
  rating: string;
}
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;
  recipeId: string;
  recipes: Recipe[];
  hidden : boolean;
  @Input() recipeAttr: Recipe;
  constructor(private route: ActivatedRoute ,  private location: Location) {
    this.recipe = {
      title: "",
      ingredients: [],
      time: 0,
      rating: ""
    }
    this.recipes = [
      { title: "cake1", ingredients: ["chocolate", "sugar", "3 large eggs"], time: 30, rating: "https://www.garage-gyms.com/wp-content/uploads/2016/02/3-star-rating.png" },
      { title: "cake2", ingredients: ["milk", "vanil", "baking powder"], time: 50, rating: "https://www.garage-gyms.com/wp-content/uploads/2016/02/4-star-rating.png" },
      { title: "cake3", ingredients: ["vanil", "chocolate", "baking powder"], time: 90, rating: "https://www.garage-gyms.com/wp-content/uploads/2016/02/5-star-rating.png" }
    ];
    this.hidden = true;
  }
  ngOnInit() {
    if (!this.recipeAttr) {
      this.recipeId = this.route.snapshot.params.recipeId;
      this.setRecipe();
    }
  }
  setRecipe() {
    for (let recipe of this.recipes) {
      if (recipe.title === this.recipeId) {
        this.recipeAttr = {
          title: recipe.title,
          ingredients: recipe.ingredients,
          time: recipe.time,
          rating: recipe.rating
        }
      }
    }
    this.hidden = false;
  }
  goBack(): void {
    this.location.back();
  }
}
