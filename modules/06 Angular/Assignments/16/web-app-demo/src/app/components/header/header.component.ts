import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  active_link: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.active_link = this.router.url;
  }

  link_click(link_type: string) {
    this.active_link = this.router.url;
  }

}
