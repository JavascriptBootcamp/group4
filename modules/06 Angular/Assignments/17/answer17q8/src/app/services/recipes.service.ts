import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Recipe[];
  constructor() {
    this.recipes = [{ title: "churros", ingredients: ["water", "white sugar", "flour", "oil"], timeCooking: "20 minutes", srcRating: "https://media.istockphoto.com/vectors/fivestar-rating-icon-vector-id922744956?s=170x170" },
    { title: "spaghetti", ingredients: ["spaghetti", "white sugar", "oregano", "oil", "tomatoes"], timeCooking: "30 minutes", srcRating: "https://media.istockphoto.com/vectors/fivestar-rating-icon-vector-id922766870?s=170x170" },
    { title: "cake", ingredients: ["eggs", "white sugar", "flour", "butter "], timeCooking: "20 minutes", srcRating: "https://media.istockphoto.com/vectors/fivestar-rating-icon-vector-id922766908?s=170x170" }
    ];
  }

  public getRecipes(){
    return this.recipes;
  }
}
