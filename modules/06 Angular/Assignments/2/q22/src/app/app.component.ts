import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'q22';

  bool: boolean;
  num: number;
  str: string;
  names: object;
  // console.log(typeof bool, typeof num, typeof str, typeof names);

  constructor(){
    this.bool = true;
    this.num = 2;
    this.str = "ofek";
    this.names = {dan: "daniel", uri:"uriel"};
  }

  getNamesKeys(): string[]{
    return Object.keys(this.names);
  }

}
