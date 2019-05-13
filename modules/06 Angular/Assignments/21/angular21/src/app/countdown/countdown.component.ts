import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, AfterViewInit {
  @Input() seconds: number;
  @Input() minutes: number;
  @Output() startEvent: EventEmitter<any> = new EventEmitter();
  @Output() stopEvent: EventEmitter<any> = new EventEmitter();
  @Output() resetEvent: EventEmitter<any> = new EventEmitter();
  @ViewChild('timerWrapper') timerWrapper: ElementRef;
  constructor() { }

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
  ngAfterViewInit() {
    this.timerWrapper.nativeElement.style.backgroundColor = "#ddd";
  }
}
