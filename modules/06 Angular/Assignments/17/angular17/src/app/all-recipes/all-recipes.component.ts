import { Component, OnInit } from '@angular/core';
import { Recipe} from '../Recipe.model';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
/*
  recipes : Recipe[];
  constructor(){
  this.recipes = [
      {title : "Creamy Pasta Toss with Smoked Sausage" , ingredients : ["1 (8 ounce) package uncooked pappardelle pasta","1 tablespoon olive oil","1 (12 ounce) package Hillshire Farm Rope Smoked Sausage cut into 1/2","1 (8 ounce) package sliced cremini mushrooms"], time : 30 , rating : "https://www.garage-gyms.com/wp-content/uploads/2016/02/3-star-rating.png"},
      {title : "Easy Meatloaf" , ingredients : ["1 1/2 pounds ground beef","1 egg","1 onion, chopped","1 cup dried bread crumbs"] , time : 70 , rating : "https://www.garage-gyms.com/wp-content/uploads/2016/02/4-star-rating.png"}
        ];
  }
  ngOnInit() {
  }*/

  recipes: Recipe[];
 
  constructor(private recipeService: RecipeService) { }
 
  ngOnInit() {
    this.getRecipes();
  }
 
  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

}
