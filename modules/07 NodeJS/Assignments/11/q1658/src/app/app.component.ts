import { Component } from '@angular/core';

export interface Video {
  id:string
  title: string;
  words: string;
  url: string;
  singer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  videos: Video[];
  player: Video;
  // dataStorge: Video;
  constructor() {
    this.player = {
      id:"",
      title: "",   
      words: "",
      url: "",
      singer: "",     
    }
  }
  ngOnInit() {
    this.getVideosFromServer();
    let dataStorge = JSON.parse(localStorage.getItem("Itube"));
    //this.dataStorge = JSON.parse(localStorage.getItem("Itube"));
    if (dataStorge) {
      this.player =
        {
          id:dataStorge.id,
           title: dataStorge.title,
          words: dataStorge.words,
          url: dataStorge.url,
          singer: dataStorge.singer,
        }
    }
    else{
      this.player = this.videos[0];
    }
  }

  onChangeVideoEvent(video: Video){
    this.player = video;
    localStorage.setItem("Itube",JSON.stringify(video));
  }


  async getVideosFromServer() {
    this.videos = await fetch(`http://localhost:8000/songs`).then(stream => stream.json())
  }



  // onAddClickVideoEvent(video: Video) {
  //   this.player =
  //     {
  //       title: video.title,
  //       desc: video.desc,
  //       url: video.url,
  //       artist: video.artist,
  //       image: video.image
  //     }
  //   localStorage.setItem("Itube", JSON.stringify(this.player));
  // }
}
