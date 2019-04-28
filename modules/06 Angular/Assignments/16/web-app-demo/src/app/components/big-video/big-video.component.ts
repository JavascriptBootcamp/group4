import { Component, OnInit, Input } from '@angular/core';
import { Video } from "../../interfaces/video";

@Component({
  selector: 'big-video',
  templateUrl: './big-video.component.html',
  styleUrls: ['./big-video.component.css']
})
export class BigVideoComponent implements OnInit {

  @Input() selected_video: Video;

  constructor() { 
  }

  ngOnInit() {
  }

}
