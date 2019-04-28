import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dbay',
  templateUrl: './dbay.component.html',
  styleUrls: ['./dbay.component.css']
})
export class DbayComponent implements OnInit {

  collaps_all: boolean = false;
  collaps_content = {
    enter: false,
    search: false, 
    price: false, 
    buy: false, 
    condition: false, 
    results: false, 
    location: false, 
    sellers: false 
}

  constructor() { }

  ngOnInit() {
  }

  toggel_all() {
    //chang the main flag
    this.collaps_all = !this.collaps_all;
    //chang the flags for all the content divs
    for (const key in this.collaps_content) {
      this.collaps_content[key] = this.collaps_all;
    }
  }

  toggel_me(id:string) {
    this.collaps_content[id] = !this.collaps_content[id];
  }

}
