import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private eventEmitter:EventEmitter<string>) { }
showImg(){

}
}


