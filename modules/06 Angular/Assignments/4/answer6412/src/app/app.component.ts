import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer6412';
  strAns:string=  "";
  ngOnInit() {
    // this.evenWords('aaa bbbb  ') ;
  }
  evenWords(str: string) {
        console.log(str);

    // var input= 'aaa bbbb  '
    // var strArr=input.split(' ');
    let strArr = str.split(' ');
    // var strAns = "";
    for (var i = 1; i <= strArr.length; ++i) {

      if (i % 2 == 0) {
        this.strAns += strArr[i - 1] + " ";
      }

    }
    // console.log(strAns);
    // return strAns;
  }
}
