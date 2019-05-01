import { Injectable } from '@angular/core';
import { Img } from './modules/img';
  import { AuthorService } from './author.service';
import { Author } from './modules/Author';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imgs:Img[];
  author:Author[];
  constructor(authorService:AuthorService) { 
    this.author= authorService.getAuthors(); 
    this.loadImgs();
   }

  loadImgs() {
    this.imgs = [
      {src: "https://images.unsplash.com/photo-1553901753-215db344677a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",author:this.author[0], likes: 0},
      {src: "https://images.unsplash.com/photo-1553548146-50f0bdf09f0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",author:this.author[1], likes: 0},
      {src: "https://images.unsplash.com/photo-1551300263-00574a9d9b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:this.author[2], likes: 0},
      {src: "https://images.unsplash.com/photo-1551367456-16ac556dfef2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:this.author[3], likes: 0},
      {src: "https://images.unsplash.com/photo-1550795598-717619d32900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:this.author[4], likes: 0},
      {src: "https://images.unsplash.com/photo-1550639264-38c3059c4620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:this.author[5], likes: 0},
      {src: "https://images.unsplash.com/photo-1549945676-4fdf5f18a9fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:this.author[6], likes: 0},
      {src: "https://images.unsplash.com/photo-1508662790687-257eefcdccfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:this.author[7], likes: 0},
       ];
     
  }

  getimgs(): Img[]{
    return this.imgs ;
  }
}
