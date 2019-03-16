import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  title = 'answer01';
  x:number;
  constructor() {
    this.x=0;
  }

  ngOnInit(): void {
    this.x=5;
    this.x=++  this.x;
    this.x=++  this.x;
    this.x=++  this.x;
    this.x=++  this.x;
    this.x=++  this.x;
  }
}
