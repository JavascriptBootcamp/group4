import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timer: string;
  interval: any;
  constructor() { }

  ngOnInit() {
  }

  onStartClicked(){
    this.interval = setInterval( () => {
      
    }, 1000 );
  }

  onStopClicked(){
    
  }

  onResetClicked(){
    
  }

}
