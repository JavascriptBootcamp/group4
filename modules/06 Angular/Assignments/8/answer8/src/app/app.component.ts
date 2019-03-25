import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  anagram:string[];

  constructor() {
    this.anagram = ['rail safety', 'fairy tales'];
  }

}
