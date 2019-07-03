import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  url: string;
  port: number;
  constructor() {
    this.port = 8000;
    this.url = `http//localhost:${this.port}`;
   }

  getData(input){

    fetch(this.url,)
  }
}


