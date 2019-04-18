import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImagesListComponent } from './images-list/images-list.component';
import { AuthorComponent } from './author/author.component';
export const routs:Routes = [
  
  {path:'',component:ImagesListComponent,pathMatch:'full'},
  {path:'authors/:authorId',component:AuthorComponent}
  
  ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routs),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
