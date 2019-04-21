import { Injectable, OnInit } from '@angular/core';
import { Author } from './author';
import { Picture } from './picture';

@Injectable({
  providedIn: 'root'
})
export class GetDataService implements OnInit{
  authors:Author[];
  pictures:Picture[];
  constructor(){
    this.authors=[];
    this.pictures=[];
  }
  ngOnInit(){
    this.insertFakeData();
  }
  insertFakeData(){
    this.authors.push(new Author("Ofek",1111,"","",""));
    this.authors.push(new Author("Moshiko",2222,"","",""));
    this.authors.push(new Author("Shimon",3333,"","",""));
  
    for(let i=0;i<40;i++);{
      let random = Math.floor(Math.random() * Math.floor(3));
      let author = this.authors[random];
      let picture = new Picture(this.createRandomImage(),author.authorName,author.ID);
      this.pictures.push(picture);
    }
  }
  createRandomImage(){
    let random = Math.floor(Math.random() * Math.floor(100));
    let url = `https://picsum.photos/300/200?image=${random}`;
    return url;
  }
  getAuthors(): Author[]{
    return this.authors;
  }
  getPictures(): Picture[]{
    return this.pictures;
  }
}
