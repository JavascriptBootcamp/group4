import { Component, OnInit,Input ,OnDestroy,OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit,OnChanges,OnDestroy {
  countdown:number;
  interval:any;
  minutes:any;
  sec:any;
  data:number;
  @Input() actionType: string
  constructor() { 
    this.interval = null;
    this.sec = 60;
    this.minutes = "04";
  }

  ngOnInit() {

  }


  ngOnChanges(changes:SimpleChanges):void{
    if(changes.actionType && changes.actionType.currentValue === "start"){
     
      this.interval = setInterval(() => {
        if(this.minutes === "00"){

        }
        
        if (this.sec == "00" && this.minutes < 9 && this.minutes > 0) {
          this.minutes = "0" + --this.minutes;
          this.sec = 60;
        }
        if (this.sec == "00" && this.minutes > 9) {
          this.minutes = --this.minutes;
          this.sec = 60;
        }
        this.sec = this.sec < 11 ? "0" + --this.sec : --this.sec;
      }, 1000);
    }


    if(changes.actionType && changes.actionType.currentValue === "stop"){
        clearInterval(this.interval);
    }

    if(changes.actionType && changes.actionType.currentValue === "reset"){
      clearInterval(this.interval);
      this.interval = null;
      this.sec = 60;
      this.minutes = "04";
    }
}


  ngOnDestroy(){
    console.log("Lifecycle: ngOnDestroy CountdownComponent");
    clearInterval(this.interval);
  }
}
