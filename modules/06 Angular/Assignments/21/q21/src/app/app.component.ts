import { Component, ViewChild, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked{
   @ViewChild('timer') timer;
   @ViewChild('countDown') countDown;
  startValue: number;
  isTimer: boolean;

  constructor(){
    this.isTimer = true;
    this.startValue = 0;
  }

  ngOnInit(){
    // console.log(this.timer.nativeElement.checked);
    // console.log(this.countDown.nativeElement.checked);
    
  }

  ngAfterViewChecked(){
    this.isTimer = !this.isTimer;
    console.log(this.isTimer);
  }


}
