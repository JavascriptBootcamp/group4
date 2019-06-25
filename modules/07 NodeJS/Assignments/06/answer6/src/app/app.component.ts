import { Component, ViewChild } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('inp') info;
  url: string;

  constructor() {
    this.url = "http://localhost:5000/file";
  }

  sendToServer(e:Event) {
    e.preventDefault();
    const data = this.info.nativeElement.value.split(' ');
    console.log(data);
    
    fetch(this.url, {
      method: 'POST',
      // mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( data )
    });
  }
}
