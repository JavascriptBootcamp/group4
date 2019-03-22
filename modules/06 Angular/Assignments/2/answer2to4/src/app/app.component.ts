import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer2to4';

  x: number;
  y: number;
  result: object;

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  ngOnInit(){
    this.x = ++this.x;
    this.x = ++this.x;
    this.y = this.y++;
    this.y = this.y++;
  }
}
