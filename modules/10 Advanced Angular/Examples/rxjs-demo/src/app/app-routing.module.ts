import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HttpComponent } from './http/http.component';

const routes: Routes = [
  {path: 'book', component: HttpComponent},
  {path: 'book/:id', component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
