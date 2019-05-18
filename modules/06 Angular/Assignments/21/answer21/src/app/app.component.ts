import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceTimerCountdownService } from './service-timer-countdown.service';
import { Timer } from './timer.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  startTime: Timer;


  userForm = new FormGroup({
    counters: new FormControl('timer'), // setting the value="timer" radio button to be checked
    startTime: new FormControl()
  });

  constructor(private serviceTimerCountdownService: ServiceTimerCountdownService) { }

  setServiceTime(elm: HTMLInputElement ) {
    this.serviceTimerCountdownService.setTime = { leftMinute: 0, rightMinute: +elm.value, leftSecond: 0, rightSecond: 0 };
  }

  onFormSubmit() {
    console.log("Form Information", this.userForm.value);
  }

  get getCounter() {
    return this.userForm.get('counters').value; // timer or countdown
  }
}
