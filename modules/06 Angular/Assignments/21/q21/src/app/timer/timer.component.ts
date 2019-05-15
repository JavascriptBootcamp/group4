import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() end: string;
  @Output() resetEvent: EventEmitter<any>;
  @Output() stopEvent: EventEmitter<any>;
  timer: string;
  currentTimer: number;
  seconds: number;
  minutes: number;
  interval: any;

  isStartButtonEnabled: boolean;
  isStopButtonEnabled: boolean;
  isResetButtonEnabled: boolean;

  constructor() { 
    this.resetEvent = new EventEmitter();
    this.stopEvent = new EventEmitter();
    this.init();

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.onResetClicked();
  }

  onStartClicked(){
    this.isStartButtonEnabled = false;
    this.isStopButtonEnabled = true;
    this.isResetButtonEnabled = true;

    this.interval = setInterval( () => {
      this.setTimer();
      if(this.currentTimer === +this.end)
        clearInterval(this.interval);
    }, 1000 );
  }

  onStopClicked(){
    this.isStartButtonEnabled = true;
    this.isStopButtonEnabled = false;
    this.isResetButtonEnabled = true;
    
    this.isStartButtonEnabled = true;
    if(this.interval)
      clearInterval(this.interval);
    this.stopEvent.emit();
  }

  onResetClicked(){
    if(this.interval)
      clearInterval(this.interval);
    this.init();
    this.resetEvent.emit();
  }

  setTimer(){
    this.currentTimer++;
    this.seconds = this.currentTimer % 60;
    this.minutes += this.currentTimer % 60 === 0 ? 1 : 0;

    this.timer = this.getMinStr() + ':' + this.getSecStr();

  }

  getSecStr(): string{
    return this.seconds > 9 ? this.seconds.toString() : '0' + this.seconds;
  }

  getMinStr(): string{
    return this.minutes > 9 ? this.minutes.toString() : '0' + this.minutes;
  }

  init(){
    this.timer = "00:00";
    this.currentTimer = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.isStartButtonEnabled = true;
    this.isStopButtonEnabled = false;
    this.isResetButtonEnabled = false;
  }

}
