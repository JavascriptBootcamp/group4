import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginInComponent } from './login-in/login-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
     {path: '' ,
      component: LoginInComponent
     },
     {path: 'login-in' ,
      component: LoginInComponent
     },
     {path: 'sign-up' ,
      component: SignUpComponent
     },
     {path: 'forgot-password' ,
      component: ForgotPasswordComponent
     },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
