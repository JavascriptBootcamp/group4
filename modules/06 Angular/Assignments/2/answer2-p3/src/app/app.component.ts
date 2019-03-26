import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer3-p3';
  x = 0;
  y = 0;

  ngOnInit(){
    ++this.x;
    ++this.x;
    ++this.y;
    ++this.y;
  }
}
