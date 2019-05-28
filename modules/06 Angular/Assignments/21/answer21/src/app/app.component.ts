import { Component, ViewChild, ElementRef, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  isTimer: boolean;
  minutes: number;
  seconds: number;
  interval: any;
  @ViewChild('start') timeStart: ElementRef;
  constructor() {
    this.isTimer = false;
    this.minutes = 0;
    this.seconds = 0;
    this.interval = 0;
  }

  ngOnInit() {
  }

  onStartTimer() {
    this.interval = setInterval(() => {
      this.seconds++;
      if (this.seconds % 60 === 0) {
        this.seconds = 0;
        this.minutes++;
      }
    }, 1000);
  }

  onStartCountdown() {
    if (this.timeStart.nativeElement.value != 0) {
      if (this.minutes === 0 && this.seconds === 0) {
        this.minutes = this.timeStart.nativeElement.value;
      }
      this.interval = setInterval(() => {
        if (this.seconds === 0) {
          this.seconds = 59;
          this.minutes--;
        } else
          this.seconds--;
      }, 1000);
    }
  }

  onStop() {
    clearInterval(this.interval);
  }

  onReset() {
    clearInterval(this.interval);
    this.seconds = 0;
    this.minutes = 0;
    if (this.timeStart.nativeElement.value) {
      this.timeStart.nativeElement.value = '';
    }
  }

  ngDoCheck() {
    if (this.isTimer === false) {
      this.timeStart.nativeElement.style.visibility = 'hidden';
    } else {
      this.timeStart.nativeElement.style.visibility = 'visible';
    }
  }
}
