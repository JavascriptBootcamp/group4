import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMaskCreditCard]'
})
export class MaskCreditCardDirective {
  isMasked: boolean;
  creditCardNumber: string;
  creditCardPrefix: string;

  constructor(private el: ElementRef) {
    this.creditCardNumber = "";
    this.creditCardPrefix = "4580";
  }

  @HostListener('keyup') mask() {
    const prefixLength = 4;
    const char = "*";

    let prefix;
    let masksNumber = 0;
    let currentValue = this.el.nativeElement.value;

    let lastChar = currentValue.slice(-1);

    if (currentValue.length >= prefixLength){
      prefix = currentValue.slice(0,prefixLength);
      if (prefix === this.creditCardPrefix) {
        this.creditCardNumber += lastChar;
        this.creditCardNumber = prefix + this.creditCardNumber;

        masksNumber = currentValue.length - prefix.length;
        this.el.nativeElement.value = prefix + char.repeat(masksNumber);
      }
    }
  }

}
