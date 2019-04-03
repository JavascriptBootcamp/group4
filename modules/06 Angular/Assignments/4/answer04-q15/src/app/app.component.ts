import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  serving: number;
  ingredients: string[];

  constructor(){
    this.title = "Sushi";
    this.serving = 4;
    this.ingredients = ["rice", "salmon", "soy", "nuri"];
  }
}