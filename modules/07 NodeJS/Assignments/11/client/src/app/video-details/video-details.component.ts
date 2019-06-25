import { Component, OnInit, Input } from "@angular/core";
import { Video } from "../app.component";

@Component({
  selector: "app-video-details",
  templateUrl: "./video-details.component.html",
  styleUrls: ["./video-details.component.css"]
})
export class VideoDetailsComponent implements OnInit {
  @Input() videoDetailsI;
  constructor() {}

  ngOnInit() {}
}
