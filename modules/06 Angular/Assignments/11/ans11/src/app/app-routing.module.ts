import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {NavBarComponent} from './nav-bar/nav-bar.component'
import {ForgotPassComponent} from './forgot-pass/forgot-pass.component'
import {SignInComponent} from './sign-in/sign-in.component'
import {SignUpComponent} from './sign-up/sign-up.component'


const routes: Routes = [{path:'sign-in',component:SignInComponent},
                        {path:'sign-up',component:SignUpComponent},
                        {path:'forgot-pass',component:ForgotPassComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ForgotPassComponent,SignInComponent,SignUpComponent]
