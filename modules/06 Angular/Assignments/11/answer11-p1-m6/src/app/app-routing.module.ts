import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginInComponent } from './login-in/login-in.component';

const routes: Routes = [
  {path :'',component:LoginInComponent,pathMatch: 'full'},
  {path:"login-in",component:LoginInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'forgot-password',component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
