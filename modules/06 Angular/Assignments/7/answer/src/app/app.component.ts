import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bloodPressure: number;
  isNormal:boolean;

  constructor() {
    this.bloodPressure = 70;
    this.isNormal = false;
  }

  ngOnInit(): void {
  }
}
