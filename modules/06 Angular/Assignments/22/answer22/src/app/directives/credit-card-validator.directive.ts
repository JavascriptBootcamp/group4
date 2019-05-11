import { Directive } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';
import { CustomizedValidatorsService } from '../services/customized-validators.service';

@Directive({
  selector: '[appCreditCardValidator]',
  providers:  [{
    provide: NG_VALIDATORS,
    useExisting: CreditCardValidatorDirective,
    multi: true
  }]
})
export class CreditCardValidatorDirective implements Validator{

  constructor(private CustomizedValidators: CustomizedValidatorsService) { }

  validate(control:FormControl):{[key:string]:boolean}{
    if(this.CustomizedValidators.validateLength(control)===null){
      if(this.CustomizedValidators.areAllNumbers(control)===null){
        if(this.CustomizedValidators.validateSum(control)===null){
          if(this.CustomizedValidators.areAllDigitsTheSame(control)===null){
            if(this.CustomizedValidators.isLastDigitEven(control)===null){
              return null; //no errors at all
            }
            else{
              return this.CustomizedValidators.isLastDigitEven(control);
            }
          }
          else{
            return this.CustomizedValidators.areAllDigitsTheSame(control);
          }
        }
        else{
          return this.CustomizedValidators.validateSum(control);
        }
      }
      else{
        return this.CustomizedValidators.areAllNumbers(control);
      }
    }
    else{
      return this.CustomizedValidators.validateLength(control);
    }
  }
}
