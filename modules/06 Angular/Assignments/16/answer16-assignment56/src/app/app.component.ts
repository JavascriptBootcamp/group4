import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pictures:string[];
  selectedPicture:string;
  constructor(){
    this.pictures=[];
    this.selectedPicture="https://picsum.photos/300/200?image=10";
  }
  ngOnInit(){
    this.insertImagesToArray(20);
    this.checkLocalStorage();
  }
  checkLocalStorage(){
    if(localStorage.hasOwnProperty('src')){
      this.selectedPicture=localStorage.getItem('src');
    }
  }
  insertImagesToArray(amount:number){
    for(let i=10; i<amount+10;i++){
      this.pictures.push(`https://picsum.photos/300/200?image=${i}`);
    }
  }
  showThisImage(picture:string){
    this.selectedPicture = picture;
    this.insertToLocalStorage(picture);
  }
  insertToLocalStorage(src){
    localStorage.setItem('src', src);
  }
  nextPicture(){
    let indexString=this.selectedPicture.replace('https://picsum.photos/300/200?image=','');
    let index=parseInt(indexString,10);
    if(index===this.pictures.length+9){
      this.selectedPicture=`https://picsum.photos/300/200?image=${10}`;
    }
    else{
      this.selectedPicture=`https://picsum.photos/300/200?image=${index+1}`;
    }
    this.insertToLocalStorage(this.selectedPicture);
  }
  prevPicture(){
    let indexString=this.selectedPicture.replace('https://picsum.photos/300/200?image=','');
    let index=parseInt(indexString,10);
    if(index===10){
      this.selectedPicture=`https://picsum.photos/300/200?image=${this.pictures.length+9}`;
    }
    else{
      this.selectedPicture=`https://picsum.photos/300/200?image=${index-1}`;
    }
    this.insertToLocalStorage(this.selectedPicture);
  }
  // scrollLeft(){
  //   console.log("left");
  // }
  // scrollRightFun(scroller){
  //   scroller.scrollRight += 4;
  //   window.setTimeout(function() {
  //       this.scrollRightFun(scroller);
  //   }, 10);
  // }
}
