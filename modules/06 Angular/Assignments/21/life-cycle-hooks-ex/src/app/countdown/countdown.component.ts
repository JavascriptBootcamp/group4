import { Component, OnInit,Input ,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit,OnDestroy {
  countdown:number;
  interval:any;
  minutes:any;
  sec:any;
  data:number;

  constructor() { 
    this.interval = 0;
    this.sec = 60;
    this.minutes = "05";
  }

  ngOnInit() {
    this.interval = setInterval((data)=>{
      this.data = Math.random() * 10;
      console.log("CountdownComponent",this.data );
      this.sec = this.sec<9? "0" + --this.sec : --this.sec ;
      if(this.sec == "00" && this.minutes < 9)
      this.minutes = "0" + ++this.minutes ;
      if(this.sec == "00" && this.minutes > 9)
      this.minutes =  --this.minutes ;
    },1000)
  }


  ngOnDestroy(){
    console.log("Lifecycle: ngOnDestroy CountdownComponent");
    clearInterval(this.interval);
  }
}
