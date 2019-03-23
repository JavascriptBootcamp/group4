import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  food : string[];
  beverage : string[];
 colors : string[];

      ngOnInit(){      
        this.food = ['hamburger', 'BBQ', 'salad'];
        this.beverage = ['beer', 'vodka', 'coke'];
        this.colors = ['blue', 'green', 'black'];
   }





}
