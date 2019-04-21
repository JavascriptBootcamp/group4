import { Injectable } from '@angular/core';
import { Author } from './author';
import { Picture } from './picture';

@Injectable({
  providedIn: 'root'
})
export class GetDataService{
  authors:Author[];
  pictures:Picture[];
  constructor(){
    this.authors=[];
    this.pictures=[];
    this.insertFakeData();
  }

  insertFakeData(){
    this.authors.push(new Author("Ofek",1111,"../../assets/images/profile-placeholder.jpg","https://www.facebook.com/ofek.arbeli","this is a description of ofek, very intresting description, more and more text for testing"));
    this.authors.push(new Author("Moshiko",2222,"../../assets/images/profile-placeholder.jpg","https://www.facebook.com/ofek.arbeli","this is a description of moshiko, very intresting description, more and more and more and more text for testing"));
    this.authors.push(new Author("Shimon",3333,"../../assets/images/profile-placeholder.jpg","https://www.facebook.com/ofek.arbeli","this is a description of shimon, very intresting description, some text for testing"));
  
    for(let i=0;i<40;i++){
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