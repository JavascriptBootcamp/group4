import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timer:boolean;
  title = 'ans21';
  constructor(){
    this.timer=true;
  }
  timerTypeSel(timerType){
    if(timerType==="timer"){
      this.timer=true;
    }else{
      this.timer=false;
    }
  }
}
