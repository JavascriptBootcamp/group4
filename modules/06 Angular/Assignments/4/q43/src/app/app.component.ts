import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'q43';
  favoriteMovie: object;

  constructor(){
    this.favoriteMovie = {
      title: ' "IT" ',
      duration: 180,
      stars: ["Bill", "Sophia", "Chosen"]
    }
  }

  ngOnInit(){
  }
}
