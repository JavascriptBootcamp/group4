import { Injectable } from '@angular/core';
import {IActor} from '../interfaces/Iactor';
import {ActorsDB} from '../mock-data/mock-actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  actors:IActor[];
  constructor() { 
    this.actors=this.getActors();
  }

  getActors():IActor[]{
    return ActorsDB;
  }
}
