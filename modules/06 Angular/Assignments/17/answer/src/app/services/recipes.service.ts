import { Injectable } from '@angular/core';
import { Recipe } from "../models/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[];

  constructor() {
    this.recipes = [
      {
        id: "Creamy",
        title: "Creamy Pasta Toss with Smoked Sausage",
        ingredients: ["1 (8 ounce) package of uncooked pappardelle pasta", "1 tablespoon of olive oil", "1 (12 ounce) package of Hillshire Farm® Rope Smoked Sausage, cut into 1/2",
          "1 (8 ounce) package of sliced cremini mushrooms"],
        cookingTime: 30,
        rating: { stars: 4, imgSrc: "../../assets/stars pics/4_stars.png" }
      },
      {
        id: "Meatloaf",
        title: "Easy Meatloaf",
        ingredients: ["1 1/2 pounds ground beef","1 egg","1 onion, chopped","1 cup of dried bread crumbs"],
        cookingTime: 70,
        rating: { stars: 3, imgSrc: "../../assets/stars pics/3_stars.png" }
      },
      {
        id: "OmletC",
        title: "Omlet with cheese",
        ingredients: ["2 Eggs","1 Onion, chopped","1 tablespoon of Cooking Oil","1 cup of cheese"],
        cookingTime: 5,
        rating: { stars: 5, imgSrc: "../../assets/stars pics/5_stars.png" }
      }
    ]
  }

  get_recipes(): Recipe[] {
    return this.recipes;
  }

  get_recipe(id: string): Recipe {
    return this.recipes.filter(recipe => recipe.id === id)[0];
  }


}
