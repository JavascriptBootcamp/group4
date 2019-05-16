import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @Input() time:number ;
  interval:any;
  message:string;
  constructor() { 
    this.time=300;
    this.message=null;
  }
  start(){
    //this.time=
    if(!this.interval){
      this.interval= setInterval(()=>{
      
      if(this.time!==0){
        this.time--;
      }else{
        this.reset();
        this.message="time is up"
      }
    },1000)
  }
  }
  pause(){
    clearInterval(this.interval)
    this.interval=null
  }
  reset(){
    clearInterval(this.interval)
    this.interval=null
    this.time=300
  }
  ngOnInit() {
  }
  ngOnDestroy(){
    this.reset();
  }
  onTimeChange(event){
    this.time=Number(event.target.value*60);
  }
}
