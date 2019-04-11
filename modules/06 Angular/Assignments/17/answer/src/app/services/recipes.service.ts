import { Injectable } from '@angular/core';
import { Recipe } from "../classes/recipe";

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
        ingredients: ["1 (8 ounce) package uncooked pappardelle pasta", "1 tablespoon olive oil", "1 (12 ounce) package Hillshire Farm® Rope Smoked Sausage, cut into 1/2",
          "1 (8 ounce) package sliced cremini mushrooms"],
        cookingTime: 30,
        rating: { stars: 4, imgSrc: "https://www.butterflyfields.com/wp-content/uploads/2016/02/4-star-rating.png" }
      },
      {
        id: "Meatloaf",
        title: "Easy Meatloaf",
        ingredients: ["1 1/2 pounds ground beef","1 egg","1 onion, chopped","1 cup dried bread crumbs"],
        cookingTime: 70,
        rating: { stars: 3, imgSrc: "https://www.garage-gyms.com/wp-content/uploads/2016/02/3-star-rating.png" }
      },
      {
        id: "",
        title: "",
        ingredients: [""],
        cookingTime: 30,
        rating: { stars: 4, imgSrc: " " }
      },
      {
        id: "",
        title: "",
        ingredients: [""],
        cookingTime: 30,
        rating: { stars: 4, imgSrc: " " }
      },
      {
        id: "",
        title: "",
        ingredients: [""],
        cookingTime: 30,
        rating: { stars: 4, imgSrc: " " }
      }
    ]
  }

}
