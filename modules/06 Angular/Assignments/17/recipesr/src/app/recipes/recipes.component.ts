import { Component, OnInit } from '@angular/core';
import { recipesArr } from '../recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipesA:object[];

  constructor() {
    this.recipesA = recipesArr;
   
  }

  ngOnInit() {
    this.recipesA.push({name:'Creamy',time:"30 m",rating:4,ingredients:["1 (8 ounce) package uncooked pappardelle pasta","1 tablespoon olive oil","1 (12 ounce) package Hillshire Farm® Rope Smoked Sausage, cut into 1/2","1 (8 ounce) package sliced cremini mushrooms"]});
    this.recipesA.push({name:'Meatloaf',time:"1h 10m",rating:3,ingredients:["1 1/2 pounds ground beef","1 egg","1 onion","1 cup dried bread crumbs"]});
  }

}
