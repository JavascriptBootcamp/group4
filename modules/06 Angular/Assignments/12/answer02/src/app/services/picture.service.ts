import { Injectable } from '@angular/core';
import {IPicture} from '../interfaces/IPicture';
import {PicsDB} from '../mock-data/mock-picture';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  
  constructor() { 
    
  }

  getPictures():IPicture[]{
    return PicsDB;
 }
}
