import { Component,OnInit } from '@angular/core';
interface Person{
  name: string;
  bloodPressure:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  people:Person[];
  person1:Person={name:"Ofek",bloodPressure:20};
  person2:Person={name:"Shimon",bloodPressure:120};
  person3:Person={name:"Moshiko",bloodPressure:230};
  isNormal = false;
  header:boolean = true;
  constructor(){
    this.people=[this.person1,this.person2,this.person3]
  }
  ngOnInit(){

  }
  isNormal(bloodPressure:number){
    //(bloodPressure >= 80 && bloodPressure <= 120) //continue from here
  }
}
