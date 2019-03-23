import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //for ex 1
  animals: any;
  //for ex 2
  bool: boolean;
  num: number;
  str: string;
  names: object;
  //for ex 4
  x:number;
  y:number;

  constructor() {
    this.animals = "dog";
    this.bool = true;
    this.num = 2;
    this.str = "ofek";
    this.names = {};
    this.x=0;
    this.y = 0;
  }

  ngOnInit(): void {
    this.x = ++this.x;
    this.x = ++this.x;
    this.y = this.y++;
    this.y = this.y++;
  }

  get_type(item: any): string {
    return typeof item;
  }

  set_animals(item: any): void {
    this.animals = item;
  }

}
