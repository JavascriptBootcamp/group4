import { Component, OnInit } from '@angular/core';
import { start } from 'repl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gallery';
  images: string[] = ["https://www.w3schools.com/cssref/pineapple.jpg", "https://angular.io/assets/images/logos/angular/logo-nav@2x.png"];
  currentImg: string;
  index: number;
  constructor() {
    // start();
    this.index = 0;
    this.currentImg = this.images[this.index];
  }
  ngOnInit() {

  }


  start() {
    fetch("https://picsum.photos/list").then(
      function (stream) {
        stream.json().then(
          function (json) {
            for (let key in json) {
              this.images.push("https://picsum.photos/200/300?image=" + json[key].id);
              if (this.images.length == 20)
                break;
              console.log("dsd");
            }
            // if (localStorage.getItem("lastImg") !== null) {
            //     document.getElementById("centerImg").src = localStorage.getItem("lastImg");
            // }
            // else
            //     document.getElementById("centerImg").src = images[this.index];
          }
        )
      }
    ).catch(function (error) {
      console.log("error" + error);
    })
  }

  replaceImage(sign: number) {
    switch (sign) {
      case (1):
        {
          if (this.index == (this.images.length - 1)) {
            this.index = 0;
          }
          else
            this.index++;
          break;
        }
      case (-1):
        {
          if (this.index == 0) {
            this.index = this.images.length - 1;
          }
          else
            this.index--;
          break;
        }
    }
    this.currentImg = this.images[this.index];

  }

}

