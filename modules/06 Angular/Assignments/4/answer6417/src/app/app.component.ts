import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer6417';
  favoriteMovie;
  printMovie: string;
  constructor() {
    this.favoriteMovie = {
      title: ' IT ',
      duration: 180,
      stars: ["Bill", "Sophia", "Chosen"]
    }

  }
  ngOnInit() {
    this.printMovieParams(this.favoriteMovie);

  }

  printMovieParams(movie) {
    this.printMovie = `${movie.title} <br>
    lasts for : ${movie.duration} minutes.  <br/>
     Stars: ${this.printStars(this.favoriteMovie.stars)}`
    // console.log(movie.title, "lasts for", movie.duration, "minutes. Stars:", this.printStars(this.favoriteMovie.stars));
  }

  printStars(arr) {
    var starsString = "";
    for (var i = 0; i < arr.length - 1; i++) {
      starsString += arr[i] + ", ";
    }
    starsString += arr[i];

    return starsString;
  }

}
