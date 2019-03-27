import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str1:string;
  str2:string;

  constructor(){
    this.str1 = 'rail safety?fairy tales';
    this.str2 = '123rail safety?fairy tales';
  }
}
