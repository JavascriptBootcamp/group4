import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../author.service';

import { Img } from "../../modules/img";
import { Author } from 'src/app/modules/Author';
import { ImageService } from 'src/app/image.service';

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.css']
})
export class MainGalleryComponent implements OnInit {
  author:Author[];
  imgs:Img[];
  bigPicSrc:string;
  topPicSrcs:string[];
  constructor( private imageService:   ImageService,private authorService:   AuthorService)
    { 
    // this.author= authorService.getAuthors(); 
    this.imgs=this.imageService.getimgs();

    // this.imgs = [
    //   {src: "https://images.unsplash.com/photo-1553901753-215db344677a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",author:this.author[0], likes: 0},
    //   {src: "https://images.unsplash.com/photo-1553548146-50f0bdf09f0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",author:this.author[1], likes: 0},
    //   {src: "https://images.unsplash.com/photo-1551300263-00574a9d9b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:this.author[2], likes: 0},
    //   {src: "https://images.unsplash.com/photo-1551367456-16ac556dfef2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:this.author[3], likes: 0},
    //   {src: "https://images.unsplash.com/photo-1550795598-717619d32900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:this.author[4], likes: 0},
    //   {src: "https://images.unsplash.com/photo-1550639264-38c3059c4620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:this.author[5], likes: 0},
    //   {src: "https://images.unsplash.com/photo-1549945676-4fdf5f18a9fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:this.author[6], likes: 0},
    //   {src: "https://images.unsplash.com/photo-1508662790687-257eefcdccfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:this.author[7], likes: 0},
    //     ];
     
    this.sortTop3();

    this.bigPicSrc = null;
  }

  ngOnInit(): void {
  }

  showBigPic(src:string) {
    this.bigPicSrc = src;
  }

  sortTop3() {
    let newTop3 = this.imgs.slice(0).sort((a,b) => ( b.likes - a.likes)).slice(0,3).map(img => img.src);
    this.topPicSrcs = newTop3;
  }

  closeBigPic() {
    this.bigPicSrc = null;
  }
}
