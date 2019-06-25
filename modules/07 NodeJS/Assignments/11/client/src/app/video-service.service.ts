import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class VideoServiceService {
  constructor() {}

  getVideoList() {
    return fetch("http://localhost:8000/songs")
      .then(res => res.json())
      .then(songList => {
        return songList;
      });
  }
}
