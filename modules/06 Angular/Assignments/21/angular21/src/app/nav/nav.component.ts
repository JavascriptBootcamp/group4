import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    @ViewChild ('startFrom') startFrom:ElementRef;
  constructor(private router: Router ) { }

  ngOnInit() {
  }


  timer(){
    this.router.navigate(['/timer']);  
  }
  countDown(){
 //   this.router.navigate(['/countDown',this.startFrom.nativeElement.value]);  
      //clear the data after refresh ................
      this.router.navigate(['/countDown']);
  }

}
