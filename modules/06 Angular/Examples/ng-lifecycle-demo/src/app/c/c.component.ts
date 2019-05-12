import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {
  title:string;
  constructor() {
    this.title = "";
  }

  ngOnInit() {
    setInterval( () => {
      this.title = `Title ${Math.random() * 100}`;
    }, 2000)
  }

}
