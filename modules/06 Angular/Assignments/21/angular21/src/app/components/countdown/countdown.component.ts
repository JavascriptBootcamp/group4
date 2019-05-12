import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @Input() startForm: string;
  constructor() { }

  ngOnInit() {
  }
  start() {

  }
  stop() {

  }
  reset() {

  }
}
