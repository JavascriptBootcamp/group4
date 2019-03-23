import { Component, OnInit } from '@angular/core';

interface Recipe {
  title: string,
  servings: number,
  ingredients: string[]
}

interface Movie {
  title: string,
  duration: number,
  stars: string[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  recipe: Recipe;
  recipe_keys: string[];
  favoriteMovie: Movie;

  constructor() {
    this.recipe = {
      title: "pizza",
      servings: 13,
      ingredients: ["water ", "sugar", "salt", "salt", "olive oil", "flour"]
    }

    this.favoriteMovie = {
      title: ' "IT" ',
      duration: 180,
      stars: ["Bill", "Sophia", "Chosen"]
    }
  }

  ngOnInit() {
    this.recipe_keys = Object.keys(this.recipe);
  }

  evenWords(str: string): string {
    var strArr = str.split(' ');
    var strAns = "";
    for (var i = 1; i <= strArr.length; ++i) {

      if (i % 2 == 0) {
        strAns += strArr[i - 1] + " ";
      }

    }
    return strAns;
  }

  printStars(arr:string[]):string {
    var starsString = "";
    for (var i = 0; i < arr.length - 1; i++) {
      starsString += arr[i] + ", ";
    }
    starsString += arr[i];

    return starsString;
  }

  printMovieParams(movie:Movie):string {
    return movie.title+ " lasts for "+movie.duration+ " minutes. Stars: "+this.printStars(this.favoriteMovie.stars);
  }

}
