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
  start(): void {
    this.disStartBtn = true;
    this.timerService.startCountDown();
  }
  stop(): void {
    this.disStartBtn = false;
    this.timerService.stop();
  }
  reset(): void {
    this.stop();
    this.timerService.reset(this.startForm);
  }
  ngOnDestroy(): void {
    this.reset();
  }
}
