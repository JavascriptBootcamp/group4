import { Injectable } from '@angular/core';
import { Author } from './author';
import { Picture } from './picture';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  authors:Author[];
  constructor(){
    this.authors=[];
  }
  ngOnInit(){
    this.insertFakeData();
  }
  insertFakeData(){
    this.authors.push(new Author(this.createRandomImages(10),"Ofek",1111,"","",""));
    this.authors.push(new Author(this.createRandomImages(12),"Moshiko",2222,"","",""));
    this.authors.push(new Author(this.createRandomImages(14),"Shimon",3333,"","",""));
  }
  createRandomImages(amount:number){
    let random = Math.floor(Math.random() * Math.floor(100));
    let pictures:Picture[];
    for(let i=random; i<random+amount;i++){
      pictures.push(`https://picsum.photos/300/200?image=${i}`);
    }
    return pictures;
  }
  getAuthors(): Author[]{
    return this.authors;
  }
}
