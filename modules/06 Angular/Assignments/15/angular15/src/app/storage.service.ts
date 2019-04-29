import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  setLocalStorgae(name : string , data : any){
    localStorage.setItem("ins",JSON.stringify(data));
  }
  getLocalStorgae(name : string){
    return JSON.parse(localStorage.getItem(name))
  }
}
