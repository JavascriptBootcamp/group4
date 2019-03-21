import { Component } from '@angular/core';

interface recipe {
  title: string;
  servings: number;
  ingredients: string[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements recipe {
  
  servings: number;
  ingredients: string[];
  title: string;


  constructor() {
    this.title = "pizza";
    this.servings = 13;
    this.ingredients = ["water ", "sugar", "salt", "olive oil", "flour"];
  }
}
