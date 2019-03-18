import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  recipeTo:string;
  servings:number;
  ingredients:string[];
  constructor(){
  }
  ngOnInit(){
    this.recipeTo = "Salad",
    this.servings = 2,
    this.ingredients = ["Chamember","Tomato","Onion"]
  }
}
