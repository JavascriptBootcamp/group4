import { Injectable } from '@angular/core';
import { Timer } from './timer.module';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServiceTimerCountdownService {

  time: Timer;

  constructor(private serviceTimerCountdownService: ServiceTimerCountdownService) {
    this.time = { leftMinute: 0, rightMinute: 5, leftSecond: 0, rightSecond: 0 };
  }

  get getTime(): Timer {
    return this.time;
  }

  set setTime(time: Timer) {
    this.time = time;
  }

  

}
