import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @ViewChild('btn') btn: ElementRef;
  interval: any;
  sec: number;
  min: number;
  timeOut:boolean;

  constructor() {
   
  }
  ngOnInit() {
    this.resetTimer();
    this.timeOut=false;
  }

  startTimer(){
    this.interval = setInterval(() => {
      if (this.sec === 0) {
        this.sec = 60;
        this.min -=1;
      }
      this.sec -= 1;

      if((this.min===0)&&(this.sec = 0)){
        this.resetTimer();
        this.timeOut=true;
      }
    }, 1000);
  }

  resetTimer(){
    clearInterval(this.interval);
    this.min = 5;
    this.sec = 0;
  }

  ngOnDestroy() {
    console.log("Lifecycle: ngOnDestroy");
    this.resetTimer();
  }

  ngAfterViewChecked(){

  }

}