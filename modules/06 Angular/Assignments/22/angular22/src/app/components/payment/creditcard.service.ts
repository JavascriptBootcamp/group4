import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {

  constructor() { }
  diffNumbers(control: AbstractControl): { [key: string]: boolean } {
    let arrCard: string[] = control.value.split("");

    let isAllSame: boolean = true;
    if (arrCard.length) {
      isAllSame = arrCard.every((value, i, arr) => value === arr[0]);
    }
    if (isAllSame) {
      return { 'differentNumbers': true };
    }
    return null;
  }
  finalDigitOdd(control: AbstractControl): { [key: string]: boolean } {
    let finalDigit: number = Number(control.value.charAt(control.value.length - 1));
    if (!finalDigit) {
      finalDigit = 1;
    }

    if (finalDigit % 2 === 1) {
      return { 'finalDigitOdd': true };
    }
    return null;
  }
  sumGreater16(control: AbstractControl): { [key: string]: boolean } {
    let arrCard: string[] = control.value.split("");
    let sum: number = 0;

    if (arrCard.length) {
      arrCard.forEach(value => {
        sum += Number(value);
      });
    }

    if (sum <= 16) {
      return { 'sumGreater16': true };
    }

    return null;
  }
}