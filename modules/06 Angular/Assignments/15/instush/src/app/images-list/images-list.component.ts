import { Component, OnInit } from '@angular/core';
import {Image} from '../image.model'
@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {
  images:Image[];
  imageShowSrc:string;
  imageShowFlag:boolean;
  constructor() { 

    this.imageShowFlag = false;
    this.imageShowSrc = "";

    this.images = [
      
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:0,authorNmae:"ron",authorId:"0",imagesList:[""]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:1,authorNmae:"maya",authorId:"1",imagesList:[""]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:2,authorNmae:"lior",authorId:"2",imagesList:[""]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:3,authorNmae:"liran",authorId:"3",imagesList:[""]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:4,authorNmae:"inbal",authorId:"4",imagesList:[""]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:5,authorNmae:"inbar",authorId:"5",imagesList:[""]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:6,authorNmae:"gaby",authorId:"6",imagesList:[""]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:7,authorNmae:"daniel",authorId:"7",imagesList:[""]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:8,authorNmae:"roy",authorId:"8",imagesList:[""]},
      
      
      ]


  }


  
OnShowImage(image:Image){
  
    this.imageShowSrc = image.src;
    this.imageShowFlag = true;
  
  }
  
  OndontShowImage(){
    this.imageShowFlag = false;
  }

  ngOnInit() {
  }

}
