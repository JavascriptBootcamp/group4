import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title: string;
  public description: string = 'How are you?';
  constructor() {
    this.title = "Some other title";
    this.description = "Some other description";
  }

  ngOnInit() {
    let num: any[] = [1,2,3];
    this.title = num;
  }
}
