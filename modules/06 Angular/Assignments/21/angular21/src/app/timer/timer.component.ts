import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  hours:any;
  minutes:any;
  secondes:any;
  disabledStartBtn:boolean;
  intervalFunc:any;
constructor() {
this.hours=0;
this.minutes=0;
this.secondes=0;
this.disabledStartBtn=false;

}

ngOnInit() {
if(this.hours<9){
this.hours='0'+this.hours;
}
if(this.minutes<9){
this.minutes='0'+this.minutes;
}
if(this.secondes<9){
this.secondes='0'+this.secondes;
}

}

start(){
  this.disabledStartBtn=true;

  this.intervalFunc=window.setInterval(()=>{
  
      +this.secondes++;
      if(+this.secondes<10){
        this.secondes='0'+this.secondes
      }
      if(+this.secondes===59){
          +this.minutes++;
          if(+this.minutes<10){
            this.minutes='0'+this.minutes;

          }
          if(+this.minutes===59&&+this.secondes===59){
            +this.hours++;
            if(+this.hours<10){
              this.hours='0'+this.hours;
            }
            this.minutes='0'+0;
          }
          this.secondes='0'+0;
      }

  },1000);


}

stop(){
  window.clearInterval(this.intervalFunc);
  this.disabledStartBtn=false;

}

reset(){
  this.minutes='0'+0;
    this.secondes='0'+0; 
       this.hours='0'+0;
       this.disabledStartBtn=false;

    window.clearInterval(this.intervalFunc);


}






}
