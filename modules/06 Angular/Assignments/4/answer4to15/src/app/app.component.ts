import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer12to15';

  favoriteRecipe: {};

  constructor() {
    this.favoriteRecipe = {
      title: 'Pita with falafel',
      servings: 3,
      ingredients: ['pita', 'falafel', 'tomato', 'yellow pepper', 'tahini','pickles', 'limon']
    };

  }
}