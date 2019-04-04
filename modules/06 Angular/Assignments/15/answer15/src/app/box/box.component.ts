import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() box:string;
  constructor() {
    this.src=src;
  }

  ngOnInit() {
  }

}
