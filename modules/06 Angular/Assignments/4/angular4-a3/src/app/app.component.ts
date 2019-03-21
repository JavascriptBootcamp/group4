import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular4-a3';
  favMovie: FavoriteMovie;
  constructor() {
    this.favMovie = new FavoriteMovie();
  }
}
class FavoriteMovie {
  title: string;
  duration: number;
  stars: string[];
  constructor() {
    this.title = "IT";
    this.duration = 180;
    this.stars = ["Bill", "Sophia", "Chosen"];
  }
}
