import { Injectable } from '@angular/core';
import IAuthor from './author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorInfoService {

  authorsInfo : any;
  constructor() {
    this.authorsInfo = {};
   }

   saveAuthorInfo(info : IAuthor){
     this.authorsInfo[info.ID] = info;
   }

   loadAuthorInfo(id : string){
     return this.authorsInfo[id];
   }
}
