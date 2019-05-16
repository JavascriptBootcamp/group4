import { Component, OnInit,ViewChild,DoCheck } from '@angular/core';
import { CountdownComponent } from './countdown/countdown.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck {
  title = 'life-cycle-hooks-ex';
  timerClicked: boolean;
  action: string;
  interval: any;
  minutes: any;
  sec: any;
  @ViewChild(CountdownComponent) countdownComponent;
  constructor() {
    this.timerClicked = true;
    this.action = null;

    this.interval = null;
    this.sec = null;
    this.minutes = null;
  }

  Func_timerClicked() {
    this.timerClicked = true;

  }

  Func_countdownClicked() {
    this.timerClicked = false;
  }


  start() {
    this.action = "start";
  }

  stop() {
    this.action = "stop";
  }

  reset() {
    this.action = "reset";
  }


  ngOnInit() {

   
  }


  ngDoCheck(){
    console.log("ngDoCheck")
    if(this.countdownComponent && this.countdownComponent.sec=== "00" && this.countdownComponent.minutes === "00"){   
      clearInterval(this.countdownComponent.interval);
    }
  }

}
