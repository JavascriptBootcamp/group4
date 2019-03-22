import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  food: string[];
  beverage: string[];
  colors: string[];

  constructor() {
    this.food = ['hamburger', 'BBQ', 'salad'];
    this.beverage = ['beer', 'vodka', 'coke'];
    this.colors = ['blue', 'green', 'black'];
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
