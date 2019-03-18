import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string;
  duration:number;
  stars:string[];
  constructor(){
  }
  ngOnInit(){
    this.title="Spiderman";
    this.duration=120;
    this.stars=["Peter","Merry","Moses"];
  }
}
