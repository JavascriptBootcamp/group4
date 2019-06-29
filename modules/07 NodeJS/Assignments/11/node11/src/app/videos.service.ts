import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() { }

  getSongs() {
    return fetch(`http://localhost:8000/songs`).then(stream => stream.json())
  }
}
