import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
  validEmail:boolean;
  constructor() { 
    this.validEmail=false;
  }
 onSubmit(value:any){
   if(value.emaill===value.cemail){
    this.validEmail=true;
    console.log(this.validEmail)
   }else{
    this.validEmail=false;
    console.log(this.validEmail)
   }
 }
  ngOnInit() {
  }

}
