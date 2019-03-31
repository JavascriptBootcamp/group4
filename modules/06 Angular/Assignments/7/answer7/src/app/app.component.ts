import { Component,OnInit } from '@angular/core';
interface Person{
  name: string;
  bloodPressure:number;
  isNormal:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  people:Person[];
  person1:Person={name:"Ofek",bloodPressure:20,isNormal:false};
  person2:Person={name:"Shimon",bloodPressure:120,isNormal:false};
  person3:Person={name:"Moshiko",bloodPressure:230,isNormal:false};
  header:boolean = true;
  constructor(){
    this.people=[this.person1,this.person2,this.person3];
  }
  ngOnInit(){
    for(let i=0;i<this.people.length;i++){
      if(this.people[i].bloodPressure>= 80 && this.people[i].bloodPressure <= 120)
        this.people[i].isNormal=true;
      else
        this.people[i].isNormal=false;
    }
  }
}
