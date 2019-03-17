import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  foods: string[] = ['hamburger', 'BBQ', 'salad'];
  beverages: string[] = ['beer', 'vodka', 'coke'];
  colors: string[] = ['blue', 'green', 'black'];


  constructor() {
this.title = 'my fevorite Food, Beverages and Colors' ;

  }
  switchSuffix(num: number): string {
    switch (num) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      case 4:
        return 'th';
    }
  }

  ngOnInit() {

  }
}
