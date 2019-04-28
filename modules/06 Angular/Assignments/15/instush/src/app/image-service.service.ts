import { Injectable } from '@angular/core';
import {Image} from './image.model'
@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  images:Image[]
  constructor() { 

    this.images = [
      
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:0,authorNmae:"ron",authorId:"0",imagesList:["https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:1,authorNmae:"maya",authorId:"1",imagesList:["https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg"]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:2,authorNmae:"lior",authorId:"2",imagesList:["https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg","https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:3,authorNmae:"liran",authorId:"3",imagesList:["https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:4,authorNmae:"inbal",authorId:"4",imagesList:["https://www.w3schools.com/w3css/img_lights.jpg","https://www.w3schools.com/w3css/img_lights.jpg"]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:5,authorNmae:"inbar",authorId:"5",imagesList:["https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:6,authorNmae:"gaby",authorId:"6",imagesList:["https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg"]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:7,authorNmae:"daniel",authorId:"7",imagesList:["https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"]},
      {src:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",likeCount:0,id:8,authorNmae:"roy",authorId:"8",imagesList:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMOtYH9TDpYwg3BDYkEJyzqaiD-No1NwWuhI0hQOLBV59M2-8vg"]},
      
      
      ];
  }

  getImages():Image[]{
    return this.images;
  }

  

}
