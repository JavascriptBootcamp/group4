import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }


  checkValues(v1:string,v2:string):boolean{
      return v1===v2;
  }


}
