import { Component, OnInit } from "@angular/core";
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
export class AppComponent implements OnInit {
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
    /*
    this.videos = [
      {
        title: "title1",
        desc: "desc1",
        url: "http://techslides.com/demos/sample-videos/small.mp4",
        artist: "artist1",
        imageSrc:
          "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png"
      },
      {
        title: "title2",
        desc: "desc2",
        url:
          "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        artist: "artist2",
        imageSrc:
          "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png"
      },
      {
        title: "title3",
        desc: "desc3",
        url:
          "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        artist: "artist3",
        imageSrc:
          "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png"
      },
      {
        title: "title4",
        desc: "desc4",
        url:
          "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        artist: "artist4",
        imageSrc:
          "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png"
      },
      {
        title: "title5",
        desc: "desc5",
        url:
          "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        artist: "artist5",
        imageSrc:
          "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png"
      },
      {
        title: "title6",
        desc: "desc6",
        url:
          "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        artist: "artist6",
        imageSrc:
          "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png"
      },
      {
        title: "title7",
        desc: "desc7",
        url:
          "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        artist: "artist7",
        imageSrc:
          "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png"
      },
      {
        title: "title8",
        desc: "desc8",
        url:
          "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        artist: "artist8",
        imageSrc:
          "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png"
      },
      {
        title: "title9",
        desc: "desc9",
        url:
          "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        artist: "artist9",
        imageSrc:
          "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png"
      },
      {
        title: "title10",
        desc: "desc10",
        url:
          "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        artist: "artist10",
        imageSrc:
          "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png"
      }
    ]; */
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

  onChangeVideoEvent(video) {
    this.player = video;
    localStorage.setItem("Itube", JSON.stringify(video));
  }
}
