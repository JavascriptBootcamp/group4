import { Component,OnInit } from '@angular/core';
class Recipe {
  title: string;
  servings: number;
  ingredients: string[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'answer12-15';
  favoriteRecipe: Recipe;
  ngOnInit() {
    this.favoriteRecipe = {
      title: 'Pita with falafel',
      servings: 3,
      ingredients: ['pita', 'falafel', 'tomato', 'yellow pepper', 'tahini','pickles', 'limon']
    };
  }
}
