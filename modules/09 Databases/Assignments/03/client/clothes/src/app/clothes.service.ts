import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  port: number;
  baseUrl: string;

  constructor() {
    this.port = 5000;
    this.baseUrl = `http://localhost:${this.port}`
   }
   
  serverCall(action, inputs) {
    switch (action) {
      case "addShirt": {
        const size = inputs[0].nativeElement.value;
        const color = inputs[1].nativeElement.value;
        const fit = inputs[2].nativeElement.value;
        const price = inputs[3].nativeElement.value;
        const url = `${this.baseUrl}/shirt`;
        const body = {size, color, fit, price};
        const header = { method:"POST", headers: { "Content-Type": "application/json" } ,body:JSON.stringify(body) };
        return fetch(url,header);
      }

      case "getAllShirts": {
        const query = `/shirts`;
        const url = `${this.baseUrl}${query}`;
        return fetch(url);
      }

      case "getShirtByID": {
        const id = inputs[0].nativeElement.value;
        const query = `/shirt?id=${id}`;
        const url = `${this.baseUrl}${query}`;
        return fetch(url);
      }

      case "getShirtsByPriceRange": {
        const priceFrom = inputs[0].nativeElement.value;
        const priceTo = inputs[1].nativeElement.value;
        const query = `/shirts?priceFrom=${priceFrom}&priceTo=${priceTo}`;
        const url = `${this.baseUrl}${query}`;
        return fetch(url);
      }
      case "getColorsBySize": {
        const size = inputs[0].nativeElement.value;
        const query = `/shirts?size=${size}`;
        const url = `${this.baseUrl}${query}`;
        return fetch(url);
      }
      case "getSizeAndColorByFit": {
        const fit = inputs[0].nativeElement.value;
        const query = `/shirts?fit=${fit}`;
        const url = `${this.baseUrl}${query}`;
        return fetch(url);
      }
      case "getLessExpensiveShirt": {
        const id1 = inputs[0].nativeElement.value;
        const id2 = inputs[1].nativeElement.value;
        const query = `/shirt?id1=${id1}&id2=${id2}`;
        const url = `${this.baseUrl}${query}`;
        return fetch(url);
     }
    }
  }
}
