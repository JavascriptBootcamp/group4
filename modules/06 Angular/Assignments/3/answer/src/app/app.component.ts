import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'answer';
  places:string[];
  foods:string[];
  beverages:string[];
  colors:string[];
  //i:number;
  //str:string;
  constructor(){
    this.places=["1st","2nd","3rd"]
    this.foods = ['hamburger', 'BBQ', 'salad'];
    this.beverages = ['beer', 'vodka', 'coke'];
    this.colors = ['blue', 'green', 'black'];
    //this.str = '';
  }

  ngOnInit(){

  }
}
