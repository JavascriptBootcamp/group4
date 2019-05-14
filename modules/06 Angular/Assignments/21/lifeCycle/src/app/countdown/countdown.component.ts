import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @ViewChild('actionBtn') actionBtn: ElementRef;
  interval: any;
  sec: number;
  min: number;
  secString: string;
  minString: string;
  timeOut: boolean;

  constructor() {

  }
  ngOnInit() {
    this.resetTimer();
    this.timeOut = false;
  }


  changeNameBtn(nameBtn: string) {
    this.actionBtn.nativeElement.innerText = nameBtn;
  }

  startTimer() {
    if (this.actionBtn.nativeElement.innerText === "START") {
      this.changeNameBtn("STOP");
      this.timeOut = false;

      this.interval = setInterval(() => {
        if (this.sec === 0) {
          console.log(this.sec);
          this.sec = 60;
          if (this.min > 0)
            this.min -= 1;
        }
        this.sec--;
        console.log(this.sec);
        console.log(this.secString);
        // string to 0+digit
        if (this.sec < 10)
          this.secString = "0" + this.sec;
        else
          this.secString = this.sec + "";
        console.log(this.sec);
        console.log(this.secString);
        if (this.min < 10)
          this.minString = "0" + this.min;
        else
          this.minString = this.min + "";


        if ((this.min === 0) && (this.sec === 0)) {
          this.resetTimer();
          this.timeOut = true;
        }
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
    this.timeOut = false;
    this.min = 5;
    this.sec = 0;
    this.minString = "05";
    this.secString = "00";
  }

  ngOnDestroy() {
    console.log("Lifecycle: ngOnDestroy");
    this.resetTimer();
  }

  ngAfterViewChecked() {

  }

}