import { Injectable } from '@angular/core';
import {HOBBIES} from './mock-hobbies';
import {Observable ,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HobbieService {

  getHobbies(): Observable<string[]>{
    return of(HOBBIES);
  }
}
