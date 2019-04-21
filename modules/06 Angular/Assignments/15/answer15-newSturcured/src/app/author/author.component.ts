import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../author';
import { Picture } from '../picture';
import { GetDataService } from '../get-data.service';
import { PicturesComponent } from '../pictures/pictures.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  activatedRoute:ActivatedRoute;
  authorName:string;
  currentAuthor:Author;
  authors:Author[];
  pictures:Picture[];
  constructor(activatedRoute:ActivatedRoute,private dataService: GetDataService) {
    this.activatedRoute = activatedRoute;
   }

  ngOnInit() {
    this.authorName = this.activatedRoute.snapshot.params.authorName;
    this.getData();
    this.setCurrentAuthor();
    this.filterPicturesByAuthor();
  }

  getData():void{
    this.authors = this.dataService.getAuthors();
    this.pictures = this.dataService.getPictures();
  }
  setCurrentAuthor(){
    let i = 0;
    while(!(this.authorName===this.authors[i].authorName)){
      if(i<this.authors.length){
        i++;
      }
      else{
        console.log("no author found");
      }
    }
    this.currentAuthor=this.authors[i];
  }
  filterPicturesByAuthor():void{
    let arr = this.pictures;
    let newArr = arr.filter(picture=>picture.authorName===this.authorName)
    this.pictures = newArr;
  }

}
