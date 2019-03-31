import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer02';
  //assignment 1:
  animalsStr: string;
  animalsStrType: string;
  animalsNum: number;
  animalsArr: string[];

  //assignment2:
  bool: boolean;
  num: number;
  str: string;
  names: object;
  typeOfBool: string;
  typeOfNum: string;
  typeOfStr: string;
  typeOfNames: string;

  //assignment 4:
  x: number;
  y: number;

  constructor() {
    //assignment1:
    this.animalsStr = `dog`;
    this.animalsNum = 214;
    this.animalsArr = ['dog', 'cat', 'lion'];

    //assignment2:
    this.bool = true;
    this.num = 10;
    this.str = `hello`;
    this.names = [];

    //assignment 4:
    this.x = 0;
    this.y = 0;
  }


  ngOnInit() {
    //assignment 1:
    this.animalsStrType = typeof this.animalsStr;
    this.animalsNum += 300;

    //assignment2:
    this.typeOfBool = typeof this.bool;
    this.typeOfNum = typeof this.num;
    this.typeOfStr = typeof this.str;
    this.typeOfNames = typeof this.names

    //assignment 4:
    this.x = ++this.x;
    this.x = ++this.x;
    this.y = this.y++;
    this.y = this.y++;
  }

}


