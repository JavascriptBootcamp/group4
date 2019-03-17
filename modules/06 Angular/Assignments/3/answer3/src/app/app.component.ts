import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  foods:string[];
  beverages:string[];
  colors:string[];
  places:string[];
  constructor(){
    this.foods = ['hamburger', 'BBQ', 'salad'];
    this.beverages = ['beer', 'vodka', 'coke'];
    this.colors = ['blue', 'green', 'black'];
    this.places=["1st","2nd","3rd"];
  }
  ngOnInit(){
  }
}
