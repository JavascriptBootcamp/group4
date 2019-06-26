import { Component, OnInit, Input } from "@angular/core";
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl
} from "@angular/platform-browser";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"]
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoUrl: string;
  trustUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // this.trustUrl = sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  ngOnInit() {
    this.trustUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" + this.videoUrl
    );
    console.log(this.trustUrl);
  }
}
