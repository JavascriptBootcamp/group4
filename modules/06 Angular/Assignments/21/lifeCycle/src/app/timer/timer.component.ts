import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  interval: any;
  sec: number;
  min: number;

  constructor() {
   
  }
  ngOnInit() {
    this.resetTimer();
  }

  startTimer(){
    this.interval = setInterval(() => {
      this.sec += 1;
      if (this.sec === 60) {
        this.sec = 0;
        this.min +=1;
      }
    }, 1000);
  }

  resetTimer(){
    clearInterval(this.interval);
    this.min = 0;
    this.sec = 0;
  }

  ngOnDestroy() {
    console.log("Lifecycle: ngOnDestroy");
    this.resetTimer();
  }

}
