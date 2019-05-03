import { Injectable } from '@angular/core';
import {PICTURES} from './mock-picture';
import { IPicture } from './ipicture';

@Injectable({
  providedIn: 'root'
})
export class PictureDataService {

  constructor() { }

  getPictures(): IPicture[]{
    return PICTURES;
  }
}
