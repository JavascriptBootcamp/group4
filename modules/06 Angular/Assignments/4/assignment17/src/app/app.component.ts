import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  favoriteMovie: object;

  constructor() {
    this.favoriteMovie = {
      title: ' "IT" ',
      duration: 180,
      stars: ["Bill", "Sophia", "Chosen"]
    }
  }
}