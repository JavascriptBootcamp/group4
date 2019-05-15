import { Component, ViewChild, OnInit ,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{//}, AfterViewChecked{
   @ViewChild('timer') timer;
   @ViewChild('countDown') countDown;
   placeHolder: string;
   startValue: string;
   isTimer: boolean;

  constructor(){
    this.isTimer = true;
    this.placeHolder = 'Start from';
    this.startValue = '';

  }

  ngOnInit(){
    // console.log(this.timer.nativeElement.checked);
    // console.log(this.countDown.nativeElement.checked);
    
  }

  onStartValueChange(newValue: string){
    this.startValue = newValue;
  }

  // ngAfterViewChecked(){
  //   this.isTimer = !this.isTimer;
  //   console.log(this.isTimer);
  // }
  toggleAction(){
    this.isTimer = !this.isTimer;
    this.placeHolder = this.isTimer ? 'Start from' : 'Count douwn from';
  }

  ngOnDestroy(){

  }

  onResetEvent(){
    this.startValue = '';
  }

  onStopEvent(){
  }


}
