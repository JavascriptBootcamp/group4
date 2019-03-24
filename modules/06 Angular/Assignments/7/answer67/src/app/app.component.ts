import { Component,OnInit } from '@angular/core';

interface Person{
  name:string,
  bloodPressure:number


}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit {
  title = 'answer67';
  peoples:Person[];
  ngOnInit(){
    let lital:Person = { name:"lital ",bloodPressure:156} ;
    let lea:Person = { name:"lea ",bloodPressure:80} ;
    
    this.peoples=[lital,lea];

  }
}
