import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;
  msg : string;
  constructor(private router: Router) {
    this.msg = "";
  }

  ngOnInit() {
  }
  async login(e: Event) {
    e.preventDefault();
    const username = this.username.nativeElement.value;
    const password = btoa(this.password.nativeElement.value);
    const res = await fetch('http://localhost:8000/admin?username=' + username + '&password=' + password);
    const data = await res.json();
    if (data.message) {
      this.router.navigate(['admin-area']);
    }
    else{
      this.msg = "wrong username or password..."
    }
  }
}
