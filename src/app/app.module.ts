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
import { ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule
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
    RemoveUserModalComponent
  ],
  imports: [
    ...materialModules,
    StoreModule.forRoot(appReducers, {}),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
