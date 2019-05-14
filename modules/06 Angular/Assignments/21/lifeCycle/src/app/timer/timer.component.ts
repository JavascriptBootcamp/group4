import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  
  @ViewChild('actionBtn') actionBtn: ElementRef;
  interval: any;
  sec: number;
  min: number;
  secString: string;
  minString: string;
  constructor() {

  }
  ngOnInit() {
    this.resetTimer();
  }

  // ngAfterViewChecked() {   !?!? for all change in component this run !?!?
  //   console.log(this.btnAction.nativeElement.innerText);
  //   if (this.btnAction.nativeElement.innerText === "START")
  //     this.btnAction.nativeElement.innerText = "STOP";
  //   else
  //   this.btnAction.nativeElement.innerText = "START";
  // }

  changeNameBtn(nameBtn: string) {
    this.actionBtn.nativeElement.innerText = nameBtn;
  }

  startTimer() {
    if (this.actionBtn.nativeElement.innerText === "START") {
      this.changeNameBtn("STOP");
      this.interval = setInterval(() => {
        this.sec++;
        if (this.sec === 60) {
          this.sec = 0;
          this.min++;
        }
        if (this.sec < 10)
          this.secString = "0" + this.sec;
        else
          this.secString = this.sec + "";
        if (this.min < 10)
          this.minString = "0" + this.min;
        else
          this.minString = this.min + "";
      }, 1000);
    }

    else {
      this.changeNameBtn("START");
      clearInterval(this.interval);
    }
  }

  resetTimer() {
    clearInterval(this.interval);
    this.changeNameBtn("START");
    this.min = 0;
    this.sec = 0;
    this.minString = "00";
    this.secString = "00";
  }

  ngOnDestroy() {
    console.log("Lifecycle: ngOnDestroy");
    this.resetTimer();
  }



}
