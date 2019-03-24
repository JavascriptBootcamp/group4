import { Component } from '@angular/core';

interface favorite {
  foods: string[]; // = ['hamburger', 'BBQ', 'salad'];
  beverages: string[];// = ['beer', 'vodka', 'coke'];
  colors: string[];// = ['blue', 'green', 'black'];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements favorite {

  foods: string[];
  beverages: string[];
  colors: string[];

  constructor() {

    this.foods = ['hamburger', 'BBQ', 'salad'];
    this.beverages = ['beer', 'vodka', 'coke'];
    this.colors = ['blue', 'green', 'black','orange'];

  }
}
