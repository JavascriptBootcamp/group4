import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'q42';
  recipe: object;


  constructor() {
    this.recipe = {
      title: "pizza",
      servings: 13,
      ingredients: ["water ", "sugar", "salt", "salt", "olive oil", "flour"]
    }
  }

  ngOnInit() {    
  }

}
