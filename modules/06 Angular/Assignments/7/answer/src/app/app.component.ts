import { Component, } from '@angular/core';

interface Person{
  name:string;
  bloodPressure:number;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title:string;
  people:Person[];
  constructor()
{
  this.title= 'answer';
  this.people=[
    {name:'shani',bloodPressure:90},
    {name:'alon',bloodPressure:160},
    {name:'shai',bloodPressure:100},
  ];
}
}
