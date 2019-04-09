import { Component, OnInit } from '@angular/core';
export interface Video {
  title: string;
  desc: string;
  url: string;
  artist: string;
  image: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  thumbnails: Video[];
  player: Video;
  dataStorge: Video;
  constructor() {
    this.player = {
      title: "",
      desc: "",
      url: "",
      artist: "",
      image: ""
    }
  }
  ngOnInit() {
    this.dataStorge = JSON.parse(localStorage.getItem("Itube"));
    if (this.dataStorge) {
      this.player =
        {
          title: this.dataStorge.title,
          desc: this.dataStorge.desc,
          url: this.dataStorge.url,
          artist: this.dataStorge.artist,
          image: this.dataStorge.image
        }
    }
    this.thumbnails = [
      { title: "title1 funny movie ", desc: "short film ..... click and take a look", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", artist: "simply dummy text of the printing and typesetting industry. Lorem simply dummy text of the printing and typesetting industry. Lorem", image: "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png" },
      { title: "title2", desc: "desc2", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", artist: "artist2", image: "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png" },
      { title: "title3", desc: "desc3", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", artist: "artist3", image: "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png" },
      { title: "title4", desc: "desc4", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", artist: "artist4", image: "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png" },
      { title: "title5", desc: "desc5", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", artist: "artist5", image: "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png" },
      { title: "title6", desc: "desc6", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", artist: "artist6", image: "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png" },
      { title: "title7", desc: "desc7", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", artist: "artist7", image: "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png" },
      { title: "title8", desc: "desc8", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", artist: "artist8", image: "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png" },
      { title: "title9", desc: "desc9", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", artist: "artist9", image: "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png" },
      { title: "title10", desc: "desc10", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", artist: "artist10", image: "http://downloadicons.net/sites/default/files/windows-media-player-icon-66464.png" },
    ]
  }
  onAddClickVideoEvent(video: Video) {
    this.player =
      {
        title: video.title,
        desc: video.desc,
        url: video.url,
        artist: video.artist,
        image: video.image
      }
    localStorage.setItem("Itube", JSON.stringify(this.player));
  }
}
