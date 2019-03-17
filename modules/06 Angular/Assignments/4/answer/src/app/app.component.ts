import { Component, OnInit } from '@angular/core';

interface Recipe {
  title:string,
  servings:number, 
  ingredients:string[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  recipe:Recipe;

  constructor() {
    this.recipe = {
      title : "pizza",
      servings : 13, 
      ingredients : ["water ","sugar","salt","salt","olive oil","flour"]
    }
  }

  ngOnInit() {

  }

  evenWords(str: string): string {
    var strArr = str.split(' ');
    var strAns = "";
    for (var i = 1; i <= strArr.length; ++i) {

      if (i % 2 == 0) {
        strAns += strArr[i - 1] + " ";
      }

    }
    return strAns;
  }

}
