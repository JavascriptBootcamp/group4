import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form10';
  hobbies:string[]=["Tennis","Basketball","Hoki"];

  constructor(){
    this.hobbies=["Tennis","Basketball","Hoki"];
  }
  
}
