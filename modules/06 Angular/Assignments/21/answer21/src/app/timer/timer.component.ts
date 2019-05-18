import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceTimerCountdownService } from '../service-timer-countdown.service';
import { Timer } from '../timer.module';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy{

  counterTime: Timer;
  interval: any;

  constructor(private serviceTimerCountdownService: ServiceTimerCountdownService) { }


  ngOnDestroy() {
    clearInterval(this.interval);
    this.serviceTimerCountdownService.setTime = this.counterTime;
  }

  ngOnInit() {
    this.counterTime = this.serviceTimerCountdownService.getTime;
  }

  stop() {
    this.ngOnDestroy();
  }

  start() {
    
    this.counterTime = this.serviceTimerCountdownService.getTime; // get the time from service

    this.interval = setInterval(() => {

      this.counterTime.rightSecond++;

      if (this.counterTime.rightSecond === 10) {
        this.counterTime.rightSecond = 0;
        this.counterTime.leftSecond++;
      }

      if (this.counterTime.leftSecond === 6) {
        this.counterTime.leftSecond = 0;
        this.counterTime.rightMinute++;
      }

      if (this.counterTime.rightMinute === 10) {
        this.counterTime.rightMinute = 0;
        this.counterTime.leftMinute++;
      }
      
      if (this.counterTime.leftMinute === 6) {
        this.counterTime.leftMinute = 0;
      }

    }, 1000);
  }

  reset() {
    this.stop();
    this.serviceTimerCountdownService.setTime = { leftMinute: 0, rightMinute: 0, leftSecond: 0, rightSecond: 0 };
    this.counterTime = this.serviceTimerCountdownService.getTime;
  }


}
