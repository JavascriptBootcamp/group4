import { Component, OnInit ,Input,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy{
  interval:any;
  data:number;
  minutes:any;
  sec:any;
 
  constructor() {
    this.interval = 0;
    this.sec = 0;
    this.minutes = "00";
   }

  ngOnInit() {

    this.interval = setInterval((data)=>{
      this.data = Math.random() * 10;
      console.log("TimerComponent",this.data );
      this.sec = this.sec<9? "0" + ++this.sec : ++this.sec ;
      if(this.sec == 60 && this.minutes < 9)
      this.minutes = "" + ++this.minutes ;
      if(this.sec == 60 && this.minutes > 9)
      this.minutes =  ++this.minutes ;
    },1000)
  }

  ngOnDestroy(){
    console.log("Lifecycle: ngOnDestroy TimerComponent");
    clearInterval(this.interval);
  }

}
