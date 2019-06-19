import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  url: string;
  constructor() {
    this.url = 'http://localhost:5000/';
  }


  async getFiles(filesList: string[]) {
    const filesData = { files: filesList };
    const response = await fetch(this.url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filesData)
    })
    const data = await response.json();
    return data;
  }


}
