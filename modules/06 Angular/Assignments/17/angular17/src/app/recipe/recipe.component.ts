import { Component, OnInit, Input } from '@angular/core';
export interface Recipe{
  title : string;
  ingredients : string[];
  time: number;
  rating : string;
}
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe : Recipe;
  @Input() recipeAttr : Recipe;
  constructor() { 
    this.recipe = {
      title : "",
      ingredients : [],
      time: 0,
      rating : ""
    }
  }
  ngOnInit() {
  }

}
