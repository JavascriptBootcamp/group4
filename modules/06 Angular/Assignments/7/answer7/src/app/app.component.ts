import { Component, OnInit} from '@angular/core';

interface Person {
  name:string;
  bloodPre:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  people:Person[];
  isNormal:boolean[];

  constructor () {

    this.isNormal = [];

    this.people = [
      {name:"Moshiko",bloodPre:120},
      {name:"Amitay",bloodPre:70},
      {name:"Lital",bloodPre:220},
      {name:"Dinner",bloodPre:90},
    ];
  }
 
  ngOnInit () {
    this.people.forEach((item,index)=>{
      if (item.bloodPre <=120 && item.bloodPre >= 80 )
        this.isNormal[index] = true;
      else
      this.isNormal[index] = false;
    });
  }
}
