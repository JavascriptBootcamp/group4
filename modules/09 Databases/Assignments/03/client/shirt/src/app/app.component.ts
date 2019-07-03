import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('id') id: ElementRef;
  @ViewChild('id2') id2: ElementRef;
  @ViewChild('id3') id3: ElementRef;
  @ViewChild('size') size: ElementRef;
  @ViewChild('size2') size2: ElementRef;
  @ViewChild('color') color: ElementRef;
  @ViewChild('fit') fit: ElementRef;
  @ViewChild('fit2') fit2: ElementRef;
  @ViewChild('price') price: ElementRef;
  @ViewChild('price2') price2: ElementRef;
  @ViewChild('price3') price3: ElementRef;
  msg1: any;
  msg2: any;
  msg3: any;
  msg4: any;
  msg5: any;
  msg6: any;

  constructor() {
    this.msg1 = "";
    this.msg2 = "";
    this.msg3 = "";
    this.msg4 = "";
    this.msg5 = "";
    this.msg6 = "";
  }

  async addShirt(e: Event) {
    e.preventDefault();
    const size = this.size.nativeElement.value, color = this.color.nativeElement.value, fit = this.fit.nativeElement.value, price = this.price.nativeElement.value;
    const res = await fetch('http://localhost:8000/shirt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ size, color, fit, price })
    });
    const data = await res.json();
    setInterval(() => {
      this.msg1 = "";
    }, 3000);
    this.msg1 = data.message;
  }

  async displayShirtById(e: Event) {
    e.preventDefault();
    const id = this.id.nativeElement.value;
    const res = await fetch('http://localhost:8000/shirt?id=' + id);
    const data = await res.json();
    this.msg2 = data.message;
  }

  async displayShirtByPriceRange(e: Event) {
    e.preventDefault();
    const fromprice = this.price2.nativeElement.value;
    const toprice = this.price3.nativeElement.value;
    const res = await fetch('http://localhost:8000/shirts?fromprice=' + fromprice + '&toprice=' + toprice);
    const data = await res.json();
    this.msg3 = data.message;
  }

  async displayShirtColorsBySize(e: Event) {
    e.preventDefault();
    const size = this.size2.nativeElement.value;
    const res = await fetch('http://localhost:8000/shirts?size=' + size);
    const data = await res.json();
    this.msg4 = data.message;
  }

  async displaySizedAndColorByFit(e: Event) {
    e.preventDefault();
    const fit = this.fit2.nativeElement.value;
    const res = await fetch('http://localhost:8000/shirts?fit=' + fit);
    const data = await res.json();
    this.msg5 = data.message;
  }

  async displayLessExpensiveShirt(e: Event) {
    e.preventDefault();
    const firstid = this.id2.nativeElement.value;
    const secondid = this.id3.nativeElement.value;
    const res = await fetch('http://localhost:8000/shirt?firstid=' + firstid + '&secondid=' + secondid);
    const data = await res.json();
    this.msg6 = data.message;
  }

  
}
