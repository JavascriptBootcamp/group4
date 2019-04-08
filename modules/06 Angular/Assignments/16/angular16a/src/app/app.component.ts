import { Component, OnInit } from '@angular/core';

export class thumbnail {
  id: string;
  src: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  thumbnails: thumbnail[] = [];
  bigPicture: thumbnail;
  constructor() {
    this.bigPicture = { id: null, src: null };
  }
  ngOnInit() {
    this.thumbnails = [
      { id: "tm1", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsw9q1gKQhk3M3krgRtn9vCgYaKDvQD_GgJdL-y-jNiJRLbgC" },
      { id: "tm2", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIN7mbSbgvFXj2PXLzjXbC_NnVVOBoqHMgv9p8tw1KZuV-ngJGw" },
      { id: "tm3", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82DqniYRM-q3SKuf-ziG1u9Fc4gGuD8O8exGkZazb6SurMllSmw" },
      { id: "tm4", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4mFHp-axQIxtrs-yV_DRePjPn6C2tCT7EFnVAJUayne7ZfaG" },
      { id: "tm5", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6ltr-w2OSqtk-nh4eVIpndpQncu3r6M3EfiVVR5s5cuEGVOk" },
      { id: "tm6", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mrze3yjNQjIjRtfxVHYeRrDZwNrNV3Lq4FHq_l-Z1eKWrm71w" },
      { id: "tm7", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7arfj-4VZnRls18ELncSRFACyqBCMcJLjZcxyCmr9DVC2qNrbA" },
      { id: "tm7", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfgKOVXDVIY2Yaq0a0rDLWoV0ks0zcQVDa6aCQVJVGcD6llupPPw" },
      { id: "tm8", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQN-mcmQVIi2HLnAZhvJ-JCYZ1Yf7EtNlA1wVBf8gAYkh6T2r" },
      { id: "tm9", src: "https://www.barraquer.com/wp-content/uploads/2017/07/el-ojo-del-surfista-p-08-2017.jpg" }
    ];
    if (localStorage.getItem("gallery")) {
      this.bigPicture = {
        id: JSON.parse(localStorage.getItem("gallery"))[0],
        src: JSON.parse(localStorage.getItem("gallery"))[1]
      }
    }
    else {
      this.bigPicture = {
        id: "tm1",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsw9q1gKQhk3M3krgRtn9vCgYaKDvQD_GgJdL-y-jNiJRLbgC"
      }
    }
  }
  onaddPicEvent(img: thumbnail) {
    this.bigPicture = { id: img.id, src: img.src }
    this.saveToStorage();
  }
  onClickBackEvent(id: string) {
    for (let key of this.thumbnails) {
      if (key.id === id) {
        this.bigPicture.src = key.src;
      }
    }
    this.saveToStorage();
  }
  onClickforwardEvent(id: string) {
    for (let key of this.thumbnails) {
      if (key.id === id) {
        this.bigPicture.src = key.src;
      }
    }
    this.saveToStorage();
  }
  saveToStorage() {
    localStorage.setItem("gallery", JSON.stringify([this.bigPicture.id, this.bigPicture.src]));
  }
}
