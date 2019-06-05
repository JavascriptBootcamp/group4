import { Injectable } from '@angular/core';
import IImgProps from './imgProps.model';

@Injectable({
  providedIn: 'root'
})
export class AppHelperService {

  constructor() {

  }

  getImgProperties(imgID : string){
    return JSON.parse(localStorage.getItem(imgID));
  }

  saveProperties(id : string, props : IImgProps){
    localStorage.setItem(id, JSON.stringify(props));
  }



}
