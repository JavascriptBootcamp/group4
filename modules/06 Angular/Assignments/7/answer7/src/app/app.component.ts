import { Component } from '@angular/core';

  interface Person{
    name:string;
    bloodPresure:number;
  }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer7';
  people:Person[];

  constructor(){
  
  this.people=[{name:"Malak",bloodPresure:120},{name:"Ilan",bloodPresure:135},{name:"alian",bloodPresure:70}];


}


}
