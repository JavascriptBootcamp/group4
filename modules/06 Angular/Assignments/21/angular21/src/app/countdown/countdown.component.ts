import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
  import {ActivatedRoute} from '@angular/router';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
         @ViewChild('startFrom') startFrom:ElementRef;
          minutes:any;
          secondes:any;
          sf:any;
          disabledStartBtn:boolean;
            intervalFunc:any;
  constructor(private route:ActivatedRoute) {
    this.secondes=0;

     this.minutes=0;
     this.disabledStartBtn=false;
   }
  
  ngOnInit() {
   
    if(this.minutes<=9){
      this.minutes='0'+this.minutes;
    }
    if(this.secondes<=9){
      this.secondes='0'+this.secondes;
    }

  }

 
  start(){
    this.disabledStartBtn=true;

     this.intervalFunc=window.setInterval(()=>{ 
      if((+this.minutes)>9){
        if (this.secondes <= 0) { 
            this.minutes=+this.minutes;
            this.minutes--;  
            this.secondes = 60;

        }
        +this.secondes--;
       if(+this.secondes<10){
          this.secondes='0'+this.secondes;
          this.minutes--;
        }
       if(+this.minutes===9){
       this.minutes='0'+ +this.minutes;
      } 
    
    }
     else{
              if(+this.secondes===0&&+this.minutes===0){
        window.clearInterval(this.intervalFunc);
        }
        else{
          if (+this.secondes <= 0) { 
            this.minutes=+ (this.minutes.split('')[1]);
            this.minutes=+this.minutes;
          this.minutes--;  
              this.minutes='0'+this.minutes;
          this.secondes = 59;
        }
        else{
          +this.secondes--;
          if(+this.secondes<10){
            this.secondes='0'+this.secondes;
          }      
         }
        }
     }
    },1000);


  }



  stop(){
    window.clearInterval(this.intervalFunc);
    this.disabledStartBtn=false;


  }
  reset(){
    this.minutes='0'+0;
    this.secondes='0'+0;
    window.clearInterval(this.intervalFunc);
    this.disabledStartBtn=false;

  }
  startFromFunc(){
    if(this.startFrom.nativeElement.value < 10)
    this.minutes= '0'+this.startFrom.nativeElement.value ;
    else
    this.minutes=this.startFrom.nativeElement.value ;
    this.startFrom.nativeElement.value ='';

  }
  

}
