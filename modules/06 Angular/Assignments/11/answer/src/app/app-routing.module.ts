import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainFormComponent } from "./components/main-form/main-form.component";
import { ForgotPassComponent } from "./components/forgot-pass/forgot-pass.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";

const routes: Routes = [
  { path: '', component: MainFormComponent },
  { path: 'forgot-password', component: ForgotPassComponent},
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
