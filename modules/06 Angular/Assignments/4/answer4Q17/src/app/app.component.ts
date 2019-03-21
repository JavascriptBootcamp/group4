import { Component } from '@angular/core';

interface favoriteMovie  {

  title: string;
  duration: number;
  stars: string[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements favoriteMovie  {

  title: string;
  duration: number;
  stars: string[];

  constructor() {
    this.title = "IT";
    this.duration = 180;
    this.stars = ["Bill", "Sophia", "Chosen"];
  }

}
