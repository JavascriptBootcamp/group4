import { 
  Component, 
  OnInit, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, 
  ViewChild} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements 
    OnInit, 
    OnDestroy
  {
  @ViewChild('timer') timerRadioElem;
  @ViewChild('countDown') countDownRadioElem;
  private startTime: number;
  private passedMinutes: string;
  private passedSeconds: string;
  private passedMilisecondsNum: number;
  private intervalId: any;

  constructor(private timerServiceObj: TimerService, private _router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges', changes);
  }

  ngOnInit() {
    //console.log('ngOnInit');
    this.startTime = null;
    this.passedMinutes = '00';
    this.passedSeconds = '00';
  }


  ngOnDestroy() {
    clearInterval(this.intervalId);
  }


  onclickStartButton(): void {
    // Start timer running from zero
    if (this.startTime == null) {
      this.startTime = Date.now();  // Miliseconds passed from time from 1970...

      this.intervalId = setInterval( () => {
        this.passedMilisecondsNum = Date.now() - this.startTime;
        this.passedMinutes = this.padNumberTo2Digits(new Date(this.passedMilisecondsNum).getMinutes());
        this.passedSeconds = this.padNumberTo2Digits(new Date(this.passedMilisecondsNum).getSeconds());
      }, 1000); 
    }
    // Start timer running from time it stopped 
    else {
      this.startTime = Date.now() - this.passedMilisecondsNum;

      this.intervalId = setInterval( () => {
        this.passedMilisecondsNum = Date.now() - this.startTime;
        this.passedMinutes = this.padNumberTo2Digits(new Date(this.passedMilisecondsNum).getMinutes());
        this.passedSeconds = this.padNumberTo2Digits(new Date(this.passedMilisecondsNum).getSeconds());
      }, 1000); 
    }
  }


  onclickStopButton(): void {
    if (this.startTime !== null) clearInterval(this.intervalId);
  }


  onclickResetButton(): void {
    if(this.startTime !== null) {
      clearInterval(this.intervalId);
      this.startTime = null;
      this.passedMinutes = '00';
      this.passedSeconds = '00';
    } 
  }


  onclickCountDownRadio(e): void {
    //console.log(e.target); 
    this.timerRadioElem.checked = false;
    this.countDownRadioElem.checked = true;
    this._router.navigate(['/count-down']);
  }



  // Utils
  padNumberTo2Digits(value): string {
    return String(value).padStart(2, '0');
  }

}
