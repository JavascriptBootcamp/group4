import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'answer4to17';

  favoriteMovie: any;

  constructor() {
    this.favoriteMovie = {
      title: 'Favorite David',
      duration: 300,
      stars: ['David good', 'David well', 'David excellent', 'David nice', 'David beautiful', 'David amazing']
   };
  }

  getMovieStars() {
    let starsOutput: string = '';

    for (let i = 0; i < this.favoriteMovie.stars.length; i++) {
        if (i === this.favoriteMovie.stars.length-1) starsOutput += this.favoriteMovie.stars[i];
        else starsOutput += this.favoriteMovie.stars[i] + ', ';
    }
    
    //return (this.favoriteMovie.title, 'lasts for', this.favoriteMovie.duration,'minutes. Stars:', starsOutput);
    return starsOutput;
  }

}