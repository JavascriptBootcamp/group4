import { Component, OnInit, OnChanges } from "@angular/core";
import { VideoServiceService } from "./video-service.service";

export interface Video {
  id: number;
  title: string;
  url: string;
  singer: string;
  imageSrc: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnChanges {
  videos = [];
  player;
  // dataStorge: Video;
  constructor(private videoServiceService: VideoServiceService) {}
  ngOnInit() {
    const songsList = this.videoServiceService.getVideoList();

    songsList.then(songs => {
      songs.forEach(song => {
        this.videos.push(song);
      });
    });

    const dataStorge = JSON.parse(localStorage.getItem("Itube"));
    if (dataStorge) {
      this.player = {
        id: dataStorge.id,
        title: dataStorge.title,
        url: dataStorge.url,
        singer: dataStorge.singer
      };
    } else {
      this.player = this.videos[0];
    }
  }

  ngOnChanges() {
    console.log("changes");
  }
  onChangeVideoEvent(video) {
    console.log(video);
    this.player = video;
    this.player.url = video.url;
    localStorage.setItem("Itube", JSON.stringify(video));
  }
}
