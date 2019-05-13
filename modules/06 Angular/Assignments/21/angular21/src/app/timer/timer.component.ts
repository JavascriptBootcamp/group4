import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() seconds: number;
  @Input() minutes: number;
  @Input() hours: number;
  @Output() startEvent: EventEmitter<any> = new EventEmitter();
  @Output() stopEvent: EventEmitter<any> = new EventEmitter();
  @Output() resetEvent: EventEmitter<any> = new EventEmitter();
  constructor() {
  }
  ngOnInit() {

  }
  start() {
    this.startEvent.emit();
  }
  stop() {
    this.stopEvent.emit();
  }
  reset() {
    this.resetEvent.emit();
  }
  ngOnDestroy() {
    this.resetEvent.emit();
  }
}
