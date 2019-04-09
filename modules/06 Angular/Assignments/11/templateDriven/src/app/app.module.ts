
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
// import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ForgotPasswordComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }