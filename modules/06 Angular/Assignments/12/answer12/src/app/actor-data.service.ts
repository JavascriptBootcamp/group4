import { Injectable } from '@angular/core';
import { IActor } from './iactor';
import { ACTORS } from './mock-actor';

@Injectable({
  providedIn: 'root'
})
export class ActorDataService {

  constructor() { }

  getActors(): IActor[] {
    return ACTORS;
  }
}
