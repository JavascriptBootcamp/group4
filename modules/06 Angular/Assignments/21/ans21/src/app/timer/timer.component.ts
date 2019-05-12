import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  time:number;
  interval:any;
  constructor() { 
    this.time=0;
  }
  start(){
    if(!this.interval){
      this.interval= setInterval(()=>{
      this.time++;
    },1000)
  }
  }
  pause(){
    clearInterval(this.interval)
    this.interval=null
  }
  reset(){
    clearInterval(this.interval)
    this.interval=null
    this.time=0
  }
  ngOnInit() {
  }


}
