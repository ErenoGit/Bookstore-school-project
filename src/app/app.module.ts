import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationNavbarComponent } from './src/app/_components/application-navbar/application-navbar.component';
import { BooksListComponent } from './src/app/pages/books-list/books-list.component';
import { ContentTableComponent } from './src/app/pages/books-list/_components/content-table/content-table.component';
import { UsersListComponent } from './src/app/pages/users-list/users-list.component';
import { UsersListContentTableComponent } from './src/app/pages/users-list/_components/content-table/content-table.component';
import { UsersListMenuComponent } from './src/app/pages/users-list/_components/users-list-menu/users-list-menu.component';
import { AddUserModalComponent } from './src/app/pages/users-list/_components/add-user-modal/add-user-modal.component';
import { RemoveUserModalComponent } from './src/app/pages/users-list/_components/remove-user-modal/remove-user-modal.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { appReducers } from './src/app/store/reducer';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AddBookModalComponent } from './src/app/pages/books-list/_components/add-book-modal/add-book-modal.component';
import { RemoveBookModalComponent } from './src/app/pages/books-list/_components/remove-book-modal/remove-book-modal.component';
import { BooksListMenuComponent } from './src/app/pages/books-list/_components/books-list-menu/books-list-menu.component';
import { LoansListComponent } from './src/app/pages/loans-list/loans-list.component';
import { AddLoanModalComponent } from './src/app/pages/loans-list/_components/add-loan-modal/add-loan-modal.component';
import { RemoveLoanMenuComponent } from './src/app/pages/loans-list/_components/remove-loan-menu/remove-loan-menu.component';
import { RemoveLoanTableComponent } from './src/app/pages/loans-list/_components/remove-loan-table/remove-loan-table.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppLoaderComponent } from './src/app/_components/app-loader/app-loader.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [
    AppComponent,
    ApplicationNavbarComponent,
    BooksListComponent,
    ContentTableComponent,
    UsersListComponent,
    UsersListContentTableComponent,
    UsersListMenuComponent,
    AddUserModalComponent,
    RemoveUserModalComponent,
    AddBookModalComponent,
    RemoveBookModalComponent,
    BooksListMenuComponent,
    LoansListComponent,
    AddLoanModalComponent,
    RemoveLoanMenuComponent,
    RemoveLoanTableComponent,
    AppLoaderComponent
  ],
  imports: [
    ...materialModules,
    StoreModule.forRoot(appReducers, {}),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
