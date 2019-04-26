import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';
 
@Injectable({ providedIn: 'root' })
export class RecipeService {
        RECIPES:Recipe[];
  constructor() {
        this.RECIPES = [
                {title : "Creamy Pasta Toss with Smoked Sausage" , ingredients : ["1 (8 ounce) package uncooked pappardelle pasta","1 tablespoon olive oil","1 (12 ounce) package Hillshire Farm Rope Smoked Sausage cut into 1/2","1 (8 ounce) package sliced cremini mushrooms"], time : 30 , rating : "https://www.garage-gyms.com/wp-content/uploads/2016/02/3-star-rating.png"},
                {title : "Easy Meatloaf" , ingredients : ["1 1/2 pounds ground beef","1 egg","1 onion, chopped","1 cup dried bread crumbs"] , time : 70 , rating : "https://www.garage-gyms.com/wp-content/uploads/2016/02/4-star-rating.png"}
                  ];
   }
 
  getRecipes(): Observable<Recipe[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(this.RECIPES);
  }
 
  getRecipe(title: string): Observable<Recipe> {
    // TODO: send the message _after_ fetching the hero
    return of(this.RECIPES.find(recipe => recipe.title === title));
  }
}