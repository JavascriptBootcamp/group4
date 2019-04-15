import { Component } from '@angular/core';
import { AnagramPipe } from "./anagram.pipe"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputStrings : string[];

  constructor()
  {
    this.inputStrings = [
      '123rail safety?fairy tales',
      'rail safety?fairy tales'
    ]
  }
}
