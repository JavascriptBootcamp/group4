import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  foods:string[] = ['hamburger', 'BBQ', 'salad'];
  beverages:string[] = ['beer', 'vodka', 'coke'];
  colors:string[] = ['blue', 'green', 'black'];

  ngOnInit() {
    //this.foods = ['hamburger', 'BBQ', 'salad'];
    // this.beverages = ['beer', 'vodka', 'coke'];
    // this.colors = ['blue', 'green', 'black'];
  }
  
}

