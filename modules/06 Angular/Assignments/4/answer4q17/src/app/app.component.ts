import { Component } from '@angular/core';

interface FavoriteMovie {
  title: string,
  duration: number,
  stars: string[]
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  favoriteMovie: FavoriteMovie;

  constructor() {
    this.favoriteMovie = {
      title: ' "IT" ',
      duration: 180,
      stars: ["Bill", "Sophia", "Chosen"]
    }
  }
}

