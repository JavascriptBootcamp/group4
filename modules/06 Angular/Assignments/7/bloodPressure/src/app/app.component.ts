import { Component } from '@angular/core';

interface people{
  name:string,
  bloodPressure:number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public peoples:people[]
  constructor(){
   this.peoples = [
     {name:"lital",bloodPressure:110},
     {name:"roi",bloodPressure:120},
     {name:"mor",bloodPressure:125},
     {name:"dan",bloodPressure:115},
     {name:"ran",bloodPressure:117}
   ]
  }

   isNormal(bloodPressure:number):boolean{

    let isNormal = false;
    (bloodPressure >= 80 && bloodPressure <= 120) ? isNormal = true : isNormal;
    (bloodPressure <= 80 || bloodPressure >= 120) ? isNormal : isNormal = true;
     return isNormal;
   }
}
