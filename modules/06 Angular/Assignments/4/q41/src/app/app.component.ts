import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  str: string;

  constructor() {
    this.title = 'q41';
    this.str = 'aaa bbbb  ';
  }

  evenWords(): string {
    // var input= 'aaa bbbb  '
    // var strArr=input.split(' ');
    const strArr: string[] =  this.str.split(' ');
    let strAns: string = "";
    for (let i = 1; i <= strArr.length; ++i) {
      if (i % 2 == 0) {
        strAns += strArr[i - 1] + " ";
      }

    }
    return strAns;
  }


  ngOnInit() {



  }
}
