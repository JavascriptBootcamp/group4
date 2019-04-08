import { Component, OnInit, Input } from '@angular/core';
import {thumbnail} from '../app.component';
@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input() image : thumbnail;
  constructor() { }

  ngOnInit() {
  }

}
