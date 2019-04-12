import { Component, OnInit,Input } from '@angular/core';
import {Video} from '../vidoe.module'
@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input() video:Video;

  constructor() { }

  ngOnInit() {
  }

}
