import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appPages } from './src/app/models/app-models';
import { BooksListComponent } from './src/app/pages/books-list/books-list.component';
import { LoansListComponent } from './src/app/pages/loans-list/loans-list.component';
import { UsersListComponent } from './src/app/pages/users-list/users-list.component';

const routes: Routes = [
  { path: appPages.usersList, component: UsersListComponent },
  { path: appPages.booksList, component: BooksListComponent },
  { path: appPages.loans, component: LoansListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
