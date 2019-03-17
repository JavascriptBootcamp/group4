import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  foods: string[] = ['hamburger', 'BBQ', 'salad'];
  beverages: string[] = ['beer', 'vodka', 'coke'];
  colors: string[] = ['blue', 'green', 'black'];
  ngOnInit() {
    
  }
  switchSuffix(num:number) {
    switch (num) {
      case 1:
        return '1 st'
      case 2:
        return '2 nd'
      case 3:
        return '3 rd';
      case 4:
        return '4 th';
    }
  }
}
