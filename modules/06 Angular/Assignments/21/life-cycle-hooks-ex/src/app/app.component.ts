import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle-hooks-ex';
  timerClicked :boolean;
  countdownClicked:boolean;

  constructor(){
    this.timerClicked = true;
    
  }

  Func_timerClicked()
{
  this.timerClicked=true;

}

Func_countdownClicked()
{
  this.timerClicked=false;
}

}
