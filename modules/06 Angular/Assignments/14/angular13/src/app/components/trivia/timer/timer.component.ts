import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {


  interval: any;
  sec: number;
  min: number;
  secString: string;
  minString: string;
  timeOut: boolean;
  inValid: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.resetTimer();
  }

  ngAfterViewInit() {
    console.log("s");
  }

  startTimer() {
    this.interval = setInterval(() => {
      
      if ((this.min === 0) && (this.sec === 0)) {
        this.resetTimer();
        this.timeOut = true;
      }

      if (this.sec === 0) {
        if (this.min > 0)
          this.min -= 1;
        this.sec = 60;
      }
      this.sec--;
      // string to 0+digit
      this.formatTimer();
    }, 1000);
  }


  resetTimer() {
    clearInterval(this.interval);
    this.timeOut = false;
    this.min = 0;
    this.sec = 10;
    this.minString = "00";
    this.secString = "10";
    this.startTimer();
  }

  ngOnDestroy() {
    console.log("Lifecycle: ngOnDestroy");
    this.resetTimer();
  }

  formatTimer() {
    if (this.sec < 10)
      this.secString = "0" + this.sec;
    else
      this.secString = this.sec + "";
    if (this.min < 10)
      this.minString = "0" + this.min;
    else
      this.minString = this.min + "";
  }

}