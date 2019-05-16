import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  time: string;
  min: number;
  sec: number;
  interval: number;
  constructor() { }

  init(startForm): void {
    this.time = startForm;
    this.min = Number(startForm.substr(0, 2));
    this.sec = Number(startForm.substr(3, 2));
  }
  startCountDown(): void {
    this.interval = window.setInterval(() => {
      if ((this.min <= 0) && (this.sec <= 0)) {
        this.stop();
      }
      else {
        if (this.sec <= 0) {
          this.sec = 60;
          this.min--;
        }
        this.sec--;
        this.time = this.min < 10 ? "0" + this.min : this.min + "";
        this.time = this.time + ":" + (this.sec < 10 ? "0" + this.sec : this.sec + "");
      }
    }, 1000);
  }
  startTimer(): void {
    this.interval = window.setInterval(() => {
      if (this.min >= 60 && this.sec >= 0) {
        this.stop();
      }
      else {
        if (this.sec > 59) {
          this.sec = 0;
          this.min++;
        }
        this.time = this.min < 10 ? "0" + this.min : this.min + "";
        this.time = this.time + ":" + (this.sec < 10 ? "0" + this.sec : this.sec + "");
        this.sec++;
      }
    }, 1000);
  }
  stop(): void {
    window.clearInterval(this.interval);
  }
  reset(startForm): void {
    this.init(startForm);
  }
}
