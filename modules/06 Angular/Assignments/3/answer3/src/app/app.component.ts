import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  groups: string [][];
  constructor() {
    this.groups = [];
  }
  ngOnInit() {
    let j: number = 0;
    let food: string [] = ['hamburger', 'BBQ', 'salad'];
    let beverage: string []= ['beer', 'vodka', 'coke'];
    let colors: string [] = ['blue', 'green', 'black'];
    this.groups.push([]);
    for (let i = 0; i < food.length; i++) {
      let str = 'My ' + (i + 1) + this.switchSuffix(i + 1) + ' choice is ' + food[i];
      this.groups[j].push(str);
    }
    j++;
    this.groups.push([]);
    for (let i = 0; i < beverage.length; i++) {
      let str = 'My ' + (i + 1) + this.switchSuffix(i + 1) + ' choice is ' + beverage[i];
      this.groups[j].push(str);
    }
    j++;
    this.groups.push([]);
    for (let i = 0; i < colors.length; i++) {
      let str = 'My ' + (i + 1) + this.switchSuffix(i + 1) + ' choice is ' + colors[i];
      this.groups[j].push(str);
    }
  }
  switchSuffix(num) {
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
