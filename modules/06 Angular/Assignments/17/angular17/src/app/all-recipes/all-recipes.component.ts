import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe/recipe.component';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
  recipes : Recipe[];
  constructor(){
    this.recipes = [
      {title : "cake1" , ingredients : ["chocolate","sugar","3 large eggs"] , time : 30 , rating : "https://www.garage-gyms.com/wp-content/uploads/2016/02/3-star-rating.png"},
      {title : "cake2" , ingredients : ["milk","vanil","baking powder"] , time : 50 , rating : "https://www.garage-gyms.com/wp-content/uploads/2016/02/4-star-rating.png"},
      {title : "cake3" , ingredients : ["vanil","chocolate","baking powder"] , time : 90 , rating : "https://www.garage-gyms.com/wp-content/uploads/2016/02/5-star-rating.png"}
    ];
  }
  ngOnInit() {
  }

}
