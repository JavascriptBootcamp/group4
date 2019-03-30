import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A09';
  array: string[];

  constructor() {
    this.array = ['a short sentence', 'a lazy fox', 'look, it is working!'];
  }
}
