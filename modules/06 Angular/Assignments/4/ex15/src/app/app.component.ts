import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipe = {
    title: "Pizza",
    servings: 13,
    ingredients: ["water ", "sugar", "salt", "olive oil", "flour"]

  }
}
