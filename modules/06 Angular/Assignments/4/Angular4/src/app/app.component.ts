//This answer includes:
//group4/Modules/01 JavaScript Programming/Assignments/12,
//group4/Modules/01 JavaScript Programming/Assignments/15,
//group4/Modules/01 JavaScript Programming/Assignments/17


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  strArr: string[];
  strAns: string;
  recipe: any;
  displyArr: any[];
  favoriteMovie: any;
  resMovieParams: string;

  constructor() {
    this.strArr = 'aaa bbbb  '.split(' ');
    this.strAns = "";
    this.recipe = {
      title: "pizza",
      servings: 13,
      ingredients: ["water ", "sugar", "salt", "salt", "olive oil", "flour"]
    };
    this.favoriteMovie = {
      title: ' "IT" ',
      duration: 180,
      stars: ["Bill", "Sophia", "Chosen"]
    }
    this.displyArr = [];
    this.resMovieParams = null;

  }
  ngOnInit() {
    for (let i: number = 1; i < this.strArr.length; ++i) {
      if (i % 2 === 0) {
        this.strAns += this.strArr[i - 1] + " ";
      }
    }


    for (let key in this.recipe) {
      switch (key) {
        case "servings":
          this.displyArr.push(`Serves: ${this.recipe[key]}`);
          break;

        case "ingredients":
          this.displyArr.push(`${key} : ${this.recipe.ingredients}`)
          break;

        default:
          this.displyArr.push(this.recipe[key])

      }
    }
    this.resMovieParams = this.printMovieParams(this.favoriteMovie);


  }
  printStars = (arr: string[]): string => {
    let starsString: string = "";
    for (var i: number = 0; i < arr.length - 1; i++) {
      starsString += arr[i] + ", ";
    }
    starsString += arr[i];

    return starsString;
  }

  printMovieParams = (movie: any): string =>  `${movie.title} lasts for ${movie.duration} minutes. Stars: ${this.printStars(this.favoriteMovie.stars)}`;
  
}

