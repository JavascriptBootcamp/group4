import { Component, OnInit } from '@angular/core';
import { from, interval , fromEvent  } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {

    //create new observable from promise
    const data = from(fetch('http://worldtimeapi.org/api/timezone/Asia/Jerusalem'));
    data.subscribe({
      next(data) { console.log(data); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });

    //create new observable from time interval
    const secondsCounter = interval(1000);
    secondsCounter.subscribe(n =>
      console.log(`It's been ${n} seconds since subscribing!`))
  }

}
