import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  radCheck: string;
  startForm: string;

  constructor() {
    this.radCheck = "timer";
    this.startForm = "00:00";
  }

  ngOnInit() {

  }


}
