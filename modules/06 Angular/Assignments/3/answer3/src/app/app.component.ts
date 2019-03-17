import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer3';

  food: string[] = ['hamburger', 'BBQ', 'salad'];
  beverage: string[] = ['beer', 'vodka', 'coke'];
  colors: string[] = ['blue', 'green', 'black'];
  str: string = '';
  suffix;

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

