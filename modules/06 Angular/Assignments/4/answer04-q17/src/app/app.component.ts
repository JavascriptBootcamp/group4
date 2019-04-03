import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  duration : number;
  stars: string[];

  constructor(){
    this.title = "IT";
    this.duration = 180;
    this.stars = ["Bill", "Sophia", "Chosen"];
  }
}