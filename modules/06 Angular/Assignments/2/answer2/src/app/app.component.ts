import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  animal:string;
  bool:boolean;
  num:number;
  str:string;
  names:object;
  x:number;
  y:number;
  constructor(){
    this.x=0;
    this.y=0;
    this.animal = 'dog';
    this.bool=true;
    this.num=12;
    this.str="something";
    this.names={firstName:"Ofek",lastName:"Arbeli"};
  }
  ngOnInit(){
    ++this.x;
    ++this.x;
    this.y++;
    this.y++;
  }
}
