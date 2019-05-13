import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('inputTimer') inputTimer: ElementRef;
  @ViewChild('startFrom') startFrom: ElementRef;
  timer: boolean;
  seconds: number;
  minutes: number;
  hours: number;
  interval: any;
  calcTime: number;
  constructor() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.interval = 0;
    this.timer = true;
    this.calcTime = 0;
  }
  toggle() {
    this.timer = !this.timer;
    this.startFrom.nativeElement.value = "";
  }
  start(event: Event) {
    this.interval = setInterval(() => {
      this.seconds += 1;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
      }
      if (this.hours === 24) {
        this.hours = 0;
      }
    }, 1000);
  }
  startRev() {
    if (this.startFrom.nativeElement.value) {
      if(!this.minutes){
        this.minutes = this.startFrom.nativeElement.value;
      }
      this.interval = setInterval(() => {
        if (this.seconds <= 0) {
          this.minutes--;
          this.seconds = 60;
        }
        if (this.minutes < 0) {
          this.minutes = 59;
        }
        this.seconds--;
      }, 1000);
    }
  }
  stop(event: Event) {
    clearInterval(this.interval);
  }
  reset(event: Event) {
    clearInterval(this.interval);
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }
}
