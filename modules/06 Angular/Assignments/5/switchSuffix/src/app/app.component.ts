import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

public foods:string[];
public beverages:string[];
public colors :string[];

constructor(){
this.foods = ['hamburger', 'BBQ', 'salad'];
this.beverages = ['beer', 'vodka', 'coke'];
this.colors = ['blue', 'green', 'black'];
}

 ngOnInit(){
 }

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
