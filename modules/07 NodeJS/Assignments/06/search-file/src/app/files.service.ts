import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  url:string;
  constructor() { 
    this.url = 'http://localhost:5000/';
  }

  
  async getFiles(fileName){

    const response = await fetch(this.url + fileName,{
      method:'post',
    })
    const data = await response.json();
    return data;
  }


}
