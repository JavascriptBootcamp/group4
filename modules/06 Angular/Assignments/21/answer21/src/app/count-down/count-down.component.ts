import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit, OnDestroy {
  @ViewChild('timer') timerRadioElem;
  @ViewChild('countDown') countDownRadioElem;

  private totalPassedSeconds;
  private totalRemainedSeconds: number;
  private minutesRemained: number;
  private secondsRemained: number;
  private currentMinutes: string;
  private currentSeconds: string;
  private intervalId: any;
  private minutesStartFrom: number;
  private secondsStartFrom: number;
  private falseTimeMessage: string;
  isInputsDisabled: boolean;


  constructor(private _router: Router) { }

  ngOnInit() {
    this.totalPassedSeconds = 0;
    this.totalRemainedSeconds = 0;
    this.currentMinutes = '00';
    this.currentSeconds = '00';
    this.minutesStartFrom = null;
    this.secondsStartFrom = null;
    this.falseTimeMessage = '';
    this.isInputsDisabled = false;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }


  validateTimeStartFrom(): boolean {
    this.falseTimeMessage = '';

    if (this.minutesStartFrom == null) {
      this.falseTimeMessage = 'Please enter number of minutes (can be 0)';
      return false;
    }
    if (this.secondsStartFrom == null) {
      this.falseTimeMessage = 'Please enter number of seconds (can be 0)';
      return false;
    }
    if(this.minutesStartFrom == 0 && this.secondsStartFrom === 0) {
      this.falseTimeMessage = "Nothing to countdown - 0 minutes and 0 seconds!";
      return false;
    }
    return true;
  }


  onclickStartButton(): void {
    if (this.validateTimeStartFrom()) {
      this.isInputsDisabled = true;

      this.totalRemainedSeconds = this.minutesStartFrom*60 + this.secondsStartFrom - this.totalPassedSeconds;

      this.intervalId = setInterval( () => {
        this.minutesRemained = Math.floor(this.totalRemainedSeconds/60);
        this.currentMinutes = this.padNumberTo2Digits(String(this.minutesRemained));

        this.secondsRemained = this.totalRemainedSeconds % 60;
        this.currentSeconds = this.padNumberTo2Digits(String(this.secondsRemained));

        if (this.totalRemainedSeconds === 0) {
          clearInterval(this.intervalId);
          this.isInputsDisabled = false;
        } 

        this.totalPassedSeconds++;
        this.totalRemainedSeconds--;
      }, 1000);
    } 
  }


  onclickStopButton(): void {
    if (this.totalRemainedSeconds !== 0) clearInterval(this.intervalId);
  }


  onclickResetButton(): void {
    if(this.totalRemainedSeconds !== 0) {
      clearInterval(this.intervalId);
      this.minutesStartFrom = null;
      this.secondsStartFrom = null;
      this.currentMinutes = '00';
      this.currentSeconds = '00';
      this.isInputsDisabled = false;
      this.totalRemainedSeconds = 0;
      this.totalPassedSeconds = 0;
    } 
  }

  onclickTimerRadio(e) {
    //console.log(e.target); 
    this.timerRadioElem.checked = true;
    this.countDownRadioElem.checked = false;
    this._router.navigate(['/']);
  }


  // Utils
  padNumberTo2Digits(value): string {
    return String(value).padStart(2, '0');
  }
}
