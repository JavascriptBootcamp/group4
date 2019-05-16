import { Component, OnInit, Input, OnDestroy,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy,OnChanges {
  interval: any;
  data: number;
  minutes: any;
  sec: any;
  @Input() actionType: string
  constructor() {
    this.interval = null;
    this.sec = "00";
    this.minutes = "00";
  }

  ngOnInit() {
    
    
  }


  ngOnChanges(changes:SimpleChanges):void{
      if(changes.actionType && changes.actionType.currentValue === "start"){
       
        this.interval = setInterval(() => {
          
          if (this.sec == 59 && this.minutes < 9) {
            this.minutes = "0" + ++this.minutes;
            this.sec = "00";
          }
          else
          if (this.sec == 59 && this.minutes > 9) {
            this.minutes = ++this.minutes;
            this.sec = "00";
          }
          else
          this.sec = this.sec < 9 ? "0" + ++this.sec : ++this.sec;
    
        }, 1000);
      }


      if(changes.actionType && changes.actionType.currentValue === "stop"){
          clearInterval(this.interval);
      }

      if(changes.actionType && changes.actionType.currentValue === "reset"){
        clearInterval(this.interval);
        this.interval = null;
        this.sec = "00";
        this.minutes = "00";
      }
  }

  ngOnDestroy() {
    console.log("Lifecycle: ngOnDestroy TimerComponent");
    clearInterval(this.interval);
  }

}
