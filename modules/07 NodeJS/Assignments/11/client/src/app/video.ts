
export class Video {
    id: number;
    singer: string;
    src: string;
    title: string;
    url: string; // YouTube URL of this song/video
    videoImg: string;
    words: string;
    
    

    constructor(
      id: number,
      singer: string,
      src: string,
      title: string,
      url: string,
      videoImg: string,
      words: string
      ) {
          this.id = id;
          this.singer = singer;
          this.src = src;
          this.title = title;
          this.url = url;
          this.videoImg = videoImg;
          this.words = words;     
    }
}


