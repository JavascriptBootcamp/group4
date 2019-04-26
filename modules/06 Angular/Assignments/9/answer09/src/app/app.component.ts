import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TitleCasePipe';

  strArr: string[];

  constructor() {
    this.strArr = ['a', 'lazy', 'fox', 'and', 'cat'];
  }
}
