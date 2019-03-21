import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer6514';

  foods :string[];
  beverages :string[];
  colors :string[];
  constructor()
  {

    this.foods = ['hamburger', 'BBQ', 'salad'];
    this.beverages = ['beer', 'vodka', 'coke'];
    this.colors = ['blue', 'green', 'black'];


  }
}
