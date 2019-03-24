import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer2';
  bool:boolean = true;
  num:number = 2;
  str:string = "ofek";
  names:object = {};
  result:string = ` ${typeof(this.bool)} ${typeof this.num}  ${typeof this.str} ${typeof this.names}`;
}
