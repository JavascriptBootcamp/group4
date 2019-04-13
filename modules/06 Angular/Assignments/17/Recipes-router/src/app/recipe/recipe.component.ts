import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from '../recipe.module';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipeId:number;
  recipes:Recipe[];
  constructor(private route:ActivatedRoute) {
    this.route = route;
    this.recipeId = this.route.snapshot.params.id;
    this.recipes = [
  
      {name:"Creamy Pasta Toss with Smoked Sausage",ings:["1 (8 ounce) package uncooked pappardelle pasta","1 tablespoon olive oil"],id:"0"},
      {name:"Easy Meatloaf",ings:["1 1/2 pounds ground beef","1 tablespoon olive oil"],id:"1"},
      {name:"humburger",ings:["cheese","bacon"],id:"2"}
 
     ];
   }

  ngOnInit() {
  }

}
