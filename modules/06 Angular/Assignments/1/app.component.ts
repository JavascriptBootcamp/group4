import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer 1 in module 06 Angular';

  // 1. create a variable “x”
  // 2. set its value as 5
  // 3. pre - increment its value and assign the result to "x" 5 times
  // 4. log the value of "x"
  x: number;

  constructor() {
    this.x = 5;
  }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      ++this.x;
    }
  }
}
