import { Component,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnDestroy {

 interval;
 seconds = 0;
 minutes = 0;
 hour = 60;
 counter = 0;
  constructor() { }
onStart() {

  this.interval  =  setInterval( () => {
    this.counter++;
    this.seconds = this.counter % this.hour;
    this.minutes= Math.floor(this.counter/this.hour);
    console.log("interval timer working");
   }, 1000);
  }

  onStop() {
    console.log("stop");
    clearInterval(this.interval);
  }

  onReset(){
    console.log("reset");
    clearInterval(this.interval);
   this.counter = 0;
   this.seconds = 0;
   this.minutes = 0;

  }

  ngOnDestroy(){
    console.log("ngOnDestroy() clear interval :timer")
    clearInterval(this.interval);
   }

}
