import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer05-q14';
  foodArr: string[];
  beverageArr: string[];
  colorsArr: string[];

  constructor() {
    this.foodArr = ['hamburger', 'BBQ', 'salad'];
    this.beverageArr = ['beer', 'vodka', 'coke'];
    this.colorsArr = ['blue', 'green', 'black'];
  }

  switchSuffix(num: number): string {
    switch (num) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd';
      case 4:
        return 'th';
    }
  }
}