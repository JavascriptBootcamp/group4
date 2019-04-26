import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  active_link: string;

  constructor() { }

  ngOnInit() {
    this.active_link = "g";
  }

  link_click(link_type: string) {
    this.active_link = link_type;
  }

}
