import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'answer15';
  recipe: {};
  constructor() {
    this.recipe ={
      title: "pizza",
      servings: 13,
      ingredients: ["water ", "sugar", "salt", "salt", "olive oil", "flour"]

    }
  }
}
