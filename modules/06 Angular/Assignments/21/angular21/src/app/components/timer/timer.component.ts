import { Component, OnInit, Input } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() startForm: string;
  disStartBtn: boolean;

  constructor(public timerService: TimerService) { }

  ngOnInit() {
    this.timerService.init(this.startForm);
  }
  start(): void {
    this.disStartBtn = true;
    this.timerService.startTimer();
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
