import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomizedValidatorsService {

  constructor() { }

  validateLength(control:FormControl):{[key:string]:boolean}{
    let value = control.value + '';
    if(value.length===16){
      return null;
    }
    else
      return {"lengthIsNot16":true};
  }
  areAllNumbers(control:FormControl):{[key:string]:boolean}{
    let value = control.value + '';
    let valuesAsArray = value.split("");
    if(valuesAsArray.every(function(currentValue){
      return !isNaN(Number(currentValue));
    })){
      return null;
    }
    else
      return {"notAllAreNumbers":true}
  }
  // isNumber(currentValue) {
  //   return !isNaN(currentValue);
  // }
  validateSum(control:FormControl):{[key:string]:boolean}{
    let value = control.value + '';
    let valuesAsArray = value.split("");
    let sumOfValues = 0;
    for(let i=0;i<valuesAsArray.length;i++){
      sumOfValues += Number(valuesAsArray[i]);
    }
    if(sumOfValues>=16){
      return null;
    }
    else
      return {"sumSmallerThan16":true}
  }
  areAllDigitsTheSame(control:FormControl):{[key:string]:boolean}{
    let value = control.value + '';
    let valuesAsArray = value.split("");
    if(valuesAsArray.every(function(element){
        return element === valuesAsArray[0];
    })){
      return {"allDigitAreTheSame":true}
    }
    else
      return null;
  }
  isLastDigitEven(control:FormControl):{[key:string]:boolean}{
    let value = control.value + '';
    let valuesAsArray = value.split("");
    if(Number(valuesAsArray[valuesAsArray.length - 1]) % 2 === 0)
      return null
    else
      return {"lastDigitNotEven":true}
  }
}
