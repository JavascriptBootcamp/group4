import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { IndexFormComponent } from './index-form/index-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'index-form', pathMatch: 'full' },
  { path: 'forgot-pass', component: ForgotPassComponent },
  { path: 'index-form', component: IndexFormComponent },
  { path: 'sign-up', component: SignUpComponent }
]


@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
