import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer';
  x:number;
  constructor() {
    this.x=0;
  }

  ngOnInit() {
    this.x++;
    this.x++;
    this.x++;
  }

}
