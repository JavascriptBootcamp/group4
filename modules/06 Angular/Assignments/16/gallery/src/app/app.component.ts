import { Component, OnInit ,Input } from '@angular/core';
// import { images } from './imgArray';

export const images:string[]=[]; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'gallery';
  // images: string[] = ["https://www.w3schools.com/cssref/pineapple.jpg", "https://angular.io/assets/images/logos/angular/logo-nav@2x.png"];
  currentImg: string;
  index: number;

  constructor() {
    this.index = 0;
  }
  ngOnInit() {
    this.index = 0;
    this.onInit();
    this.currentImg="https://www.w3schools.com/cssref/pineapple.jpg";
  }


  onInit() {
    fetch("https://picsum.photos/list").then(
      function (stream) {
        stream.json().then(
          function (json) {
            for (let key in json) {
              images.push("https://picsum.photos/200/300?image=" + json[key].id);
              if (images.length == 20)
                break;
                console.log(images[0]);

              // this.currentImg=images[0];
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
          if (this.index == (images.length - 1)) {
            this.index = 0;
          }
          else
            this.index++;
          break;
        }
      case (-1):
        {
          if (this.index == 0) {
            this.index = images.length - 1;
          }
          else
            this.index--;
          break;
        }
    }
    this.currentImg = images[this.index];

  }

}

