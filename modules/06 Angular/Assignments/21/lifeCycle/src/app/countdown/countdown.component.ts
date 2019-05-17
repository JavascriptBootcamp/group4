import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @ViewChild('actionBtn') actionBtn: ElementRef;
  @ViewChild('min') minValue: ElementRef;
  @ViewChild('sec') secValue: ElementRef;

  interval: any;
  sec: number;
  min: number;
  secString: string;
  minString: string;
  timeOut: boolean;
  inValid: boolean = false;

  constructor() {

  }
  ngOnInit() {
    this.resetTimer();
    this.timeOut = false;
  }


  changeNameBtn(nameBtn: string) {
    this.actionBtn.nativeElement.innerText = nameBtn;
  }

  // ngAfterViewInit(){
  //   console.log(this.minValue.nativeElement.value);
  // }

  startTimer() {
    if (this.minValue.nativeElement.value && this.secValue.nativeElement.value) {

      if (this.actionBtn.nativeElement.innerText === "START") {
        this.changeNameBtn("STOP");
        this.timeOut = false;

        this.min = Number(this.minValue.nativeElement.value);
        this.sec = Number(this.secValue.nativeElement.value);
        this.formatTimer();

        this.interval = setInterval(() => {

          if ((this.min === 0) && (this.sec === 0)) {
            this.resetTimer();
            this.timeOut = true;
          }

          if (this.sec === 0) {
            if (this.min > 0)
              this.min -= 1;
            this.sec = 60;
          }

          this.sec--;

          // string to 0+digit
          this.formatTimer();

        }, 1000);
      }

      else {
        this.changeNameBtn("START");
        clearInterval(this.interval);
      }
    }
  }

  resetTimer() {
    clearInterval(this.interval);
    this.changeNameBtn("START");
    this.timeOut = false;
    this.minString = "00";
    this.secString = "00";
    this.minValue.nativeElement.value=null;
    this.secValue.nativeElement.value=null;

  }

  ngOnDestroy() {
    console.log("Lifecycle: ngOnDestroy");
    this.resetTimer();
  }

  formatTimer(){
    if (this.sec < 10)
    this.secString = "0" + this.sec;
  else
    this.secString = this.sec + "";
  if (this.min < 10)
    this.minString = "0" + this.min;
  else
    this.minString = this.min + "";
  }

}