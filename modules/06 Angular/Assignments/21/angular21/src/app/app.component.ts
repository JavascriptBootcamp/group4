import { Component, ViewChild, ElementRef , AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  @ViewChild('inputTimer') inputTimer : ElementRef;
  timer : boolean;
  seconds: number;
  minutes: number;
  hours: number;
  interval: any;
  constructor() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.interval = 0;
    this.timer = true;
  }
  toggle(){
    this.timer = !this.timer;
  }
  start(event : Event) {
    this.interval = setInterval(() => {
      if (this.seconds < 10) {
      }
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }
      if (this.minutes === 24) {
        this.minutes = 0;
        this.hours++;
      }
    }, 1000);
  }
  stop(event : Event) {
    clearInterval(this.interval);
  }
  reset(event : Event) {
    clearInterval(this.interval);
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }
  ngAfterViewChecked(){
    
  }
}
