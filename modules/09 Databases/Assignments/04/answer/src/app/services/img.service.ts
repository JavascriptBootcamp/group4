import { Injectable } from '@angular/core';
import { Img } from "../modules/img";

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  imgs: Img[];
  url:string;
  constructor() {
    this.url = 'http://localhost:5000/';

    this.imgs = [
      {
        src: "https://images.unsplash.com/photo-1553901753-215db344677a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        likes: 0,
        author_id: 0
      },
      {
        src: "https://images.unsplash.com/photo-1553548146-50f0bdf09f0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
        likes: 0,
        author_id: 0
      },
      {
        src: "https://images.unsplash.com/photo-1551300263-00574a9d9b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        likes: 0,
        author_id: 1
      },
      {
        src: "https://images.unsplash.com/photo-1551367456-16ac556dfef2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        likes: 0,
        author_id: 2
      },
      {
        src: "https://images.unsplash.com/photo-1550795598-717619d32900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        likes: 0,
        author_id: 1
      },
      {
        src: "https://images.unsplash.com/photo-1550639264-38c3059c4620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        likes: 0,
        author_id: 0
      },
      {
        src: "https://images.unsplash.com/photo-1549945676-4fdf5f18a9fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        likes: 0,
        author_id: 2
      },
      {
        src: "https://images.unsplash.com/photo-1508662790687-257eefcdccfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        likes: 0,
        author_id: 3
      },
      {
        src: "https://images.unsplash.com/photo-1547974497-bb2a93b333ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        likes: 0,
        author_id: 3
      }
    ];
  }

  async get_imgs() {
    const response = await fetch( this.url + 'images');
    const data = await response.json();
    this.imgs = data;
    return this.imgs;
  }

  addLike(likes,src){
    const index =  this.imgs.findIndex(img=>img.src===src);
    this.imgs[index].likes++;
    fetch(this.url + 'images/like',{
      method:'PUT',
      headers:{'content-type':'json/application'},
      body:JSON.stringify({likes,src})
    })

  }

  get_Top3(): string[] {
    let newTop3 = this.imgs.slice(0).sort((a,b) => ( b.likes - a.likes)).slice(0,3).map(img => img.src);
    return newTop3;
  }

  get_imgs_by_author(id: number): string[] {
    let imgs_list = this.imgs.slice(0).filter(img => img.author_id===id).map(img => img.src);
    return imgs_list;
  }
}
