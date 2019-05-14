import { Component, OnInit, Input, OnChanges, OnDestroy } from "@angular/core";

@Component({
  selector: "app-countdown",
  templateUrl: "./countdown.component.html",
  styleUrls: ["./countdown.component.css"]
})
export class CountdownComponent implements OnChanges ,OnDestroy {
  @Input() startFrom;
  constructor() {}
  interval;
  seconds = 0 ;
  minutes = 0;
  hour = 60;
  counter = 0 ;

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    this.counter = Number(this.startFrom);

  }

  ngOnChanges(){
    console.log("ngOnChanges");

  }
  ngAfterViewChecked() {
    //this.counter = Number(this.startFrom);
  }
  onStart() {
    this.counter = Number(this.startFrom);
    if(this.counter  > 0) {
    this.interval = setInterval(() => {
      if(this.counter  < 0 ) {
        this.onReset();
        clearInterval(this.interval);

      }
      this.counter--;
      this.seconds = this.counter % this.hour;
      this.minutes = Math.floor(this.counter / this.hour);
      console.log("interval countdown working");
    }, 1000 );
  }
  }

  onStop() {
    console.log("stop");
    clearInterval(this.interval);
  }

  onReset() {
    console.log("reset");
    clearInterval(this.interval);
    this.seconds = 0;
    this.minutes = 0;
  }
   ngOnDestroy(){
    clearInterval(this.interval);
    console.log("ngOnDestroy() clear interval : countdown")

   }
}
