import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  servings: number;
  ingredients: string[];
  constructor() {
    this.title = "pizza",
      this.servings = 13,
      this.ingredients = ["water ", "sugar", "salt", "salt", "olive oil", "flour"]
  }
}
