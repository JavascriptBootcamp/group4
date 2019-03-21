import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer622';
  str: string;
  num: number;
  bool: boolean;
  names: {};
  constructor() {

    this.bool = true, this.num = 2, this.str = "ofek", this.names = {}

  }
  typeOf(value) {
    return typeof value;
  }

}
