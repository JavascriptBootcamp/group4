import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  // don't need to implement OnInit
  title = 'answer 3';
  favoriteColorsArr: string[];

  constructor() {
    this.favoriteColorsArr = ['green', 'blue', 'black', '#66ccff', '#ccffcc'];
  }


  switchToVerbalCounting(num: number): string {
    switch (num) {
      case 1:
        return 'first'
      case 2:
        return 'second'
      case 3:
        return 'third';
      case 4:
        return 'fourth';
      case 5:
        return 'fifth';
    }
  }

}
