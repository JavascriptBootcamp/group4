import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  getImages(searchKey) {
    return fetch('http://localhost:5000?searchKey=' + searchKey).then( response => response.text())//{
      // response.text().then(data=>{
      //   const srcs = JSON.parse(data);
      //   let cards = [];
      //   for(var i=0;i<srcs.lengt;i++){
      //     const card = {content: srcs[i], selected: false, correct: false};
      //     cards.push(card);
      //   }

      // })
  //})
  }
}
