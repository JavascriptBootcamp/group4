import { Component, OnInit, Input } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @Input() startForm: string;
  disStartBtn: boolean;
  constructor(public timerService: TimerService) { }

  ngOnInit() {
    this.timerService.init(this.startForm);
  }
  // init(): void {
  //   this.time = this.startForm;
  //   this.min = Number(this.startForm.substr(0, 2));
  //   console.log(this.min);
  //   this.sec = Number(this.startForm.substr(3, 2));
  //   console.log(this.sec);
  // }
  start(): void {
    this.disStartBtn = true;
    this.timerService.startCountDown();
    // this.interval = window.setInterval(() => {
    //   if ((this.min <= 0) && (this.sec <= 0)) {
    //     console.log("send stop");
    //     this.stop();
    //   }
    //   else {
    //     if (this.sec <= 0) {
    //       this.sec = 60;
    //       this.min--;
    //     }
    //     this.sec--;
    //     this.time = this.min < 10 ? "0" + this.min : this.min + "";
    //     this.time = this.time + ":" + (this.sec < 10 ? "0" + this.sec : this.sec + "");
    //   }
    // }, 1000);
  }
  stop(): void {
    this.disStartBtn = false;
    this.timerService.stop();
    // window.clearInterval(this.interval);
  }
  reset(): void {
    // this.stop();
    // this.init();
    this.stop();
    this.timerService.reset(this.startForm);
  }
  ngOnDestroy(): void {
    this.reset();
  }
}
