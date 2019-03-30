import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  strArr: string[];
  constructor() {
    this.strArr = ['a short sentence','a lazy fox','look, it is working!'];
  }

}