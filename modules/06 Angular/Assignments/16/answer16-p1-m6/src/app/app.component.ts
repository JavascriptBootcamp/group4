import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'answer16-p1-m6';
  images: string[] = [];
  selectedImg: string;
  imgPos  = 0;
 

  ngOnInit() {

    this.images = ["https://cdn.dribbble.com/users/1463678/screenshots/3264921/full-stack-dribbble.png",
      "http://www.systemcomic.com/comics/2014-06-11-advancedanatomy.png",
      "https://pbs.twimg.com/media/Cxneo79VEAA-utS.jpg",
      "https://i.redd.it/3dora5z6mae11.jpg",
      "http://www.inquisitiveone.in/wp-content/uploads/2017/02/HTML-vs-HTML-and-CSS.jpg",
      "https://img.devrant.com/devrant/rant/r_403948_ikGUk.jpg",
      "https://pics.me.me/bootstrap-html-css-31715884.png",
      "https://www1.picturepush.com/photo/a/15883688/1024/CSS-Puns-and-CSS-Jokes/Big-Bang---Web-Joke.png",
      "https://pbs.twimg.com/media/DVJmllgVQAE9nU6.jpg",
      "https://i.pinimg.com/736x/ca/47/94/ca4794cfada458717c7aa99093a1f425.jpg",

    ];

    if(localStorage.getItem("currentIndex") == null){
      this.imgPos = 0;
      this.selectedImg = this.images[this.imgPos]
    
    }

    else {
      this.imgPos = Number(localStorage.getItem("currentIndex"));
      this.selectedImg = this.images[this.imgPos];
  }
}

  @HostListener ('window:beforeunload') saveIndex(){
    
    localStorage.setItem("currentIndex" , String(this.imgPos));

  }
 
  showBigPic(i: number) {
    this.imgPos = i;
    this.selectedImg = this.images[this.imgPos];

  }

  showNextImg() {

    if (this.imgPos < this.images.length) {
      this.imgPos++;
      this.selectedImg = this.images[this.imgPos];
    }
    else {
      this.imgPos = 0;
      this.selectedImg = this.images[this.imgPos];

    } 
  }

  showPreImg() {
    if (this.imgPos > 0) {
      this.imgPos--;
      this.selectedImg = this.images[this.imgPos];
    }
    else {
      this.imgPos = this.images.length - 1;
    }
  }
}
