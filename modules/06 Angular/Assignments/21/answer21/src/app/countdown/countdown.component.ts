import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceTimerCountdownService } from '../service-timer-countdown.service';
import { Timer } from '../timer.module';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnDestroy , OnInit{

  counterTime: Timer;
  interval: any;


  constructor(private serviceTimerCountdownService: ServiceTimerCountdownService) { }


  // get getFromInput() {
  //   if (this.userForm.get('startTime') === null) {
  //     return this.serviceTimerCountdownService.getTime;
  //   } else {
  //     return { leftMinute: 0, rightMinute: this.userForm.get('startTime').value, leftSecond: 0, rightSecond: 0 };
  //   }
  // }

ngOnInit () {
  this.counterTime = this.serviceTimerCountdownService.getTime;
}

  ngOnDestroy() {
    clearInterval(this.interval);
    this.serviceTimerCountdownService.setTime = this.counterTime;
  }

  stop() {
    this.ngOnDestroy();
  }

  start() {
    // fetching the info from the input from app and then set it to the service
    this.counterTime = this.serviceTimerCountdownService.getTime; // get the time from service

    this.interval = setInterval(() => {

      this.counterTime.rightSecond--;

      if (this.counterTime.rightSecond === -1) {
        this.counterTime.rightSecond = 9;
        this.counterTime.leftSecond--;
      }

      if (this.counterTime.leftSecond === -1) {
        this.counterTime.leftSecond = 5;
        this.counterTime.rightMinute--;
      }

      if (this.counterTime.rightMinute === -1) {
        this.counterTime.rightMinute = 9;
        this.counterTime.leftMinute--;
      }

      if (this.counterTime.leftMinute === -1) {
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
