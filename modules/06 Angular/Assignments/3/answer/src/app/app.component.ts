import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  foods:string[];
  beverages:string[];
  colors:string[];

  constructor() {
    this.foods = ['hamburger', 'BBQ', 'salad'];
    this.beverages = ['beer', 'vodka', 'coke'];
    this.colors = ['blue', 'green', 'black'];
  }

  ngOnInit() {}

  switchSuffix(num:number):string{
    switch(num) {
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
