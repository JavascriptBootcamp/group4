import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer1';
  x:number = 24;
  ngOnInit() {
    let interval = setInterval(() => {
      ++this.x;
      if(this.x === 29){
        clearInterval(interval);
      }
    }, 1000);
  }
}
