import { Component, OnInit } from '@angular/core';
interface pepole{
  name:string;
  bloodPressure:number;
  isNormal:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _pepole: pepole[]
  constructor(){
    this._pepole = null

  }

  ngOnInit(){
    this._pepole = [
      {
        name: "David",
        bloodPressure: 70,
        isNormal:false
      },
      {
        name: "Yoni",
        bloodPressure: 80,
        isNormal:true
      },
      {
        name: "David",
        bloodPressure: 121,
        isNormal:false
      },
      {
        name: "David",
        bloodPressure: 119,
        isNormal:true
      }
    ]

  }
}
