import { Component } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer5toModule03Answer02';

  xmlHousesObjects: object[];

  constructor() {
    this.xmlHousesObjects = [
      {
        houseName:  "house1",
        city:"Tel Aviv",
        country:"Israel",
        roomSize: "20",
        roomColor: "white"  
      }, 

      {
        houseName: "house 2",
        city:"Jerusalem"
      }
    ];
  }
}
