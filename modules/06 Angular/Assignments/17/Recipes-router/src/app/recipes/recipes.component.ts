import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.module'
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes:Recipe[];
  
    constructor() {
  
      this.recipes = [
  
       {name:"Creamy Pasta Toss with Smoked Sausage",ings:["1 (8 ounce) package uncooked pappardelle pasta","1 tablespoon olive oil"],id:"1"},
       {name:"Easy Meatloaf",ings:["1 1/2 pounds ground beef","1 tablespoon olive oil"],id:"2"},
       {name:"humburger",ings:["cheese","bacon"],id:"3"}
  
      ];
  
  
     }

  ngOnInit() {
  }

}
