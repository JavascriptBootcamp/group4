import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  seconds: number;
  minutes: number;
  hours: number;
  constructor() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }

  ngOnInit() {
    setInterval(() => {
      if(this.seconds <10)
      {
      }
      this.seconds++;
      if(this.seconds === 60)
      {
        this.seconds = 0;
        this.minutes++;
      }
      if(this.minutes === 24)
      {
        this.minutes = 0;
        this.hours++;
      }
    }, 1000)
  }

}
