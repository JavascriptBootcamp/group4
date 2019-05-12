import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  f: FormGroup;
  constructor(builder: FormBuilder) { 
    this.f =  builder.group({
        cn: [
          "1111111111111166",
            [
              Validators.required,
              Validators.minLength(2)
            ]
        ],
        noc: [
          "foo", [
            Validators.required,
            Validators.minLength(2)
          ]
        ],
        exd: [
          ""
        ],
        sc: [
          "000", [
            Validators.required,
            Validators.maxLength(3)
          ]
        ]
      })
  }

  ngOnInit() {
  }

  onSubmit(){
    let url = 'http://localhost:3000/Order';
    let data = {"cardNumber" : this.f.get('cn'),
                "cardName" : this.f.get('cn'),
                "expiryDate" : this.f.get('exd'),
                "securityCode" : this.f.get('sc')
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

}

