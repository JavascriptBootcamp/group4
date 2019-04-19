import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from 'src/app/box/box.component';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes =[
  {path: 'author/:authorName', component: BoxComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(router),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
