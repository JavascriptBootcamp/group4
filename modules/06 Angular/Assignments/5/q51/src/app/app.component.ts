import { Component, OnInit } from '@angular/core';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Answer';
  food: string[] = ['hamburger', 'BBQ', 'salad'];
  beverage: string[] = ['beer', 'vodka', 'coke'];
  colors: string[] = ['blue', 'green', 'black'];

   switchSuffix(num){
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
  ngOnInit(){  
  }
}