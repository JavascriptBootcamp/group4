import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  strings:string[];
  constructor(){
    this.strings=["test number one","test number two","test number three"];
  }
}
