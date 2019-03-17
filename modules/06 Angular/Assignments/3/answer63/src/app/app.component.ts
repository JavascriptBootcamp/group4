import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer63';
  foods;
  beverages;
  colors;


  constructor() {
    this.foods = ['hamburger', 'BBQ', 'salad'];
    this.beverages = ['beer', 'vodka', 'coke'];
    this.colors = ['blue', 'green', 'black'];

  }





}
