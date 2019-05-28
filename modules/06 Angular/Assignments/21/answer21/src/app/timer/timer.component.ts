import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() minutes: number;
  @Input() seconds: number;
  @Input() interval: any;
  @Output() onStartEvent = new EventEmitter<any>();
  @Output() onStopEvent = new EventEmitter<any>();
  @Output() onResetEvent = new EventEmitter<any>();
  startDisabled: boolean;
  stopDisabled: boolean;
  resetDisabled: boolean;
  constructor() {
    this.startDisabled = false;
    this.stopDisabled = false;
    this.resetDisabled = false;
  }

  ngOnInit() {
  }

  onStartClick() {
    this.startDisabled = true;
    this.stopDisabled = false;
    this.resetDisabled = false;
    this.onStartEvent.emit();
  }

  onStopClick() {
    this.startDisabled = false;
    this.stopDisabled = true;
    this.resetDisabled = false;
    this.onStopEvent.emit();
  }

  onResetClick() {
    this.startDisabled = false;
    this.stopDisabled = false;
    this.resetDisabled = true;
    this.onResetEvent.emit();
  }

  ngOnDestroy() {
    this.onResetEvent.emit();
  }
}
