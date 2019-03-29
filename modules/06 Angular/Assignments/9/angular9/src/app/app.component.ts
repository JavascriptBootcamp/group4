import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9';
  arrStr: string[];

  constructor() {
    this.arrStr = ['a short sentence', 'a lazy fox', 'look, it is working!'];
  }
}
