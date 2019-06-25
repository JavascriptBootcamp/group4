import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Video } from "../app.component";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.css"]
})
export class VideoComponent implements OnInit {
  @Input() videoI;
  @Output() changeVideoEvent = new EventEmitter<Video>();
  constructor() {}

  ngOnInit() {}

  changeVideo() {
    //console.log(this.videoI);
    this.changeVideoEvent.emit(this.videoI);
  }
}
