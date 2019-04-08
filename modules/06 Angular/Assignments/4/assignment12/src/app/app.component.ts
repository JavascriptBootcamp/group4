import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str : string;

  constructor()
  {
    this.str = this.evenWords("aaa bbbb");
  }

  evenWords(str : string)
  {
    //input= 'aaa bbbb  '
    //strArr=input.split(' ');
    let strArr = str.split(' ');
    let strAns = "";

    for(var i=1;i<=strArr.length;++i)
    {  
        if(i % 2 === 0)
        {
            strAns += strArr[i - 1] + " ";
        }
    }

    return strAns;
  }
}
