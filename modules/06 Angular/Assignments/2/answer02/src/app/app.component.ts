import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'answer02';
  //answer 1
  animals: string;
  animalsNum: number;
  animalsArr: string[];
  typeOfanimalsVar: string;
  //answer 2
  bool: boolean;
  num: number;
  str: string;
  names: object;
  resultContent: string;
  //answer 4
  x: number;
  y: number;
  result: object;
  constructor() {
    //answer 1
    this.animals = 'dog';
    this.animalsNum = 214;
    this.animalsArr = ['dog', 'cat', 'lion'];
    //answer 2
    this.bool = true;
    this.num = 2;
    this.str = "shimon";
    this.names = {};
    //answer 4
    this.x = 0;
    this.y = 0;
  
  }



  ngOnInit() {
    //answer 1
    this.typeOfanimalsVar = typeof this.animals;
    this.animalsNum += 300;
    console.error(this.animalsArr[1]);
    //answer 2
    this.resultContent = `Type of ${this.bool} is ${typeof this.bool},
    type of ${this.num} is ${typeof this.num},
    type of ${this.str} is ${typeof this.str},
    type of ${this.names} is ${typeof this.names}`;
      //answer 4
      this.x = ++this.x;
      this.x = ++this.x;
      this.y = this.y++;
      this.y = this.y++;
  }

}
