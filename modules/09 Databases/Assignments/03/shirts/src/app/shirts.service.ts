import { Injectable } from '@angular/core';

interface Ishirt{
  id:string,
  size:string,
  color:string,
  fit:string,
  price:string,

}

@Injectable({
  providedIn: 'root'
})
export class ShirtsService {

  url: string;
  constructor() {
    this.url = "http://localhost:5000/";
  }

  addShirt(shirt:Ishirt){
    fetch(this.url + 'shirt',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(shirt)
    })
  }

  async getShirtById(id) {

    const response = await fetch(this.url + `shirt?id=${id}`);
    const data = response.json();
    return data;
  }

  async getShirtsByPriceRange(minPrice,maxPrice) {
    const response = await fetch(this.url + `shirts?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    const data = response.json();
    return data;
  }

  async getShirtsColorsBySize(size) {
    const response = await fetch(this.url + `shirts/colors?size=${size}`);
    const data = response.json();
    return data;
  }

  async getSizesAndColorsByFit(fit) {
    const response = await fetch(this.url + `shirts/sizes/colors?fit=${fit}`);
    const data = response.json();
    return data;
  }

  async getTheLessExpensiveShirt(firstId,secondId) {
    const response = await fetch(this.url + `shirt/${firstId}/${secondId}`);
    const data = response.json();
    return data;
  }


}
