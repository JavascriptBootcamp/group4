import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms'
import {FormService} from '../form.service'
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  totalPrice:string;
  form:FormGroup;
  submitClicked:boolean;
  constructor(private activatedRoute:ActivatedRoute,builder:FormBuilder,private formService:FormService) {
    this.activatedRoute = activatedRoute;
    this.totalPrice = this.activatedRoute.snapshot.params.price;
    this.submitClicked = false;
    this.form = builder.group({
      cardDetails:builder.group({
        cardNumber:[
          "",[
           Validators.required,
           this.validateCreditCard
          ]
        ],
        cardName:[
          "",[
            Validators.required
          ]
        ],
        date:[
          "",[
            Validators.required
          ]
        ],
        code:[
          "",[
            Validators.required,
            Validators.maxLength(3)
          ]
        ]
      })
    })
   }

   onSubmit(e,form,cardNumber){
     e.preventDefault();
     this.submitClicked = true;
     console.log(cardNumber);
     if(form.valid){
      this.formService.fetchFormFields('http://localhost:3000/Order',form.value.cardDetails)
     }
   } 



   validateCreditCard(control:FormControl) {
    let creditCardNumbers;
    let creditCardNumbersSum = 0;
    let creditCardWithNoDashes;

    creditCardWithNoDashes = control.value.split("-");
    creditCardWithNoDashes = creditCardWithNoDashes.join(""); 
    creditCardNumbers =  creditCardWithNoDashes.split("").map(Number);

    const checkLength = (creditCardWithNoDashes):boolean => {
        return (creditCardWithNoDashes.length == 16);
    }

    const checkAllItemsNumbers = (creditCardNumbers):boolean => {
        const isAllItemsNumbers = creditCardNumbers.every(function(element){
            creditCardNumbersSum += element;
            return (element >=0 && element <=9);
        });

        return isAllItemsNumbers;
    }

    const checkDigitsSum = ():boolean => {
        return (creditCardNumbersSum > 16);
    }

    const checkIfAllDigitsSame = (creditCardNumbers) :boolean => {
      const isAllDigitsSame = creditCardNumbers.every(function(element){
            return element === creditCardNumbers[0];
        });
        return !isAllDigitsSame;
    }

    const CheckLastDigitEven = (creditCardNumbers) :boolean =>  {
        return (creditCardNumbers[creditCardNumbers.length - 1] % 2 == 0)
    }

    if (checkLength(creditCardNumbers)){
        if (checkAllItemsNumbers(creditCardNumbers)){
            if (checkDigitsSum()){
                if (checkIfAllDigitsSame(creditCardNumbers)){
                    if (CheckLastDigitEven(creditCardNumbers)){
                       // return {'cardNumber_invalid' : false,'message':""}
                    }
                    else {
                        return {'cardNumber_invalid':true, 'message' :  "odd final number"}
                    }
                }
                else {
                    return {'cardNumber_invalid' : true, 'message' : "only one type of number"}
                }
            }
            else {
                return {'cardNumber_invalid' : true, 'message' : "sum less than 16"}
            }
        }
        else {
            return {'cardNumber_invalid' : true, 'message' : "invalid characters"}
        }
    }
    else {
        return {'cardNumber_invalid' : true, 'message' : "Credit Card Length Must Be 16 Digits"}
    }
}
  


  ngOnInit() {
  }

}